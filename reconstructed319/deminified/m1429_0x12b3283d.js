// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { qe, F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { dt, Yt } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { Ti } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { YEo } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { pdi, E6o, mdi } from "B:/~BUN/root/chunk-7y5t5m69.js";
import { Uf } from "B:/~BUN/root/chunk-zy4xrndc.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
var v = /AndroidManifest\.xml|<manifest xmlns:android=/,
  y = /com\.android\.(application|library|tools\.build)/,
  E = /\bimport android\./,
  regExp = new RegExp(String.raw`(?:^|[;&|(]\s*)(?:(?:\w+=\S*|sudo|time|env)\s+)*(?:\S*[\\/])?(?:` + [String.raw`adb(?:\.exe)?\s`, String.raw`emulator(?:\.exe)?\s+(?:-|@)`, String.raw`(?:sdkmanager|avdmanager)\b`, String.raw`gradlew?(?:\.bat)?\s(?:\\\n|[^\n&|;])*\b(?:assemble|install|bundle)\w*(?:Debug|Release)\b`, String.raw`(?:npx\s+)?react-native\s+run-android\b`].join("|") + ")", "m"),
  S = [".kt", ".kts", ".java"],
  T = new Set([dt, Yt]);
function u() {
  return {
    kotlinOrJavaFileEdited: !1,
    evidence: null
  };
}
function l(e) {
  return e.kotlinOrJavaFileEdited && e.evidence !== null;
}
function A(e, r) {
  for (let o of r) {
    if (l(e)) return;
    let t = o.type === "progress" && (o.data.type === "agent_progress" || o.data.type === "skill_progress") ? o.data.message : o;
    if (t.type === "assistant") {
      if (!Array.isArray(t.message.content)) continue;
      for (let i of t.message.content) {
        if (i.type !== "tool_use") continue;
        let input = i.input;
        if (typeof input !== "object" || input === null) continue;
        if (T.has(i.name)) {
          if ("file_path" in input && typeof input.file_path === "string" && h(input.file_path)) e.kotlinOrJavaFileEdited = !0;
          if (e.evidence === null) e.evidence = "content" in input && c(input.content) || "new_string" in input && c(input.new_string) || null;
        } else if (e.evidence === null && Uf.includes(i.name) && "command" in input && typeof input.command === "string" && regExp.test(input.command)) e.evidence = "android_command";
      }
    } else if (t.type === "user" && e.evidence === null) {
      if (!Array.isArray(t.message.content)) continue;
      for (let i of t.message.content) {
        if (i.type !== "tool_result") continue;
        let n = R(i.content);
        if (n !== null) {
          e.evidence = n;
          break;
        }
      }
    }
  }
}
function h(e) {
  let r = e.toLowerCase();
  return S.some(item => r.endsWith(item));
}
function c(e) {
  if (typeof e !== "string") return null;
  if (E.test(e)) return "android_import";
  return d(e);
}
function d(e) {
  if (v.test(e)) return "android_manifest";
  return y.test(e) ? "gradle_plugin" : null;
}
function R(e) {
  if (typeof e === "string") return d(e);
  if (!Array.isArray(e)) return null;
  for (let r of e) {
    let o = r.type === "text" ? d(r.text) : null;
    if (o !== null) return o;
  }
  return null;
}
var k = {
  ios_app: () => {
    let e = pdi();
    return {
      absorb: r => mdi(e, r),
      trigger: () => E6o(e)
    };
  },
  android_app: () => {
    let e = u();
    return {
      absorb: r => A(e, r),
      trigger: () => l(e) ? e.evidence : null
    };
  }
};
function _() {
  return new Map(YEo.map(item => [item, k[item]()]));
}
class I {
  #t = _();
  #e = new Set();
  #n = new Set();
  #r = new WeakSet();
  get intents() {
    return this.#e;
  }
  absorb(e) {
    let r = [];
    if (this.#e.size === this.#t.size) return r;
    let o = e.filter(item => !this.#r.has(item));
    for (let t of o) if (D(t)) this.#r.add(t);
    for (let [kind, i] of this.#t) {
      if (this.#e.has(kind)) continue;
      let n = null;
      try {
        i.absorb(o);
        let trigger = i.trigger();
        if (trigger !== null) Ti({
          type: "system",
          subtype: "dev_intent",
          kind: kind,
          trigger: trigger
        }), this.#e.add(kind), n = trigger;
      } catch (error) {
        if (a(qe(F(error), "dev intent fold")), !this.#n.has(kind)) this.#n.add(kind), m("dev_intent_detect", "fold_threw");
      }
      let p = n;
      if (p !== null) r.push(kind), g("dev_intent_detect", {
        kind: f(kind),
        trigger: f(p)
      });
    }
    return r;
  }
  reset() {
    this.#t = _(), this.#e.clear(), this.#n.clear(), this.#r = new WeakSet();
  }
}
var ZOe = new W(() => new I());
export { ZOe };