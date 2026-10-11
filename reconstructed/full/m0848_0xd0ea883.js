// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  _n
} from "B:/~BUN/root/chunk-msy8grqx.js";
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  yn,
  Jf,
  Bt,
  En,
  Ov,
  pc
} from "B:/~BUN/root/chunk-yehxgs7w.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  ft,
  hl,
  qp
} from "B:/~BUN/root/chunk-faawr4jv.js";
import {
  Bd,
  nh,
  e1
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  BMt
} from "B:/~BUN/root/chunk-7d9qjs8x.js";
import {
  Jh
} from "B:/~BUN/root/chunk-xanxfwr0.js";
import {
  Yu
} from "B:/~BUN/root/chunk-at7axhcd.js";
import {
  aR,
  P4
} from "B:/~BUN/root/chunk-7z8vew74.js";
import {
  _Tt
} from "B:/~BUN/root/chunk-0mrty9z0.js";
import {
  CIn,
  lw,
  hse,
  $2e,
  A7,
  NIn,
  ffr,
  U2e
} from "B:/~BUN/root/chunk-pv8vnm5m.js";
import {
  G5,
  yG
} from "B:/~BUN/root/chunk-sjxdbr0h.js";
import {
  n8
} from "B:/~BUN/root/chunk-rv74wwkr.js";
import {
  gWe,
  JQr,
  WIe
} from "B:/~BUN/root/chunk-fc2t0k3d.js";
import {
  Ku
} from "B:/~BUN/root/chunk-tyqwkyrh.js";
import {
  Ao
} from "B:/~BUN/root/chunk-9sajt7dp.js";

function O(n, e) {
  return b(Ov(n, e))
}
var H = 3000;

function qEn(n, e) {
  let i = n.mcpInfo?.effectiveMaxPermission;
  if (i !== void 0 && i !== "allow") return "permission_ceiling";
  if (n.requiresUserInteraction?.()) return "requires_interaction";
  return [...Bd(e), ...nh(e)].some((r) => e1(e, n, r)) ? "rule" : void 0
}
var j = /^The user just created a new, empty (?:[^\n<]{1,80}? )?artifact at (https?:\/\/\S+) and has it open beside this conversation/,
  R = /artifact at (https?:\/\/\S+) and has it open beside this conversation/g,
  U = /<system-reminder>([\s\S]*?)<\/system-reminder>/g;

function KEn(n, e) {
  let i = [];
  for (let r of n) {
    if (r.type === "assistant") break;
    if (r.type !== "user") continue;
    if (r.origin !== void 0 && r.origin.kind !== "human" || r.verifiedSlackHumanTurn === !0 || r.projectsUserTurn === !0 || r.isMeta === !0) continue;
    let {
      content: s
    } = r.message, a = typeof s === "string" ? [s] : s.flatMap((o) => o.type === "text" ? [o.text] : []);
    for (let o of a) i.push(...uKt(o, e))
  }
  return i
}
var F = "The user just created a new, empty ";

function B(n) {
  let e = new RegExp(R),
    i = n.indexOf(F);
  while (i !== -1) {
    let r = i + F.length;
    e.lastIndex = r;
    let s = e.exec(n);
    if (n.slice(r, s?.index).includes("<")) return !0;
    i = s === null ? -1 : n.indexOf(F, s.index + s[0].length)
  }
  return new Set([...n.matchAll(R)].map((r) => r[1])).size > 1
}

function uKt(n, e) {
  if (!e(n) || B(n)) return [];
  return [...n.matchAll(U)].map((i) => (i[1] ?? "").trim()).filter((i) => i !== "")
}

function YEn(n) {
  if (new Set(n.flatMap((r) => [...r.matchAll(R)].map((s) => s[1]))).size > 1) return null;
  let i;
  for (let r of n) {
    let s = j.exec(r)?.[1],
      a = s === void 0 ? null : Bt(s);
    if (s === void 0 || a === null) continue;
    if (i !== void 0 && i.slug !== a.slug) return null;
    i ??= {
      slug: a.slug,
      env: a.env,
      url: s
    }
  }
  return i === void 0 ? null : {
    blankArtifact: i
  }
}
var W = "The artifact named in this session's opening context carries an instructions file; it is below, read ahead for you. The artifact's own content was not read: read it as the opening context asks; that read's result will repeat these instructions.";

function XEn(n, e) {
  return !qp(e.slug) && G5(n, e, "files", "land")
}

function mor(n, e) {
  return !qp(e) && yG(n, e)
}
var u = "artifact-type/reference/";
async function K(n, e, i, r = {
  warmShareEntry: Ku,
  readTypeInstructions: $2e,
  isArtifactReadEnabled: BMt,
  filesConsented: XEn,
  listArtifactTypes: hse,
  listFrameFiles: n8
}, s) {
  let a = n.blankArtifact,
    o = performance.now(),
    c = Ao(i, {
      timeoutMs: H,
      refTimer: !0
    });
  try {
    if (!r.isArtifactReadEnabled()) return {
      kind: "skipped",
      reason: "artifact_off"
    };
    if (!U2e()) return {
      kind: "skipped",
      reason: "catalog_off"
    };
    let h = me(e),
      y = _n(e.options.tools ?? [], yn),
      w = y === void 0 ? "not_in_pool" : qEn(y, h);
    if (w !== void 0) return {
      kind: "skipped",
      reason: "tool_unavailable",
      detail: w
    };
    let k = a.url;
    for (let d of ["deny", "ask"])
      if (Jh(h, a, k, d) !== null) return {
        kind: "skipped",
        reason: "rule",
        detail: d
      };
    await r.warmShareEntry(a, {
      abortController: {
        signal: c.signal
      },
      credentials: e.credentials
    }, "opening_prefetch");
    let N = me(e);
    for (let d of ["deny", "ask"])
      if (Jh(N, a, k, d) !== null) return {
        kind: "skipped",
        reason: "rule",
        detail: d
      };
    let E = ft(a.slug);
    if (!hl(E)) {
      if (c.signal.aborted && !i.aborted) return {
        kind: "skipped",
        reason: "read_failed",
        detail: "the share probe took longer than the prefetch budget"
      };
      return {
        kind: "skipped",
        reason: "not_owned"
      }
    }
    if (E?.typeLocked !== !0) return {
      kind: "skipped",
      reason: "not_typed"
    };
    let f = await r.readTypeInstructions(a, c.signal, e.credentials);
    if (f.kind !== "read") return {
      kind: "skipped",
      reason: "instructions_unavailable",
      detail: f.kind === "unavailable" ? f.why : "none"
    };
    let D = A7(f);
    try {
      await r.listArtifactTypes({
        firstParty: !0,
        signal: c.signal,
        credentials: e.credentials
      })
    } catch {}
    let g = await q(a, c.signal, e, r),
      C = En(a),
      x = JEn(Yu());
    if (g.why === "listing failed") p("artifact_opening_prefetch", "listing_failed");
    if (!g.listed) t(`[artifactOpeningPrefetch] type files of ${a.slug} not saved: not attempted, the type's reference pages were not listed (the files consent does not stand for this artifact, or its listing failed)`);
    let P = !g.listed ? null : f.clipped ? await (r.readWholeInstructions ?? G)(a, c.signal, e.credentials) : f.text,
      I = P === null ? null : (await WIe({
        type: {
          artifact: a,
          instructions: P,
          pages: g.pages.map((d) => u + d),
          stillConsented: () => r.filesConsented(e, a)
        },
        system: null
      }, e, c.signal, r.readFrameFile)).type,
      A = g.listed && _Tt(e.options.tools ?? []) ? ffr(f.text) : null,
      v = A ?? "",
      m = I === null ? null : {
        ...I,
        urlReadAsked: v !== "",
        skillByRead: !f.clipped
      },
      T = m === null ? null : JQr(m, [v, CIn(f.text), NIn(f.text)].map((d) => d.trim()).filter((d) => d !== "").map((d) => `

${d}`).join(""));
    if (m !== null && T === null) t(`[artifactOpeningPrefetch] type files of ${a.slug} saved but not used: SKILL.md does not fit one Bash output, the text stays inline`);
    if (m !== null && T !== null) return {
      kind: "attached",
      content: T,
      manifest: V(C, x, A === null && s !== void 0 && M(e, s)),
      typeFiles: m,
      durationMs: performance.now() - o
    };
    return {
      kind: "attached",
      content: W + D,
      manifest: X(C, g, x, A === null && s !== void 0 && M(e, s)),
      typeFiles: null,
      durationMs: performance.now() - o
    }
  } catch (h) {
    return {
      kind: "skipped",
      reason: "read_failed",
      detail: c.signal.aborted && !i.aborted ? "the read took longer than the prefetch budget" : l(h)
    }
  } finally {
    c.cleanup()
  }
}
async function G(n, e, i) {
  let r = await aR({
    ...n,
    file: lw
  }, e, i, "artifact_type_instructions_read");
  if (r.err !== null) return t(`[artifactOpeningPrefetch] type files of ${n.slug} not saved: the whole SKILL.md was not read (${P4(r)})`), null;
  return pc(r.html)
}
async function oKo(n, e, i, r, s) {
  let a = YEn([...KEn(e, r.isSystemReminderOnlyText), ...i === null ? [] : uKt(i, r.isSystemReminderOnlyText)]);
  if (a === null) return null;
  let o = await K(a, n, n.abortController.signal, s, r.isDeferredTool);
  if (t(o.kind === "attached" ? `[artifactOpeningPrefetch] attached: ${o.content.length} chars + index ${o.manifest.length} chars in ${Math.round(o.durationMs)}ms` : `[artifactOpeningPrefetch] skipped: ${o.reason}${o.detail===void 0?"":` (${o.detail})`}`), o.kind === "attached") return _("artifact_opening_prefetch", {
    duration_ms: Math.round(o.durationMs)
  }), {
    content: `${o.content}

${o.manifest}`,
    slug: a.blankArtifact.slug,
    typeFiles: o.typeFiles
  };
  if (o.reason === "read_failed" || o.detail === "listing failed") p("artifact_opening_prefetch", o.reason === "read_failed" ? "read_failed" : "listing_failed");
  return null
}
async function q(n, e, i, r) {
  if (!r.filesConsented(i, n)) return {
    listed: !1,
    pages: [],
    why: "no files consent"
  };
  let s;
  try {
    s = await r.listFrameFiles(n, e, i.credentials)
  } catch {
    s = null
  }
  if (s?.kind !== "ok") return {
    listed: !1,
    pages: [],
    why: "listing failed"
  };
  return {
    listed: !0,
    pages: s.files.map((a) => a.path).filter((a) => a.startsWith(u) && a.endsWith(".md")).map((a) => a.slice(u.length)).filter((a) => !a.includes("/")).sort()
  }
}

function JEn(n) {
  return {
    readFile: n ? (e, i) => `Artifact action "read", url "${e}", path ${O(i,S)}` : (e, i) => `Artifact action "read_file", url "${e}", path ${O(i,S)}`,
    listFiles: n ? (e) => `Artifact action "list", url "${e}", scope "files"` : (e) => `Artifact action "list_files", url "${e}"`,
    readArtifact: (e) => `Artifact action "read", url "${e}"`
  }
}
var Y = gWe;

function z(n, e, i) {
  let r = e.slice(0, Y),
    s = r.map((a) => `- ${O(u+a,S)}: ${i.readFile(n,u+a)}`);
  if (e.length > r.length) s.push(`- and ${e.length-r.length} more under ${u} (${i.listFiles(n)} names them)`);
  return [`Reference pages of the type of the artifact at ${n}, on the artifact and not loaded (the names are the type's own files, listed as data):`, ...s, `Issue every file read you need, and the artifact read itself (${i.readArtifact(n)}), in ONE message (parallel tool calls); then Read any file a result says was saved; then write. Use exactly the call shapes given here; no other fields.`].join(`
`)
}

function M(n, e) {
  let i = _n(n.options.tools ?? [], Jf);
  return i !== void 0 && !e(i)
}
var L = "ArtifactData is loaded in this session: read the canvas (ArtifactData list / get on this url) in that same first message rather than searching for the tool first.";

function X(n, e, i, r) {
  let s = z(n, e.pages, i);
  return [`Loaded ahead of this turn for the artifact at ${n}: the instructions file found on it (SKILL.md) \u2014 inlined above; do not read it again.`, ...e.pages.length > 0 ? [s] : [...e.listed ? [] : [`Its type's reference pages are on the artifact under ${u} (${i.listFiles(n)} names them).`], ...s.split(`
`).slice(1)], ...r ? [L] : []].join(`
`)
}

function V(n, e, i) {
  return [`Make that Bash call and the artifact read itself, ${e.readArtifact(n)}, in ONE message (parallel tool calls); then write.`, ...i ? [L] : []].join(`
`)
}
var S = 128;
export {
  qEn,
  KEn,
  uKt,
  YEn,
  XEn,
  mor,
  oKo,
  JEn
};
