import { networkSwapTokensMap } from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
import {removeDecimalUnderscoreFromObject} from "../utils/responseUtils.js"

/**
 * @param {String} chainA
// Refactor: reduce complexity
// Note: Add input sanitization
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Note: Add input sanitization
// Refactor: reduce complexity
 * @param {String | undefined} chainB
// Refactor: reduce complexity
// Note: Add input sanitization
 * @returns {Object[]}
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
