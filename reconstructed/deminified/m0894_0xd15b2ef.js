// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { lAe } from "B:/~BUN/root/chunk-4h4gje25.js";
import { b, Vo, s2r, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { bK } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ire, O$, vd, up, fj, d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { jn } from "B:/~BUN/root/chunk-5w2ecytn.js";
import { _de, zu } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { m$t } from "B:/~BUN/root/chunk-5kqdkjak.js";
import { Iv, kye, X4n, M$r, mpt, D$r, d5e, jFt, L$r, WFt, zFt, GFt, VFt, qFt, pfn } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { w6, Xt, kf, Iw } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { cp, Ks, shn, nUo, rUo } from "B:/~BUN/root/chunk-1652axk8.js";
var policy = "allow_usage_transcript_scan",
  policy_2 = "allow_skill_doctor_transcript_scan",
  policy_3 = "allow_stats_transcript_scan",
  Me = {
    policy: policy,
    hipaaReason: "Not shown for HIPAA-regulated organizations: this breakdown is built by scanning the session transcripts saved on this machine."
  },
  Ee = {
    policy: policy_2,
    hipaaReason: "Not shown for HIPAA-regulated organizations: measured by scanning the session transcripts saved on this machine."
  },
  Ce = {
    policy: policy_3,
    hipaaReason: "Not shown for HIPAA-regulated organizations: these stats are built by scanning the session transcripts saved on this machine."
  };
function B(e) {
  if (Xt(e.policy)) return {
    allowed: !0
  };
  if (Iw(e.policy) === "org_denied" && lAe().includes("hipaa")) return {
    allowed: !1,
    reason: e.hipaaReason
  };
  let {
    featureLabel: featureLabel,
    verb: verb
  } = w6(e.policy);
  return {
    allowed: !1,
    reason: kf(e.policy, featureLabel, verb) ?? `${featureLabel} ${verb} unavailable right now.`
  };
}
function tOe() {
  return B(Me);
}
function MSt() {
  return B(Ee);
}
function QKt() {
  return B(Ce);
}
import { readdir as H, stat as ye } from "fs/promises";
import { extname as j, join as v } from "path";
var D = 4,
  te = 4194304,
  length = te,
  oe = 604800000,
  be = 1e5,
  Oe = 150000,
  Le = 3,
  we = 0.5,
  Ie = 300000,
  Ne = 4,
  ke = 8,
  textEncoder = new TextEncoder(),
  se = textEncoder.encode('"type":"assistant"'),
  ve = textEncoder.encode('"usage":{'),
  re = textEncoder.encode('"timestamp":"'),
  De = textEncoder.encode('"sessionId":"'),
  Pe = textEncoder.encode('"model":"'),
  xe = textEncoder.encode('"requestId":"'),
  z = textEncoder.encode('"id":"'),
  Be = textEncoder.encode("msg_"),
  ie = textEncoder.encode('"uuid":"'),
  Ue = textEncoder.encode('"input_tokens":'),
  Fe = textEncoder.encode('"output_tokens":'),
  He = textEncoder.encode('"cache_creation_input_tokens":'),
  Ke = textEncoder.encode('"cache_read_input_tokens":'),
  Ge = textEncoder.encode('"isSidechain":true'),
  qe = textEncoder.encode('"isSidechain": true'),
  $e = textEncoder.encode('"attribution'),
  We = textEncoder.encode('"attributionAgent":"'),
  Ye = textEncoder.encode('"attributionSkill":"'),
  je = textEncoder.encode('"attributionPlugin":"'),
  ze = textEncoder.encode('"attributionMcpServer":"'),
  Xe = textEncoder.encode('"type":"user"'),
  U = textEncoder.encode('"isMeta":true'),
  Ve = textEncoder.encode('"subtype":"scheduled_task_fire"'),
  Qe = textEncoder.encode('"taskId":"'),
  F = textEncoder.encode('"scheduledTaskId":"'),
  Je = textEncoder.encode('"scheduledFireId":"'),
  Ze = textEncoder.encode('"type":"tool_result"'),
  en = textEncoder.encode('"turnCompanion":true'),
  nn = textEncoder.encode(`"text":"${Iv.slice(0, -1)}`),
  X = textEncoder.encode('"content":"['),
  tn = textEncoder.encode(" prior /loop wakeup"),
  on = textEncoder.encode('"isCompactSummary":true'),
  sn = textEncoder.encode('"type":"attachment"'),
  rn = textEncoder.encode('"type":"queued_command"'),
  cn = textEncoder.encode('"origin":{'),
  an = textEncoder.encode('"origin":{"kind":"human"'),
  un = textEncoder.encode('"promptSource":"'),
  dn = textEncoder.encode('"type":"system"'),
  pn = textEncoder.encode('"subtype":"local_command"'),
  w = e => [textEncoder.encode(`"content":"<${e}>`), textEncoder.encode(`"text":"<${e}>`)],
  V = [...w("command-message"), ...w("command-name")],
  ln = w(fj),
  Q = [...w(vd), ...w(up)],
  fn = [...w(ire), ...w(O$)],
  L = (e, n, o) => n.some(item => S(e, item, 0, o) >= 0),
  mn = [textEncoder.encode(`"content":${b(kye).slice(0, -1)}`), textEncoder.encode(`"text":${b(kye).slice(0, -1)}`)],
  ce = (e, n = !1) => {
    let o = n ? b(e) : b(e).slice(0, -1);
    return [textEncoder.encode(`"content":${o}`), textEncoder.encode(`"text":${o}`)];
  },
  _n = [...M$r.map(item => `${item}${X4n}`), mpt, D$r, d5e, m$t, pfn].filter(item => item.length > 0).flatMap(item => ce(item)),
  Sn = [jFt, L$r, WFt, zFt, GFt, VFt, qFt].flatMap(item => ce(item, !0)),
  gn = textEncoder.encode('"cron":"'),
  Tn = textEncoder.encode('"prompt":"'),
  hn = textEncoder.encode('"taskKind":"loop"'),
  Rn = textEncoder.encode('"content":"'),
  Mn = textEncoder.encode('"text":"'),
  q = 34,
  En = 92,
  K = 48,
  ae = 57;
function S(e, n, o, s) {
  let r = e.subarray(o, s).indexOf(n);
  return r < 0 ? -1 : o + r;
}
function M(e, n, o, s) {
  let r = S(e, n, o, s);
  if (r < 0) return;
  let i = r + n.length,
    c = i;
  while (c < s && e[c] !== q) c++;
  return e.toString("utf8", i, c);
}
function P(e, n, o, s, r) {
  let i = S(e, n, o, s);
  if (i < 0) return;
  let c = i + n.length,
    a = c,
    m = Math.min(s, c + r);
  while (a < m && e[a] !== q) {
    if (e[a] === En) a++;
    a++;
  }
  let _ = a >= m;
  if (a > m) a = m - 1;
  if (_) a = Cn(e, c, a);
  let u = e.toString("utf8", c, a);
  if (_) u = u.replace(/(^|[^\\])((?:\\\\)*)\\u[0-9a-fA-F]{0,3}$/, "$1$2");
  try {
    let g = Vo(`"${u}"`);
    return typeof g === "string" ? g : void 0;
  } catch {
    return;
  }
}
function Cn(e, n, o) {
  let s = o;
  while (s > n && (e[s - 1] & 192) === 128) s--;
  if (s === n) return n;
  let r = e[s - 1],
    i = r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  return o - (s - 1) < i ? s - 1 : o;
}
function yn(e, n, o) {
  let s = n;
  while (!0) {
    if (s = S(e, z, s, o), s < 0) return;
    let r = s + z.length;
    if (S(e, Be, r, r + 4) === r) {
      let i = r;
      while (i < o && e[i] !== q) i++;
      return e.toString("utf8", r, i);
    }
    s = r;
  }
}
function I(e, n, o, s) {
  let r = S(e, n, o, s);
  if (r < 0) return 0;
  let i = r + n.length,
    c = 0;
  while (i < s && e[i] >= K && e[i] <= ae) c = c * 10 + (e[i] - K), i++;
  return c;
}
function An(e) {
  if (!e) return 3;
  let n = e.toLowerCase();
  if (n.includes("fable")) return 10;
  if (n.includes("opus")) return 5;
  if (n.includes("haiku")) return 1;
  return 3;
}
function bn(e) {
  return (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) * e.modelTier;
}
async function DSt(e) {
  let n = Date.now() - oe,
    o = Date.now() - 86400000,
    s = J(),
    r = J();
  return await ue(n, i => {
    if (ee(r, i), i.ts >= o) ee(s, i, o);
  }, e, i => {
    if (Z(r, i), i.ts >= o) Z(s, i);
  }), {
    day: ne(s),
    week: ne(r)
  };
}
async function ue(e, n, o, s, r) {
  if (o) return On(o, e, n, s, r);
  let i = zu(),
    c;
  try {
    c = await H(i);
  } catch (error) {
    if (Et(error)) return;
    throw error;
  }
  let m = (await Promise.all(c.map(item => kn(v(i, item))))).flat(),
    _ = de(n, s);
  for (let u = 0; u < m.length; u += D) {
    let g = m.slice(u, u + D),
      T = g.map(() => r && _e(r()));
    (await Promise.all(g.map((item, index) => vn(item, e, T[index])))).forEach((item, index) => {
      _(item), T[index]?.end(item);
    });
  }
}
function de(e, n) {
  let o = new Set(),
    s = r => {
      if (!r) return !0;
      if (o.has(r)) return !1;
      return o.add(r), !0;
    };
  return r => {
    for (let i of r.records) if (s(i.uuid)) e(i);
    if (n) {
      for (let i of r.fires) if (s(i.uuid)) n(i);
    }
  };
}
async function On(e, n, o, s, r) {
  let i = [],
    budget = shn(),
    a = await Ks(cursor => e.listEntries({
      namespace: "transcript"
    }, {
      skipScopeStats: !0,
      ...(cursor !== void 0 && {
        cursor: cursor
      })
    }), T => {
      for (let A of T) {
        let E = _de(A, jn);
        if (E !== void 0) i.push(E);
      }
    }, {
      budget: budget
    });
  W("project", a, budget);
  let _ = (await Promise.all(i.map(item => Ln(e, item, n, budget)))).flat(),
    u = de(o, s);
  for (let T = 0; T < _.length; T += D) {
    let A = _.slice(T, T + D),
      E = A.map(() => r && _e(r()));
    (await Promise.all(A.map((item, index) => wn(e, item, n, E[index])))).forEach((item, index) => {
      u(item), E[index]?.end(item);
    });
  }
  let g = rUo(budget);
  if (g > 0) t(`foldRecentRecords: ${g} more v5 listings were cut short after the scan's ${cp}-page budget ran out`);
}
async function Ln(e, projectKey, o, budget_2) {
  let r = [],
    i = [],
    c = await Ks(cursor_2 => e.listEntries({
      namespace: "transcript",
      projectKey: projectKey
    }, {
      skipScopeStats: !0,
      ...(cursor_2 !== void 0 && {
        cursor: cursor_2
      })
    }), u => {
      for (let g of u) if (g.kind === "key") le(r, g);else if (g.scope.namespace === "transcript" && g.scope.sessionId !== void 0 && jn(g.scope.sessionId)) i.push(g.scope.sessionId);
    }, {
      budget: budget_2
    });
  W("session", c, budget_2);
  let a = new Map();
  for (let u of r) if (u.key.namespace === "transcript" && u.key.agentId === void 0 && u.key.journal !== !0) a.set(u.key.sessionId, u.mtimeMs);
  let m = i.filter(item => (a.get(item) ?? 1 / 0) >= o),
    _ = await Promise.all(m.map(item => pe(e, projectKey, item, budget_2)));
  return r.concat(_.flat());
}
async function pe(e, projectKey_2, sessionId, budget_3, agentRelPath) {
  let i = [],
    c = [],
    a = await Ks(cursor_3 => e.listEntries({
      namespace: "transcript",
      projectKey: projectKey_2,
      sessionId: sessionId,
      ...(agentRelPath !== void 0 && {
        agentRelPath: agentRelPath
      })
    }, {
      skipScopeStats: !0,
      ...(cursor_3 !== void 0 && {
        cursor: cursor_3
      })
    }), _ => {
      for (let u of _) if (u.kind === "key") {
        if (u.key.namespace === "transcript" && (u.key.agentId !== void 0 || u.key.journal === !0)) le(i, u);
      } else if (u.scope.namespace === "transcript" && u.scope.agentRelPath !== void 0 && u.scope.agentRelPath.length > (agentRelPath?.length ?? 0)) c.push(u.scope.agentRelPath);
    }, {
      budget: budget_3
    });
  W("subagent", a, budget_3);
  let m = await Promise.all(c.map(item => pe(e, projectKey_2, sessionId, budget_3, item)));
  return i.concat(m.flat());
}
function W(e, n, o) {
  let s = nUo(n, o);
  if (n.status === "error") t(`foldRecentRecords: v5 ${e} listing failed: ${n.error.code}`);else if (s === "first-truncation") t(`foldRecentRecords: v5 ${e} listing cut short (the scan's ${cp}-page budget is spent); keeping what was listed`);
}
function le(e, n) {
  if (n.kind === "key" && n.key.namespace === "transcript" && n.size !== void 0 && n.mtimeMs !== void 0) e.push({
    key: n.key,
    size: n.size,
    mtimeMs: n.mtimeMs
  });
}
async function wn(e, n, o, s) {
  let r = fe();
  if (n.mtimeMs >= o) await In(e, n, me(r, o, s));
  return r;
}
async function In(e, n, o) {
  let {
      key: key
    } = n,
    r = n.size <= te,
    offset = 0,
    c = [],
    a = 0;
  while (!0) {
    let m = await e.read([r ? key : {
      key: key,
      offset: offset,
      length: length
    }]);
    if (!m.ok) {
      t(`readRecordsFromStream: v5 read failed: ${m.error.code}`);
      return;
    }
    let _ = m.value.items[0];
    if (!_.found) return;
    let u = Buffer.from(_.value.buffer, _.value.byteOffset, _.value.byteLength),
      g = 0;
    while (g < u.length) {
      let T = u.indexOf(10, g);
      if (T === -1) {
        c.push(Buffer.from(u.subarray(g))), a += u.length - g;
        break;
      }
      if (a === 0) o(u.subarray(g, T));else o(Buffer.concat([...c, u.subarray(g, T)], a + (T - g))), c = [], a = 0;
      g = T + 1;
    }
    if (offset += _.value.byteLength, r || _.value.byteLength === 0 || offset >= _.totalBytes) break;
  }
  if (a > 0) o(c.length === 1 ? c[0] : Buffer.concat(c, a));
}
function Nn(e, n) {
  if (!n.attributionSkill) return;
  e.set(n.attributionSkill, (e.get(n.attributionSkill) ?? 0) + n.cached + n.cacheCreate + n.uncached + n.output);
}
async function tZr(e) {
  let n = Date.now() - oe,
    o = new Map();
  return await ue(n, s => Nn(o, s), e), o;
}
async function kn(e) {
  let n;
  try {
    n = await H(e, {
      withFileTypes: !0
    });
  } catch (error) {
    if (Et(error)) return [];
    throw error;
  }
  let o = [],
    s = [];
  for (let i of n) if (i.isFile() && j(i.name) === ".jsonl") o.push(v(e, i.name));else if (i.isDirectory()) s.push(i.name);
  let r = await Promise.all(s.map(async item => {
    let c = v(e, item, "subagents");
    try {
      return (await H(c, {
        recursive: !0
      })).filter(item => j(item) === ".jsonl").map(item => v(c, item));
    } catch (error) {
      if (Et(error)) return [];
      throw error;
    }
  }));
  for (let i of r) for (let c of i) o.push(c);
  return o;
}
async function vn(e, n, o) {
  let s = fe();
  return await Dn(e, n, me(s, n, o)), s;
}
async function Dn(e, n, o) {
  let s;
  try {
    s = await ye(e);
  } catch (error) {
    if (Et(error)) return;
    throw error;
  }
  if (!s.isFile() || s.mtimeMs < n) return;
  try {
    for await (let r of s2r(e)) o(r);
  } catch (error) {
    if (Et(error)) return;
    throw error;
  }
}
function fe() {
  return {
    records: [],
    fires: []
  };
}
function me(e, n, o) {
  let s = xn(e, n);
  if (!o) return s;
  return r => {
    s(r), o.line(r, e);
  };
}
function _e(e) {
  let n = !0,
    o = s => {
      if (!n) return;
      try {
        s();
      } catch (error) {
        n = !1, d(error);
      }
    };
  return {
    line: (s, r) => o(() => e.line(s, r)),
    end: s => o(() => e.end(s))
  };
}
var Pn = /<command-name>([^<]{1,200})<\/command-name>/,
  Y = 200,
  G = 6 * Y;
function xn(e, n) {
  let o = 0,
    s = [],
    r = [],
    i = 0,
    c = !0,
    a,
    m = () => {
      o++, r = [], i = 0, c = !1;
    },
    _ = () => {
      o++, r = [], i = 0, c = !0, T = void 0, a = void 0;
    },
    u = () => {
      if (!a) return;
      if (i = Math.max(0, i - 1), a.run) e.fires.pop(), r.pop();
      if (a.fire && a.fire.taskId === void 0) s.unshift(a.fire);
      a = void 0;
    },
    g = () => {
      if (a?.isCommandRecord) u(), _();
    },
    T,
    A = (l, f) => {
      let h = M(l, Je, 0, f);
      if (h !== void 0) {
        let R = s.findIndex(item => item.uuid === h);
        return R < 0 ? void 0 : s.splice(R, 1)[0];
      }
      let C = M(l, F, 0, f);
      if (C !== void 0) {
        let R = s.findLastIndex(x => x.taskId === C);
        if (R < 0) return;
        let y = s[R];
        return s = s.filter(item => item.taskId !== C), y;
      }
      if (!(S(l, cn, 0, f) < 0 && (S(l, U, 0, f) >= 0 || L(l, V, f)))) {
        s = s.filter(item => item.taskId !== void 0);
        return;
      }
      if (s[0]?.taskId === void 0) return s.shift();
      return;
    },
    E = (l, f) => S(l, U, 0, f) >= 0 && (_n.some(item => S(l, item, 0, f) >= 0) || Sn.some(item => S(l, item, 0, f) >= 0));
  return l => {
    let f = l.length;
    if (S(l, se, 0, f) >= 0) {
      let h = Kn(l, 0, f, n);
      if (c = !0, a = void 0, h) {
        if (i > 1 && r.length > 0) {
          let share = 1 / i;
          h.loopShares = r.map(item => ({
            ...item,
            share: share
          }));
        } else if (r[0]) h.loop = r[0].loop, h.loopFireTs = r[0].fireTs;
        e.records.push(h);
      }
      return;
    }
    if (S(l, Xe, 0, f) >= 0) {
      if (S(l, Ze, 0, f) >= 0 || S(l, en, 0, f) >= 0 || S(l, on, 0, f) >= 0 || L(l, fn, f) || Bn(l, f) || E(l, f)) return;
      if (S(l, nn, 0, f) >= 0) {
        _();
        return;
      }
      let h = S(l, U, 0, f) >= 0;
      if (h && L(l, mn, f)) {
        if (u(), i === 0) _();
        return;
      }
      if (L(l, Q, f)) {
        g();
        return;
      }
      let isCommandRecord = L(l, V, f);
      if (L(l, ln, f) || h && !isCommandRecord && S(l, un, 0, f) < 0 && S(l, F, 0, f) < 0) return;
      let O = S(l, an, 0, f) >= 0 || !h && !isCommandRecord && S(l, F, 0, f) < 0,
        fire = A(l, f);
      if (fire?.openBatch === o && !c && i > 0) _();
      if (c || O) m();
      if (i++, a = {
        fire: fire,
        run: !1,
        isCommandRecord: isCommandRecord
      }, !fire) {
        T = void 0;
        return;
      }
      let loop = fire.loop ?? Hn(l, f);
      if (!loop) return;
      if (!loop.isDynamic) T = void 0;
      if (fire.ts < n) return;
      e.fires.push({
        ts: fire.ts,
        uuid: fire.uuid,
        loop: loop
      }), r.push({
        loop: loop,
        fireTs: fire.ts
      }), a.run = !0;
      return;
    }
    if (S(l, dn, 0, f) >= 0 && S(l, pn, 0, f) >= 0 && L(l, Q, f)) {
      g();
      return;
    }
    if (S(l, sn, 0, f) >= 0 && S(l, rn, 0, f) >= 0) {
      _();
      return;
    }
    if (S(l, Ve, 0, f) >= 0) {
      let h = M(l, re, 0, f),
        ts = h ? Date.parse(h) : NaN;
      if (Number.isNaN(ts)) return;
      let O = P(l, Tn, 0, f, G),
        prompt = O ? bK(O, Y) : void 0,
        isDynamic = S(l, hn, 0, f) >= 0;
      if (prompt && isDynamic) T ??= prompt, prompt = T;
      s.push({
        ts: ts,
        openBatch: i > 0 && !c ? o : void 0,
        uuid: M(l, ie, 0, f) ?? "",
        taskId: M(l, Qe, 0, f),
        loop: prompt ? {
          prompt: prompt,
          cron: Fn(P(l, gn, 0, f, Un)),
          isDynamic: isDynamic
        } : null
      });
    }
  };
}
function Bn(e, n) {
  let o = S(e, X, 0, n);
  if (o < 0) return !1;
  let s = o + X.length,
    r = s;
  while (s < n && e[s] >= K && e[s] <= ae) s++;
  return s > r && S(e, tn, s, n) === s;
}
var Se = 64,
  Un = 6 * Se;
function Fn(e) {
  return e === void 0 ? void 0 : bK(e, Se);
}
function Hn(e, n) {
  let o = P(e, Rn, 0, n, G) ?? P(e, Mn, 0, n, G);
  if (!o) return null;
  let s = o.match(Pn)?.[1],
    prompt_2 = bK(s ?? o, Y);
  return prompt_2 ? {
    prompt: prompt_2,
    cron: void 0,
    isDynamic: !1
  } : null;
}
function Kn(e, n, o, s) {
  if (S(e, se, n, o) < 0) return;
  if (S(e, ve, n, o) < 0) return;
  let r = M(e, re, n, o),
    sessionId_2 = M(e, De, n, o);
  if (!r || !sessionId_2) return;
  let ts_2 = Date.parse(r);
  if (Number.isNaN(ts_2) || ts_2 < s) return;
  let uncached = I(e, Ue, n, o),
    output = I(e, Fe, n, o),
    cacheCreate = I(e, He, n, o),
    cached = I(e, Ke, n, o);
  if (uncached + output + cacheCreate + cached === 0) return;
  let g = S(e, $e, n, o) >= 0,
    model = M(e, Pe, n, o);
  return {
    ts: ts_2,
    sessionId: sessionId_2,
    cached: cached,
    cacheCreate: cacheCreate,
    uncached: uncached,
    output: output,
    isSubagent: S(e, Ge, n, o) >= 0 || S(e, qe, n, o) >= 0,
    modelTier: An(model),
    model: model,
    uuid: M(e, xe, n, o) ?? yn(e, n, o) ?? M(e, ie, n, o) ?? "",
    ...(g && {
      attributionAgent: M(e, We, n, o),
      attributionSkill: M(e, Ye, n, o),
      attributionPlugin: M(e, je, n, o),
      attributionMcpServer: M(e, ze, n, o)
    })
  };
}
function J() {
  return {
    totalCost: 0,
    requestCount: 0,
    cacheMissCost: 0,
    cacheMissCount: 0,
    longCtxCost: 0,
    longCtxCount: 0,
    sessions: new Map(),
    buckets: new Map(),
    byAgent: new Map(),
    bySkill: new Map(),
    byPlugin: new Map(),
    byMcpServer: new Map(),
    loops: new Map()
  };
}
function ge(e, n) {
  let o = e.loops.get(n.prompt);
  if (!o) o = {
    prompt: n.prompt,
    cron: n.cron,
    isDynamic: n.isDynamic,
    runs: 0,
    tokens: 0,
    lastRunMs: 0
  }, e.loops.set(n.prompt, o);
  return o;
}
function Z(e, n) {
  let o = ge(e, n.loop);
  if (o.runs++, n.ts >= o.lastRunMs) o.lastRunMs = n.ts, o.cron = n.loop.cron ?? o.cron, o.isDynamic = n.loop.isDynamic;
}
function N(e, n, o) {
  if (n) e.set(n, (e.get(n) ?? 0) + o);
}
function ee(e, n, o = -1 / 0) {
  let s = bn(n);
  if (e.totalCost += s, e.requestCount++, n.attributionAgent) N(e.byAgent, n.attributionSkill ?? n.attributionAgent, s);else N(e.bySkill, n.attributionSkill, s);
  if (N(e.byPlugin, n.attributionPlugin, s), N(e.byMcpServer, n.attributionMcpServer, s), n.loop || n.loopShares) {
    let m = n.cached + n.cacheCreate + n.uncached + n.output;
    for (let {
      loop: loop_2,
      fireTs: fireTs,
      share: share_2
    } of n.loopShares ?? [{
      loop: n.loop,
      fireTs: n.loopFireTs ?? n.ts,
      share: 1
    }]) if (fireTs >= o) ge(e, loop_2).tokens += m * share_2;
  }
  let r = n.cached + n.cacheCreate + n.uncached;
  if (n.uncached > be) e.cacheMissCost += s, e.cacheMissCount++;
  if (r > Oe) e.longCtxCost += s, e.longCtxCount++;
  let i = e.sessions.get(n.sessionId);
  if (!i) i = {
    cost: 0,
    requests: 0,
    subCost: 0,
    subCount: 0,
    hours: new Set()
  }, e.sessions.set(n.sessionId, i);
  if (i.cost += s, i.requests++, n.isSubagent) i.subCost += s, i.subCount++;
  i.hours.add(Math.floor(n.ts / 3600000));
  let c = Math.floor(n.ts / Ie),
    a = e.buckets.get(c);
  if (!a) a = {
    sids: new Set(),
    cost: 0,
    count: 0
  }, e.buckets.set(c, a);
  a.sids.add(n.sessionId), a.cost += s, a.count++;
}
function ne(e) {
  let cost_2 = 0,
    count_2 = 0;
  for (let m of e.buckets.values()) if (m.sids.size >= Ne) cost_2 += m.cost, count_2 += m.count;
  let cost = 0,
    count = 0,
    cost_3 = 0,
    count_3 = 0;
  for (let m of e.sessions.values()) {
    if (m.subCount >= Le || m.cost > 0 && m.subCost / m.cost > we) cost += m.cost, count++;
    if (m.hours.size >= ke) cost_3 += m.cost, count_3++;
  }
  let behaviors = [{
    key: "cache_miss",
    cost: e.cacheMissCost,
    count: e.cacheMissCount
  }, {
    key: "long_context",
    cost: e.longCtxCost,
    count: e.longCtxCount
  }, {
    key: "subagent_heavy",
    cost: cost,
    count: count
  }, {
    key: "high_parallel",
    cost: cost_2,
    count: count_2
  }, {
    key: "cron",
    cost: cost_3,
    count: count_3
  }];
  return behaviors.sort((itemA, itemB) => itemB.cost - itemA.cost), {
    totalCost: e.totalCost,
    requestCount: e.requestCount,
    sessionCount: e.sessions.size,
    behaviors: behaviors,
    agents: k(e.byAgent, e.totalCost),
    skills: k(e.bySkill, e.totalCost),
    plugins: k(e.byPlugin, e.totalCost),
    mcpServers: k(e.byMcpServer, e.totalCost),
    loops: [...e.loops.values()].map(item => ({
      ...item,
      tokens: Math.round(item.tokens)
    })).sort((itemA, itemB) => itemB.tokens - itemA.tokens)
  };
}
function k(e, n) {
  if (e.size === 0 || n === 0) return [];
  return [...e.entries()].sort((itemA, itemB) => itemB[1] - itemA[1]).map(([name, s]) => ({
    name: name,
    pct: Math.round(s / n * 100)
  })).filter(item => item.pct > 0);
}
export { tOe, MSt, QKt, DSt, tZr };