const { normalizeUrl } = require("../crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeUrl", () => {
  const input = "https://bupd.github.io/";
  const actual = normalizeUrl(input);
  const expected = "bupd.github.io/";
  expect(actual).toEqual(expected);
});

test("normalizeUrl with query params", () => {
  const input = "https://bupd.github.io";
  const actual = normalizeUrl(input);
  const expected = "bupd.github.io/";
  expect(actual).toEqual(expected);
});


test("normalizeUrl with query params", () => {
  const input = "https://bupd.github.io/kumar/?q=hello";
  const actual = normalizeUrl(input);
  const expected = "bupd.github.io/kumar/";
  expect(actual).toEqual(expected);
});

test("normalizeUrl with query params", () => {
  const input = "https://bupd.github.io/kumar/?q=hello";
  const actual = normalizeUrl(input);
  const expected = "bupd.github.io/kumar/";
  expect(actual).toEqual(expected);
});

