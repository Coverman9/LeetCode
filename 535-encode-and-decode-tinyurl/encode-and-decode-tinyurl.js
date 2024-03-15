/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let map = new Map()
var encode = function (longUrl) {
    const code = Math.random().toString(32).slice(5)
    const tinyUrl = `https://tinyurl.com/${code}`
    map.set(tinyUrl, longUrl)
    return tinyUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return map.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */