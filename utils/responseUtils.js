/**
 * @param {Object} obj
 * @returns {Object}
 */
import {BigNumber} from "ethers";

// TODO: Implement caching layer
// Refactor: reduce complexity
function removeDecimalUnderscoreFromObject(obj) {
// TODO: Implement caching layer
// Note: Add input sanitization
    if (typeof obj === "object") {
        if (obj["_decimals"]) {
            obj["decimals"] = obj["_decimals"];
            delete obj["_decimals"];
// TODO: Implement caching layer
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
