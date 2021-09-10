import { Router, Request, Response } from "express";
import Project from "../models/Project";

const validQueries = ["Project"];

const router = Router();

router.get("/db/:query", async (req: Request, res: Response) => {
  const { query } = req.params;

  if (!query)
    return res
      .status(400)
      .json({ success: false, error: "Missing query param" });

  if (
    !validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1)))
  )
    return res
      .status(400)
      .json({ success: false, error: "Invalid query param" });

  switch (query) {
    case validQueries[0]:
      const { type } = req.query;
      const validTypes = ["project", "contribution"];
      let projects: any[] = [];
      if (!type || !validTypes.includes(type as string)) {
        projects.concat(await Project.find());
      } else {
        projects.concat(await Project.find({ type: type }));
      }
      res.status(200).json({ success: true, data: projects });
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
});

router.post("/db/:query", async (req: Request, res: Response) => {
  const { query } = req.params;

  if (!query)
    return res
      .status(400)
      .json({ success: false, error: "Missing query param" });

  if (
    !validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1)))
  )
    return res
      .status(400)
      .json({ success: false, error: "Invalid query param" });

  switch (query) {
    case validQueries[0]:
      try {
        const { name, description, type, image, url, githubURL } = req.body;
        const project = new Project({
          name: name,
          description: description,
          type: type,
          image: image,
          url: url ? url : "None",
          githubURL: githubURL,
        });
        res.status(200).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
});

router.delete("/db/:query", async (req: Request, res: Response) => {
  const { query } = req.params;

  if (!query)
    return res
      .status(400)
      .json({ success: false, error: "Missing query param" });

  if (
    !validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1)))
  )
    return res
      .status(400)
      .json({ success: false, error: "Invalid query param" });

  switch (query) {
    case validQueries[0]:
      try {
        const { name } = req.body;
        const project = await Project.findOneAndDelete({ name: name });
        if (!project) {
          res.status(400).json({ success: false, error: "Project not found" });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
});

router.put("/db/:query", async (req: Request, res: Response) => {
  const { query } = req.params;

  if (!query)
    return res
      .status(400)
      .json({ success: false, error: "Missing query param" });

  if (
    !validQueries.includes(query.charAt(0).toUpperCase().concat(query.slice(1)))
  )
    return res
      .status(400)
      .json({ success: false, error: "Invalid query param" });

  switch (query) {
    case validQueries[0]:
      try {
        const { name, description, type, image, url, githubURL } = req.body;
        const project: any = await Project.findOne({ name: name });
        if (!project) {
          res.status(400).json({ success: false, error: "Project not found" });
        }
        if (name) project.name = name;
        if (description) project.description = description;
        if (type) project.type = type;
        if (image) project.image = image;
        if (url) project.url = url;
        if (githubURL) project.githubURL = githubURL;
        await project.save();
        res.status(200).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
});

export default router;
