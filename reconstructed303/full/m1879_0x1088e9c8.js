// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Ct
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  Fr
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  ln
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  At,
  _$
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Z6n
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  ck,
  iE
} from "B:/~BUN/root/chunk-07c8fw5z.js";
import {
  Sl,
  Fn,
  Xa,
  ba,
  qN,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  zE
} from "B:/~BUN/root/chunk-429xgjya.js";
import {
  aE
} from "B:/~BUN/root/chunk-3q5m6gqn.js";
import {
  kh
} from "B:/~BUN/root/chunk-qjf8jcwq.js";
import m from "ws";
var R = '{"type":"KeepAlive"}',
  U = '{"type":"CloseStream"}',
  L = "/api/ws/speech_to_text/voice_stream",
  F = 8000,
  x = {
    safety: 5000,
    noData: 1500
  };

function C(e, o, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= o && e <= d ? String(e) : "unknown"
}

function z(e) {
  return Fr(e)?.toLowerCase() ?? "unknown"
}
var D = 1500;
async function TJr() {
  if (At() || _$()) return "skipped_privacy";
  try {
    let e = await Ct.get(`${ln().BASE_API_URL}/api/hello`, {
        headers: {
          "User-Agent": qN()
        },
        timeout: D,
        validateStatus: () => !0,
        maxRedirects: 0
      }),
      o = C(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${o}` : `http_${o}`
  } catch (e) {
    let o = Ct.isAxiosError(e) ? e.code : void 0;
    return o === "ECONNABORTED" || o === "ETIMEDOUT" ? "timeout" : "fetch_failed"
  }
}

function N() {
  if (a.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return !0;
  return E("tengu_brick_follow", !1)
}

function CJr() {
  if (!Sl()) return !1;
  let e = Fn();
  return e !== null && e.accessToken !== null
}
var B = 1024;

function H(e) {
  let o = new Set,
    d = [],
    u = 0;
  for (let w of e) {
    let p = w.replace(/,/g, " ").replace(/[^\x20-\x7E]/g, "").replace(/\s+/g, " ").trim();
    if (!p || o.has(p)) continue;
    let T = p.length + (d.length > 0 ? 1 : 0);
    if (u + T > B) break;
    o.add(p), d.push(p), u += T
  }
  return d.join(",")
}

function j() {
  return
}
async function RJr(e, o, d) {
  let u;
  if (W() && d !== void 0) await ba({
    credentials: d
  }), u = await Xa(d);
  else await ba(), u = Fn();
  if (!u?.accessToken) return t("[voice_stream] No OAuth token available"), null;
  let w = j() ?? ln().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://"),
    p = N(),
    T = new URLSearchParams({
      encoding: "linear16",
      sample_rate: "16000",
      channels: "1",
      endpointing_ms: "300",
      utterance_end_ms: "1000",
      language: o?.language ?? "en",
      use_conversation_engine: "true",
      ...p && {
        forward_interims: "typed"
      }
    }),
    y = `${w}${L}?${T.toString()}`;
  t(`[voice_stream] Connecting to ${y}`);
  let O = {
    Authorization: `Bearer ${u.accessToken}`,
    "User-Agent": qN(),
    "x-app": "cli",
    "anthropic-client-platform": kh()
  };
  if (o?.keyterms?.length) {
    let r = H(o.keyterms);
    if (r) O["x-config-keyterms"] = r
  }
  let V = ck(),
    P = {
      headers: O,
      proxy: iE(y),
      tls: V || void 0
    };
  Z6n(y, m);
  let s = new m(y, P),
    f = null,
    v = !1,
    I = !1,
    S = !1,
    g = !1,
    k = !1,
    _ = null,
    h = null,
    b = {
      send(r) {
        if (s.readyState !== m.OPEN) return;
        if (S) {
          t(`[voice_stream] Dropping audio chunk after CloseStream: ${String(r.length)} bytes`);
          return
        }
        t(`[voice_stream] Sending audio chunk: ${String(r.length)} bytes`), s.send(Buffer.from(r))
      },
      finalize() {
        if (g || S) return Promise.resolve("ws_already_closed");
        return g = !0, new Promise((r) => {
          let c = setTimeout(() => _?.("safety_timeout"), x.safety),
            n = setTimeout(() => _?.("no_data_timeout"), x.noData);
          if (h = () => {
              clearTimeout(n), h = null
            }, _ = (i) => {
              if (clearTimeout(c), clearTimeout(n), _ = null, h = null, l) {
                t(`[voice_stream] Promoting unreported interim before ${i} resolve`);
                let M = l;
                l = "", e.onTranscript(M, !0)
              }
              t(`[voice_stream] Finalize resolved via ${i}`), r(i)
            }, s.readyState === m.CLOSED || s.readyState === m.CLOSING) {
            _("ws_already_closed");
            return
          }
          setTimeout(() => {
            if (S = !0, s.readyState === m.OPEN) t("[voice_stream] Sending CloseStream (finalize)"), s.send(U)
          }, 0)
        })
      },
      close() {
        if (S = !0, f) clearInterval(f), f = null;
        if (v = !1, s.readyState === m.OPEN) s.close()
      },
      isConnected() {
        return v && s.readyState === m.OPEN
      }
    };
  s.on("open", () => {
    t("[voice_stream] WebSocket connected"), v = !0, I = !0, t("[voice_stream] Sending initial KeepAlive"), s.send(R), f = setInterval((r) => {
      if (r.readyState === m.OPEN) t("[voice_stream] Sending periodic KeepAlive"), r.send(R)
    }, F, s), e.onReady(b)
  });
  let l = "";

  function A(r) {
    if (!l) return;
    t(`[voice_stream] Promoting unreported interim to final (${r})`);
    let c = l;
    l = "", e.onTranscript(c, !0)
  }
  return s.on("message", (r) => {
    let c = r.toString();
    t(`[voice_stream] Message received (${String(c.length)} chars)`);
    let n;
    try {
      n = J(c)
    } catch {
      return
    }
    switch (n.type) {
      case "TranscriptInterim":
      case "TranscriptText": {
        let i = n.data;
        if (t(`[voice_stream] ${n.type} (${String(i?.length??0)} chars)`), S) h?.();
        if (i) l = i, e.onTranscript(i, !1);
        break
      }
      case "TranscriptEndpoint": {
        t(`[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`);
        let i = l;
        if (l = "", i) e.onTranscript(i, !0);
        if (S) _?.("post_closestream_endpoint");
        break
      }
      case "TranscriptError": {
        let i = n.description ?? n.error_code ?? "unknown transcription error";
        if (t(`[voice_stream] TranscriptError: ${i}`), A("TranscriptError"), !g) e.onError(i);
        break
      }
      case "error": {
        let i = n.message ?? `unstructured error frame (keys: ${Object.keys(n).join(", ")})`;
        if (t(`[voice_stream] Server error: ${i}`), A("server error"), !g) e.onError(i);
        break
      }
      default:
        break
    }
  }), s.on("close", (r, c) => {
    let n = c?.toString() ?? "";
    if (t(`[voice_stream] WebSocket closed: code=${String(r)} reason="${n}"`), v = !1, f) clearInterval(f), f = null;
    if (A("ws close"), _?.("ws_close"), !g && !k && r !== 1000 && r !== 1005) e.onError(`Connection closed: code ${String(r)}${n?` \u2014 ${n}`:""}`, I ? void 0 : {
      connectFailureCode: `ws_closed_${C(r,1000,4999)}`
    });
    e.onClose()
  }), s.on("unexpected-response", (r, c) => {
    let n = c.statusCode ?? 0;
    if (n === 101) {
      t("[voice_stream] unexpected-response fired with 101; ignoring");
      return
    }
    if (t(`[voice_stream] Upgrade rejected: status=${String(n)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`), k = !0, c.resume(), r.destroy?.(), g) return;
    e.onError(`WebSocket upgrade rejected with HTTP ${String(n)}`, {
      fatal: n >= 400 && n < 500,
      connectFailureCode: c.headers["cf-mitigated"] !== void 0 ? `cf_mitigated_${C(n,100,599)}` : `upgrade_rejected_${C(n,100,599)}`
    })
  }), s.on("error", (r) => {
    if (t(`[voice_stream] WebSocket error: ${r.message}`, {
        level: "error"
      }), A("ws error"), !g) e.onError(`Voice stream connection error: ${r.message}`, I ? void 0 : {
      connectFailureCode: `ws_error_${z(r)}`
    })
  }), b
}
export {
  TJr,
  CJr,
  RJr
};
