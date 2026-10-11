// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  mt
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  y,
  c,
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  We,
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  nt,
  eu
} from "B:/~BUN/root/chunk-17wqwt36.js";
import {
  BFr,
  fFt
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  So
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  m,
  p,
  Or
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  z0
} from "B:/~BUN/root/chunk-4h4gje25.js";
import {
  YAe
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  f
} from "B:/~BUN/root/chunk-zv3zxqya.js";
import {
  M5n,
  Lzr,
  p1t,
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  It,
  d,
  O,
  zhn
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
import {
  Ie
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  Qcn,
  NX,
  sVn,
  oh,
  rp
} from "B:/~BUN/root/chunk-skjrk8s1.js";
import {
  lf,
  Wc,
  ci
} from "B:/~BUN/root/chunk-1rjcv085.js";
import {
  dKe,
  Bst
} from "B:/~BUN/root/chunk-xfvqq19y.js";
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  sUe,
  q6n
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  Ss,
  ar,
  U5e
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  dY,
  L$e,
  m$,
  H$t,
  qfn,
  gne,
  he,
  pu,
  Hx
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  cl
} from "B:/~BUN/root/chunk-3wnb3s8p.js";
import {
  GW,
  wp
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  r7e,
  cKt
} from "B:/~BUN/root/chunk-4vy1c7wv.js";
import {
  o,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  $a
} from "B:/~BUN/root/chunk-fwzy34jf.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
class eR extends Error {
  status;
  errorType;
  constructor(r, e, n) {
    super(r);
    this.name = "BridgeFatalError", this.status = e, this.errorType = n
  }
}

function nor(r) {
  function e(s) {
    r.onDebug?.(s)
  }
  let n = 0,
    w = 100;
  async function g(s) {
    let h = {
        Authorization: `Bearer ${s}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "anthropic-beta": BFr.header,
        "x-environment-runner-version": r.runnerVersion,
        "User-Agent": $a()
      },
      b = await r.getTrustedDeviceToken?.();
    if (b) h["X-Trusted-Device-Token"] = b;
    return h
  }

  function v() {
    let s = r.getAccessToken();
    if (!s) throw Error(dKe);
    return s
  }
  async function T(s, h) {
    let b = v(),
      S = await s(b);
    if (S.status !== 401) return S;
    if (!r.onAuth401) return e(`[bridge:api] ${h}: 401 received, no refresh handler`), S;
    if (e(`[bridge:api] ${h}: 401 received, attempting token refresh`), await r.onAuth401(b)) {
      e(`[bridge:api] ${h}: Token refreshed, retrying request`);
      let E = v(),
        D = await s(E);
      if (D.status !== 401) return D;
      e(`[bridge:api] ${h}: Retry after refresh also got 401`)
    } else e(`[bridge:api] ${h}: Token refresh failed`);
    return S
  }
  let A = {
    async registerBridgeEnvironment(s, h) {
      return Or("bridge_environment_register", async () => {
        e(`[bridge:api] POST /v1/environments/bridge bridgeId=${s.bridgeId}`);
        let b, S = s.getToolHostAdvert?.() ?? {
          kind: "withdraw"
        };
        switch (S.kind) {
          case "advertise":
            b = {
              tool_host: "2",
              tool_host_cc_version: S.advert.cliVersion,
              tool_host_platform: S.advert.platform
            };
            break;
          case "withdraw":
            if (s.reuseEnvironmentId) b = {
              tool_host: "",
              tool_host_cc_version: "",
              tool_host_platform: "",
              tool_host_blocker: ""
            };
            break;
          case "unknown":
            break
        }
        let P = {
            machine_name: s.machineName,
            ...s.machineId != null && {
              machine_id: s.machineId
            },
            directory: s.dir,
            branch: s.branch,
            git_repo_url: YAe(s.gitRepoUrl),
            max_sessions: s.maxSessions,
            metadata: {
              worker_type: s.workerType,
              ...s.machineId != null && {
                machine_id: s.machineId
              },
              ...b
            },
            ...s.hostProfile && {
              host: s.hostProfile
            },
            ...s.reuseEnvironmentId && {
              environment_id: s.reuseEnvironmentId
            }
          },
          E = await T(async (D) => mt.post(`${r.baseUrl}/v1/environments/bridge`, P, {
            headers: await g(D),
            timeout: 15000,
            signal: h,
            validateStatus: (k) => k < 500
          }), "Registration");
        if (E.status === 409 && J(E.data) === Bst) throw new eR(rp(E.data) ?? "This folder is already served by another Claude Code on this device. Stop it first.", 409, Bst);
        return C(E.status, E.data, "Registration", E.headers), e(`[bridge:api] POST /v1/environments/bridge -> ${E.status} environment_id=${E.data.environment_id}`), e(`[bridge:api] >>> ${Qcn({...P,...P.host&&{host:{tools:P.host.tools.length,mcp:P.host.mcp_servers?.length??0}}})}`), e(`[bridge:api] <<< ${Qcn(E.data)}`), E.data
      }, I)
    },
    async pollForWork(s, h, b, S, P) {
      lf(s, "environmentId");
      let E = n;
      n = 0;
      let D = {};
      if (S !== void 0) D.reclaim_older_than_ms = S;
      if (P !== void 0) D.poll_interval_ms = P;
      let k = await mt.get(`${r.baseUrl}/v1/environments/${s}/work/poll`, {
        headers: await g(h),
        params: Object.keys(D).length > 0 ? D : void 0,
        timeout: 1e4,
        signal: b,
        validateStatus: (M) => M < 500
      });
      if (C(k.status, k.data, "Poll", k.headers), !k.data) {
        if (n = E + 1, n === 1 || n % w === 0) e(`[bridge:api] GET .../work/poll -> ${k.status} (no work, ${n} consecutive empty polls)`);
        return null
      }
      let B = k.data.data?.mode;
      if (B != null) {
        let {
          id: M,
          data: j
        } = k.data;
        return e(`[bridge:api] GET .../work/poll -> ${k.status} workId=${NX(M)} type=${sVn(j.type)} mode=${sVn(B)} sessionId=${NX(j.id)}`), k.data
      }
      return e(`[bridge:api] GET .../work/poll -> ${k.status} workId=${k.data.id} type=${k.data.data?.type}${k.data.data?.id?` sessionId=${k.data.data.id}`:""}`), e(`[bridge:api] <<< ${Qcn(k.data)}`), k.data
    },
    async acknowledgeWork(s, h, b, S = h) {
      lf(s, "environmentId"), lf(h, "workId"), e(`[bridge:api] POST .../work/${S}/ack`);
      let P = await mt.post(`${r.baseUrl}/v1/environments/${s}/work/${h}/ack`, {}, {
        headers: await g(b),
        timeout: 1e4,
        validateStatus: (E) => E < 500
      });
      C(P.status, P.data, "Acknowledge", P.headers), e(`[bridge:api] POST .../work/${S}/ack -> ${P.status}`)
    },
    async stopWork(s, h, b, S, P = h) {
      lf(s, "environmentId"), lf(h, "workId"), e(`[bridge:api] POST .../work/${P}/stop force=${S}`);
      let E = await mt.post(`${r.baseUrl}/v1/environments/${s}/work/${h}/stop`, {
        force: S
      }, {
        headers: await g(b),
        timeout: 1e4,
        validateStatus: (D) => D < 500
      });
      C(E.status, E.data, "StopWork"), e(`[bridge:api] POST .../work/${P}/stop -> ${E.status}`)
    },
    async deregisterEnvironment(s) {
      lf(s, "environmentId"), e(`[bridge:api] DELETE /v1/environments/bridge/${s}`);
      let h = await T(async (b) => mt.delete(`${r.baseUrl}/v1/environments/bridge/${s}`, {
        headers: await g(b),
        timeout: 1e4,
        validateStatus: (S) => S < 500
      }), "Deregister");
      C(h.status, h.data, "Deregister"), e(`[bridge:api] DELETE /v1/environments/bridge/${s} -> ${h.status}`)
    },
    async markEnvironmentOffline(s, h) {
      lf(s, "environmentId");
      let b = `/v1/environments/bridge/${s}/offline`;
      e(`[bridge:api] POST ${b}`);
      let S = await mt.post(`${r.baseUrl}${b}`, void 0, {
        headers: await g(h),
        timeout: 5000,
        validateStatus: (P) => P < 500
      });
      C(S.status, S.data, "MarkOffline"), e(`[bridge:api] POST ${b} -> ${S.status}`)
    },
    async archiveSession(s) {
      lf(s, "sessionId");
      let h = r.useCcrV2SessionCrud?.() ? `/v1/code/sessions/${ci(s)}/archive` : `/v1/sessions/${Wc(s)}/archive`;
      e(`[bridge:api] POST ${h}`);
      let b = await T(async (S) => mt.post(`${r.baseUrl}${h}`, {}, {
        headers: await g(S),
        timeout: 1e4,
        validateStatus: (P) => P < 500
      }), "ArchiveSession");
      if (b.status === 409) {
        e(`[bridge:api] POST ${h} -> 409 (already archived)`);
        return
      }
      C(b.status, b.data, "ArchiveSession"), e(`[bridge:api] POST ${h} -> ${b.status}`)
    },
    async reconnectSession(s, h, b) {
      return Or("bridge_session_reconnect", async () => {
        lf(s, "environmentId"), lf(h, "sessionId"), e(`[bridge:api] POST /v1/environments/${s}/bridge/reconnect session_id=${h}`);
        let S = await T(async (P) => mt.post(`${r.baseUrl}/v1/environments/${s}/bridge/reconnect`, {
          session_id: h
        }, {
          headers: await g(P),
          timeout: 1e4,
          signal: b,
          validateStatus: (E) => E < 500
        }), "ReconnectSession");
        C(S.status, S.data, "ReconnectSession"), e(`[bridge:api] POST .../bridge/reconnect -> ${S.status}`)
      }, I)
    },
    async heartbeatWork(s, h, b) {
      lf(s, "environmentId"), lf(h, "workId"), e(`[bridge:api] POST .../work/${h}/heartbeat`);
      let S = await mt.post(`${r.baseUrl}/v1/environments/${s}/work/${h}/heartbeat`, {}, {
        headers: await g(b),
        timeout: 1e4,
        validateStatus: (P) => P < 500
      });
      return C(S.status, S.data, "Heartbeat"), e(`[bridge:api] POST .../work/${h}/heartbeat -> ${S.status} lease_extended=${S.data.lease_extended} state=${S.data.state}`), S.data
    }
  };

  function R(s) {
    return s instanceof Error && "status" in s && typeof s.status === "number" ? `http_${s.status}` : I(s)
  }
  return A.refuseToolHost = async (s, h, b, S) => {
    let P = `[bridge:api] POST /v1/code/sessions/${NX(s)}/tool_hosts/refuse workId=${NX(h)} code=${b}`;
    try {
      if (Ie() !== "firstParty" || It() || !z0("allow_remote_control")) {
        e(`${P} not sent`);
        return
      }
      await Or("bridge_tool_host_refuse", async () => {
        lf(s, "sessionId"), e(P);
        let E = await mt.post(`${r.baseUrl}/v1/code/sessions/${ci(s)}/tool_hosts/refuse`, {
          work_id: h,
          code: b
        }, {
          headers: {
            ...await g(v()),
            "anthropic-beta": fFt.header,
            "anthropic-client-feature": "ccr"
          },
          timeout: 5000,
          signal: S,
          maxRedirects: 0,
          validateStatus: (D) => D < 500
        });
        C(E.status, E.data, "RefuseToolHost"), e(`${P} -> ${E.status}`)
      }, R)
    } catch (E) {
      e(`${P} failed (${R(E)}); not retried`)
    }
  }, A
}

function C(r, e, n, w) {
  if (r === 200 || r === 204) return;
  let g = rp(e),
    v = Z(e);
  switch (r) {
    case 401:
      throw new eR(`${n}: Authentication failed (401)${g?`: ${g}`:""}. ${dKe}`, 401, v);
    case 403:
      throw new eR(e7e(v) ? "Remote Control session expired." : `${n}: Access denied (403)${g?`: ${g}`:""}. Check your organization permissions.`, 403, v);
    case 404:
      throw new eR(g ?? `${n}: Not found (404). Remote Control may not be available for this organization.`, 404, v);
    case 410:
      throw new eR(g ?? "Remote Control session expired.", 410, v ?? "environment_expired");
    case 429: {
      let T = oh(typeof w?.["retry-after"] === "string" ? w["retry-after"] : void 0);
      throw Object.assign(Error(`${n}: Rate limited (429). Polling too frequently.`), T !== void 0 ? {
        status: r,
        retryAfterMs: T
      } : {
        status: r
      })
    }
    default:
      throw Object.assign(Error(`${n}: Failed with status ${r}${g?`: ${g}`:""}`), {
        status: r
      })
  }
}

function e7e(r) {
  if (!r) return !1;
  return r.includes("expired") || r.includes("lifetime")
}

function ror(r) {
  return r.status === 403 && r.message.includes("external_poll_sessions")
}

function I(r) {
  if (r instanceof eR) return r.status === 401 ? "auth_failed" : "http_error";
  if (r instanceof Error) {
    if (r.message === dKe) return "no_token";
    if ("status" in r && typeof r.status === "number") return "http_error"
  }
  return "request_failed"
}

function J(r) {
  if (!r || typeof r !== "object" || !("error" in r)) return;
  let e = r.error;
  if (!e || typeof e !== "object" || !("details" in e)) return;
  let n = e.details;
  if (n && typeof n === "object" && "error_code" in n && typeof n.error_code === "string") return n.error_code;
  return
}

function Z(r) {
  if (r && typeof r === "object") {
    if ("error" in r && r.error && typeof r.error === "object" && "type" in r.error && typeof r.error.type === "string") return r.error.type
  }
  return
}
import {
  readdir as Q,
  readFile as ee,
  stat as te
} from "fs/promises";
import {
  release as re
} from "os";
import {
  join as oe
} from "path";
var ne = 1500,
  U = 262144,
  ie = 32,
  se = 16,
  ae = /^[a-z0-9][a-z0-9+._-]{0,31}(@[0-9][0-9A-Za-z.+_-]{0,23})?$/,
  H = /^[0-9][0-9A-Za-z.+_-]{0,23}$/,
  de = /^[a-z0-9_]{1,16}$/,
  ce = /^[a-z0-9._-]{1,24}$/,
  le = /^[A-Za-z0-9_.-]{1,64}$/,
  z = ["swift", "xcodebuild", "xcrun", "pod", "fastlane", "carthage", "adb", "emulator", "sdkmanager", "flutter", "dart", "xcodes", "kubectl", "helm", "terraform", "bazel", "bazelisk", "nix", "conda", "mamba", "pipx", "podman", "nerdctl", "nvidia-smi", "psql", "mysql", "redis-cli", ...M5n],
  fe = new Set(["xcodebuild", "swift", "swiftc", "xcrun", "git", "make", "clang", "clang++", "gcc", "g++", "python3", "pip3"]),
  ge = "/System/Library/CoreServices/SystemVersion.plist",
  F = "/Applications",
  me = "/Library/Developer/CommandLineTools/usr/bin",
  pe = "/usr/local/cuda/version.json",
  _e = "/proc/driver/nvidia/version",
  ve = f(() => u({
    cuda: u({
      version: o()
    })
  }));

function G() {
  let r = x("tengu_bridge_host_profile", "off");
  return sUe.find((e) => e === r) ?? "off"
}

function V(r) {
  if (be()) return "off";
  let e = (v) => v?.remoteControl?.shareHostProfile,
    n = [...pu(), he("policySettings"), he("flagSettings"), he("userSettings")].map(e),
    w = sUe.find((v) => n.includes(v)) ?? r,
    g = [w, ...U5e.filter(ar).map((v) => e(he(v)))];
  return sUe.find((v) => g.includes(v)) ?? w
}

function be() {
  return [...Hx(), ...gne("flagSettings"), ...gne("userSettings"), ...U5e.filter(ar).flatMap((e) => gne(e))].some((e) => {
    if (e.path === "") return !0;
    if (e.statusOnly) return !1;
    if (e.severity !== "warning") return !0;
    return e.path === q6n || e.path === "remoteControl" || e.path.startsWith("remoteControl.")
  })
}
async function W(r) {
  if (r === void 0) return;
  try {
    let e = G();
    if (e === "off") return;
    let n = await qfn();
    Ss();
    let w = V(e),
      g = {
        mdm: dY(),
        hkcu: L$e(),
        wslInherits: m$()
      },
      v;
    H$t(n.mdm, n.hkcu, n.wslInherits);
    try {
      Ss(), v = V(e)
    } finally {
      H$t(g.mdm, g.hkcu, g.wslInherits), Ss()
    }
    let T = sUe.find((A) => A === w || A === v) ?? "off";
    if (T === "off") return;
    if (T === "basic" && r.mcp_servers !== void 0) {
      let {
        mcp_servers: A,
        ...R
      } = r;
      return R
    }
    return r
  } catch (e) {
    d(e);
    return
  }
}
async function oor(r) {
  try {
    let e = G();
    if (e === "off") return;
    let n = V(e);
    if (n === "off") {
      i("tengu_bridge_host_profile_collect", {
        outcome: y("disabled")
      });
      return
    }
    return await Se({
      includeMcpServers: n === "full",
      signal: r
    })
  } catch (e) {
    d(e);
    return
  }
}
async function Se({
  includeMcpServers: r,
  signal: e
}) {
  let n = Date.now(),
    w = we();
  try {
    if (w === void 0) return;
    let g = {
        pathTools: new Set,
        mcpServers: []
      },
      v = [ye(w, g), Te(g), p1t(z, g.pathTools)];
    if (w === "darwin") v.push(Pe(g), Ee(g));
    if (w === "linux") v.push($e(g));
    if (r) v.push(Ae(g));
    let T = nt(Promise.all(v.map((b) => b.catch((S) => {
        d(S)
      }))).then(() => !0), ne).then((b) => b === !0),
      A = !1,
      R = e === void 0 ? await T : await eu(T, e, () => new We).catch(() => (A = !0, !1)),
      s = Re(w, g),
      h = {
        platform: w,
        ...de.test("x64") && {
          arch: "x64"
        },
        ...g.osVersion !== void 0 && {
          os_version: g.osVersion
        },
        ...g.distro !== void 0 && {
          distro: g.distro
        },
        ...O() === "wsl" && {
          wsl: !0
        },
        tools: s,
        ...r && {
          mcp_servers: g.mcpServers.slice(0, se)
        },
        collected_at: new Date().toISOString()
      };
    if (i("tengu_bridge_host_profile_collect", {
        outcome: R ? y("ok") : A ? y("aborted") : y("partial"),
        duration_ms: Date.now() - n,
        tools_count: h.tools.length,
        mcp_count: h.mcp_servers?.length ?? 0,
        platform: ue(w),
        arch: ue("x64"),
        wsl: h.wsl === !0
      }), R) _("bridge_host_profile");
    else if (!A) p("bridge_host_profile", "deadline");
    return h
  } catch (g) {
    d(g), i("tengu_bridge_host_profile_collect", {
      outcome: y("error"),
      duration_ms: Date.now() - n,
      platform: ue(w),
      arch: ue("x64")
    }), m("bridge_host_profile", "error");
    return
  }
}

function we() {
  switch ("win32") {
    case "darwin":
    case "linux":
    case "win32":
      return "win32";
    default:
      return
  }
}
async function ye(r, e) {
  switch (r) {
    case "darwin":
      e.osVersion = await X(ge, "ProductVersion");
      return;
    case "linux": {
      let n = await zhn();
      if (n?.linuxDistroVersion && H.test(n.linuxDistroVersion)) e.osVersion = n.linuxDistroVersion;
      let w = n?.linuxDistroId?.toLowerCase();
      if (w && ce.test(w)) e.distro = w;
      return
    }
    case "win32": {
      let n = re();
      if (H.test(n)) e.osVersion = n;
      return
    }
  }
}
async function X(r, e) {
  let n = await cl(r, U);
  if (n === null) return;
  let w = cKt(n),
    g = r7e(w) ? w[e] : void 0;
  return typeof g === "string" && H.test(g) ? g : void 0
}
async function Pe(r) {
  let e;
  try {
    e = await Q(F)
  } catch {
    return
  }
  let n = e.filter((v) => /^Xcode.*\.app$/.test(v)).sort((v, T) => T.localeCompare(v, void 0, {
    numeric: !0
  }));
  if (n.length === 0) return;
  let w = n.includes("Xcode.app") ? "Xcode.app" : n[0],
    g = await X(oe(F, w, "Contents", "version.plist"), "CFBundleShortVersionString");
  r.xcode = g === void 0 ? "xcode" : `xcode@${g}`
}
async function Ee(r) {
  if (await q(me)) r.clt = "clt"
}
async function Te(r) {
  let e = a.ANDROID_HOME ?? a.ANDROID_SDK_ROOT;
  if (e === void 0 || !await Lzr(e) || !await q(e)) return;
  r.androidSdk = "android-sdk"
}
async function $e(r) {
  let e = await cl(pe, U);
  if (e !== null) {
    let n = ve().safeParse(ct(e, !1));
    r.cuda = n.success && H.test(n.data.cuda.version) ? `cuda@${n.data.cuda.version}` : "cuda";
    return
  }
  try {
    await ee(_e, "utf8"), r.cuda = "cuda"
  } catch {}
}
async function q(r) {
  try {
    return (await te(r)).isDirectory()
  } catch {
    return !1
  }
}
async function Ae(r) {
  let e = new Set;
  for (let n of GW) {
    if (n === "project") continue;
    let w;
    try {
      w = Object.keys(wp(n, {
        expandVars: !1
      }).servers)
    } catch (v) {
      t(`[bridge:host-profile] could not read ${n} MCP config: ${l(v)}`, {
        level: "warn"
      });
      continue
    }
    let g = n === "managed" ? "enterprise" : n;
    for (let v of w) {
      if (!le.test(v) || e.has(v)) continue;
      e.add(v), r.mcpServers.push({
        name: v,
        scope: g
      })
    }
  }
}

function Re(r, e) {
  let n = r !== "darwin" || e.xcode !== void 0 || e.clt !== void 0,
    w = z.filter((v) => e.pathTools.has(v) && (n || !fe.has(v))),
    g = [e.xcode, e.clt, ...w.filter((v) => v === "swift"), e.androidSdk, e.cuda, ...w.filter((v) => v !== "swift")].filter((v) => v !== void 0 && ae.test(v));
  return L(g).slice(0, ie)
}
var iKt = 3,
  ke = 60000,
  Y = 3600000,
  aKt = 5;
async function sor({
  api: r,
  config: e,
  environmentId: n,
  activeSessions: w,
  attempt: g,
  trigger: v,
  signal: T
}) {
  if (v === "tool_host_advert_changed") t(`[bridge:poll] What this environment advertises changed; re-registering environment ${n} (attempt ${g})`);
  else t(`[bridge:poll] Poll returned ${v==="poll_401"?401:404}; re-registering environment ${n} (attempt ${g}/${iKt})`, {
    level: "warn"
  });
  let A, R;
  try {
    let {
      hostProfile: b,
      ...S
    } = e, P = await W(b);
    e.hostProfile = P;
    let E = e.getToolHostAdvert?.();
    R = E, A = await r.registerBridgeEnvironment({
      ...S,
      ...P && {
        hostProfile: P
      },
      ...E && {
        getToolHostAdvert: () => E
      },
      reuseEnvironmentId: n
    }, T)
  } catch (b) {
    let S = jEn(b);
    if (t(`[bridge:poll] Re-registration of ${n} ${S?"rejected":"failed transiently"}: ${l(b)}`, {
        level: S ? "error" : "warn"
      }), !S && R !== void 0 && R.kind !== "unknown" && !N(R, e.registeredToolHostAdvert)) e.registeredToolHostAdvert = "unconfirmed";
    if (T.aborted) return {
      outcome: "transient"
    };
    if (i("tengu_bridge_env_reregister", {
        attempt: g,
        outcome: S ? y("register_rejected") : y("register_transient"),
        trigger: c(v)
      }), S) {
      if (v === "tool_host_advert_changed") p("bridge_env_reregister", "advert_register_rejected");
      else m("bridge_env_reregister", "register_rejected");
      return {
        outcome: "fatal",
        reason: "register_rejected"
      }
    }
    return {
      outcome: "transient",
      retryAfterMs: aor(b)
    }
  }
  if (A.environment_id !== n) {
    if (t(`[bridge:poll] Re-registration returned ${A.environment_id}, not ${n}; not adopting it`, {
        level: "warn"
      }), i("tengu_bridge_env_reregister", {
        attempt: g,
        outcome: y("replaced"),
        trigger: c(v)
      }), v === "tool_host_advert_changed") p("bridge_env_reregister", "advert_replaced");
    else m("bridge_env_reregister", "replaced");
    return await r.deregisterEnvironment(A.environment_id).catch((b) => t(`[bridge:poll] Failed to delete replacement environment ${A.environment_id}: ${l(b)}`, {
      level: "warn"
    })), {
      outcome: "fatal",
      reason: "replaced"
    }
  }
  ior(e, R, !0);
  let s = [...w.keys()];
  i("tengu_bridge_env_reregister", {
    attempt: g,
    outcome: y("reregistered"),
    active_sessions: s.length,
    trigger: c(v)
  }), K("info", "bridge_env_reregistered", {
    attempt: g,
    active_sessions: s.length,
    trigger: v
  }), t(`[bridge:poll] Environment ${n} re-registered in place; re-queuing ${s.length} session(s)`, {
    level: "info"
  });
  let h = [];
  for (let b of s) {
    if (T.aborted) break;
    if (!w.has(b)) continue;
    if (await lKt(r, n, b, T) !== "done") h.push(b)
  }
  return {
    outcome: "reregistered",
    environmentSecret: A.environment_secret,
    pendingRequeues: h
  }
}
async function GQr({
  api: r,
  config: e,
  environmentId: n,
  activeSessions: w,
  pacing: g,
  signal: v
}) {
  let T;
  try {
    let R = e.getToolHostAdvert?.();
    if (R === void 0 || R.kind === "unknown") return;
    if (N(R, e.registeredToolHostAdvert)) {
      g.failures = 0;
      return
    }
    let s = g.notBefore - Date.now();
    if (s > 0 && s <= Y) return;
    T = await sor({
      api: r,
      config: e,
      environmentId: n,
      activeSessions: w,
      attempt: g.failures + 1,
      trigger: "tool_host_advert_changed",
      signal: v
    })
  } catch (R) {
    if (!v.aborted) d(R)
  }
  let A = T?.outcome === "reregistered" ? T : void 0;
  return g.failures = A ? 0 : g.failures + 1, g.notBefore = Date.now() + Math.min(ke * 2 ** g.failures, Y), A
}

function ior(r, e, n) {
  if (e === void 0 || e.kind === "unknown" && n) return;
  let w = r.registeredToolHostAdvert,
    g = e.kind === "advertise" ? {
      kind: "advertise",
      advert: e.advert
    } : {
      kind: "withdraw"
    };
  if (r.registeredToolHostAdvert = g, !N(g, w ?? {
      kind: "withdraw"
    })) i("tengu_bridge_tool_host_advert", {
    advertised: g.kind === "advertise"
  })
}
async function lKt(r, e, n, w) {
  try {
    return await r.reconnectSession(e, n, w), "done"
  } catch (g) {
    let v = jEn(g);
    if (t(`[bridge:poll] reconnectSession(${n}) after re-registration ${v?"rejected":"failed transiently"}: ${l(g)}`, {
        level: "warn"
      }), v) return "done";
    return w.aborted ? "aborted" : "retry"
  }
}

function N(r, e) {
  if (e === void 0 || e === "unconfirmed") return !1;
  return r.kind === "advertise" && e.kind === "advertise" ? So(r.advert, e.advert) : r.kind === e.kind
}

function aor(r) {
  return r && typeof r === "object" && "retryAfterMs" in r && typeof r.retryAfterMs === "number" ? r.retryAfterMs : void 0
}

function jEn(r) {
  if (r instanceof eR) return !0;
  if (r && typeof r === "object" && "status" in r && typeof r.status === "number") return r.status >= 400 && r.status < 500 && r.status !== 408 && r.status !== 429;
  return !1
}
export {
  eR,
  nor,
  e7e,
  ror,
  oor,
  iKt,
  aKt,
  sor,
  GQr,
  ior,
  lKt,
  aor,
  jEn
};
