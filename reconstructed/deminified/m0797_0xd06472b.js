// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { o_e } from "B:/~BUN/root/chunk-2ppgegpr.js";
import { k, Re } from "B:/~BUN/root/chunk-yv67t8hr.js";
var m = k(function (v) {
  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.getHomeDir = void 0;
  var T = Re("os"),
    b = Re("path"),
    h = {},
    Q = () => {
      if (process && process.geteuid) return `${process.geteuid()}`;
      return "DEFAULT";
    },
    Y = () => {
      let {
        HOME: HOME,
        USERPROFILE: USERPROFILE,
        HOMEPATH: HOMEPATH,
        HOMEDRIVE = `C:${b.sep}`
      } = process.env;
      if (HOME) return HOME;
      if (USERPROFILE) return USERPROFILE;
      if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;
      let n = Q();
      if (!h[n]) h[n] = T.homedir();
      return h[n];
    };
  v.getHomeDir = Y;
});
var _ = k(function (H) {
  Object.defineProperty(H, "__esModule", {
    value: !0
  });
  H.getSSOTokenFilepath = void 0;
  var j = Re("crypto"),
    y = Re("path"),
    C = m(),
    Z = e => {
      let r = j.createHash("sha1").update(e).digest("hex");
      return y.join(C.getHomeDir(), ".aws", "sso", "cache", `${r}.json`);
    };
  H.getSSOTokenFilepath = Z;
});
var q = k(function (N) {
  Object.defineProperty(N, "__esModule", {
    value: !0
  });
  N.getSSOTokenFromFile = N.tokenIntercept = void 0;
  var w = Re("fs/promises"),
    L = _();
  N.tokenIntercept = {};
  var ee = async e => {
    if (N.tokenIntercept[e]) return N.tokenIntercept[e];
    let t = L.getSSOTokenFilepath(e),
      r = await w.readFile(t, "utf8");
    return JSON.parse(r);
  };
  N.getSSOTokenFromFile = ee;
});
var V = k(function (K) {
  Object.defineProperty(K, "__esModule", {
    value: !0
  });
  K.readFile = K.fileIntercept = K.filePromises = void 0;
  var M = Re("fs/promises");
  K.filePromises = {};
  K.fileIntercept = {};
  var te = (e, t) => {
    if (K.fileIntercept[e] !== void 0) return K.fileIntercept[e];
    if (!K.filePromises[e] || t?.ignoreCache) K.filePromises[e] = M.readFile(e, "utf8");
    return K.filePromises[e];
  };
  K.readFile = te;
});
var _I = k(function (a) {
  var f = m(),
    G = _(),
    E = q(),
    F = Re("path"),
    g = o_e(),
    u = V(),
    X = "AWS_PROFILE",
    B = "default",
    re = e => e.profile || process.env[X] || B,
    c = ".",
    oe = e => Object.entries(e).filter(([t]) => {
      let r = t.indexOf(c);
      if (r === -1) return !1;
      return Object.values(g.IniSectionType).includes(t.substring(0, r));
    }).reduce((acc, [r, o]) => {
      let n = r.indexOf(c),
        i = r.substring(0, n) === g.IniSectionType.PROFILE ? r.substring(n + 1) : r;
      return acc[i] = o, acc;
    }, {
      ...(e.default && {
        default: e.default
      })
    }),
    ne = "AWS_CONFIG_FILE",
    J = () => process.env[ne] || F.join(f.getHomeDir(), ".aws", "config"),
    ie = "AWS_SHARED_CREDENTIALS_FILE",
    se = () => process.env[ie] || F.join(f.getHomeDir(), ".aws", "credentials"),
    ce = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
    ae = ["__proto__", "profile __proto__"],
    P = e => {
      let t = {},
        r,
        o;
      for (let n of e.split(/\r?\n/)) {
        let i = n.split(/(^|\s)[;#]/)[0].trim();
        if (i[0] === "[" && i[i.length - 1] === "]") {
          r = void 0, o = void 0;
          let s = i.substring(1, i.length - 1),
            l = ce.exec(s);
          if (l) {
            let [, p,, O] = l;
            if (Object.values(g.IniSectionType).includes(p)) r = [p, O].join(c);
          } else r = s;
          if (ae.includes(s)) throw Error(`Found invalid profile name "${s}"`);
        } else if (r) {
          let s = i.indexOf("=");
          if (![0, -1].includes(s)) {
            let [l, p] = [i.substring(0, s).trim(), i.substring(s + 1).trim()];
            if (p === "") o = l;else {
              if (o && n.trimStart() === n) o = void 0;
              t[r] = t[r] || {};
              let O = o ? [o, l].join(c) : l;
              t[r][O] = p;
            }
          }
        }
      }
      return t;
    },
    U = () => ({}),
    z = async (e = {}) => {
      let {
          filepath = se(),
          configFilepath = J()
        } = e,
        o = f.getHomeDir(),
        n = "~/",
        i = filepath;
      if (filepath.startsWith("~/")) i = F.join(o, filepath.slice(2));
      let S = configFilepath;
      if (configFilepath.startsWith("~/")) S = F.join(o, configFilepath.slice(2));
      let s = await Promise.all([u.readFile(S, {
        ignoreCache: e.ignoreCache
      }).then(P).then(oe).catch(U), u.readFile(i, {
        ignoreCache: e.ignoreCache
      }).then(P).catch(U)]);
      return {
        configFile: s[0],
        credentialsFile: s[1]
      };
    },
    le = e => Object.entries(e).filter(([t]) => t.startsWith(g.IniSectionType.SSO_SESSION + c)).reduce((acc, [r, o]) => ({
      ...acc,
      [r.substring(r.indexOf(c) + 1)]: o
    }), {}),
    ue = () => ({}),
    pe = async (e = {}) => u.readFile(e.configFilepath ?? J()).then(P).then(le).catch(ue),
    fe = (...e) => {
      let t = {};
      for (let r of e) for (let [o, n] of Object.entries(r)) if (t[o] !== void 0) Object.assign(t[o], n);else t[o] = n;
      return t;
    },
    de = async e => {
      let t = await z(e);
      return fe(t.configFile, t.credentialsFile);
    },
    Fe = {
      getFileRecord() {
        return u.fileIntercept;
      },
      interceptFile(e, t) {
        u.fileIntercept[e] = Promise.resolve(t);
      },
      getTokenRecord() {
        return E.tokenIntercept;
      },
      interceptToken(e, t) {
        E.tokenIntercept[e] = t;
      }
    };
  Object.defineProperty(a, "getSSOTokenFromFile", {
    enumerable: !0,
    get: function () {
      return E.getSSOTokenFromFile;
    }
  });
  Object.defineProperty(a, "readFile", {
    enumerable: !0,
    get: function () {
      return u.readFile;
    }
  });
  a.CONFIG_PREFIX_SEPARATOR = c;
  a.DEFAULT_PROFILE = B;
  a.ENV_PROFILE = X;
  a.externalDataInterceptor = Fe;
  a.getProfileName = re;
  a.loadSharedConfigFiles = z;
  a.loadSsoSessionData = pe;
  a.parseKnownFiles = de;
  Object.keys(f).forEach(function (item) {
    if (item !== "default" && !Object.prototype.hasOwnProperty.call(a, item)) Object.defineProperty(a, item, {
      enumerable: !0,
      get: function () {
        return f[item];
      }
    });
  });
  Object.keys(G).forEach(function (item) {
    if (item !== "default" && !Object.prototype.hasOwnProperty.call(a, item)) Object.defineProperty(a, item, {
      enumerable: !0,
      get: function () {
        return G[item];
      }
    });
  });
});
export { _I };