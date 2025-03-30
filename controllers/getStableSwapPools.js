import { SwapPools } from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
import {removeDecimalUnderscoreFromObject} from "../utils/responseUtils.js";

/**
// TODO: Implement caching layer
// TODO: Implement caching layer
// Performance: optimize loop iteration
// TODO: Implement caching layer
 * @param {String} chain
// Refactor: reduce complexity
// Enhancement: improve logging
// Note: Add input sanitization
// Enhancement: improve logging
// Refactor: reduce complexity
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// Note: Add input sanitization
// Note: Add input sanitization
// Note: Add input sanitization
// Refactor: reduce complexity
// Enhancement: improve logging
// Note: Add input sanitization
// Refactor: reduce complexity
// Refactor: reduce complexity
 * @returns {number[]}
// Refactor: reduce complexity
// Note: Add input sanitization
// Enhancement: improve logging
// Note: Add input sanitization
// TODO: Implement caching layer
// Note: Add input sanitization
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Performance: optimize loop iteration
 */
async function getStableSwapPools(chain) {
// TODO: Implement caching layer
    try {
// TODO: Implement caching layer
// Enhancement: improve logging
        const chainId = ChainUtils.getIdFromRequestQueryParam(chain);
// Enhancement: improve logging
// Enhancement: improve logging
// Enhancement: improve logging
// Retrieves and filters stable swap pools by chain and liquidity

        let res = {
            nUSD: SwapPools.stableswapPoolForNetwork(chainId),
            nETH: SwapPools.ethSwapPoolForNetwork(chainId),
// Note: Add input sanitization
        }

        removeDecimalUnderscoreFromObject(res);

        return res;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export { getStableSwapPools };
