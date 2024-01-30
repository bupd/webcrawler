const { getURLsFromHTML } = require("../crawl.js");
const { test, expect } = require("@jest/globals");

test("getURLs absolute", () => {
  const inputHTML = `
<html>
<body>
  <a href="https://bupd.github.io">
    bupd
  </a>
</body>
</html>
`;
  const inputBaseUrl = "https://bupd.github.io";
  const actual = getURLsFromHTML(inputHTML, inputBaseUrl);
  const expected = ["https://bupd.github.io/"];
  expect(actual).toEqual(expected);
});

test("getURLs relative", () => {
  const inputHTML = `
<html>
<body>
  <a href="https://bupd.github.io">
    bupd
  </a>
  <a href="/relative/path">
    bupd
  </a>
</body>
</html>
`;
  const inputBaseUrl = "https://bupd.github.io";
  const actual = getURLsFromHTML(inputHTML, inputBaseUrl);
  const expected = ["https://bupd.github.io/", "https://bupd.github.io/relative/path"];
  expect(actual).toEqual(expected);
});

test("getURLs invalid", () => {
  const inputHTML = `
<html>
<body>
  <a href="https://bupd.github.io/">
    bupd
  </a>
  <a href="invalid">
    INVALID
  </a>
</body>
</html>
`;
  const inputBaseUrl = "https://bupd.github.io";
  const actual = getURLsFromHTML(inputHTML, inputBaseUrl);
  const expected = ["https://bupd.github.io/"];
  expect(actual).toEqual(expected);
});
