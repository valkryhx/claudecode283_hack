// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k, K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { $A, ba } from "B:/~BUN/root/chunk-wthaftk0.js";
import { aIe, Dl } from "B:/~BUN/root/chunk-ebpsjtma.js";
import { execFile as ee } from "child_process";
import { constants as x } from "fs";
import { access as A, chmod as O, lstat as N, mkdir as G, readdir as ne, readFile as te, readlink as ie, writeFile as P } from "fs/promises";
import { delimiter as oe, dirname as b, isAbsolute as H, join as c, resolve as m, sep as T } from "path";
import { promisify as se } from "util";
var w = se(ee),
  re = /^[a-zA-Z0-9_-]+$/,
  U = [2, 34];
function Pqn(e) {
  let n = /git version (\d+)\.(\d+)/.exec(e);
  if (!n) return null;
  return [Number(n[1]), Number(n[2])];
}
function ae(e) {
  let n = Pqn(e);
  if (n === null) return null;
  let [t, s] = n,
    [o, r] = U;
  return t > o || t === o && s >= r;
}
async function bpa(e, n = M) {
  let t;
  try {
    t = await j(n);
  } catch (error) {
    if (!(error instanceof aIe)) throw error;
    return `\`git --version\` did not answer within ${n / 1000} s. Check for a git wrapper that waits, or a mount that hangs`;
  }
  let s = ae(t);
  if (s === null) e(`[runner:git] --configure-git: could not parse git version from "${t.trim()}"; proceeding without version check`);else if (!s) {
    let [o, r] = U;
    return `--configure-git requires git >= ${o}.${r} for SSH commit signing (found: ${t.trim()}). Upgrade git in your runner image, or omit --configure-git and manage git identity yourself`;
  }
  return;
}
async function Spa(e) {
  let n = c(e.baseDir, ".runner");
  await G(n, {
    recursive: !0
  });
  let shimPath = c(n, "code-sign"),
    s = c(n, "commit_signing_key.pub"),
    o = L(e.execPath);
  await P(shimPath, o, {
    mode: 493
  }), await O(shimPath, 493), await P(s, "");
  let r = [["user.name", "Claude"], ["user.email", "noreply@anthropic.com"], ["gpg.format", "ssh"], ["gpg.ssh.program", shimPath], ["user.signingkey", s], ["commit.gpgsign", "true"], ["tag.gpgsign", "true"], ["push.negotiate", "true"]],
    a = e.gitConfigPath ? ["--file", e.gitConfigPath] : ["--global"];
  for (let [h, f] of r) await w("git", ["config", ...a, "--replace-all", h, f], {
    windowsHide: !0
  });
  e.onStatus(`[runner:git] --configure-git: identity=Claude <noreply@anthropic.com>, gpg.ssh.program=${shimPath}`);
  let u = await de(n, a, e.onStatus);
  return u.installed ? {
    shimPath: shimPath
  } : {
    shimPath: shimPath,
    operatorHooksPath: u.existingHooksPath
  };
}
function L(e) {
  return `#!/bin/sh
BIN="$CLAUDE_RUNNER_CLAUDE_BIN"
[ -n "$BIN" ] || BIN='${Q(e)}'
exec "$BIN" self-hosted-runner code-sign "$@"
`;
}
function wpa(e, n) {
  let t = c(e, ".runner");
  return [{
    path: c(t, "code-sign"),
    content: L(n),
    mode: 493
  }, {
    path: c(t, "commit_signing_key.pub"),
    content: "",
    mode: 420
  }];
}
function QIo(e) {
  return Oqn(c(e, ".runner"));
}
function Oqn(e) {
  return [["user.name", "Claude"], ["user.email", "noreply@anthropic.com"], ["user.signingkey", c(e, "commit_signing_key.pub")], ["gpg.format", "ssh"], ["gpg.ssh.program", c(e, "code-sign")], ["commit.gpgsign", "true"], ["tag.gpgsign", "true"], ["push.negotiate", "true"], ["core.hooksPath", c(e, "git-hooks")]];
}
function lUr(e, n, t) {
  let s = c(n, ".runner") + T;
  return e.map(item => {
    if (!item.path.startsWith(s)) throw Error("relocateConfigureGitArtifacts: artifact path is not under {baseDir}/.runner/");
    return {
      ...item,
      path: c(t, item.path.slice(s.length))
    };
  });
}
var M = 15000;
function j(timeout) {
  return Dl(w("git", ["--version"], {
    windowsHide: !0,
    timeout: timeout,
    killSignal: "SIGKILL"
  }).then(({
    stdout: stdout
  }) => stdout), timeout, "git --version");
}
async function dUr(e = M) {
  try {
    return await j(e);
  } catch {
    return "";
  }
}
var Voa = `#!/bin/sh
test "$1" = get || exit 0
printf "username=unused\\npassword=%s\\n" "$CLAUDE_CODE_SESSION_ACCESS_TOKEN"
`;
function Koa(e) {
  return c(e, ".runner", "git-proxy-cred");
}
function kpa(e) {
  let n = c(e, ".runner", "git-hooks");
  return [...q.map(item => ({
    path: c(n, item),
    content: content
  })), ...["commit-msg", "prepare-commit-msg"].map(item => ({
    path: c(n, item),
    content: content_2
  }))];
}
async function vpa(e) {
  let n = e.apiBaseUrl.replace(/\/+$/, ""),
    t;
  try {
    t = new URL(n).host;
  } catch {
    throw Error(`--use-anthropic-git-proxy: apiBaseUrl is not a valid URL: ${n}`);
  }
  let s = c(e.baseDir, ".runner");
  await G(s, {
    recursive: !0
  });
  let o = Koa(e.baseDir);
  await P(o, Voa, {
    mode: 448
  }), await O(o, 448);
  let r = e.gitConfigPath ? ["--file", e.gitConfigPath] : ["--global"],
    a = [[`credential.https://${t}.helper`, `!'${Q(o)}'`], [`credential.https://${t}.useHttpPath`, "false"], [`credential.https://${t}.username`, "unused"], [`http.https://${t}/.proactiveAuth`, "basic"]];
  for (let [u, h] of a) await w("git", ["config", ...r, "--replace-all", u, h], {
    windowsHide: !0
  });
  return e.onStatus(`[runner:git] --use-anthropic-git-proxy: credential helper registered for https://${t} (${o})`), n;
}
var timeout_2 = 1e4;
function B(e, n, env) {
  return w("git", ["config", ...e, "--includes", "--type=path", "--get", n], {
    windowsHide: !0,
    timeout: timeout_2,
    ...(env && {
      env: env
    })
  }).then(s => s.stdout.trim(), () => "");
}
async function F(e, n) {
  let [t, global] = await Promise.all([ue(["--system"], e, n), B(["--global"], e, n)]);
  return {
    ...(t.value !== "" && {
      system: t.value
    }),
    ...(t.origin !== void 0 && {
      systemOrigin: t.origin
    }),
    ...(global !== "" && {
      global: global
    })
  };
}
async function ce(e, n) {
  let {
    system: system,
    global: global_2
  } = await F(e, n);
  return [...(system !== void 0 ? ["system"] : []), ...(global_2 !== void 0 ? ["global"] : [])];
}
async function ue(e, n, env_2) {
  let s = await w("git", ["config", ...e, "--includes", "--show-origin", "-z", "--type=path", "--get", n], {
      cwd: "/",
      windowsHide: !0,
      timeout: timeout_2,
      ...(env_2 && {
        env: env_2
      })
    }).then(r => r.stdout, () => ""),
    o = s.indexOf("\x00");
  if (o < 0) return {
    value: s.trim()
  };
  return {
    value: s.slice(o + 1).replace(/\0$/, "").trim(),
    origin: V(s.slice(0, o))
  };
}
var V = e => e.startsWith("file:") ? e.slice(5) : e,
  W = e => e.length > 1 ? e.replace(/[\\/]+$/, "") : e,
  I = e => H(e) && m(e) === W(e);
async function ge(env_3) {
  let n;
  try {
    n = (await w("git", ["config", "--system", "--includes", "--show-origin", "-z", "--list"], {
      cwd: "/",
      windowsHide: !0,
      timeout: timeout_2,
      maxBuffer: 4194304,
      ...(env_3 && {
        env: env_3
      })
    })).stdout;
  } catch (error) {
    let r = error,
      a = k(error) ?? (r !== null && typeof r === "object" ? typeof r.signal === "string" ? `killed by ${r.signal}${r.killed === !0 ? ", timed out" : ""}` : r.code !== void 0 ? `exit ${String(r.code)}` : "error" : "error");
    return {
      files: [],
      unverifiable: `the system configuration could not be listed (${a})`
    };
  }
  let t = n.split("\x00"),
    files = [];
  for (let o = 0; o + 1 < t.length; o += 2) {
    let r = V(t[o]);
    if (!t[o].startsWith("file:") || !I(r)) return {
      files: files,
      unverifiable: `git reports a source that is not a plainly spelled absolute file path (${Dme(r)}; write [include] paths absolute, without '.' or '..' components)`
    };
    if (!files.includes(r)) files.push(r);
  }
  return {
    files: files
  };
}
async function Y(e) {
  let n = e;
  for (;;) try {
    return await A(n, x.W_OK), !0;
  } catch (error) {
    if (K(error)) {
      let o = b(n);
      if (o === n) return !1;
      n = o;
      continue;
    }
    let s = process.getuid?.();
    if (s !== void 0 && s !== 0) try {
      if ((await N(n)).uid === s) return !0;
    } catch {}
    return !1;
  }
}
var v = (e, n) => n !== void 0 && n !== "" && (m(e) === m(n) || m(e).startsWith(m(n) + T));
async function Epa(e) {
  let n = e?.sessionReachable ?? Y,
    t = e?.env ? e.env.HOME : i.HOME,
    s = e?.env ? e.env.PATH : i.PATH,
    skipped = [],
    r = (s ?? "").split(oe).filter(item => {
      if (item === "" || !H(item)) return !1;
      if (v(item, t) || v(item, e?.baseDir)) return skipped.push(item), !1;
      return !0;
    }),
    a = async l => {
      for (let d of r) {
        let g = c(d, l);
        try {
          await A(g, x.X_OK);
        } catch {
          continue;
        }
        if ((await p(g, n)) !== void 0 || (await p(d, n)) !== void 0) {
          skipped.push(g);
          continue;
        }
        return g;
      }
      return;
    },
    inert = "/nonexistent-gpg";
  for (let l of ["/bin/false", "/usr/bin/false"]) {
    try {
      await A(l, x.X_OK);
    } catch {
      continue;
    }
    if ((await p(l, n)) === void 0 && (await p(b(l), n)) === void 0) {
      inert = l;
      break;
    }
  }
  let [h, f, y] = await Promise.all([a("gpg"), a("gpgsm"), a("ssh-keygen")]);
  return {
    gpg: h ?? inert,
    gpgsm: f ?? inert,
    sshKeygen: y ?? inert,
    inert: inert,
    skipped: skipped
  };
}
function J(e, n) {
  let t = s => m(s).replace(/[\\/]+$/, "");
  return n !== void 0 && t(e) === t(n) || t(e).endsWith(c(T + ".runner", "git-hooks"));
}
async function Tpa(e) {
  let n = e?.sessionReachable ?? Y,
    t = e?.systemConfigFiles ?? ge,
    s = e?.env ? e.env.HOME : i.HOME;
  function o(g) {
    return e?.lifecycleHooks ? ce(g, e.env) : [];
  }
  let [{
      system: r,
      systemOrigin: systemOrigin,
      global: u
    }, sshCommandScopes, askPassScopes, lfsFilterScopes] = await Promise.all([F("core.hooksPath", e?.env), o("core.sshCommand"), o("core.askPass"), o("filter.lfs.clean")]),
    l = g => g !== void 0 && !J(g),
    d = {
      ...(l(u) && {
        ignoredGlobalHooksPath: u
      }),
      ...(sshCommandScopes.length > 0 && {
        sshCommandScopes: sshCommandScopes
      }),
      ...(askPassScopes.length > 0 && {
        askPassScopes: askPassScopes
      }),
      ...(lfsFilterScopes.length > 0 && {
        lfsFilterScopes: lfsFilterScopes
      })
    };
  if (l(r)) {
    let reason;
    if (systemOrigin === void 0 || !I(systemOrigin)) reason = `git does not report a plainly spelled absolute file path as its origin (${Dme(systemOrigin ?? "")}) \u2014 cannot verify it is out of the sessions' reach`;else {
      let S = await t(e?.env);
      if (S.unverifiable !== void 0) reason = `${S.unverifiable} \u2014 cannot verify it is out of the sessions' reach`;else if (!S.files.includes(systemOrigin)) reason = `the system configuration changed while it was being read (${Dme(systemOrigin)} is no longer among its files) \u2014 cannot verify it is out of the sessions' reach`;else for (let E of S.files) {
        let D = await N(E).then(() => {
            return;
          }, Z => k(Z) ?? "error"),
          C = D !== void 0 ? `is listed by git but cannot be found as reported (${D}) \u2014 cannot verify it is out of the sessions' reach` : await p(E, n);
        if (C !== void 0) {
          reason = E === systemOrigin ? `it comes from ${Dme(E)}, which ${C}` : `one of the files the system configuration reads, ${Dme(E)}, ${C}`;
          break;
        }
      }
    }
    if (reason === void 0) if (!H(r)) reason = "it is relative (git would resolve it inside each repository)";else if (!I(r)) reason = `it is not spelled as a plain absolute path (${Dme(r)}) \u2014 write it without '.' or '..' components`;else if (v(r, s) || v(r, e?.baseDir)) reason = "it points under the runner HOME / --base-dir, which sessions can write";else {
      let S = await p(r, n);
      reason = S !== void 0 ? `its target directory ${S}` : await he(r, n);
    }
    if (reason === void 0) d.hooksPath = r;else d.ignoredSystemHooksPath = {
      value: r,
      reason: reason
    };
  }
  return d;
}
var hops = 32;
async function he(e, n) {
  let t;
  try {
    t = (await ne(e)).sort();
  } catch (error) {
    return K(error) ? "its target directory does not exist" : `its target directory cannot be listed (${k(error) ?? "error"})`;
  }
  for (let s of t) {
    let o = await p(c(e, s), n);
    if (o !== void 0) return `${Dme(s)} in it ${o}`;
  }
  return;
}
async function p(e, n, t = {
  hops: hops
}) {
  let s = W(e),
    o = s;
  for (;;) {
    if (await n(o)) return o === s ? "is writable by (or belongs to) this runner's user" : `resolves to ${Dme(o)}, which this runner's user can write or owns`;
    let r;
    try {
      r = (await N(o)).isSymbolicLink();
    } catch (error) {
      if (o === s) {
        if (K(error)) return;
        return `cannot be examined (${k(error) ?? "error"})`;
      }
      return `is a link that does not resolve (${Dme(o)})`;
    }
    if (!r) return;
    if (t.hops <= 0) return "is a link with too many levels of indirection";
    t.hops--;
    let a;
    try {
      a = await ie(o);
    } catch (error) {
      return `is a link that cannot be read (${k(error) ?? "error"})`;
    }
    o = m(b(o), a);
    let u = await p(b(o), n, t);
    if (u !== void 0) return t.hops <= 0 ? `is a link with too many levels of indirection (through ${Dme(b(o))})` : `resolves into ${Dme(b(o))}, a directory that ${u} (the target could be replaced)`;
  }
}
var fe = /^\p{Cf}$/u;
function Dme(e) {
  let n = _(e),
    t = "";
  for (let s of n) {
    let o = s.codePointAt(0);
    if (o >= 127 && o <= 159 || o === 8232 || o === 8233 || fe.test(s)) for (let r = 0; r < s.length; r++) t += `\\u${s.charCodeAt(r).toString(16).padStart(4, "0")}`;else t += s;
  }
  return t;
}
function Cpa(e, {
  isRoot: isRoot,
  operatorSshInEnv = !1,
  askpassSource = "none",
  postSessionHook = !1,
  envHooksPath = !1
}) {
  let a = [];
  if (e.ignoredSystemHooksPath !== void 0) {
    let ignoredSystemHooksPath = e.ignoredSystemHooksPath;
    a.push(`[runner:warn] the system git config sets core.hooksPath=${Dme(ignoredSystemHooksPath.value)}, which is NOT applied inside lifecycle hooks because ${ignoredSystemHooksPath.reason}. ` + (isRoot ? "This runner runs as root, so no configuration file is out of the sessions' reach: export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment instead \u2014 and run the runner as an unprivileged user." : "Use an absolute path outside the runner's HOME/--base-dir in a root-owned file, naming a directory whose hook files are root-owned too (or export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment)."));
  }
  if (e.ignoredGlobalHooksPath !== void 0) a.push(`[runner:warn] the global git config sets core.hooksPath=${Dme(e.ignoredGlobalHooksPath)}, which is NOT applied inside lifecycle hooks (checkout / post-session): every session this runner hosts can write that file. Git run by those hooks takes core.hooksPath only from the system git config (git config --system) or from a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair exported in the runner's own environment; move it there if your hooks need it. The session's own git is unaffected.`);
  if (e.sshCommandScopes !== void 0 && !operatorSshInEnv) a.push(`[runner:warn] core.sshCommand is set in the ${e.sshCommandScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks uses plain ssh unless the runner's own environment sets GIT_SSH_COMMAND (or GIT_SSH). If your hooks reach git remotes over ssh and need that command (a deploy key, a jump host), copy its value into GIT_SSH_COMMAND in the runner's environment; if they do not, no action is needed. ` + (e.sshCommandScopes.includes("global") ? "Copy only a command you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.askPassScopes !== void 0 && askpassSource !== "own") a.push(`[runner:warn] core.askPass is set in the ${e.askPassScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks takes a credential-prompt program only from the runner's own environment, as GIT_ASKPASS (an SSH_ASKPASS there is handed on as GIT_ASKPASS) or as a core.askPass GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair. ` + (askpassSource === "handedOn" ? "Here hook git will use the SSH_ASKPASS program from the runner's environment in its place. " : "") + "If your hooks get https credentials from the program core.askPass names, copy its path into GIT_ASKPASS in the runner's environment; if they do not, no action is needed. " + (e.askPassScopes.includes("global") ? "Copy only a path you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.lfsFilterScopes !== void 0 && postSessionHook && e.hooksPath === void 0 && !envHooksPath) a.push(`[runner:warn] git-lfs is set up in the ${e.lfsFilterScopes.join(" and ")} git config and this runner has a post-session hook. Git run inside the runner's lifecycle hooks runs no repository or global git hooks, so git-lfs's pre-push hook does not run there and a plain "git push" from the post-session hook sends LFS pointers WITHOUT their objects. The runner cannot see whether your hook already handles this: in it, run "git-lfs push <remote> <branch>" BEFORE "git push" (or "git-lfs push --all <remote> <branch>" after it), or point core.hooksPath, ${isRoot ? "as" : "in the system git config or as"} a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment, at a root-owned directory that holds git-lfs's pre-push hook. The session's own git is unaffected.`);
  return a;
}
async function de(e, n, t) {
  let s = c(e, "git-hooks"),
    existingHooksPath;
  if (n[0] === "--file") existingHooksPath = await B(n, "core.hooksPath");else {
    let r = await F("core.hooksPath");
    existingHooksPath = r.global ?? r.system ?? "";
  }
  if (existingHooksPath !== "" && !J(existingHooksPath, s)) return t(`[runner:git] --configure-git: core.hooksPath already set (${Dme(existingHooksPath)}); skipping Co-authored-by hook install so existing hooks keep running for the session's own git (lifecycle ` + "hooks follow the system config / runner environment only \u2014 see " + "the lifecycle-hooks status line)"), {
    installed: !1,
    existingHooksPath: existingHooksPath
  };
  await G(s, {
    recursive: !0
  });
  for (let r of q) {
    let a = c(s, r);
    await P(a, content, {
      mode: 493
    }), await O(a, 493);
  }
  for (let r of ["commit-msg", "prepare-commit-msg"]) {
    let a = c(s, r);
    await P(a, content_2, {
      mode: 493
    }), await O(a, 493);
  }
  return await w("git", ["config", ...n, "--replace-all", "core.hooksPath", s], {
    windowsHide: !0
  }), t(`[runner:git] --configure-git: core.hooksPath=${s}`), {
    installed: !0
  };
}
var q = ["applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "reference-transaction", "fsmonitor-watchman", "pre-auto-gc", "post-rewrite", "sendemail-validate", "post-index-change"],
  content = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
[ -x "$local_hook" ] && exec "$local_hook" "$@"
exit 0
`,
  content_2 = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
if [ -x "$local_hook" ]; then
  "$local_hook" "$@" || exit $?
fi
email="$CCR_SESSION_ACCOUNT_EMAIL"
nl='
'
case "$email" in
  ''|*'<'*|*'>'*|*"$nl"*) email='' ;;
esac
if [ -n "$email" ] && printf %s "$email" | LC_ALL=C grep -q '[^ -~]'; then
  email=''
fi
if [ -n "$email" ]; then
  name="\${email%%@*}"
  git interpret-trailers --in-place \\
    --if-exists addIfDifferent \\
    --trailer "Co-authored-by: $name <$email>" "$1"
fi
exit 0
`;
function Q(e) {
  return e.replace(/'/g, "'\\''");
}
function me(e) {
  let n = !1,
    namespace,
    keyFile,
    o;
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    if (a === "-Y" && e[r + 1] === "sign") n = !0, r++;else if (a === "-n") namespace = e[++r];else if (a === "-f") keyFile = e[++r];else if (a.startsWith("-")) {
      if (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) r++;
    } else if (o === void 0) o = a;
  }
  if (!n) throw Error(`code-sign: only SSH-style signing (-Y sign) is supported; got: ${e.join(" ")}`);
  if (!o) throw Error("code-sign: no file specified to sign");
  return {
    bufferFile: m(o),
    namespace: namespace,
    keyFile: keyFile
  };
}
async function pe(e, n) {
  let t = n.env.CLAUDE_CODE_REMOTE_SESSION_ID || n.env.CLAUDE_RUNNER_SESSION_ID?.replace(/^session_/, "cse_"),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN = n.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN,
    o = (n.env.ANTHROPIC_BASE_URL || n.env.SESSION_INGRESS_URL || n.env.CLAUDE_RUNNER_API_BASE_URL || "").replace(/\/+$/, "");
  if (!t || !re.test(t)) throw Error("code-sign: CLAUDE_CODE_REMOTE_SESSION_ID (child) / CLAUDE_RUNNER_SESSION_ID (lifecycle hook) is unset or malformed \u2014 " + "is this process a descendant of a runner-spawned session or hook?");
  if (!CLAUDE_CODE_SESSION_ACCESS_TOKEN) throw Error("code-sign: CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset");
  if (!o) throw Error("code-sign: ANTHROPIC_BASE_URL (child) / CLAUDE_RUNNER_API_BASE_URL (lifecycle hook) is unset");
  let contents = await te(e.bufferFile, "utf8"),
    git_object_format = await ye(),
    body = JSON.stringify({
      contents: contents,
      source: {
        type: "git_repository"
      },
      git_object_format: git_object_format
    }),
    url = `${o}/v1/code/sessions/${t}/sign-commit`,
    f = await n.fetchFn(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-environment-runner-version": `shr-${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.319",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-11-05T18:14:18Z",
          GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION}`,
        authorization: `Bearer ${CLAUDE_CODE_SESSION_ACCESS_TOKEN}`
      },
      body: body,
      ...ba({
        url: url
      }),
      ...$A(void 0),
      signal: AbortSignal.timeout(30000)
    });
  if (!f.ok) {
    let d = await f.text().catch(() => "");
    throw Error(`code-sign: sign-commit returned HTTP ${f.status}` + (d ? `: ${Se(d, 200)}` : ""));
  }
  let y = await f.json();
  if (!y.signature) throw Error("code-sign: response missing signature");
  let l = `${e.bufferFile}.sig`;
  return await P(l, y.signature), l;
}
async function ye() {
  let {
    stdout: stdout_2,
    code: code
  } = await ut("git", ["rev-parse", "--show-object-format"], {
    useCwd: !1,
    stdin: "ignore",
    stderr: "ignore",
    maxBuffer: 1048576
  });
  return code === 0 && stdout_2.trim() === "sha256" ? "sha256" : "sha1";
}
function Se(e, n) {
  return e.length > n ? e.slice(0, n) + "\u2026" : e;
}
async function Rpa(e) {
  try {
    let n = me(e);
    await pe(n, {
      env: process.env,
      fetchFn: fetch
    }), process.exit(0);
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}
`), process.exit(1);
  }
}
export { Pqn, bpa, Spa, wpa, QIo, Oqn, lUr, dUr, Voa, Koa, kpa, vpa, Epa, Tpa, Dme, Cpa, Rpa };