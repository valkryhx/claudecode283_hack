// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Wo
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  xo
} from "B:/~BUN/root/chunk-8hs4bwwk.js";
import {
  xl
} from "B:/~BUN/root/chunk-ewv6w8xv.js";
import {
  slt
} from "B:/~BUN/root/chunk-196w7fz7.js";
import {
  sep as i
} from "path";

function Wqe(t) {
  if (Wo()) return null;
  let e = `${slt()}${i}`,
    n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r
  }
  return null
}

function Fyo(t) {
  if (t?.file_path?.startsWith(xl())) return "Reading Plan";
  if (t?.file_path && Wqe(t.file_path)) return "Read agent output";
  return "Read"
}

function Ykr(t) {
  if (!t?.file_path) return null;
  let e = Wqe(t.file_path);
  if (e) return e;
  return xo(t.file_path)
}
export {
  Wqe,
  Fyo,
  Ykr
};
