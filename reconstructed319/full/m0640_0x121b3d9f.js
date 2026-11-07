// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  hKn,
  QGs,
  t2s,
  n2s,
  Pc,
  DC,
  r2s,
  GOo,
  Vxe,
  QOo
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k,
  K,
  WH
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Sl
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  Pme
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  t,
  _,
  io,
  bme,
  GA,
  QPo,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Xf,
  vT
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  vn
} from "B:/~BUN/root/chunk-wd9jb4af.js";
import {
  D_,
  $b
} from "B:/~BUN/root/chunk-sxvr9rzb.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  Uo
} from "B:/~BUN/root/chunk-4vxp7kvb.js";
import {
  qr
} from "B:/~BUN/root/chunk-vmp6vbba.js";
import {
  BHe
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  ir,
  fzn,
  hf
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  YRr
} from "B:/~BUN/root/chunk-zvnj63j8.js";
import {
  TVi
} from "B:/~BUN/root/chunk-069hk35q.js";
import {
  D
} from "B:/~BUN/root/chunk-8mqsat26.js";
import {
  WO
} from "B:/~BUN/root/chunk-ww0cdpg4.js";
import {
  lme,
  PH
} from "B:/~BUN/root/chunk-x3gsqe09.js";

function qRr(e) {
  return _(e).replace(/[\u007f-\u009f]/g, (r) => "\\u" + r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0"))
}

function Dca(e) {
  try {
    let r = e.trim(),
      i = r.startsWith("{") && r.endsWith("}"),
      a;
    if (i) {
      let o = et(r);
      if (!o) return vn("Error: Invalid JSON provided to --settings");
      let s = qRr(o);
      a = BHe("claude-settings", ".json", {
        contentHash: s
      }), t2s(s)
    } else {
      let o = e,
        s = e,
        f;
      try {
        if (vT(e)) o = io(ie(), e).resolvedPath, s = o;
        else {
          let n = GA(ie(), e);
          o = n.resolvedPath, s = l(n.linksResolvedPath ?? n.resolvedPath)
        }
        f = PH(o, Xf)
      } catch (n) {
        if (QPo(n)) return vn(`Error: Cannot use settings file ${e}: ${d(n)}`);
        if (K(n)) return vn(`Error: Settings file not found: ${o}`);
        if (k(n) === "ERR_FILE_TOO_LARGE") return vn(`Error: Settings file exceeds the ${Xf/1048576}MiB limit: ${o}`);
        if (lme(n) || WH(n)) return vn(`Error: Cannot use settings file (${d(n)}): ${o}`);
        throw n
      }
      a = s, n2s(f)
    }
    QGs(a), ir()
  } catch (r) {
    if (r instanceof Error) t(`Error processing --settings: ${d(r)}`, {
      level: "error"
    });
    return vn(`Error processing settings: ${d(r)}`)
  }
}

function Lca(e) {
  let r = et(e.trim(), !1);
  if (!D(r)) {
    t("--managed-settings ignored: invalid JSON object", {
      level: "warn"
    }), GOo(!0);
    return
  }
  let {
    tier: i,
    organization: a,
    memberLost: o
  } = TVi(r);
  if (o) GOo(!0);
  r2s(i, a), ir()
}

function g(e) {
  try {
    let r = fzn(e);
    QOo(r), ir()
  } catch (r) {
    if (r instanceof Error) t(`Invalid --setting-sources flag: ${d(r)}`, {
      level: "error"
    });
    return vn(`Error processing --setting-sources: ${d(r)}`)
  }
}

function VTs() {
  let e = performance.now();
  Uo("eagerLoadSettings_start");
  let r = D_("--settings");
  if (r) Dca(r);
  let i = D_("--managed-settings");
  if (i) Lca(i);
  Xyo(), c(), Uo("eagerLoadSettings_end"), qr("settings_load_ms", performance.now() - e, e)
}

function c() {
  let e = D_("--fast-mode");
  if (e !== "on" && e !== "off") return;
  DC({
    ...Pc() ?? {},
    fastMode: e === "on"
  }), ir()
}

function Xyo() {
  let e = D_("--setting-sources");
  if (e !== void 0) g(e);
  if ($b("--restricted") || Pme()) g(""), hKn(!0);
  if (WO()) g("");
  if (YRr()) QOo(Vxe().filter((r) => !hf.has(r))), ir()
}

function l(e) {
  if (Sl(e)) return e;
  try {
    let r = bme(ie(), e);
    return r.toLowerCase() === e.toLowerCase() ? r : e
  } catch {
    return e
  }
}
export {
  qRr,
  Dca,
  Lca,
  VTs,
  Xyo
};
