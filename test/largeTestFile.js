const { deduplicateLeads } = require("../src/Functions/deduplicateLeads");
const { output } = require("../src/Functions/outputRevisedLeads");
const leads = require("../src/Inputs/largeLeads.json").leads;
const revisedLeads = "./src/Outputs/testOutput.json";

output(revisedLeads, deduplicateLeads(leads));
