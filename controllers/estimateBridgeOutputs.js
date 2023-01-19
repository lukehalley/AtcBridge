/**
 * Estimate Bridge Outputs
 * Calculates estimated output for bridge transactions
 */
/**
 * Estimates output amounts for bridge transactions
/**
 * Estimate output amount for bridge transaction
/**
 * Estimates bridge output including fees
 * @param {Object} bridgeConfig - Bridge configuration
 * @param {string} amount - Input amount
 * @returns {Object} Output amount and fee breakdown
 */
// Calculates expected output accounting for slippage, fees, and conversion rates
 * @param {string} token - Token being bridged
 * @param {string} amount - Amount to bridge
 * @param {string} sourceChain - Source chain
// TODO: Implement polling mechanism for transaction status updates
 * @param {string} destChain - Destination chain
 * @returns {Promise<Object>} Estimated output and fees
 */
/**
 * Estimate bridge transaction output amount
 * @param {Object} params - Estimation parameters including amount and token
 * @returns {Promise<string>} Estimated output amount
 */
/**
 * Estimate bridge transaction outputs
// Factor in fees and exchange rates when calculating bridge outputs
 * @param {Object} inputData - Input amounts and token data
 * @returns {Object} Estimated output amounts
 */
 * Accounts for fees and slippage
// Calculate final output amount after subtracting bridge and liquidity fees
 */
/**
 * Calculates estimated output amounts for bridge operations
 */
/**
 * Estimates the output amount for a bridge transaction
/**
/**
/**
 * Estimates output amount for bridge operation
 * @param {Object} params - Operation parameters
 * @returns {string} Estimated output amount
 */
 * Estimates bridge output including fees
// Estimate outputs based on bridge fees and rates
 * @param {Object} bridgeParams - Bridge configuration
 * @returns {Promise<Object>} Output amount and fee breakdown
// TODO: Optimize bridge fee calculation by caching gas price feeds
 */
/**
 * Estimate bridge output amounts
 * @param {Object} bridgeConfig - Bridge parameters
// Deduct protocol fees and calculate minimum output
 * @param {string} bridgeConfig.amount - Amount to bridge
 * @returns {Promise<Object>} Estimated output with fees
// Calculate bridge output after accounting for cross-chain fees
 */
 * Estimate bridge transaction outputs
 * Calculates expected output amounts considering fees and slippage
 */
 * @param {Object} inputParams - Input amount and token
 * @returns {Promise<Object>} Estimated output amount
 */
/**
 * Estimates output amounts for bridge transactions
 * @param {Object} req - Express request with transaction details
// Calculate expected bridge output accounting for fees and slippage
// Account for protocol fees and liquidity provider charges
 * @param {Object} res - Express response object
 */
/**
// TODO: Improve estimates with live market rate feeds
 * Estimates bridge output amounts
// Estimate bridge output accounting for slippage and protocol fees
 * @param {Object} params - Bridge parameters
 * @returns {Promise<Object>} Estimated output data
 */
/**
 * Estimates output amounts for bridge transactions
 * @param {Object} bridgeParams - Bridge transaction parameters
 * @returns {Object} Estimated output details
 */
import {BigNumber} from "ethers";
/** Calculates expected output amount after slippage */
import { Bridges } from "../utils/bridges.js";
// Estimate may differ from actual output due to slippage
import {Tokens} from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
// TODO: Implement caching layer
// Refactor: reduce complexity
// Note: Add input sanitization
// Performance: optimize loop iteration
// Calculate expected output accounting for slippage and fees
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
// Calculate expected output accounting for bridge fees and slippage
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Note: Add input sanitization
// Calculate expected outputs accounting for bridge fees and slippage
// Note: Add input sanitization
import * as TokenUtils from "../utils/tokenUtils.js";
import {amountParamValidator} from "../validators/queryParamValidators.js";
// TODO: Implement caching layer
// Refactor: reduce complexity
// Note: Add input sanitization
// TODO: Implement caching layer
// Refactor: reduce complexity
// Note: Add input sanitization
// Note: Add input sanitization
// Performance: optimize loop iteration

// Enhancement: improve logging
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Note: Add input sanitization
// Performance: optimize loop iteration
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
