// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  z,
  eWt,
  p4e,
  ye,
  Xr
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  J,
  we
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  vt,
  t,
  ds
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  lp,
  vn,
  Ynn,
  nV
} from "B:/~BUN/root/chunk-wd9jb4af.js";
import {
  D_,
  $b
} from "B:/~BUN/root/chunk-sxvr9rzb.js";
import {
  fRe,
  Irn,
  A3,
  kgt
} from "B:/~BUN/root/chunk-v4y99md9.js";
import {
  IH,
  lY
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  WRe,
  Us
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  HMe,
  el
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  tfe
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  J_e
} from "B:/~BUN/root/chunk-64qg3pvz.js";
import {
  P$n
} from "B:/~BUN/root/chunk-rc0vwsyy.js";
import {
  AVr,
  SVt,
  xjo
} from "B:/~BUN/root/chunk-cyhkhvb3.js";
import {
  oyn,
  syn,
  NXn
} from "B:/~BUN/root/chunk-mcgwex2v.js";
import {
  gU
} from "B:/~BUN/root/chunk-cbv74thb.js";
import {
  o,
  I,
  oe,
  xt,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  randomUUID as c
} from "crypto";
var g = 1000,
  S = p(() => xt({
    type: T("user"),
    initiator: o().optional(),
    origin: oe().optional(),
    isSynthetic: I().optional(),
    is_meta: I().optional(),
    seeded_summon: I().optional(),
    shouldQuery: I().optional()
  }));

function y(e) {
  try {
    let r = S().safeParse(ds(e));
    return r.success && HMe(r.data.initiator) === void 0 && !WRe(r.data.origin, r.data.isSynthetic) && !r.data.is_meta && !r.data.seeded_summon && r.data.shouldQuery !== !1
  } catch {
    return !1
  }
}
async function w(e, r) {
  let a = (async () => {
    let s = "";
    for (;;) {
      let {
        done: d,
        value: n
      } = await e.next();
      if (d) return !1;
      if (s += n, !n.includes(`
`)) continue;
      let l = s.split(`
`);
      if (s = l.pop() ?? "", l.some(y)) return !0
    }
  })().catch(() => !1);
  return await we(a, r) ?? !1
}
async function u(e, r = g) {
  if (Xr()?.hostVerdict === void 0 || !IH() || fRe() || lY() || D_("--input-format") !== "stream-json" || $b("--no-session-persistence") || i.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0 || !await w(AVr() ?? SVt(), r)) return !1;
  let a = Irn(z()),
    s = `Claude Code didn't start. ${e.replace(/\s+/g," ").replace(/(?:[a-z][a-z\d+.-]*:\/\/|www\.|[\w.+-]+@)[^\s<`]*[^\s<`.,;:)]|[\\`*_[\]<]/gi,(l)=>l.length>1?`\`${l}\``: l === "<" ? "&lt;" : `\\${l}`)
}
`,{errors:d,...n}=gU(a,[]);return kgt([{type:"assistant",message:el({content:s}).message,parent_tool_use_id:null,session_id:a,uuid:c()},{...n,subtype:"success",is_error:!1,result:s,terminal_reason:"turn_setup_failed"}])}var f=2000;async function qYe(e){try{if(xjo(e),syn()||NXn())await m()}catch{t("[3P telemetry] managed-settings refusal send failed",{level:"error"})}}async function YUe(e){if(e.policyUnreadable)await qYe("policy_invalid");else if(e.reason==="provider_not_allowed")await qYe("provider_not_allowed")}function bVt(e){if(xjo(e),p4e()===null&&(syn()||NXn()))vt(m)}async function m(){try{if(p4e()===null){if(!Us()&&!ye())return;tfe(),await Promise.race([oyn(),J(f)])}let e=eWt();if(e)await Promise.race([J_e.settledWithin(f/2).then(()=>e.forceFlush()),J(f)])}catch{t("[3P telemetry] managed-settings refusal export failed",{level:"error"})}}async function Cjo({message:e,reason:r,errorType:a,print:s,beforeExit:d}){if(s===void 0)lp(e);else await s(e);if(a!==void 0)await qYe(a);let n=await u(e);if(!n)await A3({sessionId:z(),message:e,reason:r});return await d?.(),await P$n(),await nV(),n?Ynn(0):vn(void 0,s===void 0?"cli_error":"exit_with_message")}
export{qYe,YUe,bVt,Cjo};
 
