// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { H3, WT } from "B:/~BUN/root/chunk-7q18tptd.js";
import { HS } from "B:/~BUN/root/chunk-r9g5axec.js";
import { PO } from "B:/~BUN/root/chunk-zjz6e5je.js";
import { San } from "B:/~BUN/root/chunk-9jjxt3zk.js";
import { Gae, Vae, qae, dte, WC, cte, Kae, Zj, ute, QU, Yae, Xae, Jae, Qae, Zae, pte } from "B:/~BUN/root/chunk-caya68ws.js";
import "B:/~BUN/root/chunk-fcp3ccp8.js";
import { jG } from "B:/~BUN/root/chunk-0s42pmjt.js";
import { Vc } from "B:/~BUN/root/chunk-bsy8eq8a.js";
import { RO } from "B:/~BUN/root/chunk-w57yz5h3.js";
import { wje } from "B:/~BUN/root/chunk-nx2e0pwm.js";
import { AO } from "B:/~BUN/root/chunk-ckxm3hbs.js";
import "B:/~BUN/root/chunk-zsggna52.js";
import { bg, sL } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { rC, rP } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var U = R(function (Y) {
  Object.defineProperty(Y, "__esModule", {
    value: !0
  });
  Y.resolveHttpAuthSchemeConfig = Y.defaultSigninHttpAuthSchemeProvider = Y.defaultSigninHttpAuthSchemeParametersProvider = void 0;
  var W = WC(),
    S = AO(),
    pt = async (e, t, r) => ({
      operation: S.getSmithyContext(t).operation,
      region: (await S.normalizeProvider(e.region)()) || (() => {
        throw Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    });
  Y.defaultSigninHttpAuthSchemeParametersProvider = pt;
  function lt(e) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "signin",
        region: e.region
      },
      propertiesExtractor: (config, context) => ({
        signingProperties: {
          config: config,
          context: context
        }
      })
    };
  }
  function ht(e) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var gt = e => {
    let t = [];
    switch (e.operation) {
      case "CreateOAuth2Token":
        {
          t.push(ht(e));
          break;
        }
      default:
        t.push(lt(e));
    }
    return t;
  };
  Y.defaultSigninHttpAuthSchemeProvider = gt;
  var _t = e => {
    let t = W.resolveAwsSdkSigV4Config(e);
    return Object.assign(t, {
      authSchemePreference: S.normalizeProvider(e.authSchemePreference ?? [])
    });
  };
  Y.resolveHttpAuthSchemeConfig = _t;
});
var de = R(function (ue) {
  Object.defineProperty(ue, "__esModule", {
    value: !0
  });
  ue.ruleSet = void 0;
  var ae = "required",
    o = "fn",
    s = "argv",
    l = "ref",
    Z = !0,
    ee = "isSet",
    E = "booleanEquals",
    type = "error",
    type_2 = "endpoint",
    type_3 = "tree",
    assign = "PartitionResult",
    F = "stringEquals",
    te = {
      [ae]: !0,
      default: !1,
      type: "boolean"
    },
    re = {
      [ae]: !1,
      type: "string"
    },
    url = {
      [l]: "Endpoint"
    },
    M = {
      [o]: E,
      [s]: [{
        [l]: "UseFIPS"
      }, !0]
    },
    j = {
      [o]: E,
      [s]: [{
        [l]: "UseDualStack"
      }, !0]
    },
    n = {},
    V = {
      [o]: "getAttr",
      [s]: [{
        [l]: assign
      }, "name"]
    },
    C = {
      [o]: E,
      [s]: [{
        [l]: "UseFIPS"
      }, !1]
    },
    I = {
      [o]: E,
      [s]: [{
        [l]: "UseDualStack"
      }, !1]
    },
    oe = {
      [o]: "getAttr",
      [s]: [{
        [l]: assign
      }, "supportsFIPS"]
    },
    se = {
      [o]: E,
      [s]: [!0, {
        [o]: "getAttr",
        [s]: [{
          [l]: assign
        }, "supportsDualStack"]
      }]
    },
    ie = [{
      [l]: "Region"
    }],
    St = {
      version: "1.0",
      parameters: {
        UseDualStack: te,
        UseFIPS: te,
        Endpoint: re,
        Region: re
      },
      rules: [{
        conditions: [{
          [o]: ee,
          [s]: [url]
        }],
        rules: [{
          conditions: [M],
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          type: type
        }, {
          rules: [{
            conditions: [j],
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: type
          }, {
            endpoint: {
              url: url,
              properties: n,
              headers: n
            },
            type: type_2
          }],
          type: type_3
        }],
        type: type_3
      }, {
        rules: [{
          conditions: [{
            [o]: ee,
            [s]: ie
          }],
          rules: [{
            conditions: [{
              [o]: "aws.partition",
              [s]: ie,
              assign: assign
            }],
            rules: [{
              conditions: [{
                [o]: F,
                [s]: [V, "aws"]
              }, C, I],
              endpoint: {
                url: "https://{Region}.signin.aws.amazon.com",
                properties: n,
                headers: n
              },
              type: type_2
            }, {
              conditions: [{
                [o]: F,
                [s]: [V, "aws-cn"]
              }, C, I],
              endpoint: {
                url: "https://{Region}.signin.amazonaws.cn",
                properties: n,
                headers: n
              },
              type: type_2
            }, {
              conditions: [{
                [o]: F,
                [s]: [V, "aws-us-gov"]
              }, C, I],
              endpoint: {
                url: "https://{Region}.signin.amazonaws-us-gov.com",
                properties: n,
                headers: n
              },
              type: type_2
            }, {
              conditions: [M, j],
              rules: [{
                conditions: [{
                  [o]: E,
                  [s]: [Z, oe]
                }, se],
                rules: [{
                  endpoint: {
                    url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                    properties: n,
                    headers: n
                  },
                  type: type_2
                }],
                type: type_3
              }, {
                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                type: type
              }],
              type: type_3
            }, {
              conditions: [M, I],
              rules: [{
                conditions: [{
                  [o]: E,
                  [s]: [oe, Z]
                }],
                rules: [{
                  endpoint: {
                    url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
                    properties: n,
                    headers: n
                  },
                  type: type_2
                }],
                type: type_3
              }, {
                error: "FIPS is enabled but this partition does not support FIPS",
                type: type
              }],
              type: type_3
            }, {
              conditions: [C, j],
              rules: [{
                conditions: [se],
                rules: [{
                  endpoint: {
                    url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
                    properties: n,
                    headers: n
                  },
                  type: type_2
                }],
                type: type_3
              }, {
                error: "DualStack is enabled but this partition does not support DualStack",
                type: type
              }],
              type: type_3
            }, {
              endpoint: {
                url: "https://signin.{Region}.{PartitionResult#dnsSuffix}",
                properties: n,
                headers: n
              },
              type: type_2
            }],
            type: type_3
          }],
          type: type_3
        }, {
          error: "Invalid Configuration: Missing Region",
          type: type
        }],
        type: type_3
      }]
    };
  ue.ruleSet = St;
});
var _e = R(function (he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.defaultEndpointResolver = void 0;
  var pe = dte(),
    v = H3(),
    le = de(),
    ft = new v.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    }),
    vt = (endpointParams, t = {}) => ft.get(endpointParams, () => v.resolveEndpoint(le.ruleSet, {
      endpointParams: endpointParams,
      logger: t.logger
    }));
  he.defaultEndpointResolver = vt;
  v.customEndpointFunctions.aws = pe.awsEndpointFunctions;
});
var Re = R(function (ye) {
  Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  ye.getRuntimeConfig = void 0;
  var me = WC(),
    Ee = Qae(),
    Se = HS(),
    fe = Vc(),
    ve = jG(),
    x = rP(),
    T = rC(),
    Pe = U(),
    Ae = _e(),
    Pt = e => ({
      apiVersion: "2023-01-01",
      base64Decoder: e?.base64Decoder ?? x.fromBase64,
      base64Encoder: e?.base64Encoder ?? x.toBase64,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? Ae.defaultEndpointResolver,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Pe.defaultSigninHttpAuthSchemeProvider,
      httpAuthSchemes: e?.httpAuthSchemes ?? [{
        schemeId: "aws.auth#sigv4",
        identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
        signer: new me.AwsSdkSigV4Signer()
      }, {
        schemeId: "smithy.api#noAuth",
        identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new Se.NoAuthSigner()
      }],
      logger: e?.logger ?? new fe.NoOpLogger(),
      protocol: e?.protocol ?? new Ee.AwsRestJsonProtocol({
        defaultNamespace: "com.amazonaws.signin"
      }),
      serviceId: e?.serviceId ?? "Signin",
      urlParser: e?.urlParser ?? ve.parseUrl,
      utf8Decoder: e?.utf8Decoder ?? T.fromUtf8,
      utf8Encoder: e?.utf8Encoder ?? T.toUtf8
    });
  ye.getRuntimeConfig = Pt;
});
var He = R(function (Ne) {
  Object.defineProperty(Ne, "__esModule", {
    value: !0
  });
  Ne.getRuntimeConfig = void 0;
  var Ie = wje(),
    At = Ie.__importDefault(San()),
    D = WC(),
    q = Yae(),
    g = WT(),
    Oe = Xae(),
    k = QU(),
    u = PO(),
    w = sL(),
    xe = Jae(),
    Te = ute(),
    De = Re(),
    qe = Vc(),
    ke = Zae(),
    we = Vc(),
    yt = e => {
      we.emitWarningIfUnsupportedVersion(process.version);
      let defaultsMode = ke.resolveDefaultsModeConfig(e),
        r = () => defaultsMode().then(qe.loadConfigsForDefaultMode),
        d = De.getRuntimeConfig(e);
      D.emitWarningIfUnsupportedVersion(process.version);
      let i = {
        profile: e?.profile,
        logger: d.logger
      };
      return {
        ...d,
        ...e,
        runtime: "node",
        defaultsMode: defaultsMode,
        authSchemePreference: e?.authSchemePreference ?? u.loadConfig(D.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, i),
        bodyLengthChecker: e?.bodyLengthChecker ?? xe.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? q.createDefaultUserAgentProvider({
          serviceId: d.serviceId,
          clientVersion: At.default.version
        }),
        maxAttempts: e?.maxAttempts ?? u.loadConfig(k.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? u.loadConfig(g.NODE_REGION_CONFIG_OPTIONS, {
          ...g.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...i
        }),
        requestHandler: w.NodeHttpHandler.create(e?.requestHandler ?? r),
        retryMode: e?.retryMode ?? u.loadConfig({
          ...k.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await r()).retryMode || Te.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? Oe.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? w.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? u.loadConfig(g.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, i),
        useFipsEndpoint: e?.useFipsEndpoint ?? u.loadConfig(g.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, i),
        userAgentAppId: e?.userAgentAppId ?? u.loadConfig(q.NODE_APP_ID_CONFIG_OPTIONS, i)
      };
    };
  Ne.getRuntimeConfig = yt;
});
var Sr = R(function (Q) {
  var Ue = Gae(),
    Ct = Vae(),
    Rt = qae(),
    Fe = cte(),
    It = WT(),
    L = HS(),
    P = RO(),
    Ot = Kae(),
    et = Zj(),
    Me = QU(),
    _ = Vc(),
    je = U(),
    xt = He(),
    Ve = pte(),
    Le = bg(),
    Tt = e => Object.assign(e, {
      useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
      useFipsEndpoint: e.useFipsEndpoint ?? !1,
      defaultSigningName: "signin"
    }),
    Dt = {
      UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
      },
      Endpoint: {
        type: "builtInParams",
        name: "endpoint"
      },
      Region: {
        type: "builtInParams",
        name: "region"
      },
      UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
      }
    },
    qt = e => {
      let {
        httpAuthSchemes: httpAuthSchemes,
        httpAuthSchemeProvider: httpAuthSchemeProvider,
        credentials: credentials
      } = e;
      return {
        setHttpAuthScheme(i) {
          let y = httpAuthSchemes.findIndex(item => item.schemeId === i.schemeId);
          if (y === -1) httpAuthSchemes.push(i);else httpAuthSchemes.splice(y, 1, i);
        },
        httpAuthSchemes() {
          return httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(i) {
          httpAuthSchemeProvider = i;
        },
        httpAuthSchemeProvider() {
          return httpAuthSchemeProvider;
        },
        setCredentials(i) {
          credentials = i;
        },
        credentials() {
          return credentials;
        }
      };
    },
    kt = e => ({
      httpAuthSchemes: e.httpAuthSchemes(),
      httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
      credentials: e.credentials()
    }),
    wt = (e, t) => {
      let r = Object.assign(Ve.getAwsRegionExtensionConfiguration(e), _.getDefaultExtensionConfiguration(e), Le.getHttpHandlerExtensionConfiguration(e), qt(e));
      return t.forEach(item => item.configure(r)), Object.assign(e, Ve.resolveAwsRegionExtensionConfiguration(r), _.resolveDefaultRuntimeConfig(r), Le.resolveHttpHandlerRuntimeConfig(r), kt(r));
    };
  class G extends _.Client {
    config;
    constructor(...[e]) {
      let t = xt.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let r = Tt(t),
        d = Fe.resolveUserAgentConfig(r),
        i = Me.resolveRetryConfig(d),
        y = It.resolveRegionConfig(i),
        H = Ue.resolveHostHeaderConfig(y),
        at = et.resolveEndpointConfig(H),
        ut = je.resolveHttpAuthSchemeConfig(at),
        ct = wt(ut, e?.extensions || []);
      this.config = ct, this.middlewareStack.use(P.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Fe.getUserAgentPlugin(this.config)), this.middlewareStack.use(Me.getRetryPlugin(this.config)), this.middlewareStack.use(Ot.getContentLengthPlugin(this.config)), this.middlewareStack.use(Ue.getHostHeaderPlugin(this.config)), this.middlewareStack.use(Ct.getLoggerPlugin(this.config)), this.middlewareStack.use(Rt.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(L.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: je.defaultSigninHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async dt => new L.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": dt.credentials
        })
      })), this.middlewareStack.use(L.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  var A = class e extends _.ServiceException {
      constructor(t) {
        super(t);
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    tt = class e extends A {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      constructor(t) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype), this.error = t.error;
      }
    },
    rt = class e extends A {
      name = "InternalServerException";
      $fault = "server";
      error;
      constructor(t) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype), this.error = t.error;
      }
    },
    nt = class e extends A {
      name = "TooManyRequestsError";
      $fault = "client";
      error;
      constructor(t) {
        super({
          name: "TooManyRequestsError",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype), this.error = t.error;
      }
    },
    ot = class e extends A {
      name = "ValidationException";
      $fault = "client";
      error;
      constructor(t) {
        super({
          name: "ValidationException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype), this.error = t.error;
      }
    },
    Nt = "AccessDeniedException",
    bt = "AccessToken",
    Ht = "CreateOAuth2Token",
    Ut = "CreateOAuth2TokenRequest",
    Ft = "CreateOAuth2TokenRequestBody",
    Mt = "CreateOAuth2TokenResponseBody",
    jt = "CreateOAuth2TokenResponse",
    Vt = "InternalServerException",
    Lt = "RefreshToken",
    $t = "TooManyRequestsError",
    Gt = "ValidationException",
    $e = "accessKeyId",
    Ge = "accessToken",
    B = "client",
    Be = "clientId",
    ze = "codeVerifier",
    Bt = "code",
    m = "error",
    Ke = "expiresIn",
    Xe = "grantType",
    zt = "http",
    z = "httpError",
    Qe = "idToken",
    c = "jsonName",
    b = "message",
    N = "refreshToken",
    We = "redirectUri",
    Kt = "server",
    Ye = "secretAccessKey",
    Je = "sessionToken",
    st = "smithy.ts.sdk.synthetic.com.amazonaws.signin",
    Xt = "tokenInput",
    Qt = "tokenOutput",
    Ze = "tokenType",
    a = "com.amazonaws.signin",
    it = [0, a, Lt, 8, 0],
    Wt = [-3, a, Nt, {
      [m]: B
    }, [m, b], [0, 0]];
  P.TypeRegistry.for(a).registerError(Wt, tt);
  var Yt = [3, a, bt, 8, [$e, Ye, Je], [[0, {
      [c]: $e
    }], [0, {
      [c]: Ye
    }], [0, {
      [c]: Je
    }]]],
    Jt = [3, a, Ut, 0, [Xt], [[() => Zt, 16]]],
    Zt = [3, a, Ft, 0, [Be, Xe, Bt, We, ze, N], [[0, {
      [c]: Be
    }], [0, {
      [c]: Xe
    }], 0, [0, {
      [c]: We
    }], [0, {
      [c]: ze
    }], [() => it, {
      [c]: N
    }]]],
    er = [3, a, jt, 0, [Qt], [[() => tr, 16]]],
    tr = [3, a, Mt, 0, [Ge, Ze, Ke, N, Qe], [[() => Yt, {
      [c]: Ge
    }], [0, {
      [c]: Ze
    }], [1, {
      [c]: Ke
    }], [() => it, {
      [c]: N
    }], [0, {
      [c]: Qe
    }]]],
    rr = [-3, a, Vt, {
      [m]: Kt,
      [z]: 500
    }, [m, b], [0, 0]];
  P.TypeRegistry.for(a).registerError(rr, rt);
  var nr = [-3, a, $t, {
    [m]: B,
    [z]: 429
  }, [m, b], [0, 0]];
  P.TypeRegistry.for(a).registerError(nr, nt);
  var or = [-3, a, Gt, {
    [m]: B,
    [z]: 400
  }, [m, b], [0, 0]];
  P.TypeRegistry.for(a).registerError(or, ot);
  var sr = [-3, st, "SigninServiceException", 0, [], []];
  P.TypeRegistry.for(st).registerError(sr, A);
  var ir = [9, a, Ht, {
    [zt]: ["POST", "/v1/token", 200]
  }, () => Jt, () => er];
  class CreateOAuth2TokenCommand extends _.Command.classBuilder().ep(Dt).m(function (e, t, r, d) {
    return [et.getEndpointPlugin(r, e.getEndpointParameterInstructions())];
  }).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(ir).build() {}
  var ar = {
    CreateOAuth2TokenCommand: CreateOAuth2TokenCommand
  };
  class X extends G {}
  _.createAggregatedClient(ar, X);
  var ur = {
    AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
    INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
    INVALID_REQUEST: "INVALID_REQUEST",
    SERVER_ERROR: "server_error",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
  };
  Object.defineProperty(Q, "$Command", {
    enumerable: !0,
    get: function () {
      return _.Command;
    }
  });
  Object.defineProperty(Q, "__Client", {
    enumerable: !0,
    get: function () {
      return _.Client;
    }
  });
  Q.AccessDeniedException = tt;
  Q.CreateOAuth2TokenCommand = CreateOAuth2TokenCommand;
  Q.InternalServerException = rt;
  Q.OAuth2ErrorCode = ur;
  Q.Signin = X;
  Q.SigninClient = G;
  Q.SigninServiceException = A;
  Q.TooManyRequestsError = nt;
  Q.ValidationException = ot;
});
export default Sr();