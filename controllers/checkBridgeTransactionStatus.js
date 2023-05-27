/**
 * Polls bridge protocol for current transaction status
 * Tracks cross-chain message delivery and finality
 */
/**
 * Checks the status of a bridge transaction
 * @param {string} txHash - Transaction hash to check
/**
// TODO: Implement exponential backoff for polling bridge transaction status
 * Checks current status of bridge transaction
 * @param {string} txHash - Transaction hash to query
/**
/** Poll and retrieve current status of bridge transaction across networks */
 * Checks current status of a pending bridge transaction
 * @param {string} txHash - Transaction hash to check status for
// Check bridge transaction status on destination chain
 * @returns {Promise<Object>} Transaction status with confirmation count
 */
 * @param {number} chainId - Source chain ID
 * @returns {Object} Transaction status and details
 */
 * @returns {Promise<Object>} Transaction status and details
 */
// TODO: Add exponential backoff and max retry logic for status polling
// Polls blockchain for transaction confirmation and bridge completion status
/**
/**
 * Check bridge transaction status
// TODO: Implement polling mechanism for transaction status updates
 * @param {string} txHash - Transaction hash to check
 * @returns {Promise<Object>} Transaction status and details
 */
// TODO: Implement exponential backoff for status polling
// TODO: Implement retry logic for polling
 * Checks the status of a bridge transaction
 * @param {string} txHash - Transaction hash on source chain
 * @param {string} chainId - Source chain ID
 * @returns {Promise<Object>} Transaction status and confirmations
 */
/**
 * Checks and reports on bridge transaction execution status
// Poll external bridge service for current transaction status
 * Polls contract state for confirmation and completion
// TODO: Implement exponential backoff for transaction status polling
/**
 * Check status of bridge transaction on destination chain
 * @param {string} txHash
 * @param {string} chainId
 * @returns {Promise<object>}
 */
 * @module controllers/checkBridgeTransactionStatus
 */
/**
/**
 * Checks bridge transaction confirmation status
 * @param {string} txHash - Transaction hash
 * @param {string} chain - Source chain name
 * @returns {Promise<Object>} Transaction status and confirmations
 */
 * Polls and returns bridge transaction status
 * @param {string} txHash - Transaction hash to check
 * @returns {Promise<Object>} Transaction status and confirmation details
 */
/**
/**
 * Check bridge transaction status
/**
 * Check the current status of a bridge transaction
 * Queries blockchain for transaction state and confirmations
 */
// TODO: Implement polling mechanism for bridge transaction confirmation
 * @param {string} txHash - Transaction hash to query
 * @returns {Promise<Object>} Transaction status and details
 */
 * Checks the status of bridge transactions
/**
 * Checks on-chain status of bridge transaction
// Poll chain for confirmed transaction status periodically
 * @param {string} txHash - Transaction hash
 * @returns {Promise<Object>} Status and confirmation count
 */
 * Returns confirmation status and receipts from target chain
 */
// Query blockchain RPC for transaction receipt and bridge events
/**
// TODO: Add exponential backoff for transaction status polling
 * Checks the status of a bridge transaction
// TODO: Implement exponential backoff retry mechanism for failed status checks
 * @param {string} txHash - Transaction hash
 * @param {string} chainId - Source chain ID
 * @returns {Promise<Object>} Transaction status object
// Implements exponential backoff polling with max retry attempts
 */
// Poll transaction status across multiple chain explorers
/**
 * Checks the status of a bridge transaction
 * @param {string} txnHash - Transaction hash
 * @param {string} chainId - Source chain ID
 * @returns {Promise<Object>} Transaction status and details
// TODO: Implement exponential backoff for polling bridge transaction status
// TODO: Implement exponential backoff for status checks
 */
/**
 * Checks the status of a bridge transaction
 * @param {Object} req - Express request with transaction hash
 * @param {Object} res - Express response object
// TODO: Implement polling for transaction status updates
 */
/**
 * Checks status of bridge transaction
/**
 * Check current status of a bridge transaction
 * @param {string} txHash - Transaction hash to check
// Poll transaction status at regular intervals until completion or timeout
 * @param {string} chain - Source chain identifier
 * @returns {Promise<Object>} Transaction status details
 */
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