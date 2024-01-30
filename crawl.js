/* eslint-env node */

const { JSDOM } = require("jsdom");

async function crawlPage(baseURL, currentURL, pages) {
  const baseURLobj = new URL(baseURL);
  const currURLobj = new URL(currentURL);

  // We are crawling only the website not the entire internet.
  if (baseURLobj.hostname !== currURLobj.hostname) {
    console.error(
      `given url is external url🫨: http://${currURLobj.hostname}${currURLobj.pathname}`,
    );
    return pages;
  }

  const normalizedCurrentURL = normalizeUrl(currentURL);

  if (pages[normalizedCurrentURL] > 0) {
    pages[normalizedCurrentURL]++;
    return pages;
  }

  pages[normalizedCurrentURL] = 1;

  console.log(`Now crawling 🐛: ${currentURL}`);

  try {
    const resp = await fetch(currentURL);
    if (resp.status > 399) {
      console.error(`error in fetch: ${resp.status} on page: ${currentURL}`);
      return err;
    }

    const contentType = resp.headers.get("content-type");

    if (!contentType.includes("text/html")) {
      console.error(`expected html got ${contentType} on page: ${currentURL}`);
      return;
    }

    const htmlBody = await resp.text();

    const nextUrls = getURLsfromHTML(htmlBody, baseURL);

    for (const nextUrl of nextUrls) {
      pages = await crawlPage(baseURL, nextUrl, pages);
    }
  } catch (err) {
    console.error(`error in ${currentURL} status: ${err.message}`);
  }

  return pages;
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
