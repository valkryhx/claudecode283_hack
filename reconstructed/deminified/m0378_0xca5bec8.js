// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { b } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { yi } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { execFile as Q } from "child_process";
import { constants as A } from "fs";
import { access as x, chmod as E, lstat as I, mkdir as G, readdir as Z, readFile as ee, readlink as ne, writeFile as k } from "fs/promises";
import { delimiter as te, dirname as _, isAbsolute as H, join as c, resolve as p, sep as T } from "path";
import { promisify as ie } from "util";
var w = ie(Q),
  oe = /^[a-zA-Z0-9_-]+$/,
  U = [2, 34];
function Xjt(e) {
  let n = /git version (\d+)\.(\d+)/.exec(e);
  if (!n) return null;
  return [Number(n[1]), Number(n[2])];
}
function se(e) {
  let n = Xjt(e);
  if (n === null) return null;
  let [i, o] = n,
    [t, s] = U;
  return i > t || i === t && o >= s;
}
async function wVo(e) {
  let stdout = (await w("git", ["--version"], {
      windowsHide: !0
    })).stdout,
    i = se(stdout);
  if (i === null) e.onStatus(`[runner:git] --configure-git: could not parse git version from "${stdout.trim()}"; proceeding without version check`);else if (!i) {
    let [d, u] = U;
    throw Error(`--configure-git requires git >= ${d}.${u} for SSH commit signing (found: ${stdout.trim()}). Upgrade git in your runner image, or omit --configure-git and manage git identity yourself`);
  }
  let o = c(e.baseDir, ".runner");
  await G(o, {
    recursive: !0
  });
  let shimPath = c(o, "code-sign"),
    s = c(o, "commit_signing_key.pub"),
    r = L(e.execPath);
  await k(shimPath, r, {
    mode: 493
  }), await E(shimPath, 493), await k(s, "");
  let g = [["user.name", "Claude"], ["user.email", "noreply@anthropic.com"], ["gpg.format", "ssh"], ["gpg.ssh.program", shimPath], ["user.signingkey", s], ["commit.gpgsign", "true"], ["tag.gpgsign", "true"], ["push.negotiate", "true"]],
    h = e.gitConfigPath ? ["--file", e.gitConfigPath] : ["--global"];
  for (let [d, u] of g) await w("git", ["config", ...h, "--replace-all", d, u], {
    windowsHide: !0
  });
  e.onStatus(`[runner:git] --configure-git: identity=Claude <noreply@anthropic.com>, gpg.ssh.program=${shimPath}`);
  let f = await he(o, h, e.onStatus);
  return f.installed ? {
    shimPath: shimPath
  } : {
    shimPath: shimPath,
    operatorHooksPath: f.existingHooksPath
  };
}
function L(e) {
  return `#!/bin/sh
BIN="$CLAUDE_RUNNER_CLAUDE_BIN"
[ -n "$BIN" ] || BIN='${z(e)}'
exec "$BIN" self-hosted-runner code-sign "$@"
`;
}
function vVo(e, n) {
  let i = c(e, ".runner");
  return [{
    path: c(i, "code-sign"),
    content: L(n),
    mode: 493
  }, {
    path: c(i, "commit_signing_key.pub"),
    content: "",
    mode: 420
  }];
}
function M9n(e) {
  return Jjt(c(e, ".runner"));
}
function Jjt(e) {
  return [["user.name", "Claude"], ["user.email", "noreply@anthropic.com"], ["user.signingkey", c(e, "commit_signing_key.pub")], ["gpg.format", "ssh"], ["gpg.ssh.program", c(e, "code-sign")], ["commit.gpgsign", "true"], ["tag.gpgsign", "true"], ["push.negotiate", "true"], ["core.hooksPath", c(e, "git-hooks")]];
}
function Kyn(e, n, i) {
  let o = c(n, ".runner") + T;
  return e.map(item => {
    if (!item.path.startsWith(o)) throw Error("relocateConfigureGitArtifacts: artifact path is not under {baseDir}/.runner/");
    return {
      ...item,
      path: c(i, item.path.slice(o.length))
    };
  });
}
async function Yyn() {
  try {
    let {
      stdout: stdout_2
    } = await w("git", ["--version"], {
      windowsHide: !0
    });
    return stdout_2;
  } catch {
    return "";
  }
}
var ZBo = `#!/bin/sh
test "$1" = get || exit 0
printf "username=unused\\npassword=%s\\n" "$CLAUDE_CODE_SESSION_ACCESS_TOKEN"
`;
function e1o(e) {
  return c(e, ".runner", "git-proxy-cred");
}
function kVo(e) {
  let n = c(e, ".runner", "git-hooks");
  return [...Y.map(item => ({
    path: c(n, item),
    content: content
  })), ...["commit-msg", "prepare-commit-msg"].map(item => ({
    path: c(n, item),
    content: content_2
  }))];
}
async function EVo(e) {
  let n = e.apiBaseUrl.replace(/\/+$/, ""),
    i;
  try {
    i = new URL(n).host;
  } catch {
    throw Error(`--use-anthropic-git-proxy: apiBaseUrl is not a valid URL: ${n}`);
  }
  let o = c(e.baseDir, ".runner");
  await G(o, {
    recursive: !0
  });
  let t = e1o(e.baseDir);
  await k(t, ZBo, {
    mode: 448
  }), await E(t, 448);
  let s = e.gitConfigPath ? ["--file", e.gitConfigPath] : ["--global"],
    r = [[`credential.https://${i}.helper`, `!'${z(t)}'`], [`credential.https://${i}.useHttpPath`, "false"], [`credential.https://${i}.username`, "unused"], [`http.https://${i}/.proactiveAuth`, "basic"]];
  for (let [g, h] of r) await w("git", ["config", ...s, "--replace-all", g, h], {
    windowsHide: !0
  });
  return e.onStatus(`[runner:git] --use-anthropic-git-proxy: credential helper registered for https://${i} (${t})`), n;
}
var timeout = 1e4;
function M(e, n, env) {
  return w("git", ["config", ...e, "--includes", "--type=path", "--get", n], {
    windowsHide: !0,
    timeout: timeout,
    ...(env && {
      env: env
    })
  }).then(o => o.stdout.trim(), () => "");
}
async function F(e, n) {
  let [i, global] = await Promise.all([ae(["--system"], e, n), M(["--global"], e, n)]);
  return {
    ...(i.value !== "" && {
      system: i.value
    }),
    ...(i.origin !== void 0 && {
      systemOrigin: i.origin
    }),
    ...(global !== "" && {
      global: global
    })
  };
}
async function re(e, n) {
  let {
    system: system,
    global: global_2
  } = await F(e, n);
  return [...(system !== void 0 ? ["system"] : []), ...(global_2 !== void 0 ? ["global"] : [])];
}
async function ae(e, n, env_2) {
  let o = await w("git", ["config", ...e, "--includes", "--show-origin", "-z", "--type=path", "--get", n], {
      cwd: "/",
      windowsHide: !0,
      timeout: timeout,
      ...(env_2 && {
        env: env_2
      })
    }).then(s => s.stdout, () => ""),
    t = o.indexOf("\x00");
  if (t < 0) return {
    value: o.trim()
  };
  return {
    value: o.slice(t + 1).replace(/\0$/, "").trim(),
    origin: K(o.slice(0, t))
  };
}
var K = e => e.startsWith("file:") ? e.slice(5) : e,
  j = e => e.length > 1 ? e.replace(/[\\/]+$/, "") : e,
  N = e => H(e) && p(e) === j(e);
async function ce(env_3) {
  let n;
  try {
    n = (await w("git", ["config", "--system", "--includes", "--show-origin", "-z", "--list"], {
      cwd: "/",
      windowsHide: !0,
      timeout: timeout,
      maxBuffer: 4194304,
      ...(env_3 && {
        env: env_3
      })
    })).stdout;
  } catch (error) {
    let s = error,
      r = v(error) ?? (s !== null && typeof s === "object" ? typeof s.signal === "string" ? `killed by ${s.signal}${s.killed === !0 ? ", timed out" : ""}` : s.code !== void 0 ? `exit ${String(s.code)}` : "error" : "error");
    return {
      files: [],
      unverifiable: `the system configuration could not be listed (${r})`
    };
  }
  let i = n.split("\x00"),
    files = [];
  for (let t = 0; t + 1 < i.length; t += 2) {
    let s = K(i[t]);
    if (!i[t].startsWith("file:") || !N(s)) return {
      files: files,
      unverifiable: `git reports a source that is not a plainly spelled absolute file path (${n5(s)}; write [include] paths absolute, without '.' or '..' components)`
    };
    if (!files.includes(s)) files.push(s);
  }
  return {
    files: files
  };
}
async function V(e) {
  let n = e;
  for (;;) try {
    return await x(n, A.W_OK), !0;
  } catch (error) {
    if (B(error)) {
      let t = _(n);
      if (t === n) return !1;
      n = t;
      continue;
    }
    let o = process.getuid?.();
    if (o !== void 0 && o !== 0) try {
      if ((await I(n)).uid === o) return !0;
    } catch {}
    return !1;
  }
}
var O = (e, n) => n !== void 0 && n !== "" && (p(e) === p(n) || p(e).startsWith(p(n) + T));
async function TVo(e) {
  let n = e?.sessionReachable ?? V,
    i = e?.env ? e.env.HOME : a.HOME,
    o = e?.env ? e.env.PATH : a.PATH,
    skipped = [],
    s = (o ?? "").split(te).filter(item => {
      if (item === "" || !H(item)) return !1;
      if (O(item, i) || O(item, e?.baseDir)) return skipped.push(item), !1;
      return !0;
    }),
    r = async u => {
      for (let m of s) {
        let l = c(m, u);
        try {
          await x(l, A.X_OK);
        } catch {
          continue;
        }
        if ((await y(l, n)) !== void 0 || (await y(m, n)) !== void 0) {
          skipped.push(l);
          continue;
        }
        return l;
      }
      return;
    },
    inert = "/nonexistent-gpg";
  for (let u of ["/bin/false", "/usr/bin/false"]) {
    try {
      await x(u, A.X_OK);
    } catch {
      continue;
    }
    if ((await y(u, n)) === void 0 && (await y(_(u), n)) === void 0) {
      inert = u;
      break;
    }
  }
  let [h, f, d] = await Promise.all([r("gpg"), r("gpgsm"), r("ssh-keygen")]);
  return {
    gpg: h ?? inert,
    gpgsm: f ?? inert,
    sshKeygen: d ?? inert,
    inert: inert,
    skipped: skipped
  };
}
function W(e, n) {
  let i = o => p(o).replace(/[\\/]+$/, "");
  return n !== void 0 && i(e) === i(n) || i(e).endsWith(c(T + ".runner", "git-hooks"));
}
async function CVo(e) {
  let n = e?.sessionReachable ?? V,
    i = e?.systemConfigFiles ?? ce,
    o = e?.env ? e.env.HOME : a.HOME;
  function t(l) {
    return e?.lifecycleHooks ? re(l, e.env) : [];
  }
  let [{
      system: s,
      systemOrigin: systemOrigin,
      global: g
    }, sshCommandScopes, askPassScopes, lfsFilterScopes] = await Promise.all([F("core.hooksPath", e?.env), t("core.sshCommand"), t("core.askPass"), t("filter.lfs.clean")]),
    u = l => l !== void 0 && !W(l),
    m = {
      ...(u(g) && {
        ignoredGlobalHooksPath: g
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
  if (u(s)) {
    let reason;
    if (systemOrigin === void 0 || !N(systemOrigin)) reason = `git does not report a plainly spelled absolute file path as its origin (${n5(systemOrigin ?? "")}) \u2014 cannot verify it is out of the sessions' reach`;else {
      let S = await i(e?.env);
      if (S.unverifiable !== void 0) reason = `${S.unverifiable} \u2014 cannot verify it is out of the sessions' reach`;else if (!S.files.includes(systemOrigin)) reason = `the system configuration changed while it was being read (${n5(systemOrigin)} is no longer among its files) \u2014 cannot verify it is out of the sessions' reach`;else for (let P of S.files) {
        let D = await I(P).then(() => {
            return;
          }, X => v(X) ?? "error"),
          C = D !== void 0 ? `is listed by git but cannot be found as reported (${D}) \u2014 cannot verify it is out of the sessions' reach` : await y(P, n);
        if (C !== void 0) {
          reason = P === systemOrigin ? `it comes from ${n5(P)}, which ${C}` : `one of the files the system configuration reads, ${n5(P)}, ${C}`;
          break;
        }
      }
    }
    if (reason === void 0) if (!H(s)) reason = "it is relative (git would resolve it inside each repository)";else if (!N(s)) reason = `it is not spelled as a plain absolute path (${n5(s)}) \u2014 write it without '.' or '..' components`;else if (O(s, o) || O(s, e?.baseDir)) reason = "it points under the runner HOME / --base-dir, which sessions can write";else {
      let S = await y(s, n);
      reason = S !== void 0 ? `its target directory ${S}` : await le(s, n);
    }
    if (reason === void 0) m.hooksPath = s;else m.ignoredSystemHooksPath = {
      value: s,
      reason: reason
    };
  }
  return m;
}
var hops = 32;
async function le(e, n) {
  let i;
  try {
    i = (await Z(e)).sort();
  } catch (error) {
    return B(error) ? "its target directory does not exist" : `its target directory cannot be listed (${v(error) ?? "error"})`;
  }
  for (let o of i) {
    let t = await y(c(e, o), n);
    if (t !== void 0) return `${n5(o)} in it ${t}`;
  }
  return;
}
async function y(e, n, i = {
  hops: hops
}) {
  let o = j(e),
    t = o;
  for (;;) {
    if (await n(t)) return t === o ? "is writable by (or belongs to) this runner's user" : `resolves to ${n5(t)}, which this runner's user can write or owns`;
    let s;
    try {
      s = (await I(t)).isSymbolicLink();
    } catch (error) {
      if (t === o) {
        if (B(error)) return;
        return `cannot be examined (${v(error) ?? "error"})`;
      }
      return `is a link that does not resolve (${n5(t)})`;
    }
    if (!s) return;
    if (i.hops <= 0) return "is a link with too many levels of indirection";
    i.hops--;
    let r;
    try {
      r = await ne(t);
    } catch (error) {
      return `is a link that cannot be read (${v(error) ?? "error"})`;
    }
    t = p(_(t), r);
    let g = await y(_(t), n, i);
    if (g !== void 0) return i.hops <= 0 ? `is a link with too many levels of indirection (through ${n5(_(t))})` : `resolves into ${n5(_(t))}, a directory that ${g} (the target could be replaced)`;
  }
}
var ge = /^\p{Cf}$/u;
function n5(e) {
  let n = b(e),
    i = "";
  for (let o of n) {
    let t = o.codePointAt(0);
    if (t >= 127 && t <= 159 || t === 8232 || t === 8233 || ge.test(o)) for (let s = 0; s < o.length; s++) i += `\\u${o.charCodeAt(s).toString(16).padStart(4, "0")}`;else i += o;
  }
  return i;
}
function RVo(e, {
  isRoot: isRoot,
  operatorSshInEnv = !1,
  askpassSource = "none",
  postSessionHook = !1,
  envHooksPath = !1
}) {
  let r = [];
  if (e.ignoredSystemHooksPath !== void 0) {
    let ignoredSystemHooksPath = e.ignoredSystemHooksPath;
    r.push(`[runner:warn] the system git config sets core.hooksPath=${n5(ignoredSystemHooksPath.value)}, which is NOT applied inside lifecycle hooks because ${ignoredSystemHooksPath.reason}. ` + (isRoot ? "This runner runs as root, so no configuration file is out of the sessions' reach: export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment instead \u2014 and run the runner as an unprivileged user." : "Use an absolute path outside the runner's HOME/--base-dir in a root-owned file, naming a directory whose hook files are root-owned too (or export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment)."));
  }
  if (e.ignoredGlobalHooksPath !== void 0) r.push(`[runner:warn] the global git config sets core.hooksPath=${n5(e.ignoredGlobalHooksPath)}, which is NOT applied inside lifecycle hooks (checkout / post-session): every session this runner hosts can write that file. Git run by those hooks takes core.hooksPath only from the system git config (git config --system) or from a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair exported in the runner's own environment; move it there if your hooks need it. The session's own git is unaffected.`);
  if (e.sshCommandScopes !== void 0 && !operatorSshInEnv) r.push(`[runner:warn] core.sshCommand is set in the ${e.sshCommandScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks uses plain ssh unless the runner's own environment sets GIT_SSH_COMMAND (or GIT_SSH). If your hooks reach git remotes over ssh and need that command (a deploy key, a jump host), copy its value into GIT_SSH_COMMAND in the runner's environment; if they do not, no action is needed. ` + (e.sshCommandScopes.includes("global") ? "Copy only a command you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.askPassScopes !== void 0 && askpassSource !== "own") r.push(`[runner:warn] core.askPass is set in the ${e.askPassScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks takes a credential-prompt program only from the runner's own environment, as GIT_ASKPASS (an SSH_ASKPASS there is handed on as GIT_ASKPASS) or as a core.askPass GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair. ` + (askpassSource === "handedOn" ? "Here hook git will use the SSH_ASKPASS program from the runner's environment in its place. " : "") + "If your hooks get https credentials from the program core.askPass names, copy its path into GIT_ASKPASS in the runner's environment; if they do not, no action is needed. " + (e.askPassScopes.includes("global") ? "Copy only a path you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.lfsFilterScopes !== void 0 && postSessionHook && e.hooksPath === void 0 && !envHooksPath) r.push(`[runner:warn] git-lfs is set up in the ${e.lfsFilterScopes.join(" and ")} git config and this runner has a post-session hook. Git run inside the runner's lifecycle hooks runs no repository or global git hooks, so git-lfs's pre-push hook does not run there and a plain "git push" from the post-session hook sends LFS pointers WITHOUT their objects. The runner cannot see whether your hook already handles this: in it, run "git-lfs push <remote> <branch>" BEFORE "git push" (or "git-lfs push --all <remote> <branch>" after it), or point core.hooksPath, ${isRoot ? "as" : "in the system git config or as"} a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment, at a root-owned directory that holds git-lfs's pre-push hook. The session's own git is unaffected.`);
  return r;
}
async function he(e, n, i) {
  let o = c(e, "git-hooks"),
    existingHooksPath;
  if (n[0] === "--file") existingHooksPath = await M(n, "core.hooksPath");else {
    let s = await F("core.hooksPath");
    existingHooksPath = s.global ?? s.system ?? "";
  }
  if (existingHooksPath !== "" && !W(existingHooksPath, o)) return i(`[runner:git] --configure-git: core.hooksPath already set (${n5(existingHooksPath)}); skipping Co-authored-by hook install so existing hooks keep running for the session's own git (lifecycle ` + "hooks follow the system config / runner environment only \u2014 see " + "the lifecycle-hooks status line)"), {
    installed: !1,
    existingHooksPath: existingHooksPath
  };
  await G(o, {
    recursive: !0
  });
  for (let s of Y) {
    let r = c(o, s);
    await k(r, content, {
      mode: 493
    }), await E(r, 493);
  }
  for (let s of ["commit-msg", "prepare-commit-msg"]) {
    let r = c(o, s);
    await k(r, content_2, {
      mode: 493
    }), await E(r, 493);
  }
  return await w("git", ["config", ...n, "--replace-all", "core.hooksPath", o], {
    windowsHide: !0
  }), i(`[runner:git] --configure-git: core.hooksPath=${o}`), {
    installed: !0
  };
}
var Y = ["applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "reference-transaction", "fsmonitor-watchman", "pre-auto-gc", "post-rewrite", "sendemail-validate", "post-index-change"],
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
function z(e) {
  return e.replace(/'/g, "'\\''");
}
function fe(e) {
  let n = !1,
    namespace,
    keyFile,
    t;
  for (let s = 0; s < e.length; s++) {
    let r = e[s];
    if (r === "-Y" && e[s + 1] === "sign") n = !0, s++;else if (r === "-n") namespace = e[++s];else if (r === "-f") keyFile = e[++s];else if (r.startsWith("-")) {
      if (e[s + 1] !== void 0 && !e[s + 1].startsWith("-")) s++;
    } else if (t === void 0) t = r;
  }
  if (!n) throw Error(`code-sign: only SSH-style signing (-Y sign) is supported; got: ${e.join(" ")}`);
  if (!t) throw Error("code-sign: no file specified to sign");
  return {
    bufferFile: p(t),
    namespace: namespace,
    keyFile: keyFile
  };
}
async function de(e, n) {
  let i = n.env.CLAUDE_CODE_REMOTE_SESSION_ID || n.env.CLAUDE_RUNNER_SESSION_ID?.replace(/^session_/, "cse_"),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN = n.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN,
    t = (n.env.ANTHROPIC_BASE_URL || n.env.SESSION_INGRESS_URL || n.env.CLAUDE_RUNNER_API_BASE_URL || "").replace(/\/+$/, "");
  if (!i || !oe.test(i)) throw Error("code-sign: CLAUDE_CODE_REMOTE_SESSION_ID (child) / CLAUDE_RUNNER_SESSION_ID (lifecycle hook) is unset or malformed \u2014 " + "is this process a descendant of a runner-spawned session or hook?");
  if (!CLAUDE_CODE_SESSION_ACCESS_TOKEN) throw Error("code-sign: CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset");
  if (!t) throw Error("code-sign: ANTHROPIC_BASE_URL (child) / CLAUDE_RUNNER_API_BASE_URL (lifecycle hook) is unset");
  let contents = await ee(e.bufferFile, "utf8"),
    git_object_format = await me(),
    body = JSON.stringify({
      contents: contents,
      source: {
        type: "git_repository"
      },
      git_object_format: git_object_format
    }),
    url = `${t}/v1/code/sessions/${i}/sign-commit`,
    f = await n.fetchFn(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-environment-runner-version": `shr-${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.283",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-25T00:44:42Z",
          GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
          HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "win32"
        }.VERSION}`,
        authorization: `Bearer ${CLAUDE_CODE_SESSION_ACCESS_TOKEN}`
      },
      body: body,
      ...yi({
        url: url
      }),
      signal: AbortSignal.timeout(30000)
    });
  if (!f.ok) {
    let m = await f.text().catch(() => "");
    throw Error(`code-sign: sign-commit returned HTTP ${f.status}` + (m ? `: ${pe(m, 200)}` : ""));
  }
  let d = await f.json();
  if (!d.signature) throw Error("code-sign: response missing signature");
  let u = `${e.bufferFile}.sig`;
  return await k(u, d.signature), u;
}
async function me() {
  let {
    stdout: stdout_3,
    code: code
  } = await tt("git", ["rev-parse", "--show-object-format"], {
    useCwd: !1,
    stdin: "ignore",
    stderr: "ignore",
    maxBuffer: 1048576
  });
  return code === 0 && stdout_3.trim() === "sha256" ? "sha256" : "sha1";
}
function pe(e, n) {
  return e.length > n ? e.slice(0, n) + "\u2026" : e;
}
async function AVo(e) {
  try {
    let n = fe(e);
    await de(n, {
      env: process.env,
      fetchFn: fetch
    }), process.exit(0);
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}
`), process.exit(1);
  }
}
export { Xjt, wVo, vVo, M9n, Jjt, Kyn, Yyn, ZBo, e1o, kVo, EVo, TVo, CVo, n5, RVo, AVo };