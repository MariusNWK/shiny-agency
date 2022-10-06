import { formatJobList, formatFetchParams } from "./";

describe("The formatJobList function", () => {
  it("should add a comma to a word", () => {
    const expectedState = "item2,";
    expect(formatJobList("item2", 3, 1)).toEqual(expectedState);
  });

  it("should not add a comma to the last element of the list", () => {
    const expectedState = "item3";
    expect(formatJobList("item3", 3, 2)).toEqual(expectedState);
  });
});

describe("The formatFetchParams function", () => {
  it("should use the right format for param", () => {
    const expectedState = "a1=true";
    expect(formatFetchParams({ 1: true })).toEqual(expectedState);
  });
  it("should concatenate params with an &", () => {
    const expectedState = "a1=true&a2=false";
    expect(formatFetchParams({ 1: true, 2: false })).toEqual(expectedState);
  });
});
