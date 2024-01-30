const { JSDOM } = require("jsdom");

async function crawlPage(currentURL) {
  console.log(`actively crawling: ${currentURL}`);

  const resp = await fetch(currentURL);
  console.log(resp.text());
}

function getURLsfromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");

  for (const linkElement of linkElements) {
    // Check if it's a relative url
    if (linkElement.href.startsWith("/")) {
      // relative url block
      try {
        const url = new URL(`${baseURL}${linkElement.href}`);
        urls.push(`${url.hostname}${url.pathname}/`);
      } catch (err) {
        console.error("error in relative url", err.message);
      }
    } else {
      // normal url block
      try {
        const url = new URL(linkElement.href);
        urls.push(`${url.hostname}${url.pathname}`);
      } catch (err) {
        console.error("error in relative url", err.message);
      }
    }
  }
  return urls;
}
function normalizeUrl(UrlString) {
  const urlObj = new URL(UrlString);

  const hostname = urlObj.host;
  const route = urlObj.pathname;

  const normalizedURL = hostname + route;
  return normalizedURL;
}

module.exports = { normalizeUrl, getURLsfromHTML };
