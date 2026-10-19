// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  de
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ts
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  Jd
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  uLt
} from "B:/~BUN/root/chunk-7j5tvnqj.js";
import {
  sep as i
} from "path";

function ydt(t) {
  if (de()) return null;
  let e = `${uLt()}${i}`,
    n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r
  }
  return null
}

function TSs(t) {
  if (t?.file_path?.startsWith(Jd())) return "Reading Plan";
  if (t?.file_path && ydt(t.file_path)) return "Read agent output";
  return "Read"
}

function Umo(t) {
  if (!t?.file_path) return null;
  let e = ydt(t.file_path);
  if (e) return e;
  return ts(t.file_path)
}
export {
  ydt,
  TSs,
  Umo
};
