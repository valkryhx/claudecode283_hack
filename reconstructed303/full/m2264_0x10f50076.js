// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-5ygt6t95.js";
import {
  GMe
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  bt,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  jle,
  ZMe
} from "B:/~BUN/root/chunk-rfp1pa77.js";
import {
  nyn
} from "B:/~BUN/root/chunk-ttmvswg7.js";
import {
  al
} from "B:/~BUN/root/chunk-v6pbq6dm.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import "B:/~BUN/root/chunk-648jq7hr.js";
async function _({
  sessionId: i,
  sdkUrl: e
}) {
  try {
    let r = a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? jle;
    if (!(await al(r, ZMe))?.trim()) {
      t("[vitals] no session token file on this worker; guest vitals disabled");
      return
    }
    let o = await nyn({
      sessionId: i,
      apiBaseUrl: GMe(new URL(e)).origin,
      tokenFilePath: r,
      binaryResolution: "search",
      log: t
    });
    if (o) bt(() => o.stop())
  } catch (r) {
    t(`[vitals] not started: ${d(r)}`)
  }
}
export {
  _ as startHostedWorkerVitalsEmitter
};
