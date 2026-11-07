// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  Zv
} from "B:/~BUN/root/chunk-q78ga0zw.js";
import {
  wqn
} from "B:/~BUN/root/chunk-db8vh085.js";
import {
  Nw,
  YVn,
  XVn,
  l2s
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  ka
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  nWs,
  t,
  ee,
  Mh
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  ytt,
  FO,
  mln,
  qzn,
  JRo,
  Sbt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Awe,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  Aut
} from "B:/~BUN/root/chunk-nw79m6g4.js";
import {
  JBn,
  Oz,
  Ysn,
  $1n,
  lMs,
  het
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Xo,
  ir
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Dw
} from "B:/~BUN/root/chunk-t4qpmjt5.js";
import {
  Jl
} from "B:/~BUN/root/chunk-nzh2qzgc.js";
import {
  JCo,
  tQi
} from "B:/~BUN/root/chunk-hwg4hdxm.js";
import {
  BWn,
  lHe,
  kKe
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  tB
} from "B:/~BUN/root/chunk-4vxp7kvb.js";
import {
  tdn,
  C_,
  J4
} from "B:/~BUN/root/chunk-wthaftk0.js";
import {
  FGn
} from "B:/~BUN/root/chunk-c79wfkj4.js";
import {
  OU
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  jLs
} from "B:/~BUN/root/chunk-qfq22jk9.js";
import {
  Dee
} from "B:/~BUN/root/chunk-1zzrbtzr.js";
import {
  Unn,
  QRr,
  qht,
  bQe,
  YTs,
  ap,
  tCs,
  e_o,
  eAr
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  qr,
  XRr
} from "B:/~BUN/root/chunk-vmp6vbba.js";
import {
  pQs
} from "B:/~BUN/root/chunk-aefn28g3.js";
import {
  U,
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  createServer as h
} from "net";

function Mqn(e, r, m) {
  return new Promise((d, p) => {
    let E = (o) => {
        s.close(), p(o)
      },
      s = h((o) => {
        let c = "";
        o.setEncoding("utf8"), o.on("data", (f) => {
          if (c += f, m && c.length > 8388608) {
            o.destroy();
            return
          }
          let _ = c.indexOf(`
`);
          if (_ < 0) return;
          if (m) {
            let a;
            try {
              a = ee(c.slice(0, _))
            } catch {
              a = void 0
            }
            if (!a || !OU(a.auth, m)) {
              o.destroy();
              return
            }
            s.close(), d(a);
            return
          }
          s.close();
          try {
            d(ee(c.slice(0, _)))
          } catch (a) {
            p(a)
          }
        }), o.on("error", m ? () => o.destroy() : E)
      });
    if (s.on("error", E), r) s.once("listening", () => {
      try {
        r()
      } catch (o) {
        E(o)
      }
    });
    s.listen(e)
  })
}
async function Dqn(e, r, m) {
  let d = performance.now(),
    p = await Dw(e.cwd, void 0);
  Mh(p);
  let E = {
    originalCwd: p,
    projectRoot: p,
    cwd: p
  };
  if (e.sessionId) Nw(Zv(e.sessionId), "spare_claim", null, E);
  else YVn(E);
  ir(), het(), $1n(), XVn(), XRr(), tB({
    warm_spare_claimed: 1
  });
  let s = Pe(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
  if (s) {
    for (let n of Object.keys(process.env))
      if ((mln(n) || n === "ANTHROPIC_CUSTOM_HEADERS" || qzn(n) || Sbt(n)) && !JRo(n)) delete process.env[n]
  }
  if (bQe(e.env)) YTs();
  delete process.env.ANTHROPIC_AUTH_TOKEN, delete process.env.ANTHROPIC_API_KEY, delete process.env.CLAUDE_CODE_OAUTH_TOKEN, i.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS"), i.unset("CLAUDE_CODE_SPARE_KEEPS_BOOT_SESSION_ID"), i.unset("CLAUDE_BG_SOCK_ADMIT_SILENT_PEERS");
  let {
    kept: o,
    dropped: c
  } = QRr(e.env), f = s && eAr(e_o(ap() ?? {}, Object.keys(o), o), JRo);
  if (Object.assign(process.env, o), jLs(), tQi(), JCo()) {
    let {
      mdm: n,
      hkcu: v,
      wslInherits: g,
      whereAsked: u,
      readOutcomes: S
    } = await kKe();
    lHe(n, v, g, u), BWn(S)
  }
  if (process.argv = [process.argv[0], process.argv[1], ...e.argv], !e.sessionId && !i.CLAUDE_CODE_SPARE_KEEPS_BOOT_SESSION_ID) {
    let n = wqn();
    if (n) Nw(Zv(n), "spare_claim")
  }
  if (ir(), Xo().forgetFirstReads({
      checkAgain: !0
    }), nWs(), c.length > 0) O(c);
  m?.(), lMs(), Jl.reset();
  let _ = performance.now();
  if (await pQs(e.argv), qr("spare_claim_token_file_wait_ms", performance.now() - _, _), l2s(), JBn(), FGn(), Dee(), Ysn({
      preservePendingExposures: !0,
      preserveLoggedExposures: !0
    }), Oz(), tCs(Object.keys(o), o) || f) tdn();
  J4(), C_();
  let {
    main: a
  } = await r;
  qr("spare_claim_apply_ms", performance.now() - d, d), await a()
}
var C = 8;

function O(e) {
  if (e.slice(0, C).forEach(({
      name: r,
      problem: m
    }) => {
      t(`[bg-spare] environment variable ${qht(r)} was not applied to this background session: ${Unn[m]}. Programs it starts will not see it.`, {
        level: "warn"
      })
    }), e.length > C) {
    let r = e.length - C;
    t(`[bg-spare] \u2026and ${r} more environment ${P(r,"variable was","variables were")} not applied.`, {
      level: "warn"
    })
  }
  l("tengu_bg_claim_env_dropped", {
    dropped: e.length,
    nul_in_value: U(e, (r) => r.problem === "nul-in-value"),
    invalid_name: U(e, (r) => r.problem === "invalid-name"),
    non_string_value: U(e, (r) => r.problem === "non-string-value"),
    name_classes: ka(L(e.map((r) => A(r.name))))
  })
}

function A(e) {
  return e === "PATH" ? "path" : e.startsWith("CLAUDE_BG_") || e === "CLAUDE_JOB_DIR" || e === "CLAUDE_CODE_SESSION_KIND" || e === "CLAUDE_CODE_SESSION_NAME" ? "bg_worker" : FO.includes(e) ? "credential" : ytt.includes(e) ? "gateway" : Aut.has(e) ? "provider" : Awe(i).includes(e) ? "declared" : "other"
}
export {
  Mqn,
  Dqn
};
