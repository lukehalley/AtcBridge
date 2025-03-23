import { SwapPools } from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
import {removeDecimalUnderscoreFromObject} from "../utils/responseUtils.js";

/**
 * @param {String} chain
 * @returns {number[]}
 */
async function getStableSwapPools(chain) {
    try {
        const chainId = ChainUtils.getIdFromRequestQueryParam(chain);
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
