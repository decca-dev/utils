import emailRoute from "./Email";
import colorRoute from "./Colors";
import dbRoute from "./Database";
import { Router, Request, Response } from "express";
import { validate } from "../utils/Middleware";

const router = Router();

router.use("/email", validate, emailRoute);
router.use("/colors", validate, colorRoute);
router.use("/db", dbRoute);

export default router;
