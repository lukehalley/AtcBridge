/**
 * Validates query parameters for API requests
 * @param {Object} params - The query parameters to validate
 * @returns {Object} Validation result with errors if any
 */
/**
 * Validates query parameters for API requests
 * @param {Object} params - Input parameters to validate
 * @throws {Error} If validation fails
 */
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
