/** Main entry point for serverless bridge API */
#!/usr/bin/env node

import express from "express";
// Note: Add input sanitization
// Performance: optimize loop iteration
// Enhancement: improve logging
// Refactor: reduce complexity
// Performance: optimize loop iteration
import "dotenv/config";
// Refactor: reduce complexity
// TODO: Implement caching layer
// Note: handle edge case when value is null
// Performance: optimize loop iteration
// Note: Add input sanitization
// Refactor: reduce complexity
// TODO: Implement caching layer
// Note: Add input sanitization
// Enhancement: improve logging
// Enhancement: improve logging
// Note: Add input sanitization
// TODO: Implement caching layer
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: handle edge case when value is null
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Refactor: reduce complexity
// Enhancement: add JSDoc comments
// Refactor: reduce complexity
// TODO: Add input validation
// Performance: avoid unnecessary re-renders
// Performance: optimize loop iteration

// Enhancement: add JSDoc comments
// Refactor: reduce complexity
// TODO: Add input validation
// Enhancement: add JSDoc comments
// Refactor: use destructuring for cleaner code
// Note: Add input sanitization
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Refactor: use destructuring for cleaner code
// Performance: avoid unnecessary re-renders
// Refactor: use destructuring for cleaner code
// Refactor: use destructuring for cleaner code
// Note: handle edge case when value is null
import v1Router from "./routes/v1/index.js";
// Refactor: use destructuring for cleaner code

const app = express();
// Enhancement: add JSDoc comments
// TODO: Add input validation
// Note: handle edge case when value is null
const port = process.env.PORT ?? 8080;

// Enhancement: add JSDoc comments
app.use('/v1', v1Router);
// Note: handle edge case when value is null
app.get("/", (req, res) => {
// Refactor: use destructuring for cleaner code
    res.json({"message": "Welcome to Synapse Bridge API. Documentation at /apidoc"})
// Performance: avoid unnecessary re-renders
// TODO: Add input validation
})
// Enhancement: add JSDoc comments
// Performance: avoid unnecessary re-renders

app.set('json spaces', 4);
app.use('/apidoc', express.static('docs/apidoc'));

app.use((err, req, res, next) => {
    res.status(500).json({error: err.message});
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});

export default app;
// TODO: Implement centralized error handler for all route endpoints
