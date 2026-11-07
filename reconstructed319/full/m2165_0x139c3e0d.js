// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-x24hm796.js";
import "B:/~BUN/root/chunk-7s3m410n.js";
import {
  vn
} from "B:/~BUN/root/chunk-wd9jb4af.js";
import "B:/~BUN/root/chunk-65zedn3n.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
async function a(r, t) {
  let o = e(r.remote, r.inputPrompt);
  if (o === null) return vn("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");
  let {
    runHeadlessCloudPrint: s
  } = await import("B:/~BUN/root/chunk-txyqsf1y.js");
  return s(r, t, {
    prompt: o,
    outputFormat: r.outputFormat === "json" ? "json" : "text"
  })
}

function e(r, t) {
  let o = [r ?? "", typeof t === "string" ? t : ""].filter((s) => s.trim() !== "");
  return o.length === 0 ? null : o.join(`
`)
}
export {
  a as runHeadlessCloudPrintArm
};
