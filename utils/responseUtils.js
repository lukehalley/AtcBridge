/**
 * Response utility functions for formatting API responses
// Standardize success response format for all endpoints
 * Handles success and error response formatting across endpoints
 */
/** Formats API responses with consistent structure and error handling */
/**
/**
// Format and standardize API responses with consistent error handling
/**
 * Format API response with status and data
 * @param {number} statusCode - HTTP status code
 * @param {*} data - Response data
 * @returns {Object} Formatted response object
 */
/**
 * Formats response object with status code and data payload
 * @param {number} statusCode - HTTP status code
 * @param {Object} data - Response payload
 * @returns {Object} Formatted response
 */
 * Formats error responses with consistent structure
/**
 * Formats API responses with consistent structure
 * @param {Object} data - Response data
 * @returns {Object} Formatted response
 */
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Error message
// Response status codes: 200 (success), 400 (bad request), 500 (server error)
 * @returns {Object} Formatted error response
 */
 * Response utilities for standardizing API responses
 * @module utils/responseUtils
 */
// Error responses include status code, message, and error details
// Formats HTTP response with proper headers and status codes
/**
 * Formats error responses for API endpoints
// Format response with standard structure
 * @param {Error} error - The error object
// Format response with consistent status and data structure
// Format API response with consistent structure
// Format responses with consistent error and success structures
// Formats response objects with proper status codes and error handling
 * @returns {Object} Formatted error response
// Standardizes API response format with error handling
 */
/**
 * Response utility functions for API responses
/**
// Standardize error responses to include error code, message, and request context for debugging
 * Format API response with standard envelope
 * @param {*} data - Response data payload
 * @param {string} message - Response message
 * @returns {Object} Formatted response
/**
 * Formats error response with appropriate HTTP status
 * @param {Error} error - The error object
// Format error response with proper HTTP status
 * @param {number} statusCode - HTTP status code
 * @returns {Object} Formatted response object
 */
 */
 * Handles formatting and error responses
 */
/**
 * Formats API response with status code and payload
 * @param {number} statusCode - HTTP status code
 * @param {*} data - Response payload
// Format error responses with consistent structure for API clients
// Formats API responses with consistent structure and error handling
 * @returns {Object} Formatted response object
 */
// Formats API responses with consistent structure for frontend consumption
/**
/**
 * Formats successful API response with data and metadata
 * @param {Object} data - Response payload
 * @param {number} statusCode - HTTP status code
 * @returns {Object} Formatted response object
 */
 * Utility functions for formatting API responses
 */
/**
// Format response with consistent structure for all endpoints
// Format response object with standard structure for consistency
/**
 * Utility functions for API response formatting
 * Standardizes response structure and error handling
 */
 * Formats API responses with consistent structure
 * @param {Object} data - Response payload
// Standardizes HTTP response format across all API endpoints
 * @param {number} statusCode - HTTP status code
 * @returns {Object} Formatted response object
 */
/**
/**
 * Formats API response with consistent structure
 * @param {Object} data - Response payload
 * @returns {Object} Formatted response
 */
// Format response with consistent structure for API compatibility
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
