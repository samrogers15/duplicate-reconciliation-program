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
      const duplicateID =
        arr.findIndex((t) => t._id === value._id) === index;
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

// const sortLeads = (array) => {
//   return array.sort(
//     (a, b) => new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime()
//   );
// };

// const deduplicateLeads = (array) => {
//   return sortLeads(array).filter((value, index, arr) => {
//     const duplicateEmail =
//       arr.findIndex((t) => t.email === value.email) === index;
//     const duplicateID = arr.findIndex((t) => t._id === value._id) === index;
//     if (duplicateID === false) {
//       writeLog(arr[index], "ID", arr[index]._id);
//     } else if (duplicateEmail === false) {
//       writeLog(arr[index], "Email", arr[index].email);
//     } else {
//       return true;
//     }
//   });
// };

// set up {} function after t=> so I can push the matches into the logging function
// remove sort function and in new function above, if it is a match, just prefer the property with newer date
// if the t function is true, filter or push to array for logger

// incorporate writeLog function to log duplicates
// write file to outputs.json
