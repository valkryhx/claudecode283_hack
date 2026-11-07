// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { mo } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, oi, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Gae } from "B:/~BUN/root/chunk-eev762xg.js";
import { P, Q, Wn, Dt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Jo, SRo, LO, nP, BBt, BJ, BFs, gC, LQi, xw, nGn } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { XN, jC } from "B:/~BUN/root/chunk-emd6eb45.js";
import { Za } from "B:/~BUN/root/chunk-n8t98fhm.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Fe } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { k1t } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { ijt, uP } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { hwe, ct, jHe, cn, fxe, Ur } from "B:/~BUN/root/chunk-bkfncj77.js";
import { HWn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Mr } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Su } from "B:/~BUN/root/chunk-3v92y8yw.js";
import { s, n, Vr } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt, Sn } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { D_e } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { ah } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { cl } from "B:/~BUN/root/chunk-78494p3w.js";
import { Ka, Dse } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { zHn, Vht, Y2i } from "B:/~BUN/root/chunk-42915bn6.js";
import { ode, Qes, n5t, NCn, ets, wI } from "B:/~BUN/root/chunk-27h4st9h.js";
import { re, cXt, Pmr } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { MZ } from "B:/~BUN/root/chunk-y7em5h10.js";
import { NQn } from "B:/~BUN/root/chunk-tj9bpqjb.js";
import { v4r } from "B:/~BUN/root/chunk-qx88ee6a.js";
import { $T } from "B:/~BUN/root/chunk-9x9jgvy9.js";
import { joi, PQn, OQn, IQn, obn } from "B:/~BUN/root/chunk-w0hz7yyr.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { svt, ajr, ivt, ljr, avt, mNo, yNo, _No, bNo } from "B:/~BUN/root/chunk-qbv6q0fp.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { XR } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { CWr } from "B:/~BUN/root/chunk-fs4prsr3.js";
import { is } from "B:/~BUN/root/chunk-09epe94m.js";
import { bs } from "B:/~BUN/root/chunk-s4zq7e5r.js";
import { Ys } from "B:/~BUN/root/chunk-28bb8488.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { xK } from "B:/~BUN/root/chunk-q42n6mwr.js";
import { MKt, C4r } from "B:/~BUN/root/chunk-gpfs8tp2.js";
import { ve, O, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { KP } from "B:/~BUN/root/chunk-48hpv12e.js";
import { f_, vb } from "B:/~BUN/root/chunk-az6xed3t.js";
import { nk } from "B:/~BUN/root/chunk-j7y9vsxb.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { $a } from "B:/~BUN/root/chunk-12nc74pv.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
import { join as Vi } from "path";
var Bi = 4000,
  Gi = 2000,
  gn = 3,
  hn = [nk, f_, vb, KP, MZ, cl];
async function bn(o, i, {
  promptFramed: promptFramed
} = {}) {
  let u = Vi(xK(o), `agent-${i}.jsonl`),
    d;
  try {
    d = await k1t(u);
  } catch (error) {
    return t(`readWorkflowAgentTranscript: ${u} not readable (${error instanceof Error ? error.message : String(error)})`), null;
  }
  let p = d.filter(wI),
    h = p.findIndex(item => item.type === "user"),
    b = h === -1 ? void 0 : p[h];
  for (let q = h + 1; h !== -1 && q < p.length; q++) {
    let z = p[q];
    if (z === void 0 || z.type !== "user" || z.isMeta === !0) break;
    b = z;
  }
  let x = b?.type === "user" ? b.message?.content : void 0,
    v = typeof x === "string" ? x : ds(x).trim(),
    prompt = promptFramed ? joi(v) : v,
    T = [],
    M = PQn(),
    I = new Map(),
    N,
    L = new Map(),
    J = {
      pendingCreates: new Map(),
      tasks: new Map()
    },
    K = void 0,
    finalText = "",
    E = [],
    V = "";
  for (let [q, z] of p.entries()) {
    if (z.type === "user") {
      let W = z.message?.content;
      if (Array.isArray(W)) for (let B of W) {
        if (!Ge(B) || B.type !== "tool_result" || typeof B.tool_use_id !== "string") continue;
        let dt = B.is_error === !0;
        if (IQn(M, B.tool_use_id, z.isVirtual === !0, dt), z.isVirtual !== !0 && M.uses.has(B.tool_use_id)) N = B.tool_use_id;
        let content = Xi(B.content),
          St = le() && z.isVirtual !== !0 && M.uses.has(B.tool_use_id) ? Zi(B.content, z.toolDenialKind, dt) : le() && content === "" && z.isVirtual === !0 ? tl(z.toolUseResult) : content;
        L.set(B.tool_use_id, {
          ...cs(St, Gi),
          isError: dt
        }), NCn(J, {
          tool_use_id: B.tool_use_id,
          is_error: dt,
          content: content
        });
      }
      continue;
    }
    if (z.type !== "assistant" || !Array.isArray(z.message?.content)) continue;
    let responseKey = z.message.id || `entry-${q}`;
    if (!(le() && z.isVirtual === !0)) V = responseKey, N = void 0;
    let rt = "";
    for (let W of z.message.content) {
      if (!Ge(W)) continue;
      if (W.type === "tool_use" && typeof W.name === "string") {
        if (le() && z.scriptErrorCopy === !0) continue;
        if (OQn(M, {
          id: W.id,
          name: W.name
        }, z.isVirtual === !0), z.isVirtual === !0 && typeof W.id === "string" && N !== void 0) I.set(W.id, N);
        if (T.push({
          id: typeof W.id === "string" ? W.id : "",
          name: W.name,
          input: W.input,
          responseKey: responseKey
        }), typeof W.id === "string" && W.id !== "") n5t(J, W);
        if (W.name === nk) K = W.input;
        if (W.name === ah && typeof W.id === "string" && D(W.input) && typeof W.input.message === "string") E.push({
          id: W.id,
          message: W.input.message
        });
        if (W.name === cl && W.input !== void 0) try {
          rt = _(W.input, null, 2);
        } catch {
          rt = String(W.input);
        }
      } else if (W.type === "text" && typeof W.text === "string") rt += W.text;
    }
    if (rt) finalText = rt;
  }
  let H = Y2i(i),
    X = E.find(item => item.id === H);
  if (X !== void 0) finalText = zHn(i) ? `Auto mode's check flagged this report or could not review it. Read it with care.

${X.message}` : X.message;else if (Vht(i) === void 0 && E.some(item => {
    let z = L.get(item.id);
    return z !== void 0 && !z.isError && z.head.startsWith('{"success":true');
  })) finalText = "";
  let ut = le() ? zi(T, M, L, I) : T,
    gt = q => le() && M.uses.has(q.id),
    wt = U(ut, q => !gt(q)),
    toolCalls = ut.map(item => {
      let fromLastResponse = item.responseKey === V,
        ot = gt(item);
      if (!ot) wt--;
      let rt = ot || (wt < gn || fromLastResponse) && !hn.includes(item.name);
      return {
        name: item.name,
        summary: ot ? "" : obn(item.input, item.name),
        fromLastResponse: fromLastResponse,
        fields: rt && !ot ? el(item.input) : [],
        result: Qi(item.id ? L.get(item.id) : void 0, rt)
      };
    }),
    lt = ets(J),
    tasks = lt.length > 0 ? lt : Qes(K);
  return {
    prompt: prompt,
    toolCalls: toolCalls,
    finalText: finalText,
    tasks: tasks
  };
}
function zi(o, i, a, u) {
  let d = new Map();
  for (let b of o) {
    let x = u.get(b.id);
    if (x !== void 0 && !i.helperCalls.has(b.id)) d.set(x, b.id);
  }
  let p = new Map(),
    h = [];
  for (let b of o) {
    if (i.helperCalls.has(b.id)) continue;
    if (i.uses.has(b.id)) {
      let v = a.get(b.id);
      if (v === void 0) h.push(b);else if (v.isError) {
        let C = d.get(b.id);
        if (C === void 0) h.push(b);else p.set(C, b);
      }
      continue;
    }
    h.push(b);
    let x = p.get(b.id);
    if (x !== void 0) h.push(x);
  }
  return h;
}
var Yi = {
  head: "",
  lineCount: 0,
  truncatedChars: 0
};
function Qi(o, i) {
  if (!o) return null;
  return i ? o : {
    ...Yi,
    isError: o.isError
  };
}
function cs(o, i) {
  let a = o.trimEnd(),
    head = a.length > i ? Q(a, i) : a;
  return {
    head: head,
    lineCount: Dt(a, `
`) + 1,
    truncatedChars: a.length - head.length
  };
}
function Ge(o) {
  return typeof o === "object" && o !== null && typeof o.type === "string";
}
function ds(o) {
  if (!Array.isArray(o)) return "";
  return o.filter(Ge).flatMap(item => item.type === "text" && typeof item.text === "string" ? item.text : []).join(`
`);
}
function Xi(o) {
  if (typeof o === "string") return o;
  let i = ds(o);
  if (i || !Array.isArray(o)) return i;
  let a = o.filter(Ge);
  return a.length === 0 ? "" : `(${a.map(item => item.type).join(", ")} content)`;
}
function Zi(o, i, a) {
  if (le()) {
    let u = typeof o === "string" ? o : Array.isArray(o) ? o.filter(Ge).find(item => item.type === "text")?.text : void 0,
      d = typeof u === "string" ? u : "",
      p = import.meta.require("B:/~BUN/root/chunk-rywmvdec.js").parseOutputEnvelope(d);
    if (p === null) return i !== void 0 ? d : a ? "Error" : "";
    if (i === "user-rejected") {
      let {
        REFUSAL_SENTENCE: REFUSAL_SENTENCE
      } = import.meta.require("B:/~BUN/root/chunk-pfgmtb0k.js");
      return p.error?.startsWith(REFUSAL_SENTENCE) ? REFUSAL_SENTENCE : Su;
    }
    if (p.error !== void 0) return import.meta.require("B:/~BUN/root/chunk-qf2wr1ya.js").scriptErrorLine(p.error);
    return a ? "Error" : "";
  }
  return "";
}
function tl(o) {
  if (o === void 0 || o === null) return "";
  if (typeof o === "string") return o;
  if (typeof o === "object" && "stdout" in o && typeof o.stdout === "string" && o.stdout !== "") return o.stdout;
  try {
    return _(o);
  } catch {
    return "";
  }
}
function el(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [["input", o]]).map(([key, u]) => {
    let d;
    if (typeof u === "string") d = u;else try {
      d = _(u) ?? String(u);
    } catch {
      d = String(u);
    }
    return {
      key: key,
      ...cs(d, Bi)
    };
  });
}
var us = "  ",
  ol = 40,
  ms = 8,
  nl = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
  text = ": ";
function gs(o, i) {
  let a = o.trim();
  if (i < ms || !a.startsWith("{") && !a.startsWith("[")) return null;
  try {
    let u = [];
    return xs(u, ee(a), 0, void 0, !1, i), u;
  } catch {
    return null;
  }
}
function yn(o, i) {
  let a = Math.floor(Math.max(0, i - ms) / us.length);
  return us.repeat(Math.min(o, a));
}
function hs(o) {
  return o.replace(nl, i => `\\u${i.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function fs(o) {
  return hs(oi(o));
}
function xn(o, i) {
  return o === void 0 ? [] : [{
    ...o,
    text: ct(o.text, i - text.length)
  }, {
    text: text,
    dimColor: !0
  }];
}
function ps(o, i, a, u, d, color) {
  if (a) {
    let text_2 = yn(i, d);
    o.push([{
      text: text_2
    }, {
      ...a,
      text: ct(a.text, d - text_2.length - 1)
    }, {
      text: ":",
      dimColor: !0
    }]);
  }
  let h = yn(a ? i + 1 : i, d),
    b = d - h.length;
  for (let x of u) {
    if (x === "") {
      o.push([{
        text: ""
      }]);
      continue;
    }
    for (let v of jHe(x, b)) o.push([color ? {
      text: h + v,
      color: color
    } : {
      text: h + v
    }]);
  }
}
function xs(o, i, a, u, d, p) {
  let text_3 = yn(a, p),
    b = p - text_3.length,
    text_7 = d ? "," : "",
    v = typeof u === "string" ? {
      text: fs(u),
      color: "permission"
    } : void 0;
  if (typeof i === "object" && i !== null) {
    if (a >= ol) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let I = Array.isArray(i) ? i.map((item, index) => [index, item]) : Object.entries(i),
      [text_5, L] = Array.isArray(i) ? ["[", "]"] : ["{", "}"];
    if (I.length === 0) {
      let text_4 = text_5 + L + text_7;
      o.push([{
        text: text_3
      }, ...xn(v, b - text_4.length), {
        text: text_4,
        dimColor: !0
      }]);
      return;
    }
    o.push([{
      text: text_3
    }, ...xn(v, b - text_5.length), {
      text: text_5,
      dimColor: !0
    }]);
    for (let J = 0; J < I.length; J++) {
      let [K, G] = I[J];
      xs(o, G, a + 1, K, J < I.length - 1, p);
    }
    o.push([{
      text: text_3
    }, {
      text: L + text_7,
      dimColor: !0
    }]);
    return;
  }
  if (typeof i === "number" && (Number.isInteger(i) ? !Number.isSafeInteger(i) : !Number.isFinite(i))) throw RangeError("JSON outcome number not representable");
  if (typeof i === "string" && i.includes(`
`)) {
    ps(o, a, v ?? (typeof u === "number" ? {
      text: `[${u}]`,
      dimColor: !0
    } : void 0), i.replace(/(?:\r?\n)+$/, "").split(/\r?\n/).map(item => hwe(hs(item))), p, void 0);
    return;
  }
  let text_6 = typeof i === "string" ? fs(i) : String(i),
    color_2 = typeof i === "string" ? "success" : "warning";
  if ((v === void 0 ? 0 : ce(v.text) + text.length) + ce(text_6) + text_7.length <= b) {
    o.push([{
      text: text_3
    }, ...xn(v, b), {
      text: text_6,
      color: color_2
    }, ...(text_7 ? [{
      text: text_7,
      dimColor: !0
    }] : [])]);
    return;
  }
  ps(o, a, v, [text_6 + text_7], p, color_2);
}
j();
import { join as ys } from "path";
import { mkdir as rl, writeFile as sl } from "fs/promises";
import { dirname as Cn, join as Tn } from "path";
var ze = "Use a different name or overwrite.";
async function il(o, i) {
  if (o === "user") return MKt();
  let a = await ll(i);
  if (await nGn(a)) throw c("workflow_save", "in_connector_downloads"), Error("Project-scope workflows can't be saved in or beneath a connector-downloads folder, because Claude Code doesn't load workflows from there. Save it with user scope, or from a session started outside that folder.");
  return a;
}
async function ll(o) {
  if (mo() !== null) throw c("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let i = HWn(o);
  if (i === null) return Tn(o, ".claude", "workflows");
  let a = (await ode("workflows", o))[0];
  if (a !== void 0) return a;
  return Tn(i, ".claude", "workflows");
}
async function kn(o, i) {
  let a = D_e(o.name),
    u = await il(o.scope, o.cwd),
    d = Tn(u, `${a}.js`);
  if (i !== void 0 && o.scope === "user") return al(i, a, d, o);
  let checkParentDir = o.scope !== "user" && !Gae(Cn(u));
  if (checkParentDir) try {
    await ijt(Cn(Cn(u)), u);
  } catch (error) {
    throw m("workflow_save", "write_failed"), error;
  }
  await rl(u, {
    recursive: !0,
    mode: 448
  });
  try {
    if (o.overwrite) await uP(d, o.script, {
      encoding: "utf8",
      mode: 384,
      checkParentDir: checkParentDir
    });else await sl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    });
  } catch (error) {
    if (!o.overwrite && k(error) === "EEXIST") throw c("workflow_save", "already_exists"), Error(`Dynamic workflow "${a}" already exists at ${d}. ${ze}`);
    throw m("workflow_save", "write_failed"), error;
  }
  return ws(a, d, o);
}
async function ws(name, path, a) {
  C4r();
  let {
    clearCommandMemoizationCaches: clearCommandMemoizationCaches
  } = await import("B:/~BUN/root/chunk-rrektmek.js");
  return clearCommandMemoizationCaches(), g("workflow_save"), l("tengu_workflow_saved", {
    scope: f(a.scope),
    overwrite: a.overwrite,
    script_size_chars: a.script.length
  }), {
    name: name,
    path: path,
    scope: a.scope
  };
}
async function al(o, i, a, u) {
  let d = await o.write(Ve.userConfigDir("workflows", [`${i}.js`]), u.script, u.overwrite ? {
    mode: 384,
    publishDiscipline: "atomic"
  } : {
    mode: 384,
    precondition: {
      type: "ifAbsent"
    }
  });
  if (!d.ok) {
    if (!u.overwrite && d.error.code === "AlreadyExists") throw c("workflow_save", "already_exists"), new R(`Dynamic workflow "${i}" already exists at ${a}. ${ze}`, "workflow name collision");
    throw m("workflow_save", "write_failed"), new R(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed");
  }
  return ws(i, a, u);
}
function Al(an) {
  return an.cwd;
}
function Wl(xo) {
  return xo === "project" ? "user" : "project";
}
function Ozt(o) {
  let E = S(54),
    {
      script: script,
      defaultName: defaultName,
      onDone: onDone
    } = o,
    {
      storageV5: storageV5
    } = Fe(),
    {
      columns: columns
    } = Re(),
    cwd = XR(Al),
    [value, x] = y(defaultName),
    [cursorOffset, onChangeCursorOffset] = y(defaultName.length),
    [scope, M] = y("project"),
    [I, N] = y(!1),
    [L, J] = y(null),
    [error_2, G] = y(null),
    V;
  if (E[0] === w) V = () => {
    J(null), G(null);
  }, E[0] = V;else V = E[0];
  let H = V,
    X;
  if (E[1] === w) X = ut => {
    x(ut), H();
  }, E[1] = X;else X = E[1];
  let onChange = X,
    wt;
  if (E[2] !== L || E[3] !== cwd || E[4] !== value || E[5] !== onDone || E[6] !== I || E[7] !== scope || E[8] !== script || E[9] !== storageV5) wt = () => {
    if (I) {
      return;
    }
    let name_2 = value.trim();
    if (!name_2) {
      return;
    }
    N(!0), G(null), kn({
      name: name_2,
      scope: scope,
      script: script,
      overwrite: L !== null,
      cwd: cwd
    }, storageV5).then(lt => {
      onDone(`Dynamic workflow saved to ${lt.path}. Invoke as /${lt.name} or Workflow({name: "${lt.name}"}) in future sessions.`);
    }).catch(at => {
      let q = at instanceof Error ? at.message : String(at);
      if (q.includes(ze)) {
        let z = q.match(/at (.+?)\. /);
        J(z?.[1] ?? "(unknown path)");
      } else G(q);
      N(!1);
    });
  }, E[2] = L, E[3] = cwd, E[4] = value, E[5] = onDone, E[6] = I, E[7] = scope, E[8] = script, E[9] = storageV5, E[10] = wt;else wt = E[10];
  let onSubmit = wt,
    rt;
  if (E[11] !== onDone) rt = () => onDone(), E[11] = onDone, E[12] = rt;else rt = E[12];
  let onCancel = rt,
    B;
  if (E[13] === w) B = {
    context: "Settings",
    isActive: !0
  }, E[13] = B;else B = E[13];
  pt("confirm:no", onCancel, B);
  let dt;
  if (E[14] === w) dt = kt => {
    if (kt.key === "tab") kt.preventDefault(), M(Wl), H();
  }, E[14] = dt;else dt = E[14];
  let onKeyDown = dt,
    zt;
  if (E[15] !== value) zt = D_e(value.trim() || "workflow"), E[15] = value, E[16] = zt;else zt = E[16];
  let te = zt,
    _t;
  if (E[17] !== scope || E[18] !== te) _t = scope === "project" ? `.claude/workflows/${te}.js` : ks(ys(MKt(), `${te}.js`)), E[17] = scope, E[18] = te, E[19] = _t;else _t = E[19];
  let yt = _t;
  const Ot = scope === "project" ? "Project" : "User";
  let subtitle;
  if (E[20] !== Ot || E[21] !== yt) subtitle = r(n, {
    dimColor: !0,
    children: [Ot, " scope \xB7 ", yt]
  }), E[20] = Ot, E[21] = yt, E[22] = subtitle;else subtitle = E[22];
  const action = L ? "overwrite" : "save";
  let Ue;
  if (E[23] !== action) Ue = e(Y, {
    chord: "enter",
    action: action
  }), E[23] = action, E[24] = Ue;else Ue = E[24];
  let rn, po;
  if (E[25] === w) rn = e(Y, {
    chord: "tab",
    action: "toggle scope"
  }), po = e(Y, {
    chord: "escape",
    action: "cancel"
  }), E[25] = rn, E[26] = po;else rn = E[25], po = E[26];
  let inputGuide;
  if (E[27] !== Ue) inputGuide = r(Ce, {
    children: [Ue, rn, po]
  }), E[27] = Ue, E[28] = inputGuide;else inputGuide = E[28];
  let go;
  if (E[29] === w) go = e(n, {
    children: "Save as:"
  }), E[29] = go;else go = E[29];
  let sn;
  if (E[30] === w) sn = e(n, {
    children: ">"
  }), E[30] = sn;else sn = E[30];
  const focus = !I,
    showCursor = !I;
  let st;
  if (E[31] !== columns || E[32] !== cursorOffset || E[33] !== onSubmit || E[34] !== value || E[35] !== focus || E[36] !== showCursor) st = r(s, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [sn, e(Ir, {
      value: value,
      onChange: onChange,
      onSubmit: onSubmit,
      focus: focus,
      showCursor: showCursor,
      columns: columns,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset
    })]
  }), E[31] = columns, E[32] = cursorOffset, E[33] = onSubmit, E[34] = value, E[35] = focus, E[36] = showCursor, E[37] = st;else st = E[37];
  let Yt;
  if (E[38] !== L) Yt = L && e(s, {
    marginTop: 1,
    children: r(n, {
      color: "warning",
      children: [L, " already exists. Press Enter again to overwrite, or change the name."]
    })
  }), E[38] = L, E[39] = Yt;else Yt = E[39];
  let Me;
  if (E[40] !== error_2) Me = error_2 && e(s, {
    marginTop: 1,
    children: e(Ys, {
      error: error_2
    })
  }), E[40] = error_2, E[41] = Me;else Me = E[41];
  let Le;
  if (E[42] !== I) Le = I && e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Saving\u2026"
    })
  }), E[42] = I, E[43] = Le;else Le = E[43];
  let children;
  if (E[44] !== st || E[45] !== Yt || E[46] !== Me || E[47] !== Le) children = r(s, {
    flexDirection: "column",
    children: [go, st, Yt, Me, Le]
  }), E[44] = st, E[45] = Yt, E[46] = Me, E[47] = Le, E[48] = children;else children = E[48];
  let ln;
  if (E[49] !== onCancel || E[50] !== subtitle || E[51] !== inputGuide || E[52] !== children) ln = e(is, {
    onKeyDown: onKeyDown,
    children: e(ke, {
      title: "Save dynamic workflow",
      subtitle: subtitle,
      onCancel: onCancel,
      color: "permission",
      isCancelActive: !1,
      inputGuide: inputGuide,
      children: children
    })
  }), E[49] = onCancel, E[50] = subtitle, E[51] = inputGuide, E[52] = children, E[53] = ln;else ln = E[53];
  return ln;
}
var En = 3,
  Rn = 100,
  maxLines = 12,
  maxLines_2 = 6;
function ge(o) {
  return Mr($a(o.replace(/\t/g, "  ")).trimEnd()).trimEnd();
}
function Dn({
  tasks: tasks_2,
  expanded: expanded,
  width: width,
  indent: u
}) {
  let lines = [],
    p = U(tasks_2, C => C.status === "completed");
  lines.push([{
    text: "Tasks",
    bold: !0,
    dimColor: !0
  }, {
    text: ct(` \xB7 ${p}/${tasks_2.length} done`, width - 5),
    dimColor: !0
  }]);
  let capped = tasks_2.length > En,
    b = tasks_2,
    x = [];
  if (!expanded && capped) {
    let C = [...tasks_2.filter(item => item.status === "in_progress"), ...tasks_2.filter(item => item.status === "pending"), ...tasks_2.filter(item => item.status === "completed")],
      T = new Set(C.slice(0, En));
    b = tasks_2.filter(item => T.has(item)), x = C.slice(En);
  } else if (expanded && tasks_2.length > Rn) b = tasks_2.slice(0, Rn), x = tasks_2.slice(Rn);
  let v = Math.max(4, width - ce(u) - 2);
  for (let C of b) {
    let T = ge(C.content),
      M = expanded ? jHe(T, v) : [ct(T, v)],
      I = M.length > 0 ? M : [""];
    for (let [N, L] of I.entries()) lines.push([{
      text: u
    }, N === 0 ? _l(C.status) : {
      text: " "
    }, {
      text: ` ${L}`,
      bold: C.status === "in_progress",
      dimColor: C.status !== "in_progress"
    }]);
  }
  if (x.length > 0) {
    let C;
    if (expanded) C = `${x.length} more`;else {
      let T = [],
        M = U(x, L => L.status === "in_progress"),
        I = U(x, L => L.status === "pending"),
        N = U(x, L => L.status === "completed");
      if (M > 0) T.push(`${M} in progress`);
      if (I > 0) T.push(`${I} pending`);
      if (N > 0) T.push(`${N} completed`);
      C = T.join(", ");
    }
    lines.push([{
      text: ct(`${u}\u2026 +${C}`, width),
      dimColor: !0
    }]);
  }
  return {
    lines: lines,
    capped: capped
  };
}
function _l(o) {
  let {
    icon: i,
    color: color_3
  } = CWr(o);
  return {
    text: i,
    color: color_3
  };
}
function Ye(o, i) {
  if (o.result === null) return i && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok";
}
function In({
  call: call,
  state: state,
  width: width_2,
  indent: u
}) {
  let d,
    p = null;
  switch (state) {
    case "running":
      d = {
        text: Jo,
        dimColor: !0
      }, p = {
        text: " \xB7 running",
        dimColor: !0
      };
      break;
    case "unanswered":
      d = {
        text: SRo,
        dimColor: !0
      }, p = {
        text: " \xB7 no result",
        dimColor: !0
      };
      break;
    case "ok":
      d = {
        text: Jo,
        color: "success"
      };
      break;
    case "error":
      d = {
        text: Jo,
        color: "error"
      }, p = {
        text: " \xB7 error",
        color: "error"
      };
      break;
  }
  let h = Math.max(1, width_2 - ce(u) - ce(d.text) - 1 - (p ? ce(p.text) : 0));
  if (le() && Ka(call.name) && call.result !== null) return El(call.result, width_2, u);
  let b = ge(Dse(call.name)),
    x = h - ce(b),
    v = x < 0 ? ct(b, h) : call.summary && x > 3 ? `${b}(${ct(ge(call.summary), x - 2)})` : b;
  return [{
    text: u
  }, d, {
    text: ` ${v}`,
    dimColor: state !== "running"
  }, ...(p ? [p] : [])];
}
function El(o, i, a) {
  let u = ge(Wn(o.head)) || "Error";
  return [{
    text: ct(`${a}  ${BFs}  ${u}`, i),
    color: "error"
  }];
}
function Es({
  call: call_2,
  state: state_2,
  width: width_3,
  indent: indent
}) {
  let d = [In({
    call: call_2,
    state: state_2,
    width: width_3,
    indent: indent
  })];
  if (hn.includes(call_2.name) || le() && Ka(call_2.name) && call_2.result !== null) return d;
  let indent_2 = `${indent}  `;
  Rl(d, call_2.fields, {
    indent: indent_2,
    width: width_3,
    maxLines: maxLines
  });
  let firstPrefix = `${indent_2}${BFs}  `;
  if (call_2.result && call_2.result.head === "") d.push([{
    text: ct(`${firstPrefix}(empty)`, width_3),
    color: call_2.result.isError ? "error" : void 0,
    dimColor: !call_2.result.isError
  }]);else if (call_2.result) Rs(d, call_2.result, {
    firstPrefix: firstPrefix,
    restPrefix: " ".repeat(ce(firstPrefix)),
    width: width_3,
    maxLines: maxLines_2,
    color: call_2.result.isError ? "error" : void 0
  });else if (state_2 === "unanswered") d.push([{
    text: ct(`${firstPrefix}(none recorded)`, width_3),
    dimColor: !0
  }]);
  return d;
}
function Rl(o, i, {
  indent: indent_3,
  width: width_4,
  maxLines: maxLines_3
}) {
  let maxLines_4 = maxLines_3,
    h = 0,
    b = 0,
    restPrefix = `${indent_3}  `;
  for (let v of i) {
    if (maxLines_4 <= 0) {
      h += v.lineCount;
      continue;
    }
    let C = ge(v.key),
      firstPrefix_2 = `${indent_3}${C}: `;
    if (!(v.lineCount === 1 && v.truncatedChars === 0 && ce(firstPrefix_2) + ce(ge(v.head)) <= width_4) && ce(firstPrefix_2) > Math.floor(width_4 / 2)) {
      if (o.push([{
        text: ct(`${indent_3}${C}:`, width_4),
        dimColor: !0
      }]), maxLines_4--, firstPrefix_2 = restPrefix, maxLines_4 <= 0) {
        h += v.lineCount;
        continue;
      }
    }
    let I = Rs(o, v, {
      firstPrefix: firstPrefix_2,
      restPrefix: restPrefix,
      width: width_4,
      maxLines: maxLines_4,
      color: void 0,
      reportHidden: !1
    });
    maxLines_4 -= I.lines, h += I.hiddenLines, b += I.hiddenChars;
  }
  Ds(o, indent_3, width_4, h, b);
}
function Rs(o, i, {
  firstPrefix: firstPrefix_3,
  restPrefix: restPrefix_2,
  width: width_5,
  maxLines: maxLines_5,
  color: color_4,
  reportHidden = !0
}) {
  let x = i.head.split(`
`),
    lines_2 = 0,
    hiddenLines = Math.max(0, i.lineCount - x.length),
    T = !0,
    M = Math.max(1, width_5 - ce(restPrefix_2));
  t: for (let [N, L] of x.entries()) {
    let J = ge(L),
      K = Q(J, (maxLines_5 - lines_2 + 1) * width_5),
      G = lines_2 === 0 ? Math.max(1, width_5 - ce(firstPrefix_3)) : M,
      E = jHe(K, G)[0] ?? "",
      V = K.slice(E.length),
      H = V ? [E, ...jHe(V, M)] : [E];
    for (let [X, ut] of H.entries()) {
      if (lines_2 >= maxLines_5) {
        hiddenLines += x.length - N, T = !1;
        break t;
      }
      o.push([{
        text: (lines_2 === 0 && X === 0 ? firstPrefix_3 : restPrefix_2) + ut,
        color: color_4,
        dimColor: color_4 === void 0
      }]), lines_2++;
    }
    if (K.length < J.length) {
      hiddenLines += x.length - N, T = !1;
      break;
    }
  }
  let hiddenChars = T ? i.truncatedChars : 0;
  if (reportHidden) Ds(o, restPrefix_2, width_5, hiddenLines, hiddenChars);
  return {
    lines: lines_2,
    hiddenLines: hiddenLines,
    hiddenChars: hiddenChars
  };
}
function Ds(o, i, a, u, d) {
  let p = u > 0 ? `\u2026 ${u} more ${P(u, "line")}` : d > 0 ? `\u2026 +${d} chars` : "";
  if (p) o.push([{
    text: ct(`${i}${p}`, a),
    dimColor: !0
  }]);
}
function Sc(v, C) {
  return e(n, {
    color: v.color,
    dimColor: v.dimColor,
    bold: v.bold ?? !1,
    children: v.text
  }, C);
}
function vc() {
  return null;
}
function Gt(o, to, a) {
  if (to <= a) return {
    from: 0,
    to: to,
    above: 0,
    below: 0
  };
  let u = Math.floor(a / 2),
    above = Math.max(0, Math.min(o - u, to - a)),
    to_2 = above + a;
  return {
    from: above,
    to: to_2,
    above: above,
    below: to - to_2
  };
}
function Rt(o) {
  return o.state === "start" || o.state === "progress";
}
function Nt(o, i) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    if (!i && NQn(o)) return "interrupted";
    return "failed";
  }
  if (!i) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running";
}
function uo(o) {
  switch (o) {
    case "done":
      return {
        glyph: re.tick,
        color: "success"
      };
    case "failed":
      return {
        glyph: re.cross,
        color: "error"
      };
    case "skipped":
      return {
        glyph: re.cross,
        color: "subtle"
      };
    case "blocked":
      return {
        glyph: re.cross,
        color: "permission"
      };
    case "queued":
    case "interrupted":
      return {
        glyph: SRo,
        color: "subtle"
      };
    case "running":
      return {
        glyph: Jo,
        color: "subtle"
      };
  }
}
var Jt = ["all", "running", "queued", "failed", "done", "skipped", "blocked", "interrupted"];
function Ke(o, i) {
  return i ? `showing ${o} ${i}` : `${o} ${P(o, "agent")}`;
}
function en(o, i) {
  if (o.status === "not-started") return "Not started yet";
  return i ? `No ${i} agents` : "No agents";
}
function It(o, i, a) {
  return Math.max(i, Math.min(a, o));
}
function wa(o, i) {
  let a = Nt(o, i),
    model = svt(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${Ur(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${cn(h * 1000)}`);
  }
  if (a === "queued") d.push("queued");
  if (a === "interrupted") d.push("stopped");
  if (a === "skipped") d.push("skipped");
  if (a === "blocked") d.push("blocked");
  if (a === "failed") d.push("failed");
  let p = o.durationMs ?? (a === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : void 0);
  return {
    model: model,
    stats: d.join(" \xB7 "),
    time: p != null ? fxe(p) : ""
  };
}
var Pi = 6;
function Hr(o, i, a, u) {
  if (i <= 0) return [];
  let {
      model: model_2,
      stats: stats,
      time: time
    } = wa(o, u),
    color_5 = a ? "permission" : void 0,
    dimColor = !a,
    v = (K, G) => G <= 0 ? "" : ct(K, G),
    text_11 = time ? v(time, i).padStart(Math.min(Pi, i)) : "",
    T = text_11 ? i - ce(text_11) - 1 : i,
    M = (K, G) => K && G ? 3 : 0,
    text_8 = model_2,
    text_10 = stats;
  if (ce(text_8) + M(text_8, text_10) + ce(text_10) > T) {
    if (text_10 = v(text_10, T - ce(text_8) - M(text_8, text_10)), ce(text_8) + M(text_8, text_10) + ce(text_10) > T) text_8 = v(text_8, T - ce(text_10) - M(text_8, text_10));
  }
  let text_9 = text_8 && text_10 ? " \xB7 " : "",
    J = Math.max(0, i - ce(text_8) - ce(text_9) - ce(text_10) - ce(text_11));
  return [{
    text: text_8,
    color: color_5,
    dimColor: dimColor
  }, {
    text: text_9,
    color: color_5,
    dimColor: dimColor
  }, {
    text: text_10,
    color: color_5,
    dimColor: dimColor
  }, {
    text: " ".repeat(J)
  }, {
    text: text_11,
    color: color_5,
    dimColor: dimColor
  }];
}
var ya = 40,
  Ca = 30;
function on(o, i) {
  let a = Math.min(ya, Math.max(22, i - Ca), Math.max(4, Math.min(i, Math.max(12, i - Pi - 1)))),
    u = o.reduce((acc, item) => Math.max(acc, ce(item.label)), 0);
  return Math.min(Math.max(12, u), a);
}
function zs(segs_2, i) {
  let a = 0;
  for (let u = 0; u < segs_2.length; u++) {
    let d = segs_2[u],
      p = ce(d.text);
    if (a + p > i) {
      let h = i - a,
        text_12 = h > 0 ? ct(d.text, h) : "",
        segs = segs_2.slice(0, u);
      if (text_12) segs.push({
        ...d,
        text: text_12
      });
      return {
        segs: segs,
        pad: Math.max(0, h - ce(text_12))
      };
    }
    a += p;
  }
  return {
    segs: segs_2,
    pad: Math.max(0, i - a)
  };
}
function We(o) {
  let u = S(7),
    {
      segs: segs_3,
      width: width_6
    } = o,
    d,
    p;
  if (u[0] !== segs_3 || u[1] !== width_6) {
    let {
      segs: segs_4,
      pad: pad
    } = zs(segs_3, width_6);
    d = segs_4.map(Sc);
    p = " ".repeat(pad);
    u[0] = segs_3, u[1] = width_6, u[2] = d, u[3] = p;
  } else d = u[2], p = u[3];
  let x;
  if (u[4] !== d || u[5] !== p) x = r(ne, {
    children: [d, p]
  }), u[4] = d, u[5] = p, u[6] = x;else x = u[6];
  return x;
}
function xt(o) {
  let u = S(7),
    {
      segs: segs_5,
      contentWidth: a
    } = o,
    d;
  if (u[0] === w) d = r(n, {
    color: "text",
    children: [" ", xw.pipe, " "]
  }), u[0] = d;else d = u[0];
  let p;
  if (u[1] !== a || u[2] !== segs_5) p = e(We, {
    segs: segs_5,
    width: a
  }), u[1] = a, u[2] = segs_5, u[3] = p;else p = u[3];
  let h;
  if (u[4] === w) h = r(n, {
    color: "text",
    children: [" ", xw.pipe]
  }), u[4] = h;else h = u[4];
  let b;
  if (u[5] !== p) b = r(n, {
    wrap: "truncate-end",
    children: [d, p, h]
  }), u[5] = p, u[6] = b;else b = u[6];
  return b;
}
function At(o, i) {
  let a = o.from > 0 ? re.arrowUp : " ",
    u = o.to < i ? re.arrowDown : " ";
  return `${a} ${o.from + 1}${LQi}${o.to} of ${i} ${u}`;
}
function qr(o) {
  let u = S(5),
    {
      win: win,
      total: total
    } = o,
    d;
  if (u[0] !== total || u[1] !== win) d = At(win, total), u[0] = total, u[1] = win, u[2] = d;else d = u[2];
  const children_2 = `  ${d}`;
  let h;
  if (u[3] !== children_2) h = e(n, {
    dimColor: !0,
    wrap: "truncate-end",
    children: children_2
  }), u[3] = children_2, u[4] = h;else h = u[4];
  return h;
}
function Kr(o) {
  let C = S(53),
    {
      phase: phase,
      selectedAgent: selectedAgent,
      level: level,
      contentWidth: contentWidth,
      viewport: viewport,
      tight: tight,
      workflowActive: workflowActive,
      filterLabel: filterLabel
    } = o,
    agents = phase.agents,
    T;
  if (C[0] !== contentWidth) T = BJ.repeat(contentWidth + 2), C[0] = contentWidth, C[1] = T;else T = C[1];
  let M = T,
    I,
    N;
  if (C[2] !== agents || C[3] !== M || C[4] !== contentWidth || C[5] !== filterLabel || C[6] !== level || C[7] !== phase || C[8] !== selectedAgent || C[9] !== tight || C[10] !== viewport || C[11] !== workflowActive) {
    let L = Gt(selectedAgent, agents.length, viewport);
    N = [];
    let J = Ke(agents.length, filterLabel);
    if (tight) {
      let text_14 = ct(` \xB7 ${J}`, Math.max(1, contentWidth - 1));
      let G = Math.max(1, contentWidth - ce(text_14));
      let text_13;
      if (C[14] !== phase.title || C[15] !== G) text_13 = ct(phase.title, G), C[14] = phase.title, C[15] = G, C[16] = text_13;else text_13 = C[16];
      let V;
      if (C[17] !== text_13) V = {
        text: text_13,
        color: "permission",
        bold: !0
      }, C[17] = text_13, C[18] = V;else V = C[18];
      let H;
      if (C[19] !== text_14) H = {
        text: text_14,
        dimColor: !0
      }, C[19] = text_14, C[20] = H;else H = C[20];
      let segs_6;
      if (C[21] !== V || C[22] !== H) segs_6 = [V, H], C[21] = V, C[22] = H, C[23] = segs_6;else segs_6 = C[23];
      let ut;
      if (C[24] !== contentWidth || C[25] !== segs_6) ut = e(xt, {
        contentWidth: contentWidth,
        segs: segs_6
      }, "title"), C[24] = contentWidth, C[25] = segs_6, C[26] = ut;else ut = C[26];
      N.push(ut);
    } else N.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: ct(phase.title, contentWidth),
        color: "permission",
        bold: !0
      }]
    }, "title")), N.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: ct(J, contentWidth),
        dimColor: !0
      }]
    }, "count")), N.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: ""
      }]
    }, "gap"));
    let gt = N.length;
    if (agents.length === 0) {
      let text_15;
      if (C[27] !== filterLabel || C[28] !== phase) text_15 = en(phase, filterLabel), C[27] = filterLabel, C[28] = phase, C[29] = text_15;else text_15 = C[29];
      let segs_7;
      if (C[30] !== text_15) segs_7 = [{
        text: text_15,
        dimColor: !0
      }], C[30] = text_15, C[31] = segs_7;else segs_7 = C[31];
      let H;
      if (C[32] !== contentWidth || C[33] !== segs_7) H = e(xt, {
        contentWidth: contentWidth,
        segs: segs_7
      }, "empty"), C[32] = contentWidth, C[33] = segs_7, C[34] = H;else H = C[34];
      N.push(H);
    } else {
      let wt = on(agents, contentWidth - 5);
      for (let ft = L.from; ft < L.to; ft++) {
        let lt = agents[ft];
        let at = level === "agents" && ft === selectedAgent;
        let {
          glyph: q,
          color: color_6
        } = uo(Nt(lt, workflowActive));
        let ot = ct(lt.label, wt);
        let rt = " ".repeat(Math.max(0, wt - ce(ot)));
        let W = Math.max(0, contentWidth - (wt + 5));
        N.push(e(xt, {
          contentWidth: contentWidth,
          segs: [{
            text: at ? re.pointer : " ",
            color: "permission"
          }, {
            text: " "
          }, {
            text: q,
            color: color_6
          }, {
            text: " "
          }, {
            text: `${ot}${rt}`,
            color: at ? "permission" : void 0,
            dimColor: !at && Rt(lt)
          }, {
            text: " "
          }, ...Hr(lt, W, at, workflowActive)]
        }, `a-${ft}`));
      }
    }
    let B = N.length - gt;
    for (let dt = B; dt < viewport; dt++) N.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: ""
      }]
    }, `pad-${dt}`));
    if (agents.length > viewport) {
      let children_3 = ` ${At(L, agents.length)} `;
      let St = Math.max(0, contentWidth + 2 - ce(children_3));
      let E;
      if (C[35] !== St) E = BJ.repeat(St), C[35] = St, C[36] = E;else E = C[36];
      let V;
      if (C[37] !== E) V = r(n, {
        color: "text",
        children: [" ", gC.bottomLeft, E]
      }), C[37] = E, C[38] = V;else V = C[38];
      let H;
      if (C[39] !== children_3) H = e(n, {
        dimColor: !0,
        children: children_3
      }), C[39] = children_3, C[40] = H;else H = C[40];
      let X;
      if (C[41] === w) X = e(n, {
        color: "text",
        children: gC.bottomRight
      }), C[41] = X;else X = C[41];
      let ut;
      if (C[42] !== V || C[43] !== H) ut = r(n, {
        wrap: "truncate-end",
        children: [V, H, X]
      }), C[42] = V, C[43] = H, C[44] = ut;else ut = C[44];
      I = ut;
    } else {
      let E;
      if (C[45] !== M) E = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", gC.bottomLeft, M, gC.bottomRight]
      }), C[45] = M, C[46] = E;else E = C[46];
      I = E;
    }
    C[2] = agents, C[3] = M, C[4] = contentWidth, C[5] = filterLabel, C[6] = level, C[7] = phase, C[8] = selectedAgent, C[9] = tight, C[10] = viewport, C[11] = workflowActive, C[12] = I, C[13] = N;
  } else I = C[12], N = C[13];
  let E;
  if (C[47] !== M) E = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", gC.topLeft, M, gC.topRight]
  }), C[47] = M, C[48] = E;else E = C[48];
  let V;
  if (C[49] !== I || C[50] !== N || C[51] !== E) V = r(s, {
    flexDirection: "column",
    children: [E, N, I]
  }), C[49] = I, C[50] = N, C[51] = E, C[52] = V;else V = C[52];
  return V;
}
function fo(o) {
  let p = S(12),
    {
      left: i,
      right: a,
      leftWidth: u,
      rightWidth: d
    } = o,
    h;
  if (p[0] === w) h = r(n, {
    color: "text",
    children: [" ", xw.pipe, " "]
  }), p[0] = h;else h = p[0];
  let b;
  if (p[1] !== i || p[2] !== u) b = e(We, {
    segs: i,
    width: u
  }), p[1] = i, p[2] = u, p[3] = b;else b = p[3];
  let x;
  if (p[4] === w) x = r(n, {
    color: "text",
    children: [" ", xw.pipe, " "]
  }), p[4] = x;else x = p[4];
  let v;
  if (p[5] !== a || p[6] !== d) v = e(We, {
    segs: a,
    width: d
  }), p[5] = a, p[6] = d, p[7] = v;else v = p[7];
  let C;
  if (p[8] === w) C = r(n, {
    color: "text",
    children: [" ", xw.pipe]
  }), p[8] = C;else C = p[8];
  let T;
  if (p[9] !== b || p[10] !== v) T = r(n, {
    wrap: "truncate-end",
    children: [h, b, x, v, C]
  }), p[9] = b, p[10] = v, p[11] = T;else T = p[11];
  return T;
}
function Uo(o, i) {
  let a = [],
    u = 0;
  if (i.label) {
    let children_4 = ` ${ct(i.label.text, Math.max(1, o - 2))} `;
    u += ce(children_4), a.push(e(n, {
      color: i.label.color ?? "text",
      bold: i.label.bold,
      children: children_4
    }, "label"));
  }
  let children_5 = i.tag ? ` ${ct(i.tag, Math.max(0, o - u - 2))} ` : "",
    p = Math.max(0, o - u - ce(children_5));
  if (a.push(e(n, {
    color: "text",
    children: BJ.repeat(p)
  }, "dash")), children_5) a.push(e(n, {
    dimColor: !0,
    children: children_5
  }, "tag"));
  return a;
}
function Zt(o) {
  let T = S(20),
    {
      pos: pos,
      leftWidth: leftWidth,
      rightWidth: rightWidth,
      leftTitle: d,
      rightTitle: p,
      leftTag: h,
      rightTag: b
    } = o,
    x = pos === "top" ? gC.topLeft : gC.bottomLeft,
    children_6 = pos === "top" ? xw.teeDown : xw.teeUp,
    children_7 = pos === "top" ? gC.topRight : gC.bottomRight,
    M;
  if (T[0] !== x) M = r(n, {
    color: "text",
    children: [" ", x]
  }), T[0] = x, T[1] = M;else M = T[1];
  const I = leftWidth + 2;
  let N;
  if (T[2] !== h || T[3] !== d || T[4] !== I) N = Uo(I, {
    label: d ? {
      text: d
    } : void 0,
    tag: h
  }), T[2] = h, T[3] = d, T[4] = I, T[5] = N;else N = T[5];
  let L;
  if (T[6] !== children_6) L = e(n, {
    color: "text",
    children: children_6
  }), T[6] = children_6, T[7] = L;else L = T[7];
  const J = rightWidth + 2;
  let K;
  if (T[8] !== b || T[9] !== p || T[10] !== J) K = Uo(J, {
    label: p ? {
      text: p
    } : void 0,
    tag: b
  }), T[8] = b, T[9] = p, T[10] = J, T[11] = K;else K = T[11];
  let G;
  if (T[12] !== children_7) G = e(n, {
    color: "text",
    children: children_7
  }), T[12] = children_7, T[13] = G;else G = T[13];
  let E;
  if (T[14] !== M || T[15] !== N || T[16] !== L || T[17] !== K || T[18] !== G) E = r(n, {
    wrap: "truncate-end",
    children: [M, N, L, K, G]
  }), T[14] = M, T[15] = N, T[16] = L, T[17] = K, T[18] = G, T[19] = E;else E = T[19];
  return E;
}
function ai(o, i, a, u, d) {
  let p = i === a,
    h = o.status === "done",
    b = o.status === "failed",
    text_17 = h ? re.tick : b ? re.cross : String(i + 1),
    color_7 = p ? "permission" : h ? "success" : b ? "error" : "inactive",
    text_19 = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "",
    text_16 = u === "phases" && p ? `${re.pointer} ` : "  ",
    M = ce(text_16) + ce(text_17) + 1,
    I = text_19 ? 1 + ce(text_19) : 0,
    text_18 = ct(o.title, Math.max(1, d - M - I)),
    L = Math.max(0, d - M - ce(text_18) - I),
    dimColor_2 = !p && o.status === "not-started",
    K = [{
      text: text_16,
      color: p ? "permission" : void 0
    }, {
      text: text_17,
      color: color_7
    }, {
      text: " "
    }, {
      text: text_18,
      color: p ? "permission" : void 0,
      dimColor: dimColor_2
    }, {
      text: " ".repeat(L)
    }];
  if (text_19) K.push({
    text: " "
  }, {
    text: text_19,
    color: p ? "permission" : "inactive"
  });
  return K;
}
function ci(o, i, a, u, d, p, h) {
  let b = u === "agents" && i === a,
    {
      glyph: x,
      color: color_8
    } = uo(Nt(o, h)),
    C = ct(o.label, p),
    T = " ".repeat(Math.max(0, p - ce(C))),
    M = Math.max(0, d - (p + 4));
  return [{
    text: b ? re.pointer : " ",
    color: "permission"
  }, {
    text: x,
    color: color_8
  }, {
    text: " "
  }, {
    text: `${C}${T}`,
    color: b ? "permission" : void 0,
    dimColor: !b && Rt(o)
  }, {
    text: " "
  }, ...Hr(o, M, b, h)];
}
function di(o, i, a, u, d) {
  let p = i === a,
    {
      glyph: h,
      color: color_9
    } = uo(Nt(o, d)),
    text_20 = ct(o.label, Math.max(1, u - 4));
  return [{
    text: p ? `${re.pointer} ` : "  ",
    color: "permission"
  }, {
    text: h,
    color: color_9
  }, {
    text: " "
  }, {
    text: text_20,
    color: p ? "permission" : void 0,
    dimColor: !p && Rt(o)
  }];
}
function Jr(o) {
  let M = S(41),
    {
      phases: phases,
      selectedPhase: selectedPhase,
      clampedPhase: clampedPhase,
      clampedAgent: clampedAgent,
      level: level_2,
      leftWidth: leftWidth_2,
      rightWidth: rightWidth_2,
      viewport: viewport_2,
      workflowActive: workflowActive_2,
      filterLabel: filterLabel_2
    } = o,
    agents_2 = selectedPhase.agents,
    I,
    N,
    pos_2,
    leftWidth_3,
    rightWidth_3,
    leftTag,
    rightTag,
    flexDirection,
    H,
    X;
  if (M[0] !== agents_2 || M[1] !== clampedAgent || M[2] !== clampedPhase || M[3] !== filterLabel_2 || M[4] !== leftWidth_2 || M[5] !== level_2 || M[6] !== phases || M[7] !== rightWidth_2 || M[8] !== selectedPhase || M[9] !== viewport_2 || M[10] !== workflowActive_2) {
    let ut = Gt(clampedPhase, phases.length, viewport_2);
    let gt = Gt(clampedAgent, agents_2.length, viewport_2);
    let wt = on(agents_2, rightWidth_2 - 4);
    let ft = [];
    for (let lt = 0; lt < viewport_2; lt++) {
      let at = ut.from + lt;
      let q = gt.from + lt;
      let left = at < ut.to ? ai(phases[at], at, clampedPhase, level_2, leftWidth_2) : [];
      let right;
      if (q < gt.to) right = ci(agents_2[q], q, clampedAgent, level_2, rightWidth_2, wt, workflowActive_2);else if (agents_2.length === 0 && lt === 0) right = [{
        text: en(selectedPhase, filterLabel_2),
        dimColor: !0
      }];else right = [];
      ft.push(e(fo, {
        left: left,
        right: right,
        leftWidth: leftWidth_2,
        rightWidth: rightWidth_2
      }, lt));
    }
    const title = selectedPhase.title;
    let W;
    if (M[21] !== agents_2.length || M[22] !== filterLabel_2) W = Ke(agents_2.length, filterLabel_2), M[21] = agents_2.length, M[22] = filterLabel_2, M[23] = W;else W = M[23];
    let rightTitle = `${title} \xB7 ${W}`;
    N = s;
    flexDirection = "column";
    if (M[24] !== leftWidth_2 || M[25] !== rightTitle || M[26] !== rightWidth_2) H = e(Zt, {
      pos: "top",
      leftWidth: leftWidth_2,
      rightWidth: rightWidth_2,
      leftTitle: "Phases",
      rightTitle: rightTitle
    }), M[24] = leftWidth_2, M[25] = rightTitle, M[26] = rightWidth_2, M[27] = H;else H = M[27];
    X = ft;
    I = Zt;
    pos_2 = "bottom";
    leftWidth_3 = leftWidth_2;
    rightWidth_3 = rightWidth_2;
    leftTag = phases.length > viewport_2 ? At(ut, phases.length) : void 0;
    rightTag = agents_2.length > viewport_2 ? At(gt, agents_2.length) : void 0;
    M[0] = agents_2, M[1] = clampedAgent, M[2] = clampedPhase, M[3] = filterLabel_2, M[4] = leftWidth_2, M[5] = level_2, M[6] = phases, M[7] = rightWidth_2, M[8] = selectedPhase, M[9] = viewport_2, M[10] = workflowActive_2, M[11] = I, M[12] = N, M[13] = pos_2, M[14] = leftWidth_3, M[15] = rightWidth_3, M[16] = leftTag, M[17] = rightTag, M[18] = flexDirection, M[19] = H, M[20] = X;
  } else I = M[11], N = M[12], pos_2 = M[13], leftWidth_3 = M[14], rightWidth_3 = M[15], leftTag = M[16], rightTag = M[17], flexDirection = M[18], H = M[19], X = M[20];
  let rt;
  if (M[28] !== I || M[29] !== pos_2 || M[30] !== leftWidth_3 || M[31] !== rightWidth_3 || M[32] !== leftTag || M[33] !== rightTag) rt = e(I, {
    pos: pos_2,
    leftWidth: leftWidth_3,
    rightWidth: rightWidth_3,
    leftTag: leftTag,
    rightTag: rightTag
  }), M[28] = I, M[29] = pos_2, M[30] = leftWidth_3, M[31] = rightWidth_3, M[32] = leftTag, M[33] = rightTag, M[34] = rt;else rt = M[34];
  let W;
  if (M[35] !== N || M[36] !== flexDirection || M[37] !== H || M[38] !== X || M[39] !== rt) W = r(N, {
    flexDirection: flexDirection,
    children: [H, X, rt]
  }), M[35] = N, M[36] = flexDirection, M[37] = H, M[38] = X, M[39] = rt, M[40] = W;else W = M[40];
  return W;
}
var collapsedLines_2 = 2,
  collapsedLines_3 = 20,
  $r = gn,
  hi = 100,
  bi = 250;
function Br(runId, agentId, a, promptFramed_2) {
  let M = S(13),
    [d, p] = y(null),
    b = ve(jC)?.setTimeout ?? XN,
    x = A(void 0),
    v = A(0),
    C = A(0),
    T = A(null),
    I,
    N;
  if (M[0] === w) I = () => () => {
    T.current = null;
  }, N = [], M[0] = I, M[1] = N;else I = M[0], N = M[1];
  O(I, N);
  let L;
  if (M[2] !== agentId || M[3] !== promptFramed_2 || M[4] !== b || M[5] !== runId) L = () => {
    if (!runId || !agentId) {
      return;
    }
    T.current = {
      runId: runId,
      agentId: agentId
    };
    let J = v.current = v.current + 1;
    let G = () => {
      bn(runId, agentId, {
        promptFramed: promptFramed_2
      }).catch(vc).then(transcript => {
        if (J > C.current && T.current?.runId === runId && T.current.agentId === agentId) C.current = J, x.current = agentId, p({
          agentId: agentId,
          transcript: transcript
        });
      });
    };
    if (x.current === agentId) {
      return b(G, bi);
    }
    G();
  }, M[2] = agentId, M[3] = promptFramed_2, M[4] = b, M[5] = runId, M[6] = L;else L = M[6];
  let E;
  if (M[7] !== agentId || M[8] !== promptFramed_2 || M[9] !== a || M[10] !== b || M[11] !== runId) E = [runId, agentId, a, promptFramed_2, b], M[7] = agentId, M[8] = promptFramed_2, M[9] = a, M[10] = b, M[11] = runId, M[12] = E;else E = M[12];
  if (O(L, E), !runId || !agentId) {
    return null;
  }
  if (!d || d.agentId !== agentId) {
    return "loading";
  }
  return d.transcript;
}
function Er(o, i) {
  let a = [];
  for (let u of o.split(`
`)) {
    if (u === "") {
      a.push("");
      continue;
    }
    for (let d of jHe(u, Math.max(1, i))) a.push(d);
  }
  return a;
}
function Si({
  lines: lines_3,
  title: i,
  body: body,
  collapsedLines: collapsedLines,
  expanded: expanded_2,
  indent: indent_4,
  width: width_7
}) {
  let b = body.length - collapsedLines,
    x = b >= 2 ? b : 0,
    v = [{
      text: i,
      bold: !0,
      dimColor: !0
    }];
  if (x > 0) v.push({
    text: ct(` \xB7 ${body.length} lines${expanded_2 ? "" : ` \xB7 ${BBt} expand`}`, width_7 - ce(i)),
    dimColor: !0
  });
  lines_3.push(v);
  let C = expanded_2 || x === 0 ? body : body.slice(0, collapsedLines);
  for (let T of C) lines_3.push(T);
  if (!expanded_2 && x > 0) lines_3.push([{
    text: ct(`${indent_4}\u2026 ${x} more ${P(x, "line")}`, width_7),
    dimColor: !0
  }]);
  return x;
}
function vi(o, i) {
  let a = 0;
  for (let u of i) {
    if (o < u.end) break;
    a += u.growth;
  }
  return o + a;
}
function Ai(o, i) {
  let a = 0;
  for (let u of i) {
    let d = u.end + a;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    a += u.growth;
  }
  return o - a;
}
var nn = {
  queued: "Queued",
  running: "Running",
  done: "Completed",
  failed: "Failed",
  skipped: "Skipped",
  blocked: "Blocked",
  interrupted: "Stopped"
};
function Wi({
  agent: agent,
  status: status,
  transcript: transcript_2,
  expanded: expanded_3,
  width: width_8,
  nowMs: nowMs
}) {
  let lines_4 = [],
    b = "  ",
    x = Math.max(8, width_8 - 2),
    v = transcript_2 === "loading" ? null : transcript_2,
    {
      glyph: C,
      color: color_10
    } = uo(status),
    M = [];
  if (agent.model != null) M.push(svt(agent.model, agent.fallbackModel));
  if (agent.agentType != null) M.push(agent.agentType);
  if (agent.isolation != null) M.push(agent.isolation === "remote" && agent.remoteSessionId ? `remote ${agent.remoteSessionId}` : agent.isolation);
  if (agent.cached) M.push("from resume journal");
  if (agent.attempt != null && agent.attempt > 1) {
    let W = agent.lastAttemptReason === "throttled" ? agent.label.endsWith(Pmr) ? cXt : "throttled" : agent.lastAttemptReason === "user-retry" ? "user retry" : "stalled";
    M.push(`attempt ${agent.attempt} (${W})`);
  }
  let I = ce(C) + 1 + ce(nn[status]),
    text_21 = M.length > 0 ? ct(` \xB7 ${M.join(" \xB7 ")}`, Math.max(0, width_8 - I)) : "";
  lines_4.push([{
    text: C,
    color: color_10
  }, {
    text: " "
  }, {
    text: nn[status],
    color: color_10,
    bold: !0
  }, ...(text_21 ? [{
    text: text_21,
    dimColor: !0
  }] : [])]);
  let L = [];
  if (agent.tokens != null) L.push(`${Ur(agent.tokens)} tok`);
  if (agent.toolCalls != null && agent.toolCalls > 0) L.push(`${agent.toolCalls} ${P(agent.toolCalls, "tool call")}`);
  if (agent.durationMs != null) L.push(cn(agent.durationMs));
  if (status === "queued" && agent.queuedAt != null) L.push(`waiting ${cn(Math.max(0, nowMs - agent.queuedAt))}`);
  if (status === "running" && agent.lastProgressAt != null) {
    let W = Math.floor((nowMs - agent.lastProgressAt) / 1000);
    if (W >= 30) L.push(`idle ${cn(W * 1000)}`);
  }
  if (L.length > 0) lines_4.push([{
    text: ct(L.join(" \xB7 "), width_8),
    dimColor: !0
  }]);
  lines_4.push([{
    text: ""
  }]);
  let J = status !== "queued" && v ? v.toolCalls : [],
    K = status === "running",
    G = J.filter(item => Ye(item, K) === "running"),
    E = le() ? J.flatMap(item => !Ka(item.name) || item.result !== null ? [item] : G.length === 1 && G[0] === item && agent.lastToolName != null ? [{
      ...item,
      name: agent.lastToolName,
      summary: agent.lastToolSummary ?? "",
      fields: []
    }] : []) : J,
    tasks_3 = v?.tasks ?? [],
    H = tasks_3.length > 0 ? Dn({
      tasks: tasks_3,
      expanded: !1,
      width: width_8,
      indent: "  "
    }) : null,
    X = tasks_3.length > 0 ? Dn({
      tasks: tasks_3,
      expanded: !0,
      width: width_8,
      indent: "  "
    }) : null,
    ut = expanded_3 ? X : H,
    detailExpandable = E.length > 0 || (ut?.capped ?? !1),
    wt = transcript_2 !== "loading" && transcript_2?.prompt ? transcript_2.prompt : agent.promptPreview ?? "",
    body_2 = wt ? Er(wt, x).map(item => [{
      text: "  " + item,
      dimColor: !0
    }]) : [[{
      text: "  " + (status === "queued" ? "Available once the agent starts." : transcript_2 === "loading" ? "Loading\u2026" : status === "running" ? "Not available yet (agent still running)." : "Transcript not available."),
      dimColor: !0
    }]],
    lt = Si({
      lines: lines_4,
      title: "Prompt",
      body: body_2,
      collapsedLines: collapsedLines_2,
      expanded: expanded_3,
      indent: "  ",
      width: width_8
    }),
    growth = lt > 0 ? lt - 1 : 0,
    q = growth,
    folds = [{
      end: lines_4.length - (expanded_3 ? q : 0),
      growth: growth
    }];
  if (lines_4.push([{
    text: ""
  }]), ut && H && X) {
    for (let B of ut.lines) lines_4.push(B);
    let growth_2 = X.lines.length - H.lines.length;
    q += growth_2, folds.push({
      end: lines_4.length - (expanded_3 ? q : 0),
      growth: growth_2
    }), lines_4.push([{
      text: ""
    }]);
  }
  if (status !== "queued") {
    let W = E.length - $r,
      B = Math.max(0, W - $r);
    while (le() && W > B && Ka(E[W]?.name)) W--;
    let dt = E.filter((item, index) => index >= W || Ye(item, K) === "running"),
      kt = [];
    for (let [_t, call_3] of dt.entries()) {
      if (_t > 0) kt.push([{
        text: ""
      }]);
      let state_3 = Ye(call_3, K);
      kt.push(...Es({
        call: call_3,
        state: state_3,
        width: width_8,
        indent: "  "
      }));
    }
    let text_22 = "";
    if (E.length > dt.length) text_22 = ` \xB7 ${dt.length <= $r ? "last " : ""}${dt.length} of ${E.length} tool calls`;
    let zt = Math.max(0, width_8 - ce("Activity")),
      te = ` \xB7 ${BBt} expand`;
    if (text_22 = !expanded_3 && detailExpandable && ce(text_22) + ce(te) <= zt ? text_22 + te : ct(text_22, zt), lines_4.push([{
      text: "Activity",
      bold: !0,
      dimColor: !0
    }, ...(text_22 ? [{
      text: text_22,
      dimColor: !0
    }] : [])]), E.length > 0) {
      if (expanded_3) for (let yt of kt) lines_4.push(yt);else for (let call_4 of dt) {
        let state_4 = Ye(call_4, K);
        lines_4.push(In({
          call: call_4,
          state: state_4,
          width: width_8,
          indent: "  "
        }));
      }
      let growth_3 = kt.length - dt.length;
      q += growth_3, folds.push({
        end: lines_4.length - (expanded_3 ? q : 0),
        growth: growth_3
      });
    } else if (agent.lastToolName != null) {
      let _t = agent.lastToolSummary ? `(${agent.lastToolSummary})` : "",
        yt = Dse(agent.lastToolName);
      lines_4.push([{
        text: ct(`  ${yt}${_t}`, width_8),
        dimColor: !0
      }]);
    } else lines_4.push([{
      text: `  ${status === "running" ? "No tool calls yet." : "No tool calls."}`,
      dimColor: !0
    }]);
    lines_4.push([{
      text: ""
    }]);
  }
  let body_3 = [];
  switch (status) {
    case "queued":
      body_3.push([{
        text: "  Waiting for an agent slot.",
        dimColor: !0
      }]);
      break;
    case "running":
      body_3.push([{
        text: `${"  "}Still running\u2026`,
        dimColor: !0
      }]);
      break;
    case "interrupted":
      body_3.push([{
        text: "  The workflow stopped before this agent finished.",
        dimColor: !0
      }]);
      break;
    case "skipped":
      body_3.push([{
        text: "  Skipped by user.",
        dimColor: !0
      }]);
      break;
    case "blocked":
    case "failed":
      {
        for (let W of Er(agent.error ?? "failed", x)) body_3.push([{
          text: "  " + W,
          color: "error"
        }]);
        break;
      }
    case "done":
      {
        let W = transcript_2 !== "loading" && transcript_2?.finalText ? transcript_2.finalText : agent.resultPreview ?? "";
        if (!W) {
          body_3.push([{
            text: "  " + (transcript_2 === "loading" ? "Loading\u2026" : "(empty)"),
            dimColor: !0
          }]);
          break;
        }
        let B = gs(W, x);
        if (B) for (let dt of B) body_3.push([{
          text: "  "
        }, ...dt]);else for (let dt of Er(W, x)) body_3.push([{
          text: "  " + dt
        }]);
        break;
      }
  }
  let rt = Si({
    lines: lines_4,
    title: "Outcome",
    body: body_3,
    collapsedLines: collapsedLines_3,
    expanded: expanded_3,
    indent: "  ",
    width: width_8
  });
  return {
    lines: lines_4,
    expandable: lt > 0 || rt > 0 || detailExpandable,
    folds: folds,
    detailExpandable: detailExpandable
  };
}
function Gr(o) {
  let M = S(42),
    {
      phase: phase_2,
      clampedAgent: clampedAgent_2,
      agentLabel: u,
      detailLines: detailLines,
      cardScroll: cardScroll,
      leftWidth: leftWidth_4,
      rightWidth: rightWidth_4,
      viewport: viewport_3,
      workflowActive: workflowActive_3,
      filterLabel: filterLabel_3
    } = o,
    agents_3 = phase_2.agents,
    I,
    N,
    pos_3,
    leftWidth_5,
    rightWidth_5,
    leftTag_2,
    rightTag_2,
    flexDirection_2,
    H,
    X;
  if (M[0] !== u || M[1] !== agents_3 || M[2] !== cardScroll || M[3] !== clampedAgent_2 || M[4] !== detailLines || M[5] !== filterLabel_3 || M[6] !== leftWidth_4 || M[7] !== phase_2.title || M[8] !== rightWidth_4 || M[9] !== viewport_3 || M[10] !== workflowActive_3) {
    let ut = Gt(clampedAgent_2, agents_3.length, viewport_3);
    let gt = Math.max(0, detailLines.length - viewport_3);
    let wt = It(cardScroll, 0, gt);
    let to_3 = Math.min(detailLines.length, wt + viewport_3);
    let lt = [];
    for (let at = 0; at < viewport_3; at++) {
      let q = ut.from + at;
      let left_2 = q < ut.to ? di(agents_3[q], q, clampedAgent_2, leftWidth_4, workflowActive_3) : [];
      let ot = wt + at;
      let right_2 = ot < to_3 ? detailLines[ot] : [];
      lt.push(e(fo, {
        left: left_2,
        right: right_2,
        leftWidth: leftWidth_4,
        rightWidth: rightWidth_4
      }, at));
    }
    N = s;
    flexDirection_2 = "column";
    const title_2 = phase_2.title;
    let B;
    if (M[21] !== agents_3.length || M[22] !== filterLabel_3) B = Ke(agents_3.length, filterLabel_3), M[21] = agents_3.length, M[22] = filterLabel_3, M[23] = B;else B = M[23];
    const leftTitle = `${title_2} \xB7 ${B}`;
    if (M[24] !== u || M[25] !== leftWidth_4 || M[26] !== rightWidth_4 || M[27] !== leftTitle) H = e(Zt, {
      pos: "top",
      leftWidth: leftWidth_4,
      rightWidth: rightWidth_4,
      leftTitle: leftTitle,
      rightTitle: u
    }), M[24] = u, M[25] = leftWidth_4, M[26] = rightWidth_4, M[27] = leftTitle, M[28] = H;else H = M[28];
    X = lt;
    I = Zt;
    pos_3 = "bottom";
    leftWidth_5 = leftWidth_4;
    rightWidth_5 = rightWidth_4;
    leftTag_2 = agents_3.length > viewport_3 ? At(ut, agents_3.length) : void 0;
    rightTag_2 = detailLines.length > viewport_3 ? At({
      from: wt,
      to: to_3
    }, detailLines.length) : void 0;
    M[0] = u, M[1] = agents_3, M[2] = cardScroll, M[3] = clampedAgent_2, M[4] = detailLines, M[5] = filterLabel_3, M[6] = leftWidth_4, M[7] = phase_2.title, M[8] = rightWidth_4, M[9] = viewport_3, M[10] = workflowActive_3, M[11] = I, M[12] = N, M[13] = pos_3, M[14] = leftWidth_5, M[15] = rightWidth_5, M[16] = leftTag_2, M[17] = rightTag_2, M[18] = flexDirection_2, M[19] = H, M[20] = X;
  } else I = M[11], N = M[12], pos_3 = M[13], leftWidth_5 = M[14], rightWidth_5 = M[15], leftTag_2 = M[16], rightTag_2 = M[17], flexDirection_2 = M[18], H = M[19], X = M[20];
  let W;
  if (M[29] !== I || M[30] !== pos_3 || M[31] !== leftWidth_5 || M[32] !== rightWidth_5 || M[33] !== leftTag_2 || M[34] !== rightTag_2) W = e(I, {
    pos: pos_3,
    leftWidth: leftWidth_5,
    rightWidth: rightWidth_5,
    leftTag: leftTag_2,
    rightTag: rightTag_2
  }), M[29] = I, M[30] = pos_3, M[31] = leftWidth_5, M[32] = rightWidth_5, M[33] = leftTag_2, M[34] = rightTag_2, M[35] = W;else W = M[35];
  let B;
  if (M[36] !== N || M[37] !== flexDirection_2 || M[38] !== H || M[39] !== X || M[40] !== W) B = r(N, {
    flexDirection: flexDirection_2,
    children: [H, X, W]
  }), M[36] = N, M[37] = flexDirection_2, M[38] = H, M[39] = X, M[40] = W, M[41] = B;else B = M[41];
  return B;
}
function zr(o) {
  let b = S(43),
    {
      agentLabel: agentLabel,
      position: position,
      detailLines: detailLines_2,
      cardScroll: cardScroll_2,
      contentWidth: contentWidth_2,
      viewport: viewport_4
    } = o,
    x;
  if (b[0] !== contentWidth_2) x = BJ.repeat(contentWidth_2 + 2), b[0] = contentWidth_2, b[1] = x;else x = b[1];
  let v = x,
    C = Math.max(0, detailLines_2.length - viewport_4),
    T,
    M;
  if (b[2] !== agentLabel || b[3] !== v || b[4] !== cardScroll_2 || b[5] !== contentWidth_2 || b[6] !== detailLines_2 || b[7] !== C || b[8] !== position || b[9] !== viewport_4) {
    let I = It(cardScroll_2, 0, C);
    let to_4 = Math.min(detailLines_2.length, I + viewport_4);
    M = [];
    let text_24 = ` \xB7 ${position}`;
    const J = Math.max(1, contentWidth_2 - ce(text_24));
    let text_23;
    if (b[12] !== agentLabel || b[13] !== J) text_23 = ct(agentLabel, J), b[12] = agentLabel, b[13] = J, b[14] = text_23;else text_23 = b[14];
    let G;
    if (b[15] !== text_23) G = {
      text: text_23,
      color: "permission",
      bold: !0
    }, b[15] = text_23, b[16] = G;else G = b[16];
    let E;
    if (b[17] !== text_24) E = {
      text: text_24,
      dimColor: !0
    }, b[17] = text_24, b[18] = E;else E = b[18];
    let segs_8;
    if (b[19] !== G || b[20] !== E) segs_8 = [G, E], b[19] = G, b[20] = E, b[21] = segs_8;else segs_8 = b[21];
    let H;
    if (b[22] !== contentWidth_2 || b[23] !== segs_8) H = e(xt, {
      contentWidth: contentWidth_2,
      segs: segs_8
    }, "title"), b[22] = contentWidth_2, b[23] = segs_8, b[24] = H;else H = b[24];
    M.push(H);
    for (let X = I; X < to_4; X++) M.push(e(xt, {
      contentWidth: contentWidth_2,
      segs: detailLines_2[X]
    }, `l-${X}`));
    for (let ut = to_4 - I; ut < viewport_4; ut++) M.push(e(xt, {
      contentWidth: contentWidth_2,
      segs: [{
        text: ""
      }]
    }, `pad-${ut}`));
    if (detailLines_2.length > viewport_4) {
      let children_8 = ` ${At({
        from: I,
        to: to_4
      }, detailLines_2.length)} `;
      let wt = Math.max(0, contentWidth_2 + 2 - ce(children_8));
      let ft;
      if (b[25] !== wt) ft = BJ.repeat(wt), b[25] = wt, b[26] = ft;else ft = b[26];
      let lt;
      if (b[27] !== ft) lt = r(n, {
        color: "text",
        children: [" ", gC.bottomLeft, ft]
      }), b[27] = ft, b[28] = lt;else lt = b[28];
      let at;
      if (b[29] !== children_8) at = e(n, {
        dimColor: !0,
        children: children_8
      }), b[29] = children_8, b[30] = at;else at = b[30];
      let q;
      if (b[31] === w) q = e(n, {
        color: "text",
        children: gC.bottomRight
      }), b[31] = q;else q = b[31];
      let z;
      if (b[32] !== at || b[33] !== lt) z = r(n, {
        wrap: "truncate-end",
        children: [lt, at, q]
      }), b[32] = at, b[33] = lt, b[34] = z;else z = b[34];
      T = z;
    } else {
      let ft;
      if (b[35] !== v) ft = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", gC.bottomLeft, v, gC.bottomRight]
      }), b[35] = v, b[36] = ft;else ft = b[36];
      T = ft;
    }
    b[2] = agentLabel, b[3] = v, b[4] = cardScroll_2, b[5] = contentWidth_2, b[6] = detailLines_2, b[7] = C, b[8] = position, b[9] = viewport_4, b[10] = T, b[11] = M;
  } else T = b[10], M = b[11];
  let J;
  if (b[37] !== v) J = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", gC.topLeft, v, gC.topRight]
  }), b[37] = v, b[38] = J;else J = b[38];
  let K;
  if (b[39] !== T || b[40] !== M || b[41] !== J) K = r(s, {
    flexDirection: "column",
    children: [J, M, T]
  }), b[39] = T, b[40] = M, b[41] = J, b[42] = K;else K = b[42];
  return K;
}
function Izt({
  workflow: workflow,
  onDone: onDone_2,
  onBack: onBack,
  onKill: onKill,
  onSkipAgent: onSkipAgent,
  onRetryAgent: onRetryAgent,
  onPause: onPause,
  onResume: onResume,
  initialPhaseIndex: initialPhaseIndex,
  promptVisibleBelow = !1
}) {
  Za("workflow-detail-dialog");
  let {
      availableRows: availableRows,
      width: width_9,
      rows: rows
    } = ajr(promptVisibleBelow),
    contentWidth_3 = Math.max(12, width_9 - 6),
    N = ivt(workflow),
    phases_2 = Z(() => mNo(workflow), [workflow.workflowProgress, workflow.phases]),
    J = Z(() => yNo(phases_2, workflow.agentCount), [phases_2, workflow.agentCount]),
    [K, G] = y(() => initialPhaseIndex !== void 0 ? Math.max(0, initialPhaseIndex) : 0),
    [E, V] = y(0),
    [H, X] = y(initialPhaseIndex !== void 0 ? "agents" : "phases"),
    [ut, gt] = y(!1),
    [wt, ft] = y({
      scroll: 0,
      expanded: !1
    }),
    {
      scroll: lt,
      expanded: expanded_4
    } = wt,
    [q, z] = y("all"),
    clampedPhase_2 = Math.min(K, Math.max(0, phases_2.length - 1)),
    rt = phases_2[clampedPhase_2],
    workflowActive_4 = workflow.status === "running",
    B = Z(() => {
      if (!rt || q === "all" || H === "phases") return rt;
      return {
        ...rt,
        agents: rt.agents.filter(item => Nt(item, workflowActive_4) === q)
      };
    }, [rt, q, H, workflowActive_4]),
    dt = B ? Math.min(E, Math.max(0, B.agents.length - 1)) : 0,
    [kt, St] = y(!1),
    zt = workflow.script.length > 0,
    defaultName_2 = Z(() => {
      if (!zt) return "";
      let F = $T(workflow.script);
      if (!("error" in F)) return F.meta.name;
      return D_e(workflow.summary ?? workflow.description);
    }, [zt, workflow.script, workflow.summary, workflow.description]),
    _t = Z(() => _No(workflow), [workflow.script, workflow.description, workflow.summary]),
    {
      name: name_3,
      subtext: subtext,
      stats: stats_2
    } = bNo(workflow, _t, J, N);
  function me() {
    ft({
      scroll: 0,
      expanded: !1
    });
  }
  function Ue(F) {
    G(Ct => It(It(Ct, 0, phases_2.length - 1) + F, 0, phases_2.length - 1)), V(0), me();
  }
  function rn(F) {
    if (!B) return;
    V(Ct => It(It(Ct, 0, B.agents.length - 1) + F, 0, B.agents.length - 1)), me();
  }
  function po(F) {
    ft(Ct => ({
      ...Ct,
      scroll: Math.max(0, Ct.scroll + F)
    }));
  }
  function oe(F) {
    if (H === "phases") {
      Ue(F);
      return;
    }
    rn(F);
  }
  function onCancel_2() {
    if (gt(!1), H === "agent") {
      X("agents");
      return;
    }
    if (H === "agents") {
      X("phases");
      return;
    }
    if (onBack) onBack();else onDone_2();
  }
  function sn() {
    if (rt && rt.agents.length > 0) V(0), z("all"), X("agents");
  }
  function ho() {
    if (!agent_2 || !rt) return;
    if (q !== "all") z("all"), V(rt.agents.indexOf(agent_2));
    if (me(), transcript_3 === "loading") gt(!0);else X("agent");
  }
  function bo() {
    if (!rt || ut) return;
    let F = new Set(rt.agents.map(item => Nt(item, workflowActive_4)));
    z(Ct => {
      let Mt = Jt.indexOf(Ct);
      for (let ie = 0; ie < Jt.length; ie++) {
        Mt = (Mt + 1) % Jt.length;
        let as = Jt[Mt];
        if (as === "all" || F.has(as)) break;
      }
      return Jt[Mt];
    }), V(0), me();
  }
  let agent_2 = H !== "phases" && B ? B.agents[dt] : void 0,
    status_2 = agent_2 ? Nt(agent_2, workflowActive_4) : void 0,
    Me = !!agent_2 && Rt(agent_2) && !!agent_2.agentId && !!onSkipAgent,
    Le = !!agent_2 && Rt(agent_2) && !!agent_2.agentId && !!onRetryAgent,
    se = width_9 - 9,
    ln = B ? Math.max(14, ...B.agents.map(item => 4 + ce(item.label))) : 14,
    leftWidth_6 = Math.max(12, Math.min(30, ln, se - 30)),
    rightWidth_6 = se - leftWidth_6,
    dn = H === "agent" && phases_2.length > 0 && width_9 >= 64 && rightWidth_6 >= 30,
    width_10 = dn ? rightWidth_6 : contentWidth_3,
    transcript_3 = Br(workflow.workflowRunId, agent_2?.agentId, agent_2?.lastProgressAt, agent_2?.promptFramed),
    Ni = Vr(ut ? hi : null);
  if (ut) {
    if (!agent_2) gt(!1);else if (transcript_3 !== "loading" || Ni) gt(!1), X("agent");
  }
  let nowMs_2 = status_2 === "queued" || status_2 === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Je = Z(() => H === "agent" && agent_2 && status_2 ? Wi({
      agent: agent_2,
      status: status_2,
      transcript: transcript_3,
      expanded: expanded_4,
      width: width_10,
      nowMs: nowMs_2
    }) : {
      lines: [],
      expandable: !1,
      folds: [],
      detailExpandable: !1
    }, [H, agent_2, status_2, transcript_3, expanded_4, width_10, nowMs_2]),
    yo = Je.lines;
  function Oi() {
    if (agent_2 && Rt(agent_2) && agent_2.agentId) onSkipAgent?.(agent_2.agentId);
  }
  function ji() {
    if (agent_2 && Rt(agent_2) && agent_2.agentId) onRetryAgent?.(agent_2.agentId);
  }
  Sn({
    "confirm:previous": () => oe(-1),
    "confirm:next": () => oe(1)
  }, {
    context: "Confirmation"
  });
  let un = workflow.status === "running" && !!onPause,
    fn = workflow.status === "paused" && !!workflow.scriptPath && !!workflow.workflowRunId && !!onResume,
    Xr = workflow.status === "running" && !!onKill && H === "phases";
  function Fi() {
    if (un) onPause?.();else if (fn) onResume?.(v4r(workflow));
  }
  let onKeyDown_2 = F => {
      if (F.ctrl || F.meta) return;
      if (F.key === "j") {
        if (F.preventDefault(), H === "agent") po(1);else oe(1);
      } else if (F.key === "k") {
        if (F.preventDefault(), H === "agent") po(-1);else oe(-1);
      } else if (F.key === "return" || F.key === "right") {
        if (F.preventDefault(), H === "phases") sn();else if (H === "agents") ho();else if (F.key === "return" && Je.expandable) {
          if (!expanded_4 && Je.detailExpandable) g("workflow_agent_card_detail");
          let {
            folds: folds_2
          } = Je;
          ft(({
            scroll: scroll,
            expanded: expanded_5
          }) => ({
            expanded: !expanded_5,
            scroll: expanded_5 ? Ai(scroll, folds_2) : vi(scroll, folds_2)
          }));
        }
      } else if (F.key === "left") F.preventDefault(), onCancel_2();else if (F.key === "r" && Le) F.preventDefault(), ji();else if (F.key === "x" && Me) F.preventDefault(), Oi();else if (F.key === "x" && Xr) F.preventDefault(), onKill?.();else if (F.key === " ") F.preventDefault(), onDone_2();else if (F.key === "p" && (un || fn)) F.preventDefault(), Fi();else if (F.key === "f" && H === "agents") F.preventDefault(), bo();else if (F.key === "s" && zt) F.preventDefault(), St(!0);
    },
    Co = phases_2.length > 0;
  if (kt) return e(Ozt, {
    script: workflow.script,
    defaultName: defaultName_2,
    onDone: F => {
      if (F) onDone_2(F);else St(!1);
    }
  });
  let tight_2 = availableRows < 18,
    Zr = availableRows - (tight_2 ? 8 : 11),
    ts = Math.max(1, Zr - 3),
    pn = phases_2.length > ts,
    es = pn ? Math.max(1, ts - 1) : phases_2.length,
    viewport_7 = Math.max(1, Zr - es - (pn ? 1 : 0)),
    win_2 = Gt(clampedPhase_2, phases_2.length, es),
    Ki = Math.max(14, ...phases_2.map((item, index) => {
      let Mt = item.status === "done" ? re.tick : item.status === "failed" ? re.cross : String(index + 1),
        ie = item.totalCount > 0 ? `${item.doneCount}/${item.totalCount}` : "";
      return 2 + ce(Mt) + 1 + ce(item.title) + (ie ? 1 + ce(ie) : 0);
    })),
    leftWidth_7 = Math.max(12, Math.min(34, Ki, se - 24)),
    rightWidth_7 = se - leftWidth_7,
    Ui = H !== "agent" && Co && width_9 >= 64 && rightWidth_7 >= 20,
    viewport_5 = Math.max(1, availableRows - (tight_2 ? 7 : 8)),
    viewport_6 = Math.max(3, availableRows - (tight_2 ? 8 : 9)),
    ss = dn ? viewport_5 : viewport_6,
    scroll_2 = Math.max(0, yo.length - ss);
  if (lt > scroll_2) ft({
    scroll: scroll_2,
    expanded: expanded_4
  });
  let filterLabel_4 = q !== "all" && H !== "phases" ? nn[q].toLowerCase() : void 0,
    Wt = [];
  if (H === "agent") {
    if (Wt.push(`${LO}${nP} agent`), yo.length > ss) Wt.push("j/k scroll");
    if (Je.expandable) Wt.push(`${BBt} ${expanded_4 ? "collapse" : "expand"}`);
  } else if (Co) Wt.push(`${LO}${nP} select`);
  if (Me) Wt.push("x stop");
  if (Xr) Wt.push("x stop workflow");
  if (Le) Wt.push("r restart");
  if (un) Wt.push("p pause");else if (fn) Wt.push("p resume");
  if (H === "agents" && Co) Wt.push(filterLabel_4 ? `f filter: ${filterLabel_4}` : "f filter");
  if (Wt.push("esc back"), zt) Wt.push("s save");
  let Ji = Wt.join(" \xB7 ");
  return e(is, {
    onKeyDown: onKeyDown_2,
    children: e(ke, {
      title: null,
      hideBorder: !0,
      hideInputGuide: !0,
      onCancel: onCancel_2,
      color: "text",
      children: r(s, {
        flexDirection: "column",
        width: width_9,
        minHeight: Math.max(tight_2 ? 8 : 12, Math.min(availableRows - 1, rows - 6)),
        maxHeight: Math.max(tight_2 ? 8 : 11, availableRows - 1),
        overflowY: "hidden",
        children: [!Co ? r(ne, {
          children: [e(bs, {
            children: "No agents yet."
          }), e(s, {
            flexGrow: 1
          })]
        }) : H === "agent" && agent_2 && B ? r(ne, {
          children: [e(avt, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), dn ? e(Gr, {
            phase: B,
            clampedAgent: dt,
            agentLabel: agent_2.label,
            detailLines: yo,
            cardScroll: lt,
            leftWidth: leftWidth_6,
            rightWidth: rightWidth_6,
            viewport: viewport_5,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }) : e(zr, {
            agentLabel: agent_2.label,
            position: `${dt + 1}/${B.agents.length}`,
            detailLines: yo,
            cardScroll: lt,
            contentWidth: contentWidth_3,
            viewport: viewport_6
          }), e(s, {
            flexGrow: 1
          })]
        }) : Ui && B ? r(ne, {
          children: [e(avt, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), e(Jr, {
            phases: phases_2,
            selectedPhase: B,
            clampedPhase: clampedPhase_2,
            clampedAgent: dt,
            level: H === "phases" ? "phases" : "agents",
            leftWidth: leftWidth_7,
            rightWidth: rightWidth_7,
            viewport: viewport_5,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }), e(s, {
            flexGrow: 1
          })]
        }) : r(ne, {
          children: [e(avt, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), phases_2.slice(win_2.from, win_2.to).map((item, Ct) => {
            let Mt = win_2.from + Ct;
            return e(ljr, {
              index: Mt + 1,
              title: item.title,
              done: item.doneCount,
              total: item.totalCount,
              status: item.status,
              selected: Mt === clampedPhase_2
            }, `${Mt}-${item.title}`);
          }), pn && e(qr, {
            win: win_2,
            total: phases_2.length
          }), e(s, {
            flexGrow: 1
          }), B ? e(Kr, {
            phase: B,
            selectedAgent: dt,
            level: H === "phases" ? "phases" : "agents",
            contentWidth: contentWidth_3,
            viewport: viewport_7,
            tight: tight_2,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }) : null]
        }), r(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: [" ", Ji]
        })]
      })
    })
  });
}
export { Ozt, Izt };