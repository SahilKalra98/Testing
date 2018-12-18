require("./reduce.js");

test("it should reduce a single element array", () => {
  expect([1].sReduce((acc, e) => acc + e)).toEqual(1);
});
test("it should reduce 3 unique elements with initial value", () => {
  expect([4,5,6].sReduce((acc, e) => acc + e, 8)).toEqual(23);
})
test("it should reduce duplicate elements with intial value", () => {
  expect([4,5,6].sReduce((acc, e) => acc.concat(e), [2])).toEqual([2,4,5,6]);
})
test("it should reduce 3 unique elements with their respective indicies", () => {
  expect([4,5,6].sReduce((acc, e, i) => {
    return acc.concat([e,i]);
  }, [])).toEqual([4,0,5,1,6,2])
})
