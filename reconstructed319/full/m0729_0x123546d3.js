// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Pe
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  zVn
} from "B:/~BUN/root/chunk-sxvr9rzb.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Pxe
} from "B:/~BUN/root/chunk-15vbkr6z.js";
import {
  zm,
  Rm
} from "B:/~BUN/root/chunk-amar4116.js";
import {
  ili
} from "B:/~BUN/root/chunk-9katj9cn.js";
import {
  openSync as o
} from "fs";
import {
  ReadStream as a
} from "tty";

function s() {
  if (process.stdin.isTTY) return {
    kind: "stdin"
  };
  return {
    kind: "unavailable",
    reason: "windows"
  }
}
class i {
  input = null;
  get() {
    return this.input ??= s()
  }
  reset() {
    this.input = null
  }
}
var xBe = new i;

function zC(n = !1) {
  ili();
  let e = xBe.get(),
    r = {
      exitOnCtrlC: n
    };
  if (e.kind === "override") r.stdin = e.stream;
  return r.isScreenReaderEnabled = Rm(), r
}
export {
  xBe,
  zC
};
