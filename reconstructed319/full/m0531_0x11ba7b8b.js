// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
var nMt = 0,
  Fhr = 1,
  tOn = 262144,
  n = 5,
  nOn = 1048576,
  TWe = 1e4;

function rOn(r) {
  let e = typeof r === "string" ? Buffer.from(r, "utf8") : r,
    t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(nMt, 4), e.copy(t, n), t
}

function CW(r) {
  let e = Buffer.from(_(r), "utf8"),
    t = Buffer.allocUnsafe(n + e.length);
  return t.writeUInt32BE(e.length, 0), t.writeUInt8(Fhr, 4), e.copy(t, n), t
}

function Hhr(r, e) {
  let t = Buffer.alloc(0),
    o = !1;
  return (l) => {
    if (o) return;
    t = t.length === 0 ? l : Buffer.concat([t, l]);
    while (t.length >= n) {
      let f = t.readUInt32BE(0);
      if (f > nOn) {
        o = !0, e(`frame too large (${f} > ${nOn})`);
        return
      }
      let u = n + f;
      if (t.length < u) return;
      let i = t.readUInt8(4),
        s = t.subarray(n, u);
      if (t = t.subarray(u), i === nMt) r({
        kind: nMt,
        payload: Buffer.from(s)
      });
      else if (i === Fhr) {
        let c;
        try {
          c = ee(s.toString("utf8"))
        } catch {
          o = !0, e("bad ctrl json");
          return
        }
        r({
          kind: Fhr,
          ctrl: c
        })
      } else {
        o = !0, e(`unknown frame kind ${i}`);
        return
      }
    }
  }
}
export {
  nMt,
  Fhr,
  tOn,
  nOn,
  TWe,
  rOn,
  CW,
  Hhr
};
