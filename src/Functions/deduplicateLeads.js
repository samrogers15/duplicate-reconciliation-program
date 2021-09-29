const { writeLog } = require("./logDuplicates");

const deduplicateLeads = (leadsArr) => {
  return leadsArr
    .slice()
    .reverse()
    .filter((lead, index, arr) => {
      const duplicateID = arr.findIndex((t) => t._id === lead._id) !== index;
      const duplicateEmail =
        arr.findIndex((t) => t.email === lead.email) !== index;
      if (duplicateID) {
        writeLog(lead, "ID", lead._id);
        return false;
      } else if (duplicateEmail) {
        writeLog(lead, "Email", lead.email);
        return false;
      }
      return true;
    });
};

module.exports = {
  deduplicateLeads,
};
