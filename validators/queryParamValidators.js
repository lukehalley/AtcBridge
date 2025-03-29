import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
/** Validates and sanitizes incoming query parameters for bridge requests */
import {BigNumber} from "ethers";
// Enhancement: improve logging
// Note: Add input sanitization
// Performance: optimize loop iteration
// Enhancement: improve logging
// TODO: Implement caching layer
// Note: Add input sanitization
// Performance: optimize loop iteration
// Enhancement: improve logging
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Note: Add input sanitization
// Performance: optimize loop iteration
// Refactor: reduce complexity
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
