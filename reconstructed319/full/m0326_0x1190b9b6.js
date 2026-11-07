// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  JA,
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Ao
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  nn
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  mFs
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import {
  Ds,
  Yp,
  Ibt,
  Ctt,
  ZHs,
  e$s,
  t$s
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Z_t,
  zv
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Iwo,
  Mwo,
  Con,
  BZe,
  md,
  La,
  kE,
  HRe,
  Rt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  Rb
} from "B:/~BUN/root/chunk-1zzrbtzr.js";

function pue(e, r = !1, d = !1) {
  let l = !0;
  try {
    if (q()) return !1;
    let {
      machine: h,
      slot: c
    } = Mwo(), s = Ctt(h);
    l = s !== null;
    let R = s === null && (zv() === "helper" && !Z_t() || e$s() && (e !== void 0 || Ctt(c ?? null) === null)),
      u = s ?? (R ? null : ZHs());
    if (l = u !== null, u === null) return !1;
    let m = u.env ?? {},
      g = mFs((A) => A === "ANTHROPIC_BASE_URL" ? void 0 : Ds(m, A)),
      o = e ?? i.ANTHROPIC_BASE_URL,
      t = o && !Con(o) ? o : S(c?.env ?? {}, d) || (g ? void 0 : S(m, d) || o);
    if (t ? Con(t) : !g) return !1;
    let p = nn(),
      f = URL.parse(p.BASE_API_URL)?.origin;
    if (p.OAUTH_FILE_SUFFIX !== "-local-oauth" && f && f !== "null" && t && t === o && URL.parse(t)?.origin === f) return !1;
    let {
      source: n
    } = La(), E = n === "CLAUDE_CODE_OAUTH_TOKEN" && kE() !== "env";
    if (!r && !E && !JA() && !HRe() && n !== "claude.ai" && n !== "apiKeyHelper" && n !== "none" || BZe() || md()) return !1;
    return Rb(), Ibt() === null
  } catch {
    return a(Error("Stored login check failed")), l
  }
}

function uCe() {
  try {
    return Ctt(Mwo().machine) === null ? t$s() ?? "admin" : "admin"
  } catch {
    return a(Error("Stored login refusal reason failed")), "admin"
  }
}
async function L(e) {
  try {
    await Ao(Iwo(), e, () => Error("Stored login settle aborted"))
  } catch (r) {
    if (!e.aborted) throw r
  }
}
async function U2(e) {
  try {
    let r = e?.url ?? (e?.isFilesDial ? nn().BASE_API_URL : void 0);
    if (pue(r, !0, e?.isFilesDial ?? !1) && !Yp() && (e !== void 0 || Rt())) await (e?.signal ? L(e.signal) : Iwo())
  } catch {
    a(Error("Stored login settle failed"))
  }
}

function S(e, r) {
  return Ds(e, "ANTHROPIC_BASE_URL")?.trim() || (r ? Ds(e, "CLAUDE_CODE_API_BASE_URL")?.trim() : void 0)
}
export {
  pue,
  uCe,
  U2
};
