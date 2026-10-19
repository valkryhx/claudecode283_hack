// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { cN, uw } from "B:/~BUN/root/chunk-9g7m04dd.js";
function kNe(a) {
  if (!a) return {
    type: "menu"
  };
  let t = a.trim().split(/\s+/);
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
        let r = t.slice(1).find(item => item === "--enabled" || item === "--disabled");
        if (r) return {
          type: "list",
          filter: r === "--enabled" ? "enabled" : "disabled"
        };
        return {
          type: "list"
        };
      }
    case "install":
    case "i":
      {
        let r = o(t.slice(1));
        if (r) return r;
        let e = t[1];
        if (!e) return {
          type: "install"
        };
        let n = e.lastIndexOf("@");
        if (n > 0) {
          let plugin = e.slice(0, n),
            marketplace = e.slice(n + 1);
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
        if (cN()) return {
          type: "stats"
        };
        return {
          type: "menu"
        };
      }
    case "directory":
    case "search":
      {
        if (uw()) return {
          type: "directory",
          query: t.slice(1).join(" ").trim() || void 0
        };
        return {
          type: "menu"
        };
      }
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
        let r = new Set(["--push", "--dry-run", "--force", "-f"]),
          e = t.slice(1),
          n = e.filter(item => item.startsWith("-")),
          l = e.filter(item => !item.startsWith("-")),
          unknownFlag = n.find(item => !r.has(item)) ?? l[1];
        return {
          type: "tag",
          path: l[0],
          push: n.includes("--push"),
          dryRun: n.includes("--dry-run"),
          force: n.includes("--force") || n.includes("-f"),
          ...(unknownFlag !== void 0 && {
            unknownFlag: unknownFlag
          })
        };
      }
    case "marketplace":
    case "market":
      {
        let r = t[1]?.toLowerCase(),
          target = t.slice(2).join(" ");
        switch (r) {
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
var commandLine = "/plugin install <plugin> --marketplace <source>";
function o(a) {
  let t = a.findIndex(item => item === "--marketplace" || item.startsWith("--marketplace="));
  if (t === -1) return;
  let s = a[t],
    r = s !== "--marketplace",
    e = zXr({
      plugins: a.filter((item, index) => index !== t && (r || index !== t + 1)),
      marketplaceSource: r ? s.slice(14) : a[t + 1],
      commandLine: commandLine
    });
  return "usageError" in e ? {
    type: "usage-error",
    message: e.usageError
  } : {
    type: "install-from-source",
    ...e
  };
}
function zXr({
  plugins: plugins,
  marketplaceSource: marketplaceSource,
  commandLine: commandLine_2
}) {
  if (!marketplaceSource || marketplaceSource.startsWith("-")) return {
    usageError: `--marketplace needs a marketplace source (owner/repo or a URL). Usage: ${commandLine_2}`
  };
  let plugin_2 = plugins[0];
  if (plugins.length !== 1 || !plugin_2 || plugin_2.startsWith("-")) return {
    usageError: `--marketplace needs exactly one plugin name. Usage: ${commandLine_2}`
  };
  if (plugin_2.lastIndexOf("@") > 0) return {
    usageError: `Name the marketplace once: <plugin>@<marketplace>, or ${commandLine_2}`
  };
  return {
    plugin: plugin_2,
    marketplaceSource: marketplaceSource
  };
}
function SRn({
  plugin: plugin_3,
  marketplaceSource: marketplaceSource_2
}) {
  return `/plugin install ${plugin_3} --marketplace ${marketplaceSource_2}`;
}
export { kNe, zXr, SRn };