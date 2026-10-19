// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { eSs } from "B:/~BUN/root/chunk-qvd6ab1g.js";
import { mkdirSync as c, readFileSync as s } from "fs";
import { posix as u } from "path";
var PWt = "/sys/fs/cgroup/cpuacct";
function Qhn(e) {
  for (let n of e.split(`
`)) {
    let [, o, ...r] = n.split(":");
    if (o === "cpuacct" && r.length > 0) return r.join(":");
  }
  return;
}
function Zhn(e, n = c) {
  let o = e.split("/").filter(Boolean);
  if (o.length < 2 || o.at(-1)?.startsWith("cc-") || o.includes("..")) return;
  let r = u.join(PWt, e, eSs);
  try {
    n(r);
  } catch (error) {
    if (k(error) !== "EEXIST") {
      t(`Bash-tool CPU will not be measured separately, and nothing else changes: could not make the cpuacct group ${r} (${k(error) ?? d(error)})`);
      return;
    }
  }
  return r;
}
function Oet(e) {
  try {
    let n = Number(s(e, "utf8"));
    return Number.isFinite(n) ? n / 1e6 : void 0;
  } catch {
    return;
  }
}
export { PWt, Qhn, Zhn, Oet };