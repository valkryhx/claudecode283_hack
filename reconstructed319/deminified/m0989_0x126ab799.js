// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { homedir as r } from "os";
import { join as o } from "path";
function y3o() {
  if (x() === "windows" && i.APPDATA) return o(i.APPDATA, "gcloud");
  return o(r(), ".config", "gcloud");
}
function fnr() {
  return i.CLOUDSDK_CONFIG || y3o();
}
export { y3o, fnr };