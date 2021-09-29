const { deduplicateLeads } = require("./src/Functions/deduplicateLeads");
const { output } = require("./src/Functions/outputRevisedLeads");
const leads = require("./src/Inputs/leads.json").leads;
const revisedLeads = "./src/Outputs/output.json";

output(revisedLeads, deduplicateLeads(leads));
