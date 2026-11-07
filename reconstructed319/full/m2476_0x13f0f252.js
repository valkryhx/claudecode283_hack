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
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-zn7b14jn.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import "B:/~BUN/root/chunk-65j2302z.js";
import "B:/~BUN/root/chunk-vaq2hdme.js";
import {
  Fa
} from "B:/~BUN/root/chunk-3v92y8yw.js";
import "B:/~BUN/root/chunk-jgwwv4gf.js";
import "B:/~BUN/root/chunk-zvpxvfbv.js";
import {
  no
} from "B:/~BUN/root/chunk-qszgzq5m.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";

function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r),
    s = e(t.saved_pages_dir, o) ? `[A quickstart in this conversation saved reference pages of this type on disk in ${no([t.saved_pages_dir])}; its result lists them, so those are not attached here.]` : "";
  if (t.not_listed === !0) return s === "" ? "" : `

${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system)) return `

[A quickstart in this conversation already listed the design systems and saved the files of ${Fa(t.saved_system,"(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`
}
export {
  c as afterQuickstartSavedLine
};
