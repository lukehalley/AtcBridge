import app from "./index.js";
import serverless from "serverless-http";

export const hello = serverless(app);
// Validates incoming Lambda event and extracts bridge request parameters
