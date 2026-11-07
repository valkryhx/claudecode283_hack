// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var yn = Object.freeze(["-c", "core.hooksPath=/dev/null", "-c", "core.fsmonitor="]),
  fS = "--ignore-submodules=dirty",
  x1s = "--no-optional-locks",
  Gte = Object.freeze(["--no-optional-locks", "status", "--porcelain", "--untracked-files=normal", "--ignore-submodules=dirty"]),
  CFr = Object.freeze({
    GIT_LFS_SKIP_SMUDGE: "1"
  }),
  VHe = "/",
  O = ["'alias.remote-none=version'", "'alias.remote-none.command=version'", "'alias.remote-/.command=version'", "'fetch.bundleURI='", "'help.autocorrect=0'"],
  GIT_CONFIG_PARAMETERS = O.join(" "),
  d = Object.freeze({
    GIT_ALLOW_PROTOCOL: "/",
    GIT_CONFIG_PARAMETERS: GIT_CONFIG_PARAMETERS,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...CFr
  }),
  R = Object.freeze({
    LC_ALL: "C",
    LANGUAGE: "C"
  }),
  G = Object.freeze({
    GIT_SSH_COMMAND: "false"
  }),
  njt = 2000,
  tme = Object.freeze([...yn, "-c", "safe.bareRepository=explicit", "-c", "protocol.file.allow=never"]),
  $St = ["GIT_DIR", "GIT_WORK_TREE", "GIT_COMMON_DIR", "GIT_INDEX_FILE", "GIT_CEILING_DIRECTORIES", "GIT_DISCOVERY_ACROSS_FILESYSTEM", "GIT_OBJECT_DIRECTORY", "GIT_ALTERNATE_OBJECT_DIRECTORIES", "GIT_SHALLOW_FILE", "GIT_NAMESPACE", "GIT_IMPLICIT_WORK_TREE", "GIT_REFERENCE_BACKEND"],
  gae = [...$St, "GIT_CONFIG_COUNT", "GIT_CONFIG_PARAMETERS", "GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "GIT_CONFIG"],
  S = /^GIT_CONFIG_(KEY|VALUE)_\d+$/,
  regExp = new RegExp(S.source, "i"),
  RFr = /^GIT_(?:SSL|PROXY)_/i,
  N = new Set(gae);
function ys(n, s = {}) {
  let t = n?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? !1;
  return A(I({
    ...d,
    ...(s.userLocale !== !0 && R),
    ...(!t && G)
  }, n, s));
}
function rjt(n, s = {}) {
  let t = I({
    GIT_NO_REPLACE_OBJECTS: "1"
  }, n, s);
  for (let o of l) if (!(o in t)) t[o] = void 0;
  return t;
}
var l = ["GIT_LFS_SKIP_SMUDGE", "GIT_NO_LAZY_FETCH"];
function I(n, s, {
  base = process.env,
  repository: repository
}) {
  let _ = a({
      ...n,
      ...(repository !== void 0 && {
        GIT_DIR: repository.gitDir,
        GIT_COMMON_DIR: repository.commonDir
      }),
      ...(repository !== void 0 && (repository.workTree !== null ? {
        GIT_WORK_TREE: repository.workTree
      } : {
        GIT_IMPLICIT_WORK_TREE: "0"
      })),
      ...s
    }),
    r = {};
  for (let e of gae) r[e] = void 0;
  let T = new Set(Object.keys(_).map(item => item.toUpperCase()));
  for (let e of Object.keys(base)) {
    let i = e.toUpperCase();
    if (N.has(i) || regExp.test(e) || T.has(i) && !(e in _)) r[e] = void 0;
  }
  return {
    ...base,
    ...r,
    ..._
  };
}
function a(n) {
  let GIT_ALLOW_PROTOCOL = n.GIT_ALLOW_PROTOCOL;
  if (GIT_ALLOW_PROTOCOL === void 0) return {
    ...n
  };
  let t = GIT_ALLOW_PROTOCOL.split(":").filter(item => item !== "/");
  if (t.find(item => !/^[A-Za-z0-9-]*$/.test(item)) !== void 0) throw Error('GIT_ALLOW_PROTOCOL may list only transport names made of letters, digits and "-"');
  let _ = [...new Set([...O, ...t.flatMap(item => [`'alias.remote-${item}=version'`, `'alias.remote-${item}.command=version'`])])],
    GIT_CONFIG_PARAMETERS_2 = n.GIT_CONFIG_PARAMETERS;
  return {
    ...n,
    GIT_CONFIG_PARAMETERS: [...(GIT_CONFIG_PARAMETERS_2 === void 0 || GIT_CONFIG_PARAMETERS_2 === "" || GIT_CONFIG_PARAMETERS_2 === GIT_CONFIG_PARAMETERS ? [] : [GIT_CONFIG_PARAMETERS_2]), ..._].join(" ")
  };
}
function A(n) {
  let o = e => e.replaceAll('"', ""),
    _ = e => /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e),
    r = e => {
      if (e === void 0) return;
      let i = e.split(";").map(o).filter(item => item !== "" && _(item));
      return i.length > 0 ? i.join(";") : "\\\\.\\nul";
    },
    T = Object.keys(n).filter(item => item.toUpperCase() === "PATH");
  return {
    ...n,
    ...Object.fromEntries(T.map(item => [item, r(n[item])]))
  };
}
export { yn, fS, x1s, Gte, CFr, VHe, njt, tme, $St, gae, regExp as USt, RFr, ys, rjt };