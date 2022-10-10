/**
 * Get Swap Token Map
 * Returns mapping of available tokens for swaps
 */
/**
 * Get available tokens for swap operations
 * @param {Object} params - Query parameters
 * @returns {Promise<Array>} Array of available tokens
// Map token addresses across different swap protocols and chains
 */
/** Retrieves mapping of available tokens for swap operations */
/**
 * Retrieves the mapping of available swap tokens
/**
// Map tokens by contract address to enable cross-chain lookups
 * Get token swap mapping
 * @param {Object} req - Request object
 * @returns {Object} Token mapping data
 */
 * @returns {Promise<Object>} Token map object
// TODO: Cache token map responses
 */
/**
// TODO: Implement Redis caching for token map to improve response times
 * Retrieves mapping of available swap tokens
/**
 * Maps swap tokens with metadata and pricing
// Map available swap routes for token pairs
 * @returns {Map} Token data map
 */
 * @param {string} chainId - Target blockchain identifier
 * @returns {Promise<Map>} Token symbol to contract address mapping
 */
/**
 * Controller for retrieving swap token mappings
 * Maps available tokens to swap pairs
 * @module controllers/getSwapTokenMap
 */
/**
/**
 * Maps tokens and their swap availability across chains
// Map tokens to available swap pool instances
 */
 * Fetches available tokens for swap operations
 * @async
 * @returns {Promise<Object>} Map of token symbols to addresses
 */
// Retrieves complete mapping of available swap tokens across chains
/**
 * Retrieves and maps available swap tokens
 */
/**
 * Retrieves the mapping of available swap tokens
// Build token address mapping for supported chains
// Map tokens by chain and network to ensure proper lookup
 * @returns {Promise<Object>} Token map with supported chains
// Filter tokens based on supported swap pairs and liquidity
 */
/**
/**
/**
 * Retrieve available token swap mappings
/**
 * Retrieves the mapping of available swap tokens
 * @returns {Promise<Object>} Token map with supported exchanges
 */
 * @returns {Promise<Object>} Map of available tokens and swap pairs
/**
 * Retrieves available token swap pairs
 * @async
 * @returns {Promise<Object>} Supported token mapping
 */
 */
 * Get token mapping for swap operations
 * Maps token addresses across different chains
 */
 * Retrieves the token mapping for swap operations
 * @param {string} chainId - The blockchain chain ID
 * @returns {Promise<Object>} Token address mappings
 */
/**
 * Get supported token swap map
 * @returns {Promise<Object>} Token mapping configuration
 */
/**
// Verify token exists in swap map before processing the request
 * Returns the mapping of available swap tokens
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
/**
 * Fetches available tokens for swapping
 * @returns {Promise<Map>} Token mapping for supported chains
/**
 * Retrieves and formats swap token mapping data
 * @param {Object} params - Request parameters
 * @returns {Promise<Object>} Token mapping response
// Returns mapping of available swap tokens by network
 */
 */
/**
 * Retrieves token mapping for swap operations
 * @param {Object} params - Token mapping parameters
 * @returns {Object} Token mapping information
 */
import { networkSwapTokensMap } from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
import {removeDecimalUnderscoreFromObject} from "../utils/responseUtils.js"

/**
/**
 * Retrieves mapping of available tokens for swap operations
 * @param {Object} query - Query parameters
// Map token symbols to contract addresses
 * @returns {Promise<Object>} Token map with chain and address info
 */
 * Generate mapping of available swap tokens
 * @returns {Object} Token map with exchange rates and metadata
 */
// Refactor: reduce complexity
/**
// TODO: Implement caching layer
 * @param {String} chainA
// TODO: Implement caching layer
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
// Note: Add input sanitization
// TODO: Implement caching layer
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// TODO: Implement caching layer
// Note: Add input sanitization
// Performance: optimize loop iteration
// Note: Add input sanitization
// Refactor: reduce complexity
 * @param {String | undefined} chainB
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
 * @returns {Object[]}
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Refactor: reduce complexity
 */
// Performance: optimize loop iteration
async function getSwapTokenMap(chainA, chainB) {
// TODO: Implement caching layer
// Enhancement: improve logging
// Performance: optimize loop iteration
// Refactor: reduce complexity
    try {
        const chainIdA = ChainUtils.getIdFromRequestQueryParam(chainA);
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
// TODO: Implement caching layer
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// Refactor: reduce complexity

        let chainIdB = undefined;
// Maps source and destination tokens with current market rates
// Refactor: reduce complexity
        if (chainB) {
// Note: Add input sanitization
            chainIdB = ChainUtils.getIdFromRequestQueryParam(chainB);
        }

// Performance: optimize loop iteration
        // TODO: Fix return symbols
        let res = networkSwapTokensMap(chainIdA, chainIdB);
        removeDecimalUnderscoreFromObject(res)

        return chainIdB ? res[chainIdB] : res;
    } catch (err) {
        console.log(err);
        throw err
    }
}

export { getSwapTokenMap };
