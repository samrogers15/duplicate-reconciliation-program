const input = './Inputs/leads.json';
const output = './Outputs/output.json';

const fs = require("fs");

const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "duplicateentries.log" }),
  ],
});

function writeLog(item, prop) {
  logger.log({
    timestamp: new Date(),
    level: "info",
    message: "Duplicate entry removed from file",
    duplicateProperty: prop,
    item: item,
  });
}

function removeDupes(leads, prop) {
  return leads.filter((obj, pos, arr) => {
    if (
      (arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos) ===
      false
    ) {
      writeLog(arr[pos], prop);
    } else {
      return true;
    }
  });
}

function sortDate(a, b) {
  if (new Date(b.entryDate).getTime() === new Date(a.entryDate).getTime()) {
    return true;
  } else {
    return new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime();
  }
}

fs.readFile(input, "utf8", function (err, data) {
  if (err) throw err;
  let leads = JSON.parse(data).leads.sort(sortDate);
  let results = {};

  results.leads = removeDupes(removeDupes(leads, "_id"), "email");
  results = JSON.stringify(results, null, "\t");

  fs.writeFile(output, results, function (err) {
    if (err) {
      console.log("write error: " + err.message);
    } else {
      console.log("Successful write to " + output);
    }
  });
});

module.exports = {
  sortDate: sortDate,
  removeDupes: removeDupes,
};
