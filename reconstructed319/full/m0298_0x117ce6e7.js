// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  af
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  Txe
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  gh
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  rHe
} from "B:/~BUN/root/chunk-hacd8gcc.js";
import {
  homedir as i
} from "os";
import {
  dirname as l,
  join as e
} from "path";
var Kze = ".credentials.json",
  qze = ".device-keys.json";

function Zwr() {
  return e(i(), ".claude", qze).normalize("NFC")
}
var uZt = ".config.json",
  R_s = `.claude${Txe[0]}.json`,
  Ifo = Txe.map((o) => `.claude${o}.json`),
  $Hi = [...Ifo, uZt, Kze, qze];

function N0t() {
  let o = af(),
    r = rHe();
  if (o === null || r === null) return [Zwr()];
  let t = l(gh());
  return [...Ifo.map((n) => e(t, n)), e(o, uZt), e(r, Kze), Zwr()]
}
export {
  Kze,
  qze,
  Zwr,
  uZt,
  R_s,
  Ifo,
  $Hi,
  N0t
};
