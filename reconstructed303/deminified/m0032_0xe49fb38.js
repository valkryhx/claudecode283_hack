// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { se, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Lbt } from "B:/~BUN/root/chunk-zpzjr56x.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { readdir as m, readFile as f } from "fs/promises";
import { release as osRelease } from "os";
var d = He({
  value: !1
}, e => {
  e.value = !1;
});
function c() {
  return d.value;
}
function readProcVersionSync() {
  if (c()) return;
  try {
    return se().readFileSync("/proc/version", {
      encoding: "utf8"
    }).toLowerCase();
  } catch {
    return;
  }
}
var lWo = ["macos", "wsl"];
class u {
  sources;
  primedProcVersion;
  fallbackProcVersion;
  fallbackProcVersionRead = !1;
  platform;
  wslVersion = null;
  macOSMajorVersion = null;
  linuxDistroInfo;
  constructor(e) {
    this.sources = e;
  }
  kernelString() {
    if (this.primedProcVersion !== void 0) return this.primedProcVersion;
    if (!this.fallbackProcVersionRead) this.fallbackProcVersion = this.sources.readProcVersionSync(), this.fallbackProcVersionRead = !0;
    return this.fallbackProcVersion;
  }
  getPlatform() {
    if (this.platform !== void 0) return this.platform;
    try {
      if (this.sources.platform === "darwin") this.platform = "macos";else if (this.sources.platform === "win32") this.platform = "windows";else if (this.sources.platform === "linux") {
        if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP) this.platform = "wsl";else {
          let e = this.kernelString();
          this.platform = e !== void 0 && Lbt(e) ? "wsl" : "linux";
        }
      } else this.platform = "unknown";
    } catch (error) {
      l(error), this.platform = "unknown";
    }
    return this.platform;
  }
  getWslVersion() {
    if (this.wslVersion !== null) return this.wslVersion;
    if (this.sources.platform !== "linux") {
      this.wslVersion = void 0;
      return;
    }
    let e = this.kernelString();
    if (e === void 0) {
      this.wslVersion = void 0;
      return;
    }
    let r = e.match(/wsl(\d+)/);
    if (r && r[1]) this.wslVersion = r[1];else if (e.includes("microsoft")) this.wslVersion = "1";else this.wslVersion = void 0;
    return this.wslVersion;
  }
  getMacOSMajorVersion() {
    if (this.macOSMajorVersion !== null) return this.macOSMajorVersion;
    if (this.sources.platform !== "darwin") {
      this.macOSMajorVersion = void 0;
      return;
    }
    let e = this.sources.osRelease().match(/^(\d+)\./);
    return this.macOSMajorVersion = e && e[1] ? parseInt(e[1], 10) - 9 : void 0, this.macOSMajorVersion;
  }
  getLinuxDistroInfo() {
    return this.linuxDistroInfo ??= this.readLinuxDistroInfo();
  }
  async readLinuxDistroInfo() {
    if (this.sources.platform !== "linux") return;
    let e = {
      linuxKernel: this.sources.osRelease()
    };
    try {
      let r = await this.sources.readOsRelease();
      for (let s of r.split(`
`)) {
        let n = s.match(/^(ID|VERSION_ID)=(.*)$/);
        if (n && n[1] && n[2]) {
          let i = n[2].replace(/^"|"$/g, "");
          if (n[1] === "ID") e.linuxDistroId = i;else e.linuxDistroVersion = i;
        }
      }
    } catch {}
    return e;
  }
  async prime() {
    if (this.primedProcVersion !== void 0 || this.sources.platform !== "linux") return;
    try {
      let e = await this.sources.readProcVersion();
      this.primedProcVersion = e.toLowerCase();
    } catch (error) {
      t(`Failed to read /proc/version for WSL detection: ${error}`, {
        level: "error"
      });
      return;
    }
    this.platform = void 0, this.wslVersion = null;
  }
}
var h;
function o() {
  return h ??= new u({
    platform: "win32",
    env: process.env,
    readProcVersionSync: readProcVersionSync,
    readProcVersion: () => f("/proc/version", {
      encoding: "utf8"
    }),
    osRelease: osRelease,
    readOsRelease: () => f("/etc/os-release", "utf8")
  });
}
function a6s() {
  return o().prime();
}
function I() {
  return o().getPlatform();
}
function _De(e) {
  switch (e) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    default:
      return e;
  }
}
function SGe() {
  return o().getWslVersion();
}
function VXn() {
  return o().getLinuxDistroInfo();
}
function l6s() {
  return o().getMacOSMajorVersion();
}
var g = [[".git", "git"], [".hg", "mercurial"], [".svn", "svn"], [".p4config", "perforce"], ["$tf", "tfs"], [".tfvc", "tfs"], [".jj", "jujutsu"], [".sl", "sapling"]];
async function d6s(e) {
  let r = new Set();
  if (process.env.P4PORT) r.add("perforce");
  try {
    let s = e ?? se().cwd(),
      n = new Set(await m(s));
    for (let [i, a] of g) if (n.has(i)) r.add(a);
  } catch {}
  return [...r];
}
export { readProcVersionSync as e1r, lWo, a6s, I, _De, SGe, VXn, l6s, d6s };