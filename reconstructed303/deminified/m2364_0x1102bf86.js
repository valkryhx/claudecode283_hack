// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-a3eqgdv2.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-a0k8qg0d.js";
import { XQe } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import { lWo, I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import "B:/~BUN/root/chunk-b0487zs4.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import { readdir as u, readFile as d, stat as p } from "fs/promises";
import { homedir as m } from "os";
import { join as l } from "path";
async function g() {
  let o = I();
  if (!lWo.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
  if (o === "macos") return l(m(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let i = a.USERPROFILE ? a.USERPROFILE.replace(/\\/g, "/") : null;
  if (i) {
    let e = `/mnt/c${i.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return await p(e), e;
    } catch {}
  }
  try {
    try {
      let e = await u("/mnt/c/Users", {
        withFileTypes: !0
      });
      for (let r of e) {
        if (r.name === "Public" || r.name === "Default" || r.name === "Default User" || r.name === "All Users") continue;
        let s = l("/mnt/c/Users", r.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        try {
          return await p(s), s;
        } catch {}
      }
    } catch {}
  } catch (error) {
    t(`Failed scanning /mnt/c/Users for Claude Desktop config: ${error}`, {
      level: "error"
    });
  }
  throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.");
}
async function R() {
  if (!lWo.includes(I())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(),
      i;
    try {
      i = await d(o, {
        encoding: "utf8"
      });
    } catch (error) {
      if (k(error) === "ENOENT") return {};
      throw error;
    }
    let n = pt(i);
    if (!n || typeof n !== "object") return {};
    let mcpServers = n.mcpServers;
    if (!mcpServers || typeof mcpServers !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(mcpServers)) {
      if (!c || typeof c !== "object") continue;
      let f = XQe().safeParse(c);
      if (f.success) r[s] = f.data;
    }
    return r;
  } catch (error) {
    return t(`Failed to read Claude Desktop MCP servers: ${error}`, {
      level: "error"
    }), {};
  }
}
export { R as readClaudeDesktopMcpServers };