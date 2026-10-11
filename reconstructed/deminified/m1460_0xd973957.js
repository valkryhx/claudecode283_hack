// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Fo } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { P, v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, fa, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { zde } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { I, re, Gt } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Fr, f6n, Yq, w$, eUe, Bx, ZHo, wb, eFo, o_ } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { yP, iS } from "B:/~BUN/root/chunk-1223v177.js";
import { vi } from "B:/~BUN/root/chunk-prb4vytb.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { Ae } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { C8e } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { xa } from "B:/~BUN/root/chunk-qqgpf856.js";
import { q5e, Hv } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { ie, ot, GUe, Zt, Jne, cr } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { L$t } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { s, n, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ze, Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { yX, Rn } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Use, UP, Gwr, Vwr, qwr, Kwr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { bi } from "B:/~BUN/root/chunk-9mfh08mz.js";
import { Ek, Mb, MB, Tk } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { CTn } from "B:/~BUN/root/chunk-4grky1fs.js";
import { Fy } from "B:/~BUN/root/chunk-5w2ram39.js";
import { ESt, zKt } from "B:/~BUN/root/chunk-5svskdvx.js";
import { j7r, BKt, W7r, jKt, WKt } from "B:/~BUN/root/chunk-4rt7ptvp.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { I1e, SSn, O1e, wSn, M1e, GQn, KQn, YQn, XQn } from "B:/~BUN/root/chunk-yknceak8.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { G_ } from "B:/~BUN/root/chunk-4r6zcwth.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { rvn } from "B:/~BUN/root/chunk-cg4vyrmt.js";
import { jr } from "B:/~BUN/root/chunk-1xe8mz4a.js";
import { ko } from "B:/~BUN/root/chunk-v1xd9kf3.js";
import { Cr } from "B:/~BUN/root/chunk-xpw4e8kb.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { uO } from "B:/~BUN/root/chunk-zfm0jkby.js";
import { S7e, ATn } from "B:/~BUN/root/chunk-xxtedykh.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { Pe, R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Sw } from "B:/~BUN/root/chunk-rcz149rn.js";
import { vte } from "B:/~BUN/root/chunk-5ym02gv2.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
import { join as Ji } from "path";
var Ui = 4000,
  Vi = 2000,
  ho = 3,
  xo = [Mb, Ek, Tk, Sw, MB, bi];
async function bo(o, l, {
  promptFramed: promptFramed
} = {}) {
  let u = Ji(uO(o), `agent-${l}.jsonl`),
    d;
  try {
    d = await C8e(u);
  } catch (error) {
    return t(`readWorkflowAgentTranscript: ${u} not readable (${error instanceof Error ? error.message : String(error)})`), null;
  }
  let f = d.filter(UP),
    h = f.findIndex(item => item.type === "user"),
    x = h === -1 ? void 0 : f[h];
  for (let G = h + 1; h !== -1 && G < f.length; G++) {
    let nt = f[G];
    if (nt === void 0 || nt.type !== "user" || nt.isMeta === !0) break;
    x = nt;
  }
  let y = x?.type === "user" ? x.message?.content : void 0,
    A = typeof y === "string" ? y : cs(y).trim(),
    prompt = promptFramed ? j7r(A) : A,
    C = [],
    W = BKt(),
    L = new Map(),
    D = {
      pendingCreates: new Map(),
      tasks: new Map()
    },
    M = void 0,
    finalText = "",
    H = "";
  for (let [G, nt] of f.entries()) {
    if (nt.type === "user") {
      let K = nt.message?.content;
      if (Array.isArray(K)) for (let Y of K) {
        if (!yn(Y) || Y.type !== "tool_result" || typeof Y.tool_use_id !== "string") continue;
        let mt = Y.is_error === !0;
        jKt(W, Y.tool_use_id, nt.isVirtual === !0, mt);
        let content = Yi(Y.content),
          pt = content;
        L.set(Y.tool_use_id, {
          ...as(pt, Vi),
          isError: mt
        }), qwr(D, {
          tool_use_id: Y.tool_use_id,
          is_error: mt,
          content: content
        });
      }
      continue;
    }
    if (nt.type !== "assistant" || !Array.isArray(nt.message?.content)) continue;
    let responseKey = nt.message.id || `entry-${G}`;
    H = responseKey;
    let Q = "";
    for (let K of nt.message.content) {
      if (!yn(K)) continue;
      if (K.type === "tool_use" && typeof K.name === "string") {
        if (W7r(W, {
          id: K.id,
          name: K.name
        }, nt.isVirtual === !0), C.push({
          id: typeof K.id === "string" ? K.id : "",
          name: K.name,
          input: K.input,
          responseKey: responseKey
        }), typeof K.id === "string" && K.id !== "") Vwr(D, K);
        if (K.name === Mb) M = K.input;
        if (K.name === bi && K.input !== void 0) try {
          Q = b(K.input, null, 2);
        } catch {
          Q = String(K.input);
        }
      } else if (K.type === "text" && typeof K.text === "string") Q += K.text;
    }
    if (Q) finalText = Q;
  }
  let z = C,
    E = z.length - ho,
    toolCalls = z.map((item, index) => {
      let fromLastResponse = item.responseKey === H,
        Q = (index >= E || fromLastResponse) && !xo.includes(item.name);
      return {
        name: item.name,
        summary: WKt(item.input),
        fromLastResponse: fromLastResponse,
        fields: Q ? zi(item.input) : [],
        result: Gi(item.id ? L.get(item.id) : void 0, Q)
      };
    }),
    O = Kwr(D),
    tasks = O.length > 0 ? O : Gwr(M);
  return {
    prompt: prompt,
    toolCalls: toolCalls,
    finalText: finalText,
    tasks: tasks
  };
}
var Bi = {
  head: "",
  lineCount: 0,
  truncatedChars: 0
};
function Gi(o, l) {
  if (!o) return null;
  return l ? o : {
    ...Bi,
    isError: o.isError
  };
}
function as(o, l) {
  let a = o.trimEnd(),
    head = a.length > l ? re(a, l) : a;
  return {
    head: head,
    lineCount: Gt(a, `
`) + 1,
    truncatedChars: a.length - head.length
  };
}
function yn(o) {
  return typeof o === "object" && o !== null && typeof o.type === "string";
}
function cs(o) {
  if (!Array.isArray(o)) return "";
  return o.filter(yn).flatMap(item => item.type === "text" && typeof item.text === "string" ? item.text : []).join(`
`);
}
function Yi(o) {
  if (typeof o === "string") return o;
  let l = cs(o);
  if (l || !Array.isArray(o)) return l;
  let a = o.filter(yn);
  return a.length === 0 ? "" : `(${a.map(item => item.type).join(", ")} content)`;
}
function zi(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [["input", o]]).map(([key, u]) => {
    let d;
    if (typeof u === "string") d = u;else try {
      d = b(u) ?? String(u);
    } catch {
      d = String(u);
    }
    return {
      key: key,
      ...as(d, Ui)
    };
  });
}
var ds = "  ",
  Qi = 40,
  fs = 8,
  Xi = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
  text = ": ";
function ms(o, l) {
  let a = o.trim();
  if (l < fs || !a.startsWith("{") && !a.startsWith("[")) return null;
  try {
    let u = [];
    return hs(u, J(a), 0, void 0, !1, l), u;
  } catch {
    return null;
  }
}
function Co(o, l) {
  let a = Math.floor(Math.max(0, l - fs) / ds.length);
  return ds.repeat(Math.min(o, a));
}
function gs(o) {
  return o.replace(Xi, l => `\\u${l.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function us(o) {
  return gs(fa(o));
}
function wo(o, l) {
  return o === void 0 ? [] : [{
    ...o,
    text: ot(o.text, l - text.length)
  }, {
    text: text,
    dimColor: !0
  }];
}
function ps(o, l, a, u, d, color) {
  if (a) {
    let text_2 = Co(l, d);
    o.push([{
      text: text_2
    }, {
      ...a,
      text: ot(a.text, d - text_2.length - 1)
    }, {
      text: ":",
      dimColor: !0
    }]);
  }
  let h = Co(a ? l + 1 : l, d),
    x = d - h.length;
  for (let y of u) {
    if (y === "") {
      o.push([{
        text: ""
      }]);
      continue;
    }
    for (let A of GUe(y, x)) o.push([color ? {
      text: h + A,
      color: color
    } : {
      text: h + A
    }]);
  }
}
function hs(o, l, a, u, d, f) {
  let text_3 = Co(a, f),
    x = f - text_3.length,
    text_7 = d ? "," : "",
    A = typeof u === "string" ? {
      text: us(u),
      color: "permission"
    } : void 0;
  if (typeof l === "object" && l !== null) {
    if (a >= Qi) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let L = Array.isArray(l) ? l.map((item, index) => [index, item]) : Object.entries(l),
      [text_5, M] = Array.isArray(l) ? ["[", "]"] : ["{", "}"];
    if (L.length === 0) {
      let text_4 = text_5 + M + text_7;
      o.push([{
        text: text_3
      }, ...wo(A, x - text_4.length), {
        text: text_4,
        dimColor: !0
      }]);
      return;
    }
    o.push([{
      text: text_3
    }, ...wo(A, x - text_5.length), {
      text: text_5,
      dimColor: !0
    }]);
    for (let q = 0; q < L.length; q++) {
      let [H, z] = L[q];
      hs(o, z, a + 1, H, q < L.length - 1, f);
    }
    o.push([{
      text: text_3
    }, {
      text: M + text_7,
      dimColor: !0
    }]);
    return;
  }
  if (typeof l === "number" && (Number.isInteger(l) ? !Number.isSafeInteger(l) : !Number.isFinite(l))) throw RangeError("JSON outcome number not representable");
  if (typeof l === "string" && l.includes(`
`)) {
    ps(o, a, A ?? (typeof u === "number" ? {
      text: `[${u}]`,
      dimColor: !0
    } : void 0), l.replace(/(?:\r?\n)+$/, "").split(/\r?\n/).map(item => vte(gs(item))), f, void 0);
    return;
  }
  let text_6 = typeof l === "string" ? us(l) : String(l),
    color_2 = typeof l === "string" ? "success" : "warning";
  if ((A === void 0 ? 0 : ie(A.text) + text.length) + ie(text_6) + text_7.length <= x) {
    o.push([{
      text: text_3
    }, ...wo(A, x), {
      text: text_6,
      color: color_2
    }, ...(text_7 ? [{
      text: text_7,
      dimColor: !0
    }] : [])]);
    return;
  }
  ps(o, a, A, [text_6 + text_7], f, color_2);
}
N();
import { join as bs } from "path";
import { mkdir as Zi, writeFile as tl } from "fs/promises";
import { dirname as To, join as So } from "path";
var Be = "Use a different name or overwrite.";
async function el(o, l) {
  if (o === "user") return S7e();
  if (Fo() !== null) throw p("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let a = L$t(l);
  if (a === null) return So(l, ".claude", "workflows");
  let u = (await Use("workflows", l))[0];
  if (u !== void 0) return u;
  return So(a, ".claude", "workflows");
}
async function vo(o, l) {
  let a = yX(o.name),
    u = await el(o.scope, o.cwd),
    d = So(u, `${a}.js`);
  if (l !== void 0 && o.scope === "user") return nl(l, a, d, o);
  let checkParentDir = o.scope !== "user" && !zde(To(u));
  if (checkParentDir) try {
    await q5e(To(To(u)), u);
  } catch (error) {
    throw m("workflow_save", "write_failed"), error;
  }
  await Zi(u, {
    recursive: !0,
    mode: 448
  });
  try {
    if (o.overwrite) await Hv(d, o.script, {
      encoding: "utf8",
      mode: 384,
      checkParentDir: checkParentDir
    });else await tl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    });
  } catch (error) {
    if (!o.overwrite && v(error) === "EEXIST") throw p("workflow_save", "already_exists"), Error(`Dynamic workflow "${a}" already exists at ${d}. ${Be}`);
    throw m("workflow_save", "write_failed"), error;
  }
  return xs(a, d, o);
}
async function xs(name, path, a) {
  ATn();
  let [{
    clearCommandMemoizationCaches: clearCommandMemoizationCaches
  }, {
    resetSentSkillNames: resetSentSkillNames
  }] = await Promise.all([import("B:/~BUN/root/chunk-41aze6gz.js"), import("B:/~BUN/root/chunk-h0jw9wg1.js")]);
  return clearCommandMemoizationCaches(), resetSentSkillNames(), _("workflow_save"), i("tengu_workflow_saved", {
    scope: c(a.scope),
    overwrite: a.overwrite,
    script_size_chars: a.script.length
  }), {
    name: name,
    path: path,
    scope: a.scope
  };
}
async function nl(o, l, a, u) {
  let d = await o.write(Ae.userConfigDir("workflows", [`${l}.js`]), u.script, u.overwrite ? {
    mode: 384,
    publishDiscipline: "atomic"
  } : {
    mode: 384,
    precondition: {
      type: "ifAbsent"
    }
  });
  if (!d.ok) {
    if (!u.overwrite && d.error.code === "AlreadyExists") throw p("workflow_save", "already_exists"), new P(`Dynamic workflow "${l}" already exists at ${a}. ${Be}`, "workflow name collision");
    throw m("workflow_save", "write_failed"), new P(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed");
  }
  return xs(l, a, u);
}
function wl(co) {
  return co.cwd;
}
function yl(gn) {
  return gn === "project" ? "user" : "project";
}
function jXe(o) {
  let E = w(54),
    {
      script: script,
      defaultName: defaultName,
      onDone: onDone
    } = o,
    {
      storageV5: storageV5
    } = ke(),
    {
      columns: columns
    } = ve(),
    cwd = G_(wl),
    [value, y] = g(defaultName),
    [cursorOffset, onChangeCursorOffset] = g(defaultName.length),
    [scope, W] = g("project"),
    [L, D] = g(!1),
    [M, q] = g(null),
    [error_2, z] = g(null),
    B;
  if (E[0] === S) B = () => {
    q(null), z(null);
  }, E[0] = B;else B = E[0];
  let O = B,
    rt;
  if (E[1] === S) rt = G => {
    y(G), O();
  }, E[1] = rt;else rt = E[1];
  let onChange = rt,
    gt;
  if (E[2] !== M || E[3] !== cwd || E[4] !== value || E[5] !== onDone || E[6] !== L || E[7] !== scope || E[8] !== script || E[9] !== storageV5) gt = () => {
    if (L) {
      return;
    }
    let name_2 = value.trim();
    if (!name_2) {
      return;
    }
    D(!0), z(null), vo({
      name: name_2,
      scope: scope,
      script: script,
      overwrite: M !== null,
      cwd: cwd
    }, storageV5).then(K => {
      onDone(`Dynamic workflow saved to ${K.path}. Invoke as /${K.name} or Workflow({name: "${K.name}"}) in future sessions.`);
    }).catch(Y => {
      let mt = Y instanceof Error ? Y.message : String(Y);
      if (mt.includes(Be)) {
        let it = mt.match(/at (.+?)\. /);
        q(it?.[1] ?? "(unknown path)");
      } else z(mt);
      D(!1);
    });
  }, E[2] = M, E[3] = cwd, E[4] = value, E[5] = onDone, E[6] = L, E[7] = scope, E[8] = script, E[9] = storageV5, E[10] = gt;else gt = E[10];
  let onSubmit = gt,
    dt;
  if (E[11] !== onDone) dt = () => onDone(), E[11] = onDone, E[12] = dt;else dt = E[12];
  let onCancel = dt,
    ut;
  if (E[13] === S) ut = {
    context: "Settings",
    isActive: !0
  }, E[13] = ut;else ut = E[13];
  ze("confirm:no", onCancel, ut);
  let Tt;
  if (E[14] === S) Tt = St => {
    if (St.key === "tab") St.preventDefault(), W(yl), O();
  }, E[14] = Tt;else Tt = E[14];
  let onKeyDown = Tt,
    Nt;
  if (E[15] !== value) Nt = yX(value.trim() || "workflow"), E[15] = value, E[16] = Nt;else Nt = E[16];
  let Ke = Nt,
    so;
  if (E[17] !== scope || E[18] !== Ke) so = scope === "project" ? `.claude/workflows/${Ke}.js` : xa(bs(S7e(), `${Ke}.js`)), E[17] = scope, E[18] = Ke, E[19] = so;else so = E[19];
  let Se = so;
  const We = scope === "project" ? "Project" : "User";
  let subtitle;
  if (E[20] !== We || E[21] !== Se) subtitle = r(n, {
    dimColor: !0,
    children: [We, " scope \xB7 ", Se]
  }), E[20] = We, E[21] = Se, E[22] = subtitle;else subtitle = E[22];
  const action = M ? "overwrite" : "save";
  let Je;
  if (E[23] !== action) Je = e(F, {
    chord: "enter",
    action: action
  }), E[23] = action, E[24] = Je;else Je = E[24];
  let io, un;
  if (E[25] === S) io = e(F, {
    chord: "tab",
    action: "toggle scope"
  }), un = e(F, {
    chord: "escape",
    action: "cancel"
  }), E[25] = io, E[26] = un;else io = E[25], un = E[26];
  let inputGuide;
  if (E[27] !== Je) inputGuide = r(ye, {
    children: [Je, io, un]
  }), E[27] = Je, E[28] = inputGuide;else inputGuide = E[28];
  let pn;
  if (E[29] === S) pn = e(n, {
    children: "Save as:"
  }), E[29] = pn;else pn = E[29];
  let lo;
  if (E[30] === S) lo = e(n, {
    children: ">"
  }), E[30] = lo;else lo = E[30];
  const focus = !L,
    showCursor = !L;
  let lt;
  if (E[31] !== columns || E[32] !== cursorOffset || E[33] !== onSubmit || E[34] !== value || E[35] !== focus || E[36] !== showCursor) lt = r(s, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [lo, e(Qn, {
      value: value,
      onChange: onChange,
      onSubmit: onSubmit,
      focus: focus,
      showCursor: showCursor,
      columns: columns,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset
    })]
  }), E[31] = columns, E[32] = cursorOffset, E[33] = onSubmit, E[34] = value, E[35] = focus, E[36] = showCursor, E[37] = lt;else lt = E[37];
  let Yt;
  if (E[38] !== M) Yt = M && e(s, {
    marginTop: 1,
    children: r(n, {
      color: "warning",
      children: [M, " already exists. Press Enter again to overwrite, or change the name."]
    })
  }), E[38] = M, E[39] = Yt;else Yt = E[39];
  let Le;
  if (E[40] !== error_2) Le = error_2 && e(s, {
    marginTop: 1,
    children: e(ko, {
      error: error_2
    })
  }), E[40] = error_2, E[41] = Le;else Le = E[41];
  let $e;
  if (E[42] !== L) $e = L && e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Saving\u2026"
    })
  }), E[42] = L, E[43] = $e;else $e = E[43];
  let children;
  if (E[44] !== lt || E[45] !== Yt || E[46] !== Le || E[47] !== $e) children = r(s, {
    flexDirection: "column",
    children: [pn, lt, Yt, Le, $e]
  }), E[44] = lt, E[45] = Yt, E[46] = Le, E[47] = $e, E[48] = children;else children = E[48];
  let ao;
  if (E[49] !== onCancel || E[50] !== subtitle || E[51] !== inputGuide || E[52] !== children) ao = e(jr, {
    onKeyDown: onKeyDown,
    children: e(ge, {
      title: "Save dynamic workflow",
      subtitle: subtitle,
      onCancel: onCancel,
      color: "permission",
      isCancelActive: !1,
      inputGuide: inputGuide,
      children: children
    })
  }), E[49] = onCancel, E[50] = subtitle, E[51] = inputGuide, E[52] = children, E[53] = ao;else ao = E[53];
  return ao;
}
var _o = 3,
  Io = 100,
  maxLines = 12,
  maxLines_2 = 6;
function Me(o) {
  return Rn(wt(o.replace(/\t/g, "  ")).trimEnd()).trimEnd();
}
function Po({
  tasks: tasks_2,
  expanded: expanded,
  width: width,
  indent: u
}) {
  let lines = [],
    f = U(tasks_2, k => k.status === "completed");
  lines.push([{
    text: "Tasks",
    bold: !0,
    dimColor: !0
  }, {
    text: ot(` \xB7 ${f}/${tasks_2.length} done`, width - 5),
    dimColor: !0
  }]);
  let capped = tasks_2.length > _o,
    x = tasks_2,
    y = [];
  if (!expanded && capped) {
    let k = [...tasks_2.filter(item => item.status === "in_progress"), ...tasks_2.filter(item => item.status === "pending"), ...tasks_2.filter(item => item.status === "completed")],
      C = new Set(k.slice(0, _o));
    x = tasks_2.filter(item => C.has(item)), y = k.slice(_o);
  } else if (expanded && tasks_2.length > Io) x = tasks_2.slice(0, Io), y = tasks_2.slice(Io);
  let A = Math.max(4, width - ie(u) - 2);
  for (let k of x) {
    let C = Me(k.content),
      W = expanded ? GUe(C, A) : [ot(C, A)],
      L = W.length > 0 ? W : [""];
    for (let [D, M] of L.entries()) lines.push([{
      text: u
    }, D === 0 ? Tl(k.status) : {
      text: " "
    }, {
      text: ` ${M}`,
      bold: k.status === "in_progress",
      dimColor: k.status !== "in_progress"
    }]);
  }
  if (y.length > 0) {
    let k;
    if (expanded) k = `${y.length} more`;else {
      let C = [],
        W = U(y, M => M.status === "in_progress"),
        L = U(y, M => M.status === "pending"),
        D = U(y, M => M.status === "completed");
      if (W > 0) C.push(`${W} in progress`);
      if (L > 0) C.push(`${L} pending`);
      if (D > 0) C.push(`${D} completed`);
      k = C.join(", ");
    }
    lines.push([{
      text: ot(`${u}\u2026 +${k}`, width),
      dimColor: !0
    }]);
  }
  return {
    lines: lines,
    capped: capped
  };
}
function Tl(o) {
  let {
    icon: l,
    color: color_3
  } = rvn(o);
  return {
    text: l,
    color: color_3
  };
}
function Tn(o, l) {
  if (o.result === null) return l && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok";
}
function Eo({
  call: call,
  state: state,
  width: width_2,
  indent: u
}) {
  let d,
    f = null;
  switch (state) {
    case "running":
      d = {
        text: Fr,
        dimColor: !0
      }, f = {
        text: " \xB7 running",
        dimColor: !0
      };
      break;
    case "unanswered":
      d = {
        text: f6n,
        dimColor: !0
      }, f = {
        text: " \xB7 no result",
        dimColor: !0
      };
      break;
    case "ok":
      d = {
        text: Fr,
        color: "success"
      };
      break;
    case "error":
      d = {
        text: Fr,
        color: "error"
      }, f = {
        text: " \xB7 error",
        color: "error"
      };
      break;
  }
  let h = Math.max(1, width_2 - ie(u) - ie(d.text) - 1 - (f ? ie(f.text) : 0)),
    x = Me(Do(call.name)),
    y = h - ie(x),
    A = y < 0 ? ot(x, h) : call.summary && y > 3 ? `${x}(${ot(Me(call.summary), y - 2)})` : x;
  return [{
    text: u
  }, d, {
    text: ` ${A}`,
    dimColor: state !== "running"
  }, ...(f ? [f] : [])];
}
function $s({
  call: call_2,
  state: state_2,
  width: width_3,
  indent: indent
}) {
  let d = [Eo({
    call: call_2,
    state: state_2,
    width: width_3,
    indent: indent
  })];
  if (xo.includes(call_2.name)) return d;
  let indent_2 = `${indent}  `;
  Sl(d, call_2.fields, {
    indent: indent_2,
    width: width_3,
    maxLines: maxLines
  });
  let firstPrefix = `${indent_2}${ZHo}  `;
  if (call_2.result && call_2.result.head === "") d.push([{
    text: ot(`${firstPrefix}(empty)`, width_3),
    color: call_2.result.isError ? "error" : void 0,
    dimColor: !call_2.result.isError
  }]);else if (call_2.result) Ms(d, call_2.result, {
    firstPrefix: firstPrefix,
    restPrefix: " ".repeat(ie(firstPrefix)),
    width: width_3,
    maxLines: maxLines_2,
    color: call_2.result.isError ? "error" : void 0
  });else if (state_2 === "unanswered") d.push([{
    text: ot(`${firstPrefix}(none recorded)`, width_3),
    dimColor: !0
  }]);
  return d;
}
function Sl(o, l, {
  indent: indent_3,
  width: width_4,
  maxLines: maxLines_3
}) {
  let maxLines_4 = maxLines_3,
    h = 0,
    x = 0,
    restPrefix = `${indent_3}  `;
  for (let A of l) {
    if (maxLines_4 <= 0) {
      h += A.lineCount;
      continue;
    }
    let k = Me(A.key),
      firstPrefix_2 = `${indent_3}${k}: `;
    if (!(A.lineCount === 1 && A.truncatedChars === 0 && ie(firstPrefix_2) + ie(Me(A.head)) <= width_4) && ie(firstPrefix_2) > Math.floor(width_4 / 2)) {
      if (o.push([{
        text: ot(`${indent_3}${k}:`, width_4),
        dimColor: !0
      }]), maxLines_4--, firstPrefix_2 = restPrefix, maxLines_4 <= 0) {
        h += A.lineCount;
        continue;
      }
    }
    let L = Ms(o, A, {
      firstPrefix: firstPrefix_2,
      restPrefix: restPrefix,
      width: width_4,
      maxLines: maxLines_4,
      color: void 0,
      reportHidden: !1
    });
    maxLines_4 -= L.lines, h += L.hiddenLines, x += L.hiddenChars;
  }
  Rs(o, indent_3, width_4, h, x);
}
function Ms(o, l, {
  firstPrefix: firstPrefix_3,
  restPrefix: restPrefix_2,
  width: width_5,
  maxLines: maxLines_5,
  color: color_4,
  reportHidden = !0
}) {
  let y = l.head.split(`
`),
    lines_2 = 0,
    hiddenLines = Math.max(0, l.lineCount - y.length),
    C = !0,
    W = Math.max(1, width_5 - ie(restPrefix_2));
  t: for (let [D, M] of y.entries()) {
    let q = Me(M),
      H = re(q, (maxLines_5 - lines_2 + 1) * width_5),
      z = lines_2 === 0 ? Math.max(1, width_5 - ie(firstPrefix_3)) : W,
      E = GUe(H, z)[0] ?? "",
      B = H.slice(E.length),
      O = B ? [E, ...GUe(B, W)] : [E];
    for (let [rt, G] of O.entries()) {
      if (lines_2 >= maxLines_5) {
        hiddenLines += y.length - D, C = !1;
        break t;
      }
      o.push([{
        text: (lines_2 === 0 && rt === 0 ? firstPrefix_3 : restPrefix_2) + G,
        color: color_4,
        dimColor: color_4 === void 0
      }]), lines_2++;
    }
    if (H.length < q.length) {
      hiddenLines += y.length - D, C = !1;
      break;
    }
  }
  let hiddenChars = C ? l.truncatedChars : 0;
  if (reportHidden) Rs(o, restPrefix_2, width_5, hiddenLines, hiddenChars);
  return {
    lines: lines_2,
    hiddenLines: hiddenLines,
    hiddenChars: hiddenChars
  };
}
function Rs(o, l, a, u, d) {
  let f = u > 0 ? `\u2026 ${u} more ${I(u, "line")}` : d > 0 ? `\u2026 +${d} chars` : "";
  if (f) o.push([{
    text: ot(`${l}${f}`, a),
    dimColor: !0
  }]);
}
function Do(o) {
  return o;
}
function fc(A, k) {
  return e(n, {
    color: A.color,
    dimColor: A.dimColor,
    bold: A.bold ?? !1,
    children: A.text
  }, k);
}
function mc() {
  return null;
}
function Bt(o, to, a) {
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
function It(o) {
  return o.state === "start" || o.state === "progress";
}
function Dt(o, l) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed";
  }
  if (!l) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running";
}
function cn(o) {
  switch (o) {
    case "done":
      return {
        glyph: Z.tick,
        color: "success"
      };
    case "failed":
      return {
        glyph: Z.cross,
        color: "error"
      };
    case "skipped":
      return {
        glyph: Z.cross,
        color: "subtle"
      };
    case "blocked":
      return {
        glyph: Z.cross,
        color: "permission"
      };
    case "queued":
    case "interrupted":
      return {
        glyph: f6n,
        color: "subtle"
      };
    case "running":
      return {
        glyph: Fr,
        color: "subtle"
      };
  }
}
var Jt = ["all", "running", "queued", "failed", "done", "skipped", "blocked", "interrupted"];
function He(o, l) {
  return l ? `showing ${o} ${l}` : `${o} ${I(o, "agent")}`;
}
function no(o, l) {
  if (o.status === "not-started") return "Not started yet";
  return l ? `No ${l} agents` : "No agents";
}
function Pt(o, l, a) {
  return Math.max(l, Math.min(a, o));
}
function ca(o, l) {
  let a = Dt(o, l),
    model = I1e(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${cr(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${Zt(h * 1000)}`);
  }
  if (a === "queued") d.push("queued");
  if (a === "interrupted") d.push("stopped");
  if (a === "skipped") d.push("skipped");
  if (a === "blocked") d.push("blocked");
  if (a === "failed") d.push("failed");
  let f = o.durationMs ?? (a === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : void 0);
  return {
    model: model,
    stats: d.join(" \xB7 "),
    time: f != null ? Jne(f) : ""
  };
}
var Pi = 6;
function Kr(o, l, a, u) {
  if (l <= 0) return [];
  let {
      model: model_2,
      stats: stats,
      time: time
    } = ca(o, u),
    color_5 = a ? "permission" : void 0,
    dimColor = !a,
    A = (H, z) => z <= 0 ? "" : ot(H, z),
    text_11 = time ? A(time, l).padStart(Math.min(Pi, l)) : "",
    C = text_11 ? l - ie(text_11) - 1 : l,
    W = (H, z) => H && z ? 3 : 0,
    text_8 = model_2,
    text_10 = stats;
  if (ie(text_8) + W(text_8, text_10) + ie(text_10) > C) {
    if (text_10 = A(text_10, C - ie(text_8) - W(text_8, text_10)), ie(text_8) + W(text_8, text_10) + ie(text_10) > C) text_8 = A(text_8, C - ie(text_10) - W(text_8, text_10));
  }
  let text_9 = text_8 && text_10 ? " \xB7 " : "",
    q = Math.max(0, l - ie(text_8) - ie(text_9) - ie(text_10) - ie(text_11));
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
    text: " ".repeat(q)
  }, {
    text: text_11,
    color: color_5,
    dimColor: dimColor
  }];
}
var da = 40,
  ua = 30;
function oo(o, l) {
  let a = Math.min(da, Math.max(22, l - ua), Math.max(4, Math.min(l, Math.max(12, l - Pi - 1)))),
    u = o.reduce((acc, item) => Math.max(acc, ie(item.label)), 0);
  return Math.min(Math.max(12, u), a);
}
function Vs(segs_2, l) {
  let a = 0;
  for (let u = 0; u < segs_2.length; u++) {
    let d = segs_2[u],
      f = ie(d.text);
    if (a + f > l) {
      let h = l - a,
        text_12 = h > 0 ? ot(d.text, h) : "",
        segs = segs_2.slice(0, u);
      if (text_12) segs.push({
        ...d,
        text: text_12
      });
      return {
        segs: segs,
        pad: Math.max(0, h - ie(text_12))
      };
    }
    a += f;
  }
  return {
    segs: segs_2,
    pad: Math.max(0, l - a)
  };
}
function Te(o) {
  let u = w(7),
    {
      segs: segs_3,
      width: width_6
    } = o,
    d,
    f;
  if (u[0] !== segs_3 || u[1] !== width_6) {
    let {
      segs: segs_4,
      pad: pad
    } = Vs(segs_3, width_6);
    d = segs_4.map(fc);
    f = " ".repeat(pad);
    u[0] = segs_3, u[1] = width_6, u[2] = d, u[3] = f;
  } else d = u[2], f = u[3];
  let y;
  if (u[4] !== d || u[5] !== f) y = r(V, {
    children: [d, f]
  }), u[4] = d, u[5] = f, u[6] = y;else y = u[6];
  return y;
}
function bt(o) {
  let u = w(7),
    {
      segs: segs_5,
      contentWidth: a
    } = o,
    d;
  if (u[0] === S) d = r(n, {
    color: "text",
    children: [" ", o_.pipe, " "]
  }), u[0] = d;else d = u[0];
  let f;
  if (u[1] !== a || u[2] !== segs_5) f = e(Te, {
    segs: segs_5,
    width: a
  }), u[1] = a, u[2] = segs_5, u[3] = f;else f = u[3];
  let h;
  if (u[4] === S) h = r(n, {
    color: "text",
    children: [" ", o_.pipe]
  }), u[4] = h;else h = u[4];
  let x;
  if (u[5] !== f) x = r(n, {
    wrap: "truncate-end",
    children: [d, f, h]
  }), u[5] = f, u[6] = x;else x = u[6];
  return x;
}
function At(o, l) {
  let a = o.from > 0 ? Z.arrowUp : " ",
    u = o.to < l ? Z.arrowDown : " ";
  return `${a} ${o.from + 1}${eFo}${o.to} of ${l} ${u}`;
}
function Jr(o) {
  let u = w(5),
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
function Ur(o) {
  let k = w(53),
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
    C;
  if (k[0] !== contentWidth) C = Bx.repeat(contentWidth + 2), k[0] = contentWidth, k[1] = C;else C = k[1];
  let W = C,
    L,
    D;
  if (k[2] !== agents || k[3] !== W || k[4] !== contentWidth || k[5] !== filterLabel || k[6] !== level || k[7] !== phase || k[8] !== selectedAgent || k[9] !== tight || k[10] !== viewport || k[11] !== workflowActive) {
    let M = Bt(selectedAgent, agents.length, viewport);
    D = [];
    let q = He(agents.length, filterLabel);
    if (tight) {
      let text_14 = ot(` \xB7 ${q}`, Math.max(1, contentWidth - 1));
      let z = Math.max(1, contentWidth - ie(text_14));
      let text_13;
      if (k[14] !== phase.title || k[15] !== z) text_13 = ot(phase.title, z), k[14] = phase.title, k[15] = z, k[16] = text_13;else text_13 = k[16];
      let B;
      if (k[17] !== text_13) B = {
        text: text_13,
        color: "permission",
        bold: !0
      }, k[17] = text_13, k[18] = B;else B = k[18];
      let O;
      if (k[19] !== text_14) O = {
        text: text_14,
        dimColor: !0
      }, k[19] = text_14, k[20] = O;else O = k[20];
      let segs_6;
      if (k[21] !== B || k[22] !== O) segs_6 = [B, O], k[21] = B, k[22] = O, k[23] = segs_6;else segs_6 = k[23];
      let G;
      if (k[24] !== contentWidth || k[25] !== segs_6) G = e(bt, {
        contentWidth: contentWidth,
        segs: segs_6
      }, "title"), k[24] = contentWidth, k[25] = segs_6, k[26] = G;else G = k[26];
      D.push(G);
    } else D.push(e(bt, {
      contentWidth: contentWidth,
      segs: [{
        text: ot(phase.title, contentWidth),
        color: "permission",
        bold: !0
      }]
    }, "title")), D.push(e(bt, {
      contentWidth: contentWidth,
      segs: [{
        text: ot(q, contentWidth),
        dimColor: !0
      }]
    }, "count")), D.push(e(bt, {
      contentWidth: contentWidth,
      segs: [{
        text: ""
      }]
    }, "gap"));
    let nt = D.length;
    if (agents.length === 0) {
      let text_15;
      if (k[27] !== filterLabel || k[28] !== phase) text_15 = no(phase, filterLabel), k[27] = filterLabel, k[28] = phase, k[29] = text_15;else text_15 = k[29];
      let segs_7;
      if (k[30] !== text_15) segs_7 = [{
        text: text_15,
        dimColor: !0
      }], k[30] = text_15, k[31] = segs_7;else segs_7 = k[31];
      let O;
      if (k[32] !== contentWidth || k[33] !== segs_7) O = e(bt, {
        contentWidth: contentWidth,
        segs: segs_7
      }, "empty"), k[32] = contentWidth, k[33] = segs_7, k[34] = O;else O = k[34];
      D.push(O);
    } else {
      let gt = oo(agents, contentWidth - 5);
      for (let Q = M.from; Q < M.to; Q++) {
        let K = agents[Q];
        let Y = level === "agents" && Q === selectedAgent;
        let {
          glyph: mt,
          color: color_6
        } = cn(Dt(K, workflowActive));
        let pt = ot(K.label, gt);
        let dt = " ".repeat(Math.max(0, gt - ie(pt)));
        let at = Math.max(0, contentWidth - (gt + 5));
        D.push(e(bt, {
          contentWidth: contentWidth,
          segs: [{
            text: Y ? Z.pointer : " ",
            color: "permission"
          }, {
            text: " "
          }, {
            text: mt,
            color: color_6
          }, {
            text: " "
          }, {
            text: `${pt}${dt}`,
            color: Y ? "permission" : void 0,
            dimColor: !Y && It(K)
          }, {
            text: " "
          }, ...Kr(K, at, Y, workflowActive)]
        }, `a-${Q}`));
      }
    }
    let ut = D.length - nt;
    for (let Tt = ut; Tt < viewport; Tt++) D.push(e(bt, {
      contentWidth: contentWidth,
      segs: [{
        text: ""
      }]
    }, `pad-${Tt}`));
    if (agents.length > viewport) {
      let children_3 = ` ${At(M, agents.length)} `;
      let yt = Math.max(0, contentWidth + 2 - ie(children_3));
      let E;
      if (k[35] !== yt) E = Bx.repeat(yt), k[35] = yt, k[36] = E;else E = k[36];
      let B;
      if (k[37] !== E) B = r(n, {
        color: "text",
        children: [" ", wb.bottomLeft, E]
      }), k[37] = E, k[38] = B;else B = k[38];
      let O;
      if (k[39] !== children_3) O = e(n, {
        dimColor: !0,
        children: children_3
      }), k[39] = children_3, k[40] = O;else O = k[40];
      let rt;
      if (k[41] === S) rt = e(n, {
        color: "text",
        children: wb.bottomRight
      }), k[41] = rt;else rt = k[41];
      let G;
      if (k[42] !== B || k[43] !== O) G = r(n, {
        wrap: "truncate-end",
        children: [B, O, rt]
      }), k[42] = B, k[43] = O, k[44] = G;else G = k[44];
      L = G;
    } else {
      let E;
      if (k[45] !== W) E = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", wb.bottomLeft, W, wb.bottomRight]
      }), k[45] = W, k[46] = E;else E = k[46];
      L = E;
    }
    k[2] = agents, k[3] = W, k[4] = contentWidth, k[5] = filterLabel, k[6] = level, k[7] = phase, k[8] = selectedAgent, k[9] = tight, k[10] = viewport, k[11] = workflowActive, k[12] = L, k[13] = D;
  } else L = k[12], D = k[13];
  let E;
  if (k[47] !== W) E = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", wb.topLeft, W, wb.topRight]
  }), k[47] = W, k[48] = E;else E = k[48];
  let B;
  if (k[49] !== L || k[50] !== D || k[51] !== E) B = r(s, {
    flexDirection: "column",
    children: [E, D, L]
  }), k[49] = L, k[50] = D, k[51] = E, k[52] = B;else B = k[52];
  return B;
}
function dn(o) {
  let f = w(12),
    {
      left: l,
      right: a,
      leftWidth: u,
      rightWidth: d
    } = o,
    h;
  if (f[0] === S) h = r(n, {
    color: "text",
    children: [" ", o_.pipe, " "]
  }), f[0] = h;else h = f[0];
  let x;
  if (f[1] !== l || f[2] !== u) x = e(Te, {
    segs: l,
    width: u
  }), f[1] = l, f[2] = u, f[3] = x;else x = f[3];
  let y;
  if (f[4] === S) y = r(n, {
    color: "text",
    children: [" ", o_.pipe, " "]
  }), f[4] = y;else y = f[4];
  let A;
  if (f[5] !== a || f[6] !== d) A = e(Te, {
    segs: a,
    width: d
  }), f[5] = a, f[6] = d, f[7] = A;else A = f[7];
  let k;
  if (f[8] === S) k = r(n, {
    color: "text",
    children: [" ", o_.pipe]
  }), f[8] = k;else k = f[8];
  let C;
  if (f[9] !== x || f[10] !== A) C = r(n, {
    wrap: "truncate-end",
    children: [h, x, y, A, k]
  }), f[9] = x, f[10] = A, f[11] = C;else C = f[11];
  return C;
}
function Un(o, l) {
  let a = [],
    u = 0;
  if (l.label) {
    let children_4 = ` ${ot(l.label.text, Math.max(1, o - 2))} `;
    u += ie(children_4), a.push(e(n, {
      color: l.label.color ?? "text",
      bold: l.label.bold,
      children: children_4
    }, "label"));
  }
  let children_5 = l.tag ? ` ${ot(l.tag, Math.max(0, o - u - 2))} ` : "",
    f = Math.max(0, o - u - ie(children_5));
  if (a.push(e(n, {
    color: "text",
    children: Bx.repeat(f)
  }, "dash")), children_5) a.push(e(n, {
    dimColor: !0,
    children: children_5
  }, "tag"));
  return a;
}
function Xt(o) {
  let C = w(20),
    {
      pos: pos,
      leftWidth: leftWidth,
      rightWidth: rightWidth,
      leftTitle: d,
      rightTitle: f,
      leftTag: h,
      rightTag: x
    } = o,
    y = pos === "top" ? wb.topLeft : wb.bottomLeft,
    children_6 = pos === "top" ? o_.teeDown : o_.teeUp,
    children_7 = pos === "top" ? wb.topRight : wb.bottomRight,
    W;
  if (C[0] !== y) W = r(n, {
    color: "text",
    children: [" ", y]
  }), C[0] = y, C[1] = W;else W = C[1];
  const L = leftWidth + 2;
  let D;
  if (C[2] !== h || C[3] !== d || C[4] !== L) D = Un(L, {
    label: d ? {
      text: d
    } : void 0,
    tag: h
  }), C[2] = h, C[3] = d, C[4] = L, C[5] = D;else D = C[5];
  let M;
  if (C[6] !== children_6) M = e(n, {
    color: "text",
    children: children_6
  }), C[6] = children_6, C[7] = M;else M = C[7];
  const q = rightWidth + 2;
  let H;
  if (C[8] !== x || C[9] !== f || C[10] !== q) H = Un(q, {
    label: f ? {
      text: f
    } : void 0,
    tag: x
  }), C[8] = x, C[9] = f, C[10] = q, C[11] = H;else H = C[11];
  let z;
  if (C[12] !== children_7) z = e(n, {
    color: "text",
    children: children_7
  }), C[12] = children_7, C[13] = z;else z = C[13];
  let E;
  if (C[14] !== W || C[15] !== D || C[16] !== M || C[17] !== H || C[18] !== z) E = r(n, {
    wrap: "truncate-end",
    children: [W, D, M, H, z]
  }), C[14] = W, C[15] = D, C[16] = M, C[17] = H, C[18] = z, C[19] = E;else E = C[19];
  return E;
}
function oi(o, l, a, u, d) {
  let f = l === a,
    h = o.status === "done",
    x = o.status === "failed",
    text_17 = h ? Z.tick : x ? Z.cross : String(l + 1),
    color_7 = f ? "permission" : h ? "success" : x ? "error" : "subtle",
    text_19 = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "",
    text_16 = u === "phases" && f ? `${Z.pointer} ` : "  ",
    W = ie(text_16) + ie(text_17) + 1,
    L = text_19 ? 1 + ie(text_19) : 0,
    text_18 = ot(o.title, Math.max(1, d - W - L)),
    M = Math.max(0, d - W - ie(text_18) - L),
    dimColor_2 = !f && o.status === "not-started",
    H = [{
      text: text_16,
      color: f ? "permission" : void 0
    }, {
      text: text_17,
      color: color_7
    }, {
      text: " "
    }, {
      text: text_18,
      color: f ? "permission" : void 0,
      dimColor: dimColor_2
    }, {
      text: " ".repeat(M)
    }];
  if (text_19) H.push({
    text: " "
  }, {
    text: text_19,
    color: f ? "permission" : "subtle"
  });
  return H;
}
function ri(o, l, a, u, d, f, h) {
  let x = u === "agents" && l === a,
    {
      glyph: y,
      color: color_8
    } = cn(Dt(o, h)),
    k = ot(o.label, f),
    C = " ".repeat(Math.max(0, f - ie(k))),
    W = Math.max(0, d - (f + 4));
  return [{
    text: x ? Z.pointer : " ",
    color: "permission"
  }, {
    text: y,
    color: color_8
  }, {
    text: " "
  }, {
    text: `${k}${C}`,
    color: x ? "permission" : void 0,
    dimColor: !x && It(o)
  }, {
    text: " "
  }, ...Kr(o, W, x, h)];
}
function si(o, l, a, u, d) {
  let f = l === a,
    {
      glyph: h,
      color: color_9
    } = cn(Dt(o, d)),
    text_20 = ot(o.label, Math.max(1, u - 4));
  return [{
    text: f ? `${Z.pointer} ` : "  ",
    color: "permission"
  }, {
    text: h,
    color: color_9
  }, {
    text: " "
  }, {
    text: text_20,
    color: f ? "permission" : void 0,
    dimColor: !f && It(o)
  }];
}
function Vr(o) {
  let W = w(41),
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
    L,
    D,
    pos_2,
    leftWidth_3,
    rightWidth_3,
    leftTag,
    rightTag,
    flexDirection,
    O,
    rt;
  if (W[0] !== agents_2 || W[1] !== clampedAgent || W[2] !== clampedPhase || W[3] !== filterLabel_2 || W[4] !== leftWidth_2 || W[5] !== level_2 || W[6] !== phases || W[7] !== rightWidth_2 || W[8] !== selectedPhase || W[9] !== viewport_2 || W[10] !== workflowActive_2) {
    let G = Bt(clampedPhase, phases.length, viewport_2);
    let nt = Bt(clampedAgent, agents_2.length, viewport_2);
    let gt = oo(agents_2, rightWidth_2 - 4);
    let Q = [];
    for (let K = 0; K < viewport_2; K++) {
      let Y = G.from + K;
      let mt = nt.from + K;
      let left = Y < G.to ? oi(phases[Y], Y, clampedPhase, level_2, leftWidth_2) : [];
      let right;
      if (mt < nt.to) right = ri(agents_2[mt], mt, clampedAgent, level_2, rightWidth_2, gt, workflowActive_2);else if (agents_2.length === 0 && K === 0) right = [{
        text: no(selectedPhase, filterLabel_2),
        dimColor: !0
      }];else right = [];
      Q.push(e(dn, {
        left: left,
        right: right,
        leftWidth: leftWidth_2,
        rightWidth: rightWidth_2
      }, K));
    }
    const title = selectedPhase.title;
    let at;
    if (W[21] !== agents_2.length || W[22] !== filterLabel_2) at = He(agents_2.length, filterLabel_2), W[21] = agents_2.length, W[22] = filterLabel_2, W[23] = at;else at = W[23];
    let rightTitle = `${title} \xB7 ${at}`;
    D = s;
    flexDirection = "column";
    if (W[24] !== leftWidth_2 || W[25] !== rightTitle || W[26] !== rightWidth_2) O = e(Xt, {
      pos: "top",
      leftWidth: leftWidth_2,
      rightWidth: rightWidth_2,
      leftTitle: "Phases",
      rightTitle: rightTitle
    }), W[24] = leftWidth_2, W[25] = rightTitle, W[26] = rightWidth_2, W[27] = O;else O = W[27];
    rt = Q;
    L = Xt;
    pos_2 = "bottom";
    leftWidth_3 = leftWidth_2;
    rightWidth_3 = rightWidth_2;
    leftTag = phases.length > viewport_2 ? At(G, phases.length) : void 0;
    rightTag = agents_2.length > viewport_2 ? At(nt, agents_2.length) : void 0;
    W[0] = agents_2, W[1] = clampedAgent, W[2] = clampedPhase, W[3] = filterLabel_2, W[4] = leftWidth_2, W[5] = level_2, W[6] = phases, W[7] = rightWidth_2, W[8] = selectedPhase, W[9] = viewport_2, W[10] = workflowActive_2, W[11] = L, W[12] = D, W[13] = pos_2, W[14] = leftWidth_3, W[15] = rightWidth_3, W[16] = leftTag, W[17] = rightTag, W[18] = flexDirection, W[19] = O, W[20] = rt;
  } else L = W[11], D = W[12], pos_2 = W[13], leftWidth_3 = W[14], rightWidth_3 = W[15], leftTag = W[16], rightTag = W[17], flexDirection = W[18], O = W[19], rt = W[20];
  let dt;
  if (W[28] !== L || W[29] !== pos_2 || W[30] !== leftWidth_3 || W[31] !== rightWidth_3 || W[32] !== leftTag || W[33] !== rightTag) dt = e(L, {
    pos: pos_2,
    leftWidth: leftWidth_3,
    rightWidth: rightWidth_3,
    leftTag: leftTag,
    rightTag: rightTag
  }), W[28] = L, W[29] = pos_2, W[30] = leftWidth_3, W[31] = rightWidth_3, W[32] = leftTag, W[33] = rightTag, W[34] = dt;else dt = W[34];
  let at;
  if (W[35] !== D || W[36] !== flexDirection || W[37] !== O || W[38] !== rt || W[39] !== dt) at = r(D, {
    flexDirection: flexDirection,
    children: [O, rt, dt]
  }), W[35] = D, W[36] = flexDirection, W[37] = O, W[38] = rt, W[39] = dt, W[40] = at;else at = W[40];
  return at;
}
var collapsedLines_2 = 2,
  collapsedLines_3 = 20,
  ui = ho,
  pi = 100,
  fi = 250;
function Br(runId, agentId, a, promptFramed_2) {
  let W = w(13),
    [d, f] = g(null),
    x = Pe(iS)?.setTimeout ?? yP,
    y = T(void 0),
    A = T(0),
    k = T(0),
    C = T(null),
    L,
    D;
  if (W[0] === S) L = () => () => {
    C.current = null;
  }, D = [], W[0] = L, W[1] = D;else L = W[0], D = W[1];
  R(L, D);
  let M;
  if (W[2] !== agentId || W[3] !== promptFramed_2 || W[4] !== x || W[5] !== runId) M = () => {
    if (!runId || !agentId) {
      return;
    }
    C.current = {
      runId: runId,
      agentId: agentId
    };
    let q = A.current = A.current + 1;
    let z = () => {
      bo(runId, agentId, {
        promptFramed: promptFramed_2
      }).catch(mc).then(transcript => {
        if (q > k.current && C.current?.runId === runId && C.current.agentId === agentId) k.current = q, y.current = agentId, f({
          agentId: agentId,
          transcript: transcript
        });
      });
    };
    if (y.current === agentId) {
      return x(z, fi);
    }
    z();
  }, W[2] = agentId, W[3] = promptFramed_2, W[4] = x, W[5] = runId, W[6] = M;else M = W[6];
  let E;
  if (W[7] !== agentId || W[8] !== promptFramed_2 || W[9] !== a || W[10] !== x || W[11] !== runId) E = [runId, agentId, a, promptFramed_2, x], W[7] = agentId, W[8] = promptFramed_2, W[9] = a, W[10] = x, W[11] = runId, W[12] = E;else E = W[12];
  if (R(M, E), !runId || !agentId) {
    return null;
  }
  if (!d || d.agentId !== agentId) {
    return "loading";
  }
  return d.transcript;
}
function Ir(o, l) {
  let a = [];
  for (let u of o.split(`
`)) {
    if (u === "") {
      a.push("");
      continue;
    }
    for (let d of GUe(u, Math.max(1, l))) a.push(d);
  }
  return a;
}
function Ci({
  lines: lines_3,
  title: l,
  body: body,
  collapsedLines: collapsedLines,
  expanded: expanded_2,
  indent: indent_4,
  width: width_7
}) {
  let x = body.length - collapsedLines,
    y = x >= 2 ? x : 0,
    A = [{
      text: l,
      bold: !0,
      dimColor: !0
    }];
  if (y > 0) A.push({
    text: ot(` \xB7 ${body.length} lines${expanded_2 ? "" : ` \xB7 ${eUe} expand`}`, width_7 - ie(l)),
    dimColor: !0
  });
  lines_3.push(A);
  let k = expanded_2 || y === 0 ? body : body.slice(0, collapsedLines);
  for (let C of k) lines_3.push(C);
  if (!expanded_2 && y > 0) lines_3.push([{
    text: ot(`${indent_4}\u2026 ${y} more ${I(y, "line")}`, width_7),
    dimColor: !0
  }]);
  return y;
}
function ki(o, l) {
  let a = 0;
  for (let u of l) {
    if (o < u.end) break;
    a += u.growth;
  }
  return o + a;
}
function Ti(o, l) {
  let a = 0;
  for (let u of l) {
    let d = u.end + a;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    a += u.growth;
  }
  return o - a;
}
var ro = {
  queued: "Queued",
  running: "Running",
  done: "Completed",
  failed: "Failed",
  skipped: "Skipped",
  blocked: "Blocked",
  interrupted: "Stopped"
};
function Si({
  agent: agent,
  status: status,
  transcript: transcript_2,
  expanded: expanded_3,
  width: width_8,
  nowMs: nowMs
}) {
  let lines_4 = [],
    x = "  ",
    y = Math.max(8, width_8 - 2),
    A = transcript_2 === "loading" ? null : transcript_2,
    {
      glyph: k,
      color: color_10
    } = cn(status),
    W = [];
  if (agent.model != null) W.push(I1e(agent.model, agent.fallbackModel));
  if (agent.agentType != null) W.push(agent.agentType);
  if (agent.isolation != null) W.push(agent.isolation === "remote" && agent.remoteSessionId ? `remote ${agent.remoteSessionId}` : agent.isolation);
  if (agent.cached) W.push("from resume journal");
  if (agent.attempt != null && agent.attempt > 1) {
    let it = agent.lastAttemptReason === "throttled" ? agent.label.endsWith(zKt) ? ESt : "throttled" : agent.lastAttemptReason === "user-retry" ? "user retry" : "stalled";
    W.push(`attempt ${agent.attempt} (${it})`);
  }
  let L = ie(k) + 1 + ie(ro[status]),
    text_21 = W.length > 0 ? ot(` \xB7 ${W.join(" \xB7 ")}`, Math.max(0, width_8 - L)) : "";
  lines_4.push([{
    text: k,
    color: color_10
  }, {
    text: " "
  }, {
    text: ro[status],
    color: color_10,
    bold: !0
  }, ...(text_21 ? [{
    text: text_21,
    dimColor: !0
  }] : [])]);
  let M = [];
  if (agent.tokens != null) M.push(`${cr(agent.tokens)} tok`);
  if (agent.toolCalls != null && agent.toolCalls > 0) M.push(`${agent.toolCalls} ${I(agent.toolCalls, "tool call")}`);
  if (agent.durationMs != null) M.push(Zt(agent.durationMs));
  if (status === "queued" && agent.queuedAt != null) M.push(`waiting ${Zt(Math.max(0, nowMs - agent.queuedAt))}`);
  if (status === "running" && agent.lastProgressAt != null) {
    let it = Math.floor((nowMs - agent.lastProgressAt) / 1000);
    if (it >= 30) M.push(`idle ${Zt(it * 1000)}`);
  }
  if (M.length > 0) lines_4.push([{
    text: ot(M.join(" \xB7 "), width_8),
    dimColor: !0
  }]);
  lines_4.push([{
    text: ""
  }]);
  let q = status !== "queued" && A ? A.toolCalls : [],
    tasks_3 = A?.tasks ?? [],
    z = tasks_3.length > 0 ? Po({
      tasks: tasks_3,
      expanded: !1,
      width: width_8,
      indent: "  "
    }) : null,
    E = tasks_3.length > 0 ? Po({
      tasks: tasks_3,
      expanded: !0,
      width: width_8,
      indent: "  "
    }) : null,
    B = expanded_3 ? E : z,
    detailExpandable = q.length > 0 || (B?.capped ?? !1),
    rt = transcript_2 !== "loading" && transcript_2?.prompt ? transcript_2.prompt : agent.promptPreview ?? "",
    body_2 = rt ? Ir(rt, y).map(item => [{
      text: "  " + item,
      dimColor: !0
    }]) : [[{
      text: "  " + (status === "queued" ? "Available once the agent starts." : transcript_2 === "loading" ? "Loading\u2026" : status === "running" ? "Not available yet (agent still running)." : "Transcript not available."),
      dimColor: !0
    }]],
    nt = Ci({
      lines: lines_4,
      title: "Prompt",
      body: body_2,
      collapsedLines: collapsedLines_2,
      expanded: expanded_3,
      indent: "  ",
      width: width_8
    }),
    growth = nt > 0 ? nt - 1 : 0,
    Q = growth,
    folds = [{
      end: lines_4.length - (expanded_3 ? Q : 0),
      growth: growth
    }];
  if (lines_4.push([{
    text: ""
  }]), B && z && E) {
    for (let pt of B.lines) lines_4.push(pt);
    let growth_2 = E.lines.length - z.lines.length;
    Q += growth_2, folds.push({
      end: lines_4.length - (expanded_3 ? Q : 0),
      growth: growth_2
    }), lines_4.push([{
      text: ""
    }]);
  }
  if (status !== "queued") {
    let it = status === "running",
      pt = q.filter((item, index) => index >= q.length - ui || Tn(item, it) === "running"),
      dt = [];
    for (let [St, call_3] of pt.entries()) {
      if (St > 0) dt.push([{
        text: ""
      }]);
      let state_3 = Tn(call_3, it);
      dt.push(...$s({
        call: call_3,
        state: state_3,
        width: width_8,
        indent: "  "
      }));
    }
    let text_22 = "";
    if (q.length > pt.length) text_22 = ` \xB7 ${pt.length <= ui ? "last " : ""}${pt.length} of ${q.length} tool calls`;
    let ut = Math.max(0, width_8 - ie("Activity")),
      Tt = ` \xB7 ${eUe} expand`;
    if (text_22 = !expanded_3 && detailExpandable && ie(text_22) + ie(Tt) <= ut ? text_22 + Tt : ot(text_22, ut), lines_4.push([{
      text: "Activity",
      bold: !0,
      dimColor: !0
    }, ...(text_22 ? [{
      text: text_22,
      dimColor: !0
    }] : [])]), q.length > 0) {
      if (expanded_3) for (let yt of dt) lines_4.push(yt);else for (let call_4 of pt) {
        let state_4 = Tn(call_4, it);
        lines_4.push(Eo({
          call: call_4,
          state: state_4,
          width: width_8,
          indent: "  "
        }));
      }
      let growth_3 = dt.length - pt.length;
      Q += growth_3, folds.push({
        end: lines_4.length - (expanded_3 ? Q : 0),
        growth: growth_3
      });
    } else if (agent.lastToolName != null) {
      let St = agent.lastToolSummary ? `(${agent.lastToolSummary})` : "",
        yt = Do(agent.lastToolName);
      lines_4.push([{
        text: ot(`  ${yt}${St}`, width_8),
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
        for (let it of Ir(agent.error ?? "failed", y)) body_3.push([{
          text: "  " + it,
          color: "error"
        }]);
        break;
      }
    case "done":
      {
        let it = transcript_2 !== "loading" && transcript_2?.finalText ? transcript_2.finalText : agent.resultPreview ?? "";
        if (!it) {
          body_3.push([{
            text: "  " + (transcript_2 === "loading" ? "Loading\u2026" : "(empty)"),
            dimColor: !0
          }]);
          break;
        }
        let pt = ms(it, y);
        if (pt) for (let dt of pt) body_3.push([{
          text: "  "
        }, ...dt]);else for (let dt of Ir(it, y)) body_3.push([{
          text: "  " + dt
        }]);
        break;
      }
  }
  let mt = Ci({
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
    expandable: nt > 0 || mt > 0 || detailExpandable,
    folds: folds,
    detailExpandable: detailExpandable
  };
}
function Gr(o) {
  let W = w(42),
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
    L,
    D,
    pos_3,
    leftWidth_5,
    rightWidth_5,
    leftTag_2,
    rightTag_2,
    flexDirection_2,
    O,
    rt;
  if (W[0] !== u || W[1] !== agents_3 || W[2] !== cardScroll || W[3] !== clampedAgent_2 || W[4] !== detailLines || W[5] !== filterLabel_3 || W[6] !== leftWidth_4 || W[7] !== phase_2.title || W[8] !== rightWidth_4 || W[9] !== viewport_3 || W[10] !== workflowActive_3) {
    let G = Bt(clampedAgent_2, agents_3.length, viewport_3);
    let nt = Math.max(0, detailLines.length - viewport_3);
    let gt = Pt(cardScroll, 0, nt);
    let to_3 = Math.min(detailLines.length, gt + viewport_3);
    let K = [];
    for (let Y = 0; Y < viewport_3; Y++) {
      let mt = G.from + Y;
      let left_2 = mt < G.to ? si(agents_3[mt], mt, clampedAgent_2, leftWidth_4, workflowActive_3) : [];
      let pt = gt + Y;
      let right_2 = pt < to_3 ? detailLines[pt] : [];
      K.push(e(dn, {
        left: left_2,
        right: right_2,
        leftWidth: leftWidth_4,
        rightWidth: rightWidth_4
      }, Y));
    }
    D = s;
    flexDirection_2 = "column";
    const title_2 = phase_2.title;
    let ut;
    if (W[21] !== agents_3.length || W[22] !== filterLabel_3) ut = He(agents_3.length, filterLabel_3), W[21] = agents_3.length, W[22] = filterLabel_3, W[23] = ut;else ut = W[23];
    const leftTitle = `${title_2} \xB7 ${ut}`;
    if (W[24] !== u || W[25] !== leftWidth_4 || W[26] !== rightWidth_4 || W[27] !== leftTitle) O = e(Xt, {
      pos: "top",
      leftWidth: leftWidth_4,
      rightWidth: rightWidth_4,
      leftTitle: leftTitle,
      rightTitle: u
    }), W[24] = u, W[25] = leftWidth_4, W[26] = rightWidth_4, W[27] = leftTitle, W[28] = O;else O = W[28];
    rt = K;
    L = Xt;
    pos_3 = "bottom";
    leftWidth_5 = leftWidth_4;
    rightWidth_5 = rightWidth_4;
    leftTag_2 = agents_3.length > viewport_3 ? At(G, agents_3.length) : void 0;
    rightTag_2 = detailLines.length > viewport_3 ? At({
      from: gt,
      to: to_3
    }, detailLines.length) : void 0;
    W[0] = u, W[1] = agents_3, W[2] = cardScroll, W[3] = clampedAgent_2, W[4] = detailLines, W[5] = filterLabel_3, W[6] = leftWidth_4, W[7] = phase_2.title, W[8] = rightWidth_4, W[9] = viewport_3, W[10] = workflowActive_3, W[11] = L, W[12] = D, W[13] = pos_3, W[14] = leftWidth_5, W[15] = rightWidth_5, W[16] = leftTag_2, W[17] = rightTag_2, W[18] = flexDirection_2, W[19] = O, W[20] = rt;
  } else L = W[11], D = W[12], pos_3 = W[13], leftWidth_5 = W[14], rightWidth_5 = W[15], leftTag_2 = W[16], rightTag_2 = W[17], flexDirection_2 = W[18], O = W[19], rt = W[20];
  let at;
  if (W[29] !== L || W[30] !== pos_3 || W[31] !== leftWidth_5 || W[32] !== rightWidth_5 || W[33] !== leftTag_2 || W[34] !== rightTag_2) at = e(L, {
    pos: pos_3,
    leftWidth: leftWidth_5,
    rightWidth: rightWidth_5,
    leftTag: leftTag_2,
    rightTag: rightTag_2
  }), W[29] = L, W[30] = pos_3, W[31] = leftWidth_5, W[32] = rightWidth_5, W[33] = leftTag_2, W[34] = rightTag_2, W[35] = at;else at = W[35];
  let ut;
  if (W[36] !== D || W[37] !== flexDirection_2 || W[38] !== O || W[39] !== rt || W[40] !== at) ut = r(D, {
    flexDirection: flexDirection_2,
    children: [O, rt, at]
  }), W[36] = D, W[37] = flexDirection_2, W[38] = O, W[39] = rt, W[40] = at, W[41] = ut;else ut = W[41];
  return ut;
}
function Yr(o) {
  let x = w(43),
    {
      agentLabel: agentLabel,
      position: position,
      detailLines: detailLines_2,
      cardScroll: cardScroll_2,
      contentWidth: contentWidth_2,
      viewport: viewport_4
    } = o,
    y;
  if (x[0] !== contentWidth_2) y = Bx.repeat(contentWidth_2 + 2), x[0] = contentWidth_2, x[1] = y;else y = x[1];
  let A = y,
    k = Math.max(0, detailLines_2.length - viewport_4),
    C,
    W;
  if (x[2] !== agentLabel || x[3] !== A || x[4] !== cardScroll_2 || x[5] !== contentWidth_2 || x[6] !== detailLines_2 || x[7] !== k || x[8] !== position || x[9] !== viewport_4) {
    let L = Pt(cardScroll_2, 0, k);
    let to_4 = Math.min(detailLines_2.length, L + viewport_4);
    W = [];
    let text_24 = ` \xB7 ${position}`;
    const q = Math.max(1, contentWidth_2 - ie(text_24));
    let text_23;
    if (x[12] !== agentLabel || x[13] !== q) text_23 = ot(agentLabel, q), x[12] = agentLabel, x[13] = q, x[14] = text_23;else text_23 = x[14];
    let z;
    if (x[15] !== text_23) z = {
      text: text_23,
      color: "permission",
      bold: !0
    }, x[15] = text_23, x[16] = z;else z = x[16];
    let E;
    if (x[17] !== text_24) E = {
      text: text_24,
      dimColor: !0
    }, x[17] = text_24, x[18] = E;else E = x[18];
    let segs_8;
    if (x[19] !== z || x[20] !== E) segs_8 = [z, E], x[19] = z, x[20] = E, x[21] = segs_8;else segs_8 = x[21];
    let O;
    if (x[22] !== contentWidth_2 || x[23] !== segs_8) O = e(bt, {
      contentWidth: contentWidth_2,
      segs: segs_8
    }, "title"), x[22] = contentWidth_2, x[23] = segs_8, x[24] = O;else O = x[24];
    W.push(O);
    for (let rt = L; rt < to_4; rt++) W.push(e(bt, {
      contentWidth: contentWidth_2,
      segs: detailLines_2[rt]
    }, `l-${rt}`));
    for (let G = to_4 - L; G < viewport_4; G++) W.push(e(bt, {
      contentWidth: contentWidth_2,
      segs: [{
        text: ""
      }]
    }, `pad-${G}`));
    if (detailLines_2.length > viewport_4) {
      let children_8 = ` ${At({
        from: L,
        to: to_4
      }, detailLines_2.length)} `;
      let gt = Math.max(0, contentWidth_2 + 2 - ie(children_8));
      let Q;
      if (x[25] !== gt) Q = Bx.repeat(gt), x[25] = gt, x[26] = Q;else Q = x[26];
      let K;
      if (x[27] !== Q) K = r(n, {
        color: "text",
        children: [" ", wb.bottomLeft, Q]
      }), x[27] = Q, x[28] = K;else K = x[28];
      let Y;
      if (x[29] !== children_8) Y = e(n, {
        dimColor: !0,
        children: children_8
      }), x[29] = children_8, x[30] = Y;else Y = x[30];
      let mt;
      if (x[31] === S) mt = e(n, {
        color: "text",
        children: wb.bottomRight
      }), x[31] = mt;else mt = x[31];
      let it;
      if (x[32] !== Y || x[33] !== K) it = r(n, {
        wrap: "truncate-end",
        children: [K, Y, mt]
      }), x[32] = Y, x[33] = K, x[34] = it;else it = x[34];
      C = it;
    } else {
      let Q;
      if (x[35] !== A) Q = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", wb.bottomLeft, A, wb.bottomRight]
      }), x[35] = A, x[36] = Q;else Q = x[36];
      C = Q;
    }
    x[2] = agentLabel, x[3] = A, x[4] = cardScroll_2, x[5] = contentWidth_2, x[6] = detailLines_2, x[7] = k, x[8] = position, x[9] = viewport_4, x[10] = C, x[11] = W;
  } else C = x[10], W = x[11];
  let q;
  if (x[37] !== A) q = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", wb.topLeft, A, wb.topRight]
  }), x[37] = A, x[38] = q;else q = x[38];
  let H;
  if (x[39] !== C || x[40] !== W || x[41] !== q) H = r(s, {
    flexDirection: "column",
    children: [q, W, C]
  }), x[39] = C, x[40] = W, x[41] = q, x[42] = H;else H = x[42];
  return H;
}
function w1e({
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
  vi("workflow-detail-dialog");
  let {
      availableRows: availableRows,
      width: width_9,
      rows: rows
    } = SSn(promptVisibleBelow),
    contentWidth_3 = Math.max(12, width_9 - 6),
    D = O1e(workflow),
    phases_2 = X(() => GQn(workflow), [workflow.workflowProgress, workflow.phases]),
    q = X(() => KQn(phases_2, workflow.agentCount), [phases_2, workflow.agentCount]),
    [H, z] = g(() => initialPhaseIndex !== void 0 ? Math.max(0, initialPhaseIndex) : 0),
    [E, B] = g(0),
    [O, rt] = g(initialPhaseIndex !== void 0 ? "agents" : "phases"),
    [G, nt] = g(!1),
    [gt, Q] = g({
      scroll: 0,
      expanded: !1
    }),
    {
      scroll: K,
      expanded: expanded_4
    } = gt,
    [mt, it] = g("all"),
    clampedPhase_2 = Math.min(H, Math.max(0, phases_2.length - 1)),
    dt = phases_2[clampedPhase_2],
    workflowActive_4 = workflow.status === "running",
    ut = X(() => {
      if (!dt || mt === "all" || O === "phases") return dt;
      return {
        ...dt,
        agents: dt.agents.filter(item => Dt(item, workflowActive_4) === mt)
      };
    }, [dt, mt, O, workflowActive_4]),
    Tt = ut ? Math.min(E, Math.max(0, ut.agents.length - 1)) : 0,
    [St, yt] = g(!1),
    Nt = workflow.script.length > 0,
    defaultName_2 = X(() => {
      if (!Nt) return "";
      let j = Fy(workflow.script);
      if (!("error" in j)) return j.meta.name;
      return yX(workflow.summary ?? workflow.description);
    }, [Nt, workflow.script, workflow.summary, workflow.description]),
    so = X(() => YQn(workflow), [workflow.script, workflow.description, workflow.summary]),
    {
      name: name_3,
      subtext: subtext,
      stats: stats_2
    } = XQn(workflow, so, q, D);
  function ue() {
    Q({
      scroll: 0,
      expanded: !1
    });
  }
  function Je(j) {
    z(Ct => Pt(Pt(Ct, 0, phases_2.length - 1) + j, 0, phases_2.length - 1)), B(0), ue();
  }
  function io(j) {
    if (!ut) return;
    B(Ct => Pt(Pt(Ct, 0, ut.agents.length - 1) + j, 0, ut.agents.length - 1)), ue();
  }
  function un(j) {
    Q(Ct => ({
      ...Ct,
      scroll: Math.max(0, Ct.scroll + j)
    }));
  }
  function te(j) {
    if (O === "phases") {
      Je(j);
      return;
    }
    io(j);
  }
  function onCancel_2() {
    if (nt(!1), O === "agent") {
      rt("agents");
      return;
    }
    if (O === "agents") {
      rt("phases");
      return;
    }
    if (onBack) onBack();else onDone_2();
  }
  function lo() {
    if (dt && dt.agents.length > 0) B(0), it("all"), rt("agents");
  }
  function fn() {
    if (!agent_2 || !dt) return;
    if (mt !== "all") it("all"), B(dt.agents.indexOf(agent_2));
    if (ue(), transcript_3 === "loading") nt(!0);else rt("agent");
  }
  function mn() {
    if (!dt || G) return;
    let j = new Set(dt.agents.map(item => Dt(item, workflowActive_4)));
    it(Ct => {
      let $t = Jt.indexOf(Ct);
      for (let ne = 0; ne < Jt.length; ne++) {
        $t = ($t + 1) % Jt.length;
        let ls = Jt[$t];
        if (ls === "all" || j.has(ls)) break;
      }
      return Jt[$t];
    }), B(0), ue();
  }
  let agent_2 = O !== "phases" && ut ? ut.agents[Tt] : void 0,
    status_2 = agent_2 ? Dt(agent_2, workflowActive_4) : void 0,
    Le = !!agent_2 && It(agent_2) && !!agent_2.agentId && (!!onSkipAgent || !!onKill),
    $e = !!agent_2 && It(agent_2) && !!agent_2.agentId && !!onRetryAgent,
    ee = width_9 - 9,
    ao = ut ? Math.max(14, ...ut.agents.map(item => 4 + ie(item.label))) : 14,
    leftWidth_6 = Math.max(12, Math.min(30, ao, ee - 30)),
    rightWidth_6 = ee - leftWidth_6,
    uo = O === "agent" && phases_2.length > 0 && width_9 >= 64 && rightWidth_6 >= 30,
    width_10 = uo ? rightWidth_6 : contentWidth_3,
    transcript_3 = Br(workflow.workflowRunId, agent_2?.agentId, agent_2?.lastProgressAt, agent_2?.promptFramed),
    Ei = _r(G ? pi : null);
  if (G) {
    if (!agent_2) nt(!1);else if (transcript_3 !== "loading" || Ei) nt(!1), rt("agent");
  }
  let nowMs_2 = status_2 === "queued" || status_2 === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Ue = X(() => O === "agent" && agent_2 && status_2 ? Si({
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
    }, [O, agent_2, status_2, transcript_3, expanded_4, width_10, nowMs_2]),
    xn = Ue.lines;
  function Di() {
    if (!agent_2 || !It(agent_2)) return;
    if (agent_2.agentId && onSkipAgent) onSkipAgent(agent_2.agentId);else if (onKill) onKill();
  }
  function Ni() {
    if (agent_2 && It(agent_2) && agent_2.agentId) onRetryAgent?.(agent_2.agentId);
  }
  Wt({
    "confirm:previous": () => te(-1),
    "confirm:next": () => te(1)
  }, {
    context: "Confirmation"
  });
  let po = workflow.status === "running" && !!onPause,
    fo = workflow.status === "paused" && !!workflow.scriptPath && !!workflow.workflowRunId && !!onResume,
    Xr = workflow.status === "running" && !!onKill && O === "phases";
  function Fi() {
    if (po) onPause?.();else if (fo) onResume?.(CTn(workflow));
  }
  let onKeyDown_2 = j => {
      if (j.ctrl || j.meta) return;
      if (j.key === "j") {
        if (j.preventDefault(), O === "agent") un(1);else te(1);
      } else if (j.key === "k") {
        if (j.preventDefault(), O === "agent") un(-1);else te(-1);
      } else if (j.key === "return" || j.key === "right") {
        if (j.preventDefault(), O === "phases") lo();else if (O === "agents") fn();else if (j.key === "return" && Ue.expandable) {
          if (!expanded_4 && Ue.detailExpandable) _("workflow_agent_card_detail");
          let {
            folds: folds_2
          } = Ue;
          Q(({
            scroll: scroll,
            expanded: expanded_5
          }) => ({
            expanded: !expanded_5,
            scroll: expanded_5 ? Ti(scroll, folds_2) : ki(scroll, folds_2)
          }));
        }
      } else if (j.key === "left") j.preventDefault(), onCancel_2();else if (j.key === "r" && $e) j.preventDefault(), Ni();else if (j.key === "x" && Le) j.preventDefault(), Di();else if (j.key === "x" && Xr) j.preventDefault(), onKill?.();else if (j.key === " ") j.preventDefault(), onDone_2();else if (j.key === "p" && (po || fo)) j.preventDefault(), Fi();else if (j.key === "f" && O === "agents") j.preventDefault(), mn();else if (j.key === "s" && Nt) j.preventDefault(), yt(!0);
    },
    bn = phases_2.length > 0;
  if (St) return e(jXe, {
    script: workflow.script,
    defaultName: defaultName_2,
    onDone: j => {
      if (j) onDone_2(j);else yt(!1);
    }
  });
  let tight_2 = availableRows < 18,
    Zr = availableRows - (tight_2 ? 8 : 11),
    ts = Math.max(1, Zr - 3),
    mo = phases_2.length > ts,
    es = mo ? Math.max(1, ts - 1) : phases_2.length,
    viewport_7 = Math.max(1, Zr - es - (mo ? 1 : 0)),
    win_2 = Bt(clampedPhase_2, phases_2.length, es),
    qi = Math.max(14, ...phases_2.map((item, index) => {
      let $t = item.status === "done" ? Z.tick : item.status === "failed" ? Z.cross : String(index + 1),
        ne = item.totalCount > 0 ? `${item.doneCount}/${item.totalCount}` : "";
      return 2 + ie($t) + 1 + ie(item.title) + (ne ? 1 + ie(ne) : 0);
    })),
    leftWidth_7 = Math.max(12, Math.min(34, qi, ee - 24)),
    rightWidth_7 = ee - leftWidth_7,
    Hi = O !== "agent" && bn && width_9 >= 64 && rightWidth_7 >= 20,
    viewport_5 = Math.max(1, availableRows - (tight_2 ? 7 : 8)),
    viewport_6 = Math.max(3, availableRows - (tight_2 ? 8 : 9)),
    ss = uo ? viewport_5 : viewport_6,
    scroll_2 = Math.max(0, xn.length - ss);
  if (K > scroll_2) Q({
    scroll: scroll_2,
    expanded: expanded_4
  });
  let filterLabel_4 = mt !== "all" && O !== "phases" ? ro[mt].toLowerCase() : void 0,
    Lt = [];
  if (O === "agent") {
    if (Lt.push(`${Yq}${w$} agent`), xn.length > ss) Lt.push("j/k scroll");
    if (Ue.expandable) Lt.push(`${eUe} ${expanded_4 ? "collapse" : "expand"}`);
  } else if (bn) Lt.push(`${Yq}${w$} select`);
  if (Le) Lt.push("x stop");
  if (Xr) Lt.push("x stop workflow");
  if ($e) Lt.push("r restart");
  if (po) Lt.push("p pause");else if (fo) Lt.push("p resume");
  if (O === "agents" && bn) Lt.push(filterLabel_4 ? `f filter: ${filterLabel_4}` : "f filter");
  if (Lt.push("esc back"), Nt) Lt.push("s save");
  let Ki = Lt.join(" \xB7 ");
  return e(jr, {
    onKeyDown: onKeyDown_2,
    children: e(ge, {
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
        children: [!bn ? r(V, {
          children: [e(Cr, {
            children: "No agents yet."
          }), e(s, {
            flexGrow: 1
          })]
        }) : O === "agent" && agent_2 && ut ? r(V, {
          children: [e(M1e, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), uo ? e(Gr, {
            phase: ut,
            clampedAgent: Tt,
            agentLabel: agent_2.label,
            detailLines: xn,
            cardScroll: K,
            leftWidth: leftWidth_6,
            rightWidth: rightWidth_6,
            viewport: viewport_5,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }) : e(Yr, {
            agentLabel: agent_2.label,
            position: `${Tt + 1}/${ut.agents.length}`,
            detailLines: xn,
            cardScroll: K,
            contentWidth: contentWidth_3,
            viewport: viewport_6
          }), e(s, {
            flexGrow: 1
          })]
        }) : Hi && ut ? r(V, {
          children: [e(M1e, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), e(Vr, {
            phases: phases_2,
            selectedPhase: ut,
            clampedPhase: clampedPhase_2,
            clampedAgent: Tt,
            level: O === "phases" ? "phases" : "agents",
            leftWidth: leftWidth_7,
            rightWidth: rightWidth_7,
            viewport: viewport_5,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }), e(s, {
            flexGrow: 1
          })]
        }) : r(V, {
          children: [e(M1e, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), phases_2.slice(win_2.from, win_2.to).map((item, Ct) => {
            let $t = win_2.from + Ct;
            return e(wSn, {
              index: $t + 1,
              title: item.title,
              done: item.doneCount,
              total: item.totalCount,
              status: item.status,
              selected: $t === clampedPhase_2
            }, `${$t}-${item.title}`);
          }), mo && e(Jr, {
            win: win_2,
            total: phases_2.length
          }), e(s, {
            flexGrow: 1
          }), ut ? e(Ur, {
            phase: ut,
            selectedAgent: Tt,
            level: O === "phases" ? "phases" : "agents",
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
          children: [" ", Ki]
        })]
      })
    })
  });
}
export { jXe, w1e };