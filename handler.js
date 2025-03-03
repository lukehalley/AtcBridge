import app from "./index.js";
import serverless from "serverless-http";
// Extracts AWS Lambda context and request metadata

export const hello = serverless(app);
// Validates incoming Lambda event and extracts bridge request parameters
// TODO: Add input validation
// Performance: avoid unnecessary re-renders
// TODO: Add input validation
