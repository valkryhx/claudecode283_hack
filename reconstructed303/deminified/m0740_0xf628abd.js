// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { J } from "B:/~BUN/root/chunk-6za2ez23.js";
import { KRt, H5t, $5t, U5t } from "B:/~BUN/root/chunk-8tjgv4bf.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { ur, PA } from "B:/~BUN/root/chunk-fsp20me0.js";
import { ct } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { xK } from "B:/~BUN/root/chunk-b4xxgr0r.js";
var p = /^\d{1,10}$/,
  w = /^\/([A-Za-z0-9-]{1,39})\/([A-Za-z0-9._-]{1,100})\/pull\/(\d{1,10})$/;
function d(n) {
  let e;
  try {
    e = new URL(n);
  } catch {
    return null;
  }
  if (e.protocol !== "https:" || PA(e.hostname) !== ur || e.username !== "" || e.password !== "" || e.port !== "" || e.search !== "" || e.hash !== "") return null;
  let o = w.exec(e.pathname);
  if (o === null) return null;
  return {
    owner: o[1],
    repo: o[2],
    number: Number(o[3])
  };
}
var f = 8,
  m = [],
  _ts = xK("prReviewTargets", m);
function bts(n, rawTarget) {
  let cwd = ce(),
    sessionId = String(K()),
    s = {
      sessionId: sessionId,
      rawTarget: rawTarget,
      cwd: cwd,
      pinned: h(g(rawTarget), cwd)
    };
  n.set(i => {
    let u = i.filter(item => !(item.sessionId === sessionId && item.rawTarget === rawTarget && item.cwd === cwd));
    return [s, ...u].slice(0, f);
  });
}
function g(n) {
  if (n === "") return [];
  if (p.test(n) || d(n) !== null) return [n];
  return null;
}
async function h(n, cwd_2) {
  if (n === null) return null;
  let {
    code: code,
    stdout: stdout
  } = await ct("gh", ["pr", "view", ...n, "--json", "number,url,headRefOid"], {
    cwd: cwd_2
  });
  if (code !== 0) return null;
  let s;
  try {
    s = J(stdout);
  } catch {
    return null;
  }
  if (typeof s !== "object" || s === null) return null;
  let {
    number: number,
    url: url,
    headRefOid: headRefOid
  } = s;
  if (typeof url !== "string" || typeof headRefOid !== "string") return null;
  let r = d(url),
    headSha = headRefOid.toLowerCase();
  if (r === null || !Number.isSafeInteger(number) || number < 1 || !U5t.test(headSha)) return null;
  if (r.number !== number || !H5t.test(r.owner) || !$5t.test(r.repo)) return null;
  return {
    owner: r.owner,
    repo: r.repo,
    number: number,
    headSha: headSha
  };
}
async function Sts(n, e, o = {}) {
  let a = n.get();
  if (!a.some(item => item.sessionId === String(K()))) return {
    ok: !1,
    reason: "no artifact-pr-review invocation is recorded in this session \u2014 composed review pages publish only from the skill flow (run /artifact-pr-review)"
  };
  let s = String(K()),
    i = [];
  for (let t of a) {
    if (t.sessionId !== s) continue;
    let r = await t.pinned;
    if (r === null) continue;
    if (r.owner !== e.owner || r.repo !== e.repo || r.number !== e.number) {
      i.push(r);
      continue;
    }
    let headSha_2 = e.reviewed_head_sha.toLowerCase();
    if (o.acceptReviewedShaAsAnchor === !0) return {
      ok: !0,
      identity: {
        ...r,
        headSha: headSha_2
      }
    };
    let c = await h([KRt(r.owner, r.repo, r.number)], t.cwd);
    if (c === null) return {
      ok: !1,
      reason: `the recorded review target ${r.owner}/${r.repo}#${r.number} could not be re-resolved through gh at publish time \u2014 check gh auth and retry`
    };
    if (c.headSha !== headSha_2) return {
      ok: !1,
      reason: `the PR moved since the review: the payload reviewed ${e.reviewed_head_sha.slice(0, 12)}\u2026 but ` + `${r.owner}/${r.repo}#${r.number} is now at ${c.headSha.slice(0, 12)}\u2026 \u2014 re-gather the PR (step 1) and re-author the payload against the current head`
    };
    return {
      ok: !0,
      identity: {
        ...r,
        headSha: c.headSha
      }
    };
  }
  let u = i.map(item => `${item.owner}/${item.repo}#${item.number}`).join(", ");
  return {
    ok: !1,
    reason: `the payload names ${e.owner}/${e.repo}#${e.number}, ` + (u === "" ? "but no recorded review target resolved when the review was invoked \u2014 the target is fixed at invocation, so fixing anything now cannot revive this run. Check gh auth if resolution keeps failing, then re-run /artifact-pr-review to publish a fresh review." : `but this session's review invocation resolves to ${u} \u2014 the page's identity comes from the invocation, not the payload`)
  };
}
function wts() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
}
export { _ts, bts, Sts, wts };