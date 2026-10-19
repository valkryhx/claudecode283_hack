// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { zN } from "B:/~BUN/root/chunk-zsggna52.js";
import { pg } from "B:/~BUN/root/chunk-s9jfqk01.js";
import { R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var PO = R(function (y) {
  var t = pg(),
    l = zN();
  function d(e) {
    try {
      let o = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
      return o.delete("CONFIG"), o.delete("CONFIG_PREFIX_SEPARATOR"), o.delete("ENV"), [...o].join(", ");
    } catch (error) {
      return e;
    }
  }
  var h = (e, o) => async () => {
      try {
        let r = e(process.env, o);
        if (r === void 0) throw Error();
        return r;
      } catch (error) {
        throw new t.CredentialsProviderError(error.message || `Not found in ENV: ${d(e.toString())}`, {
          logger: o?.logger
        });
      }
    },
    w = (e, {
      preferredFile = "config",
      ...r
    } = {}) => async () => {
      let n = l.getProfileName(r),
        {
          configFile: configFile,
          credentialsFile: credentialsFile
        } = await l.loadSharedConfigFiles(r),
        s = credentialsFile[n] || {},
        g = configFile[n] || {},
        m = preferredFile === "config" ? {
          ...s,
          ...g
        } : {
          ...g,
          ...s
        };
      try {
        let f = e(m, preferredFile === "config" ? configFile : credentialsFile);
        if (f === void 0) throw Error();
        return f;
      } catch (error) {
        throw new t.CredentialsProviderError(error.message || `Not found in config files w/ profile [${n}]: ${d(e.toString())}`, {
          logger: r.logger
        });
      }
    },
    F = e => typeof e === "function",
    u = e => F(e) ? async () => await e() : t.fromStatic(e),
    C = ({
      environmentVariableSelector: environmentVariableSelector,
      configFileSelector: configFileSelector,
      default: r
    }, n = {}) => {
      let {
          signingName: signingName,
          logger: logger
        } = n,
        s = {
          signingName: signingName,
          logger: logger
        };
      return t.memoize(t.chain(h(environmentVariableSelector, s), w(configFileSelector, n), u(r)));
    };
  y.loadConfig = C;
});
export { PO };