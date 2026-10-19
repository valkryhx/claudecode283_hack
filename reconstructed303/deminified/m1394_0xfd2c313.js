// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { Ke, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { je, ka } from "B:/~BUN/root/chunk-89mss1tj.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { QBr, iWo, Mmn, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I, VXn } from "B:/~BUN/root/chunk-je1b1drr.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { o7e, Z$r } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { dr, nn, qD } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { QEe, PVs, e0e, rk, me, Zp, M_ } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { al } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { S6, Ef } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { qPr } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Avt, vwn } from "B:/~BUN/root/chunk-gh779tpg.js";
import { o, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { readdir as C, readFile as V, stat as N } from "fs/promises";
import { release as k } from "os";
import { join as F } from "path";
var z = 1500,
  A = 262144,
  X = 32,
  B = 16,
  w = /^[0-9][0-9A-Za-z.+_-]{0,23}$/,
  j = /^[a-z0-9_]{1,16}$/,
  U = /^[a-z0-9._-]{1,24}$/,
  J = /^[A-Za-z0-9_.-]{1,64}$/,
  G = ["swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...QBr],
  Y = new Set(["xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3"]),
  q = "/System/Library/CoreServices/SystemVersion.plist",
  y = "/Applications",
  W = "/Library/Developer/CommandLineTools/usr/bin",
  Z = "/usr/local/cuda/version.json",
  K = "/proc/driver/nvidia/version",
  Q = f(() => u({
    cuda: u({
      version: o()
    })
  }));
function M() {
  let n = E("tengu_bridge_host_profile", "off");
  return o7e.find(item => item === n) ?? "off";
}
function wwn(n) {
  if (ee()) return "off";
  let e = s => s?.remoteControl?.shareHostProfile,
    r = [...Zp(), me("policySettings"), me("flagSettings"), me("userSettings")].map(e),
    S = o7e.find(item => r.includes(item)) ?? n,
    c = [S, ...qD.filter(nn).map(item => e(me(item)))];
  return o7e.find(item => c.includes(item)) ?? S;
}
function ee() {
  return [...M_(), ...rk("flagSettings"), ...rk("userSettings"), ...qD.filter(nn).flatMap(item => rk(item))].some(item => {
    if (item.path === "") return !0;
    if (item.statusOnly) return !1;
    if (item.severity !== "warning") return !0;
    return item.path === Z$r || item.path === "remoteControl" || item.path.startsWith("remoteControl.");
  });
}
async function r9o(n) {
  if (n === void 0) return;
  try {
    let e = M();
    if (e === "off") return;
    let r = await e0e();
    dr();
    let S = wwn(e),
      c = PVs(),
      s;
    QEe(r.mdm, r.hkcu, r.wslInherits, r.whereAsked);
    try {
      dr(), s = wwn(e);
    } finally {
      QEe(c.mdm, c.hkcu, c.wslInherits, c.whereAsked), dr();
    }
    let _ = o7e.find(item => item === S || item === s) ?? "off";
    if (_ === "off") return;
    if (_ === "basic" && n.mcp_servers !== void 0) {
      let {
        mcp_servers: mcp_servers,
        ...h
      } = n;
      return h;
    }
    return n;
  } catch (error) {
    l(error);
    return;
  }
}
async function NKr(signal) {
  try {
    let e = M();
    if (e === "off") return;
    let r = wwn(e);
    if (r === "off") {
      i("tengu_bridge_host_profile_collect", {
        outcome: b("disabled")
      });
      return;
    }
    return await te({
      includeMcpServers: r === "full",
      signal: signal
    });
  } catch (error) {
    l(error);
    return;
  }
}
async function te({
  includeMcpServers: includeMcpServers,
  signal: signal_2
}) {
  let r = Date.now(),
    S = H();
  try {
    let c = await FKr({
      includeMcpServers: includeMcpServers,
      signal: signal_2
    });
    if (c === void 0) return;
    let {
      profile: profile,
      complete: complete,
      aborted: aborted
    } = c;
    if (i("tengu_bridge_host_profile_collect", {
      outcome: complete ? b("ok") : aborted ? b("aborted") : b("partial"),
      duration_ms: Date.now() - r,
      tools_count: profile.tools.length,
      mcp_count: profile.mcp_servers?.length ?? 0,
      platform: pe(S),
      arch: pe("x64"),
      wsl: profile.wsl === !0
    }), complete) g("bridge_host_profile");else if (!aborted) p("bridge_host_profile", "deadline");
    return profile;
  } catch (error) {
    l(error), i("tengu_bridge_host_profile_collect", {
      outcome: b("error"),
      duration_ms: Date.now() - r,
      platform: pe(S),
      arch: pe("x64")
    }), m("bridge_host_profile", "error");
    return;
  }
}
async function FKr({
  includeMcpServers: includeMcpServers_2,
  signal: signal_3,
  alsoLookFor = [],
  maxTools = X
}) {
  let platform = H();
  if (platform === void 0) return;
  let s = [...G, ...alsoLookFor],
    _ = {
      pathTools: new Set(),
      mcpServers: []
    },
    P = [oe(platform, _), se(_), Mmn(s, _.pathTools)];
  if (platform === "darwin") P.push(re(_), ne(_));
  if (platform === "linux") P.push(ie(_));
  if (includeMcpServers_2) P.push(ae(_));
  let h = je(Promise.all(P.map(item => item.catch(x => {
      l(x);
    }))).then(() => !0), z).then(v => v === !0),
    aborted_2 = !1,
    complete_2 = signal_3 === void 0 ? await h : await ka(h, signal_3, () => new Ke()).catch(() => (aborted_2 = !0, !1));
  return {
    profile: {
      platform: platform,
      ...(j.test("x64") && {
        arch: "x64"
      }),
      ...(_.osVersion !== void 0 && {
        os_version: _.osVersion
      }),
      ...(_.distro !== void 0 && {
        distro: _.distro
      }),
      ...(I() === "wsl" && {
        wsl: !0
      }),
      tools: ce(platform, _, s, maxTools),
      ...(includeMcpServers_2 && {
        mcp_servers: _.mcpServers.slice(0, B)
      }),
      collected_at: new Date().toISOString()
    },
    complete: complete_2,
    aborted: aborted_2
  };
}
function H() {
  switch ("win32") {
    case "darwin":
    case "linux":
    case "win32":
      return "win32";
    default:
      return;
  }
}
async function oe(n, e) {
  switch (n) {
    case "darwin":
      e.osVersion = await T(q, "ProductVersion");
      return;
    case "linux":
      {
        let r = await VXn();
        if (r?.linuxDistroVersion && w.test(r.linuxDistroVersion)) e.osVersion = r.linuxDistroVersion;
        let S = r?.linuxDistroId?.toLowerCase();
        if (S && U.test(S)) e.distro = S;
        return;
      }
    case "win32":
      {
        let r = k();
        if (w.test(r)) e.osVersion = r;
        return;
      }
  }
}
async function T(n, e) {
  let r = await al(n, A);
  if (r === null) return;
  let S = vwn(r),
    c = Avt(S) ? S[e] : void 0;
  return typeof c === "string" && w.test(c) ? c : void 0;
}
async function re(n) {
  let e;
  try {
    e = await C(y);
  } catch {
    return;
  }
  let r = e.filter(item => /^Xcode.*\.app$/.test(item)).sort((itemA, itemB) => itemB.localeCompare(itemA, void 0, {
    numeric: !0
  }));
  if (r.length === 0) return;
  let S = r.includes("Xcode.app") ? "Xcode.app" : r[0],
    c = await T(F(y, S, "Contents", "version.plist"), "CFBundleShortVersionString");
  n.xcode = c === void 0 ? "xcode" : `xcode@${c}`;
}
async function ne(n) {
  if (await R(W)) n.clt = "clt";
}
async function se(n) {
  let e = a.ANDROID_HOME ?? a.ANDROID_SDK_ROOT;
  if (e === void 0 || !(await iWo(e)) || !(await R(e))) return;
  n.androidSdk = "android-sdk";
}
async function ie(n) {
  let e = await al(Z, A);
  if (e !== null) {
    let r = Q().safeParse(pt(e, !1));
    n.cuda = r.success && w.test(r.data.cuda.version) ? `cuda@${r.data.cuda.version}` : "cuda";
    return;
  }
  try {
    await V(K, "utf8"), n.cuda = "cuda";
  } catch {}
}
async function R(n) {
  try {
    return (await N(n)).isDirectory();
  } catch {
    return !1;
  }
}
async function ae(n) {
  let e = new Set();
  for (let r of S6) {
    if (r === "project") continue;
    let S;
    try {
      S = Object.keys(Ef(r, {
        expandVars: !1
      }).servers);
    } catch (error) {
      t(`[bridge:host-profile] could not read ${r} MCP config: ${d(error)}`, {
        level: "warn"
      });
      continue;
    }
    let scope = r === "managed" ? "enterprise" : r;
    for (let name of S) {
      if (!J.test(name) || e.has(name)) continue;
      e.add(name), n.mcpServers.push({
        name: name,
        scope: scope
      });
    }
  }
}
function ce(n, e, r, S) {
  let c = n !== "darwin" || e.xcode !== void 0 || e.clt !== void 0,
    s = r.filter(item => e.pathTools.has(item) && (c || !Y.has(item))),
    _ = [e.xcode, e.clt, ...s.filter(item => item === "swift"), e.androidSdk, e.cuda, ...s.filter(item => item !== "swift")].filter(item => item !== void 0 && qPr.test(item));
  return L(_).slice(0, S);
}
export { wwn, r9o, NKr, FKr };