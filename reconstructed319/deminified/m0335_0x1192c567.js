// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { R } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
var $Je = "io.modelcontextprotocol/files",
  Zbs = "io.modelcontextprotocol/files/upload",
  _ = "uploads",
  bBi = ["input_requests", "other_input", "mixed_input", "request_state", "method", "files", "target", "file_id", "url", "path", "url_or_path", "target_method", "expires_at", "credentials", "headers", "unknown_file", "repeated_file", "missing_file"],
  N = 4096,
  bLn = "/uploads",
  q = 32,
  I = 4096,
  v = 65536;
function eSs(e) {
  return `file-${e + 1}`;
}
var U = {
  extensions: {
    [$Je]: {
      upload: {}
    }
  }
};
function SLn(e) {
  let t = e.capabilities?.extensions?.[$Je];
  return e.protocolEra === "modern" && it(t) && it(t.upload);
}
class FilesNotSpokenError extends R {
  constructor(e) {
    super(`No file was sent and the tool was not called: Claude Code sends a file only on an MCP protocol 2026-07-28 connection to a server that advertises file uploads (the file-uploads extension with "upload"), and this connection to MCP server "${e}" is not one.`, "MCP file upload refused: connection without the file-uploads extension");
    this.name = "FilesNotSpokenError";
  }
}
function SBi(e) {
  return it(e) && e.resultType === "input_required";
}
function tSs(e, t = "McpToolCallError") {
  return `${t}; its message (${e.length} characters) is not logged because an error from a call that sends files can contain a file's details or an upload address.`;
}
function L(e, id) {
  return {
    id: id,
    name: e.name,
    mimeType: e.mimeType === "" ? "application/octet-stream" : e.mimeType,
    size: e.size,
    digest: {
      algorithm: "sha-256",
      value: Buffer.from(e.sha256, "hex").toString("base64url")
    }
  };
}
function wBi(e, t) {
  let r = {
    ...e
  };
  return t.forEach((item, d) => {
    let u = L(item, eSs(d));
    if (item.index === void 0) {
      r[item.argument] = u;
      return;
    }
    let a = r[item.argument];
    if (Array.isArray(a)) {
      let p = a === e[item.argument] ? [...a] : a;
      p[item.index] = u, r[item.argument] = p;
    }
  }), r;
}
function nSs(e, t) {
  if (!it(e) || e.resultType !== "input_required") return;
  let {
    inputRequests: inputRequests,
    requestState: requestState
  } = e;
  if (!it(inputRequests)) return {
    malformed: "input_requests"
  };
  if (!Object.hasOwn(inputRequests, _)) return {
    malformed: "other_input"
  };
  if (Object.keys(inputRequests).length > 1) return {
    malformed: "mixed_input"
  };
  if (typeof requestState !== "string" || requestState === "" || requestState.length > v) return {
    malformed: "request_state"
  };
  let d = inputRequests[_];
  if (!it(d) || d.method !== Zbs) return {
    malformed: "method"
  };
  let u = it(d.params) ? d.params.files : void 0;
  if (!Array.isArray(u)) return {
    malformed: "files"
  };
  let a = new Map();
  for (let o of u) {
    if (!it(o)) return {
      malformed: "target"
    };
    let {
      fileId: fileId,
      headers: headers,
      credentials: credentials
    } = o;
    if (typeof fileId !== "string" || fileId === "") return {
      malformed: "file_id"
    };
    let g = h(o, "url");
    if (g === h(o, "path")) return {
      malformed: "url_or_path"
    };
    let c = g ? o.url : o.path;
    if (typeof c !== "string" || c === "" || c.length > N) return {
      malformed: g ? "url" : "path"
    };
    if (h(o, "method") && o.method !== "PUT") return {
      malformed: "target_method"
    };
    let expiresAtMs;
    if (h(o, "expiresAt")) {
      let n = typeof o.expiresAt === "string" ? H.exec(o.expiresAt) : null;
      if (n === null) return {
        malformed: "expires_at"
      };
      let l = Number(n[1]),
        m = Number(n[2]),
        A = Number(n[3]),
        w = Number(n[4]),
        S = Number(n[5]),
        T = Number(n[6]),
        k = Number((n[7] ?? "").slice(0, 3).padEnd(3, "0")),
        F = n[8] === void 0 ? 0 : (n[8] === "-" ? -1 : 1) * (Number(n[9]) * 60 + Number(n[10])),
        M = l % 4 === 0 && (l % 100 !== 0 || l % 400 === 0),
        date = new Date(0);
      date.setUTCFullYear(l, m - 1, A), date.setUTCHours(w, S, T, k);
      let D = date.getTime() - F * 60000,
        date_2 = new Date(D - 1000);
      if (m < 1 || m > 12 || A < 1 || A > P[m - 1] + (m === 2 && M ? 1 : 0) || w > 23 || S > 59 || T > 60 || Number(n[9] ?? 0) > 23 || Number(n[10] ?? 0) > 59 || T === 60 && (date_2.getUTCHours() !== 23 || date_2.getUTCMinutes() !== 59 || date_2.getUTCSeconds() !== 59)) return {
        malformed: "expires_at"
      };
      expiresAtMs = D;
    }
    if (credentials !== "omit" && credentials !== "include") return {
      malformed: "credentials"
    };
    if (headers !== void 0 && headers !== null && !it(headers)) return {
      malformed: "headers"
    };
    let C = Object.entries(headers ?? {});
    if (C.length > q) return {
      malformed: "headers"
    };
    let O = [];
    for (let [n, l] of C) {
      if (typeof l !== "string" || n.length > I || l.length > I) return {
        malformed: "headers"
      };
      O.push([n, l]);
    }
    if (!t.includes(fileId)) return {
      malformed: "unknown_file"
    };
    if (a.has(fileId)) return {
      malformed: "repeated_file"
    };
    a.set(fileId, {
      fileId: fileId,
      ...(g ? {
        url: c
      } : {
        path: c
      }),
      headers: Object.fromEntries(O),
      credentials: credentials,
      ...(expiresAtMs !== void 0 && {
        expiresAtMs: expiresAtMs
      })
    });
  }
  let targets = [];
  for (let o of t) {
    let i = a.get(o);
    if (i === void 0) return {
      malformed: "missing_file"
    };
    targets.push(i);
  }
  return {
    targets: targets,
    requestState: requestState
  };
}
var H = /^(\d{4})-(\d{2})-(\d{2})[Tt](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(?:[Zz]|([+-])(\d{2}):(\d{2}))$/,
  P = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function kBi(e) {
  return it(e) && e.resultType === "input_required" && it(e.inputRequests) && Object.hasOwn(e.inputRequests, _);
}
function vBi(e) {
  return {
    [_]: {
      files: e.map(({
        fileId: fileId_2,
        completed: completed
      }) => ({
        fileId: fileId_2,
        status: completed ? "completed" : "failed"
      }))
    }
  };
}
function EBi(e) {
  let t = rSs(U, e),
    r = t.extensions?.[$Je];
  return t === U || !it(r) ? t : {
    ...t,
    extensions: {
      ...t.extensions,
      [$Je]: {
        upload: {},
        ...r
      }
    }
  };
}
function wLn(e) {
  let t = e?.extensions?.[$Je];
  return it(t) && it(t.download);
}
function rSs(e, {
  serverAdvertisedDownloads: serverAdvertisedDownloads,
  downloadsOn: downloadsOn
}) {
  if (!serverAdvertisedDownloads || !downloadsOn) return e;
  return {
    ...e,
    extensions: {
      ...e.extensions,
      [$Je]: {
        ...(it(e.extensions?.[$Je]) ? e.extensions[$Je] : {}),
        download: {}
      }
    }
  };
}
function h(e, t) {
  return Object.hasOwn(e, t) && e[t] !== null;
}
export { $Je, Zbs, bBi, bLn, eSs, SLn, FilesNotSpokenError as bLe, SBi, tSs, wBi, nSs, kBi, vBi, EBi, wLn, rSs };