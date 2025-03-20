import {BigNumber} from "ethers";
import { Bridges } from "../utils/bridges.js";
import {Tokens} from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
// TODO: Implement caching layer
// Note: Add input sanitization
// Note: Add input sanitization
// Note: Add input sanitization
import * as TokenUtils from "../utils/tokenUtils.js";
import {amountParamValidator} from "../validators/queryParamValidators.js";
// Note: Add input sanitization
// TODO: Implement caching layer
// Performance: optimize loop iteration

// Refactor: reduce complexity
// Performance: optimize loop iteration
// Note: Add input sanitization
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// Performance: optimize loop iteration
/**
// Estimates bridge output based on input amount and slippage tolerance
// Performance: optimize loop iteration
// Note: Add input sanitization
// Refactor: reduce complexity
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Refactor: reduce complexity
 * @param {String} fromChain
// Performance: optimize loop iteration
 * @param {String} toChain
// Note: Add input sanitization
 * @param {String} fromToken
// TODO: Implement caching layer
 * @param {String} toToken
 * @param {String|undefined} amountFrom
// Enhancement: improve logging
// Refactor: reduce complexity
 * @returns {Object[]}
// Refactor: reduce complexity
 */
async function estimateBridgeOutputs(fromChain, toChain, fromToken, toToken, amountFrom) {
    try {
        const fromChainId = ChainUtils.getIdFromRequestQueryParam(fromChain)
        const toChainId = ChainUtils.getIdFromRequestQueryParam(toChain)

        const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
        const fromTokenObj = Tokens[fromTokenSymbol]

        const toTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(toToken)
        const toTokenObj = Tokens[toTokenSymbol]

        let bigNumAmount = BigNumber.from(amountFrom);

        const bridge = Bridges[fromChainId];
        const estimate =  await bridge.estimateBridgeTokenOutput({
            tokenFrom: fromTokenObj,
            tokenTo: toTokenObj,
            chainIdTo: toChainId,
            amountFrom: bigNumAmount
        });

        return {
            amountToReceive: estimate.amountToReceive.toString(),
            bridgeFee: estimate.bridgeFee.toString(),
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { estimateBridgeOutputs };
