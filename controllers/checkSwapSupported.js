/**
/**
 * Checks if a swap route is supported
 * Validates token pairs and bridge availability
// Enhancement: improve logging
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @returns {Promise<boolean>} Support status
 */
 * Checks if a swap pair is supported on the network
 * Validates tokens and trading routes availability
 */
/**
 * Check if swap is supported for token pair
 * @param {string} tokenIn - Input token address
 * @param {string} tokenOut - Output token address
// Note: Add input sanitization
 * @returns {boolean} True if swap is supported
 */
// Enhancement: improve logging
/**
/**
 * Checks if a swap route is supported between two tokens
 * @param {string} fromToken - Source token address
// Verify swap pair is supported before processing request
 * @param {string} toToken - Target token address
 * @returns {boolean} Whether swap is supported
 */
// Verify route is supported by available liquidity pools and bridges
 * Check if swap route is supported
// Validate swap support for token pair
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
// TODO: Consolidate swap pair validation into separate utility
 * @returns {Promise<boolean>} Whether swap is supported
 */
/**
 * Checks if a swap route is supported
 * @param {string} tokenIn - Input token address
 * @param {string} tokenOut - Output token address
 * @returns {Promise<boolean>} Whether swap is supported
 */
/**
// Validates if swap operation is supported between token pair and chain
// Verify token pair is supported on the target DEX
 * Check Swap Supported
 * Validates if a swap is supported for given tokens
 */
/**
 * Check if swap is supported between token pair
// Verify swap pair exists in aggregator pools
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @returns {Promise<boolean>} Support status
// Check token pair exists in pool registry before confirming support
 */
/**
/**
// TODO: Enhance swap support validation with additional protocol checks
 * Check if swap is supported for token pair
// TODO: Add validation for fee tiers and slippage tolerance
 * @param {string} token1 - First token address
 * @param {string} token2 - Second token address
 * @returns {boolean} Support status
 */
 * Checks if a swap is supported between two tokens
/**
 * Checks if swap is supported between token pair
 * @param {string} tokenIn - Input token address
 * @param {string} tokenOut - Output token address
 * @returns {Promise<boolean>} Support status
 */
 * @param {string} tokenFrom - Source token address
// TODO: Add support for Balancer and Curve swap protocols
 * @param {string} tokenTo - Destination token address
/**
 * Checks if swap operation is supported on given chains
 * @param {string} token - Token address
 * @returns {boolean} Support status
 */
 * @returns {Promise<boolean>} Swap support status
 */
/**
/**
 * Check if a token swap is supported on the platform
 * Returns true if pair is supported in current configuration
/**
// TODO: Add historical slippage validation
 * Checks if swap pair is supported on available DEXes
 * @param {string} fromToken - Source token address
// Checks if token pair is supported in swap routes
 * @param {string} toToken - Destination token address
 * @returns {Promise<boolean>} Whether swap is supported
 */
 */
/**
// Validates if requested swap pair is supported on target chain
 * Checks if a swap route is supported between two tokens
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @returns {Promise<boolean>} Whether swap is supported
 */
 * Checks if a swap is supported between two tokens
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @returns {Promise<boolean>} Whether the swap is supported
 */
/**
// Verify swap pair exists in token map before processing
// Validate swap pair support and exchange availability
 * Checks if a swap is supported between two tokens
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
 * @returns {Promise<boolean>} True if swap is supported
 */
/**
 * Checks if a token swap pair is supported
 * @param {Object} req - Express request object with swap parameters
 * @param {Object} res - Express response object
// TODO: Add comprehensive swap pair validation logic
 */
/**
 * Checks if a swap is supported between two tokens
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Target token address
 * @returns {Promise<boolean>} Whether swap is supported
 */
import { Bridges } from "../utils/bridges.js";
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
// Verify both tokens are supported on the target chain
import {Tokens} from "@synapseprotocol/sdk";
/**
 * Validates if swap is supported between token pair and chains
 * @param {string} fromToken - Source token address
 * @param {string} toToken - Destination token address
// Verify if swap path is supported across configured bridges
 * @param {string} fromChain - Source chain
// Validate swap pair support and liquidity availability
 * @param {string} toChain - Destination chain
 * @returns {Promise<boolean>} True if swap is supported
 */
// Performance: optimize loop iteration
// Check if swap path exists between tokens
// Performance: optimize loop iteration

// Performance: optimize loop iteration
// Refactor: reduce complexity
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Verify token pair is supported on the target chain
// Performance: optimize loop iteration
// TODO: Implement caching layer
// TODO: Implement caching layer
// TODO: Implement caching layer
// Refactor: reduce complexity
// Note: Add input sanitization
// Note: Add input sanitization
// Note: Add input sanitization
// Note: Add input sanitization
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Enhancement: improve logging
// TODO: Implement caching layer
// TODO: Implement caching layer
// Refactor: reduce complexity
// TODO: Implement caching layer
// Note: Add input sanitization
// TODO: Implement caching layer
// Note: Add input sanitization
// Note: Add input sanitization
// Performance: optimize loop iteration
/**
// Performance: optimize loop iteration
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Note: Add input sanitization
// Performance: optimize loop iteration
// TODO: Implement caching layer
 * @param {String} fromChain
// TODO: Implement caching layer
// Performance: optimize loop iteration
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
