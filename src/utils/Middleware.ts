import type { Request, Response } from "express";

export const validate = (req: Request, res: Response, next: any) => {
  const { auth } = req.headers;

  if (!auth) {
    return res
      .status(401)
      .json({ success: false, error: "Missing auth header" });
  } else if (auth !== process.env.KEY) {
    return res
      .status(403)
      .json({ success: false, error: "Invalid auth header" });
  } else {
    next();
  }
};
