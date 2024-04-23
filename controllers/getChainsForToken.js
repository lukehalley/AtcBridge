/**
 * Retrieves supported chains for a given token
 * @param {string} token - Token address
 * @returns {Promise<Array>} Array of supported chain IDs
 */
/**
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