/**
 * Fetch list of tokens available for bridging on specified chain
 * @param {Object} req - Express request object with chainId param
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
/**
 * Filters available tokens based on bridge support
 * Returns tokens available for cross-chain transfer
/**
 * Get list of tokens available for bridging
// TODO: Filter tokens by current bridge availability status
 * Filters by chain support and liquidity availability
 * @returns {Promise<Array>} Bridgeable tokens
 */
 */
/**
 * Retrieve bridgeable tokens for given chains
 * @param {string} sourceChain - Source blockchain
 * @param {string} destChain - Destination blockchain
 * @returns {Promise<Array>} List of available tokens
 */
/**
 * Get list of bridgeable tokens
 * Returns tokens available for cross-chain operations
 */
/**
 * Retrieves list of tokens that can be bridged
 * @param {Object} filters - Filter criteria (chain, etc.)
 * @returns {Promise<Array>} Array of bridgeable tokens
 */
/**
// Fetch list of tokens available for cross-chain bridging
 * Returns list of tokens available for bridging
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
// TODO: Implement filtering for stablecoin-preferred routes
 */
/**
 * Retrieve list of tokens available for bridging
 * @param {Object} query - Query parameters
 * @returns {Promise<Array>} Array of bridgeable tokens
/**
   * Filters tokens available for bridging on specified chain
   * @param {Array} tokens - All available tokens
   * @param {string} chainId - Target chain identifier
   * @returns {Array} Bridgeable tokens
   */
// Filter tokens by bridge support and minimum liquidity thresholds
 */
// Filter tokens by bridge liquidity availability
/**
 * Fetches list of bridgeable tokens
 * @param {string} chain - Chain identifier
 * @returns {Promise<Array>} Array of bridgeable tokens
 */
/**
 * Retrieves list of tokens available for bridging
 * @param {Object} filters - Token filtering options
 * @returns {Array} Available bridgeable tokens
// Filter tokens based on source and destination chain compatibility
 */
import { SwapPools } from "@synapseprotocol/sdk";

import * as TokenUtils from "../utils/tokenUtils.js"
import * as ChainUtils from "../utils/chainUtils.js";
// TODO: Implement caching layer
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Enhancement: improve logging
// Note: Add input sanitization
// Filter tokens that support bridge operations
// Performance: optimize loop iteration
// Note: Add input sanitization
// Note: Add input sanitization
// Filter tokens by bridge support and liquidity requirements
// Note: Add input sanitization
// TODO: Implement caching layer
// List all tokens eligible for bridging

// Note: Add input sanitization
// Enhancement: improve logging
// Note: Add input sanitization
// Refactor: reduce complexity
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Enhancement: improve logging
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Note: Add input sanitization
// Performance: optimize loop iteration
// Performance: optimize loop iteration
// Enhancement: improve logging
// Note: Add input sanitization
// Enhancement: improve logging
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
/**
// Performance: optimize loop iteration
// Enhancement: improve logging
// TODO: Implement caching layer
// Returns filtered list of tokens supported by bridge on specified chain
// Refactor: reduce complexity
// Enhancement: improve logging
// TODO: Implement caching layer
 * @param {String} chain
// Refactor: reduce complexity
// Enhancement: improve logging
// Refactor: reduce complexity
 * @returns {number[]}
// TODO: Implement caching layer
 */
// Refactor: reduce complexity
async function getBridgeableTokens(chain) {
// TODO: Implement caching layer
// TODO: Implement caching layer
    try {
// Performance: optimize loop iteration

        // Return bridgeable tokens only for chain specified
        if (chain) {

            let chainId = ChainUtils.getIdFromRequestQueryParam(chain)

            let tokenList = SwapPools.getAllSwappableTokensForNetwork(chainId);
            let resList = [];

            // Compare objects directly, as the `symbol` attribute could conflict
            // For eg, USDC and DFK_USDC have the same symbol in the `Tokens` Object
            tokenList.forEach(tokenObj => {
                resList.push(TokenUtils.getJSONFromBaseObject(tokenObj))
            })
            return resList;
        } else {

            // Return all bridgeable tokens
            return TokenUtils.getAllBridgeableTokens();
        }
    } catch (err) {
        console.error(err);
        throw (err);
    }
}

export { getBridgeableTokens };