// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-8pmnanyd.js";
import "B:/~BUN/root/chunk-7gwemd3j.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-h9p45fg5.js";
import "B:/~BUN/root/chunk-8ye9n4fk.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-7c8rc0p5.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import "B:/~BUN/root/chunk-a3eqgdv2.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-a0k8qg0d.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-cqkcn3bx.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-6a9s3k2y.js";
import "B:/~BUN/root/chunk-k8003a0x.js";
import "B:/~BUN/root/chunk-1gpjpba6.js";
import "B:/~BUN/root/chunk-5ygt6t95.js";
import "B:/~BUN/root/chunk-9kme2ye7.js";
import "B:/~BUN/root/chunk-4sfz9tbn.js";
import { VN, C4n, gb } from "B:/~BUN/root/chunk-h2myanpn.js";
import "B:/~BUN/root/chunk-hkh6hras.js";
import "B:/~BUN/root/chunk-d544j3ga.js";
import "B:/~BUN/root/chunk-dyer18a2.js";
import "B:/~BUN/root/chunk-xpy44yvr.js";
import "B:/~BUN/root/chunk-et37ax67.js";
import { fy } from "B:/~BUN/root/chunk-cqw1xaqm.js";
import "B:/~BUN/root/chunk-j0ghr71r.js";
import "B:/~BUN/root/chunk-b0487zs4.js";
import "B:/~BUN/root/chunk-59tbtn9n.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import "B:/~BUN/root/chunk-648jq7hr.js";
import "B:/~BUN/root/chunk-shj1mfyk.js";
import { R, Mr } from "B:/~BUN/root/chunk-ef0msk7r.js";
var ft = R(function (Hm, at) {
  at.exports = {
    scan: {
      hooks: ["telemetry.*", "telemetry.log", "telemetry.mark", "session.start", "session.end", "engine.create"],
      calls: ["clock.after", "clock.sleep", "env.get", "fs.exists", "fs.list", "fs.read", "http.fetch", "process.run", "session.authorize", "session.cwd", "session.id", "session.model", "session.repo", "session.surfaces", "session.version", "settings.read", "ui.log"],
      telemetry: ["anthropic", "collector"],
      env: {
        reads: ["ALACRITTY_LOG", "APP_URL", "AWS_EXECUTION_ENV", "AWS_LAMBDA_FUNCTION_NAME", "AZURE_FUNCTIONS_ENVIRONMENT", "BUILDKITE", "C9_PID", "C9_USER", "CF_PAGES", "CI", "CIRCLECI", "CLAUBBIT", "CLAUDE_AGENT_SDK_VERSION", "CLAUDE_CODE_ACTION", "CLAUDE_CODE_CONTAINER_ID", "CLAUDE_CODE_CUSTOM_OAUTH_URL", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_ENTRYPOINT", "CLAUDE_CODE_HOST_PLATFORM", "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST", "CLAUDE_CODE_REMOTE", "CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE", "CLAUDE_CODE_REMOTE_SESSION_ID", "CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_TAGS", "CLAUDE_CODE_USE_ANTHROPIC_AWS", "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", "CLAUDE_CODE_USE_BEDROCK", "CLAUDE_CODE_USE_FOUNDRY", "CLAUDE_CODE_USE_GATEWAY", "CLAUDE_CODE_USE_MANTLE", "CLAUDE_CODE_USE_VERTEX", "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR", "CLAUDE_CONFIG_DIR", "CLAUDE_SESSION_INGRESS_TOKEN_FILE", "CODER", "CODER_WORKSPACE_NAME", "CODESPACES", "COMSPEC", "CURSOR_TRACE_ID", "ConEmuANSI", "ConEmuPID", "ConEmuTask", "DAYTONA_WS_ID", "DENO_DEPLOYMENT_ID", "DEVPOD", "DEVPOD_WORKSPACE_UID", "DISABLE_TELEMETRY", "DO_NOT_TRACK", "DYNO", "FLY_APP_NAME", "FLY_MACHINE_ID", "GITHUB_ACTIONS", "GITHUB_ACTION_PATH", "GITHUB_ACTOR_ID", "GITHUB_EVENT_NAME", "GITHUB_REPOSITORY_ID", "GITHUB_REPOSITORY_OWNER_ID", "GITLAB_CI", "GITPOD_WORKSPACE_ID", "GNOME_TERMINAL_SERVICE", "GOOGLE_CLOUD_PROJECT", "GOOGLE_CLOUD_WORKSTATIONS", "HOME", "KITTY_WINDOW_ID", "KONSOLE_VERSION", "KUBERNETES_SERVICE_HOST", "K_SERVICE", "MSYSTEM", "NETLIFY", "NODE_ENV", "OS", "P4PORT", "PROCESSOR_ARCHITECTURE", "PROJECT_DOMAIN", "RAILWAY_ENVIRONMENT_NAME", "RAILWAY_SERVICE_NAME", "RENDER", "REPL_ID", "REPL_SLUG", "RUNNER_ENVIRONMENT", "RUNNER_OS", "SESSIONNAME", "SHELL", "SPACE_CREATOR_USER_ID", "SSH_CLIENT", "SSH_CONNECTION", "SSH_TTY", "STY", "SWE_BENCH_INSTANCE_ID", "SWE_BENCH_RUN_ID", "SWE_BENCH_TASK_ID", "TERM", "TERMINAL_EMULATOR", "TERMINATOR_UUID", "TERM_PROGRAM", "TILIX_ID", "TMUX", "USERPROFILE", "USER_TYPE", "VERCEL", "VSCODE_GIT_ASKPASS_MAIN", "VTE_VERSION", "VisualStudioVersion", "WEBSITE_SITE_NAME", "WEBSITE_SKU", "WSL_DISTRO_NAME", "WT_SESSION", "XTERM_VERSION", "__CFBundleIdentifier"],
        writes: []
      }
    },
    files: {}
  };
});
var be = {};
Mr(be, {
  MOD_FOLDER: () => B,
  PLUGIN_LISTING: () => V,
  default: () => be,
  isAvailable: () => isAvailable_2,
  registerPlugin: () => tr
});
var I = {};
Mr(I, {
  BATCH_ROWS: () => Ye,
  BATCH_WINDOW_MS: () => $e,
  CHOICES_LIMIT: () => v,
  CHOICE_TOKEN: () => K,
  CLIENT_TYPE_BY_ENTRYPOINT: () => re,
  CORE_EVENT_PREFIX: () => j,
  DEPLOYMENTS: () => ae,
  EVENT_PREFIX: () => z,
  FEATURE_PREFIX: () => Z,
  HEX_RADIX: () => Te,
  INGEST_URL: () => We,
  JETBRAINS_IDES: () => pe,
  KNOWN_SHELLS: () => fe,
  MARK_KINDS: () => J,
  PROBE_SCRIPT: () => ye,
  PROBE_TIMEOUT_MS: () => timeoutMs,
  PROP_LIMIT: () => A,
  REFUSED: () => h,
  REMOTE_HASH_LENGTH: () => Re,
  RETRY_DELAY_MS: () => ze,
  SERVED_TIERS: () => ke,
  STATUS_REQUEST_TIMEOUT: () => q,
  STATUS_SERVER_ERROR: () => ee,
  STATUS_TOO_MANY_REQUESTS: () => te,
  TOKEN: () => g,
  UUID_LENGTH_FLOOR: () => Oe,
  UUID_LENGTH_LIMIT: () => Se,
  VCS_MARKERS: () => Ae,
  actionRefOf: () => se,
  answerOf: () => N,
  archOf: () => M,
  authOf: () => H,
  batchOf: () => Ve,
  caught: () => nt,
  checkedFields: () => He,
  checkedMark: () => Ge,
  checkedProps: () => S,
  checkedValue: () => Y,
  clientTypeOf: () => ie,
  contextOf: () => rt,
  default: () => I,
  deploymentOf: () => Xe,
  distinct: () => ve,
  entrypointOf: () => Ne,
  environmentFieldsOf: () => le,
  eventDataOf: () => W,
  fieldsOf: () => X,
  githubActionsFieldsOf: () => ce,
  globalConfigPath: () => ge,
  hexOf: () => he,
  identityOf: () => Qe,
  isAnalyticsOff: () => ne,
  isEnvSet: () => s,
  isEnvTruthy: () => m,
  isMarkKind: () => Q,
  isRecord: () => x,
  isRefusedEntry: () => Ke,
  isRetriable: () => je,
  linuxDistroOf: () => Ee,
  linuxFilesOf: () => _e,
  machineOf: () => qe,
  markFieldsOf: () => w,
  messageOf: () => U,
  metadataOf: () => G,
  normalizedRemoteOf: () => Ie,
  osReleaseValue: () => P,
  platformOf: () => et,
  plausibleUuid: () => k,
  probeOf: () => De,
  refusal: () => d,
  register: () => Zo,
  remoteHashOf: () => Ce,
  served: () => it,
  sessionFieldsOf: () => Le,
  shellOf: () => me,
  tagsOf: () => ue,
  telemetryOf: () => Me,
  terminalOf: () => de,
  vcsOf: () => we,
  versionOf: () => Ue,
  wireOf: () => T,
  wslVersionOf: () => xe
});
var isAvailable_2 = () => !fy();
var B = "telemetry";
var V = {
  name: "cc-plugin-telemetry",
  description: "Telemetry: a plugin logs an analytics event through $.telemetry.log or marks a feature's use through $.telemetry.mark, sent as first-party rows in batches",
  isAvailable: isAvailable_2
};
function H(e) {
  return e.accountUuid !== void 0 || e.organizationUuid !== void 0 ? {
    accountUuid: e.accountUuid,
    organizationUuid: e.organizationUuid
  } : void 0;
}
var G = (e, rh) => btoa(JSON.stringify({
  rh: rh,
  ...e.fields.props
}));
var W = (e, t) => ({
  eventId: e.eventId,
  eventName: e.fields.name,
  clientTimestamp: e.loggedAt,
  deviceId: t.context.identity.deviceId,
  email: t.context.identity.email,
  auth: H(t.context.identity),
  sessionId: t.sessionId,
  model: t.model,
  userType: t.userType,
  isInteractive: t.isInteractive,
  ...t.context.session,
  env: {
    ...t.context.environment,
    isClaudeAiAuth: t.isClaudeAiAuth
  },
  additionalMetadata: G(e, t.context.remoteHash)
});
var x = e => typeof e === "object" && e !== null && !Array.isArray(e);
function T(e) {
  let t = Array.isArray(e),
    r = x(e);
  return t ? e.map(T) : r ? Object.fromEntries(Object.entries(e).map(([i, n]) => [i.replace(/[A-Z]/g, a => `_${a.toLowerCase()}`), T(n)])) : e;
}
var Ve = (e, t) => JSON.stringify({
  events: e.map(item => ({
    event_type: "ClaudeCodeInternalEvent",
    event_data: T(W(item, t))
  }))
});
var K = /^[a-z0-9][a-z0-9_-]{0,63}$/;
var v = 32;
var d = (what, t = "log") => Object.assign(Error(`$.telemetry.${t}: ${what}`), {
  what: what
});
function Y(e, t, r = "log") {
  if (typeof t === "boolean") return t;
  if (typeof t === "number") {
    if (Number.isFinite(t)) return t;
    throw d(`props.${e}: a number is finite`, r);
  }
  if (typeof t === "string") throw d(`props.${e}: free text is refused; a string is a Choice, { value, of: [...] }`, r);
  if (!x(t) || !Array.isArray(t.of)) throw d(`props.${e}: a value is a finite number, a boolean, or a Choice, { value, of: [...] }`, r);
  let {
    of: i,
    value: value
  } = t;
  if (!(i.length > 0 && i.length <= v && i.every(item => typeof item === "string" && K.test(item)))) throw d(`props.${e}.of: a list of 1 to ${v} lowercase tokens`, r);
  if (typeof value !== "string" || !i.includes(value)) throw d(`props.${e}.value: one of the members of \`of\``, r);
  return value;
}
var A = 16;
var g = /^[a-z][a-z0-9_]{0,63}$/;
function S(e, t) {
  if (!x(e)) throw d("props: an object of properties by key", t);
  let r = Object.entries(e);
  if (r.length > A) throw d(`props: at most ${A} properties`, t);
  let i = {};
  for (let [n, a] of r) {
    if (!g.test(n)) throw d("props: every key is a snake_case token", t);
    i[n] = Y(n, a, t);
  }
  return i;
}
var j = "tengu_";
var z = "tengu_plugin_";
var X = (e, props) => ({
  name: e.startsWith(j) ? e : z + e,
  props: props
});
function He(e) {
  if (!x(e)) throw d("takes one entry, { event, props? }");
  let {
    event: event,
    props: props_2 = {}
  } = e;
  if (typeof event !== "string" || !g.test(event)) throw d("takes an event name, a snake_case token");
  return X(event, S(props_2, "log"));
}
var J = ["ok", "sad", "bad"];
var Q = e => J.some(item => item === e);
var Z = "tengu_feature_";
var w = ({
  kind: kind,
  feature: t,
  reason: r,
  props: props_3
}) => ({
  name: Z + kind,
  props: r === void 0 ? {
    feature_name: t,
    ...props_3
  } : {
    ...props_3,
    feature_name: t,
    error_code: r
  }
});
function Ge(e) {
  if (!x(e)) throw d("takes one entry, { feature, kind, reason?, props? }", "mark");
  let {
    feature: feature,
    kind: kind_2,
    reason: reason,
    props: props_4 = {}
  } = e;
  if (typeof feature !== "string" || !g.test(feature)) throw d("takes a feature name, a snake_case token", "mark");
  if (!Q(kind_2)) throw d("kind: 'ok', 'sad' or 'bad'", "mark");
  if (kind_2 === "ok") {
    if (reason !== void 0) throw d("reason: an ok mark carries none", "mark");
    return w({
      kind: kind_2,
      feature: feature,
      props: S(props_4, "mark")
    });
  }
  if (typeof reason !== "string" || !g.test(reason)) throw d(`reason: a ${kind_2} mark names why, a snake_case token`, "mark");
  return w({
    kind: kind_2,
    feature: feature,
    reason: reason,
    props: S(props_4, "mark")
  });
}
var We = "https://api.anthropic.com/api/event_logging/v2/batch";
var Ke = e => e instanceof Error && "what" in e && typeof e.what === "string";
var N = e => e.then(() => ({
  value: void 0
}), t => {
  if (Ke(t)) return {
    deny: t.what
  };
  throw t;
});
var Ye = 100;
var $e = 5000;
var q = 408;
var ee = 500;
var te = 429;
var je = e => e >= ee || e === q || e === te;
var U = e => e instanceof Error ? e.message : String(e);
var ze = 500;
var re = {
  "sdk-ts": "sdk-typescript",
  "sdk-py": "sdk-python",
  "sdk-cli": "sdk-cli",
  "claude-vscode": "claude-vscode",
  "local-agent": "local-agent",
  "claude-desktop": "claude-desktop"
};
var s = e => e !== void 0 && e !== "";
var m = e => ["1", "true", "yes", "on"].includes((e ?? "").trim().toLowerCase());
function ne(e, t) {
  let r = e.nodeEnv === "test" || s(e.disableTelemetry) || s(e.disableNonessentialTraffic) || m(e.doNotTrack),
    i = !m(e.providerManagedByHost) && [e.useBedrock, e.useVertex, e.useFoundry, e.useAnthropicAws, e.useAnthropicGoogleCloud, e.useMantle].some(m),
    n = m(e.useGateway) || t.forceLoginMethod === "gateway" || t.forceLoginGatewayUrl !== void 0,
    a = s(e.customOauthUrl?.trim());
  return r || i || n || a;
}
function ie(e) {
  let t = e.entrypoint === "remote" || e.hasSessionAccessToken || e.hasSessionIngressTokenFile || e.hasWebsocketAuthFileDescriptor || m(e.claudeCodeRemote);
  return m(e.githubActions) ? "github-action" : re[e.entrypoint ?? ""] ?? (t ? "remote" : "cli");
}
var se = e => e?.includes("claude-code-action/") ? e.split("claude-code-action/")[1] : void 0;
var ae = ["codespaces", "gitpod", "coder", "devpod", "daytona", "gcp-cloud-workstations", "aws-cloud9", "replit", "glitch", "vercel", "railway", "render", "netlify", "heroku", "fly.io", "cloudflare-pages", "deno-deploy", "aws-lambda", "aws-fargate", "aws-ecs", "aws-ec2", "gcp-cloud-run", "gcp", "azure-app-service", "azure-functions", "digitalocean-app-platform", "huggingface-spaces", "github-actions", "gitlab-ci", "circleci", "buildkite", "ci", "kubernetes", "docker"];
var Xe = (e, t) => ae.find(item => e.some(([i, n]) => n && i === item)) ?? `unknown-${t}`;
var fe = ["zsh", "bash", "fish", "sh", "dash", "ash", "ksh", "tcsh", "csh", "nu", "nushell", "pwsh", "powershell", "cmd", "elvish", "xonsh", "ion"];
function me(e) {
  let t = (e ?? "").split(/[/\\]/).at(-1)?.toLowerCase().replace(/\.exe$/, "");
  if (!e) return "none";
  return t !== void 0 && fe.includes(t) ? t : "other";
}
var pe = ["pycharm", "intellij", "webstorm", "phpstorm", "rubymine", "clion", "goland", "rider", "datagrip", "appcode", "dataspell", "aqua", "gateway", "fleet", "jetbrains", "androidstudio"];
function de(e, t, r) {
  let i = (e.vscodeGitAskpassMain ?? "").toLowerCase(),
    n = (e.bundleIdentifier ?? "").toLowerCase(),
    a = e.term ?? "",
    o = e.termProgram ?? "",
    c = e.terminalEmulator === "JetBrains-JediTerm",
    E = pe.find(item => n.includes(item));
  return [[c && t !== "darwin", "pycharm"], [e.hasCursorTraceId || i.includes("cursor"), "cursor"], [i.includes("windsurf"), "windsurf"], [i.includes("antigravity"), "antigravity"], [n.includes("vscodium"), "codium"], [n.includes("windsurf") || n.includes("devin"), "windsurf"], [n.includes("com.google.android.studio"), "androidstudio"], [E !== void 0, E ?? ""], [e.hasVisualStudioVersion, "visualstudio"], [c, "pycharm"], [a === "xterm-ghostty", "ghostty"], [a.includes("kitty"), "kitty"], [/^devin([ -]desktop)?$/i.test(o), "windsurf"], [o !== "", o], [e.hasTmux, "tmux"], [e.hasSty, "screen"], [e.hasKonsoleVersion, "konsole"], [e.hasGnomeTerminalService, "gnome-terminal"], [e.hasXtermVersion, "xterm"], [e.hasVteVersion, "vte-based"], [e.hasTerminatorUuid, "terminator"], [e.hasKittyWindowId, "kitty"], [e.hasAlacrittyLog, "alacritty"], [e.hasTilixId, "tilix"], [e.hasWtSession, "windows-terminal"], [e.hasSessionName && a === "cygwin", "cygwin"], [e.msystem !== void 0, (e.msystem ?? "").toLowerCase()], [e.hasConEmuAnsi || e.hasConEmuPid || e.hasConEmuTask, "conemu"], [e.wslDistroName !== void 0, `wsl-${e.wslDistroName}`], [e.hasSshConnection || e.hasSshClient || e.hasSshTty, "ssh-session"], [a.includes("alacritty"), "alacritty"], [a.includes("rxvt"), "rxvt"], [a.includes("termite"), "termite"], [a !== "", a], [!r, "non-interactive"]].find(([u]) => u)?.[1] ?? "unknown";
}
function ce(e) {
  return e.githubActorId !== void 0 || e.githubRepositoryId !== void 0 || e.githubRepositoryOwnerId !== void 0 ? {
    actorId: e.githubActorId,
    repositoryId: e.githubRepositoryId,
    repositoryOwnerId: e.githubRepositoryOwnerId
  } : void 0;
}
function ue(e) {
  let t = (e ?? "").split(",").map(item => item.trim()).filter(Boolean);
  return t.length > 0 ? t : void 0;
}
function le(e) {
  let {
      facts: facts,
      machine: machine,
      platform: platform
    } = e,
    isGithubAction = m(facts.githubActions),
    a = machine.platformRaw === "linux";
  return {
    platform: platform,
    platformRaw: machine.platformRaw,
    arch: machine.arch,
    terminal: de(facts, platform, e.isInteractive),
    shell: me(facts.shellPath),
    packageManagers: machine.packageManagers,
    runtimes: machine.runtimes,
    isCi: m(facts.ci),
    isClaubbit: m(facts.claubbit),
    isGithubAction: isGithubAction,
    isClaudeCodeAction: m(facts.claudeCodeAction),
    isClaudeCodeRemote: m(facts.claudeCodeRemote),
    isLocalAgentMode: facts.entrypoint === "local-agent",
    isConductor: facts.bundleIdentifier === "com.conductor.app",
    deploymentEnvironment: Xe(e.signals, platform),
    remoteEnvironmentType: facts.remoteEnvironmentType,
    claudeCodeContainerId: facts.containerId,
    claudeCodeRemoteSessionId: facts.remoteSessionId,
    tags: ue(facts.tags),
    githubEventName: isGithubAction ? facts.githubEventName : void 0,
    githubActionsRunnerEnvironment: isGithubAction ? facts.runnerEnvironment : void 0,
    githubActionsRunnerOs: isGithubAction ? facts.runnerOs : void 0,
    githubActionRef: isGithubAction ? se(facts.githubActionPath) : void 0,
    githubActionsMetadata: isGithubAction ? ce(facts) : void 0,
    wslVersion: e.wslVersion,
    linuxDistroId: e.distro.id,
    linuxDistroVersion: e.distro.version,
    linuxKernel: a ? machine.kernel : void 0,
    vcs: e.vcs,
    version: e.engine?.version,
    versionBase: e.engine?.base,
    buildTime: e.engine?.builtAt
  };
}
var P = (e, t) => e.split(`
`).map(item => /^(ID|VERSION_ID)=(.*)$/.exec(item)).find(item => item?.[1] === t)?.[2]?.replace(/^"|"$/g, "");
async function Ee(e) {
  let t;
  try {
    t = await e();
  } catch {
    t = "";
  }
  return {
    id: P(t, "ID"),
    version: P(t, "VERSION_ID")
  };
}
async function xe(e) {
  let t;
  try {
    t = (await e()).toLowerCase();
  } catch {
    return;
  }
  let r = t.includes("microsoft");
  return /wsl(\d+)/.exec(t)?.[1] ?? (r ? "1" : void 0);
}
async function _e(e, t) {
  let [distro, wslVersion, n, a] = await Promise.all([t ? Ee(() => e.read("/etc/os-release")) : {
    id: void 0,
    version: void 0
  }, t ? xe(() => e.read("/proc/version")) : void 0, t ? e.read("/sys/hypervisor/uuid").then(o => o.startsWith("ec2"), () => !1) : !1, t ? e.exists("/.dockerenv").catch(() => !1) : !1]);
  return {
    distro: distro,
    wslVersion: wslVersion,
    fileSignals: [["aws-ec2", n], ["docker", a]]
  };
}
function ge(e) {
  let t = e.configDir || e.home || e.userProfile,
    r = t?.includes("\\") && !t.includes("/") ? "\\" : "/";
  return t ? `${t.replace(/[\\/]+$/, "")}${r}.claude.json` : void 0;
}
var Oe = 8;
var Se = 128;
function k(e) {
  return typeof e === "string" && e.length >= Oe && e.length <= Se ? e : void 0;
}
async function Qe(e, t, r) {
  let i = ge(t),
    n;
  try {
    n = i === void 0 ? void 0 : JSON.parse(await e(i));
  } catch {
    n = void 0;
  }
  let a = x(n) ? n : {},
    o = x(a.oauthAccount) ? a.oauthAccount : {},
    userID = a.userID,
    emailAddress = o.emailAddress,
    p = typeof userID === "string" && /^[A-Za-z0-9_-]{8,128}$/.test(userID),
    u = r && typeof emailAddress === "string" && emailAddress !== "";
  return {
    deviceId: p ? userID : void 0,
    accountUuid: k(o.accountUuid),
    organizationUuid: k(o.organizationUuid),
    email: u ? emailAddress : void 0
  };
}
function M(e) {
  let t = e.trim().toLowerCase();
  return [[t === "x86_64" || t === "amd64", "x64"], [t === "aarch64" || t === "arm64", "arm64"], [t === "x86" || /^i[3-6]86$/.test(t), "ia32"]].find(([i]) => i)?.[1] ?? (t || "unknown");
}
var ye = ["uname -s", "uname -r", "uname -m", 'for c in npm yarn pnpm; do command -v "$c" >/dev/null 2>&1 && printf "%s," "$c"; done; echo', 'for c in bun deno node; do command -v "$c" >/dev/null 2>&1 && printf "%s," "$c"; done; echo'].join(`
`);
async function qe(e, t) {
  if (t.os === "Windows_NT") return {
    platformRaw: "win32",
    arch: M(t.processorArchitecture ?? ""),
    kernel: void 0,
    packageManagers: "",
    runtimes: ""
  };
  let r;
  try {
    r = await e(["sh", "-c", ye]);
  } catch {
    r = void 0;
  }
  let [i = "", n = "", a = "", o = "", c = ""] = (r?.exitCode === 0 ? r.stdout.split(`
`) : []).map(item => item.trim());
  return {
    platformRaw: i.toLowerCase() || "unknown",
    arch: M(a),
    kernel: n || void 0,
    packageManagers: o.replace(/,$/, ""),
    runtimes: c.replace(/,$/, "")
  };
}
function et(e, t) {
  return ["win32", "darwin", "linux"].find(item => item === e) ?? (t === "win32" || t === "darwin" ? t : "linux");
}
var timeoutMs = 5000;
var Te = 16;
var he = e => [...new Uint8Array(e)].map(item => item.toString(Te).padStart(2, "0")).join("");
function Ie(e) {
  let t = e.trim(),
    [, r, i] = /^git@([^:/@]+):(.+?)(?:\.git)?$/.exec(t) ?? /^(?:https?|ssh):\/\/(?:[^@/?#]*@)?([^/?#@]+)\/(.+?)(?:\.git)?$/.exec(t) ?? [];
  return r !== void 0 && i !== void 0 ? `${r}/${i}`.toLowerCase() : void 0;
}
var Re = 16;
async function Ce(e) {
  let t = e ? Ie(e) : void 0;
  if (t === void 0) return;
  return he(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t))).slice(0, Re);
}
function ve(e) {
  let t = new Set();
  return e.filter(item => {
    let i = t.has(item);
    return t.add(item), !i;
  });
}
var Ae = [[".git", "git"], [".hg", "mercurial"], [".svn", "svn"], [".p4config", "perforce"], ["$tf", "tfs"], [".tfvc", "tfs"], [".jj", "jujutsu"], [".sl", "sapling"]];
async function we(e, t, r) {
  let i;
  try {
    i = await e(t);
  } catch {
    i = [];
  }
  let n = new Set(i.map(item => item.name)),
    a = ve([...(r ? ["perforce"] : []), ...Ae.flatMap(([o, c]) => n.has(o) ? [c] : [])]);
  return a.length > 0 ? a.join(",") : void 0;
}
async function De(e, isInteractive) {
  let [facts_2, i, n, a, o, c, engine] = await Promise.all([e.facts(), e.deployment(), e.configLocation(), e.environment(), e.cwd().catch(() => {
      return;
    }), e.repo().catch(() => null), e.version().catch(Fe => {
      e.debug(`telemetry: the engine's version is not readable here, so the version columns stay empty (${U(Fe)})`);
      return;
    })]),
    [identity, machine_2, vcs, remoteHash] = await Promise.all([Qe(e.read, n, a.userType === "ant"), qe(e.run, facts_2), o === void 0 ? void 0 : we(e.list, o, facts_2.hasP4Port), Ce(c?.remote)]),
    O = await _e(e, machine_2.platformRaw === "linux");
  return {
    facts: facts_2,
    signals: [...i, ...O.fileSignals],
    identity: identity,
    machine: machine_2,
    platform: et(facts_2.hostPlatform, machine_2.platformRaw),
    isInteractive: isInteractive,
    distro: O.distro,
    wslVersion: O.wslVersion,
    vcs: vcs,
    remoteHash: remoteHash,
    engine: engine
  };
}
function Ne(e) {
  return e === void 0 || /^[a-z][a-z0-9_-]{0,39}$/.test(e) ? e : "other";
}
function Ue(e) {
  let t = e === void 0 || e === "unknown",
    r = /^\d{1,8}\.\d{1,8}\.\d{1,8}(?!\d)/.exec(e ?? "")?.[0];
  return t ? e : r ?? "other";
}
var Le = e => ({
  clientType: ie(e),
  entrypoint: Ne(e.entrypoint),
  agentSdkVersion: Ue(e.agentSdkVersion),
  sweBenchRunId: e.sweBenchRunId || void 0,
  sweBenchInstanceId: e.sweBenchInstanceId || void 0,
  sweBenchTaskId: e.sweBenchTaskId || void 0
});
async function rt(e, t) {
  let r = await De(e, t);
  return {
    identity: r.identity,
    session: Le(r.facts),
    environment: le(r),
    remoteHash: r.remoteHash
  };
}
var h = {
  deny: "$.telemetry serves the plugins built into Claude Code alone"
};
var nt = (e, t) => t.called ? t(e) : h;
var ke = ["builtin", "core"];
function it(e, t) {
  if (t.origin?.tier === void 0) throw Error("$.telemetry: the call names no origin");
  return ke.includes(t.origin.tier) ? t(e) : h;
}
function Me(e) {
  let t = [],
    r,
    i,
    n,
    a = Promise.resolve();
  function o() {
    let f = i ?? e.isInteractive().then(l => rt(e, l)).catch(l => {
      throw i = void 0, l;
    });
    return i = f, f;
  }
  async function c() {
    try {
      let [f, l] = await Promise.all([e.environment(), e.policy()]);
      return ne(f, l) ? void 0 : f;
    } catch (error) {
      e.debug(`telemetry: the analytics switches could not be read, so nothing is sent (${U(error)})`);
      return;
    }
  }
  async function E() {
    if (await c()) await o();
  }
  let p = (body, auth) => e.fetch(We, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-service-name": "claude-code"
    },
    auth: auth,
    body: body
  });
  async function u(f, l) {
    let _;
    try {
      _ = await p(f, l);
    } catch {
      _ = void 0;
    }
    let C = _ !== void 0 && (_.ok || !je(_.status));
    if (_ !== void 0 && C) return _;
    return await e.sleep(ze), p(f, l);
  }
  async function b(f) {
    let l = await c();
    if (!l) return;
    let _ = await e.authorize();
    if (!_) throw Error("this session has no first-party credential to authorize");
    let context = await o(),
      Be = await u(Ve(f, {
        sessionId: await e.id(),
        model: await e.model(),
        userType: l.userType === "ant" ? "ant" : "external",
        isInteractive: await e.isInteractive(),
        isClaudeAiAuth: _.kind === "bearer" && context.identity.accountUuid !== void 0,
        context: context
      }), _.handle);
    if (!Be.ok) throw Error(`the ingest answered ${Be.status}`);
    e.debug(`telemetry: sent ${f.length} row(s)`);
  }
  function flush() {
    r?.cancel(), r = void 0;
    let f = t;
    if (t = [], f.length === 0) return a;
    return a = a.then(() => b(f).catch(l => {
      e.debug(`telemetry: ${f.length} row(s) not sent: ` + U(l));
    })), a;
  }
  function O(fields) {
    if (n ??= E().catch(() => {
      return;
    }), t.push({
      fields: fields,
      eventId: crypto.randomUUID(),
      loggedAt: new Date().toISOString()
    }), t.length >= Ye) {
      flush();
      return;
    }
    r ??= e.after($e, () => void flush());
  }
  return {
    telemetry: {
      log: async f => O(He(f)),
      mark: async f => O(Ge(f))
    },
    flush: flush
  };
}
function Zo(e) {
  let t, r;
  e("telemetry.*", (i, n, a) => it(n, a)).catch((i, n, a) => nt(n, a)), e("telemetry.log", (i, n, a) => t === void 0 || n.to === "collector" ? a(n) : N(t.telemetry.log(n))), e("telemetry.mark", (i, n, a) => t === void 0 ? a(n) : N(t.telemetry.mark(n))), e("session.start", (i, n, a) => (r = n.isInteractive, a(n))), e("session.end", async (i, n, a) => (await t?.flush(), a(n))), e("engine.create", async (i, n, a) => {
    let o = await a(n);
    return t = Me({
      authorize: () => o.session.authorize(),
      id: () => o.session.id(),
      model: () => o.session.model(),
      isInteractive: async () => r ?? (await o.session.surfaces()).includes("terminal"),
      environment: async () => ({
        userType: await o.env.get("USER_TYPE"),
        nodeEnv: await o.env.get("NODE_ENV"),
        disableTelemetry: await o.env.get("DISABLE_TELEMETRY"),
        disableNonessentialTraffic: await o.env.get("CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC"),
        doNotTrack: await o.env.get("DO_NOT_TRACK"),
        customOauthUrl: await o.env.get("CLAUDE_CODE_CUSTOM_OAUTH_URL"),
        useGateway: await o.env.get("CLAUDE_CODE_USE_GATEWAY"),
        providerManagedByHost: await o.env.get("CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"),
        useBedrock: await o.env.get("CLAUDE_CODE_USE_BEDROCK"),
        useVertex: await o.env.get("CLAUDE_CODE_USE_VERTEX"),
        useFoundry: await o.env.get("CLAUDE_CODE_USE_FOUNDRY"),
        useAnthropicAws: await o.env.get("CLAUDE_CODE_USE_ANTHROPIC_AWS"),
        useAnthropicGoogleCloud: await o.env.get("CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD"),
        useMantle: await o.env.get("CLAUDE_CODE_USE_MANTLE")
      }),
      policy: () => o.settings.read({
        source: "policy"
      }),
      facts: async () => ({
        entrypoint: await o.env.get("CLAUDE_CODE_ENTRYPOINT"),
        agentSdkVersion: await o.env.get("CLAUDE_AGENT_SDK_VERSION"),
        hostPlatform: await o.env.get("CLAUDE_CODE_HOST_PLATFORM"),
        os: await o.env.get("OS"),
        processorArchitecture: await o.env.get("PROCESSOR_ARCHITECTURE"),
        shellPath: (await o.env.get("SHELL")) ?? (await o.env.get("COMSPEC")),
        ci: await o.env.get("CI"),
        claubbit: await o.env.get("CLAUBBIT"),
        githubActions: await o.env.get("GITHUB_ACTIONS"),
        claudeCodeAction: await o.env.get("CLAUDE_CODE_ACTION"),
        claudeCodeRemote: await o.env.get("CLAUDE_CODE_REMOTE"),
        remoteEnvironmentType: await o.env.get("CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE"),
        containerId: await o.env.get("CLAUDE_CODE_CONTAINER_ID"),
        remoteSessionId: await o.env.get("CLAUDE_CODE_REMOTE_SESSION_ID"),
        tags: await o.env.get("CLAUDE_CODE_TAGS"),
        hasSessionAccessToken: s(await o.env.get("CLAUDE_CODE_SESSION_ACCESS_TOKEN")),
        hasSessionIngressTokenFile: s(await o.env.get("CLAUDE_SESSION_INGRESS_TOKEN_FILE")),
        hasWebsocketAuthFileDescriptor: s(await o.env.get("CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR")),
        githubEventName: await o.env.get("GITHUB_EVENT_NAME"),
        runnerEnvironment: await o.env.get("RUNNER_ENVIRONMENT"),
        runnerOs: await o.env.get("RUNNER_OS"),
        githubActionPath: await o.env.get("GITHUB_ACTION_PATH"),
        githubActorId: await o.env.get("GITHUB_ACTOR_ID"),
        githubRepositoryId: await o.env.get("GITHUB_REPOSITORY_ID"),
        githubRepositoryOwnerId: await o.env.get("GITHUB_REPOSITORY_OWNER_ID"),
        sweBenchRunId: await o.env.get("SWE_BENCH_RUN_ID"),
        sweBenchInstanceId: await o.env.get("SWE_BENCH_INSTANCE_ID"),
        sweBenchTaskId: await o.env.get("SWE_BENCH_TASK_ID"),
        hasP4Port: s(await o.env.get("P4PORT")),
        wslDistroName: await o.env.get("WSL_DISTRO_NAME"),
        hasCursorTraceId: s(await o.env.get("CURSOR_TRACE_ID")),
        vscodeGitAskpassMain: await o.env.get("VSCODE_GIT_ASKPASS_MAIN"),
        bundleIdentifier: await o.env.get("__CFBundleIdentifier"),
        hasVisualStudioVersion: s(await o.env.get("VisualStudioVersion")),
        terminalEmulator: await o.env.get("TERMINAL_EMULATOR"),
        term: await o.env.get("TERM"),
        termProgram: await o.env.get("TERM_PROGRAM"),
        hasTmux: s(await o.env.get("TMUX")),
        hasSty: s(await o.env.get("STY")),
        hasKonsoleVersion: s(await o.env.get("KONSOLE_VERSION")),
        hasGnomeTerminalService: s(await o.env.get("GNOME_TERMINAL_SERVICE")),
        hasXtermVersion: s(await o.env.get("XTERM_VERSION")),
        hasVteVersion: s(await o.env.get("VTE_VERSION")),
        hasTerminatorUuid: s(await o.env.get("TERMINATOR_UUID")),
        hasKittyWindowId: s(await o.env.get("KITTY_WINDOW_ID")),
        hasAlacrittyLog: s(await o.env.get("ALACRITTY_LOG")),
        hasTilixId: s(await o.env.get("TILIX_ID")),
        hasWtSession: s(await o.env.get("WT_SESSION")),
        hasSessionName: s(await o.env.get("SESSIONNAME")),
        msystem: await o.env.get("MSYSTEM"),
        hasConEmuAnsi: s(await o.env.get("ConEmuANSI")),
        hasConEmuPid: s(await o.env.get("ConEmuPID")),
        hasConEmuTask: s(await o.env.get("ConEmuTask")),
        hasSshConnection: s(await o.env.get("SSH_CONNECTION")),
        hasSshClient: s(await o.env.get("SSH_CLIENT")),
        hasSshTty: s(await o.env.get("SSH_TTY"))
      }),
      deployment: async () => [["codespaces", m(await o.env.get("CODESPACES"))], ["gitpod", s(await o.env.get("GITPOD_WORKSPACE_ID"))], ["coder", m(await o.env.get("CODER"))], ["coder", s(await o.env.get("CODER_WORKSPACE_NAME"))], ["devpod", m(await o.env.get("DEVPOD"))], ["devpod", s(await o.env.get("DEVPOD_WORKSPACE_UID"))], ["daytona", s(await o.env.get("DAYTONA_WS_ID"))], ["gcp-cloud-workstations", m(await o.env.get("GOOGLE_CLOUD_WORKSTATIONS"))], ["aws-cloud9", s(await o.env.get("C9_PID"))], ["aws-cloud9", s(await o.env.get("C9_USER"))], ["replit", s(await o.env.get("REPL_ID"))], ["replit", s(await o.env.get("REPL_SLUG"))], ["glitch", s(await o.env.get("PROJECT_DOMAIN"))], ["vercel", m(await o.env.get("VERCEL"))], ["railway", s(await o.env.get("RAILWAY_ENVIRONMENT_NAME"))], ["railway", s(await o.env.get("RAILWAY_SERVICE_NAME"))], ["render", m(await o.env.get("RENDER"))], ["netlify", m(await o.env.get("NETLIFY"))], ["heroku", s(await o.env.get("DYNO"))], ["fly.io", s(await o.env.get("FLY_APP_NAME"))], ["fly.io", s(await o.env.get("FLY_MACHINE_ID"))], ["cloudflare-pages", m(await o.env.get("CF_PAGES"))], ["deno-deploy", s(await o.env.get("DENO_DEPLOYMENT_ID"))], ["aws-lambda", s(await o.env.get("AWS_LAMBDA_FUNCTION_NAME"))], ["aws-fargate", (await o.env.get("AWS_EXECUTION_ENV")) === "AWS_ECS_FARGATE"], ["aws-ecs", (await o.env.get("AWS_EXECUTION_ENV")) === "AWS_ECS_EC2"], ["gcp-cloud-run", s(await o.env.get("K_SERVICE"))], ["gcp", s(await o.env.get("GOOGLE_CLOUD_PROJECT"))], ["azure-app-service", s(await o.env.get("WEBSITE_SITE_NAME"))], ["azure-app-service", s(await o.env.get("WEBSITE_SKU"))], ["azure-functions", s(await o.env.get("AZURE_FUNCTIONS_ENVIRONMENT"))], ["digitalocean-app-platform", s(await o.env.get("APP_URL")) && String(await o.env.get("APP_URL")).includes("ondigitalocean.app")], ["huggingface-spaces", s(await o.env.get("SPACE_CREATOR_USER_ID"))], ["github-actions", m(await o.env.get("GITHUB_ACTIONS"))], ["gitlab-ci", m(await o.env.get("GITLAB_CI"))], ["circleci", s(await o.env.get("CIRCLECI"))], ["buildkite", s(await o.env.get("BUILDKITE"))], ["ci", m(await o.env.get("CI"))], ["kubernetes", s(await o.env.get("KUBERNETES_SERVICE_HOST"))]],
      configLocation: async () => ({
        configDir: await o.env.get("CLAUDE_CONFIG_DIR"),
        home: await o.env.get("HOME"),
        userProfile: await o.env.get("USERPROFILE")
      }),
      cwd: () => o.session.cwd(),
      repo: () => o.session.repo(),
      version: async () => o.session.version(),
      read: p => o.fs.read(p),
      list: p => o.fs.list(p),
      exists: p => o.fs.exists(p),
      run: p => o.process.run(p, {
        timeoutMs: timeoutMs
      }),
      fetch: (p, u) => o.http.fetch(p, u),
      after: (p, u) => o.clock.after(p, u),
      sleep: p => o.clock.sleep(p),
      debug: p => o.ui.log(p, {
        to: "debug"
      })
    }), {
      ...{
        telemetry: t.telemetry
      },
      ...o
    };
  });
}
function tr() {
  let hooksModule = VN(C4n(B), I, () => ft());
  gb({
    ...V,
    hooksModule: hooksModule
  });
}
export { B as MOD_FOLDER, V as PLUGIN_LISTING, be as default, isAvailable_2 as isAvailable, tr as registerPlugin };