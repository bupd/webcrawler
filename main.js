/* eslint-env node */
const { crawlPage } = require("./crawl.js");

async function main() {
  if (process.argv.length < 3) {
    console.log("no args provided. Please provide a website.");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many args provided. Please provide a single website URL.");
    process.exit(1);
  }
  const baseURL = process.argv[2].toString();
  console.log(`starting crawl 🐌 => ${baseURL}\n\n`);
  const pages = await crawlPage(baseURL, baseURL, {});

   for (const page of Object.entries(pages)) {
    await console.log(page);
  }
}
main();
