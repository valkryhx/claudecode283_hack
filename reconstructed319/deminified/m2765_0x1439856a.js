// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt, M5, Hjt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Ol } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { jR, _M, g2n } from "B:/~BUN/root/chunk-1g25msn4.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { sH, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { oN } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { U2 } from "B:/~BUN/root/chunk-7pj7keyk.js";
import { C5o, R5o, A5o, Kwn } from "B:/~BUN/root/chunk-j3dtncp6.js";
import { fve } from "B:/~BUN/root/chunk-2r6mec8n.js";
import { sW } from "B:/~BUN/root/chunk-5zpqxean.js";
import { Cgs, l_e } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { randomBytes as I } from "crypto";
import { constants as h } from "fs";
import { mkdir as N, open as T, statfs as O, unlink as x } from "fs/promises";
import { join as y, parse as v } from "path";
import { pipeline as L } from "stream/promises";
var I_n = "task-files",
  C = 60000,
  B = 67108864,
  X7n = 20,
  A = 200,
  P = /\.[A-Za-z0-9]{1,16}$/,
  z = 1024,
  D = ["scf url lnk pif website shs shb xnk library-ms searchconnector-ms search-ms osdx settingcontent-ms appcontent-ms", "appref-ms application appinstaller vsto xbap jnlp", "theme themepack deskthemepack msstyles wmz wms wmd", "hta chm its scr cpl msc wsf wsh ws wsc sct vbe jse psc1 wsb gadget", "diagcab diagpkg diagcfg printerexport webpnp ins isp prf ops reg", "rdp ica wcx msrcincident mcl remmina vnc", "iqy dqy oqy rqy slk odc udl pbids xlw xlb xll xlam xla ppam ppa wll accda accde mda mde ade adp", "mad maf mag mam maq mar mas mau mav maw", "webloc inetloc fileloc afploc ftploc mailloc newsloc vncloc atloc savedsearch terminal mobileconfig desktop kdelnk"].join(" ").split(" "),
  regExp = new RegExp(`(?:\\.(?:${D.join("|")})|^desktop\\.ini|^autorun\\.inf)$`, "i"),
  H = "\xA5\u20A9\u2216\u2044\u2215\u02BA\u030E\u02B9\u02BC\u02C8\u2032\u02CB\u0300\u2035\u0589\u2236\u066A\u2217\u3008\u3009\u01C0\u2223\u2758\u01C3\u02C4\u0302\u2303\u0303\u223C",
  E = "\\-\u2010\u2013\u2014\u2015\u2212\u2500\u252C\u2534\u2550\u2564-\u2569",
  regExp_2 = new RegExp(`${C5o.source}|${R5o.source}|\\p{Default_Ignorable_Code_Point}|[%\\p{Cs}\\u2018-\\u201f\\u1680\\u2800${H}]`, "u"),
  R = /^[\u200c\u200d\ufe0e\ufe0f]$/,
  regExp_3 = new RegExp(`^(?![${E}])(?:[^\\P{L}\\p{ASCII}]|[^\\P{M}\\p{ASCII}]|[^\\P{N}\\p{ASCII}]|[^\\P{S}\\p{ASCII}])`, "u"),
  regExp_4 = new RegExp(`^[.${E}+@ ]+`, "u"),
  regExp_5 = new RegExp(`(\\s)[${E}+@](?=\\S)`, "gu"),
  Y = {
    no_disk: !0,
    bad_id: !0,
    bad_size: !0,
    too_large: !0,
    egress_blocked: !0,
    essential_traffic: !0,
    policy_pending: !0,
    not_https: !0,
    no_token: !0,
    sign_in_expired: !0,
    no_room: !0,
    refused: !0,
    size_mismatch: !0,
    stalled: !0,
    canceled: !0,
    name_taken: !0,
    write_failed: !0,
    network: !0
  },
  J7n = Object.keys(Y);
function git(e, s) {
  let o = e.length > z ? "" : e.normalize("NFKC").split(/[/\\]/).at(-1) ?? "",
    r = M5(V(o).replace(regExp_4, ""), ". "),
    n = r === "" || Buffer.byteLength(r, "utf8") > A || Buffer.byteLength(F(r), "utf8") > A || Hjt.test(tt(r, ".").trim().toLowerCase()) || G(r) ? `${s}${P.exec(r)?.[0] ?? ""}` : r;
  return F(n);
}
function M_n(e, s) {
  if (!fve.test(e.fileId)) return {
    ok: !1,
    code: "bad_id"
  };
  if (!Number.isSafeInteger(e.sizeBytes) || e.sizeBytes < 0) return {
    ok: !1,
    code: "bad_size"
  };
  if (e.sizeBytes > l_e) return {
    ok: !1,
    code: "too_large"
  };
  let o = oN(),
    code = sW({
      oauthToken: sH(),
      isStoredLogin: !0
    });
  if (code !== void 0) return {
    ok: !1,
    code: code
  };
  if (o) return {
    ok: !1,
    code: "policy_pending"
  };
  if (!nn().BASE_API_URL.startsWith("https://")) return {
    ok: !1,
    code: "not_https"
  };
  if (s.aborted) return {
    ok: !1,
    code: "canceled"
  };
  return;
}
async function V2o(e, storageV5, o) {
  let abortController = new AbortController(),
    n = {
      bytes: 0
    },
    u = setTimeout(i => i.abort(), C, abortController),
    l,
    close = () => {
      clearTimeout(u), l?.destroy();
    },
    m = !1;
  try {
    let i;
    try {
      i = await jt.get(`/v1/files/${encodeURIComponent(e.fileId)}/content`, {
        auth: "claude-ai-oauth",
        refreshOAuth: !0,
        recoverOAuth401: !0,
        storageV5: storageV5,
        host: "api",
        headers: {
          "anthropic-version": Cgs,
          "Accept-Encoding": "identity"
        },
        responseType: "stream",
        timeout: 0,
        signal: AbortSignal.any([o, abortController.signal]),
        maxRedirects: 0,
        validateStatus: () => !0
      });
    } catch (error) {
      return t(`[task files] ${e.fileId} request failed: ${d(error)}`, {
        level: "error"
      }), {
        ok: !1,
        code: o.aborted ? "canceled" : abortController.signal.aborted ? "stalled" : "network"
      };
    }
    if (!i.ok) return {
      ok: !1,
      code: i.reason === "essential-traffic-only" ? "essential_traffic" : i.reason === "no-auth" ? "no_token" : "egress_blocked"
    };
    if (l = i.data, l.on("error", () => {}), i.status === 401) return {
      ok: !1,
      code: "sign_in_expired"
    };
    if (i.status !== 200) return {
      ok: !1,
      code: "refused",
      status: i.status
    };
    let _ = i.response.headers["content-length"];
    if (_ !== void 0 && Number(_) !== e.sizeBytes) return {
      ok: !1,
      code: "size_mismatch"
    };
    return m = !0, {
      ok: !0,
      bytes: J(l, e.sizeBytes, u, n),
      bytesRead: () => n.bytes,
      codeOfFailure(p) {
        if (o.aborted) return "canceled";
        if (abortController.signal.aborted) return "stalled";
        if (n.fault !== void 0) return t(`[task files] ${e.fileId} not saved: ${d(p)}`, {
          level: "error"
        }), n.fault;
        return a(p), "write_failed";
      },
      close: close
    };
  } finally {
    if (!m) close();
  }
}
async function coi(e, s, o, signal) {
  let n, u, l;
  try {
    if (q()) return {
      ok: !1,
      code: "no_disk"
    };
    if (await U2({
      isFilesDial: !0,
      signal: signal
    }), signal.aborted) return {
      ok: !1,
      code: "canceled"
    };
    let f = M_n(e, signal);
    if (f !== void 0) return f;
    let m = y(s, I_n),
      i = git(e.name, e.fileId);
    if (await _M(s, o), !(await K2o(s, e.sizeBytes))) return {
      ok: !1,
      code: "no_room"
    };
    let _ = await V2o(e, o, signal);
    if (!_.ok) return _;
    n = _;
    let {
      bytes: bytes
    } = n;
    if (X() && o !== void 0) for (let c = 1; c <= X7n; c++) {
      let filepath = y(m, s4r(i, c)),
        w = jR(filepath);
      if (w === void 0) break;
      let g = await o.writeFromStream(w, bytes, {
        maxBytes: e.sizeBytes,
        precondition: {
          type: "ifAbsent"
        },
        mode: 384
      });
      if (g.ok) return {
        ok: !0,
        filepath: filepath,
        bytes: g.value.bytes
      };
      if (g.error.code === "AlreadyExists" && n.bytesRead() > 0) return {
        ok: !1,
        code: "name_taken"
      };
      if (g.error.code !== "AlreadyExists") throw t(`[task files] storage write failed (${g.error.code})`, {
        level: "error"
      }), Error("a task file was not stored");
      if (c === X7n) return {
        ok: !1,
        code: "name_taken"
      };
    }
    await g2n(m, Dn());
    try {
      await N(m, {
        mode: 448
      });
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    u = y(m, `.${I(8).toString("hex")}.partial`), l = await T(u, h.O_WRONLY | h.O_CREAT | h.O_EXCL | ro, 384), await L(bytes, l.createWriteStream());
    let S = await T(u, Go | ro);
    try {
      for (let c = 1; c <= X7n; c++) {
        let filepath_2 = y(m, s4r(i, c));
        if ((await Kwn(u, S, filepath_2, 384)) !== void 0) return {
          ok: !0,
          filepath: filepath_2,
          bytes: n.bytesRead()
        };
      }
    } finally {
      await S.close();
    }
    return {
      ok: !1,
      code: "name_taken"
    };
  } catch (error) {
    if (n !== void 0) return {
      ok: !1,
      code: n.codeOfFailure(error)
    };
    if (signal.aborted) return {
      ok: !1,
      code: "canceled"
    };
    return a(error), {
      ok: !1,
      code: "write_failed"
    };
  } finally {
    if (n?.close(), await l?.close().catch(() => {}), u !== void 0) await x(u).catch(() => {});
  }
}
async function K2o(e, s) {
  let o = await O(e, {
    bigint: !0
  }).catch(() => {
    return;
  });
  return o === void 0 || o.blocks <= 0n || o.bsize <= 0n || o.bavail * o.bsize >= BigInt(s + B);
}
function s4r(e, s) {
  if (s === 1) return e;
  let {
    name: name,
    ext: ext
  } = v(e);
  return `${name} (${s})${ext}`;
}
function F(e) {
  return regExp.test(Ol(e)) ? `${e}.download` : e;
}
function G(e) {
  let s = A5o(e, !0);
  return Ol(e) === "architecture.md" || s !== void 0 && s !== "odd_spelling";
}
function V(e) {
  let s = "",
    o = "";
  for (let r of e) o = (R.test(r) ? R.test(o) ? r === "\u200D" && /[\ufe0e\ufe0f]/u.test(o) : regExp_3.test(o) : !regExp_2.test(r)) ? r : "_", s += o;
  return s.replace(regExp_5, "$1_").replace(/ {2,}/g, " ");
}
async function* J(e, s, o, r) {
  try {
    for await (let n of e) {
      if (o.refresh(), r.bytes += n.length, r.bytes > s) break;
      yield n;
    }
  } catch (error) {
    throw r.fault = "network", error;
  }
  if (clearTimeout(o), r.bytes !== s) throw r.fault = "size_mismatch", Error("a task file did not have the size the server listed");
}
export { I_n, X7n, J7n, git, M_n, V2o, coi, K2o, s4r };