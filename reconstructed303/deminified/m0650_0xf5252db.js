// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ms, J5 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, Nr } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z, PSt } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { LTe, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l2 } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { lE, Nfn } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { Xt } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { FT, Du, la, ome } from "B:/~BUN/root/chunk-c44qc88s.js";
import { IT } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { hN, yN } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { constants as T } from "fs";
import { lstat, open as b, readlink, realpath } from "fs/promises";
var v = 1e6,
  O_RDONLY = T.O_RDONLY,
  D = {
    realpath: realpath,
    lstat: lstat,
    readlink: readlink
  },
  oZn = 1e7,
  P = new z(() => ({
    promise: void 0
  }));
function O() {
  let o = ms(P);
  return o.promise ??= Promise.all([import("B:/~BUN/root/chunk-63f869qc.js"), import("B:/~BUN/root/chunk-vc9w5cp9.js")]).then(([r, n]) => [...r.FIXED_USER_DATA_ROOTS, n.SYNCED_FILE_ROOT]).catch(r => {
    throw o.promise = void 0, r;
  }), o.promise;
}
function k(o, r) {
  if (!r || r.size === 0) return !1;
  for (let n of r.values()) if (n.includes(o)) return !0;
  return !1;
}
async function z_n(o, r) {
  let n = [];
  try {
    n = await O();
  } catch {}
  for (let s of FT(r)) {
    if (r.additionalWorkingDirectories.has(s) && !k(s, r.trustedNetworkDirectories) && (await LTe(s, J5()))) continue;
    let d;
    try {
      d = await realpath(s);
    } catch {
      continue;
    }
    if (PSt(s, d, J5())) continue;
    if (Du(o, d, {
      caseFold: !1,
      skipPrivateAlias: !0,
      uncShapeParity: !0
    })) return !0;
  }
  for (let s of n) if (Du(o, s, {
    caseFold: !1,
    skipPrivateAlias: !0,
    uncShapeParity: !0
  })) return !0;
  return ome(o, {}, [o], {
    remoteSurface: !0
  }).behavior === "allow";
}
var N = {
  nt_namespace: "read_file: NT-namespace path rejected before filesystem access",
  untrusted_unc: "read_file: untrusted UNC path rejected before filesystem access",
  untrusted_automount: "read_file: automount path rejected before filesystem access",
  unvettable_chain: "read_file: unvettable path ancestry rejected before filesystem access",
  suspicious_windows_spelling_nt_device_namespace: "read_file: suspicious Windows path spelling rejected (NT device namespace)",
  suspicious_windows_spelling_colon_past_drive_position: "read_file: suspicious Windows path spelling rejected (colon past the drive-letter position)",
  suspicious_windows_spelling_tilde_digit: "read_file: suspicious Windows path spelling rejected (tilde followed by a digit)",
  suspicious_windows_spelling_device_path_prefix: "read_file: suspicious Windows path spelling rejected (device-path prefix)",
  suspicious_windows_spelling_trailing_dot_or_whitespace: "read_file: suspicious Windows path spelling rejected (trailing dot or whitespace in a segment)",
  suspicious_windows_spelling_dos_device_suffix: "read_file: suspicious Windows path spelling rejected (DOS device-name suffix)",
  suspicious_windows_spelling_dot_run_segment: "read_file: suspicious Windows path spelling rejected (dot-run segment)",
  suspicious_windows_spelling_unc_or_webdav_form: "read_file: suspicious Windows path spelling rejected (UNC-like form: doubled or mixed separators, embedded NT root, or WebDAV marker)"
};
function h(o, r = "remote read denied") {
  return new Nr(`read denied: ${Xt(o)}`, r);
}
var u = {
    refused: !0,
    telemetryMessage: void 0,
    unsettled: !1,
    openFailure: void 0
  },
  w = {
    ...u,
    unsettled: !0
  };
async function A(o, r, n, s, d) {
  let l = hN(o, r, n.trustedNetworkDirectories);
  if (!l.ok) {
    let a = l.reason === "suspicious_windows_spelling" ? `suspicious_windows_spelling_${l.spelling}` : l.reason;
    return {
      ...u,
      telemetryMessage: N[a],
      unsettled: l.reason === "unvettable_chain"
    };
  }
  for (let a of l.pathsToCheck) if (!IT(a, n, "read").allowed || la(a, n, "read", "ask") !== null) return u;
  let handle;
  try {
    handle = await b(r, O_RDONLY);
  } catch (error) {
    return {
      ...u,
      openFailure: {
        error: error
      }
    };
  }
  try {
    let openedStat = await handle.stat({
      bigint: !0
    });
    if (!openedStat.isFile()) return u;
    let canonicalPath;
    try {
      canonicalPath = await s.realpath(r);
    } catch {
      return w;
    }
    let f = await Nfn(handle, openedStat, canonicalPath, s);
    if (f === void 0) return w;
    if (canonicalPath = f, !IT(canonicalPath, n, "read").allowed || la(canonicalPath, n, "read", "ask") !== null) return u;
    if (yN(canonicalPath, n.trustedNetworkDirectories) !== void 0) return u;
    if (!(await z_n(canonicalPath, n))) return u;
    return {
      refused: !1,
      value: await d({
        handle: handle,
        openedStat: openedStat,
        canonicalPath: canonicalPath
      })
    };
  } finally {
    await handle.close();
  }
}
async function eLe(o, r, n, {
  encoding = "utf-8",
  anchor: anchor,
  telemetrySource: telemetrySource,
  containmentFs = D
} = {}) {
  let requested_max_bytes = Math.min(r && r > 0 ? r : v, oZn);
  try {
    let e = anchor === void 0 ? void 0 : await (await import("B:/~BUN/root/chunk-8b2pj6yr.js")).resolveAnchoredReadPath(o, anchor);
    if (e === null) throw h(o);
    let f = typeof n === "function" ? n() : n,
      absPath = e?.absPath ?? it(o),
      m = await A(o, absPath, f, containmentFs, ({
        handle: handle_2,
        openedStat: openedStat_2
      }) => lE(handle_2, requested_max_bytes, openedStat_2.size));
    if (m.refused) throw m.openFailure === void 0 ? h(o, m.telemetryMessage) : m.openFailure.error;
    let {
      bytes: bytes,
      overLimit: g
    } = m.value;
    if (telemetrySource) i("tengu_bridge_read_file_served", {
      success: !0,
      source: c(telemetrySource),
      size_bytes: bytes.length,
      requested_max_bytes: requested_max_bytes,
      truncated: g,
      ext: l2(absPath)
    });
    return {
      contents: bytes.toString(encoding === "base64" ? "base64" : "utf-8"),
      absPath: absPath,
      ...(g && {
        truncated: g
      }),
      ...(encoding === "base64" && {
        encoding: encoding
      }),
      ...(e !== void 0 && {
        anchor: e.kind
      })
    };
  } catch (error) {
    try {
      let f = error instanceof Error ? "code" in error && typeof error.code === "string" ? `${error.name}/${error.code}` : error.name : typeof error;
      t(`readFileForRemote failed pre-deny: ${f}`, {
        level: "error"
      });
    } catch {}
    try {
      if (telemetrySource) i("tengu_bridge_read_file_served", {
        success: !1,
        source: c(telemetrySource)
      });
    } catch {}
    if (error instanceof x && error.message.startsWith("read denied: ")) throw error;
    throw h(o);
  }
}
export { O_RDONLY as rZn, oZn, z_n, eLe };