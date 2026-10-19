// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  so
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  Bi,
  J,
  pn,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  dre
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  O,
  ne,
  $t
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  wo,
  c$r,
  s$,
  tI,
  v_t,
  k4,
  Hqs,
  ik,
  $qs,
  Aw
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  MI,
  Tk
} from "B:/~BUN/root/chunk-t7y4rt40.js";
import {
  Ra
} from "B:/~BUN/root/chunk-aw9w2cra.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Oe
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  Be
} from "B:/~BUN/root/chunk-d9rmnpx3.js";
import {
  K_t
} from "B:/~BUN/root/chunk-cqkcn3bx.js";
import {
  Es
} from "B:/~BUN/root/chunk-ek28wssa.js";
import {
  Cbt,
  fR
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  pde,
  mt,
  tZe,
  rn,
  Dhe,
  cr
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  yun
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  s,
  n,
  Dr
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  rt,
  on
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  aae,
  Gn
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  tZ,
  Plo,
  Ixt,
  Q9t,
  Ilo,
  tN
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  PC
} from "B:/~BUN/root/chunk-1xwk1cwp.js";
import {
  Wa
} from "B:/~BUN/root/chunk-vd11ggb1.js";
import {
  te,
  d7t,
  BHn
} from "B:/~BUN/root/chunk-9tx73f8x.js";
import {
  XR,
  Fk,
  PT,
  Q6
} from "B:/~BUN/root/chunk-f06s8ws5.js";
import {
  xar
} from "B:/~BUN/root/chunk-r8g7sjc6.js";
import {
  Tv
} from "B:/~BUN/root/chunk-431ja9am.js";
import {
  Vts,
  hRn,
  qts,
  yRn,
  P4t
} from "B:/~BUN/root/chunk-vvaratag.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  ytt,
  ner,
  _tt,
  rer,
  btt,
  K2r,
  J2r,
  Q2r,
  Z2r
} from "B:/~BUN/root/chunk-mpagy638.js";
import {
  be
} from "B:/~BUN/root/chunk-nyga36vf.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  mE
} from "B:/~BUN/root/chunk-xc1c9t20.js";
import {
  Lr
} from "B:/~BUN/root/chunk-rxj6qxcq.js";
import {
  htr
} from "B:/~BUN/root/chunk-q2gcsksm.js";
import {
  ko
} from "B:/~BUN/root/chunk-r9cctkt4.js";
import {
  Eo
} from "B:/~BUN/root/chunk-3hxvnq94.js";
import {
  ls
} from "B:/~BUN/root/chunk-fzhngknh.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  k1
} from "B:/~BUN/root/chunk-0eewnx21.js";
import {
  pTt,
  Oar
} from "B:/~BUN/root/chunk-cmwqkkmg.js";
import {
  Ee,
  P,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  _me
} from "B:/~BUN/root/chunk-rzekebyp.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
import {
  join as Ui
} from "path";
var Hi = 4000,
  Ji = 2000,
  wn = 3,
  yn = [XR, Fk, PT, PC, Q6, Wa];
async function Cn(o, l, {
  promptFramed: a
} = {}) {
  let u = Ui(k1(o), `agent-${l}.jsonl`),
    d;
  try {
    d = await K_t(u)
  } catch (U) {
    return t(`readWorkflowAgentTranscript: ${u} not readable (${U instanceof Error?U.message:String(U)})`), null
  }
  let f = d.filter(tN),
    h = f.findIndex((U) => U.type === "user"),
    b = h === -1 ? void 0 : f[h];
  for (let U = h + 1; h !== -1 && U < f.length; U++) {
    let G = f[U];
    if (G === void 0 || G.type !== "user" || G.isMeta === !0) break;
    b = G
  }
  let C = b?.type === "user" ? b.message?.content : void 0,
    W = typeof C === "string" ? C : ds(C).trim(),
    v = a ? Vts(W) : W,
    T = [],
    M = hRn(),
    R = new Map,
    I, E = new Map,
    K = {
      pendingCreates: new Map,
      tasks: new Map
    },
    j = void 0,
    Y = "",
    L = "";
  for (let [U, G] of f.entries()) {
    if (G.type === "user") {
      let z = G.message?.content;
      if (Array.isArray(z))
        for (let X of z) {
          if (!To(X) || X.type !== "tool_result" || typeof X.tool_use_id !== "string") continue;
          let dt = X.is_error === !0;
          if (yRn(M, X.tool_use_id, G.isVirtual === !0, dt), G.isVirtual !== !0 && M.uses.has(X.tool_use_id)) I = X.tool_use_id;
          let H = zi(X.content),
            nt = H;
          E.set(X.tool_use_id, {
            ...cs(nt, Ji),
            isError: dt
          }), Q9t(K, {
            tool_use_id: X.tool_use_id,
            is_error: dt,
            content: H
          })
        }
      continue
    }
    if (G.type !== "assistant" || !Array.isArray(G.message?.content)) continue;
    let ot = G.message.id || `entry-${U}`;
    L = ot, I = void 0;
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
            responseKey: ot
          }), typeof z.id === "string" && z.id !== "") Ixt(K, z);
        if (z.name === XR) j = z.input;
        if (z.name === Wa && z.input !== void 0) try {
          it = _(z.input, null, 2)
        } catch {
          it = String(z.input)
        }
      } else if (z.type === "text" && typeof z.text === "string") it += z.text
    }
    if (it) Y = it
  }
  let V = T,
    N = (U) => !1,
    et = F(V, (U) => !N(U)),
    ut = V.map((U) => {
      let G = U.responseKey === L,
        ot = N(U);
      if (!ot) et--;
      let it = ot || (et < wn || G) && !yn.includes(U.name);
      return {
        name: U.name,
        summary: ot ? "" : P4t(U.input, U.name),
        fromLastResponse: G,
        fields: it && !ot ? Yi(U.input) : [],
        result: Gi(U.id ? E.get(U.id) : void 0, it)
      }
    }),
    gt = Ilo(K),
    wt = gt.length > 0 ? gt : Plo(j);
  return {
    prompt: v,
    toolCalls: ut,
    finalText: Y,
    tasks: wt
  }
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
  }
}

function cs(o, l) {
  let a = o.trimEnd(),
    u = a.length > l ? ne(a, l) : a;
  return {
    head: u,
    lineCount: $t(a, `
`) + 1,
    truncatedChars: a.length - u.length
  }
}

function To(o) {
  return typeof o === "object" && o !== null && typeof o.type === "string"
}

function ds(o) {
  if (!Array.isArray(o)) return "";
  return o.filter(To).flatMap((l) => l.type === "text" && typeof l.text === "string" ? l.text : []).join(`
`)
}

function zi(o) {
  if (typeof o === "string") return o;
  let l = ds(o);
  if (l || !Array.isArray(o)) return l;
  let a = o.filter(To);
  return a.length === 0 ? "" : `(${a.map((u)=>u.type).join(", ")} content)`
}

function Yi(o) {
  if (o === void 0 || o === null) return [];
  return (typeof o === "object" && !Array.isArray(o) ? Object.entries(o) : [
    ["input", o]
  ]).map(([a, u]) => {
    let d;
    if (typeof u === "string") d = u;
    else try {
      d = _(u) ?? String(u)
    } catch {
      d = String(u)
    }
    return {
      key: a,
      ...cs(d, Hi)
    }
  })
}
var us = "  ",
  Qi = 40,
  ms = 8,
  Xi = /[\x00-\x08\x0a-\x1f\x7f-\x9f\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
  kn = ": ";

function gs(o, l) {
  let a = o.trim();
  if (l < ms || !a.startsWith("{") && !a.startsWith("[")) return null;
  try {
    let u = [];
    return bs(u, J(a), 0, void 0, !1, l), u
  } catch {
    return null
  }
}

function Sn(o, l) {
  let a = Math.floor(Math.max(0, l - ms) / us.length);
  return us.repeat(Math.min(o, a))
}

function hs(o) {
  return o.replace(Xi, (l) => `\\u${l.charCodeAt(0).toString(16).padStart(4,"0")}`)
}

function ps(o) {
  return hs(Bi(o))
}

function Tn(o, l) {
  return o === void 0 ? [] : [{
    ...o,
    text: mt(o.text, l - kn.length)
  }, {
    text: kn,
    dimColor: !0
  }]
}

function fs(o, l, a, u, d, f) {
  if (a) {
    let C = Sn(l, d);
    o.push([{
      text: C
    }, {
      ...a,
      text: mt(a.text, d - C.length - 1)
    }, {
      text: ":",
      dimColor: !0
    }])
  }
  let h = Sn(a ? l + 1 : l, d),
    b = d - h.length;
  for (let C of u) {
    if (C === "") {
      o.push([{
        text: ""
      }]);
      continue
    }
    for (let W of tZe(C, b)) o.push([f ? {
      text: h + W,
      color: f
    } : {
      text: h + W
    }])
  }
}

function bs(o, l, a, u, d, f) {
  let h = Sn(a, f),
    b = f - h.length,
    C = d ? "," : "",
    W = typeof u === "string" ? {
      text: ps(u),
      color: "permission"
    } : void 0;
  if (typeof l === "object" && l !== null) {
    if (a >= Qi) throw RangeError("JSON outcome nested past MAX_DEPTH");
    let R = Array.isArray(l) ? l.map((K, j) => [j, K]) : Object.entries(l),
      [I, E] = Array.isArray(l) ? ["[", "]"] : ["{", "}"];
    if (R.length === 0) {
      let K = I + E + C;
      o.push([{
        text: h
      }, ...Tn(W, b - K.length), {
        text: K,
        dimColor: !0
      }]);
      return
    }
    o.push([{
      text: h
    }, ...Tn(W, b - I.length), {
      text: I,
      dimColor: !0
    }]);
    for (let K = 0; K < R.length; K++) {
      let [j, Y] = R[K];
      bs(o, Y, a + 1, j, K < R.length - 1, f)
    }
    o.push([{
      text: h
    }, {
      text: E + C,
      dimColor: !0
    }]);
    return
  }
  if (typeof l === "number" && (Number.isInteger(l) ? !Number.isSafeInteger(l) : !Number.isFinite(l))) throw RangeError("JSON outcome number not representable");
  if (typeof l === "string" && l.includes(`
`)) {
    fs(o, a, W ?? (typeof u === "number" ? {
      text: `[${u}]`,
      dimColor: !0
    } : void 0), l.replace(/(?:\r?\n)+$/, "").split(/\r?\n/).map((R) => pde(hs(R))), f, void 0);
    return
  }
  let v = typeof l === "string" ? ps(l) : String(l),
    T = typeof l === "string" ? "success" : "warning";
  if ((W === void 0 ? 0 : ie(W.text) + kn.length) + ie(v) + C.length <= b) {
    o.push([{
      text: h
    }, ...Tn(W, b), {
      text: v,
      color: T
    }, ...C ? [{
      text: C,
      dimColor: !0
    }] : []]);
    return
  }
  fs(o, a, W, [v + C], f, T)
}
B();
import {
  join as ws
} from "path";
import {
  mkdir as Zi,
  writeFile as tl
} from "fs/promises";
import {
  dirname as vn,
  join as An
} from "path";
var Ve = "Use a different name or overwrite.";
async function el(o, l) {
  if (o === "user") return pTt();
  if (so() !== null) throw p("workflow_save", "project_scope_unavailable"), Error("Project-scope workflow saves are unavailable in a session started with --project-config-root");
  let a = yun(l);
  if (a === null) return An(l, ".claude", "workflows");
  let u = (await tZ("workflows", l))[0];
  if (u !== void 0) return u;
  return An(a, ".claude", "workflows")
}
async function Wn(o, l) {
  let a = aae(o.name),
    u = await el(o.scope, o.cwd),
    d = An(u, `${a}.js`);
  if (l !== void 0 && o.scope === "user") return ol(l, a, d, o);
  let f = o.scope !== "user" && !dre(vn(u));
  if (f) try {
    await Cbt(vn(vn(u)), u)
  } catch (h) {
    throw m("workflow_save", "write_failed"), h
  }
  await Zi(u, {
    recursive: !0,
    mode: 448
  });
  try {
    if (o.overwrite) await fR(d, o.script, {
      encoding: "utf8",
      mode: 384,
      checkParentDir: f
    });
    else await tl(d, o.script, {
      encoding: "utf8",
      mode: 384,
      flag: "wx"
    })
  } catch (h) {
    if (!o.overwrite && k(h) === "EEXIST") throw p("workflow_save", "already_exists"), Error(`Dynamic workflow "${a}" already exists at ${d}. ${Ve}`);
    throw m("workflow_save", "write_failed"), h
  }
  return xs(a, d, o)
}
async function xs(o, l, a) {
  Oar();
  let [{
    clearCommandMemoizationCaches: u
  }, {
    resetSentSkillNames: d
  }] = await Promise.all([import("B:/~BUN/root/chunk-4ke3r17p.js"), import("B:/~BUN/root/chunk-6hjwbzs3.js")]);
  return u(), d(), g("workflow_save"), i("tengu_workflow_saved", {
    scope: c(a.scope),
    overwrite: a.overwrite,
    script_size_chars: a.script.length
  }), {
    name: o,
    path: l,
    scope: a.scope
  }
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
    throw m("workflow_save", "write_failed"), new x(`Workflow save failed: ${d.error.code} (${a})`, "workflow save failed")
  }
  return xs(l, a, u)
}

function wl(fn) {
  return fn.cwd
}

function yl(ho) {
  return ho === "project" ? "user" : "project"
}

function _wt(o) {
  let L = w(54),
    {
      script: l,
      defaultName: a,
      onDone: u
    } = o,
    {
      storageV5: d
    } = Oe(),
    {
      columns: f
    } = Te(),
    h = mE(wl),
    [b, C] = y(a),
    [W, v] = y(a.length),
    [T, M] = y("project"),
    [R, I] = y(!1),
    [E, K] = y(null),
    [j, Y] = y(null),
    V;
  if (L[0] === S) V = () => {
    K(null), Y(null)
  }, L[0] = V;
  else V = L[0];
  let N = V,
    et;
  if (L[1] === S) et = (ut) => {
    C(ut), N()
  }, L[1] = et;
  else et = L[1];
  let gt = et,
    wt;
  if (L[2] !== E || L[3] !== h || L[4] !== b || L[5] !== u || L[6] !== R || L[7] !== T || L[8] !== l || L[9] !== d) wt = () => {
    if (R) {
      return
    }
    let U = b.trim();
    if (!U) {
      return
    }
    I(!0), Y(null), Wn({
      name: U,
      scope: T,
      script: l,
      overwrite: E !== null,
      cwd: h
    }, d).then((G) => {
      u(`Dynamic workflow saved to ${G.path}. Invoke as /${G.name} or Workflow({name: "${G.name}"}) in future sessions.`)
    }).catch((ot) => {
      let it = ot instanceof Error ? ot.message : String(ot);
      if (it.includes(Ve)) {
        let z = it.match(/at (.+?)\. /);
        K(z?.[1] ?? "(unknown path)")
      } else Y(it);
      I(!1)
    })
  }, L[2] = E, L[3] = h, L[4] = b, L[5] = u, L[6] = R, L[7] = T, L[8] = l, L[9] = d, L[10] = wt;
  else wt = L[10];
  let X = wt,
    dt;
  if (L[11] !== u) dt = () => u(), L[11] = u, L[12] = dt;
  else dt = L[12];
  let H = dt,
    nt;
  if (L[13] === S) nt = {
    context: "Settings",
    isActive: !0
  }, L[13] = nt;
  else nt = L[13];
  rt("confirm:no", H, nt);
  let ft;
  if (L[14] === S) ft = (Lt) => {
    if (Lt.key === "tab") Lt.preventDefault(), M(yl), N()
  }, L[14] = ft;
  else ft = L[14];
  let St = ft,
    zt;
  if (L[15] !== b) zt = aae(b.trim() || "workflow"), L[15] = b, L[16] = zt;
  else zt = L[16];
  let ee = zt,
    Rt;
  if (L[17] !== T || L[18] !== ee) Rt = T === "project" ? `.claude/workflows/${ee}.js` : Es(ws(pTt(), `${ee}.js`)), L[17] = T, L[18] = ee, L[19] = Rt;
  else Rt = L[19];
  let yt = Rt;
  const Ot = T === "project" ? "Project" : "User";
  let pe;
  if (L[20] !== Ot || L[21] !== yt) pe = r(n, {
    dimColor: !0,
    children: [Ot, " scope \xB7 ", yt]
  }), L[20] = Ot, L[21] = yt, L[22] = pe;
  else pe = L[22];
  const fe = E ? "overwrite" : "save";
  let Ke;
  if (L[23] !== fe) Ke = e(q, {
    chord: "enter",
    action: fe
  }), L[23] = fe, L[24] = Ke;
  else Ke = L[24];
  let cn, po;
  if (L[25] === S) cn = e(q, {
    chord: "tab",
    action: "toggle scope"
  }), po = e(q, {
    chord: "escape",
    action: "cancel"
  }), L[25] = cn, L[26] = po;
  else cn = L[25], po = L[26];
  let oe;
  if (L[27] !== Ke) oe = r(Se, {
    children: [Ke, cn, po]
  }), L[27] = Ke, L[28] = oe;
  else oe = L[28];
  let fo;
  if (L[29] === S) fo = e(n, {
    children: "Save as:"
  }), L[29] = fo;
  else fo = L[29];
  let dn;
  if (L[30] === S) dn = e(n, {
    children: ">"
  }), L[30] = dn;
  else dn = L[30];
  const mo = !R,
    go = !R;
  let at;
  if (L[31] !== f || L[32] !== W || L[33] !== X || L[34] !== b || L[35] !== mo || L[36] !== go) at = r(s, {
    flexDirection: "row",
    gap: 1,
    marginTop: 1,
    children: [dn, e(Lr, {
      value: b,
      onChange: gt,
      onSubmit: X,
      focus: mo,
      showCursor: go,
      columns: f,
      cursorOffset: W,
      onChangeCursorOffset: v
    })]
  }), L[31] = f, L[32] = W, L[33] = X, L[34] = b, L[35] = mo, L[36] = go, L[37] = at;
  else at = L[37];
  let Yt;
  if (L[38] !== E) Yt = E && e(s, {
    marginTop: 1,
    children: r(n, {
      color: "warning",
      children: [E, " already exists. Press Enter again to overwrite, or change the name."]
    })
  }), L[38] = E, L[39] = Yt;
  else Yt = L[39];
  let Ae;
  if (L[40] !== j) Ae = j && e(s, {
    marginTop: 1,
    children: e(ls, {
      error: j
    })
  }), L[40] = j, L[41] = Ae;
  else Ae = L[41];
  let We;
  if (L[42] !== R) We = R && e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: "Saving\u2026"
    })
  }), L[42] = R, L[43] = We;
  else We = L[43];
  let re;
  if (L[44] !== at || L[45] !== Yt || L[46] !== Ae || L[47] !== We) re = r(s, {
    flexDirection: "column",
    children: [fo, at, Yt, Ae, We]
  }), L[44] = at, L[45] = Yt, L[46] = Ae, L[47] = We, L[48] = re;
  else re = L[48];
  let un;
  if (L[49] !== H || L[50] !== pe || L[51] !== oe || L[52] !== re) un = e(ko, {
    onKeyDown: St,
    children: e(be, {
      title: "Save dynamic workflow",
      subtitle: pe,
      onCancel: H,
      color: "permission",
      isCancelActive: !1,
      inputGuide: oe,
      children: re
    })
  }), L[49] = H, L[50] = pe, L[51] = oe, L[52] = re, L[53] = un;
  else un = L[53];
  return un
}
var In = 3,
  Dn = 100,
  Tl = 12,
  kl = 6;

function Me(o) {
  return Gn(pn(o.replace(/\t/g, "  ")).trimEnd()).trimEnd()
}

function Pn({
  tasks: o,
  expanded: l,
  width: a,
  indent: u
}) {
  let d = [],
    f = F(o, (v) => v.status === "completed");
  d.push([{
    text: "Tasks",
    bold: !0,
    dimColor: !0
  }, {
    text: mt(` \xB7 ${f}/${o.length} done`, a - 5),
    dimColor: !0
  }]);
  let h = o.length > In,
    b = o,
    C = [];
  if (!l && h) {
    let v = [...o.filter((M) => M.status === "in_progress"), ...o.filter((M) => M.status === "pending"), ...o.filter((M) => M.status === "completed")],
      T = new Set(v.slice(0, In));
    b = o.filter((M) => T.has(M)), C = v.slice(In)
  } else if (l && o.length > Dn) b = o.slice(0, Dn), C = o.slice(Dn);
  let W = Math.max(4, a - ie(u) - 2);
  for (let v of b) {
    let T = Me(v.content),
      M = l ? tZe(T, W) : [mt(T, W)],
      R = M.length > 0 ? M : [""];
    for (let [I, E] of R.entries()) d.push([{
      text: u
    }, I === 0 ? Sl(v.status) : {
      text: " "
    }, {
      text: ` ${E}`,
      bold: v.status === "in_progress",
      dimColor: v.status !== "in_progress"
    }])
  }
  if (C.length > 0) {
    let v;
    if (l) v = `${C.length} more`;
    else {
      let T = [],
        M = F(C, (E) => E.status === "in_progress"),
        R = F(C, (E) => E.status === "pending"),
        I = F(C, (E) => E.status === "completed");
      if (M > 0) T.push(`${M} in progress`);
      if (R > 0) T.push(`${R} pending`);
      if (I > 0) T.push(`${I} completed`);
      v = T.join(", ")
    }
    d.push([{
      text: mt(`${u}\u2026 +${v}`, a),
      dimColor: !0
    }])
  }
  return {
    lines: d,
    capped: h
  }
}

function Sl(o) {
  let {
    icon: l,
    color: a
  } = htr(o);
  return {
    text: l,
    color: a
  }
}

function Ge(o, l) {
  if (o.result === null) return l && o.fromLastResponse ? "running" : "unanswered";
  return o.result.isError ? "error" : "ok"
}

function Nn({
  call: o,
  state: l,
  width: a,
  indent: u
}) {
  let d, f = null;
  switch (l) {
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
      break
  }
  let h = Math.max(1, a - ie(u) - ie(d.text) - 1 - (f ? ie(f.text) : 0)),
    b = Me(_me(o.name)),
    C = h - ie(b),
    W = C < 0 ? mt(b, h) : o.summary && C > 3 ? `${b}(${mt(Me(o.summary),C-2)})` : b;
  return [{
    text: u
  }, d, {
    text: ` ${W}`,
    dimColor: l !== "running"
  }, ...f ? [f] : []]
}

function $s({
  call: o,
  state: l,
  width: a,
  indent: u
}) {
  let d = [Nn({
    call: o,
    state: l,
    width: a,
    indent: u
  })];
  if (yn.includes(o.name)) return d;
  let f = `${u}  `;
  vl(d, o.fields, {
    indent: f,
    width: a,
    maxLines: Tl
  });
  let h = `${f}${Hqs}  `;
  if (o.result && o.result.head === "") d.push([{
    text: mt(`${h}(empty)`, a),
    color: o.result.isError ? "error" : void 0,
    dimColor: !o.result.isError
  }]);
  else if (o.result) Rs(d, o.result, {
    firstPrefix: h,
    restPrefix: " ".repeat(ie(h)),
    width: a,
    maxLines: kl,
    color: o.result.isError ? "error" : void 0
  });
  else if (l === "unanswered") d.push([{
    text: mt(`${h}(none recorded)`, a),
    dimColor: !0
  }]);
  return d
}

function vl(o, l, {
  indent: a,
  width: u,
  maxLines: d
}) {
  let f = d,
    h = 0,
    b = 0,
    C = `${a}  `;
  for (let W of l) {
    if (f <= 0) {
      h += W.lineCount;
      continue
    }
    let v = Me(W.key),
      T = `${a}${v}: `;
    if (!(W.lineCount === 1 && W.truncatedChars === 0 && ie(T) + ie(Me(W.head)) <= u) && ie(T) > Math.floor(u / 2)) {
      if (o.push([{
          text: mt(`${a}${v}:`, u),
          dimColor: !0
        }]), f--, T = C, f <= 0) {
        h += W.lineCount;
        continue
      }
    }
    let R = Rs(o, W, {
      firstPrefix: T,
      restPrefix: C,
      width: u,
      maxLines: f,
      color: void 0,
      reportHidden: !1
    });
    f -= R.lines, h += R.hiddenLines, b += R.hiddenChars
  }
  _s(o, a, u, h, b)
}

function Rs(o, l, {
  firstPrefix: a,
  restPrefix: u,
  width: d,
  maxLines: f,
  color: h,
  reportHidden: b = !0
}) {
  let C = l.head.split(`
`),
    W = 0,
    v = Math.max(0, l.lineCount - C.length),
    T = !0,
    M = Math.max(1, d - ie(u));
  t: for (let [I, E] of C.entries()) {
    let K = Me(E),
      j = ne(K, (f - W + 1) * d),
      Y = W === 0 ? Math.max(1, d - ie(a)) : M,
      L = tZe(j, Y)[0] ?? "",
      V = j.slice(L.length),
      N = V ? [L, ...tZe(V, M)] : [L];
    for (let [et, ut] of N.entries()) {
      if (W >= f) {
        v += C.length - I, T = !1;
        break t
      }
      o.push([{
        text: (W === 0 && et === 0 ? a : u) + ut,
        color: h,
        dimColor: h === void 0
      }]), W++
    }
    if (j.length < K.length) {
      v += C.length - I, T = !1;
      break
    }
  }
  let R = T ? l.truncatedChars : 0;
  if (b) _s(o, u, d, v, R);
  return {
    lines: W,
    hiddenLines: v,
    hiddenChars: R
  }
}

function _s(o, l, a, u, d) {
  let f = u > 0 ? `\u2026 ${u} more ${O(u,"line")}` : d > 0 ? `\u2026 +${d} chars` : "";
  if (f) o.push([{
    text: mt(`${l}${f}`, a),
    dimColor: !0
  }])
}

function gc(W, v) {
  return e(n, {
    color: W.color,
    dimColor: W.dimColor,
    bold: W.bold ?? !1,
    children: W.text
  }, v)
}

function hc() {
  return null
}

function Gt(o, l, a) {
  if (l <= a) return {
    from: 0,
    to: l,
    above: 0,
    below: 0
  };
  let u = Math.floor(a / 2),
    d = Math.max(0, Math.min(o - u, l - a)),
    f = d + a;
  return {
    from: d,
    to: f,
    above: d,
    below: l - f
  }
}

function It(o) {
  return o.state === "start" || o.state === "progress"
}

function Nt(o, l) {
  if (o.state === "done") return "done";
  if (o.state === "error") {
    if (o.skipped) return "skipped";
    if (o.blocked) return "blocked";
    return "failed"
  }
  if (!l) return "interrupted";
  return o.queuedAt != null && o.startedAt == null ? "queued" : "running"
}

function co(o) {
  switch (o) {
    case "done":
      return {
        glyph: te.tick, color: "success"
      };
    case "failed":
      return {
        glyph: te.cross, color: "error"
      };
    case "skipped":
      return {
        glyph: te.cross, color: "subtle"
      };
    case "blocked":
      return {
        glyph: te.cross, color: "permission"
      };
    case "queued":
    case "interrupted":
      return {
        glyph: c$r, color: "subtle"
      };
    case "running":
      return {
        glyph: wo, color: "subtle"
      }
  }
}
var Jt = ["all", "running", "queued", "failed", "done", "skipped", "blocked", "interrupted"];

function qe(o, l) {
  return l ? `showing ${o} ${l}` : `${o} ${O(o,"agent")}`
}

function sn(o, l) {
  if (o.status === "not-started") return "Not started yet";
  return l ? `No ${l} agents` : "No agents"
}

function Dt(o, l, a) {
  return Math.max(l, Math.min(a, o))
}

function ua(o, l) {
  let a = Nt(o, l),
    u = ytt(o.fallbackModel ?? o.model, void 0),
    d = [];
  if (o.isolation != null) d.push(o.isolation);
  if (o.tokens != null) d.push(`${cr(o.tokens)} tok`);
  if (a === "running" && o.lastProgressAt != null) {
    let h = Math.floor((Date.now() - o.lastProgressAt) / 1000);
    if (h >= 30) d.push(`idle ${rn(h*1000)}`)
  }
  if (a === "queued") d.push("queued");
  if (a === "interrupted") d.push("stopped");
  if (a === "skipped") d.push("skipped");
  if (a === "blocked") d.push("blocked");
  if (a === "failed") d.push("failed");
  let f = o.durationMs ?? (a === "running" && o.startedAt != null ? Math.max(0, Date.now() - o.startedAt) : void 0);
  return {
    model: u,
    stats: d.join(" \xB7 "),
    time: f != null ? Dhe(f) : ""
  }
}
var _i = 6;

function Ur(o, l, a, u) {
  if (l <= 0) return [];
  let {
    model: d,
    stats: f,
    time: h
  } = ua(o, u), b = a ? "permission" : void 0, C = !a, W = (j, Y) => Y <= 0 ? "" : mt(j, Y), v = h ? W(h, l).padStart(Math.min(_i, l)) : "", T = v ? l - ie(v) - 1 : l, M = (j, Y) => j && Y ? 3 : 0, R = d, I = f;
  if (ie(R) + M(R, I) + ie(I) > T) {
    if (I = W(I, T - ie(R) - M(R, I)), ie(R) + M(R, I) + ie(I) > T) R = W(R, T - ie(I) - M(R, I))
  }
  let E = R && I ? " \xB7 " : "",
    K = Math.max(0, l - ie(R) - ie(E) - ie(I) - ie(v));
  return [{
    text: R,
    color: b,
    dimColor: C
  }, {
    text: E,
    color: b,
    dimColor: C
  }, {
    text: I,
    color: b,
    dimColor: C
  }, {
    text: " ".repeat(K)
  }, {
    text: v,
    color: b,
    dimColor: C
  }]
}
var pa = 40,
  fa = 30;

function ln(o, l) {
  let a = Math.min(pa, Math.max(22, l - fa), Math.max(4, Math.min(l, Math.max(12, l - _i - 1)))),
    u = o.reduce((d, f) => Math.max(d, ie(f.label)), 0);
  return Math.min(Math.max(12, u), a)
}

function Gs(o, l) {
  let a = 0;
  for (let u = 0; u < o.length; u++) {
    let d = o[u],
      f = ie(d.text);
    if (a + f > l) {
      let h = l - a,
        b = h > 0 ? mt(d.text, h) : "",
        C = o.slice(0, u);
      if (b) C.push({
        ...d,
        text: b
      });
      return {
        segs: C,
        pad: Math.max(0, h - ie(b))
      }
    }
    a += f
  }
  return {
    segs: o,
    pad: Math.max(0, l - a)
  }
}

function ve(o) {
  let u = w(7),
    {
      segs: l,
      width: a
    } = o,
    d, f;
  if (u[0] !== l || u[1] !== a) {
    let {
      segs: h,
      pad: b
    } = Gs(l, a);
    d = h.map(gc);
    f = " ".repeat(b);
    u[0] = l, u[1] = a, u[2] = d, u[3] = f
  } else d = u[2], f = u[3];
  let C;
  if (u[4] !== d || u[5] !== f) C = r(Q, {
    children: [d, f]
  }), u[4] = d, u[5] = f, u[6] = C;
  else C = u[6];
  return C
}

function xt(o) {
  let u = w(7),
    {
      segs: l,
      contentWidth: a
    } = o,
    d;
  if (u[0] === S) d = r(n, {
    color: "text",
    children: [" ", Aw.pipe, " "]
  }), u[0] = d;
  else d = u[0];
  let f;
  if (u[1] !== a || u[2] !== l) f = e(ve, {
    segs: l,
    width: a
  }), u[1] = a, u[2] = l, u[3] = f;
  else f = u[3];
  let h;
  if (u[4] === S) h = r(n, {
    color: "text",
    children: [" ", Aw.pipe]
  }), u[4] = h;
  else h = u[4];
  let b;
  if (u[5] !== f) b = r(n, {
    wrap: "truncate-end",
    children: [d, f, h]
  }), u[5] = f, u[6] = b;
  else b = u[6];
  return b
}

function vt(o, l) {
  let a = o.from > 0 ? te.arrowUp : " ",
    u = o.to < l ? te.arrowDown : " ";
  return `${a} ${o.from+1}${$qs}${o.to} of ${l} ${u}`
}

function Hr(o) {
  let u = w(5),
    {
      win: l,
      total: a
    } = o,
    d;
  if (u[0] !== a || u[1] !== l) d = vt(l, a), u[0] = a, u[1] = l, u[2] = d;
  else d = u[2];
  const f = `  ${d}`;
  let h;
  if (u[3] !== f) h = e(n, {
    dimColor: !0,
    wrap: "truncate-end",
    children: f
  }), u[3] = f, u[4] = h;
  else h = u[4];
  return h
}

function Jr(o) {
  let v = w(53),
    {
      phase: l,
      selectedAgent: a,
      level: u,
      contentWidth: d,
      viewport: f,
      tight: h,
      workflowActive: b,
      filterLabel: C
    } = o,
    W = l.agents,
    T;
  if (v[0] !== d) T = k4.repeat(d + 2), v[0] = d, v[1] = T;
  else T = v[1];
  let M = T,
    R, I;
  if (v[2] !== W || v[3] !== M || v[4] !== d || v[5] !== C || v[6] !== u || v[7] !== l || v[8] !== a || v[9] !== h || v[10] !== f || v[11] !== b) {
    let E = Gt(a, W.length, f);
    I = [];
    let K = qe(W.length, C);
    if (h) {
      let j = mt(` \xB7 ${K}`, Math.max(1, d - 1));
      let Y = Math.max(1, d - ie(j));
      let L;
      if (v[14] !== l.title || v[15] !== Y) L = mt(l.title, Y), v[14] = l.title, v[15] = Y, v[16] = L;
      else L = v[16];
      let V;
      if (v[17] !== L) V = {
        text: L,
        color: "permission",
        bold: !0
      }, v[17] = L, v[18] = V;
      else V = v[18];
      let N;
      if (v[19] !== j) N = {
        text: j,
        dimColor: !0
      }, v[19] = j, v[20] = N;
      else N = v[20];
      let et;
      if (v[21] !== V || v[22] !== N) et = [V, N], v[21] = V, v[22] = N, v[23] = et;
      else et = v[23];
      let ut;
      if (v[24] !== d || v[25] !== et) ut = e(xt, {
        contentWidth: d,
        segs: et
      }, "title"), v[24] = d, v[25] = et, v[26] = ut;
      else ut = v[26];
      I.push(ut)
    } else I.push(e(xt, {
      contentWidth: d,
      segs: [{
        text: mt(l.title, d),
        color: "permission",
        bold: !0
      }]
    }, "title")), I.push(e(xt, {
      contentWidth: d,
      segs: [{
        text: mt(K, d),
        dimColor: !0
      }]
    }, "count")), I.push(e(xt, {
      contentWidth: d,
      segs: [{
        text: ""
      }]
    }, "gap"));
    let gt = I.length;
    if (W.length === 0) {
      let L;
      if (v[27] !== C || v[28] !== l) L = sn(l, C), v[27] = C, v[28] = l, v[29] = L;
      else L = v[29];
      let V;
      if (v[30] !== L) V = [{
        text: L,
        dimColor: !0
      }], v[30] = L, v[31] = V;
      else V = v[31];
      let N;
      if (v[32] !== d || v[33] !== V) N = e(xt, {
        contentWidth: d,
        segs: V
      }, "empty"), v[32] = d, v[33] = V, v[34] = N;
      else N = v[34];
      I.push(N)
    } else {
      let wt = ln(W, d - 5);
      for (let U = E.from; U < E.to; U++) {
        let G = W[U];
        let ot = u === "agents" && U === a;
        let {
          glyph: it,
          color: z
        } = co(Nt(G, b));
        let X = mt(G.label, wt);
        let dt = " ".repeat(Math.max(0, wt - ie(X)));
        let H = Math.max(0, d - (wt + 5));
        I.push(e(xt, {
          contentWidth: d,
          segs: [{
            text: ot ? te.pointer : " ",
            color: "permission"
          }, {
            text: " "
          }, {
            text: it,
            color: z
          }, {
            text: " "
          }, {
            text: `${X}${dt}`,
            color: ot ? "permission" : void 0,
            dimColor: !ot && It(G)
          }, {
            text: " "
          }, ...Ur(G, H, ot, b)]
        }, `a-${U}`))
      }
    }
    let nt = I.length - gt;
    for (let ft = nt; ft < f; ft++) I.push(e(xt, {
      contentWidth: d,
      segs: [{
        text: ""
      }]
    }, `pad-${ft}`));
    if (W.length > f) {
      let Lt = ` ${vt(E,W.length)} `;
      let St = Math.max(0, d + 2 - ie(Lt));
      let L;
      if (v[35] !== St) L = k4.repeat(St), v[35] = St, v[36] = L;
      else L = v[36];
      let V;
      if (v[37] !== L) V = r(n, {
        color: "text",
        children: [" ", ik.bottomLeft, L]
      }), v[37] = L, v[38] = V;
      else V = v[38];
      let N;
      if (v[39] !== Lt) N = e(n, {
        dimColor: !0,
        children: Lt
      }), v[39] = Lt, v[40] = N;
      else N = v[40];
      let et;
      if (v[41] === S) et = e(n, {
        color: "text",
        children: ik.bottomRight
      }), v[41] = et;
      else et = v[41];
      let ut;
      if (v[42] !== V || v[43] !== N) ut = r(n, {
        wrap: "truncate-end",
        children: [V, N, et]
      }), v[42] = V, v[43] = N, v[44] = ut;
      else ut = v[44];
      R = ut
    } else {
      let L;
      if (v[45] !== M) L = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", ik.bottomLeft, M, ik.bottomRight]
      }), v[45] = M, v[46] = L;
      else L = v[46];
      R = L
    }
    v[2] = W, v[3] = M, v[4] = d, v[5] = C, v[6] = u, v[7] = l, v[8] = a, v[9] = h, v[10] = f, v[11] = b, v[12] = R, v[13] = I
  } else R = v[12], I = v[13];
  let L;
  if (v[47] !== M) L = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", ik.topLeft, M, ik.topRight]
  }), v[47] = M, v[48] = L;
  else L = v[48];
  let V;
  if (v[49] !== R || v[50] !== I || v[51] !== L) V = r(s, {
    flexDirection: "column",
    children: [L, I, R]
  }), v[49] = R, v[50] = I, v[51] = L, v[52] = V;
  else V = v[52];
  return V
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
  }), f[0] = h;
  else h = f[0];
  let b;
  if (f[1] !== l || f[2] !== u) b = e(ve, {
    segs: l,
    width: u
  }), f[1] = l, f[2] = u, f[3] = b;
  else b = f[3];
  let C;
  if (f[4] === S) C = r(n, {
    color: "text",
    children: [" ", Aw.pipe, " "]
  }), f[4] = C;
  else C = f[4];
  let W;
  if (f[5] !== a || f[6] !== d) W = e(ve, {
    segs: a,
    width: d
  }), f[5] = a, f[6] = d, f[7] = W;
  else W = f[7];
  let v;
  if (f[8] === S) v = r(n, {
    color: "text",
    children: [" ", Aw.pipe]
  }), f[8] = v;
  else v = f[8];
  let T;
  if (f[9] !== b || f[10] !== W) T = r(n, {
    wrap: "truncate-end",
    children: [h, b, C, W, v]
  }), f[9] = b, f[10] = W, f[11] = T;
  else T = f[11];
  return T
}

function Bo(o, l) {
  let a = [],
    u = 0;
  if (l.label) {
    let h = ` ${mt(l.label.text,Math.max(1,o-2))} `;
    u += ie(h), a.push(e(n, {
      color: l.label.color ?? "text",
      bold: l.label.bold,
      children: h
    }, "label"))
  }
  let d = l.tag ? ` ${mt(l.tag,Math.max(0,o-u-2))} ` : "",
    f = Math.max(0, o - u - ie(d));
  if (a.push(e(n, {
      color: "text",
      children: k4.repeat(f)
    }, "dash")), d) a.push(e(n, {
    dimColor: !0,
    children: d
  }, "tag"));
  return a
}

function Zt(o) {
  let T = w(20),
    {
      pos: l,
      leftWidth: a,
      rightWidth: u,
      leftTitle: d,
      rightTitle: f,
      leftTag: h,
      rightTag: b
    } = o,
    C = l === "top" ? ik.topLeft : ik.bottomLeft,
    W = l === "top" ? Aw.teeDown : Aw.teeUp,
    v = l === "top" ? ik.topRight : ik.bottomRight,
    M;
  if (T[0] !== C) M = r(n, {
    color: "text",
    children: [" ", C]
  }), T[0] = C, T[1] = M;
  else M = T[1];
  const R = a + 2;
  let I;
  if (T[2] !== h || T[3] !== d || T[4] !== R) I = Bo(R, {
    label: d ? {
      text: d
    } : void 0,
    tag: h
  }), T[2] = h, T[3] = d, T[4] = R, T[5] = I;
  else I = T[5];
  let E;
  if (T[6] !== W) E = e(n, {
    color: "text",
    children: W
  }), T[6] = W, T[7] = E;
  else E = T[7];
  const K = u + 2;
  let j;
  if (T[8] !== b || T[9] !== f || T[10] !== K) j = Bo(K, {
    label: f ? {
      text: f
    } : void 0,
    tag: b
  }), T[8] = b, T[9] = f, T[10] = K, T[11] = j;
  else j = T[11];
  let Y;
  if (T[12] !== v) Y = e(n, {
    color: "text",
    children: v
  }), T[12] = v, T[13] = Y;
  else Y = T[13];
  let L;
  if (T[14] !== M || T[15] !== I || T[16] !== E || T[17] !== j || T[18] !== Y) L = r(n, {
    wrap: "truncate-end",
    children: [M, I, E, j, Y]
  }), T[14] = M, T[15] = I, T[16] = E, T[17] = j, T[18] = Y, T[19] = L;
  else L = T[19];
  return L
}

function si(o, l, a, u, d) {
  let f = l === a,
    h = o.status === "done",
    b = o.status === "failed",
    C = h ? te.tick : b ? te.cross : String(l + 1),
    W = f ? "permission" : h ? "success" : b ? "error" : "subtle",
    v = o.totalCount > 0 ? `${o.doneCount}/${o.totalCount}` : "",
    T = u === "phases" && f ? `${te.pointer} ` : "  ",
    M = ie(T) + ie(C) + 1,
    R = v ? 1 + ie(v) : 0,
    I = mt(o.title, Math.max(1, d - M - R)),
    E = Math.max(0, d - M - ie(I) - R),
    K = !f && o.status === "not-started",
    j = [{
      text: T,
      color: f ? "permission" : void 0
    }, {
      text: C,
      color: W
    }, {
      text: " "
    }, {
      text: I,
      color: f ? "permission" : void 0,
      dimColor: K
    }, {
      text: " ".repeat(E)
    }];
  if (v) j.push({
    text: " "
  }, {
    text: v,
    color: f ? "permission" : "subtle"
  });
  return j
}

function ii(o, l, a, u, d, f, h) {
  let b = u === "agents" && l === a,
    {
      glyph: C,
      color: W
    } = co(Nt(o, h)),
    v = mt(o.label, f),
    T = " ".repeat(Math.max(0, f - ie(v))),
    M = Math.max(0, d - (f + 4));
  return [{
    text: b ? te.pointer : " ",
    color: "permission"
  }, {
    text: C,
    color: W
  }, {
    text: " "
  }, {
    text: `${v}${T}`,
    color: b ? "permission" : void 0,
    dimColor: !b && It(o)
  }, {
    text: " "
  }, ...Ur(o, M, b, h)]
}

function li(o, l, a, u, d) {
  let f = l === a,
    {
      glyph: h,
      color: b
    } = co(Nt(o, d)),
    C = mt(o.label, Math.max(1, u - 4));
  return [{
    text: f ? `${te.pointer} ` : "  ",
    color: "permission"
  }, {
    text: h,
    color: b
  }, {
    text: " "
  }, {
    text: C,
    color: f ? "permission" : void 0,
    dimColor: !f && It(o)
  }]
}

function Vr(o) {
  let M = w(41),
    {
      phases: l,
      selectedPhase: a,
      clampedPhase: u,
      clampedAgent: d,
      level: f,
      leftWidth: h,
      rightWidth: b,
      viewport: C,
      workflowActive: W,
      filterLabel: v
    } = o,
    T = a.agents,
    R, I, E, K, j, Y, L, V, N, et;
  if (M[0] !== T || M[1] !== d || M[2] !== u || M[3] !== v || M[4] !== h || M[5] !== f || M[6] !== l || M[7] !== b || M[8] !== a || M[9] !== C || M[10] !== W) {
    let ut = Gt(u, l.length, C);
    let gt = Gt(d, T.length, C);
    let wt = ln(T, b - 4);
    let U = [];
    for (let G = 0; G < C; G++) {
      let ot = ut.from + G;
      let it = gt.from + G;
      let z = ot < ut.to ? si(l[ot], ot, u, f, h) : [];
      let X;
      if (it < gt.to) X = ii(T[it], it, d, f, b, wt, W);
      else if (T.length === 0 && G === 0) X = [{
        text: sn(a, v),
        dimColor: !0
      }];
      else X = [];
      U.push(e(uo, {
        left: z,
        right: X,
        leftWidth: h,
        rightWidth: b
      }, G))
    }
    const dt = a.title;
    let H;
    if (M[21] !== T.length || M[22] !== v) H = qe(T.length, v), M[21] = T.length, M[22] = v, M[23] = H;
    else H = M[23];
    let nt = `${dt} \xB7 ${H}`;
    I = s;
    V = "column";
    if (M[24] !== h || M[25] !== nt || M[26] !== b) N = e(Zt, {
      pos: "top",
      leftWidth: h,
      rightWidth: b,
      leftTitle: "Phases",
      rightTitle: nt
    }), M[24] = h, M[25] = nt, M[26] = b, M[27] = N;
    else N = M[27];
    et = U;
    R = Zt;
    E = "bottom";
    K = h;
    j = b;
    Y = l.length > C ? vt(ut, l.length) : void 0;
    L = T.length > C ? vt(gt, T.length) : void 0;
    M[0] = T, M[1] = d, M[2] = u, M[3] = v, M[4] = h, M[5] = f, M[6] = l, M[7] = b, M[8] = a, M[9] = C, M[10] = W, M[11] = R, M[12] = I, M[13] = E, M[14] = K, M[15] = j, M[16] = Y, M[17] = L, M[18] = V, M[19] = N, M[20] = et
  } else R = M[11], I = M[12], E = M[13], K = M[14], j = M[15], Y = M[16], L = M[17], V = M[18], N = M[19], et = M[20];
  let dt;
  if (M[28] !== R || M[29] !== E || M[30] !== K || M[31] !== j || M[32] !== Y || M[33] !== L) dt = e(R, {
    pos: E,
    leftWidth: K,
    rightWidth: j,
    leftTag: Y,
    rightTag: L
  }), M[28] = R, M[29] = E, M[30] = K, M[31] = j, M[32] = Y, M[33] = L, M[34] = dt;
  else dt = M[34];
  let H;
  if (M[35] !== I || M[36] !== V || M[37] !== N || M[38] !== et || M[39] !== dt) H = r(I, {
    flexDirection: V,
    children: [N, et, dt]
  }), M[35] = I, M[36] = V, M[37] = N, M[38] = et, M[39] = dt, M[40] = H;
  else H = M[40];
  return H
}
var Ya = 2,
  Qa = 20,
  Rr = wn,
  fi = 100,
  mi = 250;

function Br(o, l, a, u) {
  let M = w(13),
    [d, f] = y(null),
    b = Ee(Tk)?.setTimeout ?? MI,
    C = A(void 0),
    W = A(0),
    v = A(0),
    T = A(null),
    R, I;
  if (M[0] === S) R = () => () => {
    T.current = null
  }, I = [], M[0] = R, M[1] = I;
  else R = M[0], I = M[1];
  P(R, I);
  let E;
  if (M[2] !== l || M[3] !== u || M[4] !== b || M[5] !== o) E = () => {
    if (!o || !l) {
      return
    }
    T.current = {
      runId: o,
      agentId: l
    };
    let K = W.current = W.current + 1;
    let Y = () => {
      Cn(o, l, {
        promptFramed: u
      }).catch(hc).then((j) => {
        if (K > v.current && T.current?.runId === o && T.current.agentId === l) v.current = K, C.current = l, f({
          agentId: l,
          transcript: j
        })
      })
    };
    if (C.current === l) {
      return b(Y, mi)
    }
    Y()
  }, M[2] = l, M[3] = u, M[4] = b, M[5] = o, M[6] = E;
  else E = M[6];
  let L;
  if (M[7] !== l || M[8] !== u || M[9] !== a || M[10] !== b || M[11] !== o) L = [o, l, a, u, b], M[7] = l, M[8] = u, M[9] = a, M[10] = b, M[11] = o, M[12] = L;
  else L = M[12];
  if (P(E, L), !o || !l) {
    return null
  }
  if (!d || d.agentId !== l) {
    return "loading"
  }
  return d.transcript
}

function Ir(o, l) {
  let a = [];
  for (let u of o.split(`
`)) {
    if (u === "") {
      a.push("");
      continue
    }
    for (let d of tZe(u, Math.max(1, l))) a.push(d)
  }
  return a
}

function Ci({
  lines: o,
  title: l,
  body: a,
  collapsedLines: u,
  expanded: d,
  indent: f,
  width: h
}) {
  let b = a.length - u,
    C = b >= 2 ? b : 0,
    W = [{
      text: l,
      bold: !0,
      dimColor: !0
    }];
  if (C > 0) W.push({
    text: mt(` \xB7 ${a.length} lines${d?"":` \xB7 ${v_t} expand`}`, h - ie(l)),
    dimColor: !0
  });
  o.push(W);
  let v = d || C === 0 ? a : a.slice(0, u);
  for (let T of v) o.push(T);
  if (!d && C > 0) o.push([{
    text: mt(`${f}\u2026 ${C} more ${O(C,"line")}`, h),
    dimColor: !0
  }]);
  return C
}

function Ti(o, l) {
  let a = 0;
  for (let u of l) {
    if (o < u.end) break;
    a += u.growth
  }
  return o + a
}

function ki(o, l) {
  let a = 0;
  for (let u of l) {
    let d = u.end + a;
    if (o < d) break;
    if (o < d + u.growth) return u.end;
    a += u.growth
  }
  return o - a
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
  agent: o,
  status: l,
  transcript: a,
  expanded: u,
  width: d,
  nowMs: f
}) {
  let h = [],
    b = "  ",
    C = Math.max(8, d - 2),
    W = a === "loading" ? null : a,
    {
      glyph: v,
      color: T
    } = co(l),
    M = [];
  if (o.model != null) M.push(ytt(o.model, o.fallbackModel));
  if (o.agentType != null) M.push(o.agentType);
  if (o.isolation != null) M.push(o.isolation === "remote" && o.remoteSessionId ? `remote ${o.remoteSessionId}` : o.isolation);
  if (o.cached) M.push("from resume journal");
  if (o.attempt != null && o.attempt > 1) {
    let H = o.lastAttemptReason === "throttled" ? o.label.endsWith(BHn) ? d7t : "throttled" : o.lastAttemptReason === "user-retry" ? "user retry" : "stalled";
    M.push(`attempt ${o.attempt} (${H})`)
  }
  let R = ie(v) + 1 + ie(an[l]),
    I = M.length > 0 ? mt(` \xB7 ${M.join(" \xB7 ")}`, Math.max(0, d - R)) : "";
  h.push([{
    text: v,
    color: T
  }, {
    text: " "
  }, {
    text: an[l],
    color: T,
    bold: !0
  }, ...I ? [{
    text: I,
    dimColor: !0
  }] : []]);
  let E = [];
  if (o.tokens != null) E.push(`${cr(o.tokens)} tok`);
  if (o.toolCalls != null && o.toolCalls > 0) E.push(`${o.toolCalls} ${O(o.toolCalls,"tool call")}`);
  if (o.durationMs != null) E.push(rn(o.durationMs));
  if (l === "queued" && o.queuedAt != null) E.push(`waiting ${rn(Math.max(0,f-o.queuedAt))}`);
  if (l === "running" && o.lastProgressAt != null) {
    let H = Math.floor((f - o.lastProgressAt) / 1000);
    if (H >= 30) E.push(`idle ${rn(H*1000)}`)
  }
  if (E.length > 0) h.push([{
    text: mt(E.join(" \xB7 "), d),
    dimColor: !0
  }]);
  h.push([{
    text: ""
  }]);
  let K = l !== "queued" && W ? W.toolCalls : [],
    j = l === "running",
    Y = K.filter((H) => Ge(H, j) === "running"),
    L = K,
    V = W?.tasks ?? [],
    N = V.length > 0 ? Pn({
      tasks: V,
      expanded: !1,
      width: d,
      indent: "  "
    }) : null,
    et = V.length > 0 ? Pn({
      tasks: V,
      expanded: !0,
      width: d,
      indent: "  "
    }) : null,
    ut = u ? et : N,
    gt = L.length > 0 || (ut?.capped ?? !1),
    wt = a !== "loading" && a?.prompt ? a.prompt : o.promptPreview ?? "",
    U = wt ? Ir(wt, C).map((H) => [{
      text: "  " + H,
      dimColor: !0
    }]) : [
      [{
        text: "  " + (l === "queued" ? "Available once the agent starts." : a === "loading" ? "Loading\u2026" : l === "running" ? "Not available yet (agent still running)." : "Transcript not available."),
        dimColor: !0
      }]
    ],
    G = Ci({
      lines: h,
      title: "Prompt",
      body: U,
      collapsedLines: Ya,
      expanded: u,
      indent: "  ",
      width: d
    }),
    ot = G > 0 ? G - 1 : 0,
    it = ot,
    z = [{
      end: h.length - (u ? it : 0),
      growth: ot
    }];
  if (h.push([{
      text: ""
    }]), ut && N && et) {
    for (let nt of ut.lines) h.push(nt);
    let H = et.lines.length - N.lines.length;
    it += H, z.push({
      end: h.length - (u ? it : 0),
      growth: H
    }), h.push([{
      text: ""
    }])
  }
  if (l !== "queued") {
    let H = L.length - Rr,
      nt = Math.max(0, H - Rr);
    while (!1) H--;
    let ft = L.filter((Rt, yt) => yt >= H || Ge(Rt, j) === "running"),
      Lt = [];
    for (let [Rt, yt] of ft.entries()) {
      if (Rt > 0) Lt.push([{
        text: ""
      }]);
      let Ot = Ge(yt, j);
      Lt.push(...$s({
        call: yt,
        state: Ot,
        width: d,
        indent: "  "
      }))
    }
    let St = "";
    if (L.length > ft.length) St = ` \xB7 ${ft.length<=Rr?"last ":""}${ft.length} of ${L.length} tool calls`;
    let zt = Math.max(0, d - ie("Activity")),
      ee = ` \xB7 ${v_t} expand`;
    if (St = !u && gt && ie(St) + ie(ee) <= zt ? St + ee : mt(St, zt), h.push([{
        text: "Activity",
        bold: !0,
        dimColor: !0
      }, ...St ? [{
        text: St,
        dimColor: !0
      }] : []]), L.length > 0) {
      if (u)
        for (let yt of Lt) h.push(yt);
      else
        for (let yt of ft) {
          let Ot = Ge(yt, j);
          h.push(Nn({
            call: yt,
            state: Ot,
            width: d,
            indent: "  "
          }))
        }
      let Rt = Lt.length - ft.length;
      it += Rt, z.push({
        end: h.length - (u ? it : 0),
        growth: Rt
      })
    } else if (o.lastToolName != null) {
      let Rt = o.lastToolSummary ? `(${o.lastToolSummary})` : "",
        yt = _me(o.lastToolName);
      h.push([{
        text: mt(`  ${yt}${Rt}`, d),
        dimColor: !0
      }])
    } else h.push([{
      text: `  ${l==="running"?"No tool calls yet.":"No tool calls."}`,
      dimColor: !0
    }]);
    h.push([{
      text: ""
    }])
  }
  let X = [];
  switch (l) {
    case "queued":
      X.push([{
        text: "  Waiting for an agent slot.",
        dimColor: !0
      }]);
      break;
    case "running":
      X.push([{
        text: `${"  "}Still running\u2026`,
        dimColor: !0
      }]);
      break;
    case "interrupted":
      X.push([{
        text: "  The workflow stopped before this agent finished.",
        dimColor: !0
      }]);
      break;
    case "skipped":
      X.push([{
        text: "  Skipped by user.",
        dimColor: !0
      }]);
      break;
    case "blocked":
    case "failed": {
      for (let H of Ir(o.error ?? "failed", C)) X.push([{
        text: "  " + H,
        color: "error"
      }]);
      break
    }
    case "done": {
      let H = a !== "loading" && a?.finalText ? a.finalText : o.resultPreview ?? "";
      if (!H) {
        X.push([{
          text: "  " + (a === "loading" ? "Loading\u2026" : "(empty)"),
          dimColor: !0
        }]);
        break
      }
      let nt = gs(H, C);
      if (nt)
        for (let ft of nt) X.push([{
          text: "  "
        }, ...ft]);
      else
        for (let ft of Ir(H, C)) X.push([{
          text: "  " + ft
        }]);
      break
    }
  }
  let dt = Ci({
    lines: h,
    title: "Outcome",
    body: X,
    collapsedLines: Qa,
    expanded: u,
    indent: "  ",
    width: d
  });
  return {
    lines: h,
    expandable: G > 0 || dt > 0 || gt,
    folds: z,
    detailExpandable: gt
  }
}

function Gr(o) {
  let M = w(42),
    {
      phase: l,
      clampedAgent: a,
      agentLabel: u,
      detailLines: d,
      cardScroll: f,
      leftWidth: h,
      rightWidth: b,
      viewport: C,
      workflowActive: W,
      filterLabel: v
    } = o,
    T = l.agents,
    R, I, E, K, j, Y, L, V, N, et;
  if (M[0] !== u || M[1] !== T || M[2] !== f || M[3] !== a || M[4] !== d || M[5] !== v || M[6] !== h || M[7] !== l.title || M[8] !== b || M[9] !== C || M[10] !== W) {
    let ut = Gt(a, T.length, C);
    let gt = Math.max(0, d.length - C);
    let wt = Dt(f, 0, gt);
    let U = Math.min(d.length, wt + C);
    let G = [];
    for (let ot = 0; ot < C; ot++) {
      let it = ut.from + ot;
      let z = it < ut.to ? li(T[it], it, a, h, W) : [];
      let X = wt + ot;
      let dt = X < U ? d[X] : [];
      G.push(e(uo, {
        left: z,
        right: dt,
        leftWidth: h,
        rightWidth: b
      }, ot))
    }
    I = s;
    V = "column";
    const H = l.title;
    let nt;
    if (M[21] !== T.length || M[22] !== v) nt = qe(T.length, v), M[21] = T.length, M[22] = v, M[23] = nt;
    else nt = M[23];
    const ft = `${H} \xB7 ${nt}`;
    if (M[24] !== u || M[25] !== h || M[26] !== b || M[27] !== ft) N = e(Zt, {
      pos: "top",
      leftWidth: h,
      rightWidth: b,
      leftTitle: ft,
      rightTitle: u
    }), M[24] = u, M[25] = h, M[26] = b, M[27] = ft, M[28] = N;
    else N = M[28];
    et = G;
    R = Zt;
    E = "bottom";
    K = h;
    j = b;
    Y = T.length > C ? vt(ut, T.length) : void 0;
    L = d.length > C ? vt({
      from: wt,
      to: U
    }, d.length) : void 0;
    M[0] = u, M[1] = T, M[2] = f, M[3] = a, M[4] = d, M[5] = v, M[6] = h, M[7] = l.title, M[8] = b, M[9] = C, M[10] = W, M[11] = R, M[12] = I, M[13] = E, M[14] = K, M[15] = j, M[16] = Y, M[17] = L, M[18] = V, M[19] = N, M[20] = et
  } else R = M[11], I = M[12], E = M[13], K = M[14], j = M[15], Y = M[16], L = M[17], V = M[18], N = M[19], et = M[20];
  let H;
  if (M[29] !== R || M[30] !== E || M[31] !== K || M[32] !== j || M[33] !== Y || M[34] !== L) H = e(R, {
    pos: E,
    leftWidth: K,
    rightWidth: j,
    leftTag: Y,
    rightTag: L
  }), M[29] = R, M[30] = E, M[31] = K, M[32] = j, M[33] = Y, M[34] = L, M[35] = H;
  else H = M[35];
  let nt;
  if (M[36] !== I || M[37] !== V || M[38] !== N || M[39] !== et || M[40] !== H) nt = r(I, {
    flexDirection: V,
    children: [N, et, H]
  }), M[36] = I, M[37] = V, M[38] = N, M[39] = et, M[40] = H, M[41] = nt;
  else nt = M[41];
  return nt
}

function zr(o) {
  let b = w(43),
    {
      agentLabel: l,
      position: a,
      detailLines: u,
      cardScroll: d,
      contentWidth: f,
      viewport: h
    } = o,
    C;
  if (b[0] !== f) C = k4.repeat(f + 2), b[0] = f, b[1] = C;
  else C = b[1];
  let W = C,
    v = Math.max(0, u.length - h),
    T, M;
  if (b[2] !== l || b[3] !== W || b[4] !== d || b[5] !== f || b[6] !== u || b[7] !== v || b[8] !== a || b[9] !== h) {
    let R = Dt(d, 0, v);
    let I = Math.min(u.length, R + h);
    M = [];
    let E = ` \xB7 ${a}`;
    const K = Math.max(1, f - ie(E));
    let j;
    if (b[12] !== l || b[13] !== K) j = mt(l, K), b[12] = l, b[13] = K, b[14] = j;
    else j = b[14];
    let Y;
    if (b[15] !== j) Y = {
      text: j,
      color: "permission",
      bold: !0
    }, b[15] = j, b[16] = Y;
    else Y = b[16];
    let L;
    if (b[17] !== E) L = {
      text: E,
      dimColor: !0
    }, b[17] = E, b[18] = L;
    else L = b[18];
    let V;
    if (b[19] !== Y || b[20] !== L) V = [Y, L], b[19] = Y, b[20] = L, b[21] = V;
    else V = b[21];
    let N;
    if (b[22] !== f || b[23] !== V) N = e(xt, {
      contentWidth: f,
      segs: V
    }, "title"), b[22] = f, b[23] = V, b[24] = N;
    else N = b[24];
    M.push(N);
    for (let et = R; et < I; et++) M.push(e(xt, {
      contentWidth: f,
      segs: u[et]
    }, `l-${et}`));
    for (let ut = I - R; ut < h; ut++) M.push(e(xt, {
      contentWidth: f,
      segs: [{
        text: ""
      }]
    }, `pad-${ut}`));
    if (u.length > h) {
      let gt = ` ${vt({from:R,to:I},u.length)} `;
      let wt = Math.max(0, f + 2 - ie(gt));
      let U;
      if (b[25] !== wt) U = k4.repeat(wt), b[25] = wt, b[26] = U;
      else U = b[26];
      let G;
      if (b[27] !== U) G = r(n, {
        color: "text",
        children: [" ", ik.bottomLeft, U]
      }), b[27] = U, b[28] = G;
      else G = b[28];
      let ot;
      if (b[29] !== gt) ot = e(n, {
        dimColor: !0,
        children: gt
      }), b[29] = gt, b[30] = ot;
      else ot = b[30];
      let it;
      if (b[31] === S) it = e(n, {
        color: "text",
        children: ik.bottomRight
      }), b[31] = it;
      else it = b[31];
      let z;
      if (b[32] !== ot || b[33] !== G) z = r(n, {
        wrap: "truncate-end",
        children: [G, ot, it]
      }), b[32] = ot, b[33] = G, b[34] = z;
      else z = b[34];
      T = z
    } else {
      let U;
      if (b[35] !== W) U = r(n, {
        color: "text",
        wrap: "truncate-end",
        children: [" ", ik.bottomLeft, W, ik.bottomRight]
      }), b[35] = W, b[36] = U;
      else U = b[36];
      T = U
    }
    b[2] = l, b[3] = W, b[4] = d, b[5] = f, b[6] = u, b[7] = v, b[8] = a, b[9] = h, b[10] = T, b[11] = M
  } else T = b[10], M = b[11];
  let K;
  if (b[37] !== W) K = r(n, {
    color: "text",
    wrap: "truncate-end",
    children: [" ", ik.topLeft, W, ik.topRight]
  }), b[37] = W, b[38] = K;
  else K = b[38];
  let j;
  if (b[39] !== T || b[40] !== M || b[41] !== K) j = r(s, {
    flexDirection: "column",
    children: [K, M, T]
  }), b[39] = T, b[40] = M, b[41] = K, b[42] = j;
  else j = b[42];
  return j
}

function itt({
  workflow: o,
  onDone: l,
  onBack: a,
  onKill: u,
  onSkipAgent: d,
  onRetryAgent: f,
  onPause: h,
  onResume: b,
  initialPhaseIndex: C,
  promptVisibleBelow: W = !1
}) {
  Ra("workflow-detail-dialog");
  let {
    availableRows: v,
    width: T,
    rows: M
  } = ner(W), R = Math.max(12, T - 6), I = _tt(o), E = Z(() => K2r(o), [o.workflowProgress, o.phases]), K = Z(() => J2r(E, o.agentCount), [E, o.agentCount]), [j, Y] = y(() => C !== void 0 ? Math.max(0, C) : 0), [L, V] = y(0), [N, et] = y(C !== void 0 ? "agents" : "phases"), [ut, gt] = y(!1), [wt, U] = y({
    scroll: 0,
    expanded: !1
  }), {
    scroll: G,
    expanded: ot
  } = wt, [it, z] = y("all"), X = Math.min(j, Math.max(0, E.length - 1)), dt = E[X], H = o.status === "running", nt = Z(() => {
    if (!dt || it === "all" || N === "phases") return dt;
    return {
      ...dt,
      agents: dt.agents.filter((D) => Nt(D, H) === it)
    }
  }, [dt, it, N, H]), ft = nt ? Math.min(L, Math.max(0, nt.agents.length - 1)) : 0, [Lt, St] = y(!1), zt = o.script.length > 0, ee = Z(() => {
    if (!zt) return "";
    let D = Tv(o.script);
    if (!("error" in D)) return D.meta.name;
    return aae(o.summary ?? o.description)
  }, [zt, o.script, o.summary, o.description]), Rt = Z(() => Q2r(o), [o.script, o.description, o.summary]), {
    name: yt,
    subtext: Ot,
    stats: pe
  } = Z2r(o, Rt, K, I);

  function fe() {
    U({
      scroll: 0,
      expanded: !1
    })
  }

  function Ke(D) {
    Y((Ct) => Dt(Dt(Ct, 0, E.length - 1) + D, 0, E.length - 1)), V(0), fe()
  }

  function cn(D) {
    if (!nt) return;
    V((Ct) => Dt(Dt(Ct, 0, nt.agents.length - 1) + D, 0, nt.agents.length - 1)), fe()
  }

  function po(D) {
    U((Ct) => ({
      ...Ct,
      scroll: Math.max(0, Ct.scroll + D)
    }))
  }

  function oe(D) {
    if (N === "phases") {
      Ke(D);
      return
    }
    cn(D)
  }

  function fo() {
    if (gt(!1), N === "agent") {
      et("agents");
      return
    }
    if (N === "agents") {
      et("phases");
      return
    }
    if (a) a();
    else l()
  }

  function dn() {
    if (dt && dt.agents.length > 0) V(0), z("all"), et("agents")
  }

  function mo() {
    if (!at || !dt) return;
    if (it !== "all") z("all"), V(dt.agents.indexOf(at));
    if (fe(), bo === "loading") gt(!0);
    else et("agent")
  }

  function go() {
    if (!dt || ut) return;
    let D = new Set(dt.agents.map((Ct) => Nt(Ct, H)));
    z((Ct) => {
      let Wt = Jt.indexOf(Ct);
      for (let se = 0; se < Jt.length; se++) {
        Wt = (Wt + 1) % Jt.length;
        let as = Jt[Wt];
        if (as === "all" || D.has(as)) break
      }
      return Jt[Wt]
    }), V(0), fe()
  }
  let at = N !== "phases" && nt ? nt.agents[ft] : void 0,
    Yt = at ? Nt(at, H) : void 0,
    Ae = !!at && It(at) && !!at.agentId && (!!d || !!u),
    We = !!at && It(at) && !!at.agentId && !!f,
    re = T - 9,
    un = nt ? Math.max(14, ...nt.agents.map((D) => 4 + ie(D.label))) : 14,
    fn = Math.max(12, Math.min(30, un, re - 30)),
    ho = re - fn,
    mn = N === "agent" && E.length > 0 && T >= 64 && ho >= 30,
    Yr = mn ? ho : R,
    bo = Br(o.workflowRunId, at?.agentId, at?.lastProgressAt, at?.promptFramed),
    Ii = Dr(ut ? fi : null);
  if (ut) {
    if (!at) gt(!1);
    else if (bo !== "loading" || Ii) gt(!1), et("agent")
  }
  let Qr = Yt === "queued" || Yt === "running" ? Math.floor(Date.now() / 1000) * 1000 : 0,
    Ue = Z(() => N === "agent" && at && Yt ? Si({
      agent: at,
      status: Yt,
      transcript: bo,
      expanded: ot,
      width: Yr,
      nowMs: Qr
    }) : {
      lines: [],
      expandable: !1,
      folds: [],
      detailExpandable: !1
    }, [N, at, Yt, bo, ot, Yr, Qr]),
    xo = Ue.lines;

  function Di() {
    if (!at || !It(at)) return;
    if (at.agentId && d) d(at.agentId);
    else if (u) u()
  }

  function Pi() {
    if (at && It(at) && at.agentId) f?.(at.agentId)
  }
  on({
    "confirm:previous": () => oe(-1),
    "confirm:next": () => oe(1)
  }, {
    context: "Confirmation"
  });
  let gn = o.status === "running" && !!h,
    hn = o.status === "paused" && !!o.scriptPath && !!o.workflowRunId && !!b,
    Xr = o.status === "running" && !!u && N === "phases";

  function Ni() {
    if (gn) h?.();
    else if (hn) b?.(xar(o))
  }
  let Oi = (D) => {
      if (D.ctrl || D.meta) return;
      if (D.key === "j")
        if (D.preventDefault(), N === "agent") po(1);
        else oe(1);
      else if (D.key === "k")
        if (D.preventDefault(), N === "agent") po(-1);
        else oe(-1);
      else if (D.key === "return" || D.key === "right") {
        if (D.preventDefault(), N === "phases") dn();
        else if (N === "agents") mo();
        else if (D.key === "return" && Ue.expandable) {
          if (!ot && Ue.detailExpandable) g("workflow_agent_card_detail");
          let {
            folds: Ct
          } = Ue;
          U(({
            scroll: Wt,
            expanded: se
          }) => ({
            expanded: !se,
            scroll: se ? ki(Wt, Ct) : Ti(Wt, Ct)
          }))
        }
      } else if (D.key === "left") D.preventDefault(), fo();
      else if (D.key === "r" && We) D.preventDefault(), Pi();
      else if (D.key === "x" && Ae) D.preventDefault(), Di();
      else if (D.key === "x" && Xr) D.preventDefault(), u?.();
      else if (D.key === " ") D.preventDefault(), l();
      else if (D.key === "p" && (gn || hn)) D.preventDefault(), Ni();
      else if (D.key === "f" && N === "agents") D.preventDefault(), go();
      else if (D.key === "s" && zt) D.preventDefault(), St(!0)
    },
    yo = E.length > 0;
  if (Lt) return e(_wt, {
    script: o.script,
    defaultName: ee,
    onDone: (D) => {
      if (D) l(D);
      else St(!1)
    }
  });
  let Qt = v < 18,
    Zr = v - (Qt ? 8 : 11),
    ts = Math.max(1, Zr - 3),
    bn = E.length > ts,
    es = bn ? Math.max(1, ts - 1) : E.length,
    Fi = Math.max(1, Zr - es - (bn ? 1 : 0)),
    Co = Gt(X, E.length, es),
    ji = Math.max(14, ...E.map((D, Ct) => {
      let Wt = D.status === "done" ? te.tick : D.status === "failed" ? te.cross : String(Ct + 1),
        se = D.totalCount > 0 ? `${D.doneCount}/${D.totalCount}` : "";
      return 2 + ie(Wt) + 1 + ie(D.title) + (se ? 1 + ie(se) : 0)
    })),
    os = Math.max(12, Math.min(34, ji, re - 24)),
    ns = re - os,
    qi = N !== "agent" && yo && T >= 64 && ns >= 20,
    xn = Math.max(1, v - (Qt ? 7 : 8)),
    rs = Math.max(3, v - (Qt ? 8 : 9)),
    ss = mn ? xn : rs,
    is = Math.max(0, xo.length - ss);
  if (G > is) U({
    scroll: is,
    expanded: ot
  });
  let He = it !== "all" && N !== "phases" ? an[it].toLowerCase() : void 0,
    At = [];
  if (N === "agent") {
    if (At.push(`${s$}${tI} agent`), xo.length > ss) At.push("j/k scroll");
    if (Ue.expandable) At.push(`${v_t} ${ot?"collapse":"expand"}`)
  } else if (yo) At.push(`${s$}${tI} select`);
  if (Ae) At.push("x stop");
  if (Xr) At.push("x stop workflow");
  if (We) At.push("r restart");
  if (gn) At.push("p pause");
  else if (hn) At.push("p resume");
  if (N === "agents" && yo) At.push(He ? `f filter: ${He}` : "f filter");
  if (At.push("esc back"), zt) At.push("s save");
  let Ki = At.join(" \xB7 ");
  return e(ko, {
    onKeyDown: Oi,
    children: e(be, {
      title: null,
      hideBorder: !0,
      hideInputGuide: !0,
      onCancel: fo,
      color: "text",
      children: r(s, {
        flexDirection: "column",
        width: T,
        minHeight: Math.max(Qt ? 8 : 12, Math.min(v - 1, M - 6)),
        maxHeight: Math.max(Qt ? 8 : 11, v - 1),
        overflowY: "hidden",
        children: [!yo ? r(Q, {
          children: [e(Eo, {
            children: "No agents yet."
          }), e(s, {
            flexGrow: 1
          })]
        }) : N === "agent" && at && nt ? r(Q, {
          children: [e(btt, {
            name: yt,
            subtext: Ot,
            stats: pe,
            width: T
          }), !Qt && e(s, {
            height: 1
          }), mn ? e(Gr, {
            phase: nt,
            clampedAgent: ft,
            agentLabel: at.label,
            detailLines: xo,
            cardScroll: G,
            leftWidth: fn,
            rightWidth: ho,
            viewport: xn,
            workflowActive: H,
            filterLabel: He
          }) : e(zr, {
            agentLabel: at.label,
            position: `${ft+1}/${nt.agents.length}`,
            detailLines: xo,
            cardScroll: G,
            contentWidth: R,
            viewport: rs
          }), e(s, {
            flexGrow: 1
          })]
        }) : qi && nt ? r(Q, {
          children: [e(btt, {
            name: yt,
            subtext: Ot,
            stats: pe,
            width: T
          }), !Qt && e(s, {
            height: 1
          }), e(Vr, {
            phases: E,
            selectedPhase: nt,
            clampedPhase: X,
            clampedAgent: ft,
            level: N === "phases" ? "phases" : "agents",
            leftWidth: os,
            rightWidth: ns,
            viewport: xn,
            workflowActive: H,
            filterLabel: He
          }), e(s, {
            flexGrow: 1
          })]
        }) : r(Q, {
          children: [e(btt, {
            name: yt,
            subtext: Ot,
            stats: pe,
            width: T
          }), !Qt && e(s, {
            height: 1
          }), E.slice(Co.from, Co.to).map((D, Ct) => {
            let Wt = Co.from + Ct;
            return e(rer, {
              index: Wt + 1,
              title: D.title,
              done: D.doneCount,
              total: D.totalCount,
              status: D.status,
              selected: Wt === X
            }, `${Wt}-${D.title}`)
          }), bn && e(Hr, {
            win: Co,
            total: E.length
          }), e(s, {
            flexGrow: 1
          }), nt ? e(Jr, {
            phase: nt,
            selectedAgent: ft,
            level: N === "phases" ? "phases" : "agents",
            contentWidth: R,
            viewport: Fi,
            tight: Qt,
            workflowActive: H,
            filterLabel: He
          }) : null]
        }), r(n, {
          dimColor: !0,
          italic: !0,
          wrap: "truncate-end",
          children: [" ", Ki]
        })]
      })
    })
  })
}
export {
  _wt,
  itt
};
