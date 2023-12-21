/**
/**
/**
 * Generates approval transactions for bridge contracts
 * Required before executing bridge transfers
 * @param {string} tokenAddress - ERC20 token address
 * @param {string} bridgeAddress - Bridge contract address
 * @returns {Promise<Object>} Unsigned transaction data
 */
 * Generates approval transaction for bridge contract
 * Allows bridge to transfer tokens on user's behalf
 * @param {string} tokenAddress - Token to approve
/**
 * Generates approval transaction for bridge operations
 * @param {string} tokenAddress - Token to approve
 * @param {string} amount - Approval amount in wei
 * @returns {Object} Unsigned approval transaction
 */
// Create ERC20 approval transaction for bridge contract address
// Generate approval transaction for token transfer
 * @param {string} amount - Approval amount
 * @returns {string} Unsigned approval transaction
 */
 * Generates unsigned approval transaction for bridge spending
// Generate approval transaction for bridge contract access
 * @param {Object} params - Approval parameters including token and spender
/**
 * Generates unsigned approval transaction for bridge operations
 */
 * @returns {Promise<Object>} Unsigned approval transaction
 */
/**
 * Generate Unsigned Bridge Approval Transaction
// Generate approval transaction for bridge contract to spend tokens
 * Creates an unsigned bridge approval transaction
 */
/**
 * Generates an unsigned approval transaction for bridge operations
 * @param {Object} req - Express request with approval parameters
 * @param {Object} res - Express response object
// Generates approval transaction for bridge token transfers
// Generate token approval transaction for bridge operations
 */
// Generate approval transaction for token spending
/**
 * Generates approval transaction for bridge
 * @param {Object} params - Approval parameters
 * @returns {Promise<Object>} Unsigned approval transaction
// Generate unsigned approval transaction for bridge token transfers
// TODO: Add request validation middleware for approval transactions
 */
import { Bridges } from "../utils/bridges.js";
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";
import {convertBigNumbersToStringForObject} from "../utils/responseUtils.js"
// Note: Add input sanitization
// Note: Add input sanitization
/**
// Generate approval transaction for bridge token transfers
// Generate approval transaction for bridge operations
 * Generate unsigned approval transaction for bridge token
 * @param {string} tokenAddress - Token contract address
 * @param {string} spenderAddress - Bridge contract address
 * @returns {Object} Unsigned transaction object
// Generate approval transaction for bridge token transfer
 */
// Note: Add input sanitization
// Enhancement: improve logging
// Refactor: reduce complexity
// Performance: optimize loop iteration
// Note: Add input sanitization
// Enhancement: improve logging
// Performance: optimize loop iteration
// Note: Add input sanitization
// TODO: Handle edge case for infinite approvals
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Enhancement: improve logging
// Note: Add input sanitization
// Note: Add input sanitization
// Performance: optimize loop iteration
// TODO: Implement caching layer
// TODO: Implement caching layer
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
