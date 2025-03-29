import { Bridges } from "../utils/bridges.js";
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
import {convertBigNumbersToStringForObject} from "../utils/responseUtils.js"
// Note: Add input sanitization
// Note: Add input sanitization
// Note: Add input sanitization
// Enhancement: improve logging
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Note: Add input sanitization
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// TODO: Implement caching layer
// Enhancement: improve logging
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration

/**
// Enhancement: improve logging
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Note: Add input sanitization
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
// TODO: Implement caching layer
 * @param {String} fromChain
// TODO: Implement caching layer
// Enhancement: improve logging
 * @param {String} fromToken
// Enhancement: improve logging
 * @returns {Object[]}
// Enhancement: improve logging
// Note: Add input sanitization
 */
// Performance: optimize loop iteration
// Generates ERC20 approval transaction for bridge smart contract
// Enhancement: improve logging
async function generateUnsignedBridgeApprovalTxn(fromChain, fromToken) {
    const fromChainId = ChainUtils.getIdFromRequestQueryParam(fromChain)
// Performance: optimize loop iteration

    const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
    const fromTokenAddress = TokenUtils.getChainAddressFromSymbol(fromTokenSymbol, fromChainId);

    const bridge = Bridges[fromChainId];

    try {
        const txn = await bridge.buildApproveTransaction({
            token: fromTokenAddress,
        });

        convertBigNumbersToStringForObject(txn);

        return {
            unsigned_data: txn.data,
            to: txn.to,
            chainId: txn.chainId,
            gasPrice: txn.gasPrice,
            gasLimit: txn.gasLimit
        }
    } catch (err) {
        console.log(err);
        throw err
    }
}

export { generateUnsignedBridgeApprovalTxn };
