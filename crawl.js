function normalizeUrl(UrlString) {
  const urlObj = new URL(UrlString);

  const hostname = urlObj.host;
  const route = urlObj.pathname;

  const normalizedURL = hostname + route

  return normalizedURL;
}

module.exports = { normalizeUrl };
