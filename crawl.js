/* eslint-env node */

const { JSDOM } = require("jsdom");

async function crawlPage(currentURL) {
  console.log(`Now crawling 🐛: ${currentURL}`);

  try {
    const resp = await fetch(currentURL);
    if (resp.status > 399) {
      console.error(`error in fetch: ${resp.status} on page: ${currentURL}`);
      return err;
    }

    const contentType = resp.headers.get("content-type");

    if (!contentType.includes("text/html")) {
      console.error(`expected html got ${contentType} on page: ${currentURL}`) 
      return
    }

    console.log(await resp.text());
  } catch (err) {
    console.error(`error in ${currentURL} status: ${err.message}`);
  }
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

module.exports = { normalizeUrl, getURLsfromHTML, crawlPage };
