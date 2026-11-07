// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-z6138ats.js";
import "B:/~BUN/root/chunk-fjzk7kwf.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-2f1svh63.js";
import "B:/~BUN/root/chunk-begxsvab.js";
import "B:/~BUN/root/chunk-44q965xg.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-sy1h8mf0.js";
import {
  lbt
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  Ejs,
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  et
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import "B:/~BUN/root/chunk-4hj5k2m3.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  readdir as u,
  readFile as d,
  stat as p
} from "fs/promises";
import {
  homedir as m
} from "os";
import {
  join as l
} from "path";
async function g() {
  let o = x();
  if (!Ejs.includes(o)) throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
  if (o === "macos") return l(m(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let a = i.USERPROFILE ? i.USERPROFILE.replace(/\\/g, "/") : null;
  if (a) {
    let e = `/mnt/c${a.replace(/^[A-Z]:/,"")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return await p(e), e
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
          return await p(s), s
        } catch {}
      }
    } catch {}
  } catch (n) {
    t(`Failed scanning /mnt/c/Users for Claude Desktop config: ${n}`, {
      level: "error"
    })
  }
  throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.")
}
async function R() {
  if (!Ejs.includes(x())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let o = await g(),
      a;
    try {
      a = await d(o, {
        encoding: "utf8"
      })
    } catch (s) {
      if (k(s) === "ENOENT") return {};
      throw s
    }
    let n = et(a);
    if (!n || typeof n !== "object") return {};
    let e = n.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = lbt().safeParse(c);
      if (f.success) r[s] = f.data
    }
    return r
  } catch (o) {
    return t(`Failed to read Claude Desktop MCP servers: ${o}`, {
      level: "error"
    }), {}
  }
}
export {
  R as readClaudeDesktopMcpServers
};
