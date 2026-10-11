// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { rC } from "B:/~BUN/root/chunk-ne7hcw7b.js";
import { o_e } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { k } from "B:/~BUN/root/chunk-yv67t8hr.js";
var v = k(function (re) {
  var ne = (e, n, t) => {
      if (!(n in e)) return;
      if (e[n] === "true") return !0;
      if (e[n] === "false") return !1;
      throw Error(`Cannot load ${t} "${n}". Expected "true" or "false", got ${e[n]}.`);
    },
    te = (e, n, t) => {
      if (!(n in e)) return;
      let r = parseInt(e[n], 10);
      if (Number.isNaN(r)) throw TypeError(`Cannot load ${t} '${n}'. Expected number, got '${e[n]}'.`);
      return r;
    };
  re.SelectorType = void 0;
  (function (e) {
    e.ENV = "env", e.CONFIG = "shared config entry";
  })(re.SelectorType || (re.SelectorType = {}));
  re.booleanSelector = ne;
  re.numberSelector = te;
});
var Gz = k(function ($e) {
  var O = o_e();
  class x {
    capacity;
    data = new Map();
    parameters = [];
    constructor({
      size: size,
      params: params
    }) {
      if (this.capacity = size ?? 50, params) this.parameters = params;
    }
    get(e, n) {
      let t = this.hash(e);
      if (t === !1) return n();
      if (!this.data.has(t)) {
        if (this.data.size > this.capacity + 10) {
          let r = this.data.keys(),
            s = 0;
          while (!0) {
            let {
              value: value,
              done: done
            } = r.next();
            if (this.data.delete(value), done || ++s > 10) break;
          }
        }
        this.data.set(t, n());
      }
      return this.data.get(t);
    }
    size() {
      return this.data.size;
    }
    hash(e) {
      let n = "",
        {
          parameters: parameters
        } = this;
      if (parameters.length === 0) return !1;
      for (let r of parameters) {
        let s = String(e[r] ?? "");
        if (s.includes("|;")) return !1;
        n += s + "|;";
      }
      return n;
    }
  }
  var regExp = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
    U = e => regExp.test(e) || e.startsWith("[") && e.endsWith("]"),
    regExp_2 = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    isValidHostLabel = (e, n = !1) => {
      if (!n) return regExp_2.test(e);
      let t = e.split(".");
      for (let r of t) if (!isValidHostLabel(r)) return !1;
      return !0;
    },
    I = {},
    N = "endpoints";
  function d(e) {
    if (typeof e !== "object" || e == null) return e;
    if ("ref" in e) return `$${d(e.ref)}`;
    if ("fn" in e) return `${e.fn}(${(e.argv || []).map(d).join(", ")})`;
    return JSON.stringify(e, null, 2);
  }
  class EndpointError extends Error {
    constructor(e) {
      super(e);
      this.name = "EndpointError";
    }
  }
  var booleanEquals = (e, n) => e === n,
    le = e => {
      let n = e.split("."),
        t = [];
      for (let r of n) {
        let s = r.indexOf("[");
        if (s !== -1) {
          if (r.indexOf("]") !== r.length - 1) throw new EndpointError(`Path: '${e}' does not end with ']'`);
          let o = r.slice(s + 1, -1);
          if (Number.isNaN(parseInt(o))) throw new EndpointError(`Invalid array index: '${o}' in path: '${e}'`);
          if (s !== 0) t.push(r.slice(0, s));
          t.push(o);
        } else t.push(r);
      }
      return t;
    },
    getAttr = (e, n) => le(n).reduce((acc, item) => {
      if (typeof acc !== "object") throw new EndpointError(`Index '${item}' in '${n}' not found in '${JSON.stringify(e)}'`);else if (Array.isArray(acc)) return acc[parseInt(item)];
      return acc[item];
    }, e),
    isSet = e => e != null,
    not = e => !e,
    S = {
      [O.EndpointURLScheme.HTTP]: 80,
      [O.EndpointURLScheme.HTTPS]: 443
    },
    parseURL = e => {
      let n = (() => {
        try {
          if (e instanceof URL) return e;
          if (typeof e === "object" && "hostname" in e) {
            let {
                hostname: hostname,
                port: port,
                protocol = "",
                path = "",
                query = {}
              } = e,
              T = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
            return T.search = Object.entries(query).map(([Y, ee]) => `${Y}=${ee}`).join("&"), T;
          }
          return new URL(e);
        } catch (error) {
          return null;
        }
      })();
      if (!n) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
      let t = n.href,
        {
          host: host,
          hostname: hostname_2,
          pathname: o,
          protocol: protocol_2,
          search: search
        } = n;
      if (search) return null;
      let scheme = protocol_2.slice(0, -1);
      if (!Object.values(O.EndpointURLScheme).includes(scheme)) return null;
      let isIp = U(hostname_2),
        g = t.includes(`${host}:${S[scheme]}`) || typeof e === "string" && e.includes(`${host}:${S[scheme]}`),
        authority = `${host}${g ? `:${S[scheme]}` : ""}`;
      return {
        scheme: scheme,
        authority: authority,
        path: o,
        normalizedPath: o.endsWith("/") ? o : `${o}/`,
        isIp: isIp
      };
    },
    stringEquals = (e, n) => e === n,
    substring = (e, n, t, r) => {
      if (n >= t || e.length < t) return null;
      if (!r) return e.substring(n, t);
      return e.substring(e.length - t, e.length - n);
    },
    uriEncode = e => encodeURIComponent(e).replace(/[!*'()]/g, n => `%${n.charCodeAt(0).toString(16).toUpperCase()}`),
    Ne = {
      booleanEquals: booleanEquals,
      getAttr: getAttr,
      isSet: isSet,
      isValidHostLabel: isValidHostLabel,
      not: not,
      parseURL: parseURL,
      stringEquals: stringEquals,
      substring: substring,
      uriEncode: uriEncode
    },
    D = (e, n) => {
      let t = [],
        r = {
          ...n.endpointParams,
          ...n.referenceRecord
        },
        s = 0;
      while (s < e.length) {
        let o = e.indexOf("{", s);
        if (o === -1) {
          t.push(e.slice(s));
          break;
        }
        t.push(e.slice(s, o));
        let i = e.indexOf("}", o);
        if (i === -1) {
          t.push(e.slice(o));
          break;
        }
        if (e[o + 1] === "{" && e[i + 1] === "}") t.push(e.slice(o + 1, i)), s = i + 2;
        let a = e.substring(o + 1, i);
        if (a.includes("#")) {
          let [l, c] = a.split("#");
          t.push(getAttr(r[l], c));
        } else t.push(r[a]);
        s = i + 1;
      }
      return t.join("");
    },
    he = ({
      ref: ref
    }, n) => ({
      ...n.endpointParams,
      ...n.referenceRecord
    })[ref],
    evaluateExpression = (e, n, t) => {
      if (typeof e === "string") return D(e, t);else if (e.fn) return C.callFunction(e, t);else if (e.ref) return he(e, t);
      throw new EndpointError(`'${n}': ${String(e)} is not a string, function or reference.`);
    },
    callFunction = ({
      fn: fn,
      argv: argv
    }, t) => {
      let r = argv.map(item => ["boolean", "number"].includes(typeof item) ? item : C.evaluateExpression(item, "arg", t)),
        s = fn.split(".");
      if (s[0] in I && s[1] != null) return I[s[0]][s[1]](...r);
      return Ne[fn](...r);
    },
    C = {
      evaluateExpression: evaluateExpression,
      callFunction: callFunction
    },
    _e = ({
      assign: e,
      ...n
    }, t) => {
      if (e && e in t.referenceRecord) throw new EndpointError(`'${e}' is already defined in Reference Record.`);
      let value_2 = callFunction(n, t);
      return t.logger?.debug?.(`${N} evaluateCondition: ${d(n)} = ${d(value_2)}`), {
        result: value_2 === "" ? !0 : !!value_2,
        ...(e != null && {
          toAssign: {
            name: e,
            value: value_2
          }
        })
      };
    },
    w = (e = [], n) => {
      let referenceRecord = {};
      for (let r of e) {
        let {
          result: result,
          toAssign: toAssign
        } = _e(r, {
          ...n,
          referenceRecord: {
            ...n.referenceRecord,
            ...referenceRecord
          }
        });
        if (!result) return {
          result: result
        };
        if (toAssign) referenceRecord[toAssign.name] = toAssign.value, n.logger?.debug?.(`${N} assign: ${toAssign.name} := ${d(toAssign.value)}`);
      }
      return {
        result: !0,
        referenceRecord: referenceRecord
      };
    },
    Re = (e, n) => Object.entries(e).reduce((acc, [r, s]) => ({
      ...acc,
      [r]: s.map(item => {
        let i = evaluateExpression(item, "Header value entry", n);
        if (typeof i !== "string") throw new EndpointError(`Header '${r}' value '${i}' is not a string`);
        return i;
      })
    }), {}),
    getEndpointProperties = (e, n) => Object.entries(e).reduce((acc, [r, s]) => ({
      ...acc,
      [r]: L.getEndpointProperty(s, n)
    }), {}),
    getEndpointProperty = (e, n) => {
      if (Array.isArray(e)) return e.map(item => getEndpointProperty(item, n));
      switch (typeof e) {
        case "string":
          return D(e, n);
        case "object":
          if (e === null) throw new EndpointError(`Unexpected endpoint property: ${e}`);
          return L.getEndpointProperties(e, n);
        case "boolean":
          return e;
        default:
          throw new EndpointError(`Unexpected endpoint property type: ${typeof e}`);
      }
    },
    L = {
      getEndpointProperty: getEndpointProperty,
      getEndpointProperties: getEndpointProperties
    },
    Se = (e, n) => {
      let t = evaluateExpression(e, "Endpoint URL", n);
      if (typeof t === "string") try {
        return new URL(t);
      } catch (r) {
        throw console.error(`Failed to construct URL with ${t}`, r), r;
      }
      throw new EndpointError(`Endpoint URL must be a string, got ${typeof t}`);
    },
    Oe = (e, n) => {
      let {
          conditions: conditions,
          endpoint: endpoint
        } = e,
        {
          result: result_2,
          referenceRecord: referenceRecord_2
        } = w(conditions, n);
      if (!result_2) return;
      let i = {
          ...n,
          referenceRecord: {
            ...n.referenceRecord,
            ...referenceRecord_2
          }
        },
        {
          url: url,
          properties: properties,
          headers: headers
        } = endpoint;
      return n.logger?.debug?.(`${N} Resolving endpoint from template: ${d(endpoint)}`), {
        ...(headers != null && {
          headers: Re(headers, i)
        }),
        ...(properties != null && {
          properties: getEndpointProperties(properties, i)
        }),
        url: Se(url, i)
      };
    },
    Ie = (e, n) => {
      let {
          conditions: conditions_2,
          error: error_2
        } = e,
        {
          result: result_3,
          referenceRecord: referenceRecord_3
        } = w(conditions_2, n);
      if (!result_3) return;
      throw new EndpointError(evaluateExpression(error_2, "Error", {
        ...n,
        referenceRecord: {
          ...n.referenceRecord,
          ...referenceRecord_3
        }
      }));
    },
    evaluateRules = (e, n) => {
      for (let t of e) if (t.type === "endpoint") {
        let r = Oe(t, n);
        if (r) return r;
      } else if (t.type === "error") Ie(t, n);else if (t.type === "tree") {
        let r = V.evaluateTreeRule(t, n);
        if (r) return r;
      } else throw new EndpointError(`Unknown endpoint rule: ${t}`);
      throw new EndpointError("Rules evaluation failed");
    },
    evaluateTreeRule = (e, n) => {
      let {
          conditions: conditions_3,
          rules: rules
        } = e,
        {
          result: result_4,
          referenceRecord: referenceRecord_4
        } = w(conditions_3, n);
      if (!result_4) return;
      return V.evaluateRules(rules, {
        ...n,
        referenceRecord: {
          ...n.referenceRecord,
          ...referenceRecord_4
        }
      });
    },
    V = {
      evaluateRules: evaluateRules,
      evaluateTreeRule: evaluateTreeRule
    },
    we = (e, n) => {
      let {
          endpointParams: endpointParams,
          logger: logger
        } = n,
        {
          parameters: parameters_2,
          rules: rules_2
        } = e;
      n.logger?.debug?.(`${N} Initial EndpointParams: ${d(endpointParams)}`);
      let i = Object.entries(parameters_2).filter(([, c]) => c.default != null).map(([c, g]) => [c, g.default]);
      if (i.length > 0) for (let [c, g] of i) endpointParams[c] = endpointParams[c] ?? g;
      let a = Object.entries(parameters_2).filter(([, c]) => c.required).map(([c]) => c);
      for (let c of a) if (endpointParams[c] == null) throw new EndpointError(`Missing required parameter: '${c}'`);
      let l = evaluateRules(rules_2, {
        endpointParams: endpointParams,
        logger: logger,
        referenceRecord: {}
      });
      return n.logger?.debug?.(`${N} Resolved endpoint: ${d(l)}`), l;
    };
  $e.EndpointCache = x;
  $e.EndpointError = EndpointError;
  $e.customEndpointFunctions = I;
  $e.isIpAddress = U;
  $e.isValidHostLabel = isValidHostLabel;
  $e.resolveEndpoint = we;
});
var Ow = k(function (Be) {
  var f = v(),
    _ = rC(),
    De = Gz(),
    W = "AWS_USE_DUALSTACK_ENDPOINT",
    K = "use_dualstack_endpoint",
    be = !1,
    Ce = {
      environmentVariableSelector: e => f.booleanSelector(e, W, f.SelectorType.ENV),
      configFileSelector: e => f.booleanSelector(e, K, f.SelectorType.CONFIG),
      default: !1
    },
    j = "AWS_USE_FIPS_ENDPOINT",
    M = "use_fips_endpoint",
    Fe = !1,
    ye = {
      environmentVariableSelector: e => f.booleanSelector(e, j, f.SelectorType.ENV),
      configFileSelector: e => f.booleanSelector(e, M, f.SelectorType.CONFIG),
      default: !1
    },
    Le = e => {
      let {
        tls: tls,
        endpoint: endpoint_2,
        urlParser: urlParser,
        useDualstackEndpoint: useDualstackEndpoint
      } = e;
      return Object.assign(e, {
        tls: tls ?? !0,
        endpoint: _.normalizeProvider(typeof endpoint_2 === "string" ? urlParser(endpoint_2) : endpoint_2),
        isCustomEndpoint: !0,
        useDualstackEndpoint: _.normalizeProvider(useDualstackEndpoint ?? !1)
      });
    },
    Ge = async e => {
      let {
          tls: tls_2 = !0
        } = e,
        t = await e.region();
      if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(t)) throw Error("Invalid region in client config");
      let useDualstackEndpoint_2 = await e.useDualstackEndpoint(),
        useFipsEndpoint = await e.useFipsEndpoint(),
        {
          hostname: hostname_3
        } = (await e.regionInfoProvider(t, {
          useDualstackEndpoint: useDualstackEndpoint_2,
          useFipsEndpoint: useFipsEndpoint
        })) ?? {};
      if (!hostname_3) throw Error("Cannot resolve hostname from client config");
      return e.urlParser(`${tls_2 ? "https:" : "http:"}//${hostname_3}`);
    },
    Ve = e => {
      let useDualstackEndpoint_3 = _.normalizeProvider(e.useDualstackEndpoint ?? !1),
        {
          endpoint: endpoint_3,
          useFipsEndpoint: useFipsEndpoint_2,
          urlParser: urlParser_2,
          tls: tls_3
        } = e;
      return Object.assign(e, {
        tls: tls_3 ?? !0,
        endpoint: endpoint_3 ? _.normalizeProvider(typeof endpoint_3 === "string" ? urlParser_2(endpoint_3) : endpoint_3) : () => Ge({
          ...e,
          useDualstackEndpoint: useDualstackEndpoint_3,
          useFipsEndpoint: useFipsEndpoint_2
        }),
        isCustomEndpoint: !!endpoint_3,
        useDualstackEndpoint: useDualstackEndpoint_3
      });
    },
    H = "AWS_REGION",
    Z = "region",
    ze = {
      environmentVariableSelector: e => e[H],
      configFileSelector: e => e[Z],
      default: () => {
        throw Error("Region is missing");
      }
    },
    ke = {
      preferredFile: "credentials"
    },
    z = new Set(),
    qe = (e, n = De.isValidHostLabel) => {
      if (!z.has(e) && !n(e)) {
        if (e === "*") console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');else throw Error(`Region not accepted: region="${e}" is not a valid hostname component.`);
      } else z.add(e);
    },
    B = e => typeof e === "string" && (e.startsWith("fips-") || e.endsWith("-fips")),
    We = e => B(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e,
    Ke = e => {
      let {
        region: region,
        useFipsEndpoint: useFipsEndpoint_3
      } = e;
      if (!region) throw Error("Region is missing");
      return Object.assign(e, {
        region: async () => {
          let r = typeof region === "function" ? await region() : region,
            s = We(r);
          return qe(s), s;
        },
        useFipsEndpoint: async () => {
          let r = typeof region === "string" ? region : await region();
          if (B(r)) return !0;
          return typeof useFipsEndpoint_3 !== "function" ? Promise.resolve(!!useFipsEndpoint_3) : useFipsEndpoint_3();
        }
      });
    },
    q = (e = [], {
      useFipsEndpoint: useFipsEndpoint_4,
      useDualstackEndpoint: useDualstackEndpoint_4
    }) => e.find(({
      tags: tags
    }) => useFipsEndpoint_4 === tags.includes("fips") && useDualstackEndpoint_4 === tags.includes("dualstack"))?.hostname,
    je = (e, {
      regionHostname: regionHostname,
      partitionHostname: partitionHostname
    }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", e) : void 0,
    Me = (e, {
      partitionHash: partitionHash
    }) => Object.keys(partitionHash || {}).find(item => partitionHash[item].regions.includes(e)) ?? "aws",
    He = (e, {
      signingRegion: signingRegion,
      regionRegex: regionRegex,
      useFipsEndpoint: useFipsEndpoint_5
    }) => {
      if (signingRegion) return signingRegion;else if (useFipsEndpoint_5) {
        let s = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."),
          o = e.match(s);
        if (o) return o[0].slice(1, -1);
      }
    },
    Ze = (e, {
      useFipsEndpoint: useFipsEndpoint_6 = !1,
      useDualstackEndpoint: useDualstackEndpoint_5 = !1,
      signingService: signingService,
      regionHash: regionHash,
      partitionHash: partitionHash_2
    }) => {
      let partition = Me(e, {
          partitionHash: partitionHash_2
        }),
        resolvedRegion = e in regionHash ? e : partitionHash_2[partition]?.endpoint ?? e,
        l = {
          useFipsEndpoint: useFipsEndpoint_6,
          useDualstackEndpoint: useDualstackEndpoint_5
        },
        regionHostname_2 = q(regionHash[resolvedRegion]?.variants, l),
        partitionHostname_2 = q(partitionHash_2[partition]?.variants, l),
        hostname_4 = je(resolvedRegion, {
          regionHostname: regionHostname_2,
          partitionHostname: partitionHostname_2
        });
      if (hostname_4 === void 0) throw Error(`Endpoint resolution failed for: ${{
        resolvedRegion: resolvedRegion,
        useFipsEndpoint: useFipsEndpoint_6,
        useDualstackEndpoint: useDualstackEndpoint_5
      }}`);
      let signingRegion_2 = He(hostname_4, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash_2[partition].regionRegex,
        useFipsEndpoint: useFipsEndpoint_6
      });
      return {
        partition: partition,
        signingService: signingService,
        hostname: hostname_4,
        ...(signingRegion_2 && {
          signingRegion: signingRegion_2
        }),
        ...(regionHash[resolvedRegion]?.signingService && {
          signingService: regionHash[resolvedRegion].signingService
        })
      };
    };
  Be.CONFIG_USE_DUALSTACK_ENDPOINT = K;
  Be.CONFIG_USE_FIPS_ENDPOINT = M;
  Be.DEFAULT_USE_DUALSTACK_ENDPOINT = be;
  Be.DEFAULT_USE_FIPS_ENDPOINT = Fe;
  Be.ENV_USE_DUALSTACK_ENDPOINT = W;
  Be.ENV_USE_FIPS_ENDPOINT = j;
  Be.NODE_REGION_CONFIG_FILE_OPTIONS = ke;
  Be.NODE_REGION_CONFIG_OPTIONS = ze;
  Be.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = Ce;
  Be.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = ye;
  Be.REGION_ENV_NAME = H;
  Be.REGION_INI_NAME = Z;
  Be.getRegionInfo = Ze;
  Be.resolveCustomEndpointsConfig = Le;
  Be.resolveEndpointsConfig = Ve;
  Be.resolveRegionConfig = Ke;
});
export { Gz, Ow };