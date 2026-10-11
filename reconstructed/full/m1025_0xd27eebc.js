// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  TEe,
  QLe,
  lOt,
  cOt,
  pon,
  dOt,
  fko,
  qon,
  Kon,
  Yon
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  uj,
  Kt
} from "B:/~BUN/root/chunk-9fcn5kmc.js";
import {
  $H
} from "B:/~BUN/root/chunk-r6beatp9.js";
var bT = 422,
  f = {
    kind: "failed",
    status: bT
  };

function W7e({
  client: a,
  direct: s,
  inboundMaxBytes: u = $H,
  stallMs: d,
  restartPauseMs: o
}) {
  let c = {
      put: (e, n, r, i) => a.putLaneRow(e, n, {
        ifMatchSha256: r,
        signal: i,
        oneTryIfLong: !0
      }),
      get: (e, n, r) => a.getLaneFile(e, n, r)
    },
    p = qon(),
    l = (e, n, r, i, O) => Kon({
      client: s,
      rel: e,
      content: n,
      ifMatchEtag: r,
      createOnly: i,
      signal: O,
      side: "laptop",
      memo: p,
      ...d !== void 0 && {
        stallMs: d
      },
      ...o !== void 0 && {
        restartPauseMs: o
      }
    }),
    m = async (e, n, r) => {
      let i = await Yon({
        client: s,
        rel: e,
        object: n,
        maxBytes: u,
        signal: r,
        ...d !== void 0 && {
          stallMs: d
        }
      });
      return i.kind === "impossible" ? f : i.kind === "unsupported" || i.kind === "failed" && i.status === bT ? {
        kind: "failed"
      } : i
    };
  return {
    putOutbound: (e, {
      ifMatchEtag: n,
      signal: r
    }) => l(lOt, e, n, !1, r),
    putLink: ({
      generation: e,
      worktreeCommit: n
    }, r, {
      signal: i
    }) => l(pon(e, n), r, null, !0, i),
    async getInbound(e, n) {
      switch (e.via) {
        case "direct":
          return m(cOt, e, n);
        case "row":
          return L(c, cOt, e, n);
        case "file":
        case "unknown":
          return t("dir-sync: refused a container object named by a carrier this side cannot read"), f
      }
    },
    getLink({
      generation: e,
      worktreeCommit: n
    }, r, i) {
      if (r.via !== "direct") return t("dir-sync: refused a container link named by a carrier this side cannot read"), Promise.resolve(f);
      return m(dOt(e, n), r, i)
    },
    publishJournal: (e, {
      ifMatchEtag: n,
      createOnly: r,
      signal: i
    }) => r === !0 && n === null ? c.put(TEe, e, void 0, i) : g(c, TEe, e, n, i),
    readPeerJournal: (e) => c.get(QLe, e),
    readOwnJournal: (e) => c.get(TEe, e)
  }
}
async function g(a, s, u, d, o) {
  if (d !== null) return a.put(s, u, d, o);
  let c = await a.put(s, u, void 0, o);
  if (c.kind !== "conflict") return c;
  let p = await a.get(s, o, u.length);
  if (p.kind === "ok") return a.put(s, u, p.etag, o);
  return p.kind === "not_found" ? {
    kind: "failed"
  } : p
}
async function L(a, s, u, d) {
  if (!uj.test(u.sha256) || !Number.isSafeInteger(u.size) || u.size < 0 || u.size > fko) return f;
  let o = await a.get(s, d, u.size);
  if (o.kind !== "ok") return o.kind === "failed" && o.status === bT ? {
    kind: "failed"
  } : o;
  return o.content.length === u.size && Kt(o.content) === u.sha256 ? o : {
    kind: "not_found"
  }
}
export {
  bT,
  W7e
};
