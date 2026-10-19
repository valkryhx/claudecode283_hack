// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { homedir as r } from "os";
import { join as o } from "path";
function Uto() {
  if (I() === "windows" && a.APPDATA) return o(a.APPDATA, "gcloud");
  return o(r(), ".config", "gcloud");
}
function UOn() {
  return a.CLOUDSDK_CONFIG || Uto();
}
export { Uto, UOn };