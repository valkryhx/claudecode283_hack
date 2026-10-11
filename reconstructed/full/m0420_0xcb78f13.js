// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  i_
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  Ne
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  mh,
  U1t,
  B1t,
  LVr
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  Oa
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  J,
  mf,
  u2r,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  kAe,
  OD,
  Tmn,
  Cmn,
  X5e
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  tLe
} from "B:/~BUN/root/chunk-mmtwp5d6.js";
import {
  wHt,
  t$,
  Fut,
  sFt,
  IRe
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  Ru
} from "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  Ss
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  nH
} from "B:/~BUN/root/chunk-g2vddtj4.js";
import {
  jv,
  jne
} from "B:/~BUN/root/chunk-2ppgegpr.js";
import {
  Cfn
} from "B:/~BUN/root/chunk-ceg1zct0.js";
import {
  vD
} from "B:/~BUN/root/chunk-3hn9fzjy.js";
import {
  Fct,
  kcn,
  $ct,
  CMr
} from "B:/~BUN/root/chunk-ew8y0fm0.js";
import {
  vcn
} from "B:/~BUN/root/chunk-8qv35yd7.js";
import {
  X4r
} from "B:/~BUN/root/chunk-hej04jhr.js";
import {
  dq
} from "B:/~BUN/root/chunk-995m8a2a.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  createServer as g
} from "net";

function Zjt(r, e, n) {
  return new Promise((c, E) => {
    let l = (o) => {
        s.close(), E(o)
      },
      s = g((o) => {
        let p = "";
        o.setEncoding("utf8"), o.on("data", (f) => {
          if (p += f, n && p.length > 8388608) {
            o.destroy();
            return
          }
          let v = p.indexOf(`
`);
          if (v < 0) return;
          if (n) {
            let m;
            try {
              m = J(p.slice(0, v))
            } catch {
              m = void 0
            }
            if (!m || !vD(m.auth, n)) {
              o.destroy();
              return
            }
            s.close(), c(m);
            return
          }
          s.close();
          try {
            c(J(p.slice(0, v)))
          } catch (m) {
            E(m)
          }
        }), o.on("error", n ? () => o.destroy() : l)
      });
    if (s.on("error", l), e) s.once("listening", () => {
      try {
        e()
      } catch (o) {
        l(o)
      }
    });
    s.listen(r)
  })
}
async function eWt(r, e) {
  let n = await Ru(r.cwd, void 0);
  mf(n);
  let c = {
    originalCwd: n,
    projectRoot: n,
    cwd: n
  };
  if (r.sessionId) mh(i_(r.sessionId), "spare_claim", null, c);
  else U1t(c);
  if (Ss(), IRe(), sFt(), B1t(), vcn(), nH({
      warm_spare_claimed: 1
    }), Ne(r.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let o of Object.keys(process.env))
      if (Tmn(o) || o === "ANTHROPIC_CUSTOM_HEADERS" || Cmn(o) || X5e(o)) delete process.env[o]
  }
  delete process.env.ANTHROPIC_AUTH_TOKEN, delete process.env.ANTHROPIC_API_KEY, delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
  let {
    kept: E,
    dropped: l
  } = kcn(r.env);
  if (Object.assign(process.env, E), process.argv = [process.argv[0], process.argv[1], ...r.argv], u2r(), l.length > 0) _(l);
  await X4r(r.argv), LVr(), wHt(), Cfn(), dq(), Fut({
    preservePendingExposures: !0,
    preserveLoggedExposures: !0
  }), t$(), CMr(Object.keys(r.env)), jne(), jv();
  let {
    main: s
  } = await e;
  await s()
}
var d = 8;

function _(r) {
  if (r.slice(0, d).forEach(({
      name: e,
      problem: n
    }) => {
      t(`[bg-spare] environment variable ${$ct(e)} was not applied to this background session: ${Fct[n]}. Programs it starts will not see it.`, {
        level: "warn"
      })
    }), r.length > d) {
    let e = r.length - d;
    t(`[bg-spare] \u2026and ${e} more environment ${I(e,"variable was","variables were")} not applied.`, {
      level: "warn"
    })
  }
  i("tengu_bg_claim_env_dropped", {
    dropped: r.length,
    nul_in_value: U(r, (e) => e.problem === "nul-in-value"),
    invalid_name: U(r, (e) => e.problem === "invalid-name"),
    non_string_value: U(r, (e) => e.problem === "non-string-value"),
    name_classes: Oa(L(r.map((e) => C(e.name))))
  })
}

function C(r) {
  return r === "PATH" ? "path" : r.startsWith("CLAUDE_BG_") || r === "CLAUDE_JOB_DIR" || r === "CLAUDE_CODE_SESSION_KIND" || r === "CLAUDE_CODE_SESSION_NAME" ? "bg_worker" : OD.includes(r) ? "credential" : kAe.includes(r) ? "gateway" : tLe.has(r) ? "provider" : Object.keys(a).includes(r) ? "declared" : "other"
}
export {
  Zjt,
  eWt
};
