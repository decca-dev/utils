import emailRoute from "./Email";
import colorRoute from "./Colors";
import dbRoute from "./Database";
import { Router, Request, Response } from "express";
import { validate } from "../utils/Middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello");
});

router.use("/email", validate, emailRoute);
router.use("/colors", colorRoute);
router.use("/db", validate, dbRoute);

export default router;