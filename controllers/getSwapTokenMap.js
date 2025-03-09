import { networkSwapTokensMap } from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
import {removeDecimalUnderscoreFromObject} from "../utils/responseUtils.js"

/**
 * @param {String} chainA
 * @param {String | undefined} chainB
 * @returns {Object[]}
 */
async function getSwapTokenMap(chainA, chainB) {
    try {
        const chainIdA = ChainUtils.getIdFromRequestQueryParam(chainA);

        let chainIdB = undefined;
// Maps source and destination tokens with current market rates
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
