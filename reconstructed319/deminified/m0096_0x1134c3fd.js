// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { gWt } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { N$r } from "B:/~BUN/root/chunk-eev762xg.js";
import { execFileSync as p } from "child_process";
import { lstatSync as g } from "fs";
import { join as m } from "path";
function E() {
  return !0;
}
class c {
  resolved = new Map();
  lookup(e) {
    return this.resolved.get(e);
  }
  remember(e, t) {
    this.resolved.set(e, t);
  }
  forget(e) {
    this.resolved.delete(e);
  }
}
var w = new W(() => new c()),
  timeout = 5000;
function u(e) {
  try {
    return g(e, {
      throwIfNoEntry: !1
    }) === void 0;
  } catch {
    return !1;
  }
}
var S = new Set([".com", ".exe", ".bat", ".cmd"]);
function v(e) {
  let t = e.toLowerCase().replace(/.*[\\/]/, "").replace(/[. ]+$/, ""),
    n = t.lastIndexOf(".");
  return n > 0 && S.has(t.slice(n));
}
function RPo(e, t = !1) {
  let n = w.of(H().host),
    o = n.lookup(e);
  if (o !== void 0) if (o !== null) {
    if (!u(o)) return o;
    n.forget(e);
  } else {
    if (!t) return o;
    n.forget(e);
  }
  let f = N$r("SYSTEMROOT") || "C:\\Windows",
    d = m(f, "System32", "where.exe");
  try {
    let i = p(d, [e], {
        stdio: "pipe",
        encoding: "utf8",
        timeout: timeout,
        windowsHide: !0,
        env: process.env
      }).trim().split(/\r?\n/).filter(Boolean),
      a = process.cwd(),
      l = !1;
    for (let r of i) {
      if (u(r)) continue;
      if (gWt(r, a)) {
        l = !0;
        continue;
      }
      if (!v(r)) continue;
      return n.remember(e, r), r;
    }
    if (i.length > 0 && !l) n.remember(e, null);
    return null;
  } catch (error) {
    if (y(error)) n.remember(e, null);
    return null;
  }
}
function y(e) {
  if (e === null || typeof e !== "object") return !1;
  let t = "status" in e ? e.status : void 0,
    n = "signal" in e ? e.signal : void 0,
    o = "code" in e ? e.code : void 0;
  return t === 1 && !n && !o;
}
function wN(e, t = !1) {
  if (!E()) return e;
  if (e.includes("/") || e.includes("\\")) return e;
  return RPo(e, t);
}
export { RPo, wN };