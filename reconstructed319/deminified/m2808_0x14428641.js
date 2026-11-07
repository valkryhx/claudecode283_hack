// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee, Gl, cB } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { tFn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { ukt, Fun, t4n } from "B:/~BUN/root/chunk-z6p6knbe.js";
import { hat } from "B:/~BUN/root/chunk-hxv3mx7q.js";
import { o, u, Be, T } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { relative as w, sep as k } from "path";
var LUr = "RegisterRepoRoot",
  x = 32,
  JMo = 4096,
  _ = p(() => u({
    directory: o().max(JMo),
    askedBy: o().min(1).max(64).optional()
  })),
  C = new W(() => new Map()),
  B = p(() => Be([u({
    directory: o().min(1).max(4096),
    alreadyTaken: T(!0).optional()
  }), u({
    refusal: o().min(1).max(64)
  })]));
async function _4s(s, f, a) {
  let {
      directory: directory,
      askedBy: askedBy
    } = _().parse(s),
    y = a.toolUseContext(),
    {
      workspaceRoot = {
        kind: "absent"
      }
    } = a,
    directory_2;
  try {
    directory_2 = await t4n(directory, () => ({
      ...se(y),
      additionalWorkingDirectories: new Map(workspaceRoot.kind === "valid" ? [[workspaceRoot.root, {
        path: workspaceRoot.root,
        source: "cliArg"
      }]] : [])
    }), Ee());
  } catch (error) {
    let l = ukt(error);
    if (l === void 0) throw error;
    if (l === "outside_scope") {
      let h = workspaceRoot.kind === "valid" ? "the folder is not below the workspace root" : workspaceRoot.kind === "invalid" ? `the workspace root is invalid: ${workspaceRoot.fault}` : "no workspace root";
      t(`${LUr}: outside_scope: ${h}`, {
        level: "warn"
      });
    }
    return R(l);
  }
  if (workspaceRoot.kind === "valid" && !Fun(directory_2, Ee(), [], []).allowed && w(workspaceRoot.real, directory_2).split(k).some(item => item === "" || item.startsWith("."))) return t(`${LUr}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`, {
    level: "warn"
  }), R("outside_scope");
  f.throwIfAborted();
  let d = Gl(),
    c = C.of(a.session.host),
    m = d.includes(directory_2);
  if (!m) {
    if (d.length >= x) return R("too_many");
    if (cB([...d, directory_2]), askedBy !== void 0) c.set(directory_2, askedBy);
    tFn(directory_2), Ge.refreshConfig();
  }
  return await hat(), {
    summary: "folder registered",
    output: {
      directory: directory_2,
      ...(m && (askedBy === void 0 || c.get(directory_2) !== askedBy) && {
        alreadyTaken: !0
      })
    }
  };
}
function R(refusal) {
  return {
    summary: `folder not registered: ${refusal}`,
    output: {
      refusal: refusal
    }
  };
}
export { LUr, JMo, _4s };