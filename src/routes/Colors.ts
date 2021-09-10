import { Router, Request, Response } from "express";
import getColors from "get-image-colors";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { image } = req.body;

  if (!image)
    return res.status(400).json({ success: false, error: "Missing image" });

  const Colors: any[] = [];

  getColors(image).then((colors) => {
    colors.map((color) => {
      Colors.push(color.hex());
    });
    res.status(200).json({ success: true, data: Colors });
  });
});

export default router;
