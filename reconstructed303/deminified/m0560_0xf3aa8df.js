// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { YS } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { F, L, kb, agn, lgn, E2o } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { fl } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { J, vg, YWo, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { mze, FB, tpn, npn, l$r, qQe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { kde, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _3e } from "B:/~BUN/root/chunk-ks90p42g.js";
import { Xln, o2, Y$t, Pdn, YDo, OWe } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { $_ } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { lm } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { dr } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { VHr, sqs } from "B:/~BUN/root/chunk-k8003a0x.js";
import { QEe, e0e } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { uL } from "B:/~BUN/root/chunk-9kme2ye7.js";
import { bfn, wb, nQ } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { cfn } from "B:/~BUN/root/chunk-pej55jax.js";
import { BD } from "B:/~BUN/root/chunk-m3q01n4y.js";
import { O3, sje, PFt, cKn, zmt, yPo, ug, vPo, jIr, WIr } from "B:/~BUN/root/chunk-429xgjya.js";
import { kr, dKn } from "B:/~BUN/root/chunk-t3p4x0tq.js";
import { UJo } from "B:/~BUN/root/chunk-yykypqkb.js";
import { createServer as h } from "net";
function Ihn(e, r, m) {
  return new Promise((d, p) => {
    let E = o => {
        n.close(), p(o);
      },
      n = h(o => {
        let c = "";
        o.setEncoding("utf8"), o.on("data", _ => {
          if (c += _, m && c.length > 8388608) {
            o.destroy();
            return;
          }
          let f = c.indexOf(`
`);
          if (f < 0) return;
          if (m) {
            let s;
            try {
              s = J(c.slice(0, f));
            } catch {
              s = void 0;
            }
            if (!s || !BD(s.auth, m)) {
              o.destroy();
              return;
            }
            n.close(), d(s);
            return;
          }
          n.close();
          try {
            d(J(c.slice(0, f)));
          } catch (error) {
            p(error);
          }
        }), o.on("error", m ? () => o.destroy() : E);
      });
    if (n.on("error", E), r) n.once("listening", () => {
      try {
        r();
      } catch (error) {
        E(error);
      }
    });
    n.listen(e);
  });
}
async function Mhn(e, r, m) {
  let d = performance.now(),
    p = await $_(e.cwd, void 0);
  vg(p);
  let E = {
    originalCwd: p,
    projectRoot: p,
    cwd: p
  };
  if (e.sessionId) kb(YS(e.sessionId), "spare_claim", null, E);else agn(E);
  dr(), OWe(), Pdn(), lgn(), dKn(), uL({
    warm_spare_claimed: 1
  });
  let n = Fe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
  if (n) {
    for (let l of Object.keys(process.env)) if ((tpn(l) || l === "ANTHROPIC_CUSTOM_HEADERS" || npn(l) || qQe(l)) && !l$r(l)) delete process.env[l];
  }
  if (sje(e.env)) yPo();
  delete process.env.ANTHROPIC_AUTH_TOKEN, delete process.env.ANTHROPIC_API_KEY, delete process.env.CLAUDE_CODE_OAUTH_TOKEN, a.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS");
  let {
      kept: kept,
      dropped: dropped
    } = cKn(e.env),
    _ = n && WIr(jIr(ug() ?? {}, Object.keys(kept), kept), l$r);
  if (Object.assign(process.env, kept), sqs(), VHr()) {
    let {
      mdm: mdm,
      hkcu: hkcu,
      wslInherits: wslInherits,
      whereAsked: whereAsked
    } = await e0e();
    QEe(mdm, hkcu, wslInherits, whereAsked);
  }
  if (process.argv = [process.argv[0], process.argv[1], ...e.argv], dr(), YWo(), dropped.length > 0) S(dropped);
  m?.(), YDo(), lm.reset();
  let f = performance.now();
  if (await UJo(e.argv), kr("spare_claim_token_file_wait_ms", performance.now() - f, f), E2o(), Xln(), cfn(), O3(), Y$t({
    preservePendingExposures: !0,
    preserveLoggedExposures: !0
  }), o2(), vPo(Object.keys(kept), kept) || _) bfn();
  nQ(), wb();
  let {
    main: main
  } = await r;
  kr("spare_claim_apply_ms", performance.now() - d, d), await main();
}
var C = 8;
function S(e) {
  if (e.slice(0, C).forEach(({
    name: name,
    problem: problem
  }) => {
    t(`[bg-spare] environment variable ${zmt(name)} was not applied to this background session: ${PFt[problem]}. Programs it starts will not see it.`, {
      level: "warn"
    });
  }), e.length > C) {
    let r = e.length - C;
    t(`[bg-spare] \u2026and ${r} more environment ${O(r, "variable was", "variables were")} not applied.`, {
      level: "warn"
    });
  }
  i("tengu_bg_claim_env_dropped", {
    dropped: e.length,
    nul_in_value: F(e, r => r.problem === "nul-in-value"),
    invalid_name: F(e, r => r.problem === "invalid-name"),
    non_string_value: F(e, r => r.problem === "non-string-value"),
    name_classes: fl(L(e.map(item => w(item.name))))
  });
}
function w(e) {
  return e === "PATH" ? "path" : e.startsWith("CLAUDE_BG_") || e === "CLAUDE_JOB_DIR" || e === "CLAUDE_CODE_SESSION_KIND" || e === "CLAUDE_CODE_SESSION_NAME" ? "bg_worker" : FB.includes(e) ? "credential" : mze.includes(e) ? "gateway" : _3e.has(e) ? "provider" : kde(a).includes(e) ? "declared" : "other";
}
export { Ihn, Mhn };