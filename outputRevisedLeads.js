const fs = require("fs");

const output = (file, array) => {
  return fs.writeFile(file, JSON.stringify(array, null, "\t"), function (err) {
    if (err) {
      console.log(
        "Write error in duplicate reconciliation program: " + err.message
      );
    } else {
      console.log("Successful write to " + file);
    }
  });
};

module.exports = {
  output,
};
