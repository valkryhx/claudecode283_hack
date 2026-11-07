// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b,
  de
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  Ke,
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  we,
  Ao
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  BPo,
  Sjs,
  wVn,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  x,
  _Hr
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  ir,
  Kt,
  LA
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  _bt,
  bAo
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  lHe,
  R7i,
  kKe,
  hT,
  be,
  Ga,
  kp,
  Ob
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  yd
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  wgo
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  rZ,
  Uh
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  M2t,
  V8n
} from "B:/~BUN/root/chunk-v2gnbkgg.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  readdir as C,
  readFile as V,
  stat as N
} from "fs/promises";
import {
  release as k
} from "os";
import {
  join as F
} from "path";
var z = 1500,
  A = 262144,
  X = 32,
  B = 16,
  w = /^[0-9][0-9A-Za-z.+_-]{0,23}$/,
  j = /^[a-z0-9_]{1,16}$/,
  U = /^[a-z0-9._-]{1,24}$/,
  J = /^[A-Za-z0-9_.-]{1,64}$/,
  G = ["swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...BPo],
  Y = new Set(["xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3"]),
  q = "/System/Library/CoreServices/SystemVersion.plist",
  y = "/Applications",
  W = "/Library/Developer/CommandLineTools/usr/bin",
  Z = "/usr/local/cuda/version.json",
  K = "/proc/driver/nvidia/version",
  Q = p(() => u({
    cuda: u({
      version: o()
    })
  }));

function M() {
  let n = v("tengu_bridge_host_profile", "off");
  return _bt.find((e) => e === n) ?? "off"
}

function G8n(n) {
  if (ee()) return "off";
  let e = (s) => s?.remoteControl?.shareHostProfile,
    r = [...kp(), be("policySettings"), be("flagSettings"), be("userSettings")].map(e),
    S = _bt.find((s) => r.includes(s)) ?? n,
    f = [S, e(Ga("userSettings")), ...LA.filter(Kt).map((s) => e(be(s)))];
  return _bt.find((s) => f.includes(s)) ?? S
}

function ee() {
  return [...Ob(), ...hT("flagSettings"), ...hT("userSettings"), ...LA.filter(Kt).flatMap((e) => hT(e))].some((e) => {
    if (e.path === "") return !0;
    if (e.statusOnly) return !1;
    if (e.severity !== "warning") return !0;
    return e.path === bAo || e.path === "remoteControl" || e.path.startsWith("remoteControl.")
  })
}
async function bJs(n) {
  if (n === void 0) return;
  try {
    let e = M();
    if (e === "off") return;
    let r = await kKe();
    ir();
    let S = G8n(e),
      f = R7i(),
      s;
    lHe(r.mdm, r.hkcu, r.wslInherits, r.whereAsked);
    try {
      ir(), s = G8n(e)
    } finally {
      lHe(f.mdm, f.hkcu, f.wslInherits, f.whereAsked), ir()
    }
    let _ = _bt.find((P) => P === S || P === s) ?? "off";
    if (_ === "off") return;
    if (_ === "basic" && n.mcp_servers !== void 0) {
      let {
        mcp_servers: P,
        ...h
      } = n;
      return h
    }
    return n
  } catch (e) {
    a(e);
    return
  }
}
async function LUo(n) {
  try {
    let e = M();
    if (e === "off") return;
    let r = G8n(e);
    if (r === "off") {
      l("tengu_bridge_host_profile_collect", {
        outcome: b("disabled")
      });
      return
    }
    return await te({
      includeMcpServers: r === "full",
      signal: n
    })
  } catch (e) {
    a(e);
    return
  }
}
async function te({
  includeMcpServers: n,
  signal: e
}) {
  let r = Date.now(),
    S = T();
  try {
    let f = await NUo({
      includeMcpServers: n,
      signal: e
    });
    if (f === void 0) return;
    let {
      profile: s,
      complete: _,
      aborted: P
    } = f;
    if (l("tengu_bridge_host_profile_collect", {
        outcome: _ ? b("ok") : P ? b("aborted") : b("partial"),
        duration_ms: Date.now() - r,
        tools_count: s.tools.length,
        mcp_count: s.mcp_servers?.length ?? 0,
        platform: de(S),
        arch: de("x64"),
        wsl: s.wsl === !0
      }), _) g("bridge_host_profile");
    else if (!P) c("bridge_host_profile", "deadline");
    return s
  } catch (f) {
    a(f), l("tengu_bridge_host_profile_collect", {
      outcome: b("error"),
      duration_ms: Date.now() - r,
      platform: de(S),
      arch: de("x64")
    }), m("bridge_host_profile", "error");
    return
  }
}
async function NUo({
  includeMcpServers: n,
  signal: e,
  alsoLookFor: r = [],
  maxTools: S = X
}) {
  let f = T();
  if (f === void 0) return;
  let s = [...G, ...r],
    _ = {
      pathTools: new Set,
      mcpServers: []
    },
    P = [oe(f, _), se(_), wVn(s, _.pathTools)];
  if (f === "darwin") P.push(re(_), ne(_));
  if (f === "linux") P.push(ie(_));
  if (n) P.push(ae(_));
  let h = we(Promise.all(P.map((E) => E.catch((D) => {
      a(D)
    }))).then(() => !0), z).then((E) => E === !0),
    O = !1,
    I = e === void 0 ? await h : await Ao(h, e, () => new Ke).catch(() => (O = !0, !1));
  return {
    profile: {
      platform: f,
      ...j.test("x64") && {
        arch: "x64"
      },
      ..._.osVersion !== void 0 && {
        os_version: _.osVersion
      },
      ..._.distro !== void 0 && {
        distro: _.distro
      },
      ...x() === "wsl" && {
        wsl: !0
      },
      tools: ce(f, _, s, S),
      ...n && {
        mcp_servers: _.mcpServers.slice(0, B)
      },
      collected_at: new Date().toISOString()
    },
    complete: I,
    aborted: O
  }
}

function T() {
  switch ("win32") {
    case "darwin":
    case "linux":
    case "win32":
      return "win32";
    default:
      return
  }
}
async function oe(n, e) {
  switch (n) {
    case "darwin":
      e.osVersion = await H(q, "ProductVersion");
      return;
    case "linux": {
      let r = await _Hr();
      if (r?.linuxDistroVersion && w.test(r.linuxDistroVersion)) e.osVersion = r.linuxDistroVersion;
      let S = r?.linuxDistroId?.toLowerCase();
      if (S && U.test(S)) e.distro = S;
      return
    }
    case "win32": {
      let r = k();
      if (w.test(r)) e.osVersion = r;
      return
    }
  }
}
async function H(n, e) {
  let r = await yd(n, A);
  if (r === null) return;
  let S = V8n(r),
    f = M2t(S) ? S[e] : void 0;
  return typeof f === "string" && w.test(f) ? f : void 0
}
async function re(n) {
  let e;
  try {
    e = await C(y)
  } catch {
    return
  }
  let r = e.filter((s) => /^Xcode.*\.app$/.test(s)).sort((s, _) => _.localeCompare(s, void 0, {
    numeric: !0
  }));
  if (r.length === 0) return;
  let S = r.includes("Xcode.app") ? "Xcode.app" : r[0],
    f = await H(F(y, S, "Contents", "version.plist"), "CFBundleShortVersionString");
  n.xcode = f === void 0 ? "xcode" : `xcode@${f}`
}
async function ne(n) {
  if (await R(W)) n.clt = "clt"
}
async function se(n) {
  let e = i.ANDROID_HOME ?? i.ANDROID_SDK_ROOT;
  if (e === void 0 || !await Sjs(e) || !await R(e)) return;
  n.androidSdk = "android-sdk"
}
async function ie(n) {
  let e = await yd(Z, A);
  if (e !== null) {
    let r = Q().safeParse(et(e, !1));
    n.cuda = r.success && w.test(r.data.cuda.version) ? `cuda@${r.data.cuda.version}` : "cuda";
    return
  }
  try {
    await V(K, "utf8"), n.cuda = "cuda"
  } catch {}
}
async function R(n) {
  try {
    return (await N(n)).isDirectory()
  } catch {
    return !1
  }
}
async function ae(n) {
  let e = new Set;
  for (let r of rZ) {
    if (r === "project") continue;
    let S;
    try {
      S = Object.keys(Uh(r, {
        expandVars: !1
      }).servers)
    } catch (s) {
      t(`[bridge:host-profile] could not read ${r} MCP config: ${d(s)}`, {
        level: "warn"
      });
      continue
    }
    let f = r === "managed" ? "enterprise" : r;
    for (let s of S) {
      if (!J.test(s) || e.has(s)) continue;
      e.add(s), n.mcpServers.push({
        name: s,
        scope: f
      })
    }
  }
}

function ce(n, e, r, S) {
  let f = n !== "darwin" || e.xcode !== void 0 || e.clt !== void 0,
    s = r.filter((P) => e.pathTools.has(P) && (f || !Y.has(P))),
    _ = [e.xcode, e.clt, ...s.filter((P) => P === "swift"), e.androidSdk, e.cuda, ...s.filter((P) => P !== "swift")].filter((P) => P !== void 0 && wgo.test(P));
  return L(_).slice(0, S)
}
export {
  G8n,
  bJs,
  LUo,
  NUo
};
