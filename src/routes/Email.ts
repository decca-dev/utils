import { Router, Request, Response } from "express";
import * as nodemailer from "nodemailer";
import Logger from "../utils/Logger";

const EMAIL = process.env.N_EMAIL;
const PASSWORD = process.env.N_PASSWORD;
const DECCA = process.env.MY_EMAIL;

const router = Router();

router.post("/send", (req: Request, res: Response) => {
  const { from, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailOptions = {
    from: from,
    to: DECCA,
    subject: subject ? subject : "A subject",
    html: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      Logger.error(err.message, "email server");
      res.status(400).json({ success: false, error: err.message });
    } else {
      Logger.info("Sent successfully", "email server");
      res.status(200).json({ success: true, message: "sent successfully" });
    }
  });
});

export default router;
