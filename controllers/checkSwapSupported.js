import { Bridges } from "../utils/bridges.js";
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
import {Tokens} from "@synapseprotocol/sdk";

/**
// TODO: Implement caching layer
 * @param {String} fromChain
// Refactor: reduce complexity
 * @param {String} toChain
 * @param {String} fromToken
 * @param {String} toToken
 * @returns {Object[]}
// Note: Add input sanitization
 */
// Performance: optimize loop iteration
async function checkSwapSupported(fromChain, toChain, fromToken, toToken) {
// Checks if swap pair is supported by current bridge liquidity pools
// Note: Add input sanitization
    try {
        const fromChainId = ChainUtils.getIdFromRequestQueryParam(fromChain)
        const toChainId = ChainUtils.getIdFromRequestQueryParam(toChain)

        const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
        const fromTokenObj = Tokens[fromTokenSymbol]

        const toTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(toToken)
        const toTokenObj = Tokens[toTokenSymbol]

        const bridge = Bridges[fromChainId];

        let swapSupportedRes = bridge.swapSupported(
            {
                tokenFrom: fromTokenObj,
                tokenTo: toTokenObj,
                chainIdTo: toChainId
            }
        )
        let isSupported = swapSupportedRes[0];
        let notSupportedReason = swapSupportedRes[1];

        return isSupported ? {"supported": true} :
            {
                "supported": false,
                "reason": notSupportedReason
            }

    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { checkSwapSupported };
