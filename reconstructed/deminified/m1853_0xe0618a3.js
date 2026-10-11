// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import { Tye } from "B:/~BUN/root/chunk-dv435n4g.js";
import { gt, t as log } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-2swveyqa.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-qqgpf856.js";
import "B:/~BUN/root/chunk-zv4xh2j0.js";
import "B:/~BUN/root/chunk-8hs4bwwk.js";
import { pne, xye } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { iWt } from "B:/~BUN/root/chunk-91dmp4rs.js";
import { cl } from "B:/~BUN/root/chunk-3wnb3s8p.js";
import "B:/~BUN/root/chunk-t1t358ee.js";
import "B:/~BUN/root/chunk-81280fc2.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
async function d({
  sessionId: sessionId,
  sdkUrl: sdkUrl
}) {
  try {
    let tokenFilePath = a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? pne;
    if (!(await cl(tokenFilePath, xye))?.trim()) {
      log("[vitals] no session token file on this worker; guest vitals disabled");
      return;
    }
    let o = await iWt({
      sessionId: sessionId,
      apiBaseUrl: Tye(new URL(sdkUrl)).origin,
      tokenFilePath: tokenFilePath,
      binaryResolution: "search",
      log: log
    });
    if (o) gt(() => o.stop());
  } catch (error) {
    log(`[vitals] not started: ${l(error)}`);
  }
}
export { d as startHostedWorkerVitalsEmitter };