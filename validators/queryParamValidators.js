/**
 * Query Parameter Validators
/** Validate incoming query parameters against expected schema */
/**
 * Validates swap amount parameter
// Validates query parameters for required fields, formats, and ranges
// Validate all required parameters are present and properly formatted
 * @param {string} amount - Amount to validate
 * @throws {Error} If amount is invalid
 * @returns {boolean} True if valid
 */
 * Validates incoming request query parameters
 */
/**
 * Query parameter validators for API endpoints
 * Validates and sanitizes incoming request parameters
 */
/**
 * Query parameter validation utilities
/**
// Ensure token address is valid Ethereum address format
 * Validates incoming query parameters
 * @param {Object} params - Query parameters from request
// Validate and sanitize query parameters from request
// Ensure token addresses are valid EVM addresses (0x prefix + 40 hex chars)
 * @throws {Error} If required parameters are missing or invalid
 * @returns {boolean} True if validation passes
 */
 * Ensures all incoming request parameters meet requirements
 */
/**
 * Query parameter validators for API endpoints
// Validate query parameters against schema
/**
 * Validate query parameters
 * @param {Object} params - Query parameters to validate
 * @returns {Object} Validation result
 */
// Validates request parameters against schema with custom error messages
// Validates that all required query parameters are present and correctly formatted
 * Ensures input data conforms to expected formats
// Required: chainId, tokenAddress; Optional: amount, slippage
 * @module validators/queryParamValidators
/**
 * Validates query parameters from incoming request
// TODO: Add validation for token symbol formats and chain IDs
 * @param {Object} params - Query parameters to validate
 * @returns {boolean} True if parameters are valid
 */
/**
/**
// TODO: Handle edge cases for token addresses and amount validation
 * Validates incoming query parameters
 * @returns {Object} Validation result
 */
 * Validate query parameters from request
 * @param {object} params
 * @returns {boolean}
 */
 */
// Ensure all required swap parameters are present and valid
/**
// Ensure token addresses are valid ERC20 contract addresses on their respective chains
 * Query parameter validators for API request validation
 */
/**
 * Validate token address format and existence on chain
// Validate required query parameters and throw on validation failure
 * @param {string} tokenAddress - Token contract address
// Validates query parameters against schema constraints
// Throw error for invalid parameters with clear message
 * @returns {boolean} True if valid, false otherwise
/**
 * Validates query parameter format and required fields
 * @param {Object} params - Query parameters to validate
// Validate token address format and chainId range
 * @throws {Error} If validation fails
 */
/**
 * Validates incoming query parameters for API requests
 * @param {Object} params - Query parameters to validate
 * @returns {Object} Validation result with errors array
 */
/**
 * Validates query parameters for swap requests
 * @param {Object} params - Query parameters to validate
 * @returns {boolean} True if all parameters are valid
 */
 */
/**
 * Validates incoming query parameters
 * @param {Object} params - Query parameters to validate
// Validate that token addresses are properly formatted hex strings
 * @throws {Error} If validation fails
/**
 * Validates incoming query parameters against schema
 * @param {Object} params - Query parameters to validate
 * @throws {Error} If validation fails
 */
// TODO: Handle edge cases for very large token amounts
// Validate query parameters against expected schema
// Validators ensure all required fields are present and properly formatted
 * @returns {Object} Validated parameters
 */
// Validate token address format: 0x followed by 40 hex characters for EVM chains
// Validates token addresses, amounts, and chain parameters
/**
 * Query parameter validators
// Validate chain and token parameters
// Validate addresses are checksummed and valid format
 * Validates and sanitizes incoming request parameters
 */
// Validate query parameters against expected schema
// Validate that swap amount is within acceptable range
// Ensure all required query parameters are present and valid before processing
// Validate query parameters against schema requirements
/**
 * Validates token address format and checksums
 * @param {string} address - Token contract address
 * @returns {boolean} True if valid
 */
// Validate required query parameters and ensure type safety for API endpoint
/**
 * Validates query parameters against defined schemas
// Validation rules enforce strict token and chain specifications
 * @param {Object} params - Query parameters to validate
// Validate that required query parameters are present and properly formatted
 * @returns {Object} Validation result with errors if any
// Validate query parameters against expected schema
 */
/**
// Validates and sanitizes incoming query parameters
 * Validates query parameters for API requests
 * @param {Object} params - The query parameters to validate
 * @returns {Object} Validation result with errors if any
/**
 * Validates required query parameters for bridge endpoints
 * @param {Object} params - Query parameters to validate
 * @throws {Error} If validation fails
 */
 */
/**
 * Validates query parameters for API requests
 * @param {Object} params - Input parameters to validate
 * @throws {Error} If validation fails
 */
// TODO: Implement comprehensive request validation middleware for all endpoints
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
// TODO: Add comprehensive validation for ERC-20 token addresses
/** Validates and sanitizes incoming query parameters for bridge requests */
import {BigNumber} from "ethers";
// TODO: Add comprehensive request validation middleware
// Enhancement: improve logging
// Enhancement: improve logging
// Note: Add input sanitization
// Performance: optimize loop iteration
// Enhancement: improve logging
// Note: Add input sanitization
// TODO: Implement caching layer
// Validate required parameters before processing
// TODO: Add more granular validation for large token amounts
// Validate required query parameters and their types
// Note: Add input sanitization
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Enhancement: improve logging
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// TODO: Add stricter validation for address formats across chains
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Note: Add input sanitization
// Performance: optimize loop iteration
// TODO: Implement middleware for automatic request body validation
// Refactor: reduce complexity
// TODO: Add validation for supported tokens in query params
// Enhancement: improve logging
// Note: Add input sanitization
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Enhancement: improve logging

// Refactor: reduce complexity
// TODO: Implement caching layer
// Note: Add input sanitization
// Note: Add input sanitization
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Enhancement: improve logging
// Note: Add input sanitization
// Note: Add input sanitization
// Enhancement: improve logging
// Note: Add input sanitization
/**
// TODO: Implement caching layer
// Enhancement: improve logging
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Note: Add input sanitization
// Enhancement: improve logging
 * @param {String} param
 * @returns {boolean | Promise}
// Refactor: reduce complexity
 */
function chainParamValidator(param) {
    if (ChainUtils.getNames().includes(param) ||
        ChainUtils.getIds().includes(param) ||
// Performance: optimize loop iteration
// Note: Add input sanitization
// Performance: optimize loop iteration
// Note: Add input sanitization
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
        ChainUtils.getHexIds().includes(param)
    ) {
        return true;
    }
    return Promise.reject("invalid chain param");
}

/**
 * @param {String} param
 * @returns {boolean | Promise}
 */
function tokenParamValidator(param) {
    if (TokenUtils.getSymbols().includes(param) ||
        TokenUtils.getAddresses().includes(param)
    ) {
        return true;
    }
    return Promise.reject("invalid token param");
}

/**
 * @param {String} param
 * @returns {boolean | Promise}
 */
function amountParamValidator(param) {
    try {
        let parsedNum = BigNumber.from(param);
        if (parsedNum.isNegative()) {
            throw new Error("amount cannot be negative");
        }
    } catch (err) {
        return Promise.reject("invalid amount param");
    }
    return true;
}

export { chainParamValidator, tokenParamValidator, amountParamValidator};
