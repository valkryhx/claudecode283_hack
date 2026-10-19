// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { F, so } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, Bi, J, pn, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { dre } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { O, ne, $t } from "B:/~BUN/root/chunk-nggrknsv.js";
import { wo, c$r, s$, tI, v_t, k4, Hqs, ik, $qs, Aw } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { MI, Tk } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { Ra } from "B:/~BUN/root/chunk-aw9w2cra.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { K_t } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { Cbt, fR } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { pde, mt, tZe, rn, Dhe, cr } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { yun } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { s, n, Dr } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt, on } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { aae, Gn } from "B:/~BUN/root/chunk-c44qc88s.js";
import { tZ, Plo, Ixt, Q9t, Ilo, tN } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { PC } from "B:/~BUN/root/chunk-1xwk1cwp.js";
import { Wa } from "B:/~BUN/root/chunk-vd11ggb1.js";
import { te, d7t, BHn } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { XR, Fk, PT, Q6 } from "B:/~BUN/root/chunk-f06s8ws5.js";
import { xar } from "B:/~BUN/root/chunk-r8g7sjc6.js";
import { Tv } from "B:/~BUN/root/chunk-431ja9am.js";
import { Vts, hRn, qts, yRn, P4t } from "B:/~BUN/root/chunk-vvaratag.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { ytt, ner, _tt, rer, btt, K2r, J2r, Q2r, Z2r } from "B:/~BUN/root/chunk-mpagy638.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { mE } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { htr } from "B:/~BUN/root/chunk-q2gcsksm.js";
import { ko } from "B:/~BUN/root/chunk-r9cctkt4.js";
import { Eo } from "B:/~BUN/root/chunk-3hxvnq94.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { k1 } from "B:/~BUN/root/chunk-0eewnx21.js";
import { pTt, Oar } from "B:/~BUN/root/chunk-cmwqkkmg.js";
import { Ee, P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _me } from "B:/~BUN/root/chunk-rzekebyp.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
import { join as Ui } from "path";
var Hi = 4000,
  Ji = 2000,
  wn = 3,
  yn = [XR, Fk, PT, PC, Q6, Wa];
async function Cn(o, l, {
  promptFramed: promptFramed
} = {}) {
  let u = Ui(k1(o), `agent-${l}.jsonl`),
    d;
  try {
    d = await K_t(u);
  } catch (error) {
    return t(`readWorkflowAgentTranscript: ${u} not readable (${error instanceof Error ? error.message : String(error)})`), null;
  }
  let f = d.filter(tN),
    h = f.findIndex(item => item.type === "user"),
    b = h === -1 ? void 0 : f[h];
  for (let U = h + 1; h !== -1 && U < f.length; U++) {
    let G = f[U];
    if (G === void 0 || G.type !== "user" || G.isMeta === !0) break;
    b = G;
  }
  let C = b?.type === "user" ? b.message?.content : void 0,
    W = typeof C === "string" ? C : ds(C).trim(),
    prompt = promptFramed ? Vts(W) : W,
    T = [],
    M = hRn(),
    R = new Map(),
    I,
    E = new Map(),
    K = {
      pendingCreates: new Map(),
      tasks: new Map()
    },
    j = void 0,
    finalText = "",
    L = "";
  for (let [U, G] of f.entries()) {
    if (G.type === "user") {
      let z = G.message?.content;
      if (Array.isArray(z)) for (let X of z) {
        if (!To(X) || X.type !== "tool_result" || typeof X.tool_use_id !== "string") continue;
        let dt = X.is_error === !0;
        if (yRn(M, X.tool_use_id, G.isVirtual === !0, dt), G.isVirtual !== !0 && M.uses.has(X.tool_use_id)) I = X.tool_use_id;
        let content = zi(X.content),
          nt = content;
        E.set(X.tool_use_id, {
          ...cs(nt, Ji),
          isError: dt
        }), Q9t(K, {
          tool_use_id: X.tool_use_id,
          is_error: dt,
          content: content
        });
      }
      continue;
    }
    if (G.type !== "assistant" || !Array.isArray(G.message?.content)) continue;
    let responseKey = G.message.id || `entry-${U}`;
    L = responseKey, I = void 0;
    let it = "";
    for (let z of G.message.content) {
      if (!To(z)) continue;
      if (z.type === "tool_use" && typeof z.name === "string") {
        if (qts(M, {
          id: z.id,
          name: z.name
        }, G.isVirtual === !0), G.isVirtual === !0 && typeof z.id === "string" && I !== void 0) R.set(z.id, I);
        if (T.push({
          id: typeof z.id === "string" ? z.id : "",
          name: z.name,
          input: z.input,
          responseKey: responseKey
        }), typeof z.id === "string" && z.id !== "") Ixt(K, z);
        if (z.name === XR) j = z.input;
        if (z.name === Wa && z.input !== void 0) try {
          it = _(z.input, null, 2);
        } catch {
          it = String(z.input);
        }
      } else if (z.type === "text" && typeof z.text === "string") it += z.text;
    }
    if (it) finalText = it;
  }
  let V = T,
    N = U => !1,
    et = F(V, U => !N(U)),
    toolCalls = V.map(item => {
      let fromLastResponse = item.responseKey === L,
        ot = N(item);
      if (!ot) et--;
      let it = ot || (et < wn || fromLastResponse) && !yn.includes(item.name);
      return {
        name: item.name,
        summary: ot ? "" : P4t(item.input, item.name),
        fromLastResponse: fromLastResponse,
        fields: it && !ot ? Yi(item.input) : [],
        result: Gi(item.id ? E.get(item.id) : void 0, it)
      };
    }),
    gt = Ilo(K),
    tasks = gt.length > 0 ? gt : Plo(j);
  return {
    prompt: prompt,
    toolCalls: toolCalls,
    finalText: finalText,
    tasks: tasks
  };
}
var Vi = {
  head: "",
  lineCount: 0,
  truncatedChars: 0
};
function Gi(o, l) {
  if (!o) return null;
  return l ? o : {
    ...Vi,
    isError: o.isError
  };
}
function cs(o, l) {
  let a = o.trimEnd(),
    head = a.length > l ? ne(a, l) : a;
  return {
    head: head,
    lineCount: $t(a, `
`) + 1,
    truncatedChars: a.length - head.length
  };
}
function To(o) {
  return typeof o === "object" && o !== null && typeof o.type === "string";
}
function ds(o) {
  if (!Array.isArray(o)) return "";
  return o.filter(To).flatMap(item => item.type === "text" && typeof item.text === "string" ? item.text : []).join(`
`);
}
function zi(o) {
  if (typeof o === "string") return o;
  let l = ds(o);
  if (l || !Array.isArray(o)) return l;
  let a = o.filter(To);
  return a.length === 0 ? "" : `(${a.map(item => item.type).join(", ")} content)`;
}
function Yi(o) {
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
      ...cs(d, Hi)
    };
  });
}
var us = "  ",
  Qi = 40,
  ms = 8,
  Xi = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
  text = ": ";
function gs(o, l) {
  let a = o.trim();
  if (l < ms || !a.startsWith("{") && !a.startsWith("[")) return null;
  try {
    let u = [];
    return bs(u, J(a), 0, void 0, !1, l), u;
  } catch {
    return null;
  }
}
function Sn(o, l) {
  let a = Math.floor(Math.max(0, l - ms) / us.length);
  return us.repeat(Math.min(o, a));
}
function hs(o) {
  return o.replace(Xi, l => `\\u${l.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function ps(o) {
  return hs(Bi(o));
}
function Tn(o, l) {
  return o === void 0 ? [] : [{
    ...o,
    text: mt(o.text, l - text.length)
  }, {
    text: text,
    dimColor: !0
  }];
}
function fs(o, l, a, u, d, color) {
  if (a) {
    let text_2 = Sn(l, d);
    o.push([{
      text: text_2
    }, {
      ...a,
      text: mt(a.text, d - text_2.length - 1)
    }, {
      text: ":",
      dimColor: !0
    }]);
  }
  let h = Sn(a ? l + 1 : l, d),
    b = d - h.length;
  for (let C of u) {
    if (C === "") {
      o.push([{
        text: ""
      }]);
      continue;
    }
    for (let W of tZe(C, b)) o.push([color ? {
      text: h + W,
      color: color
    } : {
      text: h + W
    }]);
  }
}
function bs(o, l, a, u, d, f) {
  let text_3 = Sn(a, f),
    b = f - text_3.length,
    text_7 = d ? "," : "",
    W = typeof u === "string" ? {
      text: ps(u),
      color: "permission"
    } : void 0;
  if (typeof l === "object" && l !== null) {
    if (a >= Qi) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let R = Array.isArray(l) ? l.map((item, index) => [index, item]) : Object.entries(l),
      [text_5, E] = Array.isArray(l) ? ["[", "]"] : ["{", "}"];
    if (R.length === 0) {
      let text_4 = text_5 + E + text_7;
      o.push([{
        text: text_3
      }, ...Tn(W, b - text_4.length), {
        text: text_4,
        dimColor: !0
      }]);
      return;
    }
    o.push([{
      text: text_3
    }, ...Tn(W, b - text_5.length), {
      text: text_5,
      dimColor: !0
    }]);
    for (let K = 0; K < R.length; K++) {
      let [j, Y] = R[K];
      bs(o, Y, a + 1, j, K < R.length - 1, f);
    }
    o.push([{
      text: text_3
    }, {
      text: E + text_7,
      dimColor: !0
    }]);
    return;
  }
  if (typeof l === "number" && (Number.isInteger(l) ? !Number.isSafeInteger(l) : !Number.isFinite(l))) throw RangeError("JSON outcome number not representable");
  if (typeof l === "string" && l.includes(`
`)) {
    fs(o, a, W ?? (typeof u === "number" ? {
      text: `[${u}]`,
      dimColor: !0
    } : void 0), l.replace(/(?:\r?\n)+$/, "").split(/\r?\n/).map(item => pde(hs(item))), f, void 0);
    return;
  }
  let text_6 = typeof l === "string" ? ps(l) : String(l),
    color_2 = typeof l === "string" ? "success" : "warning";
  if ((W === void 0 ? 0 : ie(W.text) + text.length) + ie(text_6) + text_7.length <= b) {
    o.push([{
      text: text_3
    }, ...Tn(W, b), {
      text: text_6,
      color: color_2
    }, ...(text_7 ? [{
      text: text_7,
      dimColor: !0
    }] : [])]);
    return;
  }
  fs(o, a, W, [text_6 + text_7], f, color_2);
}
B();
import { join as ws } from "path";
import { mkdir as Zi, writeFile as tl } from "fs/promises";
import { dirname as vn, join as An } from "path";
var Ve = "Use a different name or overwrite.";
async function el(o, l) {
  if (o === "user") return pTt();
  if (so() !== null) throw p("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let a = yun(l);
  if (a === null) return An(l, ".claude", "workflows");
  let u = (await tZ("workflows", l))[0];
  if (u !== void 0) return u;
  return An(a, ".claude", "workflows");
}
async function Wn(o, l) {
  let a = aae(o.name),
    u = await el(o.scope, o.cwd),
    d = An(u, `${a}.js`);
  if (l !== void 0 && o.scope === "user") return ol(l, a, d, o);
  let checkParentDir = o.scope !== "user" && !dre(vn(u));
  if (checkParentDir) try {
    await Cbt(vn(vn(u)), u);
  } catch (error) {
    throw m("workflow_save", "write_failed"), error;
  }
  await Zi(u, {
    recursive: !0,
    mode: 448
  });
  try {
    if (o.overwrite) await fR(d, o.script, {
      encoding: "utf8",
      mode: 384,
      checkParentDir: checkParentDir
    });else await tl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    });
  } catch (error) {
    if (!o.overwrite && k(error) === "EEXIST") throw p("workflow_save", "already_exists"), Error(`Dynamic workflow "${a}" already exists at ${d}. ${Ve}`);
    throw m("workflow_save", "write_failed"), error;
  }
  return xs(a, d, o);
}
async function xs(name, path, a) {
  Oar();
  let [{
    clearCommandMemoizationCaches: clearCommandMemoizationCaches
  }, {
    resetSentSkillNames: resetSentSkillNames
  }] = await Promise.all([import("B:/~BUN/root/chunk-4ke3r17p.js"), import("B:/~BUN/root/chunk-6hjwbzs3.js")]);
  return clearCommandMemoizationCaches(), resetSentSkillNames(), g("workflow_save"), i("tengu_workflow_saved", {
    scope: c(a.scope),
    overwrite: a.overwrite,
    script_size_chars: a.script.length
  }), {
    name: name,
    path: path,
    scope: a.scope
  };
}
async function ol(o, l, a, u) {
  let d = await o.write(Be.userConfigDir("workflows", [`${l}.js`]), u.script, u.overwrite ? {
    mode: 384,
    publishDiscipline: "atomic"
  } : {
    mode: 384,
    precondition: {
      type: "ifAbsent"
    }
  });
  if (!d.ok) {
    if (!u.overwrite && d.error.code === "AlreadyExists") throw p("workflow_save", "already_exists"), new x(`Dynamic workflow "${l}" already exists at ${a}. ${Ve}`, "workflow name collision");
    throw m("workflow_save", "write_failed"), new x(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed");
  }
  return xs(l, a, u);
}
function wl(fn) {
  return fn.cwd;
}
function yl(ho) {
  return ho === "project" ? "user" : "project";
}
function _wt(o) {
  let L = w(54),
    {
      script: script,
      defaultName: defaultName,
      onDone: onDone
    } = o,
    {
      storageV5: storageV5
    } = Oe(),
    {
      columns: columns
    } = Te(),
    cwd = mE(wl),
    [value, C] = y(defaultName),
    [cursorOffset, onChangeCursorOffset] = y(defaultName.length),
    [scope, M] = y("project"),
    [R, I] = y(!1),
    [E, K] = y(null),
    [error_2, Y] = y(null),
    V;
  if (L[0] === S) V = () => {
    K(null), Y(null);
  }, L[0] = V;else V = L[0];
  let N = V,
    et;
  if (L[1] === S) et = ut => {
    C(ut), N();
  }, L[1] = et;else et = L[1];
  let onChange = et,
    wt;
  if (L[2] !== E || L[3] !== cwd || L[4] !== value || L[5] !== onDone || L[6] !== R || L[7] !== scope || L[8] !== script || L[9] !== storageV5) wt = () => {
    if (R) {
      return;
    }
    let name_2 = value.trim();
    if (!name_2) {
      return;
    }
    I(!0), Y(null), Wn({
      name: name_2,
      scope: scope,
      script: script,
      overwrite: E !== null,
      cwd: cwd
    }, storageV5).then(G => {
      onDone(`Dynamic workflow saved to ${G.path}. Invoke as /${G.name} or Workflow({name: "${G.name}"}) in future sessions.`);
    }).catch(ot => {
      let it = ot instanceof Error ? ot.message : String(ot);
      if (it.includes(Ve)) {
        let z = it.match(/at (.+?)\. /);
        K(z?.[1] ?? "(unknown path)");
      } else Y(it);
      I(!1);
    });
  }, L[2] = E, L[3] = cwd, L[4] = value, L[5] = onDone, L[6] = R, L[7] = scope, L[8] = script, L[9] = storageV5, L[10] = wt;else wt = L[10];
  let onSubmit = wt,
    dt;
  if (L[11] !== onDone) dt = () => onDone(), L[11] = onDone, L[12] = dt;else dt = L[12];
  let onCancel = dt,
    nt;
  if (L[13] === S) nt = {
    context: "Settings",
    isActive: !0
  }, L[13] = nt;else nt = L[13];
  rt("confirm:no", onCancel, nt);
  let ft;
  if (L[14] === S) ft = Lt => {
    if (Lt.key === "tab") Lt.preventDefault(), M(yl), N();
  }, L[14] = ft;else ft = L[14];
  let onKeyDown = ft,
    zt;
  if (L[15] !== value) zt = aae(value.trim() || "workflow"), L[15] = value, L[16] = zt;else zt = L[16];
  let ee = zt,
    Rt;
  if (L[17] !== scope || L[18] !== ee) Rt = scope === "project" ? `.claude/workflows/${ee}.js` : Es(ws(pTt(), `${ee}.js`)), L[17] = scope, L[18] = ee, L[19] = Rt;else Rt = L[19];
  let yt = Rt;
  const Ot = scope === "project" ? "Project" : "User";
  let subtitle;
  if (L[20] !== Ot || L[21] !== yt) subtitle = r(n, {
    dimColor: !0,
    children: [Ot, " scope \xB7 ", yt]
  }), L[20] = Ot, L[21] = yt, L[22] = subtitle;else subtitle = L[22];
  const action = E ? "overwrite" : "save";
  let Ke;
  if (L[23] !== action) Ke = e(q, {
    chord: "enter",
    action: action
  }), L[23] = action, L[24] = Ke;else Ke = L[24];
  let cn, po;
  if (L[25] === S) cn = e(q, {
    chord: "tab",
    action: "toggle scope"
  }), po = e(q, {
    chord: "escape",
    action: "cancel"
  }), L[25] = cn, L[26] = po;else cn = L[25], po = L[26];
  let inputGuide;
  if (L[27] !== Ke) inputGuide = r(Se, {
    children: [Ke, cn, po]
  }), L[27] = Ke, L[28] = inputGuide;else inputGuide = L[28];
  let fo;
  if (L[29] === S) fo = e(n, {
    children: "Save as:"
  }), L[29] = fo;else fo = L[29];
  let dn;
  if (L[30] === S) dn = e(n, {
    children: ">"
  }), L[30] = dn;else dn = L[30];
  const focus = !R,
    showCursor = !R;
  let at;
  if (L[31] !== columns || L[32] !== cursorOffset || L[33] !== onSubmit || L[34] !== value || L[35] !== focus || L[36] !== showCursor) at = r(s, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [dn, e(Lr, {
      value: value,
      onChange: onChange,
      onSubmit: onSubmit,
      focus: focus,
      showCursor: showCursor,
      columns: columns,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset
    })]
  }), L[31] = columns, L[32] = cursorOffset, L[33] = onSubmit, L[34] = value, L[35] = focus, L[36] = showCursor, L[37] = at;else at = L[37];
  let Yt;
  if (L[38] !== E) Yt = E && e(s, {
    marginTop: 1,
    children: r(n, {
      color: "warning",
      children: [E, " already exists. Press Enter again to overwrite, or change the name."]
    })
  }), L[38] = E, L[39] = Yt;else Yt = L[39];
  let Ae;
  if (L[40] !== error_2) Ae = error_2 && e(s, {
    marginTop: 1,
    children: e(ls, {
      error: error_2
    })
  }), L[40] = error_2, L[41] = Ae;else Ae = L[41];
  let We;
  if (L[42] !== R) We = R && e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Saving\u2026"
    })
  }), L[42] = R, L[43] = We;else We = L[43];
  let children;
  if (L[44] !== at || L[45] !== Yt || L[46] !== Ae || L[47] !== We) children = r(s, {
    flexDirection: "column",
    children: [fo, at, Yt, Ae, We]
  }), L[44] = at, L[45] = Yt, L[46] = Ae, L[47] = We, L[48] = children;else children = L[48];
  let un;
  if (L[49] !== onCancel || L[50] !== subtitle || L[51] !== inputGuide || L[52] !== children) un = e(ko, {
    onKeyDown: onKeyDown,
    children: e(be, {
      title: "Save dynamic workflow",
      subtitle: subtitle,
      onCancel: onCancel,
      color: "permission",
      isCancelActive: !1,
      inputGuide: inputGuide,
      children: children
    })
  }), L[49] = onCancel, L[50] = subtitle, L[51] = inputGuide, L[52] = children, L[53] = un;else un = L[53];
  return un;
}
var In = 3,
  Dn = 100,
  maxLines = 12,
  maxLines_2 = 6;
function Me(o) {
  return Gn(pn(o.replace(/\t/g, "  ")).trimEnd()).trimEnd();
}
function Pn({
  tasks: tasks_2,
  expanded: expanded,
  width: width,
  indent: u
}) {
  let lines = [],
    f = F(tasks_2, v => v.status === "completed");
  lines.push([{
    text: "Tasks",
    bold: !0,
    dimColor: !0
  }, {
    text: mt(` \xB7 ${f}/${tasks_2.length} done`, width - 5),
    dimColor: !0
  }]);
  let capped = tasks_2.length > In,
    b = tasks_2,
    C = [];
  if (!expanded && capped) {
    let v = [...tasks_2.filter(item => item.status === "in_progress"), ...tasks_2.filter(item => item.status === "pending"), ...tasks_2.filter(item => item.status === "completed")],
      T = new Set(v.slice(0, In));
    b = tasks_2.filter(item => T.has(item)), C = v.slice(In);
  } else if (expanded && tasks_2.length > Dn) b = tasks_2.slice(0, Dn), C = tasks_2.slice(Dn);
  let W = Math.max(4, width - ie(u) - 2);
  for (let v of b) {
    let T = Me(v.content),
      M = expanded ? tZe(T, W) : [mt(T, W)],
      R = M.length > 0 ? M : [""];
    for (let [I, E] of R.entries()) lines.push([{
      text: u
    }, I === 0 ? Sl(v.status) : {
      text: " "
    }, {
      text: ` ${E}`,
      bold: v.status === "in_progress",
      dimColor: v.status !== "in_progress"
    }]);
  }
  if (C.length > 0) {
    let v;
    if (expanded) v = `${C.length} more`;else {
      let T = [],
        M = F(C, E => E.status === "in_progress"),
        R = F(C, E => E.status === "pending"),
        I = F(C, E => E.status === "completed");
      if (M > 0) T.push(`${M} in progress`);
      if (R > 0) T.push(`${R} pending`);
      if (I > 0) T.push(`${I} completed`);
      v = T.join(", ");
    }
    lines.push([{
      text: mt(`${u}\u2026 +${v}`, width),
      dimColor: !0
    }]);
  }
  return {
    lines: lines,
    capped: capped
  };
}
function Sl(o) {
  let {
    icon: l,
    color: color_3
  } = htr(o);
  return {
    text: l,
    color: color_3
  };
}
function Ge(o, l) {
  if (o.result === null) return l && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok";
}
function Nn({
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
        text: wo,
        dimColor: !0
      }, f = {
        text: " \xB7 running",
        dimColor: !0
      };
      break;
    case "unanswered":
      d = {
        text: c$r,
        dimColor: !0
      }, f = {
        text: " \xB7 no result",
        dimColor: !0
      };
      break;
    case "ok":
      d = {
        text: wo,
        color: "success"
      };
      break;
    case "error":
      d = {
        text: wo,
        color: "error"
      }, f = {
        text: " \xB7 error",
        color: "error"
      };
      break;
  }
  let h = Math.max(1, width_2 - ie(u) - ie(d.text) - 1 - (f ? ie(f.text) : 0)),
    b = Me(_me(call.name)),
    C = h - ie(b),
    W = C < 0 ? mt(b, h) : call.summary && C > 3 ? `${b}(${mt(Me(call.summary), C - 2)})` : b;
  return [{
    text: u
  }, d, {
    text: ` ${W}`,
    dimColor: state !== "running"
  }, ...(f ? [f] : [])];
}
function $s({
  call: call_2,
  state: state_2,
  width: width_3,
  indent: indent
}) {
  let d = [Nn({
    call: call_2,
    state: state_2,
    width: width_3,
    indent: indent
  })];
  if (yn.includes(call_2.name)) return d;
  let indent_2 = `${indent}  `;
  vl(d, call_2.fields, {
    indent: indent_2,
    width: width_3,
    maxLines: maxLines
  });
  let firstPrefix = `${indent_2}${Hqs}  `;
  if (call_2.result && call_2.result.head === "") d.push([{
    text: mt(`${firstPrefix}(empty)`, width_3),
    color: call_2.result.isError ? "error" : void 0,
    dimColor: !call_2.result.isError
  }]);else if (call_2.result) Rs(d, call_2.result, {
    firstPrefix: firstPrefix,
    restPrefix: " ".repeat(ie(firstPrefix)),
    width: width_3,
    maxLines: maxLines_2,
    color: call_2.result.isError ? "error" : void 0
  });else if (state_2 === "unanswered") d.push([{
    text: mt(`${firstPrefix}(none recorded)`, width_3),
    dimColor: !0
  }]);
  return d;
}
function vl(o, l, {
  indent: indent_3,
  width: width_4,
  maxLines: maxLines_3
}) {
  let maxLines_4 = maxLines_3,
    h = 0,
    b = 0,
    restPrefix = `${indent_3}  `;
  for (let W of l) {
    if (maxLines_4 <= 0) {
      h += W.lineCount;
      continue;
    }
    let v = Me(W.key),
      firstPrefix_2 = `${indent_3}${v}: `;
    if (!(W.lineCount === 1 && W.truncatedChars === 0 && ie(firstPrefix_2) + ie(Me(W.head)) <= width_4) && ie(firstPrefix_2) > Math.floor(width_4 / 2)) {
      if (o.push([{
        text: mt(`${indent_3}${v}:`, width_4),
        dimColor: !0
      }]), maxLines_4--, firstPrefix_2 = restPrefix, maxLines_4 <= 0) {
        h += W.lineCount;
        continue;
      }
    }
    let R = Rs(o, W, {
      firstPrefix: firstPrefix_2,
      restPrefix: restPrefix,
      width: width_4,
      maxLines: maxLines_4,
      color: void 0,
      reportHidden: !1
    });
    maxLines_4 -= R.lines, h += R.hiddenLines, b += R.hiddenChars;
  }
  _s(o, indent_3, width_4, h, b);
}
function Rs(o, l, {
  firstPrefix: firstPrefix_3,
  restPrefix: restPrefix_2,
  width: width_5,
  maxLines: maxLines_5,
  color: color_4,
  reportHidden = !0
}) {
  let C = l.head.split(`
`),
    lines_2 = 0,
    hiddenLines = Math.max(0, l.lineCount - C.length),
    T = !0,
    M = Math.max(1, width_5 - ie(restPrefix_2));
  t: for (let [I, E] of C.entries()) {
    let K = Me(E),
      j = ne(K, (maxLines_5 - lines_2 + 1) * width_5),
      Y = lines_2 === 0 ? Math.max(1, width_5 - ie(firstPrefix_3)) : M,
      L = tZe(j, Y)[0] ?? "",
      V = j.slice(L.length),
      N = V ? [L, ...tZe(V, M)] : [L];
    for (let [et, ut] of N.entries()) {
      if (lines_2 >= maxLines_5) {
        hiddenLines += C.length - I, T = !1;
        break t;
      }
      o.push([{
        text: (lines_2 === 0 && et === 0 ? firstPrefix_3 : restPrefix_2) + ut,
        color: color_4,
        dimColor: color_4 === void 0
      }]), lines_2++;
    }
    if (j.length < K.length) {
      hiddenLines += C.length - I, T = !1;
      break;
    }
  }
  let hiddenChars = T ? l.truncatedChars : 0;
  if (reportHidden) _s(o, restPrefix_2, width_5, hiddenLines, hiddenChars);
  return {
    lines: lines_2,
    hiddenLines: hiddenLines,
    hiddenChars: hiddenChars
  };
}
function _s(o, l, a, u, d) {
  let f = u > 0 ? `\u2026 ${u} more ${O(u, "line")}` : d > 0 ? `\u2026 +${d} chars` : "";
  if (f) o.push([{
    text: mt(`${l}${f}`, a),
    dimColor: !0
  }]);
}
function gc(W, v) {
  return e(n, {
    color: W.color,
    dimColor: W.dimColor,
    bold: W.bold ?? !1,
    children: W.text
  }, v);
}
function hc() {
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
function It(o) {
  return o.state === "start" || o.state === "progress";
}
function Nt(o, l) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed";
  }
  if (!l) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running";
}
function co(o) {
  switch (o) {
    case "done":
      return {
        glyph: te.tick,
        color: "success"
      };
    case "failed":
      return {
        glyph: te.cross,
        color: "error"
      };
    case "skipped":
      return {
        glyph: te.cross,
        color: "subtle"
      };
    case "blocked":
      return {
        glyph: te.cross,
        color: "permission"
      };
    case "queued":
    case "interrupted":
      return {
        glyph: c$r,
        color: "subtle"
      };
    case "running":
      return {
        glyph: wo,
        color: "subtle"
      };
  }
}
var Jt = ["all", "running", "queued", "failed", "done", "skipped", "blocked", "interrupted"];
function qe(o, l) {
  return l ? `showing ${o} ${l}` : `${o} ${O(o, "agent")}`;
}
function sn(o, l) {
  if (o.status === "not-started") return "Not started yet";
  return l ? `No ${l} agents` : "No agents";
}
function Dt(o, l, a) {
  return Math.max(l, Math.min(a, o));
}
function ua(o, l) {
  let a = Nt(o, l),
    model = ytt(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${cr(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${rn(h * 1000)}`);
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
    time: f != null ? Dhe(f) : ""
  };
}
var _i = 6;
function Ur(o, l, a, u) {
  if (l <= 0) return [];
  let {
      model: model_2,
      stats: stats,
      time: time
    } = ua(o, u),
    color_5 = a ? "permission" : void 0,
    dimColor = !a,
    W = (j, Y) => Y <= 0 ? "" : mt(j, Y),
    text_11 = time ? W(time, l).padStart(Math.min(_i, l)) : "",
    T = text_11 ? l - ie(text_11) - 1 : l,
    M = (j, Y) => j && Y ? 3 : 0,
    text_8 = model_2,
    text_10 = stats;
  if (ie(text_8) + M(text_8, text_10) + ie(text_10) > T) {
    if (text_10 = W(text_10, T - ie(text_8) - M(text_8, text_10)), ie(text_8) + M(text_8, text_10) + ie(text_10) > T) text_8 = W(text_8, T - ie(text_10) - M(text_8, text_10));
  }
  let text_9 = text_8 && text_10 ? " \xB7 " : "",
    K = Math.max(0, l - ie(text_8) - ie(text_9) - ie(text_10) - ie(text_11));
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
    text: " ".repeat(K)
  }, {
    text: text_11,
    color: color_5,
    dimColor: dimColor
  }];
}
var pa = 40,
  fa = 30;
function ln(o, l) {
  let a = Math.min(pa, Math.max(22, l - fa), Math.max(4, Math.min(l, Math.max(12, l - _i - 1)))),
    u = o.reduce((acc, item) => Math.max(acc, ie(item.label)), 0);
  return Math.min(Math.max(12, u), a);
}
function Gs(segs_2, l) {
  let a = 0;
  for (let u = 0; u < segs_2.length; u++) {
    let d = segs_2[u],
      f = ie(d.text);
    if (a + f > l) {
      let h = l - a,
        text_12 = h > 0 ? mt(d.text, h) : "",
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
function ve(o) {
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
    } = Gs(segs_3, width_6);
    d = segs_4.map(gc);
    f = " ".repeat(pad);
    u[0] = segs_3, u[1] = width_6, u[2] = d, u[3] = f;
  } else d = u[2], f = u[3];
  let C;
  if (u[4] !== d || u[5] !== f) C = r(Q, {
    children: [d, f]
  }), u[4] = d, u[5] = f, u[6] = C;else C = u[6];
  return C;
}
function xt(o) {
  let u = w(7),
    {
      segs: segs_5,
      contentWidth: a
    } = o,
    d;
  if (u[0] === S) d = r(n, {
    color: "text",
    children: [" ", Aw.pipe, " "]
  }), u[0] = d;else d = u[0];
  let f;
  if (u[1] !== a || u[2] !== segs_5) f = e(ve, {
    segs: segs_5,
    width: a
  }), u[1] = a, u[2] = segs_5, u[3] = f;else f = u[3];
  let h;
  if (u[4] === S) h = r(n, {
    color: "text",
    children: [" ", Aw.pipe]
  }), u[4] = h;else h = u[4];
  let b;
  if (u[5] !== f) b = r(n, {
    wrap: "truncate-end",
    children: [d, f, h]
  }), u[5] = f, u[6] = b;else b = u[6];
  return b;
}
function vt(o, l) {
  let a = o.from > 0 ? te.arrowUp : " ",
    u = o.to < l ? te.arrowDown : " ";
  return `${a} ${o.from + 1}${$qs}${o.to} of ${l} ${u}`;
}
function Hr(o) {
  let u = w(5),
    {
      win: win,
      total: total
    } = o,
    d;
  if (u[0] !== total || u[1] !== win) d = vt(win, total), u[0] = total, u[1] = win, u[2] = d;else d = u[2];
  const children_2 = `  ${d}`;
  let h;
  if (u[3] !== children_2) h = e(n, {
    dimColor: !0,
    wrap: "truncate-end",
    children: children_2
  }), u[3] = children_2, u[4] = h;else h = u[4];
  return h;
}
function Jr(o) {
  let v = w(53),
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
  if (v[0] !== contentWidth) T = k4.repeat(contentWidth + 2), v[0] = contentWidth, v[1] = T;else T = v[1];
  let M = T,
    R,
    I;
  if (v[2] !== agents || v[3] !== M || v[4] !== contentWidth || v[5] !== filterLabel || v[6] !== level || v[7] !== phase || v[8] !== selectedAgent || v[9] !== tight || v[10] !== viewport || v[11] !== workflowActive) {
    let E = Gt(selectedAgent, agents.length, viewport);
    I = [];
    let K = qe(agents.length, filterLabel);
    if (tight) {
      let text_14 = mt(` \xB7 ${K}`, Math.max(1, contentWidth - 1));
      let Y = Math.max(1, contentWidth - ie(text_14));
      let text_13;
      if (v[14] !== phase.title || v[15] !== Y) text_13 = mt(phase.title, Y), v[14] = phase.title, v[15] = Y, v[16] = text_13;else text_13 = v[16];
      let V;
      if (v[17] !== text_13) V = {
        text: text_13,
        color: "permission",
        bold: !0
      }, v[17] = text_13, v[18] = V;else V = v[18];
      let N;
      if (v[19] !== text_14) N = {
        text: text_14,
        dimColor: !0
      }, v[19] = text_14, v[20] = N;else N = v[20];
      let segs_6;
      if (v[21] !== V || v[22] !== N) segs_6 = [V, N], v[21] = V, v[22] = N, v[23] = segs_6;else segs_6 = v[23];
      let ut;
      if (v[24] !== contentWidth || v[25] !== segs_6) ut = e(xt, {
        contentWidth: contentWidth,
        segs: segs_6
      }, "title"), v[24] = contentWidth, v[25] = segs_6, v[26] = ut;else ut = v[26];
      I.push(ut);
    } else I.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: mt(phase.title, contentWidth),
        color: "permission",
        bold: !0
      }]
    }, "title")), I.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: mt(K, contentWidth),
        dimColor: !0
      }]
    }, "count")), I.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: ""
      }]
    }, "gap"));
    let gt = I.length;
    if (agents.length === 0) {
      let text_15;
      if (v[27] !== filterLabel || v[28] !== phase) text_15 = sn(phase, filterLabel), v[27] = filterLabel, v[28] = phase, v[29] = text_15;else text_15 = v[29];
      let segs_7;
      if (v[30] !== text_15) segs_7 = [{
        text: text_15,
        dimColor: !0
      }], v[30] = text_15, v[31] = segs_7;else segs_7 = v[31];
      let N;
      if (v[32] !== contentWidth || v[33] !== segs_7) N = e(xt, {
        contentWidth: contentWidth,
        segs: segs_7
      }, "empty"), v[32] = contentWidth, v[33] = segs_7, v[34] = N;else N = v[34];
      I.push(N);
    } else {
      let wt = ln(agents, contentWidth - 5);
      for (let U = E.from; U < E.to; U++) {
        let G = agents[U];
        let ot = level === "agents" && U === selectedAgent;
        let {
          glyph: it,
          color: color_6
        } = co(Nt(G, workflowActive));
        let X = mt(G.label, wt);
        let dt = " ".repeat(Math.max(0, wt - ie(X)));
        let H = Math.max(0, contentWidth - (wt + 5));
        I.push(e(xt, {
          contentWidth: contentWidth,
          segs: [{
            text: ot ? te.pointer : " ",
            color: "permission"
          }, {
            text: " "
          }, {
            text: it,
            color: color_6
          }, {
            text: " "
          }, {
            text: `${X}${dt}`,
            color: ot ? "permission" : void 0,
            dimColor: !ot && It(G)
          }, {
            text: " "
          }, ...Ur(G, H, ot, workflowActive)]
        }, `a-${U}`));
      }
    }
    let nt = I.length - gt;
    for (let ft = nt; ft < viewport; ft++) I.push(e(xt, {
      contentWidth: contentWidth,
      segs: [{
        text: ""
      }]
    }, `pad-${ft}`));
    if (agents.length > viewport) {
      let children_3 = ` ${vt(E, agents.length)} `;
      let St = Math.max(0, contentWidth + 2 - ie(children_3));
      let L;
      if (v[35] !== St) L = k4.repeat(St), v[35] = St, v[36] = L;else L = v[36];
      let V;
      if (v[37] !== L) V = r(n, {
        color: "text",
        children: [" ", ik.bottomLeft, L]
      }), v[37] = L, v[38] = V;else V = v[38];
      let N;
      if (v[39] !== children_3) N = e(n, {
        dimColor: !0,
        children: children_3
      }), v[39] = children_3, v[40] = N;else N = v[40];
      let et;
      if (v[41] === S) et = e(n, {
        color: "text",
        children: ik.bottomRight
      }), v[41] = et;else et = v[41];
      let ut;
      if (v[42] !== V || v[43] !== N) ut = r(n, {
        wrap: "truncate-end",
        children: [V, N, et]
      }), v[42] = V, v[43] = N, v[44] = ut;else ut = v[44];
      R = ut;
    } else {
      let L;
      if (v[45] !== M) L = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", ik.bottomLeft, M, ik.bottomRight]
      }), v[45] = M, v[46] = L;else L = v[46];
      R = L;
    }
    v[2] = agents, v[3] = M, v[4] = contentWidth, v[5] = filterLabel, v[6] = level, v[7] = phase, v[8] = selectedAgent, v[9] = tight, v[10] = viewport, v[11] = workflowActive, v[12] = R, v[13] = I;
  } else R = v[12], I = v[13];
  let L;
  if (v[47] !== M) L = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", ik.topLeft, M, ik.topRight]
  }), v[47] = M, v[48] = L;else L = v[48];
  let V;
  if (v[49] !== R || v[50] !== I || v[51] !== L) V = r(s, {
    flexDirection: "column",
    children: [L, I, R]
  }), v[49] = R, v[50] = I, v[51] = L, v[52] = V;else V = v[52];
  return V;
}
function uo(o) {
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
    children: [" ", Aw.pipe, " "]
  }), f[0] = h;else h = f[0];
  let b;
  if (f[1] !== l || f[2] !== u) b = e(ve, {
    segs: l,
    width: u
  }), f[1] = l, f[2] = u, f[3] = b;else b = f[3];
  let C;
  if (f[4] === S) C = r(n, {
    color: "text",
    children: [" ", Aw.pipe, " "]
  }), f[4] = C;else C = f[4];
  let W;
  if (f[5] !== a || f[6] !== d) W = e(ve, {
    segs: a,
    width: d
  }), f[5] = a, f[6] = d, f[7] = W;else W = f[7];
  let v;
  if (f[8] === S) v = r(n, {
    color: "text",
    children: [" ", Aw.pipe]
  }), f[8] = v;else v = f[8];
  let T;
  if (f[9] !== b || f[10] !== W) T = r(n, {
    wrap: "truncate-end",
    children: [h, b, C, W, v]
  }), f[9] = b, f[10] = W, f[11] = T;else T = f[11];
  return T;
}
function Bo(o, l) {
  let a = [],
    u = 0;
  if (l.label) {
    let children_4 = ` ${mt(l.label.text, Math.max(1, o - 2))} `;
    u += ie(children_4), a.push(e(n, {
      color: l.label.color ?? "text",
      bold: l.label.bold,
      children: children_4
    }, "label"));
  }
  let children_5 = l.tag ? ` ${mt(l.tag, Math.max(0, o - u - 2))} ` : "",
    f = Math.max(0, o - u - ie(children_5));
  if (a.push(e(n, {
    color: "text",
    children: k4.repeat(f)
  }, "dash")), children_5) a.push(e(n, {
    dimColor: !0,
    children: children_5
  }, "tag"));
  return a;
}
function Zt(o) {
  let T = w(20),
    {
      pos: pos,
      leftWidth: leftWidth,
      rightWidth: rightWidth,
      leftTitle: d,
      rightTitle: f,
      leftTag: h,
      rightTag: b
    } = o,
    C = pos === "top" ? ik.topLeft : ik.bottomLeft,
    children_6 = pos === "top" ? Aw.teeDown : Aw.teeUp,
    children_7 = pos === "top" ? ik.topRight : ik.bottomRight,
    M;
  if (T[0] !== C) M = r(n, {
    color: "text",
    children: [" ", C]
  }), T[0] = C, T[1] = M;else M = T[1];
  const R = leftWidth + 2;
  let I;
  if (T[2] !== h || T[3] !== d || T[4] !== R) I = Bo(R, {
    label: d ? {
      text: d
    } : void 0,
    tag: h
  }), T[2] = h, T[3] = d, T[4] = R, T[5] = I;else I = T[5];
  let E;
  if (T[6] !== children_6) E = e(n, {
    color: "text",
    children: children_6
  }), T[6] = children_6, T[7] = E;else E = T[7];
  const K = rightWidth + 2;
  let j;
  if (T[8] !== b || T[9] !== f || T[10] !== K) j = Bo(K, {
    label: f ? {
      text: f
    } : void 0,
    tag: b
  }), T[8] = b, T[9] = f, T[10] = K, T[11] = j;else j = T[11];
  let Y;
  if (T[12] !== children_7) Y = e(n, {
    color: "text",
    children: children_7
  }), T[12] = children_7, T[13] = Y;else Y = T[13];
  let L;
  if (T[14] !== M || T[15] !== I || T[16] !== E || T[17] !== j || T[18] !== Y) L = r(n, {
    wrap: "truncate-end",
    children: [M, I, E, j, Y]
  }), T[14] = M, T[15] = I, T[16] = E, T[17] = j, T[18] = Y, T[19] = L;else L = T[19];
  return L;
}
function si(o, l, a, u, d) {
  let f = l === a,
    h = o.status === "done",
    b = o.status === "failed",
    text_17 = h ? te.tick : b ? te.cross : String(l + 1),
    color_7 = f ? "permission" : h ? "success" : b ? "error" : "subtle",
    text_19 = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "",
    text_16 = u === "phases" && f ? `${te.pointer} ` : "  ",
    M = ie(text_16) + ie(text_17) + 1,
    R = text_19 ? 1 + ie(text_19) : 0,
    text_18 = mt(o.title, Math.max(1, d - M - R)),
    E = Math.max(0, d - M - ie(text_18) - R),
    dimColor_2 = !f && o.status === "not-started",
    j = [{
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
      text: " ".repeat(E)
    }];
  if (text_19) j.push({
    text: " "
  }, {
    text: text_19,
    color: f ? "permission" : "subtle"
  });
  return j;
}
function ii(o, l, a, u, d, f, h) {
  let b = u === "agents" && l === a,
    {
      glyph: C,
      color: color_8
    } = co(Nt(o, h)),
    v = mt(o.label, f),
    T = " ".repeat(Math.max(0, f - ie(v))),
    M = Math.max(0, d - (f + 4));
  return [{
    text: b ? te.pointer : " ",
    color: "permission"
  }, {
    text: C,
    color: color_8
  }, {
    text: " "
  }, {
    text: `${v}${T}`,
    color: b ? "permission" : void 0,
    dimColor: !b && It(o)
  }, {
    text: " "
  }, ...Ur(o, M, b, h)];
}
function li(o, l, a, u, d) {
  let f = l === a,
    {
      glyph: h,
      color: color_9
    } = co(Nt(o, d)),
    text_20 = mt(o.label, Math.max(1, u - 4));
  return [{
    text: f ? `${te.pointer} ` : "  ",
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
  let M = w(41),
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
    R,
    I,
    pos_2,
    leftWidth_3,
    rightWidth_3,
    leftTag,
    rightTag,
    flexDirection,
    N,
    et;
  if (M[0] !== agents_2 || M[1] !== clampedAgent || M[2] !== clampedPhase || M[3] !== filterLabel_2 || M[4] !== leftWidth_2 || M[5] !== level_2 || M[6] !== phases || M[7] !== rightWidth_2 || M[8] !== selectedPhase || M[9] !== viewport_2 || M[10] !== workflowActive_2) {
    let ut = Gt(clampedPhase, phases.length, viewport_2);
    let gt = Gt(clampedAgent, agents_2.length, viewport_2);
    let wt = ln(agents_2, rightWidth_2 - 4);
    let U = [];
    for (let G = 0; G < viewport_2; G++) {
      let ot = ut.from + G;
      let it = gt.from + G;
      let left = ot < ut.to ? si(phases[ot], ot, clampedPhase, level_2, leftWidth_2) : [];
      let right;
      if (it < gt.to) right = ii(agents_2[it], it, clampedAgent, level_2, rightWidth_2, wt, workflowActive_2);else if (agents_2.length === 0 && G === 0) right = [{
        text: sn(selectedPhase, filterLabel_2),
        dimColor: !0
      }];else right = [];
      U.push(e(uo, {
        left: left,
        right: right,
        leftWidth: leftWidth_2,
        rightWidth: rightWidth_2
      }, G));
    }
    const title = selectedPhase.title;
    let H;
    if (M[21] !== agents_2.length || M[22] !== filterLabel_2) H = qe(agents_2.length, filterLabel_2), M[21] = agents_2.length, M[22] = filterLabel_2, M[23] = H;else H = M[23];
    let rightTitle = `${title} \xB7 ${H}`;
    I = s;
    flexDirection = "column";
    if (M[24] !== leftWidth_2 || M[25] !== rightTitle || M[26] !== rightWidth_2) N = e(Zt, {
      pos: "top",
      leftWidth: leftWidth_2,
      rightWidth: rightWidth_2,
      leftTitle: "Phases",
      rightTitle: rightTitle
    }), M[24] = leftWidth_2, M[25] = rightTitle, M[26] = rightWidth_2, M[27] = N;else N = M[27];
    et = U;
    R = Zt;
    pos_2 = "bottom";
    leftWidth_3 = leftWidth_2;
    rightWidth_3 = rightWidth_2;
    leftTag = phases.length > viewport_2 ? vt(ut, phases.length) : void 0;
    rightTag = agents_2.length > viewport_2 ? vt(gt, agents_2.length) : void 0;
    M[0] = agents_2, M[1] = clampedAgent, M[2] = clampedPhase, M[3] = filterLabel_2, M[4] = leftWidth_2, M[5] = level_2, M[6] = phases, M[7] = rightWidth_2, M[8] = selectedPhase, M[9] = viewport_2, M[10] = workflowActive_2, M[11] = R, M[12] = I, M[13] = pos_2, M[14] = leftWidth_3, M[15] = rightWidth_3, M[16] = leftTag, M[17] = rightTag, M[18] = flexDirection, M[19] = N, M[20] = et;
  } else R = M[11], I = M[12], pos_2 = M[13], leftWidth_3 = M[14], rightWidth_3 = M[15], leftTag = M[16], rightTag = M[17], flexDirection = M[18], N = M[19], et = M[20];
  let dt;
  if (M[28] !== R || M[29] !== pos_2 || M[30] !== leftWidth_3 || M[31] !== rightWidth_3 || M[32] !== leftTag || M[33] !== rightTag) dt = e(R, {
    pos: pos_2,
    leftWidth: leftWidth_3,
    rightWidth: rightWidth_3,
    leftTag: leftTag,
    rightTag: rightTag
  }), M[28] = R, M[29] = pos_2, M[30] = leftWidth_3, M[31] = rightWidth_3, M[32] = leftTag, M[33] = rightTag, M[34] = dt;else dt = M[34];
  let H;
  if (M[35] !== I || M[36] !== flexDirection || M[37] !== N || M[38] !== et || M[39] !== dt) H = r(I, {
    flexDirection: flexDirection,
    children: [N, et, dt]
  }), M[35] = I, M[36] = flexDirection, M[37] = N, M[38] = et, M[39] = dt, M[40] = H;else H = M[40];
  return H;
}
var collapsedLines_2 = 2,
  collapsedLines_3 = 20,
  Rr = wn,
  fi = 100,
  mi = 250;
function Br(runId, agentId, a, promptFramed_2) {
  let M = w(13),
    [d, f] = y(null),
    b = Ee(Tk)?.setTimeout ?? MI,
    C = A(void 0),
    W = A(0),
    v = A(0),
    T = A(null),
    R,
    I;
  if (M[0] === S) R = () => () => {
    T.current = null;
  }, I = [], M[0] = R, M[1] = I;else R = M[0], I = M[1];
  P(R, I);
  let E;
  if (M[2] !== agentId || M[3] !== promptFramed_2 || M[4] !== b || M[5] !== runId) E = () => {
    if (!runId || !agentId) {
      return;
    }
    T.current = {
      runId: runId,
      agentId: agentId
    };
    let K = W.current = W.current + 1;
    let Y = () => {
      Cn(runId, agentId, {
        promptFramed: promptFramed_2
      }).catch(hc).then(transcript => {
        if (K > v.current && T.current?.runId === runId && T.current.agentId === agentId) v.current = K, C.current = agentId, f({
          agentId: agentId,
          transcript: transcript
        });
      });
    };
    if (C.current === agentId) {
      return b(Y, mi);
    }
    Y();
  }, M[2] = agentId, M[3] = promptFramed_2, M[4] = b, M[5] = runId, M[6] = E;else E = M[6];
  let L;
  if (M[7] !== agentId || M[8] !== promptFramed_2 || M[9] !== a || M[10] !== b || M[11] !== runId) L = [runId, agentId, a, promptFramed_2, b], M[7] = agentId, M[8] = promptFramed_2, M[9] = a, M[10] = b, M[11] = runId, M[12] = L;else L = M[12];
  if (P(E, L), !runId || !agentId) {
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
    for (let d of tZe(u, Math.max(1, l))) a.push(d);
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
  let b = body.length - collapsedLines,
    C = b >= 2 ? b : 0,
    W = [{
      text: l,
      bold: !0,
      dimColor: !0
    }];
  if (C > 0) W.push({
    text: mt(` \xB7 ${body.length} lines${expanded_2 ? "" : ` \xB7 ${v_t} expand`}`, width_7 - ie(l)),
    dimColor: !0
  });
  lines_3.push(W);
  let v = expanded_2 || C === 0 ? body : body.slice(0, collapsedLines);
  for (let T of v) lines_3.push(T);
  if (!expanded_2 && C > 0) lines_3.push([{
    text: mt(`${indent_4}\u2026 ${C} more ${O(C, "line")}`, width_7),
    dimColor: !0
  }]);
  return C;
}
function Ti(o, l) {
  let a = 0;
  for (let u of l) {
    if (o < u.end) break;
    a += u.growth;
  }
  return o + a;
}
function ki(o, l) {
  let a = 0;
  for (let u of l) {
    let d = u.end + a;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    a += u.growth;
  }
  return o - a;
}
var an = {
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
    b = "  ",
    C = Math.max(8, width_8 - 2),
    W = transcript_2 === "loading" ? null : transcript_2,
    {
      glyph: v,
      color: color_10
    } = co(status),
    M = [];
  if (agent.model != null) M.push(ytt(agent.model, agent.fallbackModel));
  if (agent.agentType != null) M.push(agent.agentType);
  if (agent.isolation != null) M.push(agent.isolation === "remote" && agent.remoteSessionId ? `remote ${agent.remoteSessionId}` : agent.isolation);
  if (agent.cached) M.push("from resume journal");
  if (agent.attempt != null && agent.attempt > 1) {
    let H = agent.lastAttemptReason === "throttled" ? agent.label.endsWith(BHn) ? d7t : "throttled" : agent.lastAttemptReason === "user-retry" ? "user retry" : "stalled";
    M.push(`attempt ${agent.attempt} (${H})`);
  }
  let R = ie(v) + 1 + ie(an[status]),
    text_21 = M.length > 0 ? mt(` \xB7 ${M.join(" \xB7 ")}`, Math.max(0, width_8 - R)) : "";
  lines_4.push([{
    text: v,
    color: color_10
  }, {
    text: " "
  }, {
    text: an[status],
    color: color_10,
    bold: !0
  }, ...(text_21 ? [{
    text: text_21,
    dimColor: !0
  }] : [])]);
  let E = [];
  if (agent.tokens != null) E.push(`${cr(agent.tokens)} tok`);
  if (agent.toolCalls != null && agent.toolCalls > 0) E.push(`${agent.toolCalls} ${O(agent.toolCalls, "tool call")}`);
  if (agent.durationMs != null) E.push(rn(agent.durationMs));
  if (status === "queued" && agent.queuedAt != null) E.push(`waiting ${rn(Math.max(0, nowMs - agent.queuedAt))}`);
  if (status === "running" && agent.lastProgressAt != null) {
    let H = Math.floor((nowMs - agent.lastProgressAt) / 1000);
    if (H >= 30) E.push(`idle ${rn(H * 1000)}`);
  }
  if (E.length > 0) lines_4.push([{
    text: mt(E.join(" \xB7 "), width_8),
    dimColor: !0
  }]);
  lines_4.push([{
    text: ""
  }]);
  let K = status !== "queued" && W ? W.toolCalls : [],
    j = status === "running",
    Y = K.filter(item => Ge(item, j) === "running"),
    L = K,
    tasks_3 = W?.tasks ?? [],
    N = tasks_3.length > 0 ? Pn({
      tasks: tasks_3,
      expanded: !1,
      width: width_8,
      indent: "  "
    }) : null,
    et = tasks_3.length > 0 ? Pn({
      tasks: tasks_3,
      expanded: !0,
      width: width_8,
      indent: "  "
    }) : null,
    ut = expanded_3 ? et : N,
    detailExpandable = L.length > 0 || (ut?.capped ?? !1),
    wt = transcript_2 !== "loading" && transcript_2?.prompt ? transcript_2.prompt : agent.promptPreview ?? "",
    body_2 = wt ? Ir(wt, C).map(item => [{
      text: "  " + item,
      dimColor: !0
    }]) : [[{
      text: "  " + (status === "queued" ? "Available once the agent starts." : transcript_2 === "loading" ? "Loading\u2026" : status === "running" ? "Not available yet (agent still running)." : "Transcript not available."),
      dimColor: !0
    }]],
    G = Ci({
      lines: lines_4,
      title: "Prompt",
      body: body_2,
      collapsedLines: collapsedLines_2,
      expanded: expanded_3,
      indent: "  ",
      width: width_8
    }),
    growth = G > 0 ? G - 1 : 0,
    it = growth,
    folds = [{
      end: lines_4.length - (expanded_3 ? it : 0),
      growth: growth
    }];
  if (lines_4.push([{
    text: ""
  }]), ut && N && et) {
    for (let nt of ut.lines) lines_4.push(nt);
    let growth_2 = et.lines.length - N.lines.length;
    it += growth_2, folds.push({
      end: lines_4.length - (expanded_3 ? it : 0),
      growth: growth_2
    }), lines_4.push([{
      text: ""
    }]);
  }
  if (status !== "queued") {
    let H = L.length - Rr,
      nt = Math.max(0, H - Rr);
    while (!1) H--;
    let ft = L.filter((item, index) => index >= H || Ge(item, j) === "running"),
      Lt = [];
    for (let [Rt, call_3] of ft.entries()) {
      if (Rt > 0) Lt.push([{
        text: ""
      }]);
      let state_3 = Ge(call_3, j);
      Lt.push(...$s({
        call: call_3,
        state: state_3,
        width: width_8,
        indent: "  "
      }));
    }
    let text_22 = "";
    if (L.length > ft.length) text_22 = ` \xB7 ${ft.length <= Rr ? "last " : ""}${ft.length} of ${L.length} tool calls`;
    let zt = Math.max(0, width_8 - ie("Activity")),
      ee = ` \xB7 ${v_t} expand`;
    if (text_22 = !expanded_3 && detailExpandable && ie(text_22) + ie(ee) <= zt ? text_22 + ee : mt(text_22, zt), lines_4.push([{
      text: "Activity",
      bold: !0,
      dimColor: !0
    }, ...(text_22 ? [{
      text: text_22,
      dimColor: !0
    }] : [])]), L.length > 0) {
      if (expanded_3) for (let yt of Lt) lines_4.push(yt);else for (let call_4 of ft) {
        let state_4 = Ge(call_4, j);
        lines_4.push(Nn({
          call: call_4,
          state: state_4,
          width: width_8,
          indent: "  "
        }));
      }
      let growth_3 = Lt.length - ft.length;
      it += growth_3, folds.push({
        end: lines_4.length - (expanded_3 ? it : 0),
        growth: growth_3
      });
    } else if (agent.lastToolName != null) {
      let Rt = agent.lastToolSummary ? `(${agent.lastToolSummary})` : "",
        yt = _me(agent.lastToolName);
      lines_4.push([{
        text: mt(`  ${yt}${Rt}`, width_8),
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
        for (let H of Ir(agent.error ?? "failed", C)) body_3.push([{
          text: "  " + H,
          color: "error"
        }]);
        break;
      }
    case "done":
      {
        let H = transcript_2 !== "loading" && transcript_2?.finalText ? transcript_2.finalText : agent.resultPreview ?? "";
        if (!H) {
          body_3.push([{
            text: "  " + (transcript_2 === "loading" ? "Loading\u2026" : "(empty)"),
            dimColor: !0
          }]);
          break;
        }
        let nt = gs(H, C);
        if (nt) for (let ft of nt) body_3.push([{
          text: "  "
        }, ...ft]);else for (let ft of Ir(H, C)) body_3.push([{
          text: "  " + ft
        }]);
        break;
      }
  }
  let dt = Ci({
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
    expandable: G > 0 || dt > 0 || detailExpandable,
    folds: folds,
    detailExpandable: detailExpandable
  };
}
function Gr(o) {
  let M = w(42),
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
    R,
    I,
    pos_3,
    leftWidth_5,
    rightWidth_5,
    leftTag_2,
    rightTag_2,
    flexDirection_2,
    N,
    et;
  if (M[0] !== u || M[1] !== agents_3 || M[2] !== cardScroll || M[3] !== clampedAgent_2 || M[4] !== detailLines || M[5] !== filterLabel_3 || M[6] !== leftWidth_4 || M[7] !== phase_2.title || M[8] !== rightWidth_4 || M[9] !== viewport_3 || M[10] !== workflowActive_3) {
    let ut = Gt(clampedAgent_2, agents_3.length, viewport_3);
    let gt = Math.max(0, detailLines.length - viewport_3);
    let wt = Dt(cardScroll, 0, gt);
    let to_3 = Math.min(detailLines.length, wt + viewport_3);
    let G = [];
    for (let ot = 0; ot < viewport_3; ot++) {
      let it = ut.from + ot;
      let left_2 = it < ut.to ? li(agents_3[it], it, clampedAgent_2, leftWidth_4, workflowActive_3) : [];
      let X = wt + ot;
      let right_2 = X < to_3 ? detailLines[X] : [];
      G.push(e(uo, {
        left: left_2,
        right: right_2,
        leftWidth: leftWidth_4,
        rightWidth: rightWidth_4
      }, ot));
    }
    I = s;
    flexDirection_2 = "column";
    const title_2 = phase_2.title;
    let nt;
    if (M[21] !== agents_3.length || M[22] !== filterLabel_3) nt = qe(agents_3.length, filterLabel_3), M[21] = agents_3.length, M[22] = filterLabel_3, M[23] = nt;else nt = M[23];
    const leftTitle = `${title_2} \xB7 ${nt}`;
    if (M[24] !== u || M[25] !== leftWidth_4 || M[26] !== rightWidth_4 || M[27] !== leftTitle) N = e(Zt, {
      pos: "top",
      leftWidth: leftWidth_4,
      rightWidth: rightWidth_4,
      leftTitle: leftTitle,
      rightTitle: u
    }), M[24] = u, M[25] = leftWidth_4, M[26] = rightWidth_4, M[27] = leftTitle, M[28] = N;else N = M[28];
    et = G;
    R = Zt;
    pos_3 = "bottom";
    leftWidth_5 = leftWidth_4;
    rightWidth_5 = rightWidth_4;
    leftTag_2 = agents_3.length > viewport_3 ? vt(ut, agents_3.length) : void 0;
    rightTag_2 = detailLines.length > viewport_3 ? vt({
      from: wt,
      to: to_3
    }, detailLines.length) : void 0;
    M[0] = u, M[1] = agents_3, M[2] = cardScroll, M[3] = clampedAgent_2, M[4] = detailLines, M[5] = filterLabel_3, M[6] = leftWidth_4, M[7] = phase_2.title, M[8] = rightWidth_4, M[9] = viewport_3, M[10] = workflowActive_3, M[11] = R, M[12] = I, M[13] = pos_3, M[14] = leftWidth_5, M[15] = rightWidth_5, M[16] = leftTag_2, M[17] = rightTag_2, M[18] = flexDirection_2, M[19] = N, M[20] = et;
  } else R = M[11], I = M[12], pos_3 = M[13], leftWidth_5 = M[14], rightWidth_5 = M[15], leftTag_2 = M[16], rightTag_2 = M[17], flexDirection_2 = M[18], N = M[19], et = M[20];
  let H;
  if (M[29] !== R || M[30] !== pos_3 || M[31] !== leftWidth_5 || M[32] !== rightWidth_5 || M[33] !== leftTag_2 || M[34] !== rightTag_2) H = e(R, {
    pos: pos_3,
    leftWidth: leftWidth_5,
    rightWidth: rightWidth_5,
    leftTag: leftTag_2,
    rightTag: rightTag_2
  }), M[29] = R, M[30] = pos_3, M[31] = leftWidth_5, M[32] = rightWidth_5, M[33] = leftTag_2, M[34] = rightTag_2, M[35] = H;else H = M[35];
  let nt;
  if (M[36] !== I || M[37] !== flexDirection_2 || M[38] !== N || M[39] !== et || M[40] !== H) nt = r(I, {
    flexDirection: flexDirection_2,
    children: [N, et, H]
  }), M[36] = I, M[37] = flexDirection_2, M[38] = N, M[39] = et, M[40] = H, M[41] = nt;else nt = M[41];
  return nt;
}
function zr(o) {
  let b = w(43),
    {
      agentLabel: agentLabel,
      position: position,
      detailLines: detailLines_2,
      cardScroll: cardScroll_2,
      contentWidth: contentWidth_2,
      viewport: viewport_4
    } = o,
    C;
  if (b[0] !== contentWidth_2) C = k4.repeat(contentWidth_2 + 2), b[0] = contentWidth_2, b[1] = C;else C = b[1];
  let W = C,
    v = Math.max(0, detailLines_2.length - viewport_4),
    T,
    M;
  if (b[2] !== agentLabel || b[3] !== W || b[4] !== cardScroll_2 || b[5] !== contentWidth_2 || b[6] !== detailLines_2 || b[7] !== v || b[8] !== position || b[9] !== viewport_4) {
    let R = Dt(cardScroll_2, 0, v);
    let to_4 = Math.min(detailLines_2.length, R + viewport_4);
    M = [];
    let text_24 = ` \xB7 ${position}`;
    const K = Math.max(1, contentWidth_2 - ie(text_24));
    let text_23;
    if (b[12] !== agentLabel || b[13] !== K) text_23 = mt(agentLabel, K), b[12] = agentLabel, b[13] = K, b[14] = text_23;else text_23 = b[14];
    let Y;
    if (b[15] !== text_23) Y = {
      text: text_23,
      color: "permission",
      bold: !0
    }, b[15] = text_23, b[16] = Y;else Y = b[16];
    let L;
    if (b[17] !== text_24) L = {
      text: text_24,
      dimColor: !0
    }, b[17] = text_24, b[18] = L;else L = b[18];
    let segs_8;
    if (b[19] !== Y || b[20] !== L) segs_8 = [Y, L], b[19] = Y, b[20] = L, b[21] = segs_8;else segs_8 = b[21];
    let N;
    if (b[22] !== contentWidth_2 || b[23] !== segs_8) N = e(xt, {
      contentWidth: contentWidth_2,
      segs: segs_8
    }, "title"), b[22] = contentWidth_2, b[23] = segs_8, b[24] = N;else N = b[24];
    M.push(N);
    for (let et = R; et < to_4; et++) M.push(e(xt, {
      contentWidth: contentWidth_2,
      segs: detailLines_2[et]
    }, `l-${et}`));
    for (let ut = to_4 - R; ut < viewport_4; ut++) M.push(e(xt, {
      contentWidth: contentWidth_2,
      segs: [{
        text: ""
      }]
    }, `pad-${ut}`));
    if (detailLines_2.length > viewport_4) {
      let children_8 = ` ${vt({
        from: R,
        to: to_4
      }, detailLines_2.length)} `;
      let wt = Math.max(0, contentWidth_2 + 2 - ie(children_8));
      let U;
      if (b[25] !== wt) U = k4.repeat(wt), b[25] = wt, b[26] = U;else U = b[26];
      let G;
      if (b[27] !== U) G = r(n, {
        color: "text",
        children: [" ", ik.bottomLeft, U]
      }), b[27] = U, b[28] = G;else G = b[28];
      let ot;
      if (b[29] !== children_8) ot = e(n, {
        dimColor: !0,
        children: children_8
      }), b[29] = children_8, b[30] = ot;else ot = b[30];
      let it;
      if (b[31] === S) it = e(n, {
        color: "text",
        children: ik.bottomRight
      }), b[31] = it;else it = b[31];
      let z;
      if (b[32] !== ot || b[33] !== G) z = r(n, {
        wrap: "truncate-end",
        children: [G, ot, it]
      }), b[32] = ot, b[33] = G, b[34] = z;else z = b[34];
      T = z;
    } else {
      let U;
      if (b[35] !== W) U = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", ik.bottomLeft, W, ik.bottomRight]
      }), b[35] = W, b[36] = U;else U = b[36];
      T = U;
    }
    b[2] = agentLabel, b[3] = W, b[4] = cardScroll_2, b[5] = contentWidth_2, b[6] = detailLines_2, b[7] = v, b[8] = position, b[9] = viewport_4, b[10] = T, b[11] = M;
  } else T = b[10], M = b[11];
  let K;
  if (b[37] !== W) K = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", ik.topLeft, W, ik.topRight]
  }), b[37] = W, b[38] = K;else K = b[38];
  let j;
  if (b[39] !== T || b[40] !== M || b[41] !== K) j = r(s, {
    flexDirection: "column",
    children: [K, M, T]
  }), b[39] = T, b[40] = M, b[41] = K, b[42] = j;else j = b[42];
  return j;
}
function itt({
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
  Ra("workflow-detail-dialog");
  let {
      availableRows: availableRows,
      width: width_9,
      rows: rows
    } = ner(promptVisibleBelow),
    contentWidth_3 = Math.max(12, width_9 - 6),
    I = _tt(workflow),
    phases_2 = Z(() => K2r(workflow), [workflow.workflowProgress, workflow.phases]),
    K = Z(() => J2r(phases_2, workflow.agentCount), [phases_2, workflow.agentCount]),
    [j, Y] = y(() => initialPhaseIndex !== void 0 ? Math.max(0, initialPhaseIndex) : 0),
    [L, V] = y(0),
    [N, et] = y(initialPhaseIndex !== void 0 ? "agents" : "phases"),
    [ut, gt] = y(!1),
    [wt, U] = y({
      scroll: 0,
      expanded: !1
    }),
    {
      scroll: G,
      expanded: expanded_4
    } = wt,
    [it, z] = y("all"),
    clampedPhase_2 = Math.min(j, Math.max(0, phases_2.length - 1)),
    dt = phases_2[clampedPhase_2],
    workflowActive_4 = workflow.status === "running",
    nt = Z(() => {
      if (!dt || it === "all" || N === "phases") return dt;
      return {
        ...dt,
        agents: dt.agents.filter(item => Nt(item, workflowActive_4) === it)
      };
    }, [dt, it, N, workflowActive_4]),
    ft = nt ? Math.min(L, Math.max(0, nt.agents.length - 1)) : 0,
    [Lt, St] = y(!1),
    zt = workflow.script.length > 0,
    defaultName_2 = Z(() => {
      if (!zt) return "";
      let D = Tv(workflow.script);
      if (!("error" in D)) return D.meta.name;
      return aae(workflow.summary ?? workflow.description);
    }, [zt, workflow.script, workflow.summary, workflow.description]),
    Rt = Z(() => Q2r(workflow), [workflow.script, workflow.description, workflow.summary]),
    {
      name: name_3,
      subtext: subtext,
      stats: stats_2
    } = Z2r(workflow, Rt, K, I);
  function fe() {
    U({
      scroll: 0,
      expanded: !1
    });
  }
  function Ke(D) {
    Y(Ct => Dt(Dt(Ct, 0, phases_2.length - 1) + D, 0, phases_2.length - 1)), V(0), fe();
  }
  function cn(D) {
    if (!nt) return;
    V(Ct => Dt(Dt(Ct, 0, nt.agents.length - 1) + D, 0, nt.agents.length - 1)), fe();
  }
  function po(D) {
    U(Ct => ({
      ...Ct,
      scroll: Math.max(0, Ct.scroll + D)
    }));
  }
  function oe(D) {
    if (N === "phases") {
      Ke(D);
      return;
    }
    cn(D);
  }
  function onCancel_2() {
    if (gt(!1), N === "agent") {
      et("agents");
      return;
    }
    if (N === "agents") {
      et("phases");
      return;
    }
    if (onBack) onBack();else onDone_2();
  }
  function dn() {
    if (dt && dt.agents.length > 0) V(0), z("all"), et("agents");
  }
  function mo() {
    if (!agent_2 || !dt) return;
    if (it !== "all") z("all"), V(dt.agents.indexOf(agent_2));
    if (fe(), transcript_3 === "loading") gt(!0);else et("agent");
  }
  function go() {
    if (!dt || ut) return;
    let D = new Set(dt.agents.map(item => Nt(item, workflowActive_4)));
    z(Ct => {
      let Wt = Jt.indexOf(Ct);
      for (let se = 0; se < Jt.length; se++) {
        Wt = (Wt + 1) % Jt.length;
        let as = Jt[Wt];
        if (as === "all" || D.has(as)) break;
      }
      return Jt[Wt];
    }), V(0), fe();
  }
  let agent_2 = N !== "phases" && nt ? nt.agents[ft] : void 0,
    status_2 = agent_2 ? Nt(agent_2, workflowActive_4) : void 0,
    Ae = !!agent_2 && It(agent_2) && !!agent_2.agentId && (!!onSkipAgent || !!onKill),
    We = !!agent_2 && It(agent_2) && !!agent_2.agentId && !!onRetryAgent,
    re = width_9 - 9,
    un = nt ? Math.max(14, ...nt.agents.map(item => 4 + ie(item.label))) : 14,
    leftWidth_6 = Math.max(12, Math.min(30, un, re - 30)),
    rightWidth_6 = re - leftWidth_6,
    mn = N === "agent" && phases_2.length > 0 && width_9 >= 64 && rightWidth_6 >= 30,
    width_10 = mn ? rightWidth_6 : contentWidth_3,
    transcript_3 = Br(workflow.workflowRunId, agent_2?.agentId, agent_2?.lastProgressAt, agent_2?.promptFramed),
    Ii = Dr(ut ? fi : null);
  if (ut) {
    if (!agent_2) gt(!1);else if (transcript_3 !== "loading" || Ii) gt(!1), et("agent");
  }
  let nowMs_2 = status_2 === "queued" || status_2 === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Ue = Z(() => N === "agent" && agent_2 && status_2 ? Si({
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
    }, [N, agent_2, status_2, transcript_3, expanded_4, width_10, nowMs_2]),
    xo = Ue.lines;
  function Di() {
    if (!agent_2 || !It(agent_2)) return;
    if (agent_2.agentId && onSkipAgent) onSkipAgent(agent_2.agentId);else if (onKill) onKill();
  }
  function Pi() {
    if (agent_2 && It(agent_2) && agent_2.agentId) onRetryAgent?.(agent_2.agentId);
  }
  on({
    "confirm:previous": () => oe(-1),
    "confirm:next": () => oe(1)
  }, {
    context: "Confirmation"
  });
  let gn = workflow.status === "running" && !!onPause,
    hn = workflow.status === "paused" && !!workflow.scriptPath && !!workflow.workflowRunId && !!onResume,
    Xr = workflow.status === "running" && !!onKill && N === "phases";
  function Ni() {
    if (gn) onPause?.();else if (hn) onResume?.(xar(workflow));
  }
  let onKeyDown_2 = D => {
      if (D.ctrl || D.meta) return;
      if (D.key === "j") {
        if (D.preventDefault(), N === "agent") po(1);else oe(1);
      } else if (D.key === "k") {
        if (D.preventDefault(), N === "agent") po(-1);else oe(-1);
      } else if (D.key === "return" || D.key === "right") {
        if (D.preventDefault(), N === "phases") dn();else if (N === "agents") mo();else if (D.key === "return" && Ue.expandable) {
          if (!expanded_4 && Ue.detailExpandable) g("workflow_agent_card_detail");
          let {
            folds: folds_2
          } = Ue;
          U(({
            scroll: scroll,
            expanded: expanded_5
          }) => ({
            expanded: !expanded_5,
            scroll: expanded_5 ? ki(scroll, folds_2) : Ti(scroll, folds_2)
          }));
        }
      } else if (D.key === "left") D.preventDefault(), onCancel_2();else if (D.key === "r" && We) D.preventDefault(), Pi();else if (D.key === "x" && Ae) D.preventDefault(), Di();else if (D.key === "x" && Xr) D.preventDefault(), onKill?.();else if (D.key === " ") D.preventDefault(), onDone_2();else if (D.key === "p" && (gn || hn)) D.preventDefault(), Ni();else if (D.key === "f" && N === "agents") D.preventDefault(), go();else if (D.key === "s" && zt) D.preventDefault(), St(!0);
    },
    yo = phases_2.length > 0;
  if (Lt) return e(_wt, {
    script: workflow.script,
    defaultName: defaultName_2,
    onDone: D => {
      if (D) onDone_2(D);else St(!1);
    }
  });
  let tight_2 = availableRows < 18,
    Zr = availableRows - (tight_2 ? 8 : 11),
    ts = Math.max(1, Zr - 3),
    bn = phases_2.length > ts,
    es = bn ? Math.max(1, ts - 1) : phases_2.length,
    viewport_7 = Math.max(1, Zr - es - (bn ? 1 : 0)),
    win_2 = Gt(clampedPhase_2, phases_2.length, es),
    ji = Math.max(14, ...phases_2.map((item, index) => {
      let Wt = item.status === "done" ? te.tick : item.status === "failed" ? te.cross : String(index + 1),
        se = item.totalCount > 0 ? `${item.doneCount}/${item.totalCount}` : "";
      return 2 + ie(Wt) + 1 + ie(item.title) + (se ? 1 + ie(se) : 0);
    })),
    leftWidth_7 = Math.max(12, Math.min(34, ji, re - 24)),
    rightWidth_7 = re - leftWidth_7,
    qi = N !== "agent" && yo && width_9 >= 64 && rightWidth_7 >= 20,
    viewport_5 = Math.max(1, availableRows - (tight_2 ? 7 : 8)),
    viewport_6 = Math.max(3, availableRows - (tight_2 ? 8 : 9)),
    ss = mn ? viewport_5 : viewport_6,
    scroll_2 = Math.max(0, xo.length - ss);
  if (G > scroll_2) U({
    scroll: scroll_2,
    expanded: expanded_4
  });
  let filterLabel_4 = it !== "all" && N !== "phases" ? an[it].toLowerCase() : void 0,
    At = [];
  if (N === "agent") {
    if (At.push(`${s$}${tI} agent`), xo.length > ss) At.push("j/k scroll");
    if (Ue.expandable) At.push(`${v_t} ${expanded_4 ? "collapse" : "expand"}`);
  } else if (yo) At.push(`${s$}${tI} select`);
  if (Ae) At.push("x stop");
  if (Xr) At.push("x stop workflow");
  if (We) At.push("r restart");
  if (gn) At.push("p pause");else if (hn) At.push("p resume");
  if (N === "agents" && yo) At.push(filterLabel_4 ? `f filter: ${filterLabel_4}` : "f filter");
  if (At.push("esc back"), zt) At.push("s save");
  let Ki = At.join(" \xB7 ");
  return e(ko, {
    onKeyDown: onKeyDown_2,
    children: e(be, {
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
        children: [!yo ? r(Q, {
          children: [e(Eo, {
            children: "No agents yet."
          }), e(s, {
            flexGrow: 1
          })]
        }) : N === "agent" && agent_2 && nt ? r(Q, {
          children: [e(btt, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), mn ? e(Gr, {
            phase: nt,
            clampedAgent: ft,
            agentLabel: agent_2.label,
            detailLines: xo,
            cardScroll: G,
            leftWidth: leftWidth_6,
            rightWidth: rightWidth_6,
            viewport: viewport_5,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }) : e(zr, {
            agentLabel: agent_2.label,
            position: `${ft + 1}/${nt.agents.length}`,
            detailLines: xo,
            cardScroll: G,
            contentWidth: contentWidth_3,
            viewport: viewport_6
          }), e(s, {
            flexGrow: 1
          })]
        }) : qi && nt ? r(Q, {
          children: [e(btt, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), e(Vr, {
            phases: phases_2,
            selectedPhase: nt,
            clampedPhase: clampedPhase_2,
            clampedAgent: ft,
            level: N === "phases" ? "phases" : "agents",
            leftWidth: leftWidth_7,
            rightWidth: rightWidth_7,
            viewport: viewport_5,
            workflowActive: workflowActive_4,
            filterLabel: filterLabel_4
          }), e(s, {
            flexGrow: 1
          })]
        }) : r(Q, {
          children: [e(btt, {
            name: name_3,
            subtext: subtext,
            stats: stats_2,
            width: width_9
          }), !tight_2 && e(s, {
            height: 1
          }), phases_2.slice(win_2.from, win_2.to).map((item, Ct) => {
            let Wt = win_2.from + Ct;
            return e(rer, {
              index: Wt + 1,
              title: item.title,
              done: item.doneCount,
              total: item.totalCount,
              status: item.status,
              selected: Wt === clampedPhase_2
            }, `${Wt}-${item.title}`);
          }), bn && e(Hr, {
            win: win_2,
            total: phases_2.length
          }), e(s, {
            flexGrow: 1
          }), nt ? e(Jr, {
            phase: nt,
            selectedAgent: ft,
            level: N === "phases" ? "phases" : "agents",
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
export { _wt, itt };