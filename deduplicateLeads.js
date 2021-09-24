const { writeLog } = require("./logDuplicates");
const { output } = require("./outputRevisedLeads");
const leads = require("./Inputs/leads.json").leads;
const revisedLeads = "./Outputs/output.json";

const deduplicateLeads = (array) => {
  return array
    .slice()
    .reverse()
    .filter((value, index, arr) => {
      const duplicateEmail =
        arr.findIndex((t) => t.email === value.email) === index;
      const duplicateID = arr.findIndex((t) => t._id === value._id) === index;
      if (duplicateID === false) {
        writeLog(arr[index], "ID", arr[index]._id);
      } else if (duplicateEmail === false) {
        writeLog(arr[index], "Email", arr[index].email);
      } else {
        return true;
      }
    });
};

output(revisedLeads, deduplicateLeads(leads));

module.exports = {
  deduplicateLeads,
};
