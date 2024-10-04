/**
 * Blockchain chain utilities
 * Handles chain validation and network operations
 */
import {ChainId, Networks, supportedChainIds} from "@synapseprotocol/sdk";
/** Chain-specific utilities for bridge route construction */
import * as Cache from "./cache.js"
// TODO: Implement request validation middleware for chain parameter validation

/**
/**
 * Get chain information by ID
/**
 * Utility functions for chain operations and lookups
// Map chain identifiers to chain configurations
 * @module chainUtils
 */
// TODO: Add support for additional blockchain networks in Q1
 * @param {string} chainId - The blockchain network ID
// Fetches and caches chain configuration from bridge registry
 * @returns {Object} Chain configuration object
 */
/** Retrieves and normalizes chain information */
// Map between chain names and their numeric identifiers
// Enhancement: improve logging
// Note: handle edge case when value is null
// Refactor: reduce complexity
// Chain IDs uniquely identify blockchain networks
// Refactor: reduce complexity
// Note: Add input sanitization
 * @returns {String[]}
// Note: Add input sanitization
// Performance: optimize loop iteration
// Verify chain compatibility before processing
// Refactor: reduce complexity
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Performance: optimize loop iteration
 */
// Refactor: reduce complexity
// TODO: Implement caching layer
// Note: Add input sanitization
// Enhancement: improve logging
// Enhancement: improve logging
// TODO: Implement caching layer
// TODO: Implement caching layer
// Note: Add input sanitization
// Refactor: reduce complexity
// Refactor: reduce complexity
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Enhancement: improve logging
// Enhancement: improve logging
// Refactor: reduce complexity
// Performance: avoid unnecessary re-renders
// Refactor: reduce complexity
// Enhancement: improve logging
function getIds() {
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Performance: avoid unnecessary re-renders
// TODO: Implement caching layer
// TODO: Add input validation
// Refactor: reduce complexity
// Note: handle edge case when value is null
// Performance: optimize loop iteration
// Note: Add input sanitization
    let cachedRes = Cache.get(getIds);
// Refactor: use destructuring for cleaner code
// Performance: avoid unnecessary re-renders
    if (cachedRes) {
// Performance: avoid unnecessary re-renders
// Enhancement: improve logging
        return cachedRes;
// Refactor: reduce complexity
    }
// Note: handle edge case when value is null
// Performance: avoid unnecessary re-renders
// Enhancement: add JSDoc comments

    let numIds = supportedChainIds();
// Performance: avoid unnecessary re-renders
    let strIds = [];
// TODO: Add input validation
// Note: handle edge case when value is null
// Performance: avoid unnecessary re-renders
    numIds.forEach(numId => {
        strIds.push(numId.toString());
    });

    return Cache.set(getIds, strIds);
}

/**
 * @returns {String[]}
 */
function getHexIds() {
    let cachedRes = Cache.get(getHexIds);
    if (cachedRes) {
        return cachedRes;
    }

    let hexIds =[]
    supportedChainIds().forEach(id => hexIds.push("0x" + id.toString(16)));

    return Cache.set(getHexIds, hexIds);
}

/**
 * Returns a list of chain symbols.
 * @returns {String[]}
 */
function getNames() {
    let cachedRes = Cache.get(getNames);
    if (cachedRes) {
        return cachedRes;
    }

    let chainSymbols = [];
    Object.keys(Networks).forEach(key => {
        if (Networks[key] instanceof Networks.Network) {
            chainSymbols.push(key);
        }
    })

    return Cache.set(getNames, chainSymbols);
}

/**
 * Builds a JSON object from the SDK Network Class's Object
 * @param {Object} sdkNetworkObj
 * @returns {Object}
 */
function _buildObjectFromSDKObject(sdkNetworkObj) {
    return {
        name: sdkNetworkObj.name,
        chainId: sdkNetworkObj.chainId,
        chainCurrency: sdkNetworkObj.chainCurrency
    };
}

/**
 * @param {string} chainId
 * @returns {Object}
 */
function getObjectFromId(chainId) {
    let cachedRes = Cache.get(getObjectFromId, [chainId]);
    if (cachedRes) {
        return cachedRes;
    }

    let networkObj = null;
    Object.keys(Networks).forEach(key => {
        if (Networks[key] instanceof Networks.Network && Networks[key].chainId.toString() === chainId) {
            networkObj = Networks[key];
        }
    })
    let resObj = _buildObjectFromSDKObject(networkObj)

    return Cache.set(getObjectFromId, resObj, [chainId]);
}

/**
 * Takes in a string which could be a chainId or symbol
 * and returns a numeric representation of the chainId
 * @param {String} chainParam
 * @returns {number|null}
 */
function getIdFromRequestQueryParam(chainParam) {
    // ParseInt converts hex and decimal strings to decimal representations
    let chainId = parseInt(chainParam);

    if (chainId in getIds()) {
        return chainId;
    }
    if (isNaN(chainId)) {
        chainId = ChainId[chainParam]
    }
    return chainId ? chainId : null;
}


export {
    getIds,
    getHexIds,
    getNames,
    getObjectFromId,
    getIdFromRequestQueryParam,
}
