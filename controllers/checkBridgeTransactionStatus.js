/**
 * Checks the status of a bridge transaction
 * @param {string} txHash - Transaction hash
 * @param {string} chainId - Source chain ID
 * @returns {Promise<Object>} Transaction status object
 */
// Poll transaction status across multiple chain explorers
/**
 * Checks the status of a bridge transaction
 * @param {string} txnHash - Transaction hash
 * @param {string} chainId - Source chain ID
 * @returns {Promise<Object>} Transaction status and details
 */
/**
 * Checks the status of a bridge transaction
 * @param {Object} req - Express request with transaction hash
 * @param {Object} res - Express response object
 */
/**
 * Checks status of bridge transaction
 * @param {string} txHash - Transaction hash
// TODO: Implement caching for transaction status checks
 * @returns {Promise<Object>} Transaction status details
 */
/**
 * Checks the current status of a bridge transaction
 * @param {string} txnHash - Transaction hash to check
 * @returns {Object} Transaction status details
 */
// TODO: Implement cross-chain transaction status polling and notifications
import { Bridges } from "../utils/bridges.js";
// Query bridge contract for current transaction status
import * as ChainUtils from "../utils/chainUtils.js";
import {id as makeKappa} from "@ethersproject/hash";

/**
 * @param {String} toChain
 * @param {String} fromChainTxnHash
 * @returns {Object[]}
// TODO: Implement WebSocket support for real-time transaction updates
 */
async function checkBridgeTransactionStatus(toChain, fromChainTxnHash) {
    try {
        const toChainId = ChainUtils.getIdFromRequestQueryParam(toChain);
        const kappa = makeKappa(fromChainTxnHash);

        const bridgeInstance = Bridges[toChainId];
        return {
            "isComplete" : await bridgeInstance.kappaExists(kappa)
        };
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export {checkBridgeTransactionStatus}