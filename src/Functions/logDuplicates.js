const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "../src/Logs/duplicateEntries.log" }),
  ],
});

const writeLog = (lead, propName, propValue) =>
  logger.log({
    timestamp: new Date(),
    duplicateProperty: propName,
    message: "Lead removed from file due to duplicate " + propName + ": " + propValue,
    duplicateLead: lead,
    level: "info",
  });

module.exports = {
  writeLog,
};
