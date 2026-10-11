// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { KP } from "B:/~BUN/root/chunk-8n4s8cn5.js";
function TSe(s) {
  if (!s) return {
    type: "menu"
  };
  let t = s.trim().split(/\s+/);
  switch (t[0]?.toLowerCase()) {
    case "help":
    case "--help":
    case "-h":
      return {
        type: "help"
      };
    case "list":
    case "ls":
      {
        let n = t.slice(1).find(item => item === "--enabled" || item === "--disabled");
        if (n) return {
          type: "list",
          filter: n === "--enabled" ? "enabled" : "disabled"
        };
        return {
          type: "list"
        };
      }
    case "install":
    case "i":
      {
        let n = o(t.slice(1));
        if (n) return n;
        let e = t[1];
        if (!e) return {
          type: "install"
        };
        let r = e.lastIndexOf("@");
        if (r > 0) {
          let plugin = e.slice(0, r),
            marketplace = e.slice(r + 1);
          return {
            type: "install",
            plugin: plugin,
            marketplace: marketplace
          };
        }
        if (!e.startsWith("@") && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file://") || e.includes("/") || e.includes("\\"))) return {
          type: "install",
          marketplace: e
        };
        return {
          type: "install",
          plugin: e
        };
      }
    case "manage":
      return {
        type: "manage"
      };
    case "stats":
      {
        if (KP()) return {
          type: "stats"
        };
        return {
          type: "menu"
        };
      }
    case "directory":
    case "search":
      return {
        type: "menu"
      };
    case "uninstall":
      return {
        type: "uninstall",
        plugin: t[1]
      };
    case "enable":
      return {
        type: "enable",
        plugin: t[1]
      };
    case "disable":
      return {
        type: "disable",
        plugin: t[1]
      };
    case "configure":
    case "config":
      return {
        type: "configure",
        plugin: t[1]
      };
    case "validate":
      return {
        type: "validate",
        path: t.slice(1).join(" ").trim() || void 0
      };
    case "eval":
      return {
        type: "menu"
      };
    case "tag":
      {
        let n = new Set(["--push", "--dry-run", "--force", "-f"]),
          e = t.slice(1),
          r = e.filter(item => item.startsWith("-")),
          i = e.filter(item => !item.startsWith("-")),
          unknownFlag = r.find(item => !n.has(item)) ?? i[1];
        return {
          type: "tag",
          path: i[0],
          push: r.includes("--push"),
          dryRun: r.includes("--dry-run"),
          force: r.includes("--force") || r.includes("-f"),
          ...(unknownFlag !== void 0 && {
            unknownFlag: unknownFlag
          })
        };
      }
    case "marketplace":
    case "market":
      {
        let n = t[1]?.toLowerCase(),
          target = t.slice(2).join(" ");
        switch (n) {
          case "add":
            return {
              type: "marketplace",
              action: "add",
              target: target
            };
          case "remove":
          case "rm":
            return {
              type: "marketplace",
              action: "remove",
              target: target
            };
          case "update":
            return {
              type: "marketplace",
              action: "update",
              target: target
            };
          case "list":
            return {
              type: "marketplace",
              action: "list"
            };
          default:
            return {
              type: "marketplace"
            };
        }
      }
    default:
      return {
        type: "menu"
      };
  }
}
var p = "Usage: /plugin install <plugin> --marketplace <source>";
function o(s) {
  let t = s.findIndex(item => item === "--marketplace" || item.startsWith("--marketplace="));
  if (t === -1) return;
  let c = s[t],
    n = c !== "--marketplace",
    marketplaceSource = n ? c.slice(14) : s[t + 1];
  if (!marketplaceSource || marketplaceSource.startsWith("-")) return {
    type: "usage-error",
    message: `--marketplace needs a marketplace source (owner/repo or a URL). ${p}`
  };
  let r = s.filter((item, index) => index !== t && (n || index !== t + 1)),
    plugin_2 = r[0];
  if (r.length !== 1 || !plugin_2 || plugin_2.startsWith("-")) return {
    type: "usage-error",
    message: `--marketplace needs exactly one plugin name. ${p}`
  };
  if (plugin_2.lastIndexOf("@") > 0) return {
    type: "usage-error",
    message: `Name the marketplace once: <plugin>@<marketplace>, or ${p.slice(7)}`
  };
  return {
    type: "install-from-source",
    plugin: plugin_2,
    marketplaceSource: marketplaceSource
  };
}
function nZr({
  plugin: plugin_3,
  marketplaceSource: marketplaceSource_2
}) {
  return `/plugin install ${plugin_3} --marketplace ${marketplaceSource_2}`;
}
export { TSe, nZr };