// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-ht635kqk.js";
import { Z$e } from "B:/~BUN/root/chunk-ah3egpyh.js";
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import { Kzr, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { ct } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import "B:/~BUN/root/chunk-tndjj29v.js";
import { readdir as u, readFile as d, stat as p } from "fs/promises";
import { homedir as m } from "os";
import { join as l } from "path";
async function g() {
  let o = O();
  if (!Kzr.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
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
  if (!Kzr.includes(O())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(),
      i;
    try {
      i = await d(o, {
        encoding: "utf8"
      });
    } catch (error) {
      if (v(error) === "ENOENT") return {};
      throw error;
    }
    let n = ct(i);
    if (!n || typeof n !== "object") return {};
    let mcpServers = n.mcpServers;
    if (!mcpServers || typeof mcpServers !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(mcpServers)) {
      if (!c || typeof c !== "object") continue;
      let f = Z$e().safeParse(c);
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