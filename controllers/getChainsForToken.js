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