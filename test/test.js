var MyMethods = require("../deduplicator");
var sortDate = MyMethods.sortDate;
var removeDupes = MyMethods.removeDupes;

var assert = require("assert");

describe("Sort date function test", () => {
  it("Should return true if the dates passed are identical.", () => {
    let x = { entryDate: "2014-05-07T17:31:20+00:00" };
    let y = { entryDate: "2014-05-07T17:31:20+00:00" };
    const result = sortDate(x, y);
    assert.equal(result, true);
  });

  it("Should return negative if the date in the first entry is after the date in the second entry.", () => {
    let x = { entryDate: "2017-05-07T17:31:20+00:00" };
    let y = { entryDate: "2014-05-07T17:31:20+00:00" };
    const result = sortDate(x, y);
    assert(result < 0);
  });

  it("Should return positive if the date in the first entry is before the date in the second entry.", () => {
    let x = { entryDate: "2014-05-07T17:31:20+00:00" };
    let y = { entryDate: "2017-05-07T17:31:20+00:00" };
    const result = sortDate(x, y);
    assert(result > 0);
  });

  it("Should fail if only passed one parameter.", () => {
    assert.throws(() => {
      let x = { entryDate: "2014-05-07T17:31:20+00:00" };
      sortDate(x);
    });
  });
});

describe("Remove duplicates function test.", () => {
  it("Removes duplicate values from array of objects based on property defined", () => {
    let array = [
      { email: "foo@bar.com" },
      { email: "mae@bar.com" },
      { email: "coo@bar.com" },
      { email: "foo@bar.com" },
    ];
    let property = "email";
    const result = removeDupes(array, property);
    assert(result.length === 3);
  });

  it("Does not augment any values from the array if there are no duplicates based on property defined.", () => {
    let array = [
      { email: "foo@bar.com" },
      { email: "mae@bar.com" },
      { email: "coo@bar.com" },
      { email: "foo1@bar.com" },
    ];
    let property = "email";
    const result = removeDupes(array, property);
    assert(result.length === 4);
  });
});
