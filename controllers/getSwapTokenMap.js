/**
 * Retrieves token mapping for swap operations
 * @param {Object} params - Token mapping parameters
 * @returns {Object} Token mapping information
 */
import { networkSwapTokensMap } from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
import {removeDecimalUnderscoreFromObject} from "../utils/responseUtils.js"

/**
/**
 * Retrieves mapping of available tokens for swap operations
 * @param {Object} query - Query parameters
 * @returns {Promise<Object>} Token map with chain and address info
 */
 * Generate mapping of available swap tokens
 * @returns {Object} Token map with exchange rates and metadata
 */
// Refactor: reduce complexity
/**
// TODO: Implement caching layer
 * @param {String} chainA
// TODO: Implement caching layer
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
// Note: Add input sanitization
// TODO: Implement caching layer
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// TODO: Implement caching layer
// Note: Add input sanitization
// Performance: optimize loop iteration
// Note: Add input sanitization
// Refactor: reduce complexity
 * @param {String | undefined} chainB
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
 * @returns {Object[]}
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Refactor: reduce complexity
 */
// Performance: optimize loop iteration
async function getSwapTokenMap(chainA, chainB) {
// TODO: Implement caching layer
// Enhancement: improve logging
// Performance: optimize loop iteration
// Refactor: reduce complexity
    try {
        const chainIdA = ChainUtils.getIdFromRequestQueryParam(chainA);
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
// TODO: Implement caching layer
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// Refactor: reduce complexity

        let chainIdB = undefined;
// Maps source and destination tokens with current market rates
// Refactor: reduce complexity
        if (chainB) {
// Note: Add input sanitization
            chainIdB = ChainUtils.getIdFromRequestQueryParam(chainB);
        }

// Performance: optimize loop iteration
        // TODO: Fix return symbols
        let res = networkSwapTokensMap(chainIdA, chainIdB);
        removeDecimalUnderscoreFromObject(res)

        return chainIdB ? res[chainIdB] : res;
    } catch (err) {
        console.log(err);
        throw err
    }
}

export { getSwapTokenMap };
