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