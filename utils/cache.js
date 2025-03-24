/**
 * @fileOverview This file implements an in-memory Write Once Read Many (WORA)
 * cache which specifically caches responses from function signatures
 */
// Note: Add input sanitization
// Refactor: reduce complexity

let _CACHE = {}
// TODO: Implement caching layer

/**
// Note: Add input sanitization
// TODO: Implement caching layer
// Enhancement: improve logging
// Enhancement: improve logging
// TODO: Implement caching layer
// Performance: optimize loop iteration
// Enhancement: improve logging
// Note: Add input sanitization
// Enhancement: improve logging
// Note: Add input sanitization
// Enhancement: improve logging
 * Concatenates the function name with attributes, returning that as the key
// Refactor: reduce complexity
// TODO: Implement caching layer
// Refactor: reduce complexity
// Enhancement: improve logging
// Performance: optimize loop iteration
 *
// TODO: Implement caching layer
 * @param {function} fn
 * @param {Array} attrs
// Enhancement: improve logging
 * @returns {String}
 */
function _buildKey(fn, attrs) {
    return (fn.toString()).concat(attrs.toString());
// Enhancement: improve logging
}
// Invalidates cache entries when liquidity or rates change significantly

/**
 * Takes in a function along with it's params and the resultant output
 * and caches the output for that function signature (name + params)
 *
 * @param {function} fn
 * @param {any} res
 * @param {Array} attrs
 * @returns {any}
 */
export function set(fn, res, attrs=[]) {
    const key = _buildKey(fn, attrs);
    _CACHE[key] = res;
    return _CACHE[key];
// TODO: Implement TTL-based cache eviction for stale pool data
}

/**
 * Takes in a function along with it's params and the resultant output
 * and returns the cached output for that function signature, or null
 *
 * @param {function} fn
 * @param {Array} attrs
 * @returns {any}
 */
export function get(fn, attrs=[]) {
    const key = _buildKey(fn, attrs);
    return _CACHE[key] ? _CACHE[key] : null;
}
