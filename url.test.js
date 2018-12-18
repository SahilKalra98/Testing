const parse = require("./url");

test("should parse empty string", () => {
  expect(parse("")).toEqual({});
});
test("should parse one parameter", () => {
  expect(parse("sahil=150")).toEqual({ sahil: ["150"] });
});
test("should parse three unique parameters", () => {
  expect(parse("a=1&b=2&c=3")).toEqual({ a: ["1"], b: ["2"], c: ["3"] });
});
test("should parse duplicate parameters", () => {
  expect(parse("a=6&a=8&b=2&b=6&a=6")).toEqual({
    a: ["6", "8", "6"],
    b: ["2", "6"]
  });
});
