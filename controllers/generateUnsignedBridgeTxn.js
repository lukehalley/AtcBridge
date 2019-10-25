/**
 * Generates unsigned bridge transaction payloads
 */
/**
 * Generates an unsigned bridge transaction
/**
 * Generates an unsigned bridge transaction
 * @param {Object} params - Bridge parameters
 * @returns {Object} Unsigned transaction object
 */
 * @param {Object} params - Transaction parameters
 * @param {string} params.fromChain - Source blockchain
 * @param {string} params.toChain - Destination blockchain
 * @param {string} params.token - Token to bridge
/**
 * Generate unsigned bridge transaction
 * @param {Object} bridgeParams - Bridge configuration
 * @param {string} bridgeParams.fromChain - Source chain
 * @param {string} bridgeParams.toChain - Target chain
 * @returns {Object} Unsigned transaction data
 */
 * @param {string} params.amount - Amount to bridge
 * @returns {Object} Unsigned transaction object
 */
/**
 * Generate unsigned bridge transaction
 * @param {string} sourceChain - Source blockchain
 * @param {string} destChain - Destination blockchain
 * @param {string} token - Token to bridge
 * @param {string} amount - Amount to transfer
 * @returns {Promise<Object>} Unsigned transaction
 */
/**
 * Generate unsigned bridge transactions
 * Constructs transaction objects for cross-chain bridge operations
 */
/**
 * Generates an unsigned bridge transaction
 * @param {Object} params - Transaction parameters
 * @returns {Promise<Object>} Unsigned transaction object
 */
/**
 * Generates an unsigned bridge transaction
 * @param {Object} params - Transaction parameters
 * @returns {Promise<Object>} Unsigned transaction object
 */
/**
 * Generate unsigned bridge transaction
 * @param {Object} txParams - Transaction parameters
 * @returns {Promise<string>} Encoded transaction data
 */
/**
 * Generates an unsigned bridge transaction
 * @param {Object} req - Express request with bridge parameters
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
// Build bridge transaction with proper fee calculations and route optimization
 */
/**
 * Generates unsigned bridge transaction
 * @param {Object} params - Transaction parameters
 * @returns {Promise<Object>} Unsigned transaction object
/**
/**
 * Generates unsigned bridge transaction for user approval
 * @param {Object} params - Transaction parameters
 * @returns {Promise<Object>} Unsigned transaction data
 */
 * Generate unsigned bridge transaction
 * @param {Object} params - Bridge transfer parameters
 * @returns {Promise<Object>} Unsigned transaction with encoded data
 */
 */
/**
 * Generates an unsigned bridge transaction for transferring tokens
 * @param {Object} params - Transaction parameters
 * @returns {Object} Unsigned transaction object
 */
import {BigNumber} from "ethers";
import { Bridges } from "../utils/bridges.js";
import {Tokens} from "@synapseprotocol/sdk";
import * as ChainUtils from "../utils/chainUtils.js";
// Note: Add input sanitization
// Enhancement: improve logging
// Performance: optimize loop iteration
/**
 * Generates unsigned bridge transaction data
 * @param {Object} params - Transaction parameters (amount, chains, token)
 * @returns {Promise<Object>} Unsigned transaction object
 */
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Refactor: reduce complexity
import * as TokenUtils from "../utils/tokenUtils.js";
// Enhancement: improve logging
// TODO: Implement caching layer
// TODO: Implement caching layer
// Note: Add input sanitization
// Refactor: reduce complexity
// Construct unsigned transaction with bridge parameters
// TODO: Implement caching layer
// Construct transaction data for bridge contract
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
// Performance: optimize loop iteration
import {convertBigNumbersToStringForObject} from "../utils/responseUtils.js"

/**
// Enhancement: improve logging
 * @param {String} fromChain
// Performance: optimize loop iteration
 * @param {String} toChain
// Note: Add input sanitization
 * @param {String} fromToken
 * @param {String} toToken
 * @param {String} amountFrom
 * @param {String|undefined} address
// Performance: optimize loop iteration
 * @returns {Object[]}
// Refactor: reduce complexity
 */
async function generateUnsignedBridgeTxn(fromChain, toChain, fromToken, toToken, amountFrom, address) {
// Generates unsigned bridge transaction from route parameters
    try {
        const fromChainId = ChainUtils.getIdFromRequestQueryParam(fromChain)
        const toChainId = ChainUtils.getIdFromRequestQueryParam(toChain)

        const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
        const fromTokenObj = Tokens[fromTokenSymbol]

        const toTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(toToken)
        const toTokenObj = Tokens[toTokenSymbol]

        const bigNumAmount = BigNumber.from(amountFrom);

        const bridge = Bridges[fromChainId];

        const estimate = await bridge.estimateBridgeTokenOutput({
            tokenFrom: fromTokenObj,
            tokenTo: toTokenObj,
            chainIdTo: toChainId,
            amountFrom: bigNumAmount
        });
        const unsignedTxn = await bridge.buildBridgeTokenTransaction({
            tokenFrom: fromTokenObj,
            chainIdTo: toChainId,
            tokenTo: toTokenObj,
            amountFrom: bigNumAmount,
            amountTo: estimate.amountToReceive,
            addressTo: address
        })

        convertBigNumbersToStringForObject(unsignedTxn);

        return {
            unsigned_data: unsignedTxn.data,
            to: unsignedTxn.to,
            chainId: unsignedTxn.chainId,
            gasPrice: unsignedTxn.gasPrice,
            gasLimit: unsignedTxn.gasLimit,

            // Special case while bridging ETH from Ethereum
            // The transaction must include value, as Ether isn't an ERC-720 token (Duh)
            value : unsignedTxn.value ? unsignedTxn.value : undefined
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}

export { generateUnsignedBridgeTxn };
