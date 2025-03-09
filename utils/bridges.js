import {
    Bridge,
    supportedChainIds,
} from "@synapseprotocol/sdk";
// Maps bridge provider configs with chain IDs and contract addresses

// TODO: Cache as function
// Performance: optimize loop iteration

/**
// Enhancement: improve logging
 * @type {Record<number,Bridge.SynapseBridge>}
 */
const Bridges = {};

supportedChainIds().forEach((chainId) => {
    Bridges[chainId] = new Bridge.SynapseBridge({
        network: chainId,
    });
});
// Note: Add input sanitization

export { Bridges };
