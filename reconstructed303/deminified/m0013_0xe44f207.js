// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
var s = globalThis.process?.getBuiltinModule?.("async_hooks"),
  hre = s ? e => s.AsyncResource.bind(e) : e => e;
function Fe(e) {
  if (!e) return !1;
  if (typeof e === "boolean") return e;
  let n = String(e).toLowerCase().trim();
  return ["1", "true", "yes", "on"].includes(n);
}
function ws(e) {
  if (e === void 0) return !1;
  if (typeof e === "boolean") return !e;
  let n = String(e).toLowerCase().trim();
  return ["0", "false", "no", "off"].includes(n);
}
function hk(e) {
  if (!e || e.startsWith("-") || e.startsWith("/")) return !1;
  if (e.includes("..")) return !1;
  if (e.split("/").some(item => item === "." || item === "")) return !1;
  return /^[a-zA-Z0-9/._+@-]+$/.test(e);
}
function Me() {
  let e = new Set();
  return {
    subscribe(n) {
      let r = hre(n);
      return e.add(r), () => {
        e.delete(r);
      };
    },
    emit(...n) {
      let r;
      for (let o of e) try {
        o(...n);
      } catch (error) {
        (r ??= []).push(error);
      }
      if (r) throw r.length === 1 ? r[0] : AggregateError(r, "Signal listener(s) threw");
    },
    clear() {
      e.clear();
    }
  };
}
var a = {
    english: "en",
    spanish: "es",
    español: "es",
    espanol: "es",
    french: "fr",
    français: "fr",
    francais: "fr",
    japanese: "ja",
    日本語: "ja",
    german: "de",
    deutsch: "de",
    portuguese: "pt",
    português: "pt",
    portugues: "pt",
    italian: "it",
    italiano: "it",
    korean: "ko",
    한국어: "ko",
    hindi: "hi",
    हिन्दी: "hi",
    हिंदी: "hi",
    indonesian: "id",
    "bahasa indonesia": "id",
    bahasa: "id",
    russian: "ru",
    русский: "ru",
    polish: "pl",
    polski: "pl",
    turkish: "tr",
    türkçe: "tr",
    turkce: "tr",
    dutch: "nl",
    nederlands: "nl",
    ukrainian: "uk",
    українська: "uk",
    greek: "el",
    ελληνικά: "el",
    czech: "cs",
    čeština: "cs",
    cestina: "cs",
    danish: "da",
    dansk: "da",
    swedish: "sv",
    svenska: "sv",
    norwegian: "no",
    norsk: "no"
  },
  t = new Set(["en", "es", "fr", "ja", "de", "pt", "it", "ko", "hi", "id", "ru", "pl", "tr", "nl", "uk", "el", "cs", "da", "sv", "no"]);
function r2e(fellBackFrom) {
  if (!fellBackFrom) return {
    code: "en"
  };
  let code = fellBackFrom.toLowerCase().trim();
  if (!code) return {
    code: "en"
  };
  if (t.has(code)) return {
    code: code
  };
  let code_2 = a[code];
  if (code_2) return {
    code: code_2
  };
  let code_3 = code.split("-")[0];
  if (code_3 && t.has(code_3)) return {
    code: code_3
  };
  return {
    code: "en",
    fellBackFrom: fellBackFrom
  };
}
export { hre, Fe, ws, hk, Me, r2e };