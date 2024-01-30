const { normalizeURL } = require("../crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
  const input = "https://bupd.github.io/";
  const actual = normalizeURL(input);
  const expected = "bupd.github.io";
  expect(actual).toEqual(expected);
});

test("normalizeURL with query params", () => {
  const input = "https://bupd.github.io";
  const actual = normalizeURL(input);
  const expected = "bupd.github.io";
  expect(actual).toEqual(expected);
});


test("normalizeURL with query params", () => {
  const input = "https://bupd.github.io/kumar/?q=hello";
  const actual = normalizeURL(input);
  const expected = "bupd.github.io/kumar";
  expect(actual).toEqual(expected);
});

test("normalizeURL with query params", () => {
  const input = "https://bupd.github.io/kumar/?q=hello";
  const actual = normalizeURL(input);
  const expected = "bupd.github.io/kumar";
  expect(actual).toEqual(expected);
});

test("normalizeURL with Capitals", () => {
  const input = "http://BUPD.github.io/";
  const actual = normalizeURL(input);
  const expected = "bupd.github.io";
  expect(actual).toEqual(expected);
});
