// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ye, H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ei } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { dt, Kt, aFr } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Yis, xeo, Xis } from "B:/~BUN/root/chunk-t4v0bt40.js";
import { sy } from "B:/~BUN/root/chunk-hkc0g0wr.js";
var I = /AndroidManifest\.xml|<manifest xmlns:android=/,
  v = /com\.android\.(application|library|tools\.build)/,
  y = /\bimport android\./,
  regExp = new RegExp(String.raw`(?:^|[;&|(]\s*)(?:(?:\w+=\S*|sudo|time|env)\s+)*(?:\S*[\\/])?(?:` + [String.raw`adb(?:\.exe)?\s`, String.raw`emulator(?:\.exe)?\s+(?:-|@)`, String.raw`(?:sdkmanager|avdmanager)\b`, String.raw`gradlew?(?:\.bat)?\s(?:\\\n|[^\n&|;])*\b(?:assemble|install|bundle)\w*(?:Debug|Release)\b`, String.raw`(?:npx\s+)?react-native\s+run-android\b`].join("|") + ")", "m"),
  b = [".kt", ".kts", ".java"],
  D = new Set([dt, Kt]);
function u() {
  return {
    kotlinOrJavaFileEdited: !1,
    evidence: null
  };
}
function d(e) {
  return e.kotlinOrJavaFileEdited && e.evidence !== null;
}
function f(e, r) {
  for (let t of r) {
    if (d(e)) return;
    let i = t.type === "progress" && (t.data.type === "agent_progress" || t.data.type === "skill_progress") ? t.data.message : t;
    if (i.type === "assistant") {
      if (!Array.isArray(i.message.content)) continue;
      for (let o of i.message.content) {
        if (o.type !== "tool_use") continue;
        let input = o.input;
        if (typeof input !== "object" || input === null) continue;
        if (D.has(o.name)) {
          if ("file_path" in input && typeof input.file_path === "string" && S(input.file_path)) e.kotlinOrJavaFileEdited = !0;
          if (e.evidence === null) e.evidence = "content" in input && p(input.content) || "new_string" in input && p(input.new_string) || null;
        } else if (e.evidence === null && sy.includes(o.name) && "command" in input && typeof input.command === "string" && regExp.test(input.command)) e.evidence = "android_command";
      }
    } else if (i.type === "user" && e.evidence === null) {
      if (!Array.isArray(i.message.content)) continue;
      for (let o of i.message.content) {
        if (o.type !== "tool_result") continue;
        let n = T(o.content);
        if (n !== null) {
          e.evidence = n;
          break;
        }
      }
    }
  }
}
function S(e) {
  let r = e.toLowerCase();
  return b.some(item => r.endsWith(item));
}
function p(e) {
  if (typeof e !== "string") return null;
  if (y.test(e)) return "android_import";
  return a(e);
}
function a(e) {
  if (I.test(e)) return "android_manifest";
  return v.test(e) ? "gradle_plugin" : null;
}
function T(e) {
  if (typeof e === "string") return a(e);
  if (!Array.isArray(e)) return null;
  for (let r of e) {
    let t = r.type === "text" ? a(r.text) : null;
    if (t !== null) return t;
  }
  return null;
}
var R = {
  ios_app: () => {
    let e = Yis();
    return {
      absorb: r => Xis(e, r),
      trigger: () => xeo(e)
    };
  },
  android_app: () => {
    let e = u();
    return {
      absorb: r => f(e, r),
      trigger: () => d(e) ? e.evidence : null
    };
  }
};
function A() {
  return new Map(aFr.map(item => [item, R[item]()]));
}
class _ {
  #n = A();
  #e = new Set();
  #t = new Set();
  get intents() {
    return this.#e;
  }
  absorb(e) {
    let r = [];
    for (let [kind, i] of this.#n) {
      if (this.#e.has(kind)) continue;
      let o = null;
      try {
        i.absorb(e);
        let trigger = i.trigger();
        if (trigger !== null) Ei({
          type: "system",
          subtype: "dev_intent",
          kind: kind,
          trigger: trigger
        }), this.#e.add(kind), o = trigger;
      } catch (error) {
        if (l(Ye(H(error), "dev intent fold")), !this.#t.has(kind)) this.#t.add(kind), m("dev_intent_detect", "fold_threw");
      }
      let n = o;
      if (n !== null) r.push(kind), g("dev_intent_detect", {
        kind: c(kind),
        trigger: c(n)
      });
    }
    return r;
  }
  reset() {
    this.#n = A(), this.#e.clear(), this.#t.clear();
  }
}
var kbe = new z(() => new _());
export { kbe };