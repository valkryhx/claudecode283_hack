// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";
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
  return `file-${e+1}`
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
  return e.protocolEra === "modern" && it(t) && it(t.upload)
}
class bLe extends R {
  constructor(e) {
    super(`No file was sent and the tool was not called: Claude Code sends a file only on an MCP protocol 2026-07-28 connection to a server that advertises file uploads (the file-uploads extension with "upload"), and this connection to MCP server "${e}" is not one.`, "MCP file upload refused: connection without the file-uploads extension");
    this.name = "FilesNotSpokenError"
  }
}

function SBi(e) {
  return it(e) && e.resultType === "input_required"
}

function tSs(e, t = "McpToolCallError") {
  return `${t}; its message (${e.length} characters) is not logged because an error from a call that sends files can contain a file's details or an upload address.`
}

function L(e, t) {
  return {
    id: t,
    name: e.name,
    mimeType: e.mimeType === "" ? "application/octet-stream" : e.mimeType,
    size: e.size,
    digest: {
      algorithm: "sha-256",
      value: Buffer.from(e.sha256, "hex").toString("base64url")
    }
  }
}

function wBi(e, t) {
  let r = {
    ...e
  };
  return t.forEach((s, d) => {
    let u = L(s, eSs(d));
    if (s.index === void 0) {
      r[s.argument] = u;
      return
    }
    let a = r[s.argument];
    if (Array.isArray(a)) {
      let p = a === e[s.argument] ? [...a] : a;
      p[s.index] = u, r[s.argument] = p
    }
  }), r
}

function nSs(e, t) {
  if (!it(e) || e.resultType !== "input_required") return;
  let {
    inputRequests: r,
    requestState: s
  } = e;
  if (!it(r)) return {
    malformed: "input_requests"
  };
  if (!Object.hasOwn(r, _)) return {
    malformed: "other_input"
  };
  if (Object.keys(r).length > 1) return {
    malformed: "mixed_input"
  };
  if (typeof s !== "string" || s === "" || s.length > v) return {
    malformed: "request_state"
  };
  let d = r[_];
  if (!it(d) || d.method !== Zbs) return {
    malformed: "method"
  };
  let u = it(d.params) ? d.params.files : void 0;
  if (!Array.isArray(u)) return {
    malformed: "files"
  };
  let a = new Map;
  for (let o of u) {
    if (!it(o)) return {
      malformed: "target"
    };
    let {
      fileId: i,
      headers: f,
      credentials: x
    } = o;
    if (typeof i !== "string" || i === "") return {
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
    let b;
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
        E = new Date(0);
      E.setUTCFullYear(l, m - 1, A), E.setUTCHours(w, S, T, k);
      let D = E.getTime() - F * 60000,
        y = new Date(D - 1000);
      if (m < 1 || m > 12 || A < 1 || A > P[m - 1] + (m === 2 && M ? 1 : 0) || w > 23 || S > 59 || T > 60 || Number(n[9] ?? 0) > 23 || Number(n[10] ?? 0) > 59 || T === 60 && (y.getUTCHours() !== 23 || y.getUTCMinutes() !== 59 || y.getUTCSeconds() !== 59)) return {
        malformed: "expires_at"
      };
      b = D
    }
    if (x !== "omit" && x !== "include") return {
      malformed: "credentials"
    };
    if (f !== void 0 && f !== null && !it(f)) return {
      malformed: "headers"
    };
    let C = Object.entries(f ?? {});
    if (C.length > q) return {
      malformed: "headers"
    };
    let O = [];
    for (let [n, l] of C) {
      if (typeof l !== "string" || n.length > I || l.length > I) return {
        malformed: "headers"
      };
      O.push([n, l])
    }
    if (!t.includes(i)) return {
      malformed: "unknown_file"
    };
    if (a.has(i)) return {
      malformed: "repeated_file"
    };
    a.set(i, {
      fileId: i,
      ...g ? {
        url: c
      } : {
        path: c
      },
      headers: Object.fromEntries(O),
      credentials: x,
      ...b !== void 0 && {
        expiresAtMs: b
      }
    })
  }
  let p = [];
  for (let o of t) {
    let i = a.get(o);
    if (i === void 0) return {
      malformed: "missing_file"
    };
    p.push(i)
  }
  return {
    targets: p,
    requestState: s
  }
}
var H = /^(\d{4})-(\d{2})-(\d{2})[Tt](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(?:[Zz]|([+-])(\d{2}):(\d{2}))$/,
  P = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function kBi(e) {
  return it(e) && e.resultType === "input_required" && it(e.inputRequests) && Object.hasOwn(e.inputRequests, _)
}

function vBi(e) {
  return {
    [_]: {
      files: e.map(({
        fileId: t,
        completed: r
      }) => ({
        fileId: t,
        status: r ? "completed" : "failed"
      }))
    }
  }
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
  }
}

function wLn(e) {
  let t = e?.extensions?.[$Je];
  return it(t) && it(t.download)
}

function rSs(e, {
  serverAdvertisedDownloads: t,
  downloadsOn: r
}) {
  if (!t || !r) return e;
  return {
    ...e,
    extensions: {
      ...e.extensions,
      [$Je]: {
        ...it(e.extensions?.[$Je]) ? e.extensions[$Je] : {},
        download: {}
      }
    }
  }
}

function h(e, t) {
  return Object.hasOwn(e, t) && e[t] !== null
}
export {
  $Je,
  Zbs,
  bBi,
  bLn,
  eSs,
  SLn,
  bLe,
  SBi,
  tSs,
  wBi,
  nSs,
  kBi,
  vBi,
  EBi,
  wLn,
  rSs
};
