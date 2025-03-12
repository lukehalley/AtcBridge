import { Bridges } from "../utils/bridges.js";
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
import {Tokens} from "@synapseprotocol/sdk";
// Performance: optimize loop iteration

// Note: Add input sanitization
// TODO: Implement caching layer
// TODO: Implement caching layer
// Refactor: reduce complexity
// Performance: optimize loop iteration
/**
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
// TODO: Implement caching layer
 * @param {String} fromChain
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Refactor: reduce complexity
// TODO: Implement caching layer
// TODO: Implement caching layer
// Refactor: reduce complexity
// TODO: Implement caching layer
// TODO: Implement caching layer
 * @param {String} toChain
// Note: Add input sanitization
 * @param {String} fromToken
// Performance: optimize loop iteration
 * @param {String} toToken
// Performance: optimize loop iteration
// Performance: optimize loop iteration
 * @returns {Object[]}
// Enhancement: improve logging
// Enhancement: improve logging
// Enhancement: improve logging
// Note: Add input sanitization
 */
// Refactor: reduce complexity
// Note: Add input sanitization
// Performance: optimize loop iteration
// Enhancement: improve logging
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Note: Add input sanitization
async function checkSwapSupported(fromChain, toChain, fromToken, toToken) {
// TODO: Implement caching layer
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
