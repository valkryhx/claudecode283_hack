// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { dt, Yt, Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { FE, MT, T0, R0 } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { cr } from "B:/~BUN/root/chunk-wxhfn3za.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { s7, wM } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { To, ctn } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { uO } from "B:/~BUN/root/chunk-x6frvp1m.js";
import { U8n } from "B:/~BUN/root/chunk-3px3zvas.js";
import { ze } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { vo } from "B:/~BUN/root/chunk-h7w5pt14.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var A2t = new Set([Me, kt, ze, Yt, dt]);
var nOe = {
  approvalAttested: !1,
  modeDecidedByHost: !1
};
function H8n(n, e) {
  if (!e) return n;
  return {
    ...n,
    sandbox: n.sandbox === "required" || e.sandbox === "required" ? "required" : "tool_default",
    background: n.background === "forbidden" || e.background === "forbidden" ? "forbidden" : "tool_default",
    pinCwd: n.pinCwd || e.pinCwd === !0,
    scrubCredentialEnv: n.scrubCredentialEnv || e.scrubCredentialEnv === !0,
    maxTimeoutMs: I(n.maxTimeoutMs, e.maxTimeoutMs)
  };
}
function I(n, e) {
  if (e === void 0 || e <= 0) return n;
  return n === void 0 ? e : Math.min(n, e);
}
var N = "nested remote execution is not supported: a served call cannot name another machine.",
  xGr = "_simulatedSedEdit",
  F = new Map();
function rgn() {
  return F;
}
function PGr(n, e) {
  if (e.size === 0) return n;
  let r = new Set(e.values());
  return Object.fromEntries(Object.entries(n).filter(([t]) => !r.has(t)).map(([t, i]) => [e.get(t) ?? t, i]));
}
function VXs(n, e) {
  if (e.size === 0) return n;
  let r = new Map([...e].map(([t, i]) => [i, t]));
  return uO(n, (t, i) => r.get(i) ?? i);
}
function KXs(n, e) {
  if (n === void 0) return;
  let r = n[cr] === e ? vo(n, [cr]) : n;
  return Object.keys(r).length === 0 ? void 0 : r;
}
function ogn(n, e, targetName) {
  if (cr in n) return N;
  let field = e.find(item => Boolean(n[item]));
  return field === void 0 ? void 0 : U8n({
    field: field,
    targetName: targetName
  });
}
function x2t(n, e) {
  return vo(n, [xGr, ...e]);
}
function qXs(n, e) {
  return Object.fromEntries(Object.keys(e).filter(item => Object.hasOwn(n, item)).map(item => [item, e[item]]));
}
import { posix as m, win32 as u } from "path";
import { isDeepStrictEqual as A } from "util";
import M, { posix as E, win32 as j } from "path";
function UXs(n) {
  if (n.tool.name !== Yt && n.tool.name !== dt) return;
  let file_path = n.input.file_path;
  if (typeof file_path !== "string" || wM(file_path)) return;
  let r = W(file_path, n.description, n.sessionDir());
  if (r === void 0) return;
  let t = n.readFileState.get(r);
  return t !== void 0 && !t.isPartialView && (t.offset ?? 1) <= 1 ? t.readBaseline : void 0;
}
function W(n, e, r, t = M) {
  if (e === void 0 || e.project_sync !== "two_way" && e.project_sync !== "upload_only") return;
  let i = e.platform === "win32" ? j : E,
    a = e.home_dir !== void 0 && (n === "~" || n.startsWith("~/")) ? i.join(e.home_dir, n.slice(2)) : n,
    c = w(e, i);
  if (!i.isAbsolute(a) || !i.isAbsolute(c)) return;
  let d = i.relative(c, a);
  if (!y(i, d)) return;
  let s = E.join(r, ...d.split(i.sep));
  return y(t, t.relative(r, s)) ? s : void 0;
}
function w(n, e) {
  return n.sync_root !== void 0 && e.isAbsolute(n.sync_root) && z(e, n.sync_root, n.working_dir) ? n.sync_root : n.working_dir;
}
function y(n, e) {
  return e !== "" && e.split(n.sep)[0] !== ".." && !n.isAbsolute(e);
}
function z(n, e, r) {
  let t = n.relative(e, r);
  return t === "" || y(n, t);
}
function RUo(n, e, r) {
  return D(n).every(([t, i]) => A(h(t, i, r), h(t, e[t], r))) && D(e).every(([t, i]) => n[t] !== void 0 || i === !1);
}
function BXs(n, e, r) {
  return A(O(n, r), O(e, r));
}
function O(n, e) {
  return Object.fromEntries(D(n).map(([r, t]) => [r, h(r, t, e)]));
}
function h(n, e, r) {
  return n === "file_path" && typeof e === "string" && r === "darwin" ? e.normalize("NFC") : e;
}
function D(n) {
  return Object.entries(n).filter(([, e]) => e !== void 0);
}
function f(n) {
  return n === "win32" ? u : m;
}
function AUo(n) {
  let e = f(n.platform),
    copy_of = n.copy_of;
  return e.isAbsolute(n.working_dir) ? {
    workingDir: n.working_dir,
    homeDir: n.home_dir !== void 0 && e.isAbsolute(n.home_dir) ? n.home_dir : void 0,
    mirroredDir: w(n, e),
    platform: n.platform,
    ...(copy_of !== void 0 && f(copy_of.platform).isAbsolute(copy_of.dir) && {
      copyOf: {
        workingDir: copy_of.dir,
        homeDir: copy_of.home_dir !== void 0 && f(copy_of.platform).isAbsolute(copy_of.home_dir) ? copy_of.home_dir : void 0,
        mirroredDir: copy_of.dir,
        platform: copy_of.platform
      }
    })
  } : void 0;
}
function AGr(n) {
  let e = n === void 0 ? void 0 : AUo(n);
  if (e === void 0) return {
    kind: "no_announced_dir"
  };
  if (e.platform === "win32") return {
    kind: "windows_machine"
  };
  return x() === "windows" ? {
    kind: "windows_session"
  } : {
    kind: "in_announced_dir",
    dir: e.workingDir
  };
}
function $8n(n, e) {
  let file_path_2 = n.file_path;
  if (typeof file_path_2 !== "string") return n;
  let file_path_3 = v(file_path_2, e);
  return file_path_3 === void 0 ? n : {
    ...n,
    file_path: file_path_3
  };
}
function v(n, e) {
  let r = f(e.platform),
    t = n.trim();
  if (t === "~" || t.startsWith("~/")) return e.homeDir === void 0 ? void 0 : r.join(e.homeDir, t.slice(2));
  if (t === "") return r.normalize(e.workingDir);
  let i = p(t, r);
  if (r.isAbsolute(i)) return r.normalize(i);
  let a = r === u ? g(i) : void 0;
  return a !== void 0 && a !== g(e.workingDir) ? void 0 : r.resolve(e.workingDir, i);
}
function g(n) {
  let e = /^[a-z]:/i.exec(n);
  return e === null ? void 0 : To(e[0]);
}
function U(n, e) {
  let r = n.replace(/^\\\\[?.]\\UNC\\/i, "\\\\").replace(/^\\\\[?.]\\(?=[a-z]:)/i, "");
  return /^\\(?!\\)/.test(r) ? u.resolve(e, r) : r;
}
function b(n, e) {
  let r = T0(n).split("/");
  if (MT(r[1] ?? "") === "volumes" && MT(r[2] ?? "") === e) return b(["", ...r.slice(3)].join("/") || "/", e);
  return ["tmp", "var", "etc"].includes(MT(r[1] ?? "")) ? ["", "private", ...r.slice(1)].join("/") : r.join("/");
}
function B(n) {
  let e = b(n, "macintosh hd"),
    [r, t = ""] = e.split("/").slice(1, 3).map(MT);
  return r === "volumes" && t !== "" ? [e, b(e, t)] : [e];
}
function C(n) {
  let e = /^\/proc\/(?:self|thread-self)\/root(?=\/|$)/.exec(n);
  return e === null ? n : C(n.slice(e[0].length) || "/");
}
function p(n, e) {
  return e === u && /^\/[a-z]\//i.test(n) ? s7(n) : n;
}
var q = 4096;
function P(n, e) {
  return e === m && n.length >= q;
}
function _(n, e, r) {
  let t = r.normalize(n);
  if (P(t, r)) return [t];
  return r === u ? [U(t, e.workingDir)] : e.platform === "darwin" ? L([t, S("darwin")(t)].flatMap(B)) : [C(t)];
}
function k(n, e, r) {
  let t = n.split(r.sep),
    i = S(e.platform),
    a = r === u ? /\\+$/ : /\/+$/,
    c = d => _(d, e, r)[0].replace(a, "").split(r.sep);
  return [[e.mirroredDir, "./"], [e.homeDir, "~/"]].flatMap(([d, s]) => d === void 0 ? [] : [[c(d), s]]).filter(([d]) => t.length > d.length && d.every((item, index) => i(item) === i(t[index]))).map(([d, s]) => [s, t.slice(d.length).join("/")]).filter(([, d]) => d !== "").map(([d, s]) => `${d}${s}`);
}
function jXs(n, e) {
  let r = f(e.platform),
    t = p(n, r);
  return r.isAbsolute(t) ? k(_(t, e, r)[0], e, r)[0] : void 0;
}
var K = [["/bin", "/usr/bin"], ["/sbin", "/usr/sbin"], ["/lib", "/usr/lib"], ["/lib32", "/usr/lib32"], ["/lib64", "/usr/lib64"], ["/libx32", "/usr/libx32"], ["/var/run", "/run"], ["/var/lock", "/run/lock"]];
function R(n, e, r) {
  return n === e || n.startsWith(`${e}/`) ? [`${r}${n.slice(e.length)}`] : [];
}
function T(n) {
  return K.flatMap(([e, r]) => [...R(n, e, r), ...R(n, r, e)]);
}
function X(n, e) {
  return e === "darwin" ? [n.replace(/^\/private(?=\/(?:tmp|var|etc)(?:\/|$))/i, "")].filter(item => item !== n) : e === "linux" ? L(T(n).flatMap(item => [item, ...T(item)])) : [];
}
function xUo(n, e) {
  let r = f(e.platform),
    t = v(n, e);
  if (t === void 0 || !r.isAbsolute(t)) return [];
  let i = _(t, e, r).flatMap(item => [item, ...X(item, e.platform)]),
    a = S(e.platform),
    c = r.normalize(p(n.trim(), r)),
    d = i.flatMap(item => k(item, e, r)),
    copyOf = e.copyOf;
  return L([...[...d, ...(r === u ? [] : i)].flatMap(item => [item, a(item)].flatMap(item => e.platform === "darwin" ? [item, item.normalize("NFC"), item.normalize("NFD")] : [item])).filter(item => item !== c), ...(copyOf === void 0 ? [] : i.flatMap(item => k(item, {
    ...e,
    mirroredDir: e.workingDir,
    homeDir: void 0
  }, r)).map(item => f(copyOf.platform).join(copyOf.workingDir, item.slice(2))).flatMap(item => [item, ...xUo(item, copyOf)]))]);
}
function WXs(n, e) {
  let r = f(e.platform),
    t = p(n.trim(), r);
  if (!r.isAbsolute(t)) return;
  let i = r === u ? t.replace(/^[\\/]{2}[?.][\\/]UNC[\\/]/i, "\\\\").replace(/^[\\/]{2}[?.][\\/](?=[a-z]:)/i, "") : t,
    a = i.split(r === u ? /[\\/]/ : "/"),
    c = r === u && /^[\\/]{2}[?.][\\/]/.test(i) ? 3 : 0,
    d = a.slice(c).findIndex(item => /[*?[{]/.test(item)),
    s = d === -1 ? -1 : d + c,
    l = (s === -1 ? a : a.slice(0, s)).join(r.sep) || r.sep;
  return {
    root: r === u && /^[a-z]:$/i.test(l) ? `${l}${r.sep}` : l,
    rest: s === -1 ? "" : a.slice(s).join("/")
  };
}
function S(n) {
  return n === "win32" ? e => e.toUpperCase().toLowerCase() : n === "darwin" ? e => MT(e.normalize("NFC")) : e => e;
}
var G = /^\/dev\/(?:fd|stdin|stdout|stderr)(?=\/|$)/,
  V = /^\/proc\/(?:self|thread-self|\d+)\/(?:task\/\d+\/)?(?:cwd|root|fd|exe|map_files)(?=\/|$)/;
function zXs(n, e) {
  let r = v(n, e);
  if (e.platform !== "win32") {
    if (r === void 0) return "home_unknown";
    if (P(r, m)) return "too_long";
    return _(r, e, m).some(item => G.test(item) || e.platform !== "darwin" && V.test(item)) ? "magic_link" : void 0;
  }
  let t = p(n.trim(), u),
    i = g(t);
  if (!u.isAbsolute(t) && i !== void 0 && i !== g(e.workingDir)) return "other_drive_relative";
  if (r === void 0) return "home_unknown";
  let a = u.normalize(t);
  if (/^\\\\[?.]\\(?![a-z]:\\|UNC\\)/i.test(a) || R0(a)) return "nt_device_namespace";
  let c = a.replace(/^\\\\[?.]\\UNC\\/i, "\\\\").replace(/^\\\\[?.]\\(?=[a-z]:)/i, ""),
    d = /^\\\\[^\\]+\\[^\\]+\$(?=\\|$)/.exec(c)?.[0];
  if (d !== void 0 && ![e.workingDir, e.homeDir].some(item => item !== void 0 && To(u.normalize(item)).startsWith(`${To(d)}\\`))) return "administrative_share";
  let s = c.replace(/^\\\\/, "");
  if (s.includes(":", /^[a-z]:/i.test(s) ? 2 : 0)) return "colon_past_drive_position";
  if (s.split("\\").some(item => FE(item) && !/^[^. ]+\./.test(item))) return "dos_device_name";
  let o = ctn(s.replace(/~(?=\d)/g, "-"));
  return o === void 0 || o === "device_path_prefix" || o === "unc_or_webdav_form" || o === "tilde_digit" || o === "dos_device_suffix" ? void 0 : o;
}
var GXs = {
  nt_device_namespace: "an NT device-namespace path",
  colon_past_drive_position: "a name with an alternate-data-stream colon",
  trailing_dot_or_whitespace: "a name ending in a dot or whitespace",
  dot_run_segment: "a path with a segment of three or more dots",
  other_drive_relative: "a path relative to another drive's current directory",
  administrative_share: "a path through a hidden or administrative share",
  dos_device_name: "a path that names a DOS device",
  magic_link: "a path through an open file descriptor or a process's /proc link",
  too_long: "a path too long for a Mac or Linux machine to open",
  home_unknown: "a path from the machine's home folder, which this session does not know"
};
export { nOe, H8n, UXs, RUo, BXs, AUo, AGr, $8n, jXs, xUo, WXs, zXs, GXs, A2t, xGr, rgn, PGr, VXs, KXs, ogn, x2t, qXs };