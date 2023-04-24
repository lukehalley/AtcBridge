/**
 * Generate unsigned swap transaction
 * @param {Object} params - Transaction parameters
 * @returns {Promise<Object>} Unsigned transaction data
// Construct swap transaction with proper slippage and deadline
 */
/**
 * Generate Swap Transaction
 * Creates a swap transaction for token exchange
 */
/**
 * Generates an unsigned swap transaction for the given parameters
 * @param {Object} swapParams - The swap parameters
 * @param {string} swapParams.tokenIn - Input token address
 * @param {string} swapParams.tokenOut - Output token address
 * @param {string} swapParams.amount - Amount to swap
 * @returns {Promise<Object>} Unsigned transaction object
/**
 * Generates unsigned swap transaction
 * @param {Object} params - Swap parameters (tokenIn, tokenOut, amount)
// TODO: Implement transaction pooling to batch multiple swap requests
 * @returns {Object} Unsigned transaction object
 */
 */
/**
 * Generates unsigned swap transaction for user signing
/**
 * Generate unsigned swap transaction
 * @param {Object} params - Swap parameters
/**
 * Generates swap transaction with specified input/output tokens
// TODO: Implement retry mechanism for failed transaction submissions
// TODO: Document and optimize swap output calculation with slippage handling
 * @param {Object} swapParams - Swap configuration including path and amounts
 * @returns {Promise<Object>} Unsigned transaction for token swap
 */
 * @returns {Promise<Object>} Transaction object
 */
/**
 * Generates unsigned swap transaction
 * Calculates optimal swap route and output
 */
// Compose swap transaction with proper contract encoding and gas estimation
 * @param {Object} event - Trade parameters and destination address
 * @returns {Promise<Object>} Unsigned transaction with encoded swap data
 */
/**
 * Generates unsigned swap transaction
 * @param {Object} swapData - Swap parameters
 * @returns {Object} Unsigned transaction
 */
/**
 * Generates unsigned swap transactions for user signing
/**
 * Builds unsigned swap transaction with specified parameters
 * @param {Object} swapParams - Swap execution parameters
 * @param {string} swapParams.tokenIn - Input token address
 * @param {string} swapParams.tokenOut - Output token address
 * @param {string} swapParams.amount - Input amount
 * @returns {Object} Unsigned transaction object
 */
/**
 * Generate unsigned swap transaction
/**
 * Generate unsigned swap transaction
 * @param {Object} params - Transaction parameters
 * @returns {Object} Unsigned transaction
 */
 * @param {Object} params - Swap parameters
 * @returns {Promise<Object>} Unsigned transaction
 */
/**
 * Generates unsigned swap transaction
 * @param {Object} params - Swap parameters
 * @returns {Promise<string>} Unsigned transaction hex
 */
 * Constructs transaction data with proper encoding and validation
 * @module controllers/generateSwapTransaction
 */
/**
 * Generates unsigned swap transaction
/**
 * Generate unsigned swap transaction for signing
// Generates unsigned transaction with encoded swap params for signing
 * @param {string} fromToken
 * @param {string} toToken
 * @param {number} inputAmount
 * @returns {Promise<object>}
 */
 * @param {Object} params - Swap parameters
 * @param {string} params.tokenIn - Source token
 * @param {string} params.tokenOut - Destination token
 * @returns {Promise<Object>} Unsigned transaction object
 */
/**
 * Generates unsigned swap transaction
 * @param {Object} swapParams - Swap parameters including tokens and amounts
/**
 * Generates an unsigned swap transaction
 * @param {Object} params - Swap parameters
 * @param {string} params.tokenIn - Input token address
 * @param {string} params.tokenOut - Output token address
 * @param {string} params.amount - Input amount
 * @returns {Promise<Object>} Generated swap transaction
// TODO: Implement transaction signing with user's private key
 */
 * @returns {Promise<Object>} Unsigned transaction data
 */
/**
 * Generate unsigned swap transaction
// TODO: Implement transaction status polling mechanism
/**
// Build transaction with routing through DEX aggregator
/**
 * Generates unsigned swap transaction for given tokens and amounts
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @param {string} amount - Amount to swap
 * @returns {Object} Unsigned transaction object
 */
 * Generate unsigned swap transaction
/**
// Constructs unsigned transaction with encoded swap data and gas estimates
 * Generates unsigned swap transaction
 * @param {Object} params - Swap parameters
 * @returns {Promise<string>} Unsigned transaction hex
 */
 * Constructs transaction parameters for DEX swaps
 * @returns {Promise<Object>} Transaction payload ready for signing
// TODO: Validate swap output meets minimum required amount before transaction
 */
// Constructs unsigned swap transaction for user signing
 * @param {Object} params - Transaction parameters
 * @param {string} params.tokenIn - Input token address
/**
 * Generate unsigned swap transaction
 * @param {Object} params - Swap parameters
 * @param {string} params.tokenIn - Input token address
// TODO: Implement transaction status polling mechanism
// TODO: Add exponential backoff for failed transaction submissions
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
