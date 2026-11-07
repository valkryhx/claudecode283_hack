// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { NAt } from "B:/~BUN/root/chunk-3001qdv8.js";
var D = "B:/~BUN/root/mermaid.min.js";
var H = `/*! mermaid v11.16.1 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist */
`;
async function J() {
  return H + (await NAt(D, import.meta.dirname));
}
export { J as loadMermaidBundleJs };