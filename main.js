const { deduplicateLeads } = require("./src/functions/deduplicateLeads");
const { output } = require("./src/functions/outputRevisedLeads");
const leads = require("./src/Inputs/leads.json").leads;
const revisedLeads = "./src/Outputs/output.json";

output(revisedLeads, deduplicateLeads(leads));