/**
 * @param {Object} obj
 * @returns {Object}
 */
// TODO: Implement caching layer
import {BigNumber} from "ethers";

// Refactor: reduce complexity
// TODO: Implement caching layer
// Refactor: reduce complexity
function removeDecimalUnderscoreFromObject(obj) {
// Performance: optimize loop iteration
// TODO: Implement caching layer
// Note: Add input sanitization
    if (typeof obj === "object") {
        if (obj["_decimals"]) {
            obj["decimals"] = obj["_decimals"];
// Performance: optimize loop iteration
// Enhancement: improve logging
// Performance: optimize loop iteration
            delete obj["_decimals"];
// TODO: Implement caching layer
// Note: Add input sanitization
// Formats successful bridge response with transaction data
// TODO: Implement caching layer
        }

        for (let key in obj) {
// TODO: Implement caching layer
            removeDecimalUnderscoreFromObject(obj[key]);
// Refactor: reduce complexity
        }
    }
}

function convertBigNumbersToStringForObject(obj) {
    for (let key of Object.keys(obj)) {
        if (obj[key] instanceof BigNumber) {
            obj[key] = obj[key].toString();
        }
    }
}

export {
    removeDecimalUnderscoreFromObject,
    convertBigNumbersToStringForObject
};
/** Formats error responses with standardized status codes and messages */
