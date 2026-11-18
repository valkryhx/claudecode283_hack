# -*- coding: utf-8 -*-
"""核验「319 沙箱机制」调研文档里每一条 `模块:行号` 断言。

三要素（见 AGENTS.md §8.6）：模块名显式 / 精确片段抄源码原文 / 期望行号。
片段一律从 reconstructed319/deminified 里逐字复制，不做任何改写。

用法：
  python docs/probes/20261118-CC319沙箱机制断言核验.py
  python docs/probes/20261118-CC319沙箱机制断言核验.py --verbose

退出码：0 = 全部通过；1 = 有失败。
"""
import os
import sys

ROOT = r"D:/git_codes/claudecode283_hack"
DEM = os.path.join(ROOT, "reconstructed319", "deminified")

M_SRT = "m0302_0x117cfe48.js"      # @anthropic-ai/sandbox-runtime 内联实现（SandboxManager）
M_SET = "m0094_0x112cc57f.js"      # settings schema（sandbox.* 全部字段）
M_BASH = "m0591_0x11be624e.js"     # Bash/PowerShell 工具 + /sandbox 命令 + 模型侧指令
M_GIT = "m1688_0x12df78ab.js"      # 沙箱内 git 写入
M_OUT = "m1908_0x1323c1ff.js"      # 结果渲染（unsandboxedRetry 标注）
M_EVAL = "m2435_0x13dc0518.js"     # 插件 eval 的 kept-sandbox seal
M_CLI = "m0975_0x1267ad81.js"      # `claude sandbox` 子命令
M_WIN = "m1737_0x12e73617.js"      # Windows sandbox install/status 门禁（K6）
M_RC = "m0452_0x11a64161.js"       # remote-control 文案
M_TAG = "m0051_0x1126c209.js"      # 标签白名单（sandbox_violations 是协议标签）
M_CPU = "m2159_0x138a5541.js"      # 云端沙箱 CPU 看门狗 + 主系统提示词

# (模块, 期望行号, 精确片段)  —— 片段必须在该行逐字出现
MUST = [
    # ---------- Linux: bubblewrap ----------
    (M_SRT, 32860, 'let s = ["--cap-drop", "ALL"];'),
    (M_SRT, 33858, 'Et = ["--new-session", "--die-with-parent"],'),
    (M_SRT, 33914, 'Et.push("--dev", "/dev"), Et.push("--unshare-pid");'),
    (M_SRT, 33920, 'if (Et.push("--unshare-user", ...zgs({'),
    (M_SRT, 33883, 'if (Et.push("--unshare-net"), h && y) {'),
    (M_SRT, 33472, 'A.push("--ro-bind", "/", "/");'),
    (M_SRT, 33929, 'bubblewrap cannot disable user namespaces (needs 0.8.0 or later'),
    (M_SRT, 33948, 'It.push("seccomp(unix-block)")'),
    (M_SRT, 33949, 'Wrapped command with bwrap'),
    # bwrap 参数上限：单参数 >4096B 时改走文件；总参数 9000 上限
    (M_SRT, 32888, "var e1 = 4096,"),
    (M_SRT, 32889, "Hf = 9000,"),
    (M_SRT, 32948, "function I8(e, n, r) {"),
    (M_SRT, 32950, "bwrap accepts at most"),
    # denyRead glob 塌缩阈值
    (M_SRT, 33956, "var m1 = 256;"),
    # mandatoryDeny 搜索深度
    (M_SRT, 32590, "var YE = 3;"),
    (M_SRT, 37069, "return Ve?.mandatoryDenySearchDepth ?? 3"),
    # ---------- Linux: seccomp ----------
    (M_SRT, 39802, "var Kce = 3,"),
    (M_SRT, 39805, "function T4() {"),
    (M_SRT, 39806, "return !1"),
    (M_SRT, 39818, "function cwr() {"),
    (M_SRT, 39821, "applyPath: `/proc/self/fd/${Kce}`"),
    (M_SRT, 32491, "32-bit x86 (ia32) is not currently supported due to missing socketcall() syscall blocking"),
    (M_SRT, 32481, '/usr", "lib", "node_modules", "@anthropic-ai", "sandbox-runtime"'),
    (M_SRT, 33039, "seccomp not available - unix socket access not restricted"),
    # ---------- Linux: 网络代理 ----------
    (M_SRT, 33884, "Linux HTTP bridge socket does not exist"),
    (M_SRT, 36588, "Mux proxy (HTTP+SOCKS) listening on localhost:"),
    (M_SRT, 34712, "var zf = [60080, 60089],"),
    (M_SRT, 29780, 'var yE = "blocked-by-sandbox-runtime";'),
    (M_SRT, 33228, 'w = $oe([y ?? "socat"]),'),
    # ---------- Linux: 违规监控 ----------
    (M_SRT, 34617, "function k1(e, n) {"),
    (M_SRT, 34628, "[Sandbox Linux Monitor] observe filter not installed"),
    (M_SRT, 33868, 'Et.push("--setenv", "SRT_OBSERVE_SOCK", xe)'),
    (M_SRT, 29363, "getViolationsForCommand(e) {"),
    (M_SRT, 37495, "function ej(e, n) {"),
    (M_SRT, 37500, 's += bx + "<sandbox_violations>" + bx;'),
    # ---------- macOS: Seatbelt ----------
    (M_SRT, 34431, "function a9({"),
    (M_SRT, 34448, '(version 1)'),
    (M_SRT, 34448, '(deny default (with message'),
    (M_SRT, 34448, "based on Chrome sandbox policy"),
    (M_SRT, 34472, 'Z.push("(allow pseudo-tty)")'),
    (M_SRT, 34555, '"/usr/bin/sandbox-exec", "-p", He, bn, "-c", n'),
    (M_SRT, 34508, "file mask degrades to deny on macOS until the interposer lands"),
    # ---------- Windows: 专用账户 + ACL + WFP ----------
    (M_SRT, 37918, 'var kpt = "ClaudeCodeSandbox";'),
    (M_SRT, 43423, "sandboxUser: kpt,"),
    (M_SRT, 34771, '"vendor", "srt-win"'),
    (M_SRT, 35322, 'if (e.sandboxUser) n.push("--sandbox-user", e.sandboxUser);'),
    (M_SRT, 35649, '"acl", "grant", "--holder-pid"'),
    (M_SRT, 38071, '"icacls.exe"'),
    (M_SRT, 35016, "function H1(e) {"),
    (M_SRT, 35017, "The Windows Secondary Logon service (seclogon) is not present"),
    (M_SRT, 36085, "the WFP filter keys on the dedicated `srt-sandbox` user's SID"),
    (M_SRT, 36712, "[Sandbox Windows] fs applied:"),
    (M_SRT, 36133, "[Sandbox Windows] WFP installed:"),
    (M_SRT, 36637, "Windows sandbox user is not provisioned"),
    (M_SRT, 37309, "Per-exec filesystem.allowRead/allowWrite is not supported"),
    (M_SRT, 37292, "wrapWithSandbox() returns a shell string and is not supported on Windows"),
    # ---------- 凭据保护（mac/Linux 独有） ----------
    (M_SRT, 31842, 'var Vf = "fake_value_",'),
    (M_SRT, 32479, 'n.push(oo(r, "@anthropic-ai", "sandbox-runtime"))'),
    # ---------- 平台闸门 ----------
    (M_SRT, 36756, "function OI() {"),
    (M_SRT, 36758, "if (e === \"linux\") return FFi() !== \"1\";"),
    (M_SRT, 44830, "return Cr()?.sandbox?.autoAllowBashIfSandboxed ?? !0"),
    (M_SRT, 43504, "class eV {"),
    (M_SRT, 37521, "var nn = {"),
    (M_SRT, 46493, "ensureInitializedForWrap: Mw,"),
    (M_SRT, 39877, "Ubuntu's AppArmor restriction on user namespaces stops bubblewrap here"),
    (M_SRT, 32867, "Grant CAP_SETFCAP to this process, or run as a non-root user"),

    # ---------- settings schema（沙箱的能力边界就写在这些 describe 里）----------
    (M_SET, 4829, "Run Bash commands inside the sandbox. Default: false."),
    (M_SET, 4665, "Enforced for sandboxed commands only"),
    (M_SET, 4665, "in-process tools such as WebFetch are not gated by this setting"),
    (M_SET, 4686, "macOS and Linux/WSL only: skip filesystem isolation entirely while keeping network and seccomp isolation."),
    (M_SET, 4686, "Ignored on native Windows"),
    (M_SET, 4837, "Run without the fresh /proc mount, for hosts such as unprivileged Docker containers"),
    (M_SET, 4838, "Let sandboxed commands create user namespaces of their own"),
    (M_SET, 4839, "Allow access to com.apple.trustd.agent in the sandbox"),
    (M_SET, 4840, "Allow sandboxed commands to send Apple Events"),
    (M_SET, 4841, "Command patterns (Bash permission-rule syntax) for commands to run outside the sandbox."),
    (M_SET, 4847, "Absolute path to the socat binary used for the sandbox network proxy"),
    (M_SET, 3531, "persistent Monitor tasks (unsandboxed, same trust tier as hooks)"),
    (M_SET, 4678, "[EXPERIMENTAL] Enable in-process TLS termination"),

    # ---------- Bash 工具侧 ----------
    (M_BASH, 148592, "function _1r() {"),
    (M_BASH, 148594, 'if (e === "macos") return " (macOS Seatbelt)";'),
    (M_BASH, 148595, 'if (e === "linux" || e === "wsl") return " (Linux bubblewrap)";'),
    (M_BASH, 148654, "You should always default to running commands within the sandbox."),
    (M_BASH, 143767, "Ge.wrapWithSandboxArgv(ei, Za, Jo, Oi, si, xi)"),
    (M_BASH, 143772, "Ge.wrapWithSandbox(Za, nr, Jo, Or, si, xi)"),
    (M_BASH, 143763, "Sandboxed bash on Windows requires Git Bash"),
    (M_BASH, 66436, "disableUnsandboxedCommands === !0 || kg().unsandboxedCommandsDisabled"),
    (M_BASH, 66437, "if (e.dangerouslyDisableSandbox && !r"),
    (M_BASH, 66396, "Strict sandbox mode is on, so no command may run outside the sandbox"),
    (M_BASH, 57066, "allowed_domains applies only to a command that runs in the sandbox"),
    (M_BASH, 57043, "max(cVo).optional()"),
    # /sandbox 命令
    (M_BASH, 101160, "var nSr = {"),
    (M_BASH, 101161, 'name: "sandbox",'),
    (M_BASH, 101180, "return !Ge.isSupportedPlatform() || !Ge.isPlatformInEnabledList()"),
    # 模型侧 sandbox_instructions 附件
    (M_BASH, 151759, 'dc("sandbox_instructions"'),
    (M_BASH, 152386, "function RAn(e, n) {"),
    (M_BASH, 152397, 'type: "sandbox_instructions",'),
    (M_BASH, 148583, "The sandbox marks out what this session was given"),
    # 沙箱内 git（第三个调用点）
    (M_BASH, 219565, 'Y = await Ge.wrapWithSandbox(G, "/bin/sh", N);'),
    # ---------- 其它业务调用点 ----------
    (M_GIT, 298, 'R = await Ge.wrapWithSandbox(n, "/bin/sh", {'),
    (M_OUT, 1082, 'var Ao = "[retried outside the sandbox]",'),
    (M_EVAL, 4059, "directory modes do not restrict access on Windows"),
    (M_EVAL, 4071, "the kept directory is not the one the harness created"),
    (M_CLI, 1405, "Install the Windows sandbox user and network filters."),
    (M_CLI, 1410, "Print the effective sandbox posture"),
    (M_RC, 12138, "auto_off.reason.sandbox_off"),
    (M_SET, 4651, 'var Ar = "When managed settings or a --settings file set allowUnsandboxedCommands: false, or managed settings '),
    (M_SET, 4681, 'allowWrite: C(o()).optional().describe("Additional paths to allow writing within the sandbox. Merged with path'),
    (M_SET, 4735, 'mode: B(["deny", "mask"]).describe("Access mode for this path. `deny` blocks reads inside the sandbox; `mask` '),
    (M_SET, 4738, 'decode: B(["jwt"]).optional().describe("Optional encoded-credential format for `mask` mode. `jwt`: candidates '),
    (M_SET, 4755, 'extract: o().optional().describe("Optional regex for structured masking when mode is `mask`. Applied globally '),
    (M_SET, 4836, "ignoreViolations: me(o(), C(o())).optional().describe('Sandbox violations to leave unreported: a map of comman"),
    (M_SRT, 32245, 'let ue = `[sandbox-runtime] WARNING: "${D.secretAccessKeyVar}" is masked but "${D.accessKeyIdVar}" is not, so '),
    (M_SRT, 32840, 'if (!JR) JR = !0, Ot(`[Sandbox Linux] /proc/self/status ${r} - assuming this process holds no capabilities`, {'),
    (M_SRT, 32855, 'function zgs({'),
    (M_SRT, 32863, 'if (r) s.push("--cap-add", "CAP_SETFCAP");'),
    (M_SRT, 32965, 'let N = $oe(["/bin/sh", "-c", `exec ${$E}<"$1" && shift && exec "$@"`, "srt-args", KE(I), e, ...n.slice(0, r.s'),
    (M_SRT, 33216, 'function F8(e, n) {'),
    (M_SRT, 33226, 'function $8(e, n, r, s, h, y) {'),
    (M_SRT, 33282, 'return [...[...s].sort((w, A) => w.split("/").length - A.split("/").length).flatMap((w) => ["--ro-bind", w, w]'),
    (M_SRT, 33291, 'e.push("--tmpfs", r);'),
    (M_SRT, 33329, 'e.push("--bind", I.source, I.dest), S.push(I), Ot(`[Sandbox Linux] Re-bound write path wiped by denyRead tmpfs'),
    (M_SRT, 33644, 'Ot(`[Sandbox Linux] Mounted /dev/null at symlink ${jn} to prevent symlink replacement attack`);'),
    (M_SRT, 33866, 'else Ot("[Sandbox Linux] Skipping seccomp filter - allowAllUnixSockets is enabled");'),
    (M_SRT, 33865, 'else Gt = B8(te === !0) + Gt, Ot("[Sandbox Linux] Applying seccomp filter for Unix socket blocking");'),
    (M_SRT, 33886, 'if (Et.push("--bind", h, h), y !== h) Et.push("--bind", y, y);'),
    (M_SRT, 33887, 'let Mt = Opt(3128, 1080, I, A, ft === void 0, wn);'),
    (M_SRT, 34175, 'function Z8(e, n, r) {'),
    (M_SRT, 34377, 'function s9(e, n) {'),
    (M_SRT, 34380, 'r.push("(allow file-read*)");'),
    (M_SRT, 34387, 'if (r.push(...ao("deny", ["file-read*"], new Set(S.filters), n)), s || S.coversRoot) r.push(\'(allow file-read*'),
    (M_SRT, 34388, 'if (e.denies.length > 0) r.push("(allow file-read-metadata", "  (vnode-type DIRECTORY))");'),
    (M_SRT, 34398, 'function o9(e, n, r, s) {'),
    (M_SRT, 34451, 'if (A) Z.push(\'(allow network-bind (local ip "*:*"))\'), Z.push(\'(allow network-inbound (local ip "*:*"))\'), Z.'),
    (M_SRT, 34454, 'Z.push("(allow system-socket (socket-domain AF_UNIX))");'),
    (M_SRT, 34481, 'function Euo(e) {'),
    (M_SRT, 35051, 'return (e.sublayerGuid ? ` --sublayer-guid ${e.sublayerGuid}` : "") + (r !== h || s !== y ? ` --proxy-port-ran'),
    (M_SRT, 35148, 'let s = ["wfp", "verify", "--target", n];'),
    (M_SRT, 35570, 'denyRead: [...new Set([...e.denyRead, ...e.credentialDeny, ...[...S, ...w].filter((A) => n(A) !== void 0)])],'),
    (M_SRT, 35622, 'let r = V1(["acl", "restore", "--holder-pid", `${n}`, "--sandbox-user-sid", e.sandboxUserSid, "--json"], {'),
    (M_SRT, 35661, 'let s = V1(["acl", "revoke", "--holder-pid", `${n}`, "--sandbox-user-sid", e.sandboxUserSid, "--json"], {'),
    (M_SRT, 36009, 'y.push("--write-restricted-token");'),
    (M_SRT, 36082, 'return `Windows sandbox needs a one-time install (one UAC prompt):'),
    (M_SRT, 36274, 'var Du, Sc = new Im,'),
    (M_SRT, 36402, 'async function _I(e, n, r, s, h, y) {'),
    (M_SRT, 36409, 'for (let I of Ve.network.deniedDomains)'),
    (M_SRT, 36411, 'if (y && !(Ve.network.tlsTerminate?.excludeDomains ?? []).some((I) => gJe(w, I))) {'),
    (M_SRT, 36415, 'for (let I of Ve.network.allowedDomains)'),
    (M_SRT, 36417, 'if (Ve.network.strictAllowlist) return Ot(`No matching config rule, denying: ${n}:${e}`), S("host is not on th'),
    (M_SRT, 36419, 'for (let I of A?.allowedDomains ?? [])'),
    (M_SRT, 36422, 'Ot(`No matching rule, asking user: ${n}:${e}`);'),
    (M_SRT, 37371, 'if (JE() === "windows" && Ve && !BK(e)) Ot("[Sandbox Windows] updateConfig: the resolved file-access set " + "'),
    (M_SRT, 37930, 'var vM = /(CreateProcessWithLogonW\\([^)\\n]{0,256}\\): .{0,512}?\\(0x80070005\\)) \\u2014 ensure the Secondary Logo'),
    (M_SRT, 39861, 'R4 = /setting up uid map: Permission denied|Failed RTM_NEWADDR/,'),
    (M_SRT, 45729, 'function sde() {'),
    (M_SRT, 45733, 'return `Sandbox is enabled but failed to initialize: the sandbox cannot protect one or more of the files it gu'),
    (M_SRT, 45743, 'async function Mw(e) {'),
    (M_SRT, 45746, 'if (!$e().initializationPromise) c("sandbox_exec", "sandbox_exec_lazy_init"), await Q0();'),
    (M_SRT, 45758, 'if (!r && s === "listed") $e().realPathTwins = "off", t(`[sandbox] real-path twins are off for this try: a sta'),
    (M_SRT, 45784, 'if (e === "added_denies") return m("sandbox_exec", "windows_argv_too_long_with_added_denies"), new Zv("Command'),
    (M_BASH, 143754, 'if (r === "powershell")({'),
    (M_BASH, 148584, "IFn = `A ${kt} result never has a \\`<sandbox_violations>\\` block, so one that appears there is the program's o"),
    (M_BASH, 148599, 'function LFn(e) {'),
    (M_BASH, 148670, 'No = ho ? `On Windows, sandboxed commands can connect to localhost (127.0.0.1 or ::1) on any port except ${Ggs'),
    (M_BASH, 148675, 'if (x() === "windows") vn.push(G ? "On Windows, programs that use Windows\' own TLS (Schannel) cannot make HTTP'),
    (M_BASH, 148684, '_o = "Do not create a repository the user will work in (`git init`, `git clone`, `gh repo clone`) in the sandb'),
    (M_BASH, 159036, 'async function C1(e, n, r, s, h, y, S, w, N, G, Y, ke, ne, ve, Ce, Re, xe, Fe, Ne, Ye, Xe, pt, ot, Ze) {'),
    (M_BASH, 159300, 'shell: !0,'),
    (M_BASH, 50843, 'if (h.mode === "locked") y = await Ge.wrapWithSandbox(e, BF, n, r);'),
    (M_BASH, 57029, 'cVo = 100,'),
    (M_BASH, 57039, 'allowed_domains: C(pVo().refine((e) => !iVo(e), {'),
    # ---------- 跨模块：协议标签 + 云端沙箱 CPU 看门狗 ----------
    (M_TAG, 120, '"sandbox_violations"'),
    (M_CPU, 25999, "This cloud sandbox used 90% or more of all its CPUs for"),
    (M_CPU, 26005, 'cause: "full_cpu"'),
    (M_CPU, 26424, "if (!i.CLAUDE_CODE_REMOTE || q()) return;"),
    (M_CPU, 26432, 'let file = QL.join(tPn, s, "cpuacct.usage"),'),
    # ---------- §14：Windows 上 bwrap 不可用（平台分派 + 特性开关 + 运行时字段）----------
    (M_SRT, 33035, 'else if (S = ba("bwrap"), S === null) h.push("bubblewrap (bwrap) not installed");'),
    (M_SRT, 36776, 'if (s === "linux") {'),
    (M_SRT, 36781, "let y = u1({"),
    (M_SRT, 36787, '} else if (s === "windows") {'),
    (M_SRT, 36790, "h = ii(Ve?.windows?.srtWin)"),
    (M_SRT, 37298, 'if (JE() === "windows") {'),
    (M_SRT, 37334, "fK(r?.windows?.srtWin ? ii(r.windows.srtWin) : Du ?? ii(Ve?.windows?.srtWin));"),
    (M_SRT, 37908, "function K6() {"),
    (M_SRT, 37911, 'let e = v("tengu_nankeen_kestrel", !1);'),
    (M_WIN, 523, "The Windows sandbox is not enabled on this build."),
    (M_SRT, 32503, 's = oo("vendor", "seccomp", n, e);'),
    (M_SRT, 33927, 'let Mt = Z ? null : _e ?? ba("bwrap");'),
    (M_SRT, 36766, "function PI(e) {"),
    (M_SRT, 37355, "srtWin: r?.windows?.srtWin ? ii(r.windows.srtWin) : Du ?? ii(Ve?.windows?.srtWin)"),
    (M_SRT, 37910, "if (i.CLAUDE_CODE_NANKEEN_KESTREL) return vv.hasBeenOn = !0, !0;"),
]

# 否定断言：(模块, 片段, 说明)  —— 该片段在整个模块内必须 0 命中
MUST_NOT = [
    (M_SRT, "docker", "沙箱实现里没有 Docker"),
    (M_SRT, "Docker", "沙箱实现里没有 Docker"),
    (M_SRT, "gVisor", "没有 gVisor"),
    (M_SRT, "firecracker", "没有 Firecracker"),
    (M_SRT, "nsjail", "没有 nsjail"),
    (M_SRT, "landlock", "没有 Landlock LSM"),
    (M_SRT, "cgroup", "没有 cgroup 资源限制"),
    (M_SRT, "setrlimit", "没有 rlimit 资源限制"),
    (M_SRT, "RLIMIT", "没有 rlimit 资源限制"),
    (M_SRT, "pids-limit", "没有 pids 上限"),
    (M_SRT, "memoryLimit", "没有内存上限"),
    (M_SRT, "maxMemory,", "没有内存上限"),
    (M_SRT, "bwrap.exe", "没有 Windows 版 bwrap"),
    (M_SRT, "bubblewrap.exe", "没有 Windows 版 bwrap"),
]


def check_must(mod, expected, snippet, verbose=False):
    path = os.path.join(DEM, mod)
    if not os.path.exists(path):
        return False, f"文件不存在: {mod}"
    with open(path, encoding="utf-8", errors="replace") as f:
        lines = f.read().split("\n")
    if expected < 1 or expected > len(lines):
        return False, f"{mod}:{expected} 越界（共 {len(lines)} 行）"
    actual = lines[expected - 1]
    if snippet in actual:
        if verbose:
            print(f"  OK   {mod}:{expected}  {snippet[:60]}")
        return True, ""
    # 诊断：片段是否出现在别处（坐标漂移），还是压根不存在（断言写错）
    hits = [i + 1 for i, ln in enumerate(lines) if snippet in ln]
    if hits:
        return False, (f"{mod}:{expected} 坐标漂移 —— 片段实际在 {hits[:5]}；"
                       f"该行内容: {actual.strip()[:100]}")
    return False, f"{mod}:{expected} 片段不存在于该模块: {snippet[:70]}"


def check_must_not(mod, snippet):
    path = os.path.join(DEM, mod)
    if not os.path.exists(path):
        return False, f"文件不存在: {mod}"
    with open(path, encoding="utf-8", errors="replace") as f:
        text = f.read()
    n = text.count(snippet)
    if n == 0:
        return True, ""
    hits = [i + 1 for i, ln in enumerate(text.split("\n")) if snippet in ln]
    return False, f"{mod} 出现 {n} 次 `{snippet}`（行 {hits[:6]}）"


def main():
    verbose = "--verbose" in sys.argv
    ok = bad = 0
    print(f"== MUST（{len(MUST)} 条）==")
    for mod, line, snip in MUST:
        good, why = check_must(mod, line, snip, verbose)
        if good:
            ok += 1
        else:
            bad += 1
            print(f"  FAIL {why}")
    print(f"\n== MUST_NOT（{len(MUST_NOT)} 条）==")
    for mod, snip, desc in MUST_NOT:
        good, why = check_must_not(mod, snip)
        if good:
            ok += 1
            if verbose:
                print(f"  OK   0 命中 `{snip}` —— {desc}")
        else:
            bad += 1
            print(f"  FAIL {why} —— {desc}")
    print(f"\n结果: ok={ok} bad={bad}")
    return 0 if bad == 0 else 1


if __name__ == "__main__":
    sys.exit(main())