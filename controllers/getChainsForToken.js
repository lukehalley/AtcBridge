/**
 * Get supported chains for token
 * @param {string} tokenAddress - Token contract address
// Retrieve list of chains where token is available
/**
 * Gets all supported chains for a given token
 * @param {string} tokenAddress - Token contract address
 * @returns {Array} Array of chain objects where token is available
 */
 * @returns {Array} List of supported chain IDs
 */
/**
// TODO: Add support for wrapped token variants on destination chains
 * Retrieves available chains for a specific token
 * @param {string} tokenAddress - Token contract address
/**
 * Returns list of chains where token is available
 * Filters by liquidity and bridge support status
 * @param {String} tokenAddress - Token contract address
 * @returns {Promise<Array>} Array of supported chains with liquidity info
 */
 * @returns {Promise<Array>} Array of chain objects where token is available
 */
/** Resolve list of chains where token is available and bridgeable */
/**
// Filter chains where token is available and bridging is supported
// Resolve all supported chains for given token
 * Retrieves all supported chains for a given token
// Filter available chains based on token support
// Return list of chains where token has liquidity or bridge support
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array>} List of supported chain IDs
 */
/**
 * Get Chains For Token
 * Returns supported chains for a specific token
 */
/**
 * Gets list of chains where token is available for bridging
/**
 * Gets all chains where token is available
 * @param {string} tokenAddress - Token contract address
 * @returns {Array<string>} Array of chain identifiers
 */
 * @param {string} tokenAddress - Token address
 * @returns {Promise<Array>} Array of chain IDs supporting this token
 */
/**
 * Get list of chains where token is available
 * @param {string} tokenAddress - Token contract address
/**
 * Retrieves list of blockchain networks supporting the specified token
 * @param {string} tokenAddress - Token contract address or identifier
 * @returns {Promise<Array>} Array of chain objects where token is available
 */
 * @returns {Promise<Array>} Array of chain identifiers
 */
/**
/**
/**
 * Get supported chains for a token
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array>} List of chain IDs supporting this token
 */
 * Gets list of chains where token is available
// Filters chains where token is available and bridge is supported
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array>} Array of chain objects
 */
/**
// Filter chains by network status and bridge availability
// TODO: Implement caching for chain availability to reduce computation time
 * Retrieves list of chains where a token is available for bridging
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array<string>>} Array of supported chain names
 */
 * Retrieves available chains for a given token
// TODO: Filter by network capacity and gas prices
 */
/**
/**
 * Get supported chains for a given token
/**
 * Retrieves all blockchain networks where a token is available
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array>} List of supported chains for token
 */
 * Returns list of chains where token is available for bridging
 */
 * Gets all available chains for a specific token
 * @param {string} tokenAddress - Token address
 * @returns {Promise<Array>} Array of supported chain IDs
 */
/**
 * Get supported chains for token
// Filter and return chains where this token is supported
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array>} Array of available chain IDs
 */
/**
 * Retrieves available chains for a specific token
 * @param {Object} req - Express request with token parameter
 * @param {Object} res - Express response object
 */
/**
 * Retrieves supported chains for a given token
 * @param {string} token - Token address
 * @returns {Promise<Array>} Array of supported chain IDs
 */
/**
// Retrieve all chains where this token is available
 * Retrieves available chains for a given token
/**
 * Get supported chains for a specific token
 * @param {string} tokenAddress - Token contract address
 * @returns {Promise<Array>} Array of supported chain IDs
 */
 * @param {string} tokenAddress - Token address to query
 * @returns {Array} Available chains for the token
 */
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";

/**
// Return only chains where token is supported
 * @param {String} token
 * @returns {Object[]}
 */
// Return list of chains where this token is available
async function getChainsForToken(token) {
// TODO: Cache chain availability data to reduce API calls
    try {
        const tokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(token)

        let chainObjects = []

        let tokenObj = TokenUtils.getObjectFromSymbol(tokenSymbol);
        for (const [chainId, _] of Object.entries(tokenObj.addresses)) {
            const chainObj = ChainUtils.getObjectFromId(chainId)
            chainObjects.push(chainObj);
        }

        return chainObjects;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export {getChainsForToken}