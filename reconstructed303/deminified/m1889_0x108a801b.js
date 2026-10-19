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
import { jG } from "B:/~BUN/root/chunk-0s42pmjt.js";
import { Vc } from "B:/~BUN/root/chunk-bsy8eq8a.js";
import { RO } from "B:/~BUN/root/chunk-w57yz5h3.js";
import { wje } from "B:/~BUN/root/chunk-nx2e0pwm.js";
import { AO } from "B:/~BUN/root/chunk-ckxm3hbs.js";
import { xO } from "B:/~BUN/root/chunk-b3v0tc9c.js";
import { bg, sL } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { rC, rP } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var ue = R(function (Ce) {
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  Ce.resolveHttpAuthSchemeConfig = Ce.resolveStsAuthConfig = Ce.defaultSTSHttpAuthSchemeProvider = Ce.defaultSTSHttpAuthSchemeParametersProvider = void 0;
  var ve = WC(),
    k = AO(),
    ye = le(),
    _o = async (e, t, n) => ({
      operation: k.getSmithyContext(t).operation,
      region: (await k.normalizeProvider(e.region)()) || (() => {
        throw Error("expected `region` to be configured for `aws.auth#sigv4`");
      })()
    });
  Ce.defaultSTSHttpAuthSchemeParametersProvider = _o;
  function fo(e) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: {
        name: "sts",
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
  function So(e) {
    return {
      schemeId: "smithy.api#noAuth"
    };
  }
  var Po = e => {
    let t = [];
    switch (e.operation) {
      case "AssumeRoleWithWebIdentity":
        {
          t.push(So(e));
          break;
        }
      default:
        t.push(fo(e));
    }
    return t;
  };
  Ce.defaultSTSHttpAuthSchemeProvider = Po;
  var Eo = e => Object.assign(e, {
    stsClientCtor: ye.STSClient
  });
  Ce.resolveStsAuthConfig = Eo;
  var vo = e => {
    let t = Ce.resolveStsAuthConfig(e),
      n = ve.resolveAwsSdkSigV4Config(t);
    return Object.assign(n, {
      authSchemePreference: k.normalizeProvider(e.authSchemePreference ?? [])
    });
  };
  Ce.resolveHttpAuthSchemeConfig = vo;
});
var de = R(function (Re) {
  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  Re.commonParams = Re.resolveClientEndpointParameters = void 0;
  var Ao = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    useGlobalEndpoint: e.useGlobalEndpoint ?? !1,
    defaultSigningName: "sts"
  });
  Re.resolveClientEndpointParameters = Ao;
  Re.commonParams = {
    UseGlobalEndpoint: {
      type: "builtInParams",
      name: "useGlobalEndpoint"
    },
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
  };
});
var Je = R(function (Qe) {
  Object.defineProperty(Qe, "__esModule", {
    value: !0
  });
  Qe.ruleSet = void 0;
  var Fe = "required",
    o = "type",
    i = "fn",
    s = "argv",
    E = "ref",
    Te = !1,
    pe = !0,
    P = "booleanEquals",
    d = "stringEquals",
    name = "sigv4",
    signingName = "sts",
    signingRegion = "us-east-1",
    a = "endpoint",
    url = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
    f = "tree",
    O = "error",
    me = "getAttr",
    be = {
      [Fe]: !1,
      [o]: "string"
    },
    ge = {
      [Fe]: !0,
      default: !1,
      [o]: "boolean"
    },
    url_2 = {
      [E]: "Endpoint"
    },
    we = {
      [i]: "isSet",
      [s]: [{
        [E]: "Region"
      }]
    },
    p = {
      [E]: "Region"
    },
    qe = {
      [i]: "aws.partition",
      [s]: [p],
      assign: "PartitionResult"
    },
    Ke = {
      [E]: "UseFIPS"
    },
    Ge = {
      [E]: "UseDualStack"
    },
    endpoint = {
      url: "https://sts.amazonaws.com",
      properties: {
        authSchemes: [{
          name: name,
          signingName: signingName,
          signingRegion: signingRegion
        }]
      },
      headers: {}
    },
    _ = {},
    ke = {
      conditions: [{
        [i]: d,
        [s]: [p, "aws-global"]
      }],
      [a]: endpoint,
      [o]: a
    },
    ze = {
      [i]: P,
      [s]: [Ke, !0]
    },
    Ve = {
      [i]: P,
      [s]: [Ge, !0]
    },
    Oe = {
      [i]: me,
      [s]: [{
        [E]: "PartitionResult"
      }, "supportsFIPS"]
    },
    Be = {
      [E]: "PartitionResult"
    },
    He = {
      [i]: P,
      [s]: [!0, {
        [i]: me,
        [s]: [Be, "supportsDualStack"]
      }]
    },
    conditions = [{
      [i]: "isSet",
      [s]: [url_2]
    }],
    conditions_2 = [ze],
    conditions_3 = [Ve],
    Ro = {
      version: "1.0",
      parameters: {
        Region: be,
        UseDualStack: ge,
        UseFIPS: ge,
        Endpoint: be,
        UseGlobalEndpoint: ge
      },
      rules: [{
        conditions: [{
          [i]: P,
          [s]: [{
            [E]: "UseGlobalEndpoint"
          }, pe]
        }, {
          [i]: "not",
          [s]: conditions
        }, we, qe, {
          [i]: P,
          [s]: [Ke, Te]
        }, {
          [i]: P,
          [s]: [Ge, Te]
        }],
        rules: [{
          conditions: [{
            [i]: d,
            [s]: [p, "ap-northeast-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "ap-south-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "ap-southeast-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "ap-southeast-2"]
          }],
          endpoint: endpoint,
          [o]: a
        }, ke, {
          conditions: [{
            [i]: d,
            [s]: [p, "ca-central-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "eu-central-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "eu-north-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "eu-west-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "eu-west-2"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "eu-west-3"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "sa-east-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, signingRegion]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "us-east-2"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "us-west-1"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          conditions: [{
            [i]: d,
            [s]: [p, "us-west-2"]
          }],
          endpoint: endpoint,
          [o]: a
        }, {
          endpoint: {
            url: url,
            properties: {
              authSchemes: [{
                name: name,
                signingName: signingName,
                signingRegion: "{Region}"
              }]
            },
            headers: _
          },
          [o]: a
        }],
        [o]: f
      }, {
        conditions: conditions,
        rules: [{
          conditions: conditions_2,
          error: "Invalid Configuration: FIPS and custom endpoint are not supported",
          [o]: O
        }, {
          conditions: conditions_3,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          [o]: O
        }, {
          endpoint: {
            url: url_2,
            properties: _,
            headers: _
          },
          [o]: a
        }],
        [o]: f
      }, {
        conditions: [we],
        rules: [{
          conditions: [qe],
          rules: [{
            conditions: [ze, Ve],
            rules: [{
              conditions: [{
                [i]: P,
                [s]: [pe, Oe]
              }, He],
              rules: [{
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: _,
                  headers: _
                },
                [o]: a
              }],
              [o]: f
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              [o]: O
            }],
            [o]: f
          }, {
            conditions: conditions_2,
            rules: [{
              conditions: [{
                [i]: P,
                [s]: [Oe, pe]
              }],
              rules: [{
                conditions: [{
                  [i]: d,
                  [s]: [{
                    [i]: me,
                    [s]: [Be, "name"]
                  }, "aws-us-gov"]
                }],
                endpoint: {
                  url: "https://sts.{Region}.amazonaws.com",
                  properties: _,
                  headers: _
                },
                [o]: a
              }, {
                endpoint: {
                  url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                  properties: _,
                  headers: _
                },
                [o]: a
              }],
              [o]: f
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              [o]: O
            }],
            [o]: f
          }, {
            conditions: conditions_3,
            rules: [{
              conditions: [He],
              rules: [{
                endpoint: {
                  url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                  properties: _,
                  headers: _
                },
                [o]: a
              }],
              [o]: f
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              [o]: O
            }],
            [o]: f
          }, ke, {
            endpoint: {
              url: url,
              properties: _,
              headers: _
            },
            [o]: a
          }],
          [o]: f
        }],
        [o]: f
      }, {
        error: "Invalid Configuration: Missing Region",
        [o]: O
      }]
    };
  Qe.ruleSet = Ro;
});
var ot = R(function (et) {
  Object.defineProperty(et, "__esModule", {
    value: !0
  });
  et.defaultEndpointResolver = void 0;
  var Xe = dte(),
    H = H3(),
    Ze = Je(),
    Io = new H.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    }),
    To = (endpointParams, t = {}) => Io.get(endpointParams, () => H.resolveEndpoint(Ze.ruleSet, {
      endpointParams: endpointParams,
      logger: t.logger
    }));
  et.defaultEndpointResolver = To;
  H.customEndpointFunctions.aws = Xe.awsEndpointFunctions;
});
var pt = R(function (lt) {
  Object.defineProperty(lt, "__esModule", {
    value: !0
  });
  lt.getRuntimeConfig = void 0;
  var nt = WC(),
    rt = Qae(),
    it = HS(),
    st = Vc(),
    ct = jG(),
    M = rP(),
    K = rC(),
    at = ue(),
    ut = ot(),
    Do = e => ({
      apiVersion: "2011-06-15",
      base64Decoder: e?.base64Decoder ?? M.fromBase64,
      base64Encoder: e?.base64Encoder ?? M.toBase64,
      disableHostPrefix: e?.disableHostPrefix ?? !1,
      endpointProvider: e?.endpointProvider ?? ut.defaultEndpointResolver,
      extensions: e?.extensions ?? [],
      httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? at.defaultSTSHttpAuthSchemeProvider,
      httpAuthSchemes: e?.httpAuthSchemes ?? [{
        schemeId: "aws.auth#sigv4",
        identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
        signer: new nt.AwsSdkSigV4Signer()
      }, {
        schemeId: "smithy.api#noAuth",
        identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
        signer: new it.NoAuthSigner()
      }],
      logger: e?.logger ?? new st.NoOpLogger(),
      protocol: e?.protocol ?? new rt.AwsQueryProtocol({
        defaultNamespace: "com.amazonaws.sts",
        xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
        version: "2011-06-15"
      }),
      serviceId: e?.serviceId ?? "STS",
      urlParser: e?.urlParser ?? ct.parseUrl,
      utf8Decoder: e?.utf8Decoder ?? K.fromUtf8,
      utf8Encoder: e?.utf8Encoder ?? K.toUtf8
    });
  lt.getRuntimeConfig = Do;
});
var At = R(function (yt) {
  Object.defineProperty(yt, "__esModule", {
    value: !0
  });
  yt.getRuntimeConfig = void 0;
  var gt = wje(),
    bo = gt.__importDefault(San()),
    N = WC(),
    G = Yae(),
    v = WT(),
    mt = HS(),
    ht = Xae(),
    z = QU(),
    h = PO(),
    V = sL(),
    _t = Jae(),
    ft = ute(),
    St = pt(),
    Pt = Vc(),
    Et = Zae(),
    vt = Vc(),
    wo = e => {
      vt.emitWarningIfUnsupportedVersion(process.version);
      let defaultsMode = Et.resolveDefaultsModeConfig(e),
        n = () => defaultsMode().then(Pt.loadConfigsForDefaultMode),
        u = St.getRuntimeConfig(e);
      N.emitWarningIfUnsupportedVersion(process.version);
      let r = {
        profile: e?.profile,
        logger: u.logger
      };
      return {
        ...u,
        ...e,
        runtime: "node",
        defaultsMode: defaultsMode,
        authSchemePreference: e?.authSchemePreference ?? h.loadConfig(N.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, r),
        bodyLengthChecker: e?.bodyLengthChecker ?? _t.calculateBodyLength,
        defaultUserAgentProvider: e?.defaultUserAgentProvider ?? G.createDefaultUserAgentProvider({
          serviceId: u.serviceId,
          clientVersion: bo.default.version
        }),
        httpAuthSchemes: e?.httpAuthSchemes ?? [{
          schemeId: "aws.auth#sigv4",
          identityProvider: g => g.getIdentityProvider("aws.auth#sigv4") || (async l => await e.credentialDefaultProvider(l?.__config || {})()),
          signer: new N.AwsSdkSigV4Signer()
        }, {
          schemeId: "smithy.api#noAuth",
          identityProvider: g => g.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new mt.NoAuthSigner()
        }],
        maxAttempts: e?.maxAttempts ?? h.loadConfig(z.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
        region: e?.region ?? h.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, {
          ...v.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...r
        }),
        requestHandler: V.NodeHttpHandler.create(e?.requestHandler ?? n),
        retryMode: e?.retryMode ?? h.loadConfig({
          ...z.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: async () => (await n()).retryMode || ft.DEFAULT_RETRY_MODE
        }, e),
        sha256: e?.sha256 ?? ht.Hash.bind(null, "sha256"),
        streamCollector: e?.streamCollector ?? V.streamCollector,
        useDualstackEndpoint: e?.useDualstackEndpoint ?? h.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, r),
        useFipsEndpoint: e?.useFipsEndpoint ?? h.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, r),
        userAgentAppId: e?.userAgentAppId ?? h.loadConfig(G.NODE_APP_ID_CONFIG_OPTIONS, r)
      };
    };
  yt.getRuntimeConfig = wo;
});
var It = R(function (xt) {
  Object.defineProperty(xt, "__esModule", {
    value: !0
  });
  xt.resolveHttpAuthRuntimeConfig = xt.getHttpAuthExtensionConfiguration = void 0;
  var qo = e => {
    let {
      httpAuthSchemes: httpAuthSchemes,
      httpAuthSchemeProvider: httpAuthSchemeProvider,
      credentials: credentials
    } = e;
    return {
      setHttpAuthScheme(r) {
        let g = httpAuthSchemes.findIndex(item => item.schemeId === r.schemeId);
        if (g === -1) httpAuthSchemes.push(r);else httpAuthSchemes.splice(g, 1, r);
      },
      httpAuthSchemes() {
        return httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(r) {
        httpAuthSchemeProvider = r;
      },
      httpAuthSchemeProvider() {
        return httpAuthSchemeProvider;
      },
      setCredentials(r) {
        credentials = r;
      },
      credentials() {
        return credentials;
      }
    };
  };
  xt.getHttpAuthExtensionConfiguration = qo;
  var ko = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials()
  });
  xt.resolveHttpAuthRuntimeConfig = ko;
});
var bt = R(function (Tt) {
  Object.defineProperty(Tt, "__esModule", {
    value: !0
  });
  Tt.resolveRuntimeExtensions = void 0;
  var B = pte(),
    Q = bg(),
    Y = Vc(),
    J = It(),
    Ho = (e, t) => {
      let n = Object.assign(B.getAwsRegionExtensionConfiguration(e), Y.getDefaultExtensionConfiguration(e), Q.getHttpHandlerExtensionConfiguration(e), J.getHttpAuthExtensionConfiguration(e));
      return t.forEach(item => item.configure(n)), Object.assign(e, B.resolveAwsRegionExtensionConfiguration(n), Y.resolveDefaultRuntimeConfig(n), Q.resolveHttpHandlerRuntimeConfig(n), J.resolveHttpAuthRuntimeConfig(n));
    };
  Tt.resolveRuntimeExtensions = Ho;
});
var le = R(function (he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.STSClient = he.__Client = void 0;
  var X = Gae(),
    wt = Vae(),
    qt = qae(),
    Z = cte(),
    kt = WT(),
    W = HS(),
    Ot = RO(),
    Ht = Kae(),
    Nt = Zj(),
    ee = QU(),
    oe = Vc();
  Object.defineProperty(he, "__Client", {
    enumerable: !0,
    get: function () {
      return oe.Client;
    }
  });
  var te = ue(),
    Wt = de(),
    jt = At(),
    Ft = bt();
  class Ut extends oe.Client {
    config;
    constructor(...[e]) {
      let t = jt.getRuntimeConfig(e || {});
      super(t);
      this.initConfig = t;
      let n = Wt.resolveClientEndpointParameters(t),
        u = Z.resolveUserAgentConfig(n),
        r = ee.resolveRetryConfig(u),
        g = kt.resolveRegionConfig(r),
        l = X.resolveHostHeaderConfig(g),
        C = Nt.resolveEndpointConfig(l),
        A = te.resolveHttpAuthSchemeConfig(C),
        x = Ft.resolveRuntimeExtensions(A, e?.extensions || []);
      this.config = x, this.middlewareStack.use(Ot.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(Z.getUserAgentPlugin(this.config)), this.middlewareStack.use(ee.getRetryPlugin(this.config)), this.middlewareStack.use(Ht.getContentLengthPlugin(this.config)), this.middlewareStack.use(X.getHostHeaderPlugin(this.config)), this.middlewareStack.use(wt.getLoggerPlugin(this.config)), this.middlewareStack.use(qt.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(W.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: te.defaultSTSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async q => new W.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": q.credentials
        })
      })), this.middlewareStack.use(W.getHttpSigningPlugin(this.config));
    }
    destroy() {
      super.destroy();
    }
  }
  he.STSClient = Ut;
});
var VOo = R(function (ne) {
  var F = le(),
    U = Vc(),
    Mt = Zj(),
    $t = de(),
    y = RO(),
    _e = xO(),
    No = pte(),
    S = class e extends U.ServiceException {
      constructor(t) {
        super(t);
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Kt = class e extends S {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(t) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Gt = class e extends S {
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(t) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    zt = class e extends S {
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(t) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Vt = class e extends S {
      name = "RegionDisabledException";
      $fault = "client";
      constructor(t) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Bt = class e extends S {
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(t) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Qt = class e extends S {
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(t) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Yt = class e extends S {
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(t) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...t
        });
        Object.setPrototypeOf(this, e.prototype);
      }
    },
    Wo = "Arn",
    jo = "AccessKeyId",
    Fo = "AssumeRole",
    Uo = "AssumedRoleId",
    Lo = "AssumeRoleRequest",
    Mo = "AssumeRoleResponse",
    fe = "AssumedRoleUser",
    $o = "AssumeRoleWithWebIdentity",
    Ko = "AssumeRoleWithWebIdentityRequest",
    Go = "AssumeRoleWithWebIdentityResponse",
    zo = "Audience",
    Se = "Credentials",
    Vo = "ContextAssertion",
    Jt = "DurationSeconds",
    Bo = "Expiration",
    Qo = "ExternalId",
    Yo = "ExpiredTokenException",
    Jo = "IDPCommunicationErrorException",
    Xo = "IDPRejectedClaimException",
    Zo = "InvalidIdentityTokenException",
    en = "Key",
    tn = "MalformedPolicyDocumentException",
    Xt = "Policy",
    Zt = "PolicyArns",
    on = "ProviderArn",
    nn = "ProvidedContexts",
    rn = "ProvidedContextsListType",
    sn = "ProvidedContext",
    cn = "PolicyDescriptorType",
    an = "ProviderId",
    eo = "PackedPolicySize",
    un = "PackedPolicyTooLargeException",
    ln = "Provider",
    to = "RoleArn",
    dn = "RegionDisabledException",
    oo = "RoleSessionName",
    pn = "SecretAccessKey",
    gn = "SubjectFromWebIdentityToken",
    Pe = "SourceIdentity",
    mn = "SerialNumber",
    hn = "SessionToken",
    _n = "Tags",
    fn = "TokenCode",
    Sn = "TransitiveTagKeys",
    Pn = "Tag",
    En = "Value",
    vn = "WebIdentityToken",
    yn = "arn",
    Cn = "accessKeySecretType",
    I = "awsQueryError",
    T = "client",
    An = "clientTokenType",
    D = "error",
    b = "httpError",
    w = "message",
    xn = "policyDescriptorListType",
    no = "smithy.ts.sdk.synthetic.com.amazonaws.sts",
    Rn = "tagListType",
    c = "com.amazonaws.sts",
    In = [0, c, Cn, 8, 0],
    Tn = [0, c, An, 8, 0],
    ro = [3, c, fe, 0, [Uo, Wo], [0, 0]],
    Dn = [3, c, Lo, 0, [to, oo, Zt, Xt, Jt, _n, Sn, Qo, mn, fn, Pe, nn], [0, 0, () => so, 0, 1, () => Gn, 64, 0, 0, 0, 0, () => Kn]],
    bn = [3, c, Mo, 0, [Se, fe, eo, Pe], [[() => io, 0], () => ro, 1, 0]],
    wn = [3, c, Ko, 0, [to, oo, vn, an, Zt, Xt, Jt], [0, 0, [() => Tn, 0], 0, () => so, 0, 1]],
    qn = [3, c, Go, 0, [Se, gn, fe, eo, ln, zo, Pe], [[() => io, 0], 0, () => ro, 1, 0, 0, 0]],
    io = [3, c, Se, 0, [jo, pn, hn, Bo], [0, [() => In, 0], 0, 4]],
    kn = [-3, c, Yo, {
      [D]: T,
      [b]: 400,
      [I]: ["ExpiredTokenException", 400]
    }, [w], [0]];
  y.TypeRegistry.for(c).registerError(kn, Kt);
  var On = [-3, c, Jo, {
    [D]: T,
    [b]: 400,
    [I]: ["IDPCommunicationError", 400]
  }, [w], [0]];
  y.TypeRegistry.for(c).registerError(On, Yt);
  var Hn = [-3, c, Xo, {
    [D]: T,
    [b]: 403,
    [I]: ["IDPRejectedClaim", 403]
  }, [w], [0]];
  y.TypeRegistry.for(c).registerError(Hn, Bt);
  var Nn = [-3, c, Zo, {
    [D]: T,
    [b]: 400,
    [I]: ["InvalidIdentityToken", 400]
  }, [w], [0]];
  y.TypeRegistry.for(c).registerError(Nn, Qt);
  var Wn = [-3, c, tn, {
    [D]: T,
    [b]: 400,
    [I]: ["MalformedPolicyDocument", 400]
  }, [w], [0]];
  y.TypeRegistry.for(c).registerError(Wn, Gt);
  var jn = [-3, c, un, {
    [D]: T,
    [b]: 400,
    [I]: ["PackedPolicyTooLarge", 400]
  }, [w], [0]];
  y.TypeRegistry.for(c).registerError(jn, zt);
  var Fn = [3, c, cn, 0, [yn], [0]],
    Un = [3, c, sn, 0, [on, Vo], [0, 0]],
    Ln = [-3, c, dn, {
      [D]: T,
      [b]: 403,
      [I]: ["RegionDisabledException", 403]
    }, [w], [0]];
  y.TypeRegistry.for(c).registerError(Ln, Vt);
  var Mn = [3, c, Pn, 0, [en, En], [0, 0]],
    $n = [-3, no, "STSServiceException", 0, [], []];
  y.TypeRegistry.for(no).registerError($n, S);
  var so = [1, c, xn, 0, () => Fn],
    Kn = [1, c, rn, 0, () => Un],
    Gn = [1, c, Rn, 0, () => Mn],
    zn = [9, c, Fo, 0, () => Dn, () => bn],
    Vn = [9, c, $o, 0, () => wn, () => qn];
  class AssumeRoleCommand extends U.Command.classBuilder().ep($t.commonParams).m(function (e, t, n, u) {
    return [Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(zn).build() {}
  class AssumeRoleWithWebIdentityCommand extends U.Command.classBuilder().ep($t.commonParams).m(function (e, t, n, u) {
    return [Mt.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
  }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(Vn).build() {}
  var Bn = {
    AssumeRoleCommand: AssumeRoleCommand,
    AssumeRoleWithWebIdentityCommand: AssumeRoleWithWebIdentityCommand
  };
  class Ee extends F.STSClient {}
  U.createAggregatedClient(Bn, Ee);
  var co = e => {
      if (typeof e?.Arn === "string") {
        let t = e.Arn.split(":");
        if (t.length > 4 && t[4] !== "") return t[4];
      }
      return;
    },
    ao = async (e, t, n, u = {}) => {
      let r = typeof e === "function" ? await e() : e,
        g = typeof t === "function" ? await t() : t,
        l = await No.stsRegionDefaultResolver(u)();
      return n?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${r} (credential provider clientConfig)`, `${g} (contextual client)`, `${l} (STS default: AWS_REGION, profile region, or us-east-1)`), r ?? g ?? l;
    },
    Qn = (e, t) => {
      let n, u;
      return async (r, g) => {
        if (u = r, !n) {
          let {
              logger = e?.parentClientConfig?.logger,
              profile = e?.parentClientConfig?.profile,
              region: region,
              requestHandler = e?.parentClientConfig?.requestHandler,
              credentialProviderLogger: credentialProviderLogger,
              userAgentAppId = e?.parentClientConfig?.userAgentAppId
            } = e,
            region_2 = await ao(region, e?.parentClientConfig?.region, credentialProviderLogger, {
              logger: logger,
              profile: profile
            }),
            ho = !uo(requestHandler);
          n = new t({
            ...e,
            userAgentAppId: userAgentAppId,
            profile: profile,
            credentialDefaultProvider: () => async () => u,
            region: region_2,
            requestHandler: ho ? requestHandler : void 0,
            logger: logger
          });
        }
        let {
          Credentials: Credentials,
          AssumedRoleUser: AssumedRoleUser
        } = await n.send(new AssumeRoleCommand(g));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${g.RoleArn}`);
        let accountId = co(AssumedRoleUser),
          x = {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            ...(Credentials.CredentialScope && {
              credentialScope: Credentials.CredentialScope
            }),
            ...(accountId && {
              accountId: accountId
            })
          };
        return _e.setCredentialFeature(x, "CREDENTIALS_STS_ASSUME_ROLE", "i"), x;
      };
    },
    Yn = (e, t) => {
      let n;
      return async u => {
        if (!n) {
          let {
              logger: logger_2 = e?.parentClientConfig?.logger,
              profile: profile_2 = e?.parentClientConfig?.profile,
              region: region_3,
              requestHandler: requestHandler_2 = e?.parentClientConfig?.requestHandler,
              credentialProviderLogger: credentialProviderLogger_2,
              userAgentAppId: userAgentAppId_2 = e?.parentClientConfig?.userAgentAppId
            } = e,
            region_4 = await ao(region_3, e?.parentClientConfig?.region, credentialProviderLogger_2, {
              logger: logger_2,
              profile: profile_2
            }),
            ae = !uo(requestHandler_2);
          n = new t({
            ...e,
            userAgentAppId: userAgentAppId_2,
            profile: profile_2,
            region: region_4,
            requestHandler: ae ? requestHandler_2 : void 0,
            logger: logger_2
          });
        }
        let {
          Credentials: Credentials_2,
          AssumedRoleUser: AssumedRoleUser_2
        } = await n.send(new AssumeRoleWithWebIdentityCommand(u));
        if (!Credentials_2 || !Credentials_2.AccessKeyId || !Credentials_2.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${u.RoleArn}`);
        let accountId_2 = co(AssumedRoleUser_2),
          C = {
            accessKeyId: Credentials_2.AccessKeyId,
            secretAccessKey: Credentials_2.SecretAccessKey,
            sessionToken: Credentials_2.SessionToken,
            expiration: Credentials_2.Expiration,
            ...(Credentials_2.CredentialScope && {
              credentialScope: Credentials_2.CredentialScope
            }),
            ...(accountId_2 && {
              accountId: accountId_2
            })
          };
        if (accountId_2) _e.setCredentialFeature(C, "RESOLVED_ACCOUNT_ID", "T");
        return _e.setCredentialFeature(C, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), C;
      };
    },
    uo = e => e?.metadata?.handlerProtocol === "h2",
    lo = (e, t) => {
      if (!t) return e;else return class extends e {
        constructor(u) {
          super(u);
          for (let r of t) this.middlewareStack.use(r);
        }
      };
    },
    po = (e = {}, t) => Qn(e, lo(F.STSClient, t)),
    go = (e = {}, t) => Yn(e, lo(F.STSClient, t)),
    Jn = e => t => e({
      roleAssumer: po(t),
      roleAssumerWithWebIdentity: go(t),
      ...t
    });
  Object.defineProperty(ne, "$Command", {
    enumerable: !0,
    get: function () {
      return U.Command;
    }
  });
  ne.AssumeRoleCommand = AssumeRoleCommand;
  ne.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;
  ne.ExpiredTokenException = Kt;
  ne.IDPCommunicationErrorException = Yt;
  ne.IDPRejectedClaimException = Bt;
  ne.InvalidIdentityTokenException = Qt;
  ne.MalformedPolicyDocumentException = Gt;
  ne.PackedPolicyTooLargeException = zt;
  ne.RegionDisabledException = Vt;
  ne.STS = Ee;
  ne.STSServiceException = S;
  ne.decorateDefaultCredentialProvider = Jn;
  ne.getDefaultRoleAssumer = po;
  ne.getDefaultRoleAssumerWithWebIdentity = go;
  Object.keys(F).forEach(function (item) {
    if (item !== "default" && !Object.prototype.hasOwnProperty.call(ne, item)) Object.defineProperty(ne, item, {
      enumerable: !0,
      get: function () {
        return F[item];
      }
    });
  });
});
export { VOo };