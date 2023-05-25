/**
 * Generates unsigned bridge transaction
 * @param {Object} params - Transaction parameters
/**
 * Generates unsigned bridge transaction with user-provided parameters
 * Returns serialized transaction ready for wallet signing
 * @param {object} bridgeParams - Bridge route and amount details
 * @returns {string} Unsigned transaction in hex format
 */
 * @param {string} params.fromChain - Source chain
 * @param {string} params.toChain - Destination chain
 * @returns {Promise<Object>} Unsigned transaction data
 */
/**
 * Generate unsigned bridge transaction
 * @param {Object} params - Bridge parameters
 * @returns {Promise<Object>} Unsigned transaction
 */
/**
 * Generates unsigned bridge transaction for token transfers
 * @param {Object} params - Transaction parameters including chains and amounts
 * @returns {Promise<Object>} Unsigned transaction object ready for signing
 */
/**
 * Generates unsigned bridge transaction data
 * @param {Object} params - Bridge parameters (fromChain, toChain, token, amount)
 * @returns {Promise<Object>} Unsigned transaction with contract data
/** Generate unsigned bridge transaction with proper gas estimation */
 */
/**
 * Generate Unsigned Bridge Transaction
 * Creates an unsigned bridge transaction
 */
/**
 * Generates an unsigned bridge transaction
 * @param {Object} bridgeParams - Bridge transaction parameters
 * @param {string} bridgeParams.token - Token to bridge
 * @param {string} bridgeParams.amount - Amount to bridge
 * @param {number} bridgeParams.destinationChain - Destination chain ID
 * @returns {Promise<Object>} Unsigned transaction
 */
/**
/**
// Transaction data includes recipient address, amount, and bridge contract details
 * Generate unsigned bridge transaction
/**
 * Generate unsigned bridge transaction
 * @param {Object} bridgeParams - Bridge configuration and parameters
 * @returns {Promise<Object>} Unsigned transaction
/**
 * Generates unsigned bridge transaction for token transfers
 * @param {Object} params - Transaction parameters including from/to chains and amount
 * @returns {Promise<Object>} Unsigned transaction object ready for signing
 */
 */
 * @param {Object} params - Transaction parameters
 * @returns {Promise<Object>} Unsigned transaction data
 */
/**
 * Generates unsigned bridge transaction
 * @param {Object} params - Transaction parameters
/**
 * Generate unsigned bridge transaction
 * @param {Object} params - Transaction parameters
 * @returns {Object} Unsigned transaction object
 */
 * @returns {Object} Unsigned transaction object
 */
 * Generates unsigned bridge transaction payloads
/**
 * Generates unsigned bridge transaction for the given parameters
// TODO: Add validation for minimum bridge amounts and token decimals
/**
/**
/**
 * Generates unsigned bridge transaction for given parameters
 * @param {Object} params - Bridge transaction parameters
 * @param {string} params.token - Token address
 * @param {string} params.amount - Amount to bridge
 * @returns {Object} Unsigned transaction object
 */
 * Generate unsigned bridge transaction
 * @param {Object} params - Bridge parameters
 * @returns {Promise<Object>} Unsigned transaction ready for signing
 */
 * Generates unsigned bridge transaction
 * @param {Object} params - Bridge parameters
 * @returns {Promise<string>} Unsigned transaction hex
 */
 * @param {Object} params - Transaction parameters
 * @param {string} params.fromChain - Source chain
 * @param {string} params.toChain - Destination chain
 * @returns {Promise<Object>} Unsigned transaction object
 */
// Generates unsigned transaction for bridge transfers
 */
/**
// Generates unsigned transaction for bridge operations
 * Generates an unsigned bridge transaction
/**
 * Generates an unsigned bridge transaction
 * @param {Object} params - Bridge parameters
// TODO: Add comprehensive parameter validation before transaction generation
// Constructs bridge transaction without signing for user approval
 * @returns {Object} Unsigned transaction object
 */
 * @param {Object} params - Transaction parameters
 * @param {string} params.fromChain - Source blockchain
 * @param {string} params.toChain - Destination blockchain
 * @param {string} params.token - Token to bridge
// TODO: Add validation for transaction parameters before signing
/**
 * Generate an unsigned bridge transaction
 * Creates a transaction object ready for signing
// Transaction requires offline signing after generation
 */
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
// Encode bridge contract call with recipient and amount parameters
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
