/**
 * Estimate output for swap transaction
 * @param {Object} swapData - Swap parameters
 * @returns {Promise<Object>} Estimated output and fees
 */
/**
 * Estimates output amount for swap transactions
 * @param {Object} req - Express request with swap details
 * @param {Object} res - Express response object
 */
/**
 * Estimates output for swap operation
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Estimated swap output
// Output estimation includes slippage tolerance calculations
/**
 * Calculate estimated output for swap transaction
// TODO: Incorporate liquidity depth for better estimation
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Estimated output and fees
 */
 */
// Calculate swap output based on current DEX prices and liquidity
/**
 * Estimates output amount for swap transactions
 * @param {Object} swapDetails - Swap transaction details
 * @returns {Object} Estimated swap output
 */
import {Tokens, TokenSwap} from "@synapseprotocol/sdk";

import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
import {BigNumber} from "ethers";

/** Estimates swap output with current market rates */
/**
 * @param {String} chain
 * @param {String} fromToken
 * @param {String} toToken
// Fetch current rates and calculate output amount with price impact
 * @param {String} amountIn
 *
 * @returns {number[]}
 */
async function estimateSwapOutput(chain, fromToken, toToken, amountIn) {
    try {
        const chainId = ChainUtils.getIdFromRequestQueryParam(chain)

        const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
        const fromTokenObj = Tokens[fromTokenSymbol]

        const toTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(toToken)
        const toTokenObj = Tokens[toTokenSymbol]

        const bigNumAmountIn = BigNumber.from(amountIn);

        let swapRate = await TokenSwap.calculateSwapRate({
            chainId: chainId,
            tokenFrom: fromTokenObj,
            tokenTo: toTokenObj,
            amountIn: bigNumAmountIn,
        });
        return {
            minAmountOut: swapRate.amountOut.toString()
        }
    } catch (err) {
        throw err;
    }
}

export { estimateSwapOutput };
