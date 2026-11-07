// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { aKt } from "B:/~BUN/root/chunk-nck4h4jz.js";
import { ai } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { IGo, MGo, RK, oqr, aBe } from "B:/~BUN/root/chunk-q2dmnwgx.js";
import { snr } from "B:/~BUN/root/chunk-7vt2r34f.js";
function Uni(n) {
  let t = ai(Et(n, 80)).trim();
  return t !== "" ? t : "Untitled project";
}
function Bni(n) {
  switch (n) {
    case "flag":
      return '--project is gone. Put the project first, by its name in double quotes, its id or its link, as in /send-to-project "Billing service".';
    case "quotes":
      return 'Put the project\u2019s name between one pair of double quotes, as in /send-to-project "Billing service". For a name that holds a quote, run /send-to-project alone and pick the project.';
    case "link":
      return "That link is not a Claude Project\u2019s. Use the project\u2019s name in double quotes or its id, or run /send-to-project alone and pick the project.";
  }
}
function jni(n, t, e) {
  return t.kind === "ambiguous" ? `More than one of your Claude Projects is named \u201C${Et(t.name, 80)}\u201D. ${"Run /send-to-project alone to pick the project."}` : `None of your ${e ? `${aKt} most recently active ` : ""}personal projects is named \u201C${Et(n.trim(), 80)}\u201D. A project that is shared, paused or archived can\u2019t be named here, and a message can\u2019t open with a double quote. ${"Run /send-to-project alone to pick the project."}`;
}
var $Go = /^["\u201C]/;
function c_n(note) {
  let t = note.trimStart(),
    e = /^\S+/.exec(t)?.[0] ?? "";
  if (e === "--project" || e.startsWith("--project=")) return {
    kind: "problem",
    problem: "flag"
  };
  if ($Go.test(e)) {
    let o = /^["\u201C]([^"\u201C\u201D\n]*)["\u201D](?=[\s,.;:!?]|$)/.exec(t),
      name = o?.[1]?.trim() ?? "";
    return o === null || name === "" ? {
      kind: "problem",
      problem: "quotes"
    } : {
      kind: "name",
      name: name,
      note: t.slice(o[0].length).replace(/^[,.;:!?]+/, "").trim()
    };
  }
  let projectId = RK.test(e) ? e : snr(e)?.projectId ?? "";
  if (RK.test(projectId)) return {
    kind: "id",
    projectId: projectId,
    note: t.slice(e.length).trim()
  };
  return /^[a-z][a-z0-9+.-]*:\/\/\S*(\/project\/|chan_)/i.test(e) ? {
    kind: "problem",
    problem: "link"
  } : {
    kind: "note",
    note: note
  };
}
function a7n(n, t) {
  let e = new Map();
  for (let r of n) {
    let o = new Set([aBe(r.name), t.get(r.id) ?? ""]);
    o.delete("");
    for (let s of o) e.set(s, [...(e.get(s) ?? []), r]);
  }
  return e;
}
function l7n(n, t) {
  let [project, ...r] = t.get(aBe(n)) ?? [];
  if (project === void 0) return {
    kind: "none"
  };
  return r.length > 0 ? {
    kind: "ambiguous",
    name: project.name
  } : {
    kind: "match",
    project: project
  };
}
var l = Math.ceil(aKt / IGo);
async function d7n(n, t) {
  let e = [],
    typedNames = new Map(),
    o = null,
    truncated = !1;
  for (let i = 0; i < l; i++) {
    let c = await oqr(o, n, t);
    for (let a of c.channels) if (MGo(a) === null && RK.test(a.id)) e.push({
      id: a.id,
      name: ai(Et(a.name, 80)),
      lastMessageAtMs: a.lastMessageAtMs
    }), typedNames.set(a.id, aBe(a.name));
    if (o = c.nextCursor, o === null) break;
    truncated = i === l - 1;
  }
  return {
    projects: p(e).slice(0, aKt),
    truncated: truncated,
    typedNames: typedNames
  };
}
function p(n) {
  return n.toSorted((t, e) => (e.lastMessageAtMs ?? -1) - (t.lastMessageAtMs ?? -1));
}
export { Uni, Bni, jni, $Go, c_n, a7n, l7n, d7n };