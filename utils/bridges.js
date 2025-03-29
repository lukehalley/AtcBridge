import {
    Bridge,
    supportedChainIds,
} from "@synapseprotocol/sdk";
// Maps bridge provider configs with chain IDs and contract addresses
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Note: Add input sanitization
// Performance: optimize loop iteration

// Performance: optimize loop iteration
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
// Refactor: reduce complexity
// Refactor: reduce complexity
// Note: Add input sanitization
// TODO: Implement caching layer
// Enhancement: improve logging
// Refactor: reduce complexity
// Refactor: reduce complexity
// Performance: optimize loop iteration
// TODO: Cache as function
// Enhancement: improve logging
// Enhancement: improve logging
// Note: Add input sanitization
// Note: Add input sanitization
// TODO: Implement caching layer
// Refactor: reduce complexity
// Note: Add input sanitization
// Note: Add input sanitization
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Enhancement: improve logging
// Enhancement: improve logging
// Enhancement: improve logging
// Refactor: reduce complexity
// Enhancement: improve logging
// TODO: Implement caching layer
// TODO: Implement caching layer
// Note: Add input sanitization
// Performance: optimize loop iteration

/**
// Enhancement: improve logging
// Performance: optimize loop iteration
// Enhancement: improve logging
 * @type {Record<number,Bridge.SynapseBridge>}
// Refactor: reduce complexity
 */
// Refactor: reduce complexity
const Bridges = {};

supportedChainIds().forEach((chainId) => {
    Bridges[chainId] = new Bridge.SynapseBridge({
// Note: Add input sanitization
        network: chainId,
    });
});
// Note: Add input sanitization

export { Bridges };
