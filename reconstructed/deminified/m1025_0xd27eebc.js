// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { TEe, QLe, lOt, cOt, pon, dOt, fko, qon, Kon, Yon } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { uj, Kt } from "B:/~BUN/root/chunk-9fcn5kmc.js";
import { $H } from "B:/~BUN/root/chunk-r6beatp9.js";
var status = 422,
  f = {
    kind: "failed",
    status: status
  };
function W7e({
  client: client,
  direct: s,
  inboundMaxBytes: u = $H,
  stallMs: stallMs,
  restartPauseMs: restartPauseMs
}) {
  let c = {
      put: (e, n, ifMatchSha256, signal) => client.putLaneRow(e, n, {
        ifMatchSha256: ifMatchSha256,
        signal: signal,
        oneTryIfLong: !0
      }),
      get: (e, n, r) => client.getLaneFile(e, n, r)
    },
    memo = qon(),
    l = (rel, content, ifMatchEtag, createOnly, signal_2) => Kon({
      client: s,
      rel: rel,
      content: content,
      ifMatchEtag: ifMatchEtag,
      createOnly: createOnly,
      signal: signal_2,
      side: "laptop",
      memo: memo,
      ...(stallMs !== void 0 && {
        stallMs: stallMs
      }),
      ...(restartPauseMs !== void 0 && {
        restartPauseMs: restartPauseMs
      })
    }),
    m = async (rel_2, object, signal_3) => {
      let i = await Yon({
        client: s,
        rel: rel_2,
        object: object,
        maxBytes: u,
        signal: signal_3,
        ...(stallMs !== void 0 && {
          stallMs: stallMs
        })
      });
      return i.kind === "impossible" ? f : i.kind === "unsupported" || i.kind === "failed" && i.status === status ? {
        kind: "failed"
      } : i;
    };
  return {
    putOutbound: (e, {
      ifMatchEtag: ifMatchEtag_2,
      signal: signal_4
    }) => l(lOt, e, ifMatchEtag_2, !1, signal_4),
    putLink: ({
      generation: generation,
      worktreeCommit: worktreeCommit
    }, r, {
      signal: signal_5
    }) => l(pon(generation, worktreeCommit), r, null, !0, signal_5),
    async getInbound(e, n) {
      switch (e.via) {
        case "direct":
          return m(cOt, e, n);
        case "row":
          return L(c, cOt, e, n);
        case "file":
        case "unknown":
          return t("dir-sync: refused a container object named by a carrier this side cannot read"), f;
      }
    },
    getLink({
      generation: generation_2,
      worktreeCommit: worktreeCommit_2
    }, r, i) {
      if (r.via !== "direct") return t("dir-sync: refused a container link named by a carrier this side cannot read"), Promise.resolve(f);
      return m(dOt(generation_2, worktreeCommit_2), r, i);
    },
    publishJournal: (e, {
      ifMatchEtag: ifMatchEtag_3,
      createOnly: createOnly_2,
      signal: signal_6
    }) => createOnly_2 === !0 && ifMatchEtag_3 === null ? c.put(TEe, e, void 0, signal_6) : g(c, TEe, e, ifMatchEtag_3, signal_6),
    readPeerJournal: e => c.get(QLe, e),
    readOwnJournal: e => c.get(TEe, e)
  };
}
async function g(a, s, u, d, o) {
  if (d !== null) return a.put(s, u, d, o);
  let c = await a.put(s, u, void 0, o);
  if (c.kind !== "conflict") return c;
  let p = await a.get(s, o, u.length);
  if (p.kind === "ok") return a.put(s, u, p.etag, o);
  return p.kind === "not_found" ? {
    kind: "failed"
  } : p;
}
async function L(a, s, u, d) {
  if (!uj.test(u.sha256) || !Number.isSafeInteger(u.size) || u.size < 0 || u.size > fko) return f;
  let o = await a.get(s, d, u.size);
  if (o.kind !== "ok") return o.kind === "failed" && o.status === status ? {
    kind: "failed"
  } : o;
  return o.content.length === u.size && Kt(o.content) === u.sha256 ? o : {
    kind: "not_found"
  };
}
export { status as bT, W7e };