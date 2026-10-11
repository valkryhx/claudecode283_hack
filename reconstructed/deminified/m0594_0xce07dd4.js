// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j, Y, Qd, A8n, J1t, Te, vVr, wo, xBe } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { rm, GD, l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { gt, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Wde } from "B:/~BUN/root/chunk-4p6z9qq1.js";
import { WUo, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { an } from "B:/~BUN/root/chunk-zksmb712.js";
import { d, gBo, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ur } from "B:/~BUN/root/chunk-g2vddtj4.js";
import { Hr, aNr, uRe, mHt, Aun, _Ye, sHr, Tce, IHt, XHt, JHt, x, ps as trustProbe, T1, le, DYe, gD, LYe, kFr } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { jUt } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { mmn } from "B:/~BUN/root/chunk-qqgpf856.js";
import { K } from "B:/~BUN/root/chunk-5px6g0cn.js";
import { dl } from "B:/~BUN/root/chunk-290k5gh5.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { xHo, Ie } from "B:/~BUN/root/chunk-sd4cj2qx.js";
import { $Ae, $ne, eWr, Une, Bne, pYn, jv, jne } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { CNo, EUr } from "B:/~BUN/root/chunk-ceg1zct0.js";
import { SWr } from "B:/~BUN/root/chunk-zafy1b6k.js";
import { PUe, kBt } from "B:/~BUN/root/chunk-fct6vke8.js";
import { VJ } from "B:/~BUN/root/chunk-zw7d3y39.js";
import { $lo, edo, zuo, Nmo, Hmo, rwr, yo } from "B:/~BUN/root/chunk-3jyp964r.js";
import { PE, R9 } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { xX, yx } from "B:/~BUN/root/chunk-ew8y0fm0.js";
import { AE } from "B:/~BUN/root/chunk-5yjtercz.js";
import { GMr, VMr } from "B:/~BUN/root/chunk-vrhwdtwx.js";
import { Kst, jbo } from "B:/~BUN/root/chunk-88mdabet.js";
import { C_ } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { xS, ite } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { Ky } from "B:/~BUN/root/chunk-ewv6w8xv.js";
import { WRo } from "B:/~BUN/root/chunk-mc8ranwc.js";
import { rLr } from "B:/~BUN/root/chunk-8gscr2mz.js";
import { IU } from "B:/~BUN/root/chunk-0rmh0w21.js";
import { iGn } from "B:/~BUN/root/chunk-cpsekee9.js";
import { KMr, XMr, ZMr } from "B:/~BUN/root/chunk-fhmaxxy1.js";
import { YTn, XTn, M7e } from "B:/~BUN/root/chunk-7r4zb9xn.js";
import { Nct } from "B:/~BUN/root/chunk-8a2sjnm4.js";
import { MR } from "B:/~BUN/root/chunk-e9hrnhar.js";
import { x5t } from "B:/~BUN/root/chunk-xvnfyq42.js";
import { dbo, ubo } from "B:/~BUN/root/chunk-cn8bxjex.js";
import { ES, ba, dPr as message_3 } from "B:/~BUN/root/chunk-na2t7g12.js";
import { dq } from "B:/~BUN/root/chunk-995m8a2a.js";
function w() {
  let providerCache = Hr().providerCache;
  if (providerCache.preconnectFired) return;
  if (providerCache.preconnectFired = !0, Ie() !== "firstParty" || Tce() === "gateway" || IHt()) return;
  if (a.HTTPS_PROXY || a.https_proxy || a.HTTP_PROXY || a.http_proxy || a.ANTHROPIC_UNIX_SOCKET || a.CLAUDE_CODE_CLIENT_CERT || a.CLAUDE_CODE_CLIENT_KEY) return;
  let n = a.ANTHROPIC_BASE_URL || an().BASE_API_URL;
  R9(`${n.replace(/\/+$/, "")}/api/hello`, {
    method: "HEAD",
    signal: AbortSignal.timeout(1e4)
  }).catch(() => {});
}
function b(e) {
  return e.length > 0 && e.every(item => item === "prometheus");
}
async function C(e, n) {
  let {
      initializeTelemetry: initializeTelemetry
    } = await import("B:/~BUN/root/chunk-kj8dysng.js"),
    {
      meter: meter,
      metricsExporterKinds: metricsExporterKinds
    } = await initializeTelemetry(e, n);
  if (meter) dbo(meter, (o, f) => {
    let g = meter?.createCounter(o, f);
    return {
      add(p, _ = {}) {
        let m = {
          ...Kst(),
          ..._
        };
        g?.add(p, m);
      }
    };
  }, {
    omitUnits: b(metricsExporterKinds)
  }), await jbo(), ubo()?.add(1, {
    start_type: vVr()
  });
}
class v {
  promise = void 0;
  telemetryInitialized = !1;
  telemetryInit = void 0;
}
var T = new q(() => new v());
function S() {
  return T.of(j().host);
}
async function A(e = {}) {
  let n = Date.now();
  K("info", "init_started"), Ur("init_function_start");
  let storageV5EnvPin = e.storageV5EnvPin;
  if (storageV5EnvPin?.backend !== void 0 && !Wde(storageV5EnvPin.configHome)) t(`CLAUDE_CONFIG_DIR no longer names ${storageV5EnvPin.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`, {
    level: "warn"
  }), storageV5EnvPin = {
    ...storageV5EnvPin,
    backend: void 0
  };
  storageV5EnvPin ??= rLr();
  try {
    let s = Date.now();
    if (H() && storageV5EnvPin?.backend !== void 0) await iGn(storageV5EnvPin.backend), await Promise.all([DYe(storageV5EnvPin.backend), GMr(storageV5EnvPin.backend, dl())]);else await DYe();
    if (K("info", "init_configs_enabled", {
      duration_ms: Date.now() - s
    }), Ur("init_configs_enabled"), H() && storageV5EnvPin?.backend !== void 0) SWr(le().cachedGrowthBookFeatures?.tengu_windows_credman === !0);
    if (H() && storageV5EnvPin?.backend !== void 0) await jUt(storageV5EnvPin.backend), Ur("init_remote_settings_primed");
    let c = MR(storageV5EnvPin?.backend);
    if (H() && c !== void 0) await Nct(c), Ur("init_fd_credentials_primed"), await sHr(c), Ur("init_stored_login_primed");
    xBe(uRe);
    let y = Date.now();
    if (xX(), await EUr(), x5t(), await Promise.all([$Ae(), $ne(), gBo(), WUo()]), await Hmo(), await mHt(storageV5EnvPin?.backend !== void 0 && Wde(storageV5EnvPin.configHome) ? c : void 0), wo()) dq();
    K("info", "init_safe_env_vars_applied", {
      duration_ms: Date.now() - y
    }), Ur("init_safe_env_vars_applied");
    let storageV5 = IU(storageV5EnvPin),
      credentials = MR(storageV5);
    if (H() && storageV5 !== void 0) await iGn(storageV5);
    if (await VMr(storageV5, dl()), H() && storageV5 !== void 0) await CNo(storageV5);
    if (XMr({
      storageV5: storageV5,
      credentials: credentials
    }), XHt(credentials), JHt(storageV5), H() && credentials !== void 0) {
      if (await Nct(credentials), _Ye()) await Aun(credentials);
    }
    if (await KMr(storageV5), T1(storageV5), $lo(storageV5), rwr({
      storageV5: storageV5,
      credentials: credentials
    }), Ur("init_after_graceful_shutdown"), Promise.all([import("B:/~BUN/root/chunk-me7h05sq.js"), import("B:/~BUN/root/chunk-7qwqa2vj.js")]).then(([r, m]) => {
      r.initialize1PEventLogging(storageV5), m.onGrowthBookRefresh(() => {
        r.reinitialize1PEventLoggingIfConfigChanged();
      });
    }), Ur("init_after_1p_event_logging"), xHo(r => x(r, !1)), aNr(credentials, storageV5).catch(d), Ur("init_after_oauth_populate"), Ky(storageV5), import("B:/~BUN/root/chunk-fxrmzhyc.js").then(r => r.primeUnattendedServingConsent()).catch(() => {}), kBt({
      trustProbe: trustProbe
    }), PUe(), XTn()) YTn();
    if (C_()) ZMr();
    if (Ur("init_after_remote_settings_check"), kFr(storageV5), LYe(storageV5), H() && storageV5 !== void 0) gD(storageV5);
    let g = Date.now();
    t("[init] configureGlobalMTLS starting"), eWr(), K("info", "init_mtls_configured", {
      duration_ms: Date.now() - g
    }), t("[init] configureGlobalMTLS complete");
    let p = Une();
    if (p && !Bne(p.value)) {
      let message = pYn(p.source, p.value);
      throw await VJ({
        sessionId: Y(),
        message: message,
        reason: "proxy_invalid"
      }), new rm(message);
    }
    let _ = Date.now();
    if (t("[init] configureGlobalAgents starting"), jv(), K("info", "init_proxy_configured", {
      duration_ms: Date.now() - _
    }), t("[init] configureGlobalAgents complete"), Ur("init_network_configured"), w(), Ne(process.env.CLAUDE_CODE_REMOTE)) try {
      let {
          initAgentProxy: initAgentProxy,
          getAgentProxyEnv: getAgentProxyEnv
        } = await import("B:/~BUN/root/chunk-reaawqh2.js"),
        {
          registerAgentProxyEnvFn: registerAgentProxyEnvFn
        } = await import("B:/~BUN/root/chunk-prfha7ws.js");
      registerAgentProxyEnvFn(getAgentProxyEnv), await initAgentProxy();
    } catch (error) {
      t(`[init] agent proxy init failed: ${error instanceof Error ? error.message : String(error)}; continuing without proxy`, {
        level: "warn"
      });
    }
    if (mmn(), O() === "windows" && !ba()) {
      if (!ES()) {
        let message_2 = `Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`;
        console.error(message_2), await VJ({
          sessionId: Y(),
          message: message_2,
          reason: "shell_tool_missing"
        }), process.exit(1);
      }
      if ((await PE()) === null) console.error(message_3), await VJ({
        sessionId: Y(),
        message: message_3,
        reason: "shell_tool_missing"
      }), process.exit(1);
    }
    if (gt(zuo), gt(async () => {
      let {
        cleanupSessionTeams: cleanupSessionTeams
      } = await import("B:/~BUN/root/chunk-vz0209z8.js");
      await cleanupSessionTeams(storageV5);
    }), xS()) {
      let r = Date.now();
      try {
        let m = await ite();
        K("info", m === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", {
          duration_ms: Date.now() - r
        });
      } catch (error) {
        t(`init: ensureScratchpadDir failed: ${error}`, {
          level: "error"
        });
      }
    }
    return Qd(() => {
      if (xS()) ite().catch(r => t(`onSessionSwitch: ensureScratchpadDir failed: ${r}`, {
        level: "error"
      }));
    }), WRo(), edo(), Nmo(), K("info", "init_completed", {
      duration_ms: Date.now() - n
    }), Ur("init_function_end"), storageV5;
  } catch (error_2) {
    if (error_2 instanceof rm) {
      process.stderr.write(`${error_2.message}
`), yo(1);
      return;
    }
    if (error_2 instanceof GD) {
      if (!Te() && e.showInvalidConfigDialog) {
        await e.showInvalidConfigDialog({
          error: error_2
        });
        return;
      }
      process.stderr.write(`Configuration error in ${error_2.filePath}: ${error_2.message}
`), yo(1);
      return;
    } else throw error_2;
  }
}
function fXn(e) {
  return S().promise ??= A(e);
}
function Q_e(e) {
  let n = S();
  if (XTn()) {
    if (Te() && AE()) u(n, e).catch(i => {
      try {
        t(`[3P telemetry] Eager telemetry init failed (beta tracing): ${l(i)}`, {
          level: "error"
        });
      } catch {}
    });
    t("[3P telemetry] Waiting for remote managed settings fetch before telemetry init"), M7e().then(async () => {
      t("[3P telemetry] Remote managed settings fetch settled, initializing telemetry"), yx();
      let {
        captureAdmin3PSteeringSnapshot: captureAdmin3PSteeringSnapshot
      } = await import("B:/~BUN/root/chunk-vsv76h10.js");
      captureAdmin3PSteeringSnapshot();
      let [s, c] = await Promise.all([$Ae(), $ne()]);
      if (s || c.changed) jne(), jv();
      await u(n, e);
    }).catch(i => {
      if (J1t() && !n.telemetryInitialized) A8n(kgt() || uWt() ? "init_failed" : "not_configured");
      try {
        t(`[3P telemetry] Telemetry init failed (remote settings path): ${l(i)}`, {
          level: "error"
        });
      } catch {}
    });
  } else u(n, e).catch(i => {
    try {
      t(`[3P telemetry] Telemetry init failed: ${l(i)}`, {
        level: "error"
      });
    } catch {}
  });
}
async function u(e, n, i) {
  if (e.telemetryInitialized) return e.telemetryInit;
  return e.telemetryInitialized = !0, e.telemetryInit = (async () => {
    let s = "not_configured";
    try {
      await C(n, i);
    } catch (error) {
      if (e.telemetryInitialized = !1, e.telemetryInit = void 0, kgt()) s = "init_failed";
      throw error;
    } finally {
      A8n(s);
    }
  })(), e.telemetryInit;
}
function mXn() {
  return u(S(), void 0);
}
function E(e) {
  return (e || "").trim().split(",").filter(Boolean).map(item => item.trim()).some(item => item !== "none");
}
function kgt() {
  return Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && E(a.OTEL_LOGS_EXPORTER);
}
function uWt() {
  try {
    let e = he("policySettings")?.env;
    if (!e) return !1;
    return (Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || Ne(e.CLAUDE_CODE_ENABLE_TELEMETRY)) && (E(a.OTEL_LOGS_EXPORTER) || E(e.OTEL_LOGS_EXPORTER));
  } catch {
    return !1;
  }
}
export { fXn, Q_e, mXn, kgt, uWt };