// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { dmi, ure } from "B:/~BUN/root/chunk-bf2nn51k.js";
import { tNe } from "B:/~BUN/root/chunk-78494p3w.js";
import { by, lk, nNe, FFn, NTr, HFn, FTr, Wvs, cgo, zvs, Gvs, ugo, Vvs, Kvs, qvs, Yvs } from "B:/~BUN/root/chunk-5jnfzc83.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { M } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var T = M(function (z) {
  Object.defineProperty(z, "__esModule", {
    value: !0
  });
  z.dynamicAnchor = void 0;
  var A = by(),
    Te = nNe(),
    O = FTr(),
    G = cgo(),
    Fe = {
      keyword: "$dynamicAnchor",
      schemaType: "string",
      code: e => U(e, e.schema)
    };
  function U(e, r) {
    let {
      gen: gen,
      it: it_2
    } = e;
    it_2.schemaEnv.root.dynamicAnchors[r] = !0;
    let o = A._`${Te.default.dynamicAnchors}${A.getProperty(r)}`,
      i = it_2.errSchemaPath === "#" ? it_2.validateName : Ve(e);
    gen.if(A._`!${o}`, () => gen.assign(o, i));
  }
  z.dynamicAnchor = U;
  function Ve(e) {
    let {
        schemaEnv: schemaEnv,
        schema: schema,
        self: self
      } = e.it,
      {
        root: root,
        baseId: baseId,
        localRefs: localRefs,
        meta: meta
      } = schemaEnv.root,
      {
        schemaId: schemaId
      } = self.opts,
      p = new O.SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId,
        localRefs: localRefs,
        meta: meta
      });
    return O.compileSchema.call(self, p), G.getValidate(e, p);
  }
  z.default = Fe;
});
var F = M(function (Z) {
  Object.defineProperty(Z, "__esModule", {
    value: !0
  });
  Z.dynamicRef = void 0;
  var k = by(),
    We = nNe(),
    x = cgo(),
    Le = {
      keyword: "$dynamicRef",
      schemaType: "string",
      code: e => Y(e, e.schema)
    };
  function Y(e, r) {
    let {
      gen: gen_2,
      keyword: keyword,
      it: it_3
    } = e;
    if (r[0] !== "#") throw Error(`"${keyword}" only supports hash fragment reference`);
    let i = r.slice(1);
    if (it_3.allErrors) m();else {
      let s = gen_2.let("valid", !1);
      m(s), e.ok(s);
    }
    function m(s) {
      if (it_3.schemaEnv.root.dynamicAnchors[i]) {
        let p = gen_2.let("_v", k._`${We.default.dynamicAnchors}${k.getProperty(i)}`);
        gen_2.if(p, l(p, s), l(it_3.validateName, s));
      } else l(it_3.validateName, s)();
    }
    function l(s, p) {
      return p ? () => gen_2.block(() => {
        x.callRef(e, s), gen_2.let(p, !0);
      }) : () => x.callRef(e, s);
    }
  }
  Z.dynamicRef = Y;
  Z.default = Le;
});
var te = M(function (ee) {
  Object.defineProperty(ee, "__esModule", {
    value: !0
  });
  var J = T(),
    Q = lk(),
    Ke = {
      keyword: "$recursiveAnchor",
      schemaType: "boolean",
      code(e) {
        if (e.schema) J.dynamicAnchor(e, "");else Q.checkStrictMode(e.it, "$recursiveAnchor: false is ignored");
      }
    };
  ee.default = Ke;
});
var ne = M(function (ae) {
  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  var re = F(),
    Ue = {
      keyword: "$recursiveRef",
      schemaType: "string",
      code: e => re.dynamicRef(e, e.schema)
    };
  ae.default = Ue;
});
var se = M(function (oe) {
  Object.defineProperty(oe, "__esModule", {
    value: !0
  });
  var Xe = T(),
    Ye = F(),
    Ze = te(),
    Be = ne(),
    Je = [Xe.default, Ye.default, Ze.default, Be.default];
  oe.default = Je;
});
var ce = M(function (ie) {
  Object.defineProperty(ie, "__esModule", {
    value: !0
  });
  var I = ugo(),
    et = {
      keyword: "dependentRequired",
      type: "object",
      schemaType: "object",
      error: I.error,
      code: e => I.validatePropertyDeps(e)
    };
  ie.default = et;
});
var me = M(function (de) {
  Object.defineProperty(de, "__esModule", {
    value: !0
  });
  var ue = ugo(),
    rt = {
      keyword: "dependentSchemas",
      type: "object",
      schemaType: "object",
      code: e => ue.validateSchemaDeps(e)
    };
  de.default = rt;
});
var pe = M(function (fe) {
  Object.defineProperty(fe, "__esModule", {
    value: !0
  });
  var le = lk(),
    nt = {
      keyword: ["maxContains", "minContains"],
      type: "array",
      schemaType: "number",
      code({
        keyword: keyword_2,
        parentSchema: parentSchema,
        it: it_4
      }) {
        if (parentSchema.contains === void 0) le.checkStrictMode(it_4, `"${keyword_2}" without "contains" is ignored`);
      }
    };
  fe.default = nt;
});
var ye = M(function (he) {
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  var st = ce(),
    ct = me(),
    ut = pe(),
    dt = [st.default, ct.default, ut.default];
  he.default = dt;
});
var ge = M(function ($e) {
  Object.defineProperty($e, "__esModule", {
    value: !0
  });
  var y = by(),
    N = lk(),
    lt = nNe(),
    error = {
      message: "must NOT have unevaluated properties",
      params: ({
        params: params
      }) => y._`{unevaluatedProperty: ${params.unevaluatedProperty}}`
    },
    pt = {
      keyword: "unevaluatedProperties",
      type: "object",
      schemaType: ["boolean", "object"],
      trackErrors: !0,
      error: error,
      code(e) {
        let {
          gen: gen_3,
          schema: schema_2,
          data: data,
          errsCount: errsCount,
          it: it_5
        } = e;
        if (!errsCount) throw Error("ajv implementation error");
        let {
          allErrors: allErrors,
          props: props
        } = it_5;
        if (props instanceof y.Name) gen_3.if(y._`${props} !== true`, () => gen_3.forIn("key", data, h => gen_3.if(p(props, h), () => s(h))));else if (props !== !0) gen_3.forIn("key", data, h => props === void 0 ? s(h) : gen_3.if(g(props, h), () => s(h)));
        it_5.props = !0, e.ok(y._`${errsCount} === ${lt.default.errors}`);
        function s(h) {
          if (schema_2 === !1) {
            if (e.setParams({
              unevaluatedProperty: h
            }), e.error(), !allErrors) gen_3.break();
            return;
          }
          if (!N.alwaysValidSchema(it_5, schema_2)) {
            let P = gen_3.name("valid");
            if (e.subschema({
              keyword: "unevaluatedProperties",
              dataProp: h,
              dataPropType: N.Type.Str
            }, P), !allErrors) gen_3.if(y.not(P), () => gen_3.break());
          }
        }
        function p(h, P) {
          return y._`!${h} || !${h}[${P}]`;
        }
        function g(h, P) {
          let u = [];
          for (let f in h) if (h[f] === !0) u.push(y._`${P} !== ${f}`);
          return y.and(...u);
        }
      }
    };
  $e.default = pt;
});
var ve = M(function (be) {
  Object.defineProperty(be, "__esModule", {
    value: !0
  });
  var b = by(),
    C = lk(),
    error_2 = {
      message: ({
        params: {
          len: len
        }
      }) => b.str`must NOT have more than ${len} items`,
      params: ({
        params: {
          len: len_2
        }
      }) => b._`{limit: ${len_2}}`
    },
    $t = {
      keyword: "unevaluatedItems",
      type: "array",
      schemaType: ["boolean", "object"],
      error: error_2,
      code(e) {
        let {
            gen: gen_4,
            schema: schema_3,
            data: data_2,
            it: it_6
          } = e,
          len_3 = it_6.items || 0;
        if (len_3 === !0) return;
        let m = gen_4.const("len", b._`${data_2}.length`);
        if (schema_3 === !1) e.setParams({
          len: len_3
        }), e.fail(b._`${m} > ${len_3}`);else if (typeof schema_3 == "object" && !C.alwaysValidSchema(it_6, schema_3)) {
          let s = gen_4.var("valid", b._`${m} <= ${len_3}`);
          gen_4.if(b.not(s), () => l(s, len_3)), e.ok(s);
        }
        it_6.items = !0;
        function l(s, p) {
          gen_4.forRange("i", p, m, dataProp => {
            if (e.subschema({
              keyword: "unevaluatedItems",
              dataProp: dataProp,
              dataPropType: C.Type.Num
            }, s), !it_6.allErrors) gen_4.if(b.not(s), () => gen_4.break());
          });
        }
      }
    };
  be.default = $t;
});
var je = M(function (_e) {
  Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  var bt = ge(),
    vt = ve(),
    _t = [bt.default, vt.default];
  _e.default = _t;
});
var qe = M(function (Pe) {
  Object.defineProperty(Pe, "__esModule", {
    value: !0
  });
  var Pt = zvs(),
    qt = Gvs(),
    At = Vvs(),
    Rt = se(),
    St = ye(),
    wt = je(),
    Ot = Kvs(),
    E = qvs(),
    kt = [Rt.default, Pt.default, qt.default, (0, At.default)(!0), Ot.default, E.metadataVocabulary, E.contentVocabulary, St.default, wt.default];
  Pe.default = kt;
});
var Ae = M(function (qr, Mt) {
  Mt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/schema",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/core": !0,
      "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
      "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
      "https://json-schema.org/draft/2020-12/vocab/validation": !0,
      "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
      "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
      "https://json-schema.org/draft/2020-12/vocab/content": !0
    },
    $dynamicAnchor: "meta",
    title: "Core and Validation specifications meta-schema",
    allOf: [{
      $ref: "meta/core"
    }, {
      $ref: "meta/applicator"
    }, {
      $ref: "meta/unevaluated"
    }, {
      $ref: "meta/validation"
    }, {
      $ref: "meta/meta-data"
    }, {
      $ref: "meta/format-annotation"
    }, {
      $ref: "meta/content"
    }],
    type: ["object", "boolean"],
    $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
    properties: {
      definitions: {
        $comment: '"definitions" has been replaced by "$defs".',
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        deprecated: !0,
        default: {}
      },
      dependencies: {
        $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
        type: "object",
        additionalProperties: {
          anyOf: [{
            $dynamicRef: "#meta"
          }, {
            $ref: "meta/validation#/$defs/stringArray"
          }]
        },
        deprecated: !0,
        default: {}
      },
      $recursiveAnchor: {
        $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
        $ref: "meta/core#/$defs/anchorString",
        deprecated: !0
      },
      $recursiveRef: {
        $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
        $ref: "meta/core#/$defs/uriReferenceString",
        deprecated: !0
      }
    }
  };
});
var Re = M(function (Ar, It) {
  It.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/applicator",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/applicator": !0
    },
    $dynamicAnchor: "meta",
    title: "Applicator vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      prefixItems: {
        $ref: "#/$defs/schemaArray"
      },
      items: {
        $dynamicRef: "#meta"
      },
      contains: {
        $dynamicRef: "#meta"
      },
      additionalProperties: {
        $dynamicRef: "#meta"
      },
      properties: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        default: {}
      },
      patternProperties: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        propertyNames: {
          format: "regex"
        },
        default: {}
      },
      dependentSchemas: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        },
        default: {}
      },
      propertyNames: {
        $dynamicRef: "#meta"
      },
      if: {
        $dynamicRef: "#meta"
      },
      then: {
        $dynamicRef: "#meta"
      },
      else: {
        $dynamicRef: "#meta"
      },
      allOf: {
        $ref: "#/$defs/schemaArray"
      },
      anyOf: {
        $ref: "#/$defs/schemaArray"
      },
      oneOf: {
        $ref: "#/$defs/schemaArray"
      },
      not: {
        $dynamicRef: "#meta"
      }
    },
    $defs: {
      schemaArray: {
        type: "array",
        minItems: 1,
        items: {
          $dynamicRef: "#meta"
        }
      }
    }
  };
});
var Se = M(function (Rr, Nt) {
  Nt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0
    },
    $dynamicAnchor: "meta",
    title: "Unevaluated applicator vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      unevaluatedItems: {
        $dynamicRef: "#meta"
      },
      unevaluatedProperties: {
        $dynamicRef: "#meta"
      }
    }
  };
});
var we = M(function (Sr, Ct) {
  Ct.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/content",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/content": !0
    },
    $dynamicAnchor: "meta",
    title: "Content vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      contentEncoding: {
        type: "string"
      },
      contentMediaType: {
        type: "string"
      },
      contentSchema: {
        $dynamicRef: "#meta"
      }
    }
  };
});
var Oe = M(function (wr, Et) {
  Et.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/core",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/core": !0
    },
    $dynamicAnchor: "meta",
    title: "Core vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      $id: {
        $ref: "#/$defs/uriReferenceString",
        $comment: "Non-empty fragments not allowed.",
        pattern: "^[^#]*#?$"
      },
      $schema: {
        $ref: "#/$defs/uriString"
      },
      $ref: {
        $ref: "#/$defs/uriReferenceString"
      },
      $anchor: {
        $ref: "#/$defs/anchorString"
      },
      $dynamicRef: {
        $ref: "#/$defs/uriReferenceString"
      },
      $dynamicAnchor: {
        $ref: "#/$defs/anchorString"
      },
      $vocabulary: {
        type: "object",
        propertyNames: {
          $ref: "#/$defs/uriString"
        },
        additionalProperties: {
          type: "boolean"
        }
      },
      $comment: {
        type: "string"
      },
      $defs: {
        type: "object",
        additionalProperties: {
          $dynamicRef: "#meta"
        }
      }
    },
    $defs: {
      anchorString: {
        type: "string",
        pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
      },
      uriString: {
        type: "string",
        format: "uri"
      },
      uriReferenceString: {
        type: "string",
        format: "uri-reference"
      }
    }
  };
});
var ke = M(function (Or, Tt) {
  Tt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0
    },
    $dynamicAnchor: "meta",
    title: "Format vocabulary meta-schema for annotation results",
    type: ["object", "boolean"],
    properties: {
      format: {
        type: "string"
      }
    }
  };
});
var xe = M(function (kr, Ft) {
  Ft.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/meta-data": !0
    },
    $dynamicAnchor: "meta",
    title: "Meta-data vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      title: {
        type: "string"
      },
      description: {
        type: "string"
      },
      default: !0,
      deprecated: {
        type: "boolean",
        default: !1
      },
      readOnly: {
        type: "boolean",
        default: !1
      },
      writeOnly: {
        type: "boolean",
        default: !1
      },
      examples: {
        type: "array",
        items: !0
      }
    }
  };
});
var Me = M(function (xr, Vt) {
  Vt.exports = {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: "https://json-schema.org/draft/2020-12/meta/validation",
    $vocabulary: {
      "https://json-schema.org/draft/2020-12/vocab/validation": !0
    },
    $dynamicAnchor: "meta",
    title: "Validation vocabulary meta-schema",
    type: ["object", "boolean"],
    properties: {
      type: {
        anyOf: [{
          $ref: "#/$defs/simpleTypes"
        }, {
          type: "array",
          items: {
            $ref: "#/$defs/simpleTypes"
          },
          minItems: 1,
          uniqueItems: !0
        }]
      },
      const: !0,
      enum: {
        type: "array",
        items: !0
      },
      multipleOf: {
        type: "number",
        exclusiveMinimum: 0
      },
      maximum: {
        type: "number"
      },
      exclusiveMaximum: {
        type: "number"
      },
      minimum: {
        type: "number"
      },
      exclusiveMinimum: {
        type: "number"
      },
      maxLength: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minLength: {
        $ref: "#/$defs/nonNegativeIntegerDefault0"
      },
      pattern: {
        type: "string",
        format: "regex"
      },
      maxItems: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minItems: {
        $ref: "#/$defs/nonNegativeIntegerDefault0"
      },
      uniqueItems: {
        type: "boolean",
        default: !1
      },
      maxContains: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minContains: {
        $ref: "#/$defs/nonNegativeInteger",
        default: 1
      },
      maxProperties: {
        $ref: "#/$defs/nonNegativeInteger"
      },
      minProperties: {
        $ref: "#/$defs/nonNegativeIntegerDefault0"
      },
      required: {
        $ref: "#/$defs/stringArray"
      },
      dependentRequired: {
        type: "object",
        additionalProperties: {
          $ref: "#/$defs/stringArray"
        }
      }
    },
    $defs: {
      nonNegativeInteger: {
        type: "integer",
        minimum: 0
      },
      nonNegativeIntegerDefault0: {
        $ref: "#/$defs/nonNegativeInteger",
        default: 0
      },
      simpleTypes: {
        enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
      },
      stringArray: {
        type: "array",
        items: {
          type: "string"
        },
        uniqueItems: !0,
        default: []
      }
    }
  };
});
var Ne = M(function (Ie) {
  Object.defineProperty(Ie, "__esModule", {
    value: !0
  });
  var Dt = Ae(),
    Wt = Re(),
    Lt = Se(),
    Ht = we(),
    Kt = Oe(),
    Gt = ke(),
    Ut = xe(),
    zt = Me(),
    Xt = ["/properties"];
  function Yt(e) {
    return [Dt, Wt, Lt, Ht, Kt, r(this, Gt), Ut, r(this, zt)].forEach(item => this.addMetaSchema(item, void 0, !1)), this;
    function r(a, n) {
      return e ? a.$dataMetaSchema(n, Xt) : n;
    }
  }
  Ie.default = Yt;
});
var Ce = M(function (v, D) {
  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.MissingRefError = v.ValidationError = v.CodeGen = v.Name = v.nil = v.stringify = v.str = v._ = v.KeywordCxt = v.Ajv2020 = void 0;
  var Bt = Wvs(),
    Jt = qe(),
    Qt = Yvs(),
    er = Ne(),
    V = "https://json-schema.org/draft/2020-12/schema";
  class S extends Bt.default {
    constructor(e = {}) {
      super({
        ...e,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      if (super._addVocabularies(), Jt.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(Qt.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let {
        $data: $data,
        meta: meta_2
      } = this.opts;
      if (!meta_2) return;
      er.default.call(this, $data), this.refs["http://json-schema.org/schema"] = V;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(V) ? V : void 0);
    }
  }
  v.Ajv2020 = S;
  D.exports = v = S;
  D.exports.Ajv2020 = S;
  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.default = S;
  var tr = FFn();
  Object.defineProperty(v, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return tr.KeywordCxt;
    }
  });
  var R = by();
  Object.defineProperty(v, "_", {
    enumerable: !0,
    get: function () {
      return R._;
    }
  });
  Object.defineProperty(v, "str", {
    enumerable: !0,
    get: function () {
      return R.str;
    }
  });
  Object.defineProperty(v, "stringify", {
    enumerable: !0,
    get: function () {
      return R.stringify;
    }
  });
  Object.defineProperty(v, "nil", {
    enumerable: !0,
    get: function () {
      return R.nil;
    }
  });
  Object.defineProperty(v, "Name", {
    enumerable: !0,
    get: function () {
      return R.Name;
    }
  });
  Object.defineProperty(v, "CodeGen", {
    enumerable: !0,
    get: function () {
      return R.CodeGen;
    }
  });
  var rr = NTr();
  Object.defineProperty(v, "ValidationError", {
    enumerable: !0,
    get: function () {
      return rr.default;
    }
  });
  var ar = HFn();
  Object.defineProperty(v, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return ar.default;
    }
  });
});
var Ee = "https://json-schema.org/draft/2020-12/schema",
  W = 5,
  weakMap = new WeakMap();
function sr(e, {
  tool: tool,
  feature: feature
}) {
  if (!it(e)) return null;
  let n = weakMap.get(e);
  if (n !== void 0) return n;
  if (tNe()) return t(`[${tool}] input schema not checked before the call: sessions that share a process compile no schemas, so the server checks it`), weakMap.set(e, null), null;
  let o = null,
    $schema = e.$schema;
  if ($schema === void 0 || $schema === Ee || $schema === `${Ee}#`) try {
    let {
      Ajv2020: Ajv2020
    } = Ce();
    o = new Ajv2020({
      allErrors: !0,
      strict: !1,
      validateFormats: !1
    }).compile(e);
  } catch (error) {
    t(`[${tool}] input schema not checked: Ajv could not compile it: ${d(error)}`, {
      level: "warn"
    });
  } else t(`[${tool}] input schema not checked: it declares ${_($schema)}, and only draft 2020-12 is checked`, {
    level: "warn"
  });
  if (o === null) c(feature, "input_schema_not_checked");
  return weakMap.set(e, o), o;
}
var ir = new Set(["allOf", "anyOf", "contains", "if", "oneOf"]),
  cr = {
    array: "a list",
    boolean: "true or false",
    integer: "a whole number",
    number: "a number",
    object: "an object",
    string: "text"
  };
function Fir(e, r, a) {
  let n = sr(r, a);
  if (n === null || n(e)) return;
  let o = it(r) && it(r.properties) ? Object.keys(r.properties) : [],
    i = new Set(it(r) && Array.isArray(r.required) ? r.required : []),
    {
      ignoreInside: ignoreInside
    } = a,
    l = (n.errors ?? []).filter(item => ignoreInside === void 0 || !item.instancePath.startsWith(`/${ignoreInside}/`) && !(item.instancePath === `/${ignoreInside}` && ir.has(item.keyword)));
  if (l.length === 0) return;
  let s = l.flatMap(item => {
      let additionalProperty = item.params.additionalProperty;
      return item.keyword === "additionalProperties" && item.instancePath === "" && typeof additionalProperty === "string" ? [additionalProperty] : [];
    }),
    p = new Map(s.map(item => [item, o.find(f => ur(item, f))])),
    g = L([...s.map(item => {
      let f = p.get(item);
      return `it has no argument ${ure(item)}${f === void 0 ? "" : ` (did you mean ${ure(f)}?)`}`;
    }), ...l.flatMap(item => {
      let f = dmi(item.instancePath),
        params_2 = item.params;
      switch (item.keyword) {
        case "additionalProperties":
          return f === void 0 ? [] : [`${f} has no field ${ure(String(params_2.additionalProperty))}`];
        case "required":
          {
            let q = String(params_2.missingProperty);
            if (f !== void 0) return [`${f} needs the field ${ure(q)}`];
            return [...p.values()].includes(q) ? [] : [`the argument ${ure(q)} is required`];
          }
        case "type":
          {
            let q = (Array.isArray(params_2.type) ? params_2.type : [params_2.type]).filter(item => item !== "null");
            return q.length === 0 ? [] : [`${f ?? "the arguments"} must be ${q.map(item => cr[String(item)] ?? String(item)).join(" or ")}`];
          }
        case "minLength":
          return [params_2.limit === 1 ? `${f ?? "the arguments"} must not be empty` : `${f ?? "the arguments"} must be at least ${String(params_2.limit)} characters`];
        case "maxLength":
          return [`${f ?? "the arguments"} must be at most ${String(params_2.limit)} characters`];
        case "maxItems":
          return [`${f ?? "the arguments"} must have at most ${String(params_2.limit)} entries`];
        case "enum":
          if (Array.isArray(params_2.allowedValues)) return [`${f ?? "the arguments"} must be one of ${params_2.allowedValues.map(item => _(item)).join(", ")}`];
          break;
      }
      return [`${f ?? "the arguments"} ${item.message ?? "are not valid"}`];
    })]);
  if (g.length === 0) return;
  let h = g.length > W ? `, and ${g.length - W} more` : "",
    P = o.map(item => i.has(item) ? `${item} (required)` : item);
  return {
    listed: `${g.slice(0, W).join("; ")}${h}`,
    takes: P.length === 0 ? "" : ` ${a.tool} takes ${P.join(", ")}.`
  };
}
function ur(e, r) {
  let a = e.toLowerCase(),
    n = r.toLowerCase();
  return a === n || n.endsWith(`_${a}`) || n.startsWith(`${a}_`) || a.endsWith(`_${n}`) || a.startsWith(`${n}_`);
}
import { isAbsolute as dr } from "path";
var D1e = 4096;
function h6t(e, r) {
  let {
    tool: tool_2,
    local: local,
    ref: ref,
    refWord: refWord,
    maxFiles: maxFiles,
    nothingDone: nothingDone
  } = r;
  if (!Array.isArray(e)) return K(r);
  if (e.length > maxFiles) return {
    error: `${tool_2} takes at most ${maxFiles} files; this call has ${e.length}. ${nothingDone}`,
    code: "too_many_files"
  };
  let s = [];
  for (let p of e) {
    if (!it(p)) return K(r);
    if (p[ref] !== void 0) return {
      error: `${tool_2} file entries must give a \`${local}\`; this client uploads the file and fills in the ${refWord} itself. If these ${refWord}s came from an approval given before Claude Code restarted, that approval cannot be reused: call ${tool_2} again with paths. ${nothingDone}`,
      code: `model_${ref}`
    };
    let g = p[local];
    if (typeof g !== "string" || g === "" || g.length > D1e) return K(r);
    if (!dr(g)) return {
      error: `Cannot attach "${g}": ${tool_2} file paths must be absolute paths as this session sees them. ${nothingDone}`,
      code: "relative_path"
    };
    s.push(g);
  }
  return s;
}
function K({
  tool: tool_3,
  arg: arg,
  local: local_2,
  nothingDone: nothingDone_2
}) {
  return {
    error: `${tool_3} \`${arg}\` must be a list of objects, each with a \`${local_2}\` of at most ${D1e} characters, such as [{"${local_2}": "/absolute/path/to/report.csv"}]. ${nothingDone_2}`,
    code: "bad_entry"
  };
}
export { Fir, D1e, h6t };