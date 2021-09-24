const { deduplicateLeads } = require("../deduplicateLeads");

const assert = require("assert");

describe("Remove duplicates function test.", () => {
  it("Removes duplicate values from array of objects based on duplicate email property", () => {
    let array = [
      {
        _id: "jkj238238jdsnfsj23",
        email: "foo@bar.com",
        firstName: "John",
        lastName: "Smith",
        address: "123 Street St",
        entryDate: "2014-05-07T17:30:20+00:00",
      },
      {
        _id: "edu45238jdsnfsj23",
        email: "mae@bar.com",
        firstName: "Ted",
        lastName: "Masters",
        address: "44 North Hampton St",
        entryDate: "2014-05-07T17:31:20+00:00",
      },
      {
        _id: "wabaj238238jdsnfsj23",
        email: "bog@bar.com",
        firstName: "Fran",
        lastName: "Jones",
        address: "8803 Dark St",
        entryDate: "2014-05-07T17:31:20+00:00",
      },
      {
        _id: "jkj238238jdsnfsj23",
        email: "coo@bar.com",
        firstName: "Ted",
        lastName: "Jones",
        address: "456 Neat St",
        entryDate: "2014-05-07T17:32:20+00:00",
      },
      {
        _id: "sel045238jdsnfsj23",
        email: "foo@bar.com",
        firstName: "John",
        lastName: "Smith",
        address: "123 Street St",
        entryDate: "2014-05-07T17:32:20+00:00",
      },
    ];
    const result = deduplicateLeads(array);
    const duplicateEmailRemoved = (arr, prop) => {
      return arr.some((element) => element.prop === prop);
    };
    assert(duplicateEmailRemoved(result, "sel045238jdsnfsj23") === false);
  });

  it("Removes duplicate values from array of objects based on duplicate ID property", () => {
    let array = [
      {
        _id: "jkj238238jdsnfsj23",
        email: "foo@bar.com",
        firstName: "John",
        lastName: "Smith",
        address: "123 Street St",
        entryDate: "2014-05-07T17:30:20+00:00",
      },
      {
        _id: "edu45238jdsnfsj23",
        email: "mae@bar.com",
        firstName: "Ted",
        lastName: "Masters",
        address: "44 North Hampton St",
        entryDate: "2014-05-07T17:31:20+00:00",
      },
      {
        _id: "wabaj238238jdsnfsj23",
        email: "bog@bar.com",
        firstName: "Fran",
        lastName: "Jones",
        address: "8803 Dark St",
        entryDate: "2014-05-07T17:31:20+00:00",
      },
      {
        _id: "jkj238238jdsnfsj23",
        email: "coo@bar.com",
        firstName: "Ted",
        lastName: "Jones",
        address: "456 Neat St",
        entryDate: "2014-05-07T17:32:20+00:00",
      },
    ];
    const result = deduplicateLeads(array);
    const duplicateIDRemoved = (arr, prop) => {
      return arr.some((element) => element.prop === prop);
    };
    assert(duplicateIDRemoved(result, "foo@bar.com") === false);
  });

  it("Removes duplicate values from array of objects based on duplicate Email or ID property", () => {
    let array = [
      {
        _id: "jkj238238jdsnfsj23",
        email: "foo@bar.com",
        firstName: "John",
        lastName: "Smith",
        address: "123 Street St",
        entryDate: "2014-05-07T17:30:20+00:00",
      },
      {
        _id: "edu45238jdsnfsj23",
        email: "mae@bar.com",
        firstName: "Ted",
        lastName: "Masters",
        address: "44 North Hampton St",
        entryDate: "2014-05-07T17:31:20+00:00",
      },
      {
        _id: "wabaj238238jdsnfsj23",
        email: "bog@bar.com",
        firstName: "Fran",
        lastName: "Jones",
        address: "8803 Dark St",
        entryDate: "2014-05-07T17:31:20+00:00",
      },
      {
        _id: "jkj238238jdsnfsj23",
        email: "coo@bar.com",
        firstName: "Ted",
        lastName: "Jones",
        address: "456 Neat St",
        entryDate: "2014-05-07T17:32:20+00:00",
      },
      {
        _id: "sel045238jdsnfsj23",
        email: "foo@bar.com",
        firstName: "John",
        lastName: "Smith",
        address: "123 Street St",
        entryDate: "2014-05-07T17:32:20+00:00",
      },
    ];
    const result = deduplicateLeads(array);
    assert(result.length === 4);
  });
});
