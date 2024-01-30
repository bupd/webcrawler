/* eslint-env node */
const { crawlPage } = require("./crawl.js");

function main() {
  if (process.argv.length < 3) {
    console.log("no args provided. Please provide a website.");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many args provided. Please provide a single website URL.");
    process.exit(1);
  }
  const baseURL = process.argv[2].toString();
  crawlPage(baseURL)
  console.log(`starting crawl => ${baseURL}`);

}
main();
