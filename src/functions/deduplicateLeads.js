const { writeLog } = require("./logDuplicates");

const deduplicateLeads = (arr) => {
  return arr
    .slice()
    .reverse()
    .filter((value, index, arr) => {
      const duplicateID = arr.findIndex((t) => t._id === value._id) !== index;
      const duplicateEmail =
        arr.findIndex((t) => t.email === value.email) !== index;
      if (duplicateID) {
        writeLog(arr[index], "ID", arr[index]._id);
        return false;
      } else if (duplicateEmail) {
        writeLog(arr[index], "Email", arr[index].email);
        return false;
      }
      return true;
    });
};

module.exports = {
  deduplicateLeads,
};
