// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, Ml, Gl } from "B:/~BUN/root/chunk-game8aqv.js";
import { f, de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { th, Oc, ca, RG, Jv } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { sa, fY, x5, vt, t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { Pa, tt, Wn, Il, oy } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Nn } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { PC, kj, l$e, mHr, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x, vnt } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Ds, Ape, qie, Cc } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ld } from "B:/~BUN/root/chunk-rr294jrm.js";
import { ro, u0 } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { CMr } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { fo } from "B:/~BUN/root/chunk-46ahshhq.js";
import { yn, VHe as GIT_ALLOW_PROTOCOL, gae, USt, RFr, ys } from "B:/~BUN/root/chunk-88zb3509.js";
import { pwe, A_, S2n, CH } from "B:/~BUN/root/chunk-1g25msn4.js";
import { ePo, tPo, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { yi, LA } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Ga, XWn } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { FFe, tc } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { dt } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { bBs, ent } from "B:/~BUN/root/chunk-1x03q1j7.js";
import { es } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { ap } from "B:/~BUN/root/chunk-m749kjym.js";
import { gw, DI } from "B:/~BUN/root/chunk-0zd0vn8w.js";
import { jDt, Nhs, jLi, Fhs, ySr, Eze, Bco, WLi, Hhs, dDn, $hs, cDn, pQt, Uhs, Tze, WDt, Cze, zLi, uDn, _Sr, O0e, gy, JXe, Bhs, mQt, bSr, Whs, e_e } from "B:/~BUN/root/chunk-3v5ng1y2.js";
import { qce, l0t, p_e, ywr } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { Hm, kCe } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { jEe, CPn as GIT_CONFIG_GLOBAL_2 } from "B:/~BUN/root/chunk-7q19e5st.js";
import { nys } from "B:/~BUN/root/chunk-56gmm7gd.js";
import { tLe, SHi } from "B:/~BUN/root/chunk-ymawhbhz.js";
import { os } from "B:/~BUN/root/chunk-kj33sgq2.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { Ca } from "B:/~BUN/root/chunk-65zedn3n.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { U, L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { access as Kr, lstat as Q, mkdir as _n, mkdtemp as Yr, open as Ce, readdir as we, readFile as bt, realpath as pe, rm as An, stat as Tt, symlink as Xr, writeFile as cn } from "fs/promises";
import { closeSync as Jr, constants as Fe, lstatSync as kn, openSync as qr, readdirSync as At, readlinkSync as kt, readSync as zr, realpathSync as It, statfsSync as Zr } from "fs";
import { devNull as Qr, homedir as Oe, release as ei, tmpdir as ni, userInfo as ti } from "os";
import { basename as be, delimiter as ye, dirname as Z, isAbsolute as z, join as S, parse as Ye, relative as hn, resolve as Ve, sep as ne } from "path";
import { realpathSync as kr } from "fs";
import { isAbsolute as sn, parse as Ir, resolve as Cr } from "path";
var Pr = /[*?[\]{}]/;
function Vdo(e) {
  if (!sn(e)) return null;
  let n = x() === "windows",
    r = e.split(n ? /[\\/]/ : "/"),
    o = r.findIndex(item => Pr.test(item)),
    c = (o === -1 ? r : r.slice(0, o)).join(n ? "\\" : "/").replace(n ? /[\\/]+$/ : /\/+$/, "");
  if (c === "") return Ir(e).root || "/";
  return n && /^[A-Za-z]:$/.test(c) ? `${c}\\` : c;
}
function Nr(e) {
  let n = x() === "windows" ? /^\/([A-Za-z])(?=\/|$)/.exec(e) : null;
  return n === null ? e : `${n[1].toUpperCase()}:${e.slice(2) || "\\"}`;
}
function zn(e, n) {
  let r = Nr(e);
  if (r !== e) return L([...on(r, n), ...on(e, n)]);
  return on(e, n);
}
function on(e, n) {
  let r = e.startsWith("~") || sn(e) ? e : Cr(n, e),
    o = ySr(pQt(r, n, {
      pattern: !0
    }), n, e_e(), {
      pattern: !0
    }),
    {
      spelling: spelling,
      verdict: verdict
    } = o;
  if (verdict !== "local") return t(`[sandboxReach] write root ${r} cannot be vouched for (${verdict}): counted as every volume`, {
    level: "warn"
  }), [...Cze(verdict === "foreign" ? {
    ...o,
    verdict: "opaque"
  } : o, n)];
  let u = Vdo(spelling),
    g;
  try {
    g = Vdo(gw(spelling));
  } catch {
    g = null;
  }
  let m = [u, g].filter(item => item !== null),
    h = m.flatMap(item => {
      try {
        let E = kr(item);
        return sn(E) ? [E] : [];
      } catch {
        return [];
      }
    });
  return L([...m, ...h]);
}
function MTe(e, n, r) {
  let o;
  try {
    o = r === void 0 ? Ga(e) : r;
  } catch {
    return [];
  }
  let s = [];
  for (let c of o?.permissions?.allow ?? []) try {
    let u = qce(c);
    if (u.toolName === dt && u.ruleContent) s.push(l0t(u.ruleContent, e));
  } catch {}
  for (let c of o?.sandbox?.filesystem?.allowWrite ?? []) try {
    s.push(p_e(c, e));
  } catch {}
  for (let c of o?.permissions?.additionalDirectories ?? []) try {
    s.push(mt(c, n));
  } catch {}
  return s;
}
function dze(e) {
  let n = [Hm(), kCe()];
  try {
    n.push(...DI());
  } catch {}
  try {
    let r = ywr(e);
    if (r) n.push(r);
  } catch {}
  for (let r of Gl()) try {
    n.push(mt(r, e));
  } catch {}
  return L(n.flatMap(item => zn(item, e)));
}
function DTe(e, n, r) {
  return L((r ?? MTe(n, e)).flatMap(item => zn(item, e)));
}
function SMn(e) {
  return L([...dze(e), ...yi.flatMap(item => DTe(e, item, null))]);
}
var Gr = LA;
function an(e) {
  let n = Gr.map(r => ({
    source: r,
    read: Dr(r)
  }));
  return n.some(({
    read: read
  }) => read === "unreadable") ? "unreadable" : L(n.flatMap(({
    source: source,
    read: read_2
  }) => read_2 === "unreadable" ? [] : DTe(e, source, read_2.flatMap(item => MTe(source, e, item)))));
}
function Dr(e) {
  try {
    let n = XWn(e);
    if (n.kind === "unreadable" || n.kind === "unreadable_for_now") return "unreadable";
    if (n.kind === "in_effect") return [n.settings];
    return "unreadable";
  } catch {
    return "unreadable";
  }
}
var jft = ["PATH", "PYTHONPATH", "NODE_PATH", "RUBYLIB", "PERL5LIB", "PERLLIB", "GEM_PATH", "CLASSPATH", "DYLD_LIBRARY_PATH", "DYLD_FRAMEWORK_PATH", "LD_LIBRARY_PATH", "LIBRARY_PATH", "CPATH", "C_INCLUDE_PATH", "CPLUS_INCLUDE_PATH", "R_LIBS", "R_LIBS_USER", "R_LIBS_SITE"],
  pms = new Set(["GOFLAGS", "RUSTFLAGS", "GIT_EDITOR", "GIT_SEQUENCE_EDITOR", "GIT_EXTERNAL_DIFF", "GIT_PROXY_COMMAND", "SUDO_ASKPASS", "ZDOTDIR", "NULLCMD", "READNULLCMD", "CDPATH", "GCONV_PATH", "NLSPATH", "DOTNET_STARTUP_HOOKS", "npm_config_node_options", "NPM_CONFIG_NODE_OPTIONS", "LESSOPEN", "LESSCLOSE", "MANPAGER", "MAVEN_OPTS", "MAVEN_ARGS", "MAVEN_CONFIG", "ANT_OPTS", "ANT_ARGS", "GRADLE_OPTS", "JAVA_OPTS", "JVM_OPTS", "LEIN_JVM_OPTS", "ES_JAVA_OPTS", "SBT_OPTS", "SONAR_SCANNER_OPTS", "SONAR_SCANNER_JAVA_OPTS", "MAKEFLAGS", "GNUMAKEFLAGS", "MFLAGS", "MAKEFILES", "AWKPATH", "AWKLIBPATH", "DEVELOPER_DIR", "CFLAGS", "CXXFLAGS", "CPPFLAGS", "LDFLAGS", "LDLIBS", "CC", "CXX", "CPP", "MAKE", "AR", "AS", "LD", "LEX", "YACC", "RANLIB", "ARFLAGS", "RANLIBFLAGS", "NM", "STRIP", "OBJCOPY", "OBJDUMP", "PKG_CONFIG", "FC", "F77", "FFLAGS", "FCFLAGS", "CGO_CFLAGS", "CGO_CPPFLAGS", "CGO_CXXFLAGS", "CGO_FFLAGS", "CGO_LDFLAGS", "HOST_CC", "HOST_CXX", "HOST_AR", "HOST_RANLIB", "HOST_ARFLAGS", "HOST_CFLAGS", "HOST_CXXFLAGS", "TARGET_RANLIB", "TARGET_ARFLAGS", "TARGET_CC", "TARGET_CXX", "TARGET_AR", "TARGET_CFLAGS", "TARGET_CXXFLAGS", "GCC_EXEC_PREFIX", "COMPILER_PATH", "DEPENDENCIES_OUTPUT", "SUNPRO_DEPENDENCIES", "GOAUTH", "GOTOOLCHAIN", "OPENSSL_ENGINES", "SHELLOPTS", "BASHOPTS", "PS4", "PROMPT_COMMAND", "GIT_SSH_COMMAND", "GIT_SSH", "GIT_EXEC_PATH", "GIT_ASKPASS", "SSH_ASKPASS", "GIT_PAGER", "PAGER", "EDITOR", "VISUAL", "BROWSER", "PYTHONWARNINGS", "PYTHONBREAKPOINT", "PERL5DB", "NODE_REPL_EXTERNAL_MODULE", "JAVA_TOOL_OPTIONS", "_JAVA_OPTIONS", "JDK_JAVA_OPTIONS", "IBM_JAVA_OPTIONS", "OPENJ9_JAVA_OPTIONS", "NODE_OPTIONS", "NODE_COMPILE_CACHE", "PYTHONSTARTUP", "PYTHONHOME", "PYTHONUSERBASE", "BASH_ENV", "ENV", "PERL5OPT", "RUBYOPT", "GEM_HOME", "RUBYGEMS_GEMDEPS", "BUNDLE_GEMFILE", "OPENSSL_CONF", "OPENSSL_CONF_INCLUDE", "OPENSSL_MODULES", "DYLD_INSERT_LIBRARIES", "LD_PRELOAD", "LD_AUDIT", "BUN_OPTIONS", "npm_config_script_shell", "NPM_CONFIG_SCRIPT_SHELL", "RUSTC", "RUSTC_WRAPPER", "RUSTC_WORKSPACE_WRAPPER", "RUSTDOC", "CARGO_BUILD_RUSTC", "CARGO_BUILD_RUSTC_WRAPPER", "CARGO_BUILD_RUSTC_WORKSPACE_WRAPPER", "CARGO_BUILD_RUSTDOC", "CARGO_BUILD_RUSTFLAGS", "RUSTDOCFLAGS", "CARGO_BUILD_RUSTDOCFLAGS", "CARGO_ENCODED_RUSTDOCFLAGS", "CARGO_ENCODED_RUSTFLAGS", "GOROOT", "PSModulePath", "PSMODULEPATH", "JAVA_HOME", "JAVACMD", "JDK_HOME", "DOTNET_ROOT", "COREPACK_HOME", "VIRTUAL_ENV", "CONDA_PREFIX", "PYENV_ROOT", "PYENV_VERSION", "VOLTA_HOME", "ASDF_DIR", "ASDF_DATA_DIR", "RBENV_ROOT", "RBENV_VERSION", "NODENV_ROOT", "NODENV_VERSION", "GOENV_ROOT", "GOENV_VERSION", "JENV_ROOT", "JENV_VERSION", "PLENV_ROOT", "PLENV_VERSION", "PERL5SHELL", "RUBYSHELL", "NODE_V8_COVERAGE", "NODE_REDIRECT_WARNINGS", "AWS_PAGER", "GH_PAGER", "CLOUDSDK_PYTHON", "CLOUDSDK_PYTHON_ARGS", "CLOUDSDK_GSUTIL_PYTHON", "CLOUDSDK_BQ_PYTHON", "UV_PYTHON", "GH_BROWSER", "SOPS_GPG_EXEC", "RSYNC_RSH", "CVS_RSH", "TAR_OPTIONS", "DOCKER_CLI_PLUGIN_EXTRA_DIRS", "R_PROFILE", "R_PROFILE_USER", "R_ENVIRON", "R_ENVIRON_USER"]),
  dn = new Set(["GOROOT", "JAVA_HOME", "JDK_HOME", "DOTNET_ROOT", "COREPACK_HOME", "VIRTUAL_ENV", "CONDA_PREFIX", "PYENV_ROOT", "VOLTA_HOME", "ASDF_DIR", "ASDF_DATA_DIR", "RBENV_ROOT", "NODENV_ROOT", "GOENV_ROOT", "JENV_ROOT", "PLENV_ROOT", "ZDOTDIR"]),
  Lr = new Set(["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "JAVACMD", "CLOUDSDK_PYTHON", "CLOUDSDK_GSUTIL_PYTHON", "CLOUDSDK_BQ_PYTHON", "UV_PYTHON", "SOPS_GPG_EXEC", "R_PROFILE", "R_PROFILE_USER", "R_ENVIRON", "R_ENVIRON_USER"]);
function Zn(e) {
  let n = e.toUpperCase().replace(/-/g, "_");
  return dn.has(n) ? "directory" : Lr.has(n) ? "file" : null;
}
var vr = /^(?:DYLD_|LD_|BASH_FUNC_|GIT_CONFIG_|LUA_|TF_CLI_ARGS|CARGO_ALIAS_|CARGO_TARGET_[A-Z0-9_]+_(?:RUNNER|LINKER|RUSTFLAGS|RUSTDOCFLAGS)$|(?:CC|CXX|AR|RANLIB|(?:AR|RANLIB)FLAGS|FC?FLAGS|CFLAGS|CXXFLAGS|LDFLAGS)_(?:X86_64|I[3-6]86|AARCH64|ARM|RISCV|WASM|POWERPC|S390X|MIPS|SPARC|LOONGARCH|THUMB)[A-Z0-9_-]*$|[A-Z0-9][A-Z0-9_]*_(?:EXTERNAL_DIFF|PAGER|EDITOR)$)/,
  Fr = new Set([...pms].map(item => item.toUpperCase()));
function cze(e) {
  return xr.has(e.toUpperCase().replace(/-/g, "_"));
}
var xr = new Set(jft);
function LTe(e) {
  let n = e.toUpperCase().replace(/-/g, "_");
  return Fr.has(n) || vr.test(n);
}
var L0i = "git's own message is not shown, because it can quote private files";
function C0e(e) {
  return e.withheldStderr?.() ?? e.stderr;
}
function ln(e) {
  let stderr = e.stderr;
  return stderr === "" ? e : {
    ...e,
    stderr: "git's own message is not shown, because it can quote private files",
    withheldStderr: () => stderr
  };
}
import { randomBytes as Hr } from "crypto";
import { constants as ke } from "fs";
import { open as Mr, unlink as $r } from "fs/promises";
import { join as Br } from "path";
var N7t = {
  GIT_LITERAL_PATHSPECS: "1",
  GIT_GLOB_PATHSPECS: "0",
  GIT_NOGLOB_PATHSPECS: "0",
  GIT_ICASE_PATHSPECS: "0"
};
function Qn(e) {
  return `"${e.replace(/["\\]/g, n => `\\${n}`)}"`;
}
var Ur = 16384;
function kbr(e) {
  return e.reduce((acc, item) => {
    let bytes = Buffer.byteLength(item) + 1,
      s = acc.slices.at(-1);
    if (s !== void 0 && s.length > 0 && acc.bytes + bytes <= Ur) return s.push(item), {
      slices: acc.slices,
      bytes: acc.bytes + bytes
    };
    return acc.slices.push([item]), {
      slices: acc.slices,
      bytes: bytes
    };
  }, {
    slices: [],
    bytes: 0
  }).slices;
}
async function vbr(e, n) {
  let r = Buffer.alloc(1048576);
  for (let o = 0;;) {
    let {
      bytesRead: bytesRead
    } = await e.read(r, 0, r.length, o);
    if (bytesRead === 0) return;
    n(r.subarray(0, bytesRead)), o += bytesRead;
  }
}
function Kdo(e) {
  return e.stage === "0" && e.sole;
}
var Ebr = ke.O_RDWR | ke.O_CREAT | ke.O_EXCL | ro,
  qdo = ke.O_WRONLY | ke.O_CREAT | ke.O_EXCL | ro;
async function Ydo(e, GIT_INDEX_FILE, r, o) {
  let s = Br(o, `named-${Hr(6).toString("hex")}.ls`),
    c = await Mr(s, Ebr, 384);
  try {
    for (let h of kbr([...r])) {
      let p = await e(["-c", "core.precomposeUnicode=false", "ls-files", "-s", "-z", "--", ...h], {
        GIT_INDEX_FILE: GIT_INDEX_FILE,
        ...N7t
      }, void 0, void 0, c.fd);
      if (p.code !== 0) return t(`[indexEntriesNamed] ls-files exited ${String(p.code)}`), null;
    }
    let u = new Map(),
      g = "",
      m = h => {
        let p = h.indexOf("\t"),
          E = Buffer.from(h.slice(p + 1), "latin1").toString("utf8");
        if (r.has(E)) {
          let [mode = "", id = "", stage = ""] = h.slice(0, p).split(" "),
            b = u.get(E),
            sole = b === void 0 || b.sole && b.mode === mode && b.id === id && b.stage === stage;
          u.set(E, {
            mode: mode,
            id: id,
            stage: stage,
            sole: sole
          });
        }
      };
    return await vbr(c, h => {
      let p = (g + h.toString("latin1")).split("\x00");
      g = p.pop() ?? "", p.forEach(m);
    }), g === "" ? u : null;
  } finally {
    await c.close(), await $r(s).catch(() => {});
  }
}
var Wr = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "GIT_CONFIG_NOSYSTEM", "HOME", "XDG_CONFIG_HOME", "HOMEDRIVE", "HOMEPATH", "USERPROFILE", "PROGRAMDATA", "PATH"],
  jr = new Set([...Wr, ...jDt, ...dn, ...Ape, "NO_PROXY", "GNUPGHOME", "SSH_AUTH_SOCK", "NoDefaultCurrentDirectoryInExePath"].map(item => item.toUpperCase())),
  Vr = /^INPUT_|-/i;
function et(e) {
  let n = es(),
    r = [e, {
      CLAUDE_CODE_HOST_AUTH_ENV_VAR: i.CLAUDE_CODE_HOST_AUTH_ENV_VAR
    }].map(item => qie(item)?.toUpperCase());
  return Ro(e, (o, s) => jr.has(s.toUpperCase()) && !r.includes(s.toUpperCase()) || !Vr.test(s) && Ds(n, s) === o);
}
function We(e) {
  return e;
}
var ri = [["fatal: detected dubious ownership in repository at ", "git_refused_dubious_ownership"], ["fatal: unsafe repository (", "git_refused_dubious_ownership"], ["fatal: not a git repository", "git_refused_not_a_repository"], ["fatal: bad config ", "git_refused_bad_config"], ["fatal: bad numeric config value ", "git_refused_bad_config"], ["fatal: bad boolean config value ", "git_refused_bad_config"], ["fatal: unable to access ", "git_refused_config_unreadable"], ["fatal: unknown repository extension", "git_refused_unknown_extension"], ["fatal: Expected git repo version ", "git_refused_unknown_extension"]];
function mms(e) {
  return ri.find(([n]) => e.startsWith(n))?.[1];
}
function Eb(cwd, n, r) {
  let o = r.input === void 0 ? {} : {
    input: r.input
  };
  if (!r.hardened) return Tbr([...yn, ...n], {
    cwd: cwd,
    abortSignal: r.signal,
    ...o,
    ...Xdo(r.env),
    ...(r.maxBuffer !== void 0 && {
      maxBuffer: r.maxBuffer
    })
  });
  let s = r.reach ?? (r.reachRoots !== void 0 ? He(r.reachRoots) : r.layout === void 0 ? void 0 : Xt(r.layout));
  if (s === oe) return Promise.resolve({
    stdout: "",
    stderr: stderr_2,
    code: 126
  });
  let c = r.probes ?? fze(),
    u = r.screenMemo ?? c.screenMemo,
    base = Te(s, u),
    file = Re(base, c);
  if (file === null) return Promise.resolve({
    stdout: "",
    stderr: s === void 0 || Re(U$(void 0), c) === null ? xe : `${Vo}${jo(r.layout?.workTree ?? cwd)}. ${yms}`,
    code: 127
  });
  let h = [];
  if (h === void 0) return Promise.resolve({
    stdout: "",
    stderr: stderr_3,
    code: 126
  });
  let p = [{
    file: file,
    startsOutside: s !== void 0 && !(r.startsInProject || r.reachRoots?.startsInProject || r.layout?.startsInProject)
  }, [...yn, ...Os, ...h, ...n], {
    dir: r.layout?.workTree ?? cwd,
    abortSignal: r.signal,
    maxBuffer: Math.min(r.hardenedMaxBuffer ?? Rt, Rt),
    ...o,
    ...(r.stripFinalNewline === !1 && {
      stripFinalNewline: !1
    }),
    ...(r.encoding !== void 0 && {
      encoding: r.encoding
    }),
    ...(r.stdoutFd !== void 0 && {
      stdout: r.stdoutFd
    }),
    env: {
      ...ci(ys({
        ...Ln(base),
        ...Dn(base),
        ...Es,
        ...(n[0] === "for-each-ref" && Ss),
        ...(r.layout && _s(r.layout)),
        ...(r.layout?.borrowedObjects !== void 0 && {
          GIT_ALTERNATE_OBJECT_DIRECTORIES: Qn(r.layout.borrowedObjects)
        }),
        ...r.layout?.configPins,
        ...r.env
      }, {
        base: base
      })),
      ...(r.layout && jEe)
    }
  }];
  return Me(...p).then(ln);
}
var ii = new Set([...gae, "GIT_CONFIG_NOSYSTEM", "GIT_REFERENCE_BACKEND", "GIT_EXEC_PATH", "GIT_ATTR_SOURCE", "GIT_SSH", "GIT_SSH_COMMAND", "GIT_ASKPASS", "SSH_ASKPASS", "HOME", "XDG_CONFIG_HOME", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "PROGRAMDATA", "PATH", "GIT_EXTERNAL_DIFF", "GIT_DIFF_OPTS", "GIT_PAGER", "GIT_TEMPLATE_DIR", "GIT_SSH_VARIANT", "SSH_ASKPASS_REQUIRE", "GIT_HTTP_PROXY_AUTHMETHOD", "HTTP_PROXY", "HTTPS_PROXY", "ALL_PROXY", "NO_PROXY", "CURL_CA_BUNDLE", "SSL_CERT_FILE", "SSL_CERT_DIR", "NIX_SSL_CERT_FILE", "SSLKEYLOGFILE", "GIT_ALLOW_PROTOCOL", ...jDt, ...Object.keys(tPo)]),
  oi = /^GIT_(?:CURL_|LFS_|TRACE|TRANSFER_TRACE$|REDIRECT_STD)/i,
  si = e => ii.has(e.toUpperCase()) || USt.test(e) || oi.test(e) || RFr.test(e) || LTe(e) || cze(e);
function Xdo(e) {
  let n = {
      ...Ct(),
      ...e
    },
    r = Yt({
      ...process.env,
      ...n
    }),
    env = {
      ...n,
      ...r
    };
  return Object.keys(env).length > 0 ? {
    env: env
  } : {};
}
function ai() {
  return Re(Jdo());
}
function Tbr(e, n) {
  let r = ai(),
    o = {
      ...n,
      encoding: n.encoding ?? bBs
    };
  return r === null ? Promise.resolve({
    stdout: "",
    stderr: `${xe}${ns()}`,
    code: 127
  }) : lt(r, e, o).then(ln);
}
function Jdo() {
  return Kt({
    ...process.env,
    ...Ct()
  });
}
function Ct() {
  if (ap() === void 0) return {};
  let e = Ae(),
    env_2 = process.env,
    r = x() === "windows" ? c => c.toUpperCase() : c => c,
    o = new Map(Object.keys(env_2).map(item => [r(item), item])),
    s = new Map(Object.keys(e).map(item => [r(item), item]));
  return Object.fromEntries(L([...o.keys(), ...s.keys()]).flatMap(item => {
    let u = o.get(item),
      g = s.get(item),
      m = u ?? g ?? item,
      h = g === void 0 ? void 0 : e[g];
    if (!si(m) || (u === void 0 ? void 0 : env_2[u]) === h) return [];
    return [[m, h ?? li(m)]];
  }));
}
var di = tPo,
  li = e => di[e.toUpperCase()],
  wMn = {
    GIT_REFERENCE_BACKEND: void 0
  };
function ci(e) {
  let n = new Set(["GIT_CONFIG", "GIT_ATTR_SOURCE", ...Object.keys(wMn)]),
    r = Object.keys(e).filter(item => n.has(item.toUpperCase()));
  return {
    ...e,
    ...Object.fromEntries(r.map(item => [item, void 0])),
    GIT_CONFIG: void 0,
    GIT_ATTR_SOURCE: void 0,
    ...wMn
  };
}
function Pt(e) {
  return e !== void 0 && e !== "files" && e !== "reftable";
}
function ui(path, n, r) {
  return {
    path: path,
    kind: n.includes(path) ? "user_level" : r.fixed.includes(path) ? "repository" : "included",
    ground: path.includes("\uFFFD") ? "not_text" : !r.fixed.includes(path) && r.roots.some(item => gy(item, path)) ? "inside" : "indirect"
  };
}
var fi = ["user_level", "system", "condition", "unknown", "repository"];
function N0i(e) {
  if (e === "ignored_setting") return "a git configuration file other than this repository\u2019s own config sets extensions.refStorage. git ignores that key there, but this upload does not start while git lists it with a location. The file is one of these: the system-wide git configuration, ~/.gitconfig, ~/.config/git/config (or $XDG_CONFIG_HOME/git/config), what GIT_CONFIG_GLOBAL or GIT_CONFIG_SYSTEM names, the repository\u2019s config.worktree, or a file that one of them or the repository\u2019s config includes. Remove the key from that file and retry";
  return e === "variable" ? "the variable GIT_REFERENCE_BACKEND tells git to keep branches and tags in another place, which this upload does not read; start claude without that variable (a Claude Code settings file may also set it, in its env block)" : "this repository\u2019s own git configuration (extensions.refStorage) keeps its branches and tags in another place, which this upload does not read; work from an ordinary clone of the repository";
}
async function Qdo(e, signal, {
  linkedTrees = !1,
  bound = linkedTrees,
  startsInProject = !1,
  perWorktreeConfig = "refuse",
  notesBareRepository = !1,
  probes = fze(),
  holder: holder,
  namedCommonDirs = [],
  findKeyedFolder = CH,
  keepsListedSettings = !1
} = {}) {
  if (namedCommonDirs.some(item => !z(item))) return {
    kind: "failed",
    detail: "a common directory named for this tree is not an absolute path"
  };
  let probes_2 = probes.screenMemo === void 0 ? new RDt("operation") : probes,
    w = Oc(e) ? null : await pe(e).catch(() => null);
  if (w === null) return {
    kind: "failed",
    detail: "the launch directory could not be resolved",
    cause: "launch_folder_unresolved"
  };
  if (bound) {
    if ((await Pbr(w)).some(item => gy(item, w) || gy(item, e))) return {
      kind: "tampered",
      misplaced: "temp_root",
      gitDir: "",
      commonDir: ""
    };
  }
  if ([U$(void 0), process.env].some(item => Pt(Ds(item, "GIT_REFERENCE_BACKEND")))) return {
    kind: "tampered",
    misplaced: "ref_storage",
    keptBy: "variable",
    gitDir: "",
    commonDir: ""
  };
  let A = await rs(w);
  if (A.kind === "refuse" || A.kind === "chain" && !linkedTrees) return {
    kind: "tampered",
    misplaced: A.kind === "refuse" && A.why !== "git_file" ? "linked_worktree" : "git_file",
    gitDir: A.adminDir ?? "",
    commonDir: A.kind === "chain" ? A.commonDir : "",
    ...(A.kind === "refuse" && {
      detail: A.why
    })
  };
  if (A.kind === "chain" && namedCommonDirs.some(item => item !== A.commonDir)) return {
    kind: "tampered",
    misplaced: "common_dir",
    gitDir: A.adminDir,
    commonDir: A.commonDir
  };
  let b = async I => {
    let V = await Promise.all(L([e, w]).map(item => ss(I, w, findKeyedFolder(item))));
    return V.includes(!1) ? !1 : V.includes("unresolved") ? "unresolved" : !0;
  };
  if (A.kind === "chain") {
    let I = await b({
      resolved: A.commonDir
    });
    if (I !== !0) l("tengu_git_layout_keyed_elsewhere", {
      bound: bound,
      unresolved: I === "unresolved"
    });
    if (I === "unresolved" && bound) return {
      kind: "failed",
      detail: "the folder that keeps this tree\u2019s trust could not be resolved",
      cause: "keyed_folder_unresolved"
    };
    if (I === !1 && bound) return {
      kind: "tampered",
      misplaced: "linked_worktree",
      gitDir: A.adminDir,
      commonDir: A.commonDir,
      detail: "keyed_elsewhere"
    };
  }
  if (A.kind === "not_file" && namedCommonDirs.length > 0) {
    let I = S(w, ".git"),
      V = await it(w);
    if (V.kind === "unreadable") return {
      kind: "failed",
      detail: V.detail
    };
    return V.kind === "directory" ? {
      kind: "tampered",
      misplaced: "git_dir",
      gitDir: I,
      commonDir: I
    } : {
      kind: "failed",
      detail: "this linked working tree's .git file is missing"
    };
  }
  let [P = "not_held", D = "not_held"] = holder === void 0 ? [] : await Promise.all((A.kind === "chain" ? [A.adminDir, A.commonDir] : [S(w, ".git")]).map(item => holder.hold(item))),
    reach = bound ? po(w, [...EMn(w), ...(A.kind === "chain" ? [CDt(A.commonDir)] : [])]) : void 0,
    y = I => Eb(e, ["rev-parse", ...I], {
      hardened: !0,
      signal: signal,
      probes: probes_2,
      stripFinalNewline: !1,
      env: {
        GIT_CEILING_DIRECTORIES: ms(w, e)
      },
      ...(reach !== void 0 && {
        reach: reach,
        startsInProject: startsInProject
      })
    }),
    [O, G, j] = await Promise.all([y(["--absolute-git-dir"]), y(["--path-format=absolute", "--git-common-dir"]), y(["--show-toplevel"])]),
    gitDir = mn(O.stdout),
    commonDir = mn(G.stdout),
    workTree = mn(j.stdout);
  if ([O, G, j].some(({
    code: code
  }) => code !== 0) || gitDir === null || commonDir === null || workTree === null || !z(gitDir) || !z(workTree)) {
    let I = [O, G, j].find(({
        stderr: stderr_4
      }) => stderr_4 !== ""),
      cause = O.exitCode === 126 || O.exitCode === 127 ? reach !== void 0 && !startsInProject ? "git_did_not_run_from_outside" : "git_did_not_run" : I && mms(C0e(I));
    return {
      kind: "failed",
      detail: Wn((I?.stderr ?? O.stdout).trim()),
      ...(cause !== void 0 && {
        cause: cause
      }),
      ...(O.code === 127 && O.stderr.startsWith(xe) && {
        why: "git_not_found",
        ...(O.stderr !== xe && {
          withinReach: !0
        })
      }),
      ...(O.stderr === stderr_2 && {
        why: "settings_unreadable"
      })
    };
  }
  if (Wn(commonDir) === "--path-format=absolute") return {
    kind: "tampered",
    misplaced: "old_git",
    gitDir: gitDir,
    commonDir: commonDir
  };
  if (!z(commonDir)) return {
    kind: "tampered",
    misplaced: "common_dir",
    gitDir: gitDir,
    commonDir: commonDir
  };
  let C = await it(e);
  if (C.kind === "unreadable") return {
    kind: "failed",
    detail: C.detail
  };
  if (C.kind === "directory") {
    if (!gn(P, C.id)) return yt(P);
    if (C.id !== (await B9(gitDir))) return {
      kind: "tampered",
      misplaced: "git_dir",
      gitDir: gitDir,
      commonDir: commonDir
    };
    if (commonDir !== gitDir) return {
      kind: "tampered",
      misplaced: "common_dir",
      gitDir: gitDir,
      commonDir: commonDir
    };
  }
  let misplaced = await Rbr(commonDir);
  if (misplaced !== null) return {
    kind: "tampered",
    misplaced: misplaced,
    gitDir: gitDir,
    commonDir: commonDir
  };
  if (C.kind === "not_a_directory") {
    if (!linkedTrees || A.kind !== "chain") return {
      kind: "tampered",
      misplaced: "git_file",
      gitDir: gitDir,
      commonDir: commonDir,
      detail: "git_file"
    };
    let I = await is(w, gitDir, commonDir, A);
    if (I.kind !== "vouched") return I.kind === "unread" ? {
      kind: "failed",
      detail: I.detail,
      why: "changed_under_read"
    } : {
      kind: "tampered",
      misplaced: I.kind,
      gitDir: gitDir,
      commonDir: commonDir,
      detail: I.kind === "linked_worktree" ? I.detail : "git_file"
    };
    let V = {
      resolved: I.commonDir,
      id: I.commonDirId
    };
    if (bound && !(ar(V, {
      id: await B9(A.commonDir),
      resolved: A.commonDir
    }) && (await b(V)) === !0)) return {
      kind: "failed",
      detail: "the git directory changed while it was read",
      why: "changed_under_read"
    };
    if (!gn(P, I.gitDirId) || !gn(D, I.commonDirId)) return yt(P, D);
    return nt(e, {
      gitDir: I.gitDir,
      gitDirId: I.gitDirId,
      ...(I.gitDirBorn !== void 0 && {
        gitDirBorn: I.gitDirBorn
      }),
      commonDir: I.commonDir,
      commonDirId: I.commonDirId,
      ...(I.commonDirBorn !== void 0 && {
        commonDirBorn: I.commonDirBorn
      }),
      workTree: workTree,
      checkout: "linked",
      bound: bound,
      ...(startsInProject && {
        startsInProject: startsInProject
      })
    }, w, signal, probes_2, {
      perWorktreeConfig: perWorktreeConfig,
      notesBareRepository: notesBareRepository
    });
  }
  return nt(e, {
    gitDir: gitDir,
    gitDirId: C.id,
    ...(C.born !== void 0 && {
      gitDirBorn: C.born
    }),
    commonDir: commonDir,
    workTree: workTree,
    checkout: "main",
    bound: bound,
    ...(startsInProject && {
      startsInProject: startsInProject
    })
  }, w, signal, probes_2, {
    keepsListedSettings: keepsListedSettings
  });
}
async function nt(e, n, r, o, s, {
  perWorktreeConfig: perWorktreeConfig_2 = "refuse",
  notesBareRepository: notesBareRepository_2 = !1,
  keepsListedSettings: keepsListedSettings_2 = !1
}) {
  let {
      gitDir: gitDir_2,
      commonDir: commonDir_2,
      workTree: workTree_2
    } = n,
    [E, workTreeId] = await (workTree_2 === Wft(r) ? B9(r).then(O => [O, O]) : Promise.all([B9(workTree_2), B9(r)]));
  if (workTreeId === null || E !== workTreeId) return {
    kind: "tampered",
    misplaced: "work_tree",
    gitDir: gitDir_2,
    commonDir: commonDir_2,
    ...(workTreeId === null && {
      unexamined: !0
    })
  };
  let w = {
      ...n,
      workTree: Wft(r),
      workTreeId: workTreeId,
      ...(workTree_2 !== Wft(r) && {
        workTreeRespelled: !0
      })
    },
    storeStamps = await Gt(commonDir_2);
  if (storeStamps.info === "absent" || storeStamps.pack === "absent") return {
    kind: "failed",
    detail: "objects/info or objects/pack is missing from the git directory (running git init again in the checkout puts them back)",
    cause: "git_dir_objects_folder_missing"
  };
  let worktreeConfig = w.checkout === "linked" ? await ds(e, w, o, s) : "absent";
  if (worktreeConfig === "unread") return {
    kind: "failed",
    detail: "could not read extensions.worktreeConfig"
  };
  if (worktreeConfig === "file" || worktreeConfig !== "absent" && perWorktreeConfig_2 === "refuse") return {
    kind: "tampered",
    misplaced: "linked_worktree",
    gitDir: gitDir_2,
    commonDir: commonDir_2,
    detail: "worktree_config"
  };
  let P = worktreeConfig === "absent" ? w : {
      ...w,
      worktreeConfig: worktreeConfig
    },
    D = [S(commonDir_2, "config"), S(gitDir_2, "config.worktree")],
    Y = keepsListedSettings_2 ? await rt(D) : null,
    y = await Ei(e, P, o, s);
  switch (y.kind) {
    case "unlistable":
      return {
        kind: "failed",
        detail: y.detail
      };
    case "many_includes":
      return {
        kind: "tampered",
        misplaced: "many_includes",
        gitDir: gitDir_2,
        commonDir: commonDir_2
      };
    case "ref_storage":
      return {
        kind: "tampered",
        misplaced: "ref_storage",
        keptBy: y.keptBy,
        gitDir: gitDir_2,
        commonDir: commonDir_2
      };
    case "reftable":
      return {
        kind: "tampered",
        misplaced: "reftable",
        gitDir: gitDir_2,
        commonDir: commonDir_2
      };
    case "included":
      return {
        kind: "tampered",
        misplaced: "included_config",
        writable: `${y.configFile.kind}_${y.configFile.ground}`,
        configFile: y.configFile,
        ...(y.includedBy !== void 0 && {
          includedBy: y.includedBy
        }),
        gitDir: gitDir_2,
        commonDir: commonDir_2
      };
    case "pins":
      {
        let G = Y === null || y.listed.some(({
          key: key
        }) => key.startsWith("includeif.onbranch:")) ? null : await rt(y.settingsFiles);
        return {
          kind: "read",
          layout: {
            ...P,
            storeStamps: storeStamps,
            ...y.pins,
            ...{},
            ...{}
          }
        };
      }
  }
}
function gi(e, {
  commonDir: commonDir_3,
  workTree: workTree_3
}) {
  let o = Ie(e, workTree_3);
  return o !== null && be(o) === "config" && gy(commonDir_3, o) && gy(Z(o), commonDir_3);
}
var mi = /^hook\.(?:(.*)\.)?(?:command|event|enabled)$/s,
  _i = new Set(ePo.map(([e]) => e));
function hi(e) {
  return _i.has(e);
}
function pi(e) {
  let n = hi(e) ? null : mi.exec(e);
  return n === null ? void 0 : n[1] ?? "";
}
async function Ei(e, layout, signal_2, probes_3) {
  let s = {
      kind: "unlistable",
      detail: "could not list the configuration in force"
    },
    reachRoots = TDt(layout),
    screenMemo = probes_3.screenMemo ?? Zdo(),
    g = N => Eb(e, N, {
      hardened: !0,
      layout: layout,
      signal: signal_2,
      probes: probes_3,
      ...(reachRoots !== void 0 && {
        reachRoots: reachRoots,
        screenMemo: screenMemo
      })
    }),
    m = async N => {
      let [M, B] = await Promise.all([g(["config", "-z", "--show-origin", ...N, "--list"]), g(["config", "-z", "--show-origin", "--type=path", ...N, "--get-regexp", cr])]),
        te = N.length > 0 && M.exitCode === 128 && !oo(M);
      if (M.code !== 0 && !te || B.code !== 0 && B.exitCode === void 0) return null;
      let keys = te ? [] : Ke(M.stdout),
        directives = [...keys.filter(({
          key: key_2
        }) => regExp.test(key_2)), ...(B.code === 0 ? Ke(B.stdout) : [])].flatMap(({
          origin: J,
          key: key_3,
          value: value
        }) => Nt(value, J, layout.workTree).map(Se => ({
          holder: J,
          key: key_3,
          target: Se
        })));
      return {
        keys: keys,
        targets: directives.map(({
          target: target
        }) => target),
        directives: directives
      };
    },
    [h, p, E] = await Promise.all([m([]), g(["var", "GIT_CONFIG_GLOBAL"]), g(["var", "GIT_CONFIG_SYSTEM"])]);
  if (h === null) return s;
  let R = h.keys.filter(({
      key: key_4
    }) => key_4 === "extensions.refstorage"),
    fromOwnConfig = N => Ie(N, layout.workTree) === null || gi(N, layout),
    A = R.filter(({
      value: value_2
    }) => Pt(value_2));
  if (A.length > 0) return {
    kind: "ref_storage",
    keptBy: A.some(({
      origin: origin
    }) => fromOwnConfig(origin)) ? "setting" : "ignored_setting"
  };
  if (Ni(R, fromOwnConfig)) return {
    kind: "reftable"
  };
  let b = await WLi(layout.workTree, {
    GIT_DIR: layout.gitDir,
    GIT_COMMON_DIR: layout.commonDir
  }, layout.workTree);
  if (b === null) return s;
  let P = E.code === 0 ? E.stdout.split(`
`) : [],
    D = null,
    Y = U$(void 0),
    y = [layout.workTree, D, Y],
    userFiles = Nhs([...(p.code === 0 ? p.stdout.split(`
`) : []), ...P], ...y),
    systemFiles = jLi(P, ...y),
    j = [...h.keys.map(({
      origin: origin_2
    }) => Ie(origin_2, layout.workTree)), ...userFiles],
    v = N => ({
      kind: "included",
      configFile: ui(N, userFiles, b),
      ...(!userFiles.includes(N) && !b.fixed.includes(N) && {
        includedBy: Oi(N, h.directives, {
          workTree: layout.workTree,
          userFiles: userFiles,
          systemFiles: systemFiles,
          fromOwnConfig: fromOwnConfig
        })
      })
    }),
    X = j.find(item => item?.includes("\uFFFD"));
  if (X !== void 0 && X !== null) return v(X);
  let T = await $hs(b, j);
  if (T !== void 0) return T === null ? s : v(T);
  let C = await Ri(h.targets, N => m(["--file", N]), N => $hs(b, N));
  if (C === null) return s;
  if ("tooMany" in C) return {
    kind: "many_includes"
  };
  if ("contributes" in C) return v(C.contributes);
  let K = [...h.keys, ...C.keys],
    filterDrivers = (N => L(K.flatMap(({
      key: key_5
    }) => {
      let B = N.exec(key_5)?.[1];
      return B === void 0 ? [] : [B];
    })))(/^filter\.(.*)\.(?:clean|smudge|process|required)$/s),
    q = L(K.flatMap(({
      key: key_6
    }) => pi(key_6) ?? []));
  if ([...filterDrivers, ...q].some(item => item.includes("\uFFFD"))) return {
    kind: "unlistable",
    detail: detail
  };
  let ae = [...filterDrivers.flatMap(item => [[`filter.${item}.clean`, ""], [`filter.${item}.smudge`, ""], [`filter.${item}.process`, ""], [`filter.${item}.required`, "false"]]), ...q.flatMap(item => [[`hook.${item}.enabled`, "false"], [`hook.${item}.event`, ""]])];
  return {
    kind: "pins",
    listed: h.keys,
    settingsFiles: L([...j, ...h.targets].filter(item => item !== null)),
    pins: {
      filterDrivers: filterDrivers,
      attributeSetting: $i(h.keys, C.keys, userFiles, layout),
      configPins: Object.fromEntries([["GIT_CONFIG_COUNT", String(ae.length)], ...ae.flatMap(([N, M], index) => [[`GIT_CONFIG_KEY_${index}`, N], [`GIT_CONFIG_VALUE_${index}`, M]])])
    }
  };
}
var Si = 8,
  Cbr = 32,
  wi = 4096;
function Oi(e, n, {
  workTree: workTree_4,
  userFiles: userFiles_2,
  systemFiles: systemFiles_2,
  fromOwnConfig: fromOwnConfig_2
}) {
  let u = Ve(e),
    g = n.some(({
      target: target_2
    }) => fromOwnConfig_2(`file:${target_2}`)) ? "unknown" : "repository",
    m = new Set(n.filter(({
      target: target_3
    }) => Ve(target_3) === u).map(({
      holder: holder_2,
      key: key_7
    }) => {
      let E = Ie(holder_2, workTree_4);
      if (E === null) return "unknown";
      if (!userFiles_2.includes(E)) return fromOwnConfig_2(holder_2) ? g : "unknown";
      if (ps.test(key_7)) return "condition";
      return systemFiles_2.includes(E) ? "system" : "user_level";
    }));
  return fi.find(item => m.has(item)) ?? "unknown";
}
async function Ri(e, n, r) {
  let o = m => m !== null,
    s = new Set(e.filter(o)),
    keys_2 = [],
    u = [...s],
    g = 0;
  for (let m = 0; u.length > 0; m += 1) {
    if (m === Si || s.size > wi) return {
      tooMany: !0
    };
    let contributes = u.find(item => item.includes("\uFFFD"));
    if (contributes !== void 0) return {
      contributes: contributes
    };
    let contributes_2 = await r(u);
    if (contributes_2 !== void 0) return contributes_2 === null ? null : {
      contributes: contributes_2
    };
    let E = await Promise.all(u.map(async item => !cDn(item) && (await Tt(item).catch(() => null))?.isFile() ? item : null));
    if (g += U(E, o), g > Cbr) return {
      tooMany: !0
    };
    let R = await Promise.all(E.filter(o).map(n));
    if (R.some(item => item === null)) return null;
    keys_2.push(...R.flatMap(item => item?.keys ?? [])), u = L(R.flatMap(item => item?.targets ?? []).filter(o)).filter(item => !s.has(item)), u.forEach(item => s.add(item));
  }
  return {
    files: [...s],
    keys: keys_2
  };
}
function Ke(e) {
  let n = e.split("\x00");
  return Array.from({
    length: Math.floor(n.length / 2)
  }, (r, o) => {
    let s = n[2 * o + 1],
      c = s.indexOf(`
`);
    return {
      origin: n[2 * o],
      key: c < 0 ? s : s.slice(0, c),
      value: c < 0 ? "" : s.slice(c + 1),
      valueless: c < 0
    };
  });
}
function Nt(e, n, r) {
  let o = /^~[^/]*\//.exec(e);
  if (o !== null) return Bco(U$(void 0)).map(item => O0e(r, `${item}${ne}${e.slice(o[0].length)}`));
  let s = bi(e, n, r);
  return z(s) ? [s] : [];
}
function Ie(e, n) {
  return e.startsWith("file:") ? O0e(n, e.slice(5)) : null;
}
function bi(e, n, r) {
  let o = /^~([^/]*)\//.exec(e);
  if (o !== null) return o[1] === "" || o[1] === ki() ? `${Oe()}${ne}${e.slice(o[0].length)}` : e;
  if (z(e) || e.startsWith("%(prefix)/")) return e;
  return `${n.startsWith("file:") ? Z(O0e(r, n.slice(5))) : r}${ne}${e}`;
}
var detail = "a configured filter driver or hook has a name that is not valid UTF-8";
var Ai = new Set(["unset", "unspecified"]);
function F0i(e, n = U$(void 0)) {
  let r = Hn(n);
  return e.filterDrivers !== void 0 && r !== null && ![...e.filterDrivers, ...r.flatMap(({
    key: key_8
  }) => /^filter\.(.+)\.[^.]*$/is.exec(key_8.trim())?.[1] ?? [])].some(item => Ai.has(item));
}
function ki() {
  try {
    return ti().username;
  } catch {
    return null;
  }
}
async function Ii(e) {
  return e.workTreeId !== void 0 && e.workTreeId !== (await B9(e.workTree));
}
async function uze(e, n) {
  return (await kMn(e, n)) === null;
}
async function kMn(e, n) {
  return (await Ci(e, n)).fault;
}
async function Ci(e, n, r = () => () => {}) {
  let o = {
      "git-dir-look-objects": 0,
      "git-dir-look-refs": 0
    },
    s = async (O, G) => {
      let j = r(O);
      try {
        return await G(v => {
          o[O] += v;
        });
      } finally {
        j();
      }
    },
    {
      gitDir: gitDir_3,
      commonDir: commonDir_4
    } = e,
    [g, m, h, p, E, R, w, A, b, ...P] = await Promise.all([Bn(gitDir_3), ce(S(commonDir_4, "refs")), ce(S(commonDir_4, "objects")), ce(S(commonDir_4, "reftable")), Ge(commonDir_4, ["packed-refs"]), s("git-dir-look-objects", O => Pi(commonDir_4, O)), s("git-dir-look-refs", O => Gi(commonDir_4, O)), ce(S(gitDir_3, "HEAD")), Promise.all([Ge(gitDir_3, ["logs", "HEAD"]), ...n.map(item => Ge(commonDir_4, ["logs", ...item.split("/")]))]), ...["info", "pack"].map(item => ce(S(commonDir_4, "objects", item)).then(G => G === "directory" ? "absent" : "other")), Dt(commonDir_4).then(O => O ? "other" : "absent"), ...n.map(item => Ge(commonDir_4, item.split("/")))]),
    D = e.storeStamps === void 0 ? void 0 : await Gt(commonDir_4),
    Y = O => O === "absent" || O === "file";
  return {
    fault: [["work_tree_replaced", !(await Ii(e))], ["git_dir_replaced", (e.gitDirId === void 0 || e.gitDirId === (await B9(gitDir_3))) && (e.commonDirId === void 0 || e.commonDirId === (await B9(commonDir_4))) && (D === void 0 || D.objects === e.storeStamps?.objects)], ["git_dir_head_not_plain", A === "file"], ["git_dir_packed_refs_not_plain", Y(E)], ["git_dir_refs_not_plain", w], ["git_dir_logs_not_plain", b.every(Y)], ["git_dir_tampered", Un(g, gitDir_3) === commonDir_4 && m === "directory" && h === "directory" && p === "absent" && P.every(Y)], ["git_dir_objects_not_plain", R], ["git_dir_objects_changed", D === void 0 || D.info === e.storeStamps?.info && D.pack === e.storeStamps?.pack && D.alternates === e.storeStamps?.alternates && D.httpAlternates === e.storeStamps?.httpAlternates]].find(([, O]) => !O)?.[0] ?? null,
    objectEntries: o["git-dir-look-objects"],
    refEntries: o["git-dir-look-refs"]
  };
}
var hms = 4096;
function pn(e) {
  return e.includes("\uFFFD");
}
async function Pi(e, n) {
  let r = async (o, s) => {
    let c = await we(o).catch(g => k(g) === "ENOENT" ? [] : null);
    if (c === null || c.some(pn)) return !1;
    return n(c.length), (await Promise.all(c.map(item => Q(S(o, item)).then(m => m.isFile() || m.isDirectory() && (s || item === "multi-pack-index.d") ? "file" : "other", m => k(m) === "ENOENT" ? "absent" : "other")))).every(item => item !== "other");
  };
  try {
    let o = await we(S(e, "objects"));
    n(o.length);
    let s = await Promise.all(o.map(item => ce(S(e, "objects", item))));
    if (o.some(pn) || !s.every(item => item === "directory" || item === "file" || item === "absent")) return !1;
    let c = o.filter((item, index) => s[index] === "directory");
    if (c.length > hms) return !1;
    return (await Promise.all(c.map(item => r(S(e, "objects", item), !/^(?:pack|[0-9a-f]{2})$/i.test(item))))).every(Boolean);
  } catch {
    return !1;
  }
}
async function rt(e) {
  let n = await Promise.all(e.map(item => Tt(item, {
    bigint: !0
  }).then(o => `${o.dev}:${o.ino}:${o.ctimeNs}:${o.mtimeNs}:${o.size}`, o => ["ENOENT", "ENOTDIR"].includes(k(o) ?? "") ? "absent" : null)));
  return n.includes(null) ? null : n.join(" ");
}
async function Gt(e) {
  let n = (...m) => Q(S(e, "objects", ...m), {
      bigint: !0
    }),
    r = (...m) => n(...m).then(h => `${h.dev}:${h.ino}:${h.ctimeNs}:${h.mtimeNs}:${h.size}`, () => "absent"),
    [objects, info, pack, alternates, httpAlternates] = await Promise.all([n().then(m => `${m.dev}:${m.ino}`, () => "absent"), r("info"), r("pack"), r("info", Sn[0]), r("info", Sn[1])]);
  return {
    objects: objects,
    info: info,
    pack: pack,
    alternates: alternates,
    httpAlternates: httpAlternates
  };
}
var En = {
  relative_config_home: "the configuration home (CLAUDE_CONFIG_DIR) is not an absolute path",
  settings_moved: "where your own settings are found (CLAUDE_CONFIG_DIR, the HOME it defaults from, or the cowork settings switch) changed after Claude Code started: set it in the shell, not a settings file, and restart",
  inside_tree: "~/.claude/seed-admin lies inside this working tree or its repository"
};
function Ni(e, n) {
  return e.some(({
    value: value_3,
    origin: origin_3
  }) => value_3 === "reftable" && n(origin_3));
}
var Sn = ["alternates", "http-alternates"];
async function Rbr(e) {
  if ((await ce(S(e, "reftable"))) !== "absent") return "reftable";
  return (await Dt(e)) ? "borrowed_objects" : null;
}
async function Dt(e) {
  return (await Promise.all(Sn.map(async item => {
    let o = await Ge(e, ["objects", "info", item]);
    if (o !== "file") return o !== "absent";
    let s = await Q(S(e, "objects", "info", item)).catch(() => null);
    return !(s !== null && s.isFile() && s.nlink === 1 && s.size === 0);
  }))).some(Boolean);
}
async function Gi(e, n) {
  return (await Promise.all(["heads", "tags", "remotes"].map(async item => {
    let s = await ce(S(e, "refs", item));
    return s === "absent" || s === "file" || s === "directory" && (await Lt(S(e, "refs", item), n));
  }))).every(Boolean);
}
async function Lt(e, n) {
  let r = await Di(e);
  if (r === null) return !1;
  return n(r.length), (await Promise.all(r.map(async item => {
    let c = await ce(item);
    return c === "file" || c === "absent" && typeof item === "string" ? !0 : c === "directory" ? Lt(item, n) : !1;
  }))).every(Boolean);
}
async function Di(e) {
  try {
    if (typeof e === "string") {
      let r = await we(e).catch(o => k(o) === "ENOENT" ? [] : null);
      if (r === null || !r.some(pn)) return r?.map(o => S(e, o)) ?? null;
    }
    let n = Buffer.concat([Buffer.from(e), Buffer.from(ne)]);
    return (await we(e, {
      encoding: "buffer"
    })).map(item => Buffer.concat([n, item]));
  } catch {
    return null;
  }
}
async function ce(e) {
  try {
    let n = await Q(e);
    return n.isDirectory() ? "directory" : n.isFile() && n.nlink === 1 ? "file" : "other";
  } catch (error) {
    let r = k(error);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "other";
  }
}
async function it(e) {
  try {
    let n = await Q(S(e, ".git"), {
      bigint: !0
    });
    return n.isDirectory() ? {
      kind: "directory",
      id: `${n.dev}:${n.ino}`,
      born: nys(n)
    } : {
      kind: "not_a_directory"
    };
  } catch (error) {
    let r = k(error);
    return r === "ENOENT" || r === "ENOTDIR" ? {
      kind: "not_a_directory"
    } : {
      kind: "unreadable",
      detail: d(error)
    };
  }
}
var Li = new Set(["core.autocrlf", "core.eol", "core.safecrlf", "core.symlinks", "core.filemode", "core.ignorecase", "core.precomposeunicode", "core.checkstat", "core.trustctime"]);
function vi(e) {
  return `"${e.replace(/[\\"]/g, n => `\\${n}`).replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\x08/g, "\\b")}"`;
}
var ot = ["core.excludesfile", "core.attributesfile"];
function Fi(e) {
  let n = e.split("\x00"),
    r = Array.from({
      length: Math.floor((n.length - 1) / 3)
    }, (c, u) => n.slice(3 * u, 3 * u + 3)),
    o = ([c]) => c === "global" || c === "system",
    s = r.findLast(o);
  return {
    origin: s?.[1],
    value: s?.[2],
    passedOver: r.some(item => !o(item))
  };
}
var xi = /^[^\u0000-\u001f\u007f]{1,4096}$/,
  left = 268435456,
  Cn = 64,
  st = 1073741824;
async function Ft(e, n) {
  let r = await xt();
  if ("unusable" in r) return {
    kind: "failed",
    reason: "placement",
    detail: En[r.unusable]
  };
  let {
    configHome: o,
    root: root
  } = r;
  if ([root, S(o, "seed-admin")].some(item => gy(e.workTree, item) || gy(e.enclosingTree, item) || gy(e.gitDir, item))) return {
    kind: "failed",
    reason: "placement",
    detail: En.inside_tree
  };
  try {
    let u = await Q(root).catch(() => null);
    if (u !== null && u.isFile() && u.size === 0 && u.nlink === 1 && (x() === "windows" || u.uid === process.getuid?.())) await An(root);
    await _n(root, {
      recursive: !0,
      mode: 448
    });
    let g = await B9(root);
    if (!Pn(await Q(root))) return {
      kind: "failed",
      reason: "home",
      home: o,
      detail: `${S(o, "seed-admin")} is not a plain directory of this user`
    };
    return await jt(root, g, n), {
      kind: "made",
      dir: await Yr(S(root, `claude-seed-admin-${process.pid}-${await Vt(process.pid, n)}-`)),
      root: root,
      configHome: o
    };
  } catch (error) {
    return $t(error, o, root) ? {
      kind: "failed",
      reason: "home",
      home: o,
      detail: d(error)
    } : {
      kind: "failed",
      reason: "other",
      detail: d(error)
    };
  }
}
async function xt() {
  let configHome = Ue();
  if (!z(configHome)) return {
    unusable: "relative_config_home"
  };
  if (bSr(JXe) !== void 0) return {
    unusable: "settings_moved"
  };
  return {
    configHome: configHome,
    root: S(await pe(configHome).catch(() => configHome), "seed-admin")
  };
}
function Pn(e) {
  return e.isDirectory() && (x() === "windows" || (e.uid === process.getuid?.() || e.uid === 0) && (e.mode & 18) === 0);
}
async function H0i() {
  let e = {
      removed: 0,
      errors: 0,
      held: 0,
      refused: "no"
    },
    n = (refused, g) => (t(`[builderGit] seed-admin is not swept: ${g}`, {
      level: "warn"
    }), {
      ...e,
      refused: refused
    }),
    r = await xt();
  if ("unusable" in r) return n(r.unusable, En[r.unusable]);
  let o = await B9(r.root),
    s = await Q(r.root).catch(error_2 => ({
      error: error_2
    }));
  if ("error" in s) {
    let u = k(s.error);
    if (u === "ENOENT" || u === "ENOTDIR") return e;
    return t(`[builderGit] sweeping ${r.root}: could not examine it (${u ?? d(s.error)})`, {
      level: "warn"
    }), {
      ...e,
      errors: 1
    };
  }
  if (s.isFile()) return e;
  let c = So(S(r.configHome, "seed-admin"), r.configHome);
  if (c !== null) return n("inside_tree", `a git checkout (${c}) holds ${r.root}`);
  return Pn(s) ? {
    ...(await jt(r.root, o, () => Te(void 0, void 0))),
    refused: "no"
  } : n("shared_directory", `${r.root} is a link, or another user owns it or can write to it`);
}
async function $0i(e, layout_2, signal_3, probes_4 = fze(), s = "linked") {
  let c = B => Eb(e, B, {
      hardened: !0,
      layout: layout_2,
      signal: signal_3,
      probes: probes_4
    }),
    u = (await we(layout_2.gitDir).catch(() => [])).filter(item => Ki.test(item)),
    g = Xi(layout_2, u),
    [m] = await Ji(layout_2, g);
  if (m !== void 0) return ie(m.why, m.cause);
  if (layout_2.attributeSetting === void 0) return ie("the layout records no attribute settings", "other");
  let source_2 = gms(U$(void 0)) ?? layout_2.attributeSetting;
  if (source_2 !== null) return {
    kind: "failed",
    reason: "placement",
    cause: "attribute_source",
    source: source_2,
    detail: Ui(source_2),
    [Symbol.asyncDispose]: async () => {}
  };
  let p = async () => _Sr(await $7t(S(layout_2.gitDir, "HEAD")).catch(() => {
      return;
    })),
    E = await p(),
    [R, w, A, ...b] = await Promise.all([c(["rev-parse", "--show-object-format"]), c(["config", "-z", "--show-origin", "--no-includes", "--file", S(layout_2.commonDir, "config"), "--list"]), c(["for-each-ref", "--format=%(objectname) %(refname) %(symref)", "refs/heads/", "refs/tags/", "refs/remotes/"]), ...ot.map(item => c(["config", "-z", "--includes", "--show-scope", "--show-origin", "--type=path", "--get-all", item]))]),
    P = R.code === 0 ? R.stdout.trim() : "";
  if (P !== "sha1" && P !== "sha256") return ie("could not read the object format", "config");
  if (A.code !== 0) return ie(`could not list the refs (${ge(layout_2, S(layout_2.commonDir, "packed-refs"))} or a file under ${ge(layout_2, S(layout_2.commonDir, "refs"))} is unreadable or broken)`, "refs");
  let {
    carried: carried,
    symbolic: symbolic
  } = Vi(A.stdout);
  if (carried.includes("\uFFFD")) return ie(`a branch or tag name in ${ge(layout_2, S(layout_2.commonDir, "packed-refs"))} or under ${ge(layout_2, S(layout_2.commonDir, "refs"))} is not valid UTF-8`, "refs");
  let y = (await ce(S(layout_2.commonDir, "config"))) !== "absent";
  if (w.code !== 0 && y) return ie("could not read the repository configuration", "config");
  let O = layout_2.checkout === "linked" ? !1 : await as(e, layout_2, signal_3, probes_4);
  if (O === null) return ie("could not read extensions.worktreeConfig", "config");
  let G = O ? await c(["config", "-z", "--show-origin", "--no-includes", "--file", S(layout_2.gitDir, "config.worktree"), "--list"]) : null;
  if (G !== null && G.code !== 0 && (await ce(S(layout_2.gitDir, "config.worktree"))) !== "absent") return ie("could not read the per-worktree configuration", "config");
  let j = [...(w.code === 0 ? Ke(w.stdout) : []), ...(G?.code === 0 ? Ke(G.stdout) : [])].filter(({
    key: key_9
  }) => Li.has(key_9));
  if (b.some(item => item.code !== 0 && item.exitCode !== 1)) return ie("could not read the core.excludesFile or core.attributesFile setting from this checkout's git configuration", "config");
  let v = ot.flatMap((B, index) => {
    let se = b[index];
    if (se === void 0 || se.code !== 0) return [];
    let {
      origin: origin_4,
      value: value_4,
      passedOver: passedOver
    } = Fi(se.stdout);
    if (passedOver) t(`[builderGit] ${B} from the repository, a worktree or the command line is ignored under the private git directory: only the user's or the system's own value applies there`);
    return origin_4?.startsWith("file:") === !0 && value_4 !== void 0 && z(value_4) && xi.test(value_4) && !value_4.includes("\uFFFD") ? [{
      key: B,
      value: value_4
    }] : [];
  });
  if (E === null || !(/^ref: refs\/heads\/[^\u0000-\u0020\u007f]+$/.test(E) || /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/.test(E))) return ie(qi(layout_2), "head");
  if (symbolic.has(E.replace(/^ref: /, ""))) return ie(zi, "symbolic_head");
  if (E.startsWith("ref: ") && !carried.includes(` ${E.slice(5)}
`) && (await p()) !== E) return ie(`${ge(layout_2, S(layout_2.gitDir, "HEAD"))} changed while the branches were being read: most likely a branch was switched, renamed or deleted meanwhile`, "other");
  if (u.length > Cn) return ie(Yi(layout_2), "shared_index");
  if ((await Promise.all(u.map(item => Q(S(layout_2.gitDir, item)).then(te => te.isFile() ? te.size : 0, () => 0)))).reduce((acc, item) => acc + item, 0) > st) return ie(`the split-index files (sharedindex.*) in ${ge(layout_2, layout_2.gitDir)} are too large to copy`, "shared_index");
  let C = x() === "windows" ? "junction" : void 0,
    enclosingTree = Z(layout_2.commonDir),
    I = TDt(layout_2),
    V = () => Te(I === void 0 ? void 0 : He(I), probes_4.screenMemo),
    q = await Ft({
      workTree: layout_2.workTree,
      gitDir: layout_2.gitDir,
      enclosingTree: enclosingTree
    }, V);
  if (q.kind === "failed") return q.reason === "home" ? ht(q.detail, q.home) : ie(q.detail, q.reason);
  let {
      root: root_2,
      configHome: configHome_2
    } = q,
    dir = q.dir;
  try {
    let B = {
        left: st + 2 * left
      },
      te = Promise.allSettled(g.map(([ee, re, _e]) => Wt(S(ee, re), S(dir, re), B, ge(layout_2, S(ee, re)), _e))),
      se = Promise.allSettled([cn(S(dir, "config"), ["[core]", `	repositoryformatversion = ${P === "sha256" ? 1 : 0}`, "\tbare = false", "\tlogallrefupdates = false", "[gc]", "\tauto = 0", "\tautodetach = false", "\tpruneexpire = never", "[maintenance]", "\tauto = false", "[core]", ...j.map(({
        key: key_10,
        value: value_5,
        valueless: valueless
      }) => `	${key_10.slice(5)}${valueless ? "" : ` = ${vi(value_5)}`}`), ...v.map(({
        key: key_11,
        value: value_6
      }) => `	${key_11.slice(5)} = "${value_6.replace(/[\\"]/g, _e => `\\${_e}`)}"`), "\tlongpaths = true", ...(P === "sha256" ? ["[extensions]", "\tobjectformat = sha256"] : []), ""].join(`
`), {
        flag: "wx",
        mode: 384
      }), cn(S(dir, "HEAD"), E + `
`, {
        flag: "wx",
        mode: 384
      }), Gn.filter(item => item !== "objects" || s !== "own").reduce((acc, item) => acc.then(() => Xr(S(layout_2.commonDir, item), S(dir, item), C)), Promise.resolve()), ...(s === "own" ? [_n(S(dir, "objects"), {
        mode: 448
      })] : []), _n(S(dir, "refs"), {
        mode: 448
      }), cn(S(dir, "packed-refs"), carried, {
        flag: "wx",
        mode: 384
      })]).then(ee => {
        let re = ee.find(item => item.status === "rejected");
        return re === void 0 ? null : {
          error: re.reason
        };
      }),
      ue = await te,
      J = ue.flatMap(item => item.status === "fulfilled" && item.value !== null ? [item.value] : [])[0];
    if (J !== void 0) return await se, await Ne(dir), ie(J.why, J.cause);
    let he = ue.find(item => item.status === "rejected");
    if (he !== void 0) throw await se, he.reason;
    let me = await se;
    if (me !== null) {
      if (!ji.includes(k(me.error) ?? "") || !$t(me.error, configHome_2, root_2)) throw me.error;
      return await Ne(dir), ht(d(me.error), configHome_2);
    }
    if (signal_3?.aborted) throw Error("aborted");
    let path_2 = dir,
      dispose = async () => {
        await Ne(path_2);
      };
    return {
      kind: "made",
      path: path_2,
      ...(s === "own" && {
        borrowedObjects: S(layout_2.commonDir, "objects")
      }),
      dispose: dispose,
      [Symbol.asyncDispose]: dispose
    };
  } catch (error) {
    if (dir !== null) await Ne(dir);
    return ie(`${Wn(d(error))} \u2014 while writing under ${S(configHome_2, "seed-admin")}, where the copies take up to 1.5 GiB`, "other");
  }
}
var Hi = ["core.attributesfile", "attr.tree"];
function wn({
  key: key_12
}) {
  return Hi.includes(key_12.toLowerCase());
}
function Ht({
  key: key_13
}) {
  return key_13.toLowerCase() === "core.ignorecase";
}
var Mi = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM", "XDG_CONFIG_HOME", "HOME"];
function $i(e, n, r, o) {
  let s = p => x() === "windows" ? p.replaceAll("\\", "/").toLowerCase() : p,
    c = p => r.map(s).includes(s(Ie(p.origin, o.workTree) ?? "")),
    u = p => p.key.toLowerCase() === "core.attributesfile" && c(p) && Bi(p.value),
    g = n.find(item => wn(item) || Ht(item)),
    m = g ?? e.find(item => wn(item) && !u(item));
  if (m === void 0) return null;
  let h = m.key.toLowerCase();
  return {
    ...(g === void 0 && h === "core.attributesfile" && c(m) && {
      relative: !0
    }),
    ...(h === "attr.tree" ? {
      kind: "attr_tree",
      setting: "attr.tree"
    } : h === "core.ignorecase" ? {
      kind: "ignore_case",
      setting: "core.ignoreCase"
    } : {
      kind: "attributes_file",
      setting: "core.attributesFile"
    }),
    where: ge(o, Ie(m.origin, o.workTree) ?? m.origin)
  };
}
function gms(e) {
  if (Ds(e, "GIT_ATTR_SOURCE") !== void 0) return {
    kind: "attr_source_env",
    setting: "GIT_ATTR_SOURCE"
  };
  let setting = ["GIT_CONFIG_COUNT", "GIT_CONFIG_PARAMETERS"].find(item => {
    let p = Hn({
      ...e,
      [item === "GIT_CONFIG_COUNT" ? "GIT_CONFIG_PARAMETERS" : "GIT_CONFIG_COUNT"]: void 0
    });
    return p === null || p.some(({
      key: key_14
    }) => er(key_14.toLowerCase()) || wn({
      key: key_14
    }) || Ht({
      key: key_14
    }));
  });
  if (setting !== void 0) return {
    kind: "env_config",
    setting: setting
  };
  let r = x() === "windows",
    o = h => h !== void 0 && h !== "" && !Mt(h, r),
    s = Mi.find(item => o(Ds(e, item))),
    c = Ds(e, "HOME") ? void 0 : Bco(e).find(o),
    u = c === void 0 ? void 0 : c === `${Ds(e, "HOMEDRIVE")}${Ds(e, "HOMEPATH")}` ? "HOMEPATH" : "USERPROFILE",
    g = r && o(Ds(e, "PROGRAMDATA")) ? "PROGRAMDATA" : void 0,
    setting_2 = s ?? u ?? g;
  return setting_2 === void 0 ? null : {
    kind: "config_location",
    setting: setting_2
  };
}
function Mt(e, n) {
  return n ? /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e) : z(e);
}
function Bi(e) {
  return e === "" || /^~[^/]*\//.test(e) || Mt(e, x() === "windows");
}
function Ui({
  kind: kind,
  setting: setting_3,
  where: where
}) {
  return kind === "config_location" ? `${setting_3} is a relative path, which git under the private git directory resolves from another directory` : `${setting_3} is set in ${where ?? "Claude Code\u2019s environment"}, which git does not read the same way under the private git directory`;
}
function F7t(GIT_INDEX_FILE_2) {
  return GIT_INDEX_FILE_2 === void 0 ? {} : {
    GIT_INDEX_FILE: GIT_INDEX_FILE_2
  };
}
function vMn(e) {
  return e === void 0 ? [] : ["-c", "core.splitIndex=false", "-c", "diff.autoRefreshIndex=true"];
}
async function U0i(workTree_5, signal_4, r = fze()) {
  let o = await Eb(workTree_5, ["rev-parse", "--absolute-git-dir", "--git-common-dir"], {
      hardened: !1,
      signal: signal_4
    }),
    [gitDir_4, c] = o.stdout.split(`
`);
  if (o.code !== 0 || gitDir_4 === void 0 || !z(gitDir_4) || c === void 0) return {
    kind: "failed",
    cause: "git_dir",
    detail: "git could not say where its directory is"
  };
  let u = Ve(workTree_5, c),
    g = await Ft({
      workTree: workTree_5,
      gitDir: gitDir_4,
      enclosingTree: Z(u)
    }, () => Te(void 0, r.screenMemo));
  if (g.kind === "failed") return g.reason === "home" ? {
    kind: "failed",
    cause: "home",
    detail: g.detail,
    home: g.home
  } : {
    kind: "failed",
    cause: g.reason,
    detail: g.detail
  };
  let dispose_2 = () => An(g.dir, {
    recursive: !0,
    force: !0
  }).catch(() => {});
  try {
    let h = await Wt(S(gitDir_4, "index"), S(g.dir, "index"), {
      left: left
    }, S(gitDir_4, "index"), "index");
    if (h !== null) return await dispose_2(), {
      kind: "failed",
      cause: "index",
      detail: h.why
    };
    let p = S(g.dir, "index"),
      E = await Eb(workTree_5, ["-c", "core.splitIndex=false", "update-index", "--no-split-index"], {
        hardened: !1,
        signal: signal_4,
        env: {
          GIT_INDEX_FILE: p
        }
      });
    if (E.code !== 0) return await dispose_2(), {
      kind: "failed",
      cause: "index",
      detail: `git could not rewrite the copy as one file: ${Wn(E.stderr)}`
    };
    return {
      kind: "made",
      indexFile: p,
      dispose: dispose_2
    };
  } catch (error) {
    return await dispose_2(), {
      kind: "failed",
      cause: "index",
      detail: Wn(d(error))
    };
  }
}
async function B0i(e, n, signal_5) {
  let o = m => Eb(e, [...vMn(n), "write-tree", "--missing-ok", ...m], {
      hardened: !1,
      signal: signal_5,
      env: F7t(n)
    }),
    s = await Q(n, {
      bigint: !0
    }).catch(m => k(m) === "ENOENT" ? "absent" : {
      unexamined: k(m) ?? d(m)
    });
  if (s !== "absent" && "unexamined" in s) return {
    kind: "failed",
    detail: `that copy could not be examined before its cached tree was rebuilt (${Wn(s.unexamined)})`
  };
  let c = await o(["--ignore-cache-tree"]);
  if (c.code !== 0) return {
    kind: "failed",
    detail: `git could not build a tree from it (${Wn(c.stderr.trim())}) \u2014 an unfinished merge, with unmerged entries, does that: finish or abort it first`
  };
  let u = await Q(n, {
    bigint: !0
  }).catch(() => null);
  if (u === null || s !== "absent" && u.ino === s.ino) return {
    kind: "failed",
    detail: "its cached tree, rebuilt from its entries, could not be written back into the copy"
  };
  let g = await o([]);
  return g.code === 0 && g.stdout.trim() === c.stdout.trim() ? {
    kind: "honest",
    tree: c.stdout.trim()
  } : {
    kind: "failed",
    detail: "its cached tree could not be replaced by the one its entries give"
  };
}
var Wi = ["EACCES", "EPERM", "EROFS", "EEXIST", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EOPNOTSUPP", "ENOTSUP"],
  ji = ["EACCES", "EPERM", "EROFS", "EOPNOTSUPP", "ENOTSUP"];
function $t(e, n, r) {
  let o = k(e),
    s = typeof e !== "object" || e === null ? void 0 : "dest" in e && typeof e.dest === "string" ? e.dest : "path" in e ? e.path : void 0;
  return o !== void 0 && Wi.includes(o) && typeof s === "string" && (gy(n, s) || gy(Z(r), s));
}
function ge(e, n) {
  let r = gy(e.workTree, n) ? hn(e.workTree, n) : n;
  return r.length > 160 ? `\u2026${Pa(r, 159)}` : r;
}
function Vi(e) {
  let n = e.split(`
`).flatMap(item => {
    let [, id_2, name, target_4] = /^([0-9a-f]{40}(?:[0-9a-f]{24})?) (refs\/[^\u0000-\u0020\u007f]+) (.*)$/s.exec(item) ?? [];
    return id_2 === void 0 || name === void 0 ? [] : [{
      id: id_2,
      name: name,
      target: target_4
    }];
  });
  return {
    carried: n.filter(({
      target: target_5
    }) => target_5 === "").map(({
      id: id_3,
      name: name_2
    }) => `${id_3} ${name_2}
`).join(""),
    symbolic: new Set(n.filter(({
      target: target_6
    }) => target_6 !== "").map(({
      name: name_3
    }) => name_3))
  };
}
var Bt = (e, n) => Ce(S(e, n), Cc());
async function Ut(e, n, r, o) {
  let s = (m, h) => ({
    why: `${n} ${m}`,
    cause: h === "replaced" ? "other" : r === "index" ? `index_${h}` : r === "shared_index" ? h === "too_large" ? "shared_index_too_large" : r : h === "link" || h === "second_name" ? `shallow_${h}` : "shallow_other"
  });
  if (x() === "windows") {
    let m = await Q(e).catch(() => null);
    if (m !== null && !m.isFile()) return m.isSymbolicLink() ? s("is a symbolic link", "link") : s("is not a regular file", "other");
  }
  let source_3;
  try {
    source_3 = await o(Z(e), be(e));
  } catch (error) {
    let h = k(error);
    if (h === "ENOENT") return null;
    return h === "ELOOP" || h === "EMLINK" ? s("is a symbolic link", "link") : s(`cannot be opened (${h ?? "no error code"})`, "other");
  }
  let entry = await source_3.stat().catch(() => null),
    g = entry === null || !entry.isFile() ? s("is not a regular file", "other") : entry.nlink > 1 ? s("has a second name (a hard link)", "second_name") : entry.nlink !== 1 ? s("changed while it was read", "replaced") : entry.size > left ? s("is larger than 256 MiB, the most this upload copies", "too_large") : null;
  if (g !== null || entry === null) return await source_3.close(), g;
  return {
    source: source_3,
    entry: entry
  };
}
var Ki = /^sharedindex\.[0-9a-f]{40,64}$/;
function Yi(e) {
  return `more than ${Cn} split-index files (sharedindex.*) stand in ${ge(e, e.gitDir)}`;
}
function Xi(e, n) {
  return [[e.gitDir, "index", "index"], [e.commonDir, "shallow", "shallow"], ...n.slice(0, Cn).map(item => [e.gitDir, item, "shared_index"])];
}
async function Ji(e, n, r = Bt) {
  return (await Promise.all(n.map(async ([s, c, u]) => {
    let g = await Ut(S(s, c), ge(e, S(s, c)), u, r);
    if (g !== null && "source" in g) return await g.source.close(), null;
    return g;
  }))).filter(item => item !== null);
}
function qi(e) {
  return `${ge(e, S(e.gitDir, "HEAD"))} is not a branch or an object id`;
}
var zi = "it is checked out under a symbolic ref (a second name for another ref), and a branch is taken by its own name only";
async function Wt(e, n, r, o, s) {
  let c = await Ut(e, o, s, Bt);
  if (c === null || !("source" in c)) return c;
  let {
    source: source_4,
    entry: entry_2
  } = c;
  try {
    if (r.left -= entry_2.size, r.left < 0) return {
      why: `${o} and the other files to copy grew past 1.5 GiB`,
      cause: s === "index" ? "index_too_large" : s === "shared_index" ? s : "shallow_other"
    };
    let m = await Ce(n, "wx", 384);
    try {
      let h = Buffer.allocUnsafe(1048576),
        p = 0;
      while (p < entry_2.size) {
        let {
          bytesRead: bytesRead_2
        } = await source_4.read(h, 0, Math.min(h.length, entry_2.size - p), p);
        if (bytesRead_2 === 0) break;
        await m.write(h, 0, bytesRead_2), p += bytesRead_2;
      }
      let date = new Date(),
        R = entry_2.mtime.getTime(),
        w = R >= 1000 && R <= date.getTime() ? entry_2.mtime : date;
      await m.utimes(w, w);
    } finally {
      await m.close();
    }
    return null;
  } finally {
    await source_4.close();
  }
}
var Gn = ["info", "objects"];
async function at(e) {
  try {
    return await PC(e);
  } catch (error) {
    if (x() === "windows" || !(await Q(e).then(r => r.isDirectory(), () => !1))) throw error;
    return "directory";
  }
}
async function Ne(e, n = Gn) {
  try {
    if ((await at(e)) !== "directory") return !0;
    let r = await n.toReversed().reduce((acc, item) => acc.then(async () => {
      if (item === "objects") await at(S(e, item));else if ((await PC(S(e, item))) === "directory") throw Error("info is a non-empty directory, not a link");
    }), Promise.resolve()).then(() => null, reason => ({
      reason: reason
    }));
    if (r !== null) throw await Promise.allSettled((await we(e)).filter(item => !n.some(s => s === item)).map(item => PC(S(e, item)))), r.reason;
    return await An(e, {
      recursive: !0,
      force: !0
    }), !0;
  } catch (error) {
    return t(`[builderGit] a private git directory is left in place (${k(error) ?? d(error)}): ${e}`, {
      level: "warn"
    }), !1;
  }
}
var Zi = 3600000;
async function jt(e, n, r) {
  let o = Date.now(),
    s = async () => n !== null && (await B9(e)) === n && Pn(await Q(e)),
    c = async p => {
      let E = /^claude-seed-admin-([0-9]+)-([0-9a-z]*)-/.exec(p);
      if (E === null && !p.startsWith("claude-seed-stage-")) return "kept";
      let R = S(e, p);
      if (o - (await Q(R)).mtimeMs < Zi) return "kept";
      if (E !== null && Qi(Number(E[1]))) {
        let w = E[2] ?? "",
          A = w === "" ? "" : await Vt(Number(E[1]), r);
        if (A === "" || FFe(w, A)) return "held";
      }
      if (!(await s())) throw Error("seed-admin is no longer the directory that was checked");
      return (await Ne(R, E === null ? [] : Gn)) ? "removed" : "failed";
    },
    u = (p, E) => (t(`[builderGit] sweeping ${e}: could not examine ${p} (${k(E) ?? d(E)})`, {
      level: "warn"
    }), "failed"),
    g = await we(e).catch(p => u("the list of its entries", p));
  if (g === "failed") return {
    removed: 0,
    errors: 1,
    held: 0
  };
  let m = await Promise.all(g.map(item => c(item).catch(E => k(E) === "ENOENT" ? "kept" : u(item, E)))),
    removed = U(m, p => p === "removed");
  if (removed > 0) t(`[builderGit] removed ${removed} folder(s) that killed builds left under ${e}`);
  return {
    removed: removed,
    errors: U(m, p => p === "failed"),
    held: U(m, p => p === "held")
  };
}
function Qi(e) {
  try {
    return process.kill(e, 0), !0;
  } catch (error) {
    return k(error) === "EPERM";
  }
}
async function Vt(e, n) {
  return ((await tc(e, {
    env: n()
  })) ?? "").replace(/[^0-9a-z]/gi, "").toLowerCase().slice(0, 24);
}
var oe = Symbol("in-tree settings unreadable"),
  stderr_3 = "",
  stderr_2 = "this checkout's .claude/settings.json or .claude/settings.local.json cannot be read or parsed: fix or remove it (see /status), then retry \u2014 what it may grant a bound session is unknown, so no git runs";
function He(e) {
  let n = an(e.tree);
  return n === "unreadable" ? oe : _o([...e.roots, ...n], e.tree);
}
function Te(e, n, r = We(Ae())) {
  return U$(e === void 0 || e === oe || n === void 0 ? e : mo(n, e), n, r);
}
function Kt(e) {
  let n = Yt(e);
  return n.OPENSSL_CONF_INCLUDE === void 0 ? e : {
    ...e,
    ...n
  };
}
function Yt(e) {
  let n = Ds(e, "OPENSSL_CONF");
  return n === void 0 || !z(n) || Ds(e, "OPENSSL_CONF_INCLUDE") !== void 0 ? {} : {
    OPENSSL_CONF_INCLUDE: Z(n)
  };
}
function no(e) {
  let n = Object.keys(e).filter(item => x() === "windows" ? item.toUpperCase() === "PATH" : item === "PATH");
  return {
    ...e,
    ...Object.fromEntries(n.map(item => [item, e[item] === void 0 ? void 0 : l$e(e[item])]))
  };
}
function U$(e, n, r = Ae()) {
  let o = no(Kt(r));
  if (e === void 0) return o;
  let s = Object.keys(o).filter(item => x() === "windows" ? item.toUpperCase() === "PATH" : item === "PATH"),
    c = Object.keys(o).flatMap(item => {
      let C = x() === "windows" ? jDt.find(K => K === item.toUpperCase()) : jDt.find(K => K === item);
      return C === void 0 ? [] : [[item, C]];
    }),
    u = new Set(c.map(([T]) => T)),
    g = Object.keys(o).filter(item => !u.has(item) && LTe(item) && item.toUpperCase() !== "GIT_CONFIG_NOSYSTEM"),
    m = g.map(item => [item, Zn(item)]),
    h = m.flatMap(([T, C]) => C === null ? [] : [[T, C]]),
    p = m.flatMap(([T, C]) => C === null ? [T] : []),
    E = new Set(g),
    R = Object.keys(o).filter(item => !u.has(item) && !E.has(item) && (x() === "windows" ? item.toUpperCase() !== "PATH" : item !== "PATH") && cze(item));
  if (e === oe) return {
    ...vo(o, [...c.map(([T]) => T), ...R, ...g]),
    PATH: "",
    ...Object.fromEntries(s.map(item => [item, ""])),
    ...ct(o)
  };
  let w = _(e),
    A = (T, C, K, I) => {
      if (T === void 0) return I();
      let V = _([C, K]) + w,
        q = T.get(V);
      if (q !== void 0) return q;
      let ae = I();
      return T.set(V, ae), ae;
    },
    b = tr(e),
    P = qo(Ds(o, "PATHEXT")),
    D = new Map(),
    Y = (T, C) => !z(T) || uo(C, T) || A(n?.loaders, `loader:${C}`, T, () => C === "GIT_EXEC_PATH" ? or(T, b, D) : C === "DEVELOPER_DIR" ? Zo(T, b, D) : co.includes(C) ? Ee(T, b, D) : Tn(T, b, [], D)),
    y = c.flatMap(([T, C]) => {
      let K = o[T];
      if (K === void 0 || K === "") return [];
      let I = ao(C, K).map(item => mHr(item)),
        V = I.filter(item => !Y(item, C));
      if (V.length === I.length) return [];
      return lo.includes(C) ? [[T, null]] : [[T, V.length === 0 ? null : V.join(to)]];
    }),
    O = h.flatMap(([T, C]) => {
      let K = o[T];
      if (K === void 0) return [];
      let I = mHr(K);
      return !(x() !== "windows" && I === "/dev/null" && !b("/dev") && ze(I)?.isCharacterDevice() === !0 || K === "" && ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"].includes(T.toUpperCase())) && (!z(I) || A(n?.loaders, `codepath:${T}`, I, () => C === "file" ? Ee(I, b, D) : Tn(I, b, [], D))) ? [T] : [];
    }),
    G = y.flatMap(([T, C]) => C === null ? [T] : []),
    j = G.some(item => item.toUpperCase() === "OPENSSL_CONF_INCLUDE") ? Object.keys(o).filter(item => item.toUpperCase() === "OPENSSL_CONF") : [],
    v = [...G, ...R, ...p, ...O, ...j];
  return {
    ...(v.length === 0 ? o : vo(o, v)),
    ...Object.fromEntries(y.filter(item => item[1] !== null)),
    ...ct(o),
    ...Object.fromEntries(s.map(item => [item, A(n?.paths, `path:${P.join(";")}`, o[item] ?? "", () => Yo(o[item] ?? "", e, P))]))
  };
}
var to = ye;
function io() {
  let e = x() === "windows" ? Ds(U$(void 0), "SystemRoot") : void 0;
  return e !== void 0 && /^[A-Za-z]:[\\/]/.test(e) ? `${e.slice(0, 2)}${ne}` : Ye(process.execPath).root || ne;
}
function Je({
  file: file_2,
  startsOutside: startsOutside
}, r, {
  dir: o,
  env: env_3
}) {
  if (!startsOutside) return {
    file: file_2,
    args: [...r],
    cwd: o,
    env: env_3
  };
  let c = Object.keys(env_3).filter(item => /^(?:OLD)?PWD$/i.test(item));
  return {
    file: file_2,
    args: ["-C", Ve(o), ...r],
    cwd: io(),
    env: vo(env_3, c)
  };
}
function Me(e, n, {
  dir: dir_2,
  env: env_4,
  ...s
}) {
  return ent(Je(e, n, {
    dir: dir_2,
    env: env_4
  }), s);
}
function oo(e) {
  return e.exitCode === 128 && /^fatal: cannot change to '/m.test(C0e(e));
}
var so = S(Qr, "no-classpath");
function ct(e) {
  let n = Object.keys(e).filter(item => item.toUpperCase() === "CLASSPATH"),
    r = x() === "windows" && n.length > 0 ? n : L(["CLASSPATH", ...n]);
  return Object.fromEntries(r.map(item => [item, so]));
}
function ao(e, n) {
  if (e === "GIT_EXEC_PATH") return n.includes(ye) ? [n, ...n.split(ye)] : [n];
  if (e === "DEVELOPER_DIR" || e === "GIT_TEXTDOMAINDIR" || e === "OPENSSL_CONF" || e === "OPENSSL_CONF_INCLUDE" || e === "OPENSSL_MODULES" || e === "OPENSSL_ENGINES") return [n];
  if (x() === "windows") return n.split(ye);
  if (e === "LD_PRELOAD") return n.split(/[\s:]+/).filter(item => item !== "");
  if (e === "LD_LIBRARY_PATH") return n.split(/[:;]/);
  return n.split(":");
}
var lo = ["GIT_EXEC_PATH", "DEVELOPER_DIR", "GIT_TEXTDOMAINDIR", "OPENSSL_CONF_INCLUDE", "OPENSSL_MODULES", "OPENSSL_ENGINES"],
  co = ["LD_PRELOAD", "LD_AUDIT", "DYLD_INSERT_LIBRARIES", "NLSPATH", "OPENSSL_CONF"];
function uo(e, n) {
  return go.includes(e) && n.includes("$") || e === "NLSPATH" && n.includes("%");
}
var go = ["LD_PRELOAD", "LD_LIBRARY_PATH", "LD_AUDIT"];
function Dn(e) {
  let n = (r, o) => {
    let s = Ds(e, r);
    return s !== void 0 && s !== "" ? s : o;
  };
  return {
    GIT_TRACE2: n("GIT_TRACE2", "0"),
    GIT_TRACE2_EVENT: n("GIT_TRACE2_EVENT", "0"),
    GIT_TRACE2_PERF: n("GIT_TRACE2_PERF", "0"),
    GIT_TRACE2_ENV_VARS: n("GIT_TRACE2_ENV_VARS", ut),
    GIT_TRACE2_CONFIG_PARAMS: n("GIT_TRACE2_CONFIG_PARAMS", ut),
    GIT_TRACE2_MAX_FILES: n("GIT_TRACE2_MAX_FILES", "0")
  };
}
var ut = "-";
function Ln(e) {
  let GIT_CONFIG_GLOBAL = Ds(e, "GIT_CONFIG_GLOBAL"),
    GIT_CONFIG_SYSTEM = Ds(e, "GIT_CONFIG_SYSTEM");
  return {
    ...(GIT_CONFIG_GLOBAL !== void 0 && {
      GIT_CONFIG_GLOBAL: GIT_CONFIG_GLOBAL
    }),
    ...(GIT_CONFIG_SYSTEM !== void 0 && {
      GIT_CONFIG_SYSTEM: GIT_CONFIG_SYSTEM
    })
  };
}
function LZ() {
  let e = Ae(),
    n = Ds(e, "CLAUDE_CODE_TMPDIR");
  if (n !== void 0 && n !== "") return n;
  let r = x();
  if (r === "windows") {
    let s = Ds(e, "TEMP") ?? Ds(e, "TMP");
    return s !== void 0 && s !== "" ? s : ni();
  }
  let o = r === "macos" ? void 0 : Ds(e, "TMPDIR") ?? Ds(e, "TMP") ?? Ds(e, "TEMP");
  return o !== void 0 && o !== "" ? o.length > 1 && o.endsWith("/") ? o.slice(0, -1) : o : "/tmp";
}
function Ae() {
  let e = ap();
  if (e === void 0) return process.env;
  let n = mQt();
  if (x() !== "windows") return {
    ...e,
    ...n
  };
  let r = new Set(Object.keys(n).map(item => item.toUpperCase()));
  return {
    ...Ro(e, (o, s) => !r.has(s.toUpperCase())),
    ...n
  };
}
function Xt(e) {
  let n = TDt(e);
  return n === void 0 ? void 0 : He(n);
}
function j0i(e, n) {
  let r = Xt(e);
  if (r === void 0) return;
  let o = U$(void 0),
    s = Te(r === oe ? [] : r, n);
  return Bhs.find(item => Ds(o, item) !== void 0 && Ds(s, item) !== Ds(o, item) && !(item === "GIT_CONFIG_SYSTEM" && Fhs(Ds(o, "GIT_CONFIG_NOSYSTEM"))));
}
function TDt(e) {
  return e.bound === !0 ? {
    ...Jt(e.workTree, e),
    ...(e.startsInProject && {
      startsInProject: !0
    })
  } : void 0;
}
function vn(e, n) {
  return He(Jt(e, n));
}
function Zdo(keepsVolumes = !0) {
  return {
    roots: new Set(),
    keepsVolumes: keepsVolumes,
    paths: new Map(),
    loaders: new Map()
  };
}
function mo(e, n) {
  let r = weakMap.get(n) ?? new Set(),
    o = n.filter(item => r.has(item) || !e.keepsVolumes && Fn(item));
  for (let s of n) if (!o.includes(s)) e.roots.add(s);
  return L([...e.roots, ...o]);
}
function Fn(e) {
  return e === Ye(e).root;
}
function Jt(e, n) {
  let tree = n?.workTree ?? e;
  return {
    tree: tree,
    roots: zt(tree, [...EMn(tree), ...(n === void 0 ? [] : [CDt(n.commonDir)])])
  };
}
function _o(e, n) {
  let r = new Set(),
    o = new Set(),
    s = (g, m) => {
      let h = ho(g, m, n);
      for (let p of h) r.add(p);
      return h;
    },
    c = L([...e.filter(item => !dDn(item, 0)), ...L(e).flatMap(g => {
      if (dDn(g, 0)) return s(g, {
        spelling: g,
        verdict: "opaque"
      });
      let m = ySr(pQt(g, n), n, e_e());
      if (m.verdict !== "local") return s(g, m);
      let h = fe(m.spelling, n);
      if (h === null) return s(g, {
        ...m,
        verdict: "opaque"
      });
      return o.add(h), [h];
    })]),
    u = [...r].filter(item => !e.includes(item) && !o.has(item));
  if (u.length > 0) weakMap.set(c, new Set(u));
  return c;
}
var weakMap = new WeakMap();
function ho(e, n, r) {
  return t(`[builderGit] reach root ${Il(e, 256)} cannot be vouched for (${n.verdict}): counted as every volume`, {
    level: "warn"
  }), Cze(n.verdict === "foreign" ? {
    ...n,
    verdict: "opaque"
  } : n, r);
}
function po(tree_2, n) {
  return He({
    tree: tree_2,
    roots: zt(tree_2, n)
  });
}
function zt(e, n) {
  return L([e, ...n, ...Eo(e), ...Whs(), ...SMn(e)]);
}
function Eo(e) {
  let n = qe(e);
  return n.length === 0 ? [] : L([...n, Oe()].filter(z));
}
function CDt(e) {
  return be(e).toLowerCase() === ".git" ? Z(e) : e;
}
function EMn(e) {
  let n = fe(Oe(), e) ?? Oe(),
    r = o => {
      let s = Z(o);
      return s === o || gy(s, n) ? [] : [s, ...r(s)];
    };
  return r(e).filter(xn);
}
function eco(e) {
  return qe(e).find(item => gy(item, e) && !gy(e, item)) ?? null;
}
function qe(e) {
  let n = Oe();
  return n === "" ? [] : Zt(n, e);
}
function Abr(e) {
  return qe(e)[0] ?? null;
}
function xbr(e, n) {
  let r = Oe();
  if (r === "") return "elsewhere";
  let o = fe(r, n) ?? r;
  return o === e || r === e ? "home" : gy(e, o) || gy(e, r) ? "above_home" : "elsewhere";
}
function Zt(e, n) {
  let r = fe(e, n) ?? e;
  return L([...(z(r) ? On(r) : []), ...(z(e) ? On(e) : [])]).filter(Qt).filter(xn).sort((itemA, itemB) => itemA.split(ne).length - itemB.split(ne).length);
}
function So(e, n) {
  return Zt(e, n).at(-1) ?? null;
}
function On(e, n = yo) {
  let r = Z(e);
  return r === e || n === 0 ? [e] : [e, ...On(r, n - 1)];
}
var yo = Hhs;
async function wo(e, n) {
  if (th(e) || !z(e)) return null;
  let r = bo(e, n),
    o = L(r.nodes).filter(item => !r.links.has(item) && !r.cutAt.has(item) && Qt(item)).filter(xn).sort((itemA, itemB) => itemB.split(ne).length - itemA.split(ne).length);
  for (let checkout of o) if (await Oo(r, checkout)) return {
    kind: "held",
    checkout: checkout
  };
  let [at_2] = r.cutAt;
  return at_2 === void 0 ? null : {
    kind: "unvouched",
    at: at_2
  };
}
async function Oo(e, n) {
  let r = L(e.nodes).filter(item => gy(n, item));
  if (r.some(item => e.cutAt.has(item))) return !0;
  let o = r.filter(item => !e.links.has(item)),
    s = await Promise.all(o.map(To));
  return o.length === 0 || s.some(item => item === !0);
}
function bo(e, n) {
  let links = new Set(),
    cutAt = new Set(),
    s = 0,
    c = (g, m) => {
      let {
          root: root_3
        } = Ye(g),
        p = g.slice(root_3.length).split(ne === "/" ? /\/+/ : /[\\/]+/).filter(item => item !== "");
      return [root_3, ...u(root_3, [...p, ...m])];
    },
    u = (g, m) => {
      let [h, ...p] = m;
      if (h === void 0) return [];
      let E = S(g, h),
        R = Mn(E);
      if (R === "missing") return [E, ...p.map((item, index) => S(E, ...p.slice(0, index + 1)))];
      if (R === "opaque") return cutAt.add(E), [E];
      if (R.link === null) return [E, ...u(E, p)];
      links.add(E);
      let w = ++s > rr ? null : ySr(Uhs(R.link, g, n), n, e_e());
      if (w === null || w.verdict !== "local") return cutAt.add(E), [E];
      return [E, ...c(w.spelling, p)];
    };
  return {
    nodes: c(e, []),
    links: links,
    cutAt: cutAt
  };
}
async function To(e) {
  try {
    return await Kr(e, Fe.W_OK), !0;
  } catch (error) {
    let r = k(error);
    if (r === "ENOENT" || r === "ENOTDIR") return "absent";
    if (!(r === "EACCES" || r === "EPERM" || r === "EROFS")) return !0;
  }
  try {
    let n = process.getuid?.();
    return n === void 0 || (await Q(e)).uid === n;
  } catch (error) {
    let r = k(error);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : !0;
  }
}
function Qt(e) {
  return !RG(e) && !Ao(e);
}
function Ao(e) {
  return !1;
}
var ko = 391;
function xn(e) {
  return Po(S(e, ".git")) || Io(e);
}
function Io(e) {
  return be(e).toLowerCase() !== ".git" && (["HEAD", "objects", "refs"].every(item => Co(S(e, item))) || ze(S(e, "worktrees"))?.isDirectory() === !0 && Go(S(e, "config")));
}
function Co(e) {
  return ze(e) !== void 0;
}
function Po(e) {
  try {
    return kn(e, {
      throwIfNoEntry: !1
    }) !== void 0;
  } catch (error) {
    let r = k(error);
    return !(r === "ENOTDIR" || r === "ELOOP" || r === "ENAMETOOLONG");
  }
}
var ft = 4096,
  No = /^[ \t]*\[core\]/im;
function Go(e) {
  if (ze(e)?.isFile() !== !0) return !1;
  try {
    let n = qr(e, Cc());
    try {
      let r = Buffer.alloc(ft),
        o = zr(n, r, 0, ft, 0),
        s = r.toString("latin1", 0, o).replace(/^\xEF\xBB\xBF/, "");
      return No.test(s);
    } finally {
      Jr(n);
    }
  } catch {
    return !1;
  }
}
var Do = 1048576;
async function W0i(e, n, r) {
  for (let y of ["config", "config.worktree"]) {
    let file_3 = S(e, y),
      G = await je(file_3, !1);
    if (G.kind === "unread") return {
      kind: "unread",
      file: file_3
    };
    if (G.kind === "shared") return {
      kind: "second_name",
      file: file_3
    };
    if (G.kind === "read" && G.hasInclude) return {
      kind: "includes",
      file: file_3
    };
    if (G.kind === "read" && G.coreWorktree) return {
      kind: "work_tree",
      file: file_3
    };
    if (G.kind === "read" && r && G.worktreeConfigOn) return {
      kind: "worktree_config",
      file: file_3
    };
  }
  let o = qe(n),
    s = o.length === 0 ? [] : L([Oe(), ...o].flatMap(item => [item, ...fn(item, n)])),
    c = an(n);
  if (c === "unreadable") return {
    kind: "settings_unreadable",
    file: S(n, ".claude")
  };
  let u = (await Promise.all(L([...SMn(n), ...c]).map(async item => {
      let O = await Eze(await Tze(item, n), n, e_e());
      return O.verdict === "local" ? await nr(L([item, O.spelling, ...fn(O.spelling, n)])) : Cze(O.verdict === "foreign" ? {
        ...O,
        verdict: "opaque"
      } : O, n);
    }))).flat(),
    g = L([...[n, e, CDt(e)].flatMap(item => [item, ...fn(item, n)]), ...u, ...(await Fo(await Pbr(n), n)), ...s]),
    m = async (y, O) => {
      if (th(O)) return !0;
      let G = await Eze(await Tze(O, n), n, e_e());
      if (G.verdict !== "local") return !0;
      let j = fe(G.spelling, n);
      return j === null || y.some(item => gy(item, O) || gy(item, j));
    },
    h = y => m(g, y),
    p = y => wo(y, n),
    E = async y => {
      for (let O of y) if (await h(O)) return O;
      return;
    },
    R = U$(void 0),
    w = 0,
    A = async (y, O, G) => {
      for (let j of y) {
        let v = /^%\(prefix\)\/(.*)$/s.exec(j);
        if (v !== null && !z(v[1] ?? "") && j.split(/[/\\]/).includes("..")) return "includes";
        let X = v !== null && z(v[1] ?? "") ? v[1] ?? j : j,
          T = Nt(X, O, n);
        if (T.some(item => item.includes("\uFFFD") || cDn(item))) return "unread";
        if ((await E(T)) !== void 0) return "includes";
        for (let C of T) {
          let K = await p(C);
          if (K?.kind === "unvouched") return "unread";
          if (K !== null) return {
            kind: "config_in_checkout",
            checkout: K.checkout
          };
        }
        for (let C of T) {
          if (w++, G >= Lo || w > Cbr) return "unread";
          let K = await je(C, !0);
          if (K.kind === "unread") return "unread";
          if (K.kind === "shared") return "second_name";
          if (K.kind === "read") {
            let I = P(K);
            if (I !== "clear") return I;
            let V = await A(K.includes, `file:${C}`, G + 1);
            if (V !== "clear") return V;
          }
        }
      }
      return "clear";
    },
    b = (kind_2, file_4) => typeof kind_2 === "string" ? {
      kind: kind_2,
      file: file_4
    } : {
      kind: "config_in_checkout",
      file: file_4,
      checkout: kind_2.checkout
    },
    P = y => y.coreWorktree ? "work_tree" : r && y.worktreeConfigOn ? "worktree_config" : "clear",
    D = Hn(R);
  if (D === null) return {
    kind: "unread",
    file: file_5
  };
  for (let {
    key: key_15,
    value: value_7
  } of D) {
    let G = key_15.toLowerCase();
    if (G === "core.worktree") return {
      kind: "work_tree",
      file: file_5
    };
    if (r && G === "extensions.worktreeconfig" && (value_7 === void 0 || Rn(value_7))) return {
      kind: "worktree_config",
      file: file_5
    };
    if (er(G) && value_7 !== void 0) {
      let j = await A([value_7], "command line:", 0);
      if (j !== "clear") return b(j, file_5);
    }
  }
  let Y = L(Nhs([], n, null, R));
  for (let file_6 of Y) {
    if (file_6.includes("\uFFFD") || cDn(file_6)) return {
      kind: "unread",
      file: file_6
    };
    if (o.length > 0 && (await m(s, file_6))) return {
      kind: "home_checkout",
      file: file_6,
      checkout: o[0]
    };
    if (await h(file_6)) return {
      kind: "includes",
      file: file_6
    };
    let O = await p(file_6);
    if (O?.kind === "unvouched") return {
      kind: "unread",
      file: file_6
    };
    if (O !== null) return {
      kind: "config_in_checkout",
      file: file_6,
      checkout: O.checkout
    };
    if (fe(file_6, n) === file_6 && (await Ho(file_6))) continue;
    let G = await je(file_6, !0);
    if (G.kind === "device") continue;
    if (G.kind === "unread") return {
      kind: "unread",
      file: file_6
    };
    if (G.kind === "shared") return {
      kind: "second_name",
      file: file_6
    };
    if (G.kind === "read") {
      let kind_3 = P(G);
      if (kind_3 !== "clear") return {
        kind: kind_3,
        file: file_6
      };
      let v = await A(G.includes, `file:${file_6}`, 0);
      if (v !== "clear") return b(v, file_6);
    }
  }
  return {
    kind: "clear"
  };
}
var file_5 = "the launch environment (GIT_CONFIG_*)",
  Lo = 4;
function er(e) {
  return e === "include.path" || e.startsWith("includeif.") && e.endsWith(".path");
}
function Hn(e) {
  let n = [],
    r = Ds(e, "GIT_CONFIG_COUNT");
  if (r !== void 0 && r !== "") {
    if (!/^\d+$/.test(r.trim())) return null;
    for (let s = 0; s < Number(r); s++) {
      let key_16 = Ds(e, `GIT_CONFIG_KEY_${s}`),
        value_8 = Ds(e, `GIT_CONFIG_VALUE_${s}`);
      if (key_16 === void 0 || value_8 === void 0) return null;
      n.push({
        key: key_16,
        value: value_8
      });
    }
  }
  let o = Ds(e, "GIT_CONFIG_PARAMETERS");
  if (o !== void 0 && o.trim() !== "") {
    let s = xo(o);
    if (s === null) return null;
    n.push(...s);
  }
  return n;
}
async function Fo(e, n) {
  let r = await Promise.all(e.map(async o => ({
    root: o,
    local: (await Eze(await Tze(o, n), n, e_e())).verdict === "local"
  })));
  return [...(await nr(r.filter(({
    local: local
  }) => local).map(({
    root: root_4
  }) => root_4))), ...r.filter(({
    local: local_2
  }) => !local_2).map(({
    root: root_5
  }) => root_5)];
}
async function nr(e) {
  return (await Promise.all(e.map(async item => {
    if (!z(item)) return null;
    try {
      let o = await Q(item);
      return o.isCharacterDevice() || o.isFIFO() || o.isSocket() ? null : item;
    } catch {
      return item;
    }
  }))).filter(item => item !== null);
}
var un = /[ \t\n\r]/;
function xo(e) {
  let n = [],
    r = 0,
    o = () => {
      if (e[r] !== "'") return null;
      let s = "";
      r++;
      for (;;) {
        let c = e.indexOf("'", r);
        if (c === -1) return null;
        if (s += e.slice(r, c), r = c + 1, e[r] === "\\" && r + 2 < e.length && e[r + 2] === "'") {
          s += e[r + 1], r += 3;
          continue;
        }
        return s;
      }
    };
  while (r < e.length) {
    while (r < e.length && un.test(e[r] ?? "")) r++;
    if (r >= e.length) break;
    let key_17 = o();
    if (key_17 === null) return null;
    if (e[r] === "=") {
      if (r++, r >= e.length || un.test(e[r] ?? "")) {
        n.push({
          key: key_17,
          value: void 0
        });
        continue;
      }
      let value_9 = o();
      if (value_9 === null) return null;
      n.push({
        key: key_17,
        value: value_9
      });
    } else {
      let c = key_17.indexOf("=");
      n.push(c === -1 ? {
        key: key_17,
        value: void 0
      } : {
        key: key_17.slice(0, c).trim(),
        value: key_17.slice(c + 1)
      });
    }
    if (r < e.length && !un.test(e[r] ?? "")) return null;
  }
  return n;
}
async function Ho(e) {
  try {
    return (await Q(e)).isCharacterDevice();
  } catch {
    return !1;
  }
}
async function je(e, n) {
  let r;
  try {
    if (!n && x() === "windows" && !(await Q(e)).isFile()) return {
      kind: "unread"
    };
    r = await Ce(e, n ? Fe.O_RDONLY | Mo() : Cc());
  } catch (error) {
    let s = k(error);
    return s === "ENOENT" || s === "ENOTDIR" ? {
      kind: "absent"
    } : {
      kind: "unread"
    };
  }
  try {
    let o = await r.stat();
    if (o.isCharacterDevice()) return {
      kind: "device"
    };
    if (!o.isFile() || o.size > Do) return {
      kind: "unread"
    };
    if (await zLi(e, o)) return {
      kind: "shared"
    };
    let s = Buffer.alloc(o.size),
      {
        bytesRead: bytesRead_3
      } = await r.read(s, 0, o.size, 0);
    if (bytesRead_3 !== o.size) return {
      kind: "unread"
    };
    let u = s.toString("utf8");
    return pwe(u) ? {
      kind: "unread"
    } : $o(u);
  } catch {
    return {
      kind: "unread"
    };
  } finally {
    await r.close().catch(() => {});
  }
}
function Mo() {
  return x() === "windows" ? 0 : Fe.O_NONBLOCK;
}
function $o(e) {
  let includes = [],
    hasInclude = !1,
    coreWorktree = !1,
    worktreeConfigOn = !1,
    saysBare = !1,
    inertWorktreeKeysOnly = !0,
    g = !1;
  return CMr(e, {
    header(m) {
      hasInclude ||= gt(m.name), inertWorktreeKeysOnly &&= m.name === "core" && !m.quoted;
    },
    entry(m, h, p) {
      if (inertWorktreeKeysOnly &&= m?.name === "core" && !m.quoted && Bo.has(h), m === null) return;
      if (gt(m.name) && h === "path") if (p === void 0) g = !0;else includes.push(p);
      if (m.name === "core" && !m.quoted && h === "worktree") coreWorktree = !0;
      if (m.name === "extensions" && !m.quoted && h === "worktreeconfig") worktreeConfigOn = p === void 0 || Rn(p);
      if (m.name === "core" && !m.quoted && h === "bare") saysBare ||= p === void 0 || Rn(p);
    },
    malformed() {
      g = !0;
    }
  }, {
    maxLines: 1 / 0
  }), g ? {
    kind: "unread"
  } : {
    kind: "read",
    includes: includes,
    hasInclude: hasInclude,
    coreWorktree: coreWorktree,
    worktreeConfigOn: worktreeConfigOn,
    saysBare: saysBare,
    inertWorktreeKeysOnly: inertWorktreeKeysOnly
  };
}
var Bo = new Set(["hookspath", "untrackedcache", "longpaths"]);
function Rn(e) {
  let n = e.trim().toLowerCase();
  return !(["false", "no", "off", ""].includes(n) || /^[-+]?(0x)?0+[kmg]?$/.test(n));
}
function gt(e) {
  let n = tt(e, ".");
  return n === "include" || n === "includeif";
}
function ze(e) {
  try {
    return kn(e, {
      throwIfNoEntry: !1
    });
  } catch {
    return;
  }
}
function fe(e, n) {
  if (dDn(e, 0)) return null;
  let [r, o] = Uo(e),
    s = bn(r, n);
  return s === null ? null : S(s, o);
}
function Uo(e) {
  let n = x() === "windows" ? null : x() === "macos" ? 1024 : 4096;
  if (n === null || Buffer.byteLength(e) < n) return [e, ""];
  let r = e.lastIndexOf(ne, n - 1);
  while (r > 0 && Buffer.byteLength(e.slice(0, r)) >= n) r = e.lastIndexOf(ne, r - 1);
  return r > 0 ? [e.slice(0, r), e.slice(r + 1)] : [e, ""];
}
function bn(e, n, r = [], o = 0) {
  if (dDn(e, r.length)) return null;
  try {
    return S(Jv(It.native(e)), ...r);
  } catch {
    let s = o < Wo ? Ko(e) : null;
    if (s !== null) {
      let {
        spelling: spelling_2,
        verdict: verdict_2
      } = Uhs(s.text, s.dir, n);
      return verdict_2 === "local" ? bn(spelling_2, n, r, o + 1) : null;
    }
    let c = Z(e);
    return c === e ? S(e, ...r) : bn(c, n, [be(e), ...r], o);
  }
}
function fn(spelling_3, n) {
  let r = fe(spelling_3, n);
  return r === null ? Cze({
    spelling: spelling_3,
    verdict: "opaque"
  }, n) : [r];
}
var Wo = 8,
  xe = "git was not found on the PATH this process was started with";
function jo(e) {
  let n = Abr(e);
  return n === null ? "" : `; the home directory counts here because it ${xbr(n, e) === "home" ? "is itself" : "lies inside"} a git checkout (${n})`;
}
var Vo = `${xe} (directories a cloud session bound here can write \u2014 inside this checkout or a checkout enclosing it, such as a worktree\u2019s main checkout; below your home directory when it is, or lies inside, a git checkout; a session temp directory; one whose git links into those \u2014 and directories that name or lead to another host are not searched)`,
  yms = "If one of the directories that a cloud session can write cannot be examined, or is too deep or too long to resolve, every directory is left out; the debug log names the one to fix.";
function CMn(e, n, r = n) {
  return ca(e, r) || A_(e, n, r);
}
function Ko(e) {
  try {
    let text = kt(e),
      dir_3 = z(text) ? Z(e) : It(Z(e));
    return {
      text: text,
      dir: dir_3
    };
  } catch {
    return null;
  }
}
function Yo(e, n, r) {
  let o = tr(n),
    s = new Map();
  return e.split(ye).map(item => mHr(item)).filter(item => item !== "" && z(item) && ve(item, o, r, s)).join(ye);
}
function ve(e, n, r, o = new Map()) {
  if (Ee(e, n, o)) return !1;
  let s = fe(e, n.anchor);
  if (s === null) return !1;
  return r.every(item => {
    let u = `${e}${ne}${item}`;
    if (WDt(u, n.anchor)) return !1;
    let g = o.get(u) ?? Mn(u);
    if (o.set(u, g), g === "missing") return !n(u) && !n(S(s, item));
    if (g !== "opaque" && g.link === null) {
      let m = fe(u, n.anchor);
      return m !== null && !n(u) && !n(m);
    }
    return !Ee(u, n, o);
  });
}
function tr(e) {
  return Object.assign(n => e.some(item => gy(item, n)), {
    beneath: n => e.some(item => gy(n, item) && !gy(item, n)),
    anchor: e[0] ?? ne
  });
}
function Ee(e, n, r, o = rr) {
  if (!z(e) || cDn(e) || e.startsWith("\\\\?\\") || WDt(e, n.anchor) || n(e) || n.beneath(e)) return !0;
  let {
      root: root_6
    } = Ye(e),
    c = e.slice(root_6.length).split(ne === "/" ? /\/+/ : /[\\/]+/).filter(item => item !== "" && item !== "."),
    u = root_6;
  for (let [m, h] of c.entries()) {
    u = h === ".." ? Z(u) : S(u, h);
    let p = r.get(u);
    if (p === void 0 && (n(u) || WDt(u, n.anchor))) return !0;
    let E = p ?? Mn(u);
    if (r.set(u, E), E === "opaque") return !0;
    if (E === "missing") {
      let R = fe(e, n.anchor);
      return R === null || n(R) || n.beneath(R) || c.slice(m + 1).some((item, index) => n(S(u, ...c.slice(m + 1, m + 2 + index))));
    }
    if (E.link !== null) {
      if (o === 0) return !0;
      let R = z(E.link) ? E.link : `${Z(u)}${ne}${E.link}`;
      return Ee([R, ...c.slice(m + 1)].join(ne), n, r, o - 1);
    }
  }
  let g = fe(e, n.anchor);
  return g === null || n(g) || n.beneath(g);
}
var rr = 40;
function Mn(e) {
  try {
    let n = kn(e, {
      throwIfNoEntry: !1
    });
    if (n === void 0) return "missing";
    if (!n.isSymbolicLink()) return {
      link: null
    };
    let r = kt(e);
    return {
      link: Jv(r.replace(/^\\\?\?\\/, "\\\\?\\"))
    };
  } catch (error) {
    return k(error) === "ENOTDIR" ? "missing" : "opaque";
  }
}
var ir = x() === "windows" ? ["git", "powershell.exe"] : ["git", "ps"],
  Xo = [".exe", ".com", ".cmd", ".bat", ".vbs", ".vbe", ".js", ".jse", ".wsf", ".wsh", ".msc"],
  Jo = 32;
function qo(e) {
  let n = x() === "windows" ? L([...Xo, ...(e ?? "").split(";").map(item => item.trim().toLowerCase()).filter(item => /^\.[^.\\/]+$/.test(item)).slice(0, Jo)]) : [];
  return ir.flatMap(item => x() === "windows" && !item.includes(".") ? [item, ...n.map(o => item + o)] : [item]);
}
function or(e, n, r) {
  return Tn(e, n, ir, r);
}
function Tn(e, n, r, o) {
  if (Ee(e, n, o)) return !0;
  let s = zo(e);
  return s === null || !ve(e, n, [...s, ...r], o);
}
function zo(e) {
  try {
    let n = At(e, {
      withFileTypes: !0
    }).filter(item => x() === "windows" || !item.isFile()).map(item => item.name);
    return n.length > sr ? null : n;
  } catch (error) {
    let r = k(error);
    return r === "ENOENT" || r === "ENOTDIR" ? [] : null;
  }
}
function Zo(e, n, r) {
  return [e, S(e, "Contents", "Developer")].some(item => {
    if (Ee(item, n, r)) return !0;
    let s = Ee(S(item, "Toolchains"), n, r) ? null : Qo(S(item, "Toolchains")),
      c = s === null ? null : [item, ...s.map(u => S(item, "Toolchains", u))];
    return c === null || !ve(S(item, "usr", "lib"), n, ["libxcrun.dylib"], r) || !ve(S(item, "usr", "bin"), n, ["xcrun", "xcodebuild"], r) || c.some(item => !ve(S(item, "usr", "bin"), n, ["git"], r) || or(S(item, "usr", "libexec", "git-core"), n, r));
  });
}
function Qo(e) {
  try {
    let n = At(e);
    return n.length > sr ? null : n;
  } catch (error) {
    let r = k(error);
    return r === "ENOENT" || r === "ENOTDIR" ? [] : null;
  }
}
var sr = 1024;
class RDt {
  #e = new Map();
  screenMemo;
  constructor(e = "host") {
    this.screenMemo = e === "host" ? void 0 : Zdo(e === "operation");
  }
  gitExeOnPath(e) {
    let n = Ds(e, "PATH") ?? "",
      r = this.#e.get(n);
    if (r !== void 0) return r;
    let o = $n(n);
    if (o !== null) this.#e.set(n, o);
    return o;
  }
}
var _t = /\.(?:exe|com)$/i;
function $n(e, n = "win32") {
  let r = kj("git", e);
  if (n !== "win32" || r === null || _t.test(r)) return r;
  let o = kj("git.exe", e);
  return o !== null && _t.test(o) ? o : null;
}
function _ms() {
  let e = Ds(Jdo(), "PATH") ?? "";
  return $n(e) === null && kj("git", e) !== null;
}
function ns() {
  return x() === "windows" ? " (only git.exe counts; git.cmd and git.bat wrappers are skipped)" : "";
}
function bms() {
  return x() === "windows" ? " On Windows, that directory must hold git.exe itself, since git.cmd and git.bat wrappers are skipped." : "";
}
var ts = new W(() => new RDt());
function fze() {
  return ts.of(H().host);
}
function Re(e, n = fze()) {
  return n.gitExeOnPath(e);
}
function ht(detail_2, home) {
  return {
    kind: "failed",
    reason: "setup",
    cause: "home",
    home: home,
    detail: detail_2,
    [Symbol.asyncDispose]: async () => {}
  };
}
function ie(detail_3, cause_2) {
  return {
    kind: "failed",
    reason: cause_2 === "placement" ? "placement" : "setup",
    cause: cause_2,
    detail: detail_3,
    [Symbol.asyncDispose]: async () => {}
  };
}
async function Pbr(e) {
  let n = Whs(),
    r = await Promise.all(n.map(async item => {
      let s = await Eze(await Tze(item, e), e, e_e());
      if (s.verdict === "local") {
        let c = await pe(s.spelling).catch(() => fe(s.spelling, e));
        return c === null ? Cze({
          ...s,
          verdict: "opaque"
        }, e) : [c];
      }
      return t(`[builderGit] session temp root ${Il(item, 256)} cannot be vouched for (${s.verdict}): nothing under any volume is`, {
        level: "warn"
      }), Cze(s.verdict === "foreign" ? {
        ...s,
        verdict: "opaque"
      } : s, e);
    }));
  return L([...n, ...r.flat()]);
}
async function rs(e) {
  let n = S(e, ".git"),
    r = await Q(n).catch(() => null);
  if (r === null || r.isDirectory()) return {
    kind: "not_file"
  };
  if (!r.isFile()) return {
    kind: "refuse",
    why: "git_file"
  };
  let o = uDn(await $7t(n, {
    oneName: !0
  }).catch(() => {
    return;
  }));
  if (o === void 0 || CMn(o, e) || Oc(O0e(e, o))) return {
    kind: "refuse",
    why: "git_file"
  };
  let adminDir = await pe(O0e(e, o)).catch(() => null);
  if (adminDir === null) return {
    kind: "refuse",
    why: "admin_dir"
  };
  if (Oc(adminDir)) return {
    kind: "refuse",
    why: "admin_dir"
  };
  if (be(Z(adminDir)) !== "worktrees") return {
    kind: "refuse",
    why: "git_file",
    adminDir: adminDir
  };
  let commonDir_5 = Z(Z(adminDir));
  if (Un(await Bn(adminDir), adminDir) !== commonDir_5) return {
    kind: "refuse",
    why: "common_dir",
    adminDir: adminDir
  };
  let u = _Sr(await $7t(S(adminDir, "gitdir")).catch(() => {
    return;
  }));
  if ((u === null || CMn(u, adminDir, e) || Oc(O0e(adminDir, u)) ? null : await pe(O0e(adminDir, u)).catch(() => null)) !== n) return {
    kind: "refuse",
    why: "back_link",
    adminDir: adminDir
  };
  if (!(await dr(commonDir_5, e))) return {
    kind: "refuse",
    why: "placement",
    adminDir: adminDir
  };
  return {
    kind: "chain",
    adminDir: adminDir,
    commonDir: commonDir_5
  };
}
async function is(e, n, r, o) {
  let s = detail_4 => ({
    kind: "linked_worktree",
    detail: detail_4
  });
  if (CMn(n, e) || CMn(r, e) || Oc(n) || Oc(r)) return s("admin_dir");
  let [c, u] = await Promise.all([pe(n).catch(() => null), pe(r).catch(() => null)]);
  if (c === null || u === null) return {
    kind: "unread",
    detail: "the git directory could not be resolved"
  };
  if (Oc(c) || Oc(u)) return s("admin_dir");
  let [g, m, h, p] = await Promise.all([pt(c), B9(o.adminDir), pt(u), B9(Z(Z(c)))]),
    E = g?.id ?? null,
    R = h?.id ?? null;
  if (E !== null && E === R) return {
    kind: "git_file"
  };
  if (E === null || m !== E || be(Z(c)) !== "worktrees" || R === null || p !== R) return s("admin_dir");
  let [w, A] = await Promise.all([St(c), St(u)]),
    b = w !== null && A !== null && "id" in w && "id" in A;
  if (fs([w, A]) || b && (w.identity !== E || A.identity !== R)) return {
    kind: "unread",
    detail: "the git directory changed while it was read"
  };
  if (!b && w !== null) {
    let Y = [w, A].flatMap(item => item !== null && "unread" in item ? [item.unread] : []).join(", ");
    t(`[builderGit] ${c}: mount ids unread (${Y}); the admin dir is compared with the common dir by device alone`);
  }
  if (!Et({
    id: E,
    mountId: b ? w.id : null
  }, {
    id: R,
    mountId: b ? A.id : null
  }) && !(b && Et({
    id: E,
    mountId: null
  }, {
    id: R,
    mountId: null
  }) && (await cs({
    dir: c,
    mountId: w.id
  }, {
    dir: u,
    mountId: A.id
  })))) return s("foreign_mount");
  if (Un(await Bn(c), c) !== u) return s("common_dir");
  if (!(await dr(u, e))) return s("placement");
  let gitDirBorn = g?.born,
    commonDirBorn = h?.born;
  return {
    kind: "vouched",
    gitDir: c,
    gitDirId: E,
    ...(gitDirBorn !== void 0 && {
      gitDirBorn: gitDirBorn
    }),
    commonDir: u,
    commonDirId: R,
    ...(commonDirBorn !== void 0 && {
      commonDirBorn: commonDirBorn
    })
  };
}
async function ss(e, n, r) {
  if (r === null || Oc(r)) return !1;
  let resolved = await pe(r).catch(() => null);
  if (resolved === null) return "unresolved";
  if (resolved === n) return !0;
  let s = S(r, ".git"),
    id_4 = await B9(r),
    id_5 = await B9(s),
    g = await pe(s).catch(p => ["ENOENT", "ENOTDIR"].includes(k(p) ?? "") ? null : "unresolved"),
    m = {
      id: e.id ?? (await B9(e.resolved)),
      resolved: e.resolved
    };
  return [{
    id: id_4,
    resolved: resolved
  }, {
    id: id_5,
    resolved: g === "unresolved" ? null : g
  }].some(item => ar(item, m)) || (g === "unresolved" ? "unresolved" : !1);
}
function ar(e, n) {
  return e.id !== null && n.id !== null && H7t(e.id) === "an_object" && H7t(n.id) === "an_object" ? e.id === n.id : e.resolved !== null && e.resolved === n.resolved;
}
async function dr(e, n) {
  let r = e.split(ne).filter(item => item !== ""),
    o = r.at(-1) ?? "",
    s = u => u.toLowerCase() === ".git" || u.toLowerCase().endsWith(".git");
  if (!s(o) || r.slice(0, -1).some(s)) return !1;
  if (gy(n, e) || gy(e, n)) return !1;
  return !(await Pbr(n)).some(item => gy(item, e));
}
async function as(e, layout_3, signal_6, probes_5) {
  let s = await Eb(e, ["config", "--file", S(layout_3.commonDir, "config"), "--bool", "--default=false", "extensions.worktreeConfig"], {
    hardened: !0,
    layout: layout_3,
    signal: signal_6,
    probes: probes_5
  });
  return s.code !== 0 ? null : s.stdout.trim() === "true";
}
async function ds(e, layout_4, signal_7, probes_6) {
  let [s, c] = await Promise.all([Eb(e, ["config", "--file", S(layout_4.commonDir, "config"), "--bool", "--default=false", "extensions.worktreeConfig"], {
    hardened: !0,
    layout: layout_4,
    signal: signal_7,
    probes: probes_6
  }), Sms(layout_4.gitDir)]);
  if (s.code !== 0 || c === "unread") return "unread";
  if (c !== "absent") return (await ls(layout_4.gitDir)) ? "inert" : "file";
  return s.stdout.trim() === "false" ? "absent" : "extension";
}
async function ls(e) {
  let n = await je(S(e, "config.worktree"), !1);
  return n.kind === "read" && n.inertWorktreeKeysOnly;
}
function Sms(e) {
  return Q(S(e, "config.worktree")).then(n => n.isFile() && n.nlink === 1 && n.size === 0 ? "absent" : "standing", n => {
    let r = k(n);
    return r === "ENOENT" || r === "ENOTDIR" ? "absent" : "unread";
  });
}
async function pt(e) {
  try {
    let n = await Q(e, {
      bigint: !0
    });
    return n.isDirectory() ? {
      id: `${n.dev}:${n.ino}`,
      born: nys(n)
    } : null;
  } catch {
    return null;
  }
}
function Et(e, n) {
  let r = o => o.slice(0, o.indexOf(":"));
  return r(e.id) === r(n.id) && e.mountId === n.mountId;
}
async function cs(e, n) {
  let r;
  try {
    r = await bt("/proc/self/mountinfo", "utf8");
  } catch {
    return !1;
  }
  let o = E => E.replace(/\\([0-7]{3})/g, (R, w) => String.fromCharCode(parseInt(w, 8))),
    s = new Map();
  for (let E of r.split(`
`)) {
    let R = E.split(" ");
    if (R.length >= 5 && (R[0] === e.mountId || R[0] === n.mountId)) s.set(R[0], {
      device: R[2],
      root: o(R[3]),
      point: o(R[4])
    });
  }
  let c = s.get(e.mountId),
    u = s.get(n.mountId);
  if (c === void 0 || u === void 0) return !1;
  let g = (E, R) => {
      let w = hn(R.point, E);
      return w.startsWith("..") || z(w) ? null : S(R.root, w);
    },
    m = g(e.dir, c),
    h = g(n.dir, u),
    p = hn(n.dir, e.dir);
  return c.device === u.device && m !== null && h !== null && !p.startsWith("..") && !z(p) && m === S(h, p);
}
var us = new Set(["ENOENT", "ENOTDIR", "ELOOP", "ENAMETOOLONG"]);
function fs(e) {
  return e.some(item => item !== null && "unread" in item && item.stage === "open" && us.has(item.unread));
}
var lr = u0 | Fe.O_DIRECTORY | Fe.O_NOFOLLOW | ro;
async function St(e) {
  return null;
}
function gn(e, n) {
  return e === "not_held" || e !== "gone" && e.id === n;
}
function yt(...e) {
  return {
    kind: "failed",
    detail: "a git directory was replaced after the read opened it, or could not be opened",
    why: "changed_under_hold",
    unopened: e.includes("gone")
  };
}
function gs() {
  return vnt() === "1" && !ei().toLowerCase().includes("microsoft-standard");
}
function wms() {
  let e = [];
  return {
    hold: async n => {
      if (u0 === 0 || gs()) return "not_held";
      try {
        let r = await Ce(n, lr);
        e.push(r);
        let o = await r.stat({
          bigint: !0
        });
        return {
          id: `${o.dev}:${o.ino}`
        };
      } catch (error) {
        return t(`[builderGit] could not open a directory to hold it: ${k(error) ?? d(error)}`), "gone";
      }
    },
    [Symbol.asyncDispose]: async () => {
      await Promise.all(e.splice(0).map(item => item.close().catch(() => {})));
    }
  };
}
async function B9(e) {
  try {
    let n = await Q(e, {
      bigint: !0
    });
    return n.isDirectory() ? `${n.dev}:${n.ino}` : null;
  } catch {
    return null;
  }
}
function H7t(e) {
  let [, n, r] = /^(-?\d+):(-?\d+)$/.exec(e) ?? [];
  return n === void 0 || r === void 0 ? "unreadable" : BigInt(n) === 0n || sa(BigInt(r)) ? "none" : "an_object";
}
function z0i(e, n, r) {
  if (r === null || e.workTreeId === void 0 || H7t(r) === "unreadable" || H7t(e.workTreeId) === "unreadable") return "not_known";
  let o = e.workTree === Wft(n);
  return e.workTreeId === r && (o || H7t(r) === "an_object") ? "the_same" : o ? "another_at_the_path" : "another_elsewhere";
}
function Wft(e) {
  return x() === "windows" ? e.replaceAll("\\", "/") : e;
}
function ms(e, n) {
  return L([e, n].flatMap(item => [Z(item), Wft(Z(item))])).join(ye);
}
async function Ge(e, n) {
  let r = e;
  for (let o of n.slice(0, -1)) {
    r = S(r, o);
    let s = await ce(r);
    if (s !== "directory") return s === "absent" ? "absent" : "other";
  }
  return ce(S(r, n.at(-1)));
}
var wt = 4096;
async function Bn(e) {
  try {
    let n = await $7t(S(e, "commondir"));
    return _Sr(n) ?? void 0;
  } catch (error) {
    return k(error) === "ENOENT" ? null : void 0;
  }
}
async function $7t(e, n = {}) {
  return ((await Ot(e, n)) ?? (await Ot(e, n)))?.text;
}
async function Ot(e, {
  tail: tail,
  oneName = !1
}) {
  let o = x() === "windows" ? await Q(e, {
    bigint: !0
  }) : null;
  if (o !== null && !o.isFile()) return {
    text: void 0
  };
  let s = await Ce(e, Cc());
  try {
    let c = await s.stat({
      bigint: !0
    });
    if (o !== null && fY(o, c)) return t(`[builderGit] ${e}, once opened, had file number ${c.ino}, not the ${o.ino} that the lstat before it saw; nothing of it was read`), null;
    let u = Number(c.size);
    if (!c.isFile() || oneName && c.nlink !== 1n || tail === void 0 && u > wt) return {
      text: void 0
    };
    let g = Math.min(u, tail ?? wt),
      m = Buffer.alloc(g),
      {
        bytesRead: bytesRead_4
      } = await s.read(m, 0, g, u - g);
    if (bytesRead_4 !== g) return {
      text: void 0
    };
    let p = oneName ? await s.stat({
      bigint: !0
    }) : c;
    return {
      text: p.nlink === c.nlink && p.ctimeNs === c.ctimeNs ? m.toString("utf8") : void 0
    };
  } finally {
    await s.close();
  }
}
function Un(e, n) {
  if (e === void 0) return;
  let r = e === null ? "." : e.length > 1 && e.endsWith("/") ? e.slice(0, -1) : e;
  return r === "." ? n : r === "../.." ? Z(Z(n)) : r;
}
function mn(e) {
  let n = x() === "windows" ? /\r?\n$/ : /\n$/;
  return n.test(e) ? e.replace(n, "") : null;
}
function _s({
  gitDir: e,
  commonDir: n,
  workTree: r,
  adminDir: o,
  pinnedIndexFile: s
}) {
  return o === void 0 ? {
    GIT_DIR: e,
    GIT_COMMON_DIR: n,
    GIT_WORK_TREE: r,
    ...(s !== void 0 && {
      GIT_INDEX_FILE: s
    })
  } : {
    GIT_DIR: o,
    GIT_WORK_TREE: r,
    GIT_INDEX_FILE: S(o, "index")
  };
}
var cr = String.raw`^(include|includeif\..*)\.path$`,
  regExp = new RegExp(cr, "s");
var ps = /^includeif\.(?:gitdir(?:\/i)?|hasconfig):/s,
  Obr = {
    LC_ALL: "C",
    LANGUAGE: "C"
  },
  ur = {
    GIT_TEST_COMMIT_GRAPH: "0",
    GIT_TEST_MULTI_PACK_INDEX: "0"
  },
  Es = {
    ...ur,
    GIT_ALLOW_PROTOCOL: GIT_ALLOW_PROTOCOL,
    GIT_TERMINAL_PROMPT: "0",
    ...Obr,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_GRAFT_FILE: x() === "windows" ? "\\\\.\\NUL\\no-grafts" : "/dev/null/no-grafts"
  },
  Ss = {
    GIT_REF_PARANOIA: "1"
  },
  zft = {
    ...ur,
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_GRAFT_FILE: x() === "windows" ? "\\\\.\\NUL\\no-grafts" : "/dev/null/no-grafts"
  },
  fr = ["core.useReplaceRefs", "false"],
  ws = [["core.commitGraph", "false"], ["core.multiPackIndex", "false"], ["pack.useBitmaps", "false"], ["pack.readReverseIndex", "false"], fr],
  gr = e => e.flatMap(([n, r]) => ["-c", `${n}=${r}`]),
  Mce = gr(ws),
  RMn = gr([fr]),
  kms = ["-c", "core.safecrlf=false"],
  Os = ["-c", "submodule.recurse=false", ...kms, ...Mce],
  Rt = 67108864;
var ADt = "If this project is not on GitHub yet, you can create a repository at https://github.com/new and push to it.";
import { basename as pr, delimiter as gl, dirname as Ze, isAbsolute as Is, join as Cs } from "path";
import { writeSync as Rs } from "fs";
class jn {
  #e = new Map();
  #n = De();
  hold(e) {
    this.#e.set(e.sessionId, e), e.onAnswered(() => this.#n.emit(e.sessionId)), this.#n.emit(e.sessionId);
  }
  release(e) {
    if (e.close()) this.#n.emit(e.sessionId);
  }
  of(e) {
    return this.#e.get(Ld(e));
  }
  ready(e) {
    return this.of(e)?.open() === !0;
  }
  concerns(e) {
    return this.of(e) !== void 0;
  }
  onChanged(e, n) {
    let r = Ld(e);
    return this.#n.subscribe(o => {
      if (o === r) n();
    });
  }
}
var bs = 8,
  Ts = 2000;
class _r {
  attachSyncs = new jn();
  servedCallHolds = null;
  #e = new Map();
  #n = new Map();
  #r = new Map();
  #i = new Map();
  #o;
  #a = null;
  #t = new Map();
  #d = !1;
  #l = !1;
  #c = new Set();
  #u = new Set();
  register(e, n) {
    let r = Ld(e);
    this.#e.delete(r), this.#n.delete(r), this.#r.delete(r), Vn(this.#e).forEach(item => {
      let c = this.#e.get(item);
      this.#e.delete(item), c?.then(u => this.retire(u.sessionId), () => {});
    }), this.#e.set(r, n);
  }
  noteSilentlyNotArmed(e, n) {
    let r = Ld(e);
    this.#n.delete(r), Vn(this.#n).forEach(item => this.#n.delete(item)), this.#n.set(r, n);
  }
  silentlyNotArmed(e) {
    return this.#n.get(Ld(e));
  }
  noteNotOptedIn(e, n) {
    let r = Ld(e);
    this.#r.delete(r), Vn(this.#r).forEach(item => this.#r.delete(item)), this.#r.set(r, n);
  }
  notOptedIn(e) {
    return this.#r.get(Ld(e));
  }
  take(e) {
    let n = Ld(e),
      r = this.#e.get(n);
    return this.#e.delete(n), r;
  }
  reportSendGateAnswers(e, n) {
    return Promise.resolve(!1);
  }
  noteResumeCommandOnScreen(e) {
    this.#a = Ld(e);
  }
  hold(e, n) {
    let r = Ld(e.sessionId);
    this.retire(r), this.#n.delete(r), this.#r.delete(r);
    let o = Ml() ? (u, g) => ks(this.#a === r ? g ?? u : u) : void 0,
      s = null,
      shutDownOnce = u => s ??= (async () => {
        await e.sync.shutdown(n, u), await e.sync.drain(x5);
      })();
    this.#t.set(r, {
      unregister: vt(() => shutDownOnce(o)),
      shutDownOnce: shutDownOnce,
      sync: e.sync,
      root: e.gitRoot
    }), this.#s(r);
  }
  consentMayHaveChanged() {}
  retire(e) {
    let n = Ld(e),
      r = this.#t.get(n);
    if (r === void 0) return;
    this.#t.delete(n), r.unregister(), r.sync.shutdown(0), this.#s(n);
  }
  async shutDown(e) {
    let n = Ld(e),
      r = this.#t.get(n);
    if (r === void 0) return;
    let o = Date.now(),
      s = await r.shutDownOnce(void 0).then(() => !1, c => (a(F(c)), !0));
    if (this.#t.get(n) === r) this.#t.delete(n), r.unregister(), this.#s(n);
  }
  watchState(e, n) {
    let r = Ld(e),
      o = this.#i.get(r);
    if (o === void 0) o = {
      changed: De(),
      listening: 0,
      last: mr(this.stateOf(r))
    }, this.#i.set(r, o);
    let s = o,
      c = s.changed.subscribe(n);
    if (s.listening += 1, this.#o === void 0) this.#o = setInterval(() => {
      [...this.#i.keys()].forEach(item => this.#s(item));
    }, Ts), this.#o.unref?.();
    let u = !0;
    return () => {
      if (!u) return;
      if (u = !1, c(), s.listening -= 1, s.listening === 0 && this.#i.get(r) === s) this.#i.delete(r);
      if (this.#i.size === 0 && this.#o !== void 0) clearInterval(this.#o), this.#o = void 0;
    };
  }
  #s(e) {
    let n = this.#i.get(e);
    if (n === void 0) return;
    let r = this.stateOf(e),
      o = mr(r);
    if (o === n.last) return;
    n.last = o;
    try {
      n.changed.emit(r);
    } catch (error) {
      a(F(error));
    }
  }
  stateOf(e) {
    return this.#t.get(Ld(e))?.sync.state();
  }
  syncOf(e) {
    return this.#t.get(Ld(e))?.sync;
  }
  servedCallFaceOf(e) {
    let n = Ld(e);
    return this.syncOf(n);
  }
  rootOf(e) {
    return this.#t.get(Ld(e))?.root;
  }
  tellUnknownEngineWord() {
    if (this.#d) return !1;
    return this.#d = !0, !0;
  }
  sayUnknownEngineWord() {
    if (this.#l) return !1;
    return this.#l = !0, !0;
  }
  sayGitNotOnStartPath(e) {
    if (this.#c.has(e)) return !1;
    return this.#c.add(e), !0;
  }
  wholeListingOutgrew(e) {
    return this.#u.has(e);
  }
  noteWholeListingOutgrew(e) {
    this.#u.add(e);
  }
  get heldCount() {
    return this.#e.size;
  }
  get exitHookCount() {
    return this.#t.size;
  }
}
function As() {
  return new _r();
}
var vms = new W(As);
function NW() {
  return vms.of(H().host);
}
function G0i(e) {
  return NW().take(e);
}
function ks(e) {
  try {
    Rs(2, `${Ca(e)}
`);
  } catch {}
}
function Vn(e) {
  return [...e.keys()].slice(0, Math.max(0, e.size + 1 - bs));
}
function mr(e) {
  switch (e?.state) {
    case void 0:
      return "none";
    case "seeding":
      return "seeding";
    case "armed":
      return `armed:${e.engine}:${e.direction}`;
    case "off":
      return `off:${e.reason}`;
    case "stopped":
      return `stopped:${e.reason}`;
  }
}
var Ps = new W(() => new Map()),
  Ns = new W(() => new Map()),
  timeout = 15000;
function Ls(e) {
  return new RDt("operation");
}
function Er(e) {
  let n = e[0] ?? "",
    r = Ps.of(H().host),
    o = r.get(n);
  if (o !== void 0) return o;
  let s = new RDt("checkout");
  return r.set(n, s), s;
}
function Yn(e, n = qn()) {
  return e === void 0 || e === oe ? U$(e, void 0, n) : Te(e, Er(e).screenMemo, n);
}
function Ibr(e) {
  return {
    file: vs(e),
    startsOutside: e !== void 0
  };
}
function vs(e) {
  let n = e === void 0 || e === oe ? Re(U$(e)) : Re(Yn(e), Er(e));
  if (n !== null) return n;
  let settings_unreadable = e === oe,
    o = typeof e === "object" ? e : [],
    found = typeof e === "object" ? Re(U$(void 0)) : null,
    volumes = o.filter(Fn),
    volume_in_reach = found !== null && volumes.some(item => gy(item, found)),
    only_inside_reach = typeof e === "object" && !volume_in_reach && found !== null,
    cause_3 = settings_unreadable ? "settings_unreadable" : volume_in_reach ? "volume_in_reach" : only_inside_reach ? "only_inside_reach" : "not_on_path";
  if (NW().sayGitNotOnStartPath(cause_3)) {
    let tree_3 = o[0] ?? "",
      homeCheckout = cause_3 === "only_inside_reach" ? Abr(tree_3) : null;
    t(`[screenedGit] ${nn({
      cause: cause_3,
      tree: tree_3,
      found: found,
      volumes: volumes,
      homeCheckout: homeCheckout
    })}`, {
      level: "warn"
    }), en({
      only_inside_reach: only_inside_reach,
      settings_unreadable: settings_unreadable,
      volume_in_reach: volume_in_reach,
      home_checkout: homeCheckout !== null
    });
  }
  return Jn(e);
}
async function Xn(e, n) {
  let {
      dir: r,
      env: env_5,
      signal: s,
      startsInProject: startsInProject_2 = !1
    } = n,
    startsOutside_2 = !startsInProject_2,
    g = {
      ...Ibr(e),
      startsOutside: startsOutside_2
    },
    m = g.file,
    h = {
      file: Jn(e),
      startsOutside: startsOutside_2
    };
  if (m === h.file) return h;
  let p = await Hs(async () => {
    let E = await Me(g, ["version"], {
      dir: r,
      env: {
        ...env_5,
        ...Obr
      },
      abortSignal: s,
      timeout: timeout,
      stdin: "ignore",
      preserveOutputOnError: !1
    });
    return E.code === 0 ? E.stdout : null;
  }, xs(g, r));
  if (SHi(p === null ? null : tLe(p))) return g;
  if (p === null && s?.aborted) return h;
  if (NW().sayGitNotOnStartPath("old_git")) t(`[screenedGit] ${nn({
    cause: "old_git",
    tree: r,
    found: m,
    volumes: [],
    homeCheckout: null
  })}`, {
    level: "warn"
  }), en({
    old_git: !0
  });
  return h;
}
var Fs = {
  only_inside_reach: !1,
  reach_unplaced: !1,
  settings_unreadable: !1,
  volume_in_reach: !1,
  home_checkout: !1,
  old_git: !1,
  did_not_run_from_outside: !1
};
function en(e) {
  l("tengu_dir_sync_git_not_on_start_path", {
    ...Fs,
    ...e
  });
}
function nn({
  cause: cause_4,
  tree: tree_4,
  found: found_2,
  volumes: volumes_2,
  homeCheckout: homeCheckout_2
}) {
  let c = tree_4 === "" ? "" : ` (${tree_4})`,
    u = found_2 ?? "git";
  switch (cause_4) {
    case "settings_unreadable":
      return stderr_2;
    case "volume_in_reach":
      return `no screened git runs here${c} this time: a whole volume (${volumes_2.filter(item => gy(item, u)).join(", ")}) counts as writable by the bound cloud session for now, so ${u} is not vouched for. If it persists, either a grant names a whole volume, or a directory the session can write could not be examined (the \xABcannot be vouched for\xBB line above names that directory)`;
    case "only_inside_reach":
      return homeCheckout_2 === null ? `no screened git runs here${c}: ${u}, the git on the PATH this process was started with, stands where the bound cloud session can write (this checkout, one enclosing it, a directory granted to the session, a linked tree's main checkout), links into such a place, or is on another host \u2014 and nothing there is searched. Install or link git elsewhere on that PATH and restart Claude Code` : `no screened git runs here${c}: your home directory is a git checkout, or lies in one (${homeCheckout_2}), so a cloud session bound there could write everything beneath it, and ${u} stands there or somewhere else a session can write; nothing there is searched. Install or link git outside your home (the system's or a package manager's directory) and restart Claude Code, or move the .git directory out of ${homeCheckout_2} (kept elsewhere, it keeps its history)`;
    case "not_on_path":
      return "git is not on the absolute entries of the PATH this process was started with; no screened git runs";
    case "did_not_run_from_outside":
      return "";
    case "old_git":
      return `git reads made before a cloud session starts (such as which remote this checkout uses, or which pushed commit to start from) were skipped here${c}: ${u} is older than 2.32, or its version could not be read, and only git 2.32 or newer can be told to ignore your personal git configuration file \u2014 a file a cloud session could change when your home directory is itself a git checkout. Update git to 2.32 or newer and restart Claude Code`;
    case "reach_unplaced":
      return `git reads made before a cloud session starts (such as which remote this checkout uses, or which pushed commit to start from) were skipped here${c} this time: what a bound cloud session can write could not be worked out from this checkout\u2019s git layout, or there is no usable git on the PATH to read it with (the \xABcould not work out\xBB line above, at debug level, says which)`;
  }
}
function Jn(e) {
  if (x() !== "windows") return "/nonexistent/git-not-on-the-PATH-this-process-was-started-with";
  let n = Ds(U$(void 0), "SystemRoot");
  return Cs(n !== void 0 && /^[A-Za-z]:[\\/]/.test(n) && e !== oe && !(e ?? []).some(item => gy(item, n) || gy(n, item)) ? n : "C:\\Windows", "System32", "git-not-on-the-PATH-this-process-was-started-with.exe");
}
function xs({
  file: file_7,
  startsOutside: startsOutside_3
}, r) {
  return `${file_7}\x00${r}\x00${startsOutside_3}`;
}
function Hs(e, n) {
  let r = Ns.of(H().host),
    o = r.get(n);
  if (o !== void 0) return o;
  let s = () => (r.delete(n), null),
    c = e().then(u => {
      if (u === null) return s();
      let g = tLe(u);
      try {
        l("tengu_dir_sync_git_version", {
          release: g !== null,
          major: g?.major ?? 0,
          minor: g?.minor ?? 0,
          in_shims_folder: pr(Ze(tt(n, "\x00"))) === "shims"
        });
      } catch {}
      return u;
    }, s);
  return r.set(n, c), c;
}
function Ms(e = qn()) {
  return Ln(Yn(void 0, e));
}
function hr(e, n, r) {
  let o = r ?? qn(),
    base_2 = Yn(n, o);
  return {
    ...ys({
      ...Ms(o),
      ...Us,
      ...{},
      ...Dn(base_2),
      ...e
    }, {
      base: base_2
    }),
    GIT_CONFIG: void 0,
    ...wMn
  };
}
var Be = Symbol("reach unplaced");
async function tco(e, n, startsInProject_3 = !1) {
  let o = performance.now(),
    s = await Qdo(e, n, {
      linkedTrees: !0,
      bound: !0,
      startsInProject: startsInProject_3,
      probes: Ls(e)
    }),
    c = Bs(e, s),
    cut_short = n?.aborted === !0;
  try {
    l("tengu_cloud_launch_git_layout_read", {
      outcome: f(c === Be ? "unplaced" : c === oe ? "nothing_vouched" : s.kind === "read" ? "placed" : "widened"),
      reason: cut_short ? void 0 : de($s(s)),
      cut_short: cut_short,
      git_within_reach: s.kind === "failed" && s.why !== "changed_under_hold" && s.withinReach === !0,
      duration_ms: Math.round(performance.now() - o)
    });
  } catch {}
  return c;
}
function $s(e) {
  if (e.kind === "read") return;
  if (e.kind === "tampered") return e.misplaced;
  return e.why === "changed_under_hold" ? e.why : e.why ?? e.cause;
}
function Bs(e, n) {
  if (n.kind === "read") return vn(e, n.layout);
  let r = n.kind === "tampered" && n.misplaced !== "temp_root" ? [n.commonDir, n.gitDir].find(item => Is(item)) : void 0;
  if (r === void 0) {
    if (n.kind === "failed" && n.why === "settings_unreadable") return oe;
    if (n.kind === "failed" && n.why !== "changed_under_hold" && n.cause === "git_did_not_run_from_outside" && NW().sayGitNotOnStartPath("did_not_run_from_outside")) t(`[screenedGit] ${nn({
      cause: "did_not_run_from_outside",
      tree: e,
      found: null,
      volumes: [],
      homeCheckout: null
    })}`, {
      level: "warn"
    }), en({
      did_not_run_from_outside: !0
    });
    let s = n.kind === "tampered" ? n.misplaced : n.detail.slice(0, 200) || "no message";
    return t(Nn(`[screenedGit] could not work out what a bound cloud session can write in ${e} (${n.kind}: ${s})`)), Be;
  }
  let commonDir_6 = pr(Ze(r)).toLowerCase() === "worktrees" ? Ze(Ze(r)) : r;
  return vn(e, {
    workTree: e,
    commonDir: commonDir_6
  });
}
async function V0i(e, n, signal_8, startsInProject_4 = !1) {
  if (e === Be) {
    if (!signal_8?.aborted && NW().sayGitNotOnStartPath("reach_unplaced")) t(`[screenedGit] ${nn({
      cause: "reach_unplaced",
      tree: n,
      found: null,
      volumes: [],
      homeCheckout: null
    })}`, {
      level: "warn"
    }), en({
      reach_unplaced: !0
    });
    let env_6 = Qe({}, oe),
      g = {
        file: Jn(oe),
        startsOutside: !startsInProject_4
      };
    return m => Je(g, m, {
      dir: n,
      env: env_6
    });
  }
  let env_7 = Qe({}, e),
    c = await Xn(e, {
      dir: n,
      env: env_7,
      signal: signal_8,
      startsInProject: startsInProject_4
    });
  return u => Je(c, u, {
    dir: n,
    env: env_7
  });
}
function Qe(e, n) {
  let r = We(Ae());
  if (n === void 0) return {
    ...hr(e, void 0, r),
    GIT_REFERENCE_BACKEND: Ds(r, "GIT_REFERENCE_BACKEND")
  };
  return {
    ...hr({
      ...e,
      GIT_CONFIG_GLOBAL: GIT_CONFIG_GLOBAL_2
    }, n, r),
    GIT_CONFIG_SYSTEM: void 0
  };
}
var Us = {
  GIT_ALLOW_PROTOCOL: GIT_ALLOW_PROTOCOL,
  GIT_NO_LAZY_FETCH: "1",
  GIT_TERMINAL_PROMPT: "0"
};
function qn() {
  return et(Ae());
}
var Dce = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/,
  Ws = /^0+$/;
function K0i(e) {
  return !Ws.test(e);
}
var js = 30000,
  Vs = 1e4,
  Sr = 1e4,
  Ks = 8,
  maxBuffer = 4194304;
async function Mbr({
  gitRoot: e,
  remoteName: remoteName,
  branch: branch,
  headCommit: headCommit,
  nameContaining = !1,
  countAhead = !1,
  sessionRoot: sessionRoot,
  sessionReach: sessionReach,
  startsInProject: startsInProject_5 = !1,
  gitEnvPins = {},
  unsetInGitChildren = [],
  staleBranch: staleBranch,
  signal: signal_9,
  deadlineMs: deadlineMs,
  onSearchAmongAllRefs: onSearchAmongAllRefs,
  withRefsAtHead = !0,
  onCreation: onCreation
}) {
  try {
    let D = sessionRoot === void 0 ? void 0 : sessionReach ?? (await tco(sessionRoot, signal_9, startsInProject_5));
    if (D === oe || D === Be) return {
      kind: "unknown",
      cause: "nothing_vouched"
    };
    if (headCommit !== void 0 && !Dce.test(headCommit)) return {
      kind: "unknown",
      cause: "not_a_commit_id"
    };
    let head = headCommit ?? "HEAD",
      env_8 = {
        ...Qe({
          ...gitEnvPins,
          GIT_GRAFT_FILE: "/dev/null",
          GIT_NO_REPLACE_OBJECTS: "1"
        }, D),
        ...Object.fromEntries(unsetInGitChildren.map(item => [item, void 0]))
      },
      O = D === void 0 ? Ibr(void 0) : await Xn(D, {
        dir: e,
        env: env_8,
        signal: signal_9,
        startsInProject: startsInProject_5
      }),
      G = async (M, B) => {
        let te = Math.max(1, Math.floor(deadlineMs ?? M)),
          se = os(signal_9, {
            timeoutMs: te,
            refTimer: !0
          });
        try {
          return await B((ue, input) => Me(O, [...yn, ...RMn, ...ue], {
            dir: e,
            env: env_8,
            abortSignal: se.signal,
            timeout: te,
            maxBuffer: maxBuffer,
            preserveOutputOnError: !1,
            ...(input === void 0 ? {
              stdin: "ignore"
            } : {
              input: input
            })
          }));
        } finally {
          se.cleanup();
        }
      },
      j = `refs/remotes/${remoteName}/`,
      staleRef = staleBranch === void 0 ? null : `${j}${staleBranch}`,
      X = staleBranch !== void 0 && staleBranch === branch,
      T = (M, pushed) => Qs(M, {
        remoteName: remoteName,
        pushed: pushed,
        staleRef: staleRef,
        head: head,
        headCommit: headCommit,
        nameContaining: nameContaining
      }),
      C = await G(Vs, async M => {
        if (branch !== "HEAD" && !X) {
          let le = await M(["show-ref", "--verify", "--quiet", `${j}${branch}`]);
          if (le.exitCode === 0) {
            if (!countAhead) return {
              kind: "on_remote"
            };
            let aheadCount = await Tr(M, `${j}${branch}`, head);
            if (aheadCount === null || aheadCount > 0 && (await M(["rev-parse", "--is-shallow-repository"])).stdout.trim() !== "false") return {
              kind: "on_remote"
            };
            return {
              kind: "on_remote",
              aheadCount: aheadCount
            };
          }
          if (le.exitCode !== 1) return {
            kind: "unknown",
            cause: "git_failed"
          };
        }
        let B = X ? !0 : await ea(M, remoteName);
        if (B !== !0) return {
          kind: "unknown",
          cause: B === null ? "git_failed" : "refspec_not_covering"
        };
        if (branch === "HEAD") return {
          kind: "search_all_refs",
          defaultBranch: null
        };
        let [te, se, {
            creationRead: creationRead,
            creation: creation,
            refsAt: refsAt
          }] = await Promise.all([ia(M, j).catch(() => null), qs(M, j).catch(() => []), Xs(M, branch).catch(() => "read_failed").then(async creationRead_2 => ({
            creationRead: creationRead_2,
            creation: typeof creationRead_2 === "object" ? creationRead_2 : null,
            refsAt: withRefsAtHead ? await zs(M, j, head, typeof creationRead_2 === "object" ? creationRead_2.commit : null).catch(() => ({
              atHead: [],
              atCreation: []
            })) : {
              atHead: [],
              atCreation: []
            }
          }))]),
          defaultBranch = te?.name === staleBranch ? null : te?.name ?? null,
          Se = creation === null ? null : Js(creation.from, remoteName),
          present = await Zs(M, L([...(te?.refs ?? []), ...se, ...refsAt.atHead.filter(item => item !== staleRef).slice(0, 1), ...refsAt.atCreation.filter(item => item !== staleRef).slice(0, 1), ...(Se === null ? [] : [Se])]).filter(item => item !== staleRef)).catch(() => []),
          ee = present.length === 0 ? null : await T(M, {
            kind: "own",
            present: present
          });
        if (ee?.kind !== "pushed_ancestor") return yr(onCreation, creation === null ? wr(creationRead) : "no_first_answer"), {
          kind: "search_all_refs",
          defaultBranch: defaultBranch
        };
        let orElse = {
            ...ee,
            fromOwnRefs: !0
          },
          _e = creation !== null && (creation.commit === orElse.commit || (await M(["merge-base", "--is-ancestor", creation.commit, orElse.commit])).exitCode === 0);
        return yr(onCreation, creation === null ? wr(creationRead) : _e ? "below_start" : "not_below_start"), _e ? orElse : {
          kind: "search_all_refs",
          defaultBranch: defaultBranch,
          orElse: orElse
        };
      });
    if (C.kind !== "search_all_refs") return C;
    let K = () => signal_9?.aborted === !0;
    if (K()) {
      if (C.orElse !== void 0) return C.orElse;
      return branch === "HEAD" ? {
        kind: "unknown",
        cause: "git_failed"
      } : {
        kind: "not_on_remote",
        searchFailure: "git_failed",
        defaultBranch: C.defaultBranch
      };
    }
    let I = () => G(js, M => T(M, {
        kind: "all"
      })),
      V = await I(),
      q = V.kind === "unknown" && V.cause === "git_failed" && !K(),
      ae = q ? await I() : V;
    try {
      onSearchAmongAllRefs?.(q ? 2 : 1);
    } catch {}
    let orElse_2 = C.orElse;
    if (orElse_2 !== void 0) return ae.kind === "pushed_ancestor" ? ae : orElse_2;
    if (X && ae.kind === "none") return {
      kind: "not_on_remote",
      searchFailure: "nothing_beneath",
      defaultBranch: C.defaultBranch
    };
    return ae.kind === "unknown" && branch !== "HEAD" ? {
      kind: "not_on_remote",
      searchFailure: ae.cause,
      defaultBranch: C.defaultBranch
    } : ae;
  } catch {
    return {
      kind: "unknown",
      cause: "threw"
    };
  }
}
function yr(e, n) {
  try {
    e?.(n);
  } catch {}
}
async function Xs(e, n) {
  let r = await e(["-c", "log.showSignature=false", "log", "-g", "--format=%H%x00%gs", `refs/heads/${n}`, "--"]);
  if (r.exitCode !== 0) return "read_failed";
  let o = r.stdout.split(`
`).filter(item => item.trim() !== "").at(-1),
    [commit = "", c = ""] = (o ?? "").split("\x00"),
    u = "branch: Created from ";
  return Dce.test(commit) && c.startsWith(u) ? {
    commit: commit,
    from: c.slice(u.length).trim()
  } : "none";
}
function wr(e) {
  return e === "read_failed" ? "read_failed" : "no_creation_entry";
}
function Js(e, n) {
  let r = `refs/remotes/${n}/`,
    o = `${n}/`,
    s = e.startsWith(r) ? e.slice(r.length) : e.startsWith(o) ? e.slice(o.length) : null;
  return s === null || s === "" || s === "HEAD" || /[\s~^:?*[\\]|\.\.|@\{/.test(s) ? null : `${r}${s}`;
}
async function qs(e, n) {
  let r = await e(["for-each-ref", "--format=%(refname)%00%(upstream)", "refs/heads/"]);
  if (r.exitCode !== 0) return [];
  return r.stdout.split(`
`).filter(Boolean).flatMap(item => {
    let [s = "", c = ""] = item.split("\x00");
    return [`${n}${s.slice(11)}`, c];
  }).filter(item => item.startsWith(n) && item.length > n.length && item !== `${n}HEAD`);
}
async function zs(e, n, r, o) {
  let s = await e(["for-each-ref", `--points-at=${r}`, ...(o === null ? [] : [`--points-at=${o}`]), "--format=%(objectname) %(refname)", n]);
  if (s.exitCode !== 0) return {
    atHead: [],
    atCreation: []
  };
  let c = s.stdout.split(`
`).flatMap(item => {
    let [commit_2 = "", ref = ""] = item.trim().split(" ");
    return ref.startsWith(n) && ref !== `${n}HEAD` ? [{
      commit: commit_2,
      ref: ref
    }] : [];
  });
  return {
    atHead: c.filter(item => item.commit !== o).map(item => item.ref),
    atCreation: c.filter(item => item.commit === o).map(item => item.ref)
  };
}
async function Zs(e, n) {
  let r = await br(n, Rr).reduce(async (acc, item) => {
      let u = await acc,
        g = await e(["for-each-ref", "--format=%(objectname) %(refname)", ...item]);
      if (g.exitCode !== 0) throw Error("for-each-ref failed");
      let m = g.stdout.split(`
`).flatMap(h => {
        let [commit_3 = "", ref_2 = ""] = h.trim().split(" ");
        return Dce.test(commit_3) && item.includes(ref_2) ? [{
          ref: ref_2,
          commit: commit_3
        }] : [];
      });
      return u.push(m), u;
    }, Promise.resolve([])),
    o = new Map(r.flat().map(({
      ref: ref_3,
      commit: commit_4
    }) => [ref_3, commit_4]));
  return n.flatMap(s => {
    let commit_5 = o.get(s);
    return commit_5 === void 0 ? [] : [{
      ref: s,
      commit: commit_5
    }];
  });
}
var Rr = 64;
function br(e, n) {
  return Array.from({
    length: Math.ceil(e.length / n)
  }, (r, o) => e.slice(o * n, (o + 1) * n));
}
async function Qs(e, {
  remoteName: remoteName_2,
  pushed: pushed_2,
  staleRef: staleRef_2,
  head: head_2,
  headCommit: headCommit_2,
  nameContaining: nameContaining_2
}) {
  let g = `refs/remotes/${remoteName_2}/`;
  try {
    if (pushed_2.kind === "all") {
      let b = await e(["for-each-ref", "--count=3", "--format=%(refname)", g]);
      if (b.exitCode !== 0) return {
        kind: "unknown",
        cause: "git_failed"
      };
      if (b.stdout.split(`
`).every(item => item.trim() === "" || staleRef_2 !== null && (item.trim() === staleRef_2 || item.trim() === `${g}HEAD`))) return {
        kind: "none",
        defaultBranch: null
      };
    }
    let m = await e(["--no-replace-objects", "rev-list", `--max-count=${Sr + 1}`, "--parents", head_2, ...(pushed_2.kind === "all" ? ["--not", ...(staleRef_2 === null ? [] : [`--exclude=${staleRef_2.slice(13)}`, `--exclude=${remoteName_2}/HEAD`]), `--remotes=${remoteName_2}`] : ["--stdin"]), "--"], pushed_2.kind === "all" ? void 0 : pushed_2.present.map(({
      commit: commit_6
    }) => `^${commit_6}`).join(`
`));
    if (m.exitCode !== 0) return {
      kind: "unknown",
      cause: "git_failed"
    };
    let h = m.stdout.split(`
`).map(item => item.trim().split(" ").filter(Boolean)).filter(item => item.length > 0);
    if (h.length > Sr) return {
      kind: "none",
      defaultBranch: await tn(e, g)
    };
    if (h.some(item => item.some(item => !Dce.test(item)))) return {
      kind: "unknown",
      cause: "git_failed"
    };
    if (h.length > 0) {
      let b = await e([...Mce, "--no-replace-objects", "rev-list", "--no-walk=unsorted", "--parents", "--stdin"], h.map(([P]) => P).join(`
`));
      if (b.exitCode !== 0) return {
        kind: "unknown",
        cause: "git_failed"
      };
      if (b.stdout.trim() !== m.stdout.trim()) return {
        kind: "unknown",
        cause: "parents_misstated"
      };
    }
    let commit_7, aheadCount_2;
    if (h.length === 0 && headCommit_2 !== void 0) commit_7 = headCommit_2, aheadCount_2 = 0;else if (h.length === 0) {
      let b = await e(["rev-parse", "-q", "--verify", "HEAD^{commit}"]),
        P = b.stdout.trim();
      if (b.exitCode !== 0 || !Dce.test(P)) return {
        kind: "unknown",
        cause: "git_failed"
      };
      commit_7 = P, aheadCount_2 = 0;
    } else {
      let b = new Set(h.map(([y]) => y)),
        P = L(h.flatMap(([, ...y]) => y.filter(item => !b.has(item)))).slice(0, Ks),
        [D, ...Y] = P;
      if (D === void 0) return {
        kind: "none",
        defaultBranch: await tn(e, g)
      };
      if (Y.length === 0) commit_7 = D, aheadCount_2 = h.length;else {
        let y = await ta(e, P, head_2);
        if (y === null) return {
          kind: "unknown",
          cause: "git_failed"
        };
        commit_7 = y.candidate, aheadCount_2 = Math.max(y.beyond, h.length);
      }
    }
    if (pushed_2.kind === "all") {
      let branch_2 = await ra(e, g, [g], commit_7, staleRef_2),
        containedIn = nameContaining_2 && branch_2 === null ? await Or(e, g, [g], commit_7, staleRef_2) : null;
      return {
        kind: "pushed_ancestor",
        commit: commit_7,
        aheadCount: aheadCount_2,
        branch: branch_2,
        ...(containedIn !== null && {
          containedIn: containedIn
        })
      };
    }
    let R = pushed_2.present.find(({
        commit: commit_8
      }) => commit_8 === commit_7),
      branch_3 = R === void 0 ? null : R.ref.slice(g.length),
      A = branch_3 ?? (await br(pushed_2.present.map(({
        ref: ref_4
      }) => ref_4), Rr).reduce(async (acc, item) => (await acc) ?? Or(e, g, item, commit_7, staleRef_2), Promise.resolve(null)));
    return {
      kind: "pushed_ancestor",
      commit: commit_7,
      aheadCount: aheadCount_2,
      branch: branch_3,
      ...(nameContaining_2 && branch_3 === null && A !== null && {
        containedIn: A
      }),
      ...(A !== null && {
        foundOn: A
      })
    };
  } catch {
    return {
      kind: "unknown",
      cause: "threw"
    };
  }
}
async function Tr(e, n, r) {
  let o = await e(["rev-list", "--count", `${n}..${r}`, "--"]),
    s = Number.parseInt(o.stdout.trim(), 10);
  return o.exitCode === 0 && Number.isSafeInteger(s) && s >= 0 ? s : null;
}
async function ea(e, n) {
  let r = await e(["config", "--get-all", `remote.${n}.fetch`]);
  if (r.exitCode === 1) return !1;
  if (r.exitCode !== 0) return null;
  return na(r.stdout.split(`
`).map(item => item.trim()).filter(Boolean), n);
}
function na(e, n) {
  if (e.some(item => item.startsWith("^"))) return !1;
  return e.some(item => {
    let [o, s] = item.replace(/^\+/, "").split(":");
    return o === "refs/heads/*" && s === `refs/remotes/${n}/*`;
  });
}
async function ta(e, n, r) {
  let o = await Promise.all(n.map(async c => ({
      candidate: c,
      beyond: await Tr(e, c, r)
    }))),
    s = null;
  for (let {
    candidate: candidate,
    beyond: beyond
  } of o) {
    if (beyond === null) return null;
    if (s === null || beyond < s.beyond) s = {
      candidate: candidate,
      beyond: beyond
    };
  }
  return s;
}
async function ra(e, n, r, o, s) {
  return Ar(e, n, r, ["--points-at", o], s);
}
async function Or(e, n, r, o, s) {
  return Ar(e, n, r, ["--contains", o], s);
}
async function Ar(e, n, r, o, s) {
  let [c, u] = await Promise.all([e(["for-each-ref", ...o, "--format=%(refname)", ...r]), tn(e, n)]);
  if (c.exitCode !== 0) return null;
  let g = h => r.length === 1 && r[0] === n ? !0 : r.includes(h),
    m = c.stdout.split(`
`).map(item => item.trim()).filter(item => item.startsWith(n) && item !== `${n}HEAD` && item !== s && g(item)).map(item => item.slice(n.length));
  return (u !== null && m.includes(u) ? u : null) ?? m[0] ?? null;
}
async function tn(e, n) {
  let r = await e(["symbolic-ref", "-q", `${n}HEAD`]),
    o = r.stdout.trim();
  if (r.exitCode !== 0 || !o.startsWith(n) || o.length <= n.length) return null;
  return (await e(["show-ref", "--verify", "--quiet", o])).exitCode === 0 ? o.slice(n.length) : null;
}
async function ia(e, n) {
  let r = await tn(e, n),
    o = L([...(r === null ? [] : [r]), ...S2n]),
    s = await e(["for-each-ref", "--format=%(refname)", ...o.map(item => `${n}${item}`)]);
  if (s.exitCode !== 0) return null;
  let c = s.stdout.split(`
`).map(item => item.trim()),
    u = o.filter(item => c.includes(`${n}${item}`)),
    [name_4] = u;
  return name_4 === void 0 ? null : {
    name: name_4,
    refs: u.map(item => `${n}${item}`)
  };
}
function q0i(e) {
  let r = `${{
    no_git: "This folder is not a git repository, so",
    trust_unconfirmed: "This folder's trust has not been confirmed, so its git remote was not read and",
    no_github_repository: "No GitHub repository was found for this folder, so"
  }[e]} the cloud session starts empty: nothing from this folder is copied into it.`;
  return e === "no_github_repository" ? `${r} ${ADt}` : r;
}
function Ems({
  branch: branch_4,
  host: host,
  revision: revision,
  advisesPush = !0,
  goneFromGithub = !1
}) {
  let c = oy(revision);
  return `Branch ${oy(branch_4)} ${goneFromGithub ? "is not on GitHub" : `is not on ${fo(host) ? "GitHub" : host} as of the last fetch`}, so the cloud session starts from the default branch, ${c}, instead, without the commits that ${c} lacks or any uncommitted changes.${advisesPush ? " Push the branch, then start a new session to use it." : ""}`;
}
function Tms({
  branch: branch_5,
  aheadCount: aheadCount_3,
  remoteName: remoteName_3,
  advisesPush: advisesPush_2
}) {
  let s = oy(branch_5),
    c = aheadCount_3 === 1;
  return `Branch ${s} is ${c ? "1 commit" : `${aheadCount_3.toLocaleString("en-US")} commits`} ahead of ${remoteName_3}/${s} (as last fetched), so the cloud session starts without ${c ? "it" : "them"} and without any uncommitted changes.${advisesPush_2 ? ` Push the branch and start a new session to have ${c ? "that commit" : "those commits"}.` : ""}`;
}
function Cms({
  branch: branch_6,
  start: start,
  remoteName: remoteName_4,
  host: host_2,
  byName: byName,
  carried: carried_2,
  isAheadOfRemote = !1,
  advisesPush: advisesPush_3 = !0
}) {
  let m = oy(branch_6),
    h = start.branch === null ? null : oy(start.branch),
    p = byName === null ? null : oy(byName),
    E = branch_6 === "HEAD" ? "This checkout is on a detached HEAD" : isAheadOfRemote ? `Branch ${m} is too far ahead of ${remoteName_4}/${m} to start from there` : `Branch ${m} is not on ${fo(host_2) ? "GitHub" : host_2}`,
    R = start.commit.slice(0, 12),
    w = h === null ? `commit ${R}` : `${remoteName_4}/${h} (${R})`,
    A = start.aheadCount === 1 ? "1 commit" : `${start.aheadCount} commits`,
    b = start.fromOwnRefs === !0 && start.foundOn !== void 0 && start.aheadCount > 0 ? `${remoteName_4}/${oy(start.foundOn)}` : null,
    P = start.fromOwnRefs === !0 && b === null && start.aheadCount > 0,
    D = start.aheadCount === 0 ? `its own commit, which ${h === null ? "the remote has" : `${remoteName_4}/${h} has`} (${R})` : b !== null ? `the newest commit beneath it that ${b} has (${R}), ${A} back` : P ? `a pushed commit beneath it, ${w}, ${A} back` : `the newest pushed commit beneath it, ${w}, ${A} back`,
    Y = p === null ? `the cloud session starts from ${D}` : `the cloud session starts from the tip of ${p} on ${host_2} instead (a host other than github.com is not asked for a commit by id)`,
    y = carried_2 || start.aheadCount === 0 && byName === null ? "" : `${b !== null ? ` Commits that ${b} lacks, and any uncommitted changes, stay on this machine` : P ? " Later commits and any uncommitted changes stay on this machine" : ` ${start.aheadCount === 0 ? "Uncommitted changes" : start.aheadCount === 1 ? "That commit and any uncommitted changes" : `Those ${start.aheadCount} commits and any uncommitted changes`} stay on this machine`}${advisesPush_3 || start.aheadCount === 0 ? "; push the branch to start from it" : ""}.`;
  return `${E}, so ${Y}.${y}`;
}
export { Vdo, MTe, dze, DTe, SMn, jft, pms, cze, LTe, L0i, C0e, N7t, kbr, vbr, Kdo, Ebr, qdo, Ydo, mms, Eb, Xdo, Tbr, Jdo, wMn, N0i, Qdo, Cbr, F0i, uze, kMn, hms, Rbr, H0i, $0i, gms, F7t, vMn, U0i, B0i, U$, LZ, j0i, TDt, Zdo, CDt, EMn, eco, Abr, xbr, W0i, file_5 as TMn, yms, CMn, RDt, _ms, bms, fze, Pbr, Sms, wms, B9, H7t, z0i, Wft, $7t, Obr, zft, Mce, RMn, kms, ADt, vms, NW, G0i, Ibr, tco, V0i, Dce, K0i, Mbr, q0i, Ems, Tms, Cms };