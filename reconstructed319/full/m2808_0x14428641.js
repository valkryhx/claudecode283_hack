// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee,
  Gl,
  cB
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  se
} from "B:/~BUN/root/chunk-9bs2y8fc.js";
import {
  tFn
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Ge
} from "B:/~BUN/root/chunk-z7bs0q82.js";
import {
  ukt,
  Fun,
  t4n
} from "B:/~BUN/root/chunk-z6p6knbe.js";
import {
  hat
} from "B:/~BUN/root/chunk-hxv3mx7q.js";
import {
  o,
  u,
  Be,
  T
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  relative as w,
  sep as k
} from "path";
var LUr = "RegisterRepoRoot",
  x = 32,
  JMo = 4096,
  _ = p(() => u({
    directory: o().max(JMo),
    askedBy: o().min(1).max(64).optional()
  })),
  C = new W(() => new Map),
  B = p(() => Be([u({
    directory: o().min(1).max(4096),
    alreadyTaken: T(!0).optional()
  }), u({
    refusal: o().min(1).max(64)
  })]));
async function _4s(s, f, a) {
  let {
    directory: g,
    askedBy: n
  } = _().parse(s), y = a.toolUseContext(), {
    workspaceRoot: r = {
      kind: "absent"
    }
  } = a, e;
  try {
    e = await t4n(g, () => ({
      ...se(y),
      additionalWorkingDirectories: new Map(r.kind === "valid" ? [
        [r.root, {
          path: r.root,
          source: "cliArg"
        }]
      ] : [])
    }), Ee())
  } catch (i) {
    let l = ukt(i);
    if (l === void 0) throw i;
    if (l === "outside_scope") {
      let h = r.kind === "valid" ? "the folder is not below the workspace root" : r.kind === "invalid" ? `the workspace root is invalid: ${r.fault}` : "no workspace root";
      t(`${LUr}: outside_scope: ${h}`, {
        level: "warn"
      })
    }
    return R(l)
  }
  if (r.kind === "valid" && !Fun(e, Ee(), [], []).allowed && w(r.real, e).split(k).some((i) => i === "" || i.startsWith("."))) return t(`${LUr}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`, {
    level: "warn"
  }), R("outside_scope");
  f.throwIfAborted();
  let d = Gl(),
    c = C.of(a.session.host),
    m = d.includes(e);
  if (!m) {
    if (d.length >= x) return R("too_many");
    if (cB([...d, e]), n !== void 0) c.set(e, n);
    tFn(e), Ge.refreshConfig()
  }
  return await hat(), {
    summary: "folder registered",
    output: {
      directory: e,
      ...m && (n === void 0 || c.get(e) !== n) && {
        alreadyTaken: !0
      }
    }
  }
}

function R(s) {
  return {
    summary: `folder not registered: ${s}`,
    output: {
      refusal: s
    }
  }
}
export {
  LUr,
  JMo,
  _4s
};
