// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Bo
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  wT
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  un,
  Jg,
  be,
  Ob
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  oh
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  lz,
  qLe
} from "B:/~BUN/root/chunk-tdekz3md.js";
import {
  lo,
  dl
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  VB
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  B4e
} from "B:/~BUN/root/chunk-cb4cdgp6.js";
import {
  Xqn
} from "B:/~BUN/root/chunk-ws830w2f.js";
import {
  pPe,
  J5,
  xY
} from "B:/~BUN/root/chunk-wr6kgh84.js";
import {
  xUr
} from "B:/~BUN/root/chunk-7ggjt0dy.js";
import {
  TY
} from "B:/~BUN/root/chunk-y1bqc7ky.js";
import {
  zEt,
  VEt
} from "B:/~BUN/root/chunk-dg1v0283.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
import {
  o,
  E,
  I,
  u,
  B,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var xqs = "ReadFileForRemote",
  Cun = 4194304,
  g = 3000000,
  f = p(() => u({
    path: o().max(pPe),
    max_bytes: E().optional(),
    encoding: B(["utf-8", "base64"]).optional()
  })),
  S = p(() => f().extend({
    permission_context: J5()
  }).strict()),
  M = p(() => u({
    file: u({
      contents: o().refine(d),
      truncated: I().optional(),
      encoding: T("base64").optional(),
      lossy: I().optional()
    }).optional()
  }));
async function Pqs(e, m, r) {
  if (it(e) && xY(e.permission_context)) throw Error("permission_context is too large");
  let {
    permission_context: a,
    path: s,
    max_bytes: t,
    encoding: l
  } = S().parse(e), n = r.launchPermissionContext && Run(r.launchPermissionContext), i = n && await B4e(s, t && Math.min(t, g), {
    ...TY(a, n, Bo(r.session).originalCwd),
    ...n.blockReadsOutsideWorkingDirectories && {
      blockReadsOutsideWorkingDirectories: !0
    }
  }, {
    encoding: l,
    telemetrySource: "headless_stream"
  }).catch(() => {
    return
  });
  if (i && !d(i.contents)) throw Error("the file is too large to send back as text");
  return {
    summary: i ? `${i.contents.length} characters` : "read denied",
    output: {
      file: i
    }
  }
}

function Run(e) {
  let m = [...Ob()],
    r = qLe("policySettings"),
    a = [be("policySettings")];
  for (let [t, l] of [
      ["userSettings", "userSettings"],
      ["projectSettings", "projectSettings"],
      ["localSettings", "localSettings"],
      ["localSettings", "legacyLocal"]
    ]) {
    let n = l === "legacyLocal" ? Jg() : un(l),
      i = Xqn(l),
      c = i !== void 0 ? i : n === void 0 ? null : wT(n);
    if (c !== null) m.push(...c.errors), r.push(...lz(c.settings, t)), a.push(c.settings)
  }
  if (VEt(zEt(m).slice(0, 10)), xUr()) return;
  let s = VB(e, r.filter((t) => t.ruleBehavior !== "allow"), {
    announce: !1
  });
  return lo(s, oh) || dl(s, oh) ? void 0 : {
    ...s,
    blockReadsOutsideWorkingDirectories: a.some((t) => t?.permissions?.blockReadsOutsideWorkingDirectories)
  }
}

function d(e) {
  return e.length <= Cun && Buffer.byteLength(_(e)) <= Cun
}
export {
  xqs,
  Cun,
  Pqs,
  Run
};
