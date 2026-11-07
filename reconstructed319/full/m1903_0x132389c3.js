// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Rle
} from "B:/~BUN/root/chunk-1yt8p22k.js";
import {
  OS,
  $g
} from "B:/~BUN/root/chunk-kgvnwy91.js";
var i = 200,
  Dia = "started by Claude";

function uVo(r, {
  description: s,
  toolUseId: o,
  abortController: t
}) {
  let e = Rle(s, i) || Dia,
    n = Q(e, i),
    a = OS("local_script"),
    l = {
      ...$g(a, "local_script", n.length < e.length ? `${n}\u2026` : e, o),
      type: "local_script",
      status: "running",
      outputFile: "",
      abortController: t
    };
  return r.register(l), a
}

function fVo(r, s, o) {
  if (s.get(r)?.status !== "running") return !1;
  return s.update(r, (t) => t.status !== "running" ? t : {
    ...t,
    status: o,
    endTime: Date.now(),
    notified: !0,
    abortController: void 0
  }), !0
}
var rya = {
  name: "ScriptTask",
  type: "local_script",
  async kill(r, s, o, t) {
    let e = s.get(r);
    if (e?.type !== "local_script" || e.status !== "running") return;
    e.abortController?.abort(t)
  }
};
export {
  Dia,
  uVo,
  fVo,
  rya
};
