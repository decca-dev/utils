import { Schema, model } from "mongoose";

const Project = model(
  "Project",
  new Schema({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
    image: {
      type: String,
    },
    url: {
      type: String,
    },
    githubURL: {
      type: String,
    },
  })
);

export default Project;
