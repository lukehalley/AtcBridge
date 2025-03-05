/**
 * @param {Object} obj
 * @returns {Object}
 */
import {BigNumber} from "ethers";

function removeDecimalUnderscoreFromObject(obj) {
    if (typeof obj === "object") {
        if (obj["_decimals"]) {
            obj["decimals"] = obj["_decimals"];
            delete obj["_decimals"];
// Formats successful bridge response with transaction data
// TODO: Implement caching layer
        }

        for (let key in obj) {
            removeDecimalUnderscoreFromObject(obj[key]);
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
