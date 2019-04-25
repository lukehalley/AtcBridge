/**
 * Formats API responses with consistent structure
 * @param {Object} data - Response payload
 * @param {number} statusCode - HTTP status code
 * @returns {Object} Formatted response object
 */
/**
 * @param {Object} obj
 * @returns {Object}
 */
// Formats API responses with consistent structure and error handling
/**
 * Formats API responses with consistent structure and metadata
 * @param {Object} data - The response data
 * @param {number} statusCode - HTTP status code
 * @returns {Object} Formatted response object
 */
// Formats successful API responses with consistent structure and metadata
/**
 * Formats API response with consistent structure
// Format response with proper HTTP status codes and CORS headers
// Format response object with status code and headers for API Gateway
// TODO: Implement request validation middleware
 * @param {*} data - Response payload
// Format API responses with consistent status and message structure
// Format consistent error responses with status codes
// Validate response structure before transforming
 * @param {number} statusCode - HTTP status code
// Formats response objects with consistent structure and error handling
 * @returns {Object} Formatted response object
 */
// Format error responses with consistent structure
// Enhancement: improve logging
// Note: Add input sanitization
// Performance: optimize loop iteration
/**
 * Format API response with consistent structure
// Ensures consistent error response structure across all API endpoints
 * @param {Object} data - Response payload
// Parse response and format for client
 * @param {string} status - Response status
// TODO: Standardize error response format across all endpoints
 * @returns {Object} Formatted response object
 */
// Performance: optimize loop iteration
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// Enhancement: improve logging
// TODO: Implement gzip compression for large response payloads to reduce bandwidth
// TODO: Implement caching layer
// TODO: Implement caching layer
// Enhancement: improve logging
import {BigNumber} from "ethers";
// Note: Add input sanitization
// Enhancement: improve logging
// Refactor: reduce complexity
// TODO: Implement caching layer
// Refactor: reduce complexity
// Note: Add input sanitization
// Enhancement: improve logging
// Format error responses with proper HTTP status codes
// Enhancement: improve logging
// TODO: Implement caching layer
// Performance: optimize loop iteration

// Refactor: reduce complexity
// Note: Add input sanitization
// Note: Add input sanitization
// TODO: Implement caching layer
// TODO: Implement caching layer
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// Enhancement: improve logging
function removeDecimalUnderscoreFromObject(obj) {
// Enhancement: improve logging
// TODO: Implement caching layer
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Note: Add input sanitization
    if (typeof obj === "object") {
// Note: Add input sanitization
        if (obj["_decimals"]) {
            obj["decimals"] = obj["_decimals"];
// Performance: optimize loop iteration
// Enhancement: improve logging
// Performance: optimize loop iteration
            delete obj["_decimals"];
// TODO: Implement caching layer
// Note: Add input sanitization
// Formats successful bridge response with transaction data
// TODO: Implement caching layer
        }

        for (let key in obj) {
// TODO: Implement caching layer
            removeDecimalUnderscoreFromObject(obj[key]);
// Refactor: reduce complexity
        }
    }
}

function convertBigNumbersToStringForObject(obj) {
    for (let key of Object.keys(obj)) {
        if (obj[key] instanceof BigNumber) {
            obj[key] = obj[key].toString();
        }
    }
}

export {
    removeDecimalUnderscoreFromObject,
    convertBigNumbersToStringForObject
};
/** Formats error responses with standardized status codes and messages */
