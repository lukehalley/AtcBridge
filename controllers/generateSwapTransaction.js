/**
 * Generates an unsigned swap transaction
 * @param {Object} req - Express request with swap parameters
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
/**
 * Generates swap transaction
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Generated swap transaction
 */
/**
 * Generates a swap transaction for token exchange
 * @param {Object} swapParams - Swap transaction parameters
 * @returns {Object} Generated swap transaction
/**
 * Generate unsigned swap transaction
 * @param {Object} params - Swap parameters including tokens and amounts
 * @returns {Promise<Object>} Unsigned transaction data
 */
 */
import {Tokens, TokenSwap} from "@synapseprotocol/sdk";

/** Generates unsigned swap transaction with proper routing */
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
import {BigNumber} from "ethers";

/**
 * Generates unsigned swap transaction
 * @param {Object} params - Swap parameters (tokens, amount, slippage)
 * @returns {Promise<Object>} Transaction data ready for signing
 */
/**
 * @param {String} chain
 * @param {String} fromToken
 * @param {String} toToken
 * @param {String} amountIn
 *
 * @returns {number[]}
 */
async function generateSwapTransaction(chain, fromToken, toToken, amountIn) {
    try {
        const chainId = ChainUtils.getIdFromRequestQueryParam(chain)

        const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
        const fromTokenObj = Tokens[fromTokenSymbol]

        const toTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(toToken)
        const toTokenObj = Tokens[toTokenSymbol]

        const bigNumAmountIn = BigNumber.from(amountIn);

        let args = {
            chainId: chainId,
            tokenFrom: fromTokenObj,
            tokenTo: toTokenObj,
            amountIn: bigNumAmountIn,
        }

        let swapRate = await TokenSwap.calculateSwapRate(args);

        let swapTransaction = await TokenSwap.buildSwapTokensTransaction({
            minAmountOut: swapRate.amountOut,
            ...args,
        })

        return {
            allowanceTarget: fromTokenObj.addresses[chainId],
            minAmountOut: swapRate.amountOut.toString(),
            ...swapTransaction,
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { generateSwapTransaction };
