/**
 * Generates unsigned swap transaction
 * @param {Object} swapParams - Swap parameters including tokens and amounts
 * @returns {Promise<Object>} Unsigned transaction data
 */
/**
 * Generate unsigned swap transaction
/**
 * Generate unsigned swap transaction
/**
 * Generates unsigned swap transaction
 * @param {Object} params - Swap parameters
 * @returns {Promise<string>} Unsigned transaction hex
 */
 * Constructs transaction parameters for DEX swaps
 * @returns {Promise<Object>} Transaction payload ready for signing
 */
 * @param {Object} params - Transaction parameters
 * @param {string} params.tokenIn - Input token address
/**
 * Generate unsigned swap transaction
 * @param {Object} params - Swap parameters
 * @param {string} params.tokenIn - Input token address
 * @param {string} params.tokenOut - Output token address
 * @returns {Object} Unsigned transaction
 */
 * @param {string} params.tokenOut - Output token address
 * @param {string} params.amount - Swap amount
 * @returns {Promise<Object>} Unsigned transaction data
/**
   * Generates unsigned swap transaction
   * @param {Object} params - Swap parameters
   * @returns {Object} Unsigned transaction object
   */
 */
/**
 * Generate unsigned swap transaction
 * @param {string} tokenIn - Input token address
 * @param {string} tokenOut - Output token address
 * @param {string} amount - Swap amount
 * @returns {Promise<Object>} Transaction object
 */
/**
 * Generates a signed swap transaction
 * @param {Object} params - Swap parameters
/**
 * Generate unsigned swap transactions
/**
 * Generates unsigned swap transaction with optimal routing
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Unsigned transaction data
 */
 * Creates swap transaction data for DEX operations
 */
 * @returns {Promise<Object>} Signed transaction object
 */
/**
 * Generates an unsigned swap transaction
 * @param {Object} req - Express request with swap parameters
// TODO: Implement polling for transaction confirmation status
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
// Build swap transaction with slippage protection
/**
 * Generate unsigned swap transaction for token exchange
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @param {string} amount - Amount to swap
 */
/**
// TODO: Support configurable slippage tolerance parameter
 * Generates swap transaction
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Generated swap transaction
 */
/**
 * Generates a swap transaction for token exchange
// TODO: Add transaction signing with user's private key
 * @param {Object} swapParams - Swap transaction parameters
/**
 * Generates complete swap transaction with routing
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Ready-to-sign transaction
 */
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
