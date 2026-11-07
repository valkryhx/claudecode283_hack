// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  rs
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  Ive
} from "B:/~BUN/root/chunk-0ye1geyg.js";
import {
  eKi
} from "B:/~BUN/root/chunk-xdzcgcjh.js";
import {
  unlinkSync as s
} from "fs";
import {
  mkdir as c
} from "fs/promises";
import {
  join as i
} from "path";

function Q7o() {
  return i(eKi(), "claude", "locks")
}

function m5e() {
  return !rs(void 0)
}
async function Mar() {
  let r = Ive(process.execPath);
  if (r === void 0 || !m5e()) return;
  try {
    let o = Q7o(),
      e = i(o, `${r}@${process.pid}.lock`),
      n = {
        pid: process.pid,
        version: r,
        execPath: process.execPath,
        acquiredAt: Date.now()
      };
    await c(o, {
      recursive: !0
    }), await zn(e, _(n, null, 2)), process.on("exit", () => {
      try {
        s(e)
      } catch {}
    })
  } catch (o) {
    t(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${d(o)}`, {
      level: "warn"
    })
  }
}
export {
  Q7o,
  m5e,
  Mar
};
