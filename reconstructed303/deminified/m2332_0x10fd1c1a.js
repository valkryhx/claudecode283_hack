// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { L, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { sk, f0e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O, ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { At } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { ju } from "B:/~BUN/root/chunk-gyr2a6wz.js";
import { p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _f } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Ni } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { m5e, j5e } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { Uge } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { kve } from "B:/~BUN/root/chunk-vd11ggb1.js";
import { Dm, ab, Eve, dnn, hWn, cnn, yWn, Pvo, XCr, Ovo, Ivo, JCr, Mvo, Dvo, Lvo, Nvo } from "B:/~BUN/root/chunk-h7v3htsh.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var V = R(function (ee) {
  Object.defineProperty(ee, "__esModule", {
    value: !0
  });
  ee.dynamicAnchor = void 0;
  var w = Dm(),
    Ye = Eve(),
    E = yWn(),
    J = XCr(),
    Be = {
      keyword: "$dynamicAnchor",
      schemaType: "string",
      code: e => Q(e, e.schema)
    };
  function Q(e, r) {
    let {
      gen: gen,
      it: it_2
    } = e;
    it_2.schemaEnv.root.dynamicAnchors[r] = !0;
    let i = w._`${Ye.default.dynamicAnchors}${w.getProperty(r)}`,
      s = it_2.errSchemaPath === "#" ? it_2.validateName : Ze(e);
    gen.if(w._`!${i}`, () => gen.assign(i, s));
  }
  ee.dynamicAnchor = Q;
  function Ze(e) {
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
      h = new E.SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId,
        localRefs: localRefs,
        meta: meta
      });
    return E.compileSchema.call(self, h), J.getValidate(e, h);
  }
  ee.default = Be;
});
var W = R(function (ae) {
  Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  ae.dynamicRef = void 0;
  var k = Dm(),
    Qe = Eve(),
    I = XCr(),
    et = {
      keyword: "$dynamicRef",
      schemaType: "string",
      code: e => re(e, e.schema)
    };
  function re(e, r) {
    let {
      gen: gen_2,
      keyword: keyword,
      it: it_3
    } = e;
    if (r[0] !== "#") throw Error(`"${keyword}" only supports hash fragment reference`);
    let s = r.slice(1);
    if (it_3.allErrors) l();else {
      let c = gen_2.let("valid", !1);
      l(c), e.ok(c);
    }
    function l(c) {
      if (it_3.schemaEnv.root.dynamicAnchors[s]) {
        let h = gen_2.let("_v", k._`${Qe.default.dynamicAnchors}${k.getProperty(s)}`);
        gen_2.if(h, u(h, c), u(it_3.validateName, c));
      } else u(it_3.validateName, c)();
    }
    function u(c, h) {
      return h ? () => gen_2.block(() => {
        I.callRef(e, c), gen_2.let(h, !0);
      }) : () => I.callRef(e, c);
    }
  }
  ae.dynamicRef = re;
  ae.default = et;
});
var ue = R(function (ce) {
  Object.defineProperty(ce, "__esModule", {
    value: !0
  });
  var se = V(),
    ie = ab(),
    rt = {
      keyword: "$recursiveAnchor",
      schemaType: "boolean",
      code(e) {
        if (e.schema) se.dynamicAnchor(e, "");else ie.checkStrictMode(e.it, "$recursiveAnchor: false is ignored");
      }
    };
  ce.default = rt;
});
var fe = R(function (le) {
  Object.defineProperty(le, "__esModule", {
    value: !0
  });
  var me = W(),
    nt = {
      keyword: "$recursiveRef",
      schemaType: "string",
      code: e => me.dynamicRef(e, e.schema)
    };
  le.default = nt;
});
var he = R(function (pe) {
  Object.defineProperty(pe, "__esModule", {
    value: !0
  });
  var st = V(),
    it = W(),
    ct = ue(),
    ut = fe(),
    dt = [st.default, it.default, ct.default, ut.default];
  pe.default = dt;
});
var ge = R(function (ye) {
  Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  var N = JCr(),
    lt = {
      keyword: "dependentRequired",
      type: "object",
      schemaType: "object",
      error: N.error,
      code: e => N.validatePropertyDeps(e)
    };
  ye.default = lt;
});
var _e = R(function (be) {
  Object.defineProperty(be, "__esModule", {
    value: !0
  });
  var $e = JCr(),
    pt = {
      keyword: "dependentSchemas",
      type: "object",
      schemaType: "object",
      code: e => $e.validateSchemaDeps(e)
    };
  be.default = pt;
});
var Ae = R(function (je) {
  Object.defineProperty(je, "__esModule", {
    value: !0
  });
  var ve = ab(),
    yt = {
      keyword: ["maxContains", "minContains"],
      type: "array",
      schemaType: "number",
      code({
        keyword: keyword_2,
        parentSchema: parentSchema,
        it: it_4
      }) {
        if (parentSchema.contains === void 0) ve.checkStrictMode(it_4, `"${keyword_2}" without "contains" is ignored`);
      }
    };
  je.default = yt;
});
var Se = R(function (Pe) {
  Object.defineProperty(Pe, "__esModule", {
    value: !0
  });
  var $t = ge(),
    bt = _e(),
    _t = Ae(),
    vt = [$t.default, bt.default, _t.default];
  Pe.default = vt;
});
var Oe = R(function (Re) {
  Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  var g = Dm(),
    T = ab(),
    Pt = Eve(),
    error = {
      message: "must NOT have unevaluated properties",
      params: ({
        params: params
      }) => g._`{unevaluatedProperty: ${params.unevaluatedProperty}}`
    },
    Rt = {
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
        if (props instanceof g.Name) gen_3.if(g._`${props} !== true`, () => gen_3.forIn("key", data, y => gen_3.if(h(props, y), () => c(y))));else if (props !== !0) gen_3.forIn("key", data, y => props === void 0 ? c(y) : gen_3.if(b(props, y), () => c(y)));
        it_5.props = !0, e.ok(g._`${errsCount} === ${Pt.default.errors}`);
        function c(y) {
          if (schema_2 === !1) {
            if (e.setParams({
              unevaluatedProperty: y
            }), e.error(), !allErrors) gen_3.break();
            return;
          }
          if (!T.alwaysValidSchema(it_5, schema_2)) {
            let P = gen_3.name("valid");
            if (e.subschema({
              keyword: "unevaluatedProperties",
              dataProp: y,
              dataPropType: T.Type.Str
            }, P), !allErrors) gen_3.if(g.not(P), () => gen_3.break());
          }
        }
        function h(y, P) {
          return g._`!${y} || !${y}[${P}]`;
        }
        function b(y, P) {
          let m = [];
          for (let f in y) if (y[f] === !0) m.push(g._`${P} !== ${f}`);
          return g.and(...m);
        }
      }
    };
  Re.default = Rt;
});
var we = R(function (Ce) {
  Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  var v = Dm(),
    D = ab(),
    error_2 = {
      message: ({
        params: {
          len: len
        }
      }) => v.str`must NOT have more than ${len} items`,
      params: ({
        params: {
          len: len_2
        }
      }) => v._`{limit: ${len_2}}`
    },
    wt = {
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
        let l = gen_4.const("len", v._`${data_2}.length`);
        if (schema_3 === !1) e.setParams({
          len: len_3
        }), e.fail(v._`${l} > ${len_3}`);else if (typeof schema_3 == "object" && !D.alwaysValidSchema(it_6, schema_3)) {
          let c = gen_4.var("valid", v._`${l} <= ${len_3}`);
          gen_4.if(v.not(c), () => u(c, len_3)), e.ok(c);
        }
        it_6.items = !0;
        function u(c, h) {
          gen_4.forRange("i", h, l, dataProp => {
            if (e.subschema({
              keyword: "unevaluatedItems",
              dataProp: dataProp,
              dataPropType: D.Type.Num
            }, c), !it_6.allErrors) gen_4.if(v.not(c), () => gen_4.break());
          });
        }
      }
    };
  Ce.default = wt;
});
var xe = R(function (qe) {
  Object.defineProperty(qe, "__esModule", {
    value: !0
  });
  var xt = Oe(),
    Mt = we(),
    Et = [xt.default, Mt.default];
  qe.default = Et;
});
var Ee = R(function (Me) {
  Object.defineProperty(Me, "__esModule", {
    value: !0
  });
  var It = Ovo(),
    Nt = Ivo(),
    Tt = Mvo(),
    Dt = he(),
    Ft = Se(),
    Vt = xe(),
    Lt = Dvo(),
    F = Lvo(),
    Wt = [Dt.default, It.default, Nt.default, (0, Tt.default)(!0), Lt.default, F.metadataVocabulary, F.contentVocabulary, Ft.default, Vt.default];
  Me.default = Wt;
});
var ke = R(function (Qr, Ut) {
  Ut.exports = {
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
var Ie = R(function (ea, Kt) {
  Kt.exports = {
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
var Ne = R(function (ta, zt) {
  zt.exports = {
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
var Te = R(function (ra, Xt) {
  Xt.exports = {
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
var De = R(function (aa, Gt) {
  Gt.exports = {
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
var Fe = R(function (na, Yt) {
  Yt.exports = {
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
var Ve = R(function (oa, Bt) {
  Bt.exports = {
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
var Le = R(function (sa, Zt) {
  Zt.exports = {
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
var He = R(function (We) {
  Object.defineProperty(We, "__esModule", {
    value: !0
  });
  var Jt = ke(),
    Qt = Ie(),
    er = Ne(),
    tr = Te(),
    rr = De(),
    ar = Fe(),
    nr = Ve(),
    or = Le(),
    sr = ["/properties"];
  function ir(e) {
    return [Jt, Qt, er, tr, rr, r(this, ar), nr, r(this, or)].forEach(item => this.addMetaSchema(item, void 0, !1)), this;
    function r(n, o) {
      return e ? n.$dataMetaSchema(o, sr) : o;
    }
  }
  We.default = ir;
});
var Ue = R(function (j, U) {
  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.MissingRefError = j.ValidationError = j.CodeGen = j.Name = j.nil = j.stringify = j.str = j._ = j.KeywordCxt = j.Ajv2020 = void 0;
  var ur = Pvo(),
    dr = Ee(),
    mr = Nvo(),
    lr = He(),
    H = "https://json-schema.org/draft/2020-12/schema";
  class x extends ur.default {
    constructor(e = {}) {
      super({
        ...e,
        dynamicRef: !0,
        next: !0,
        unevaluated: !0
      });
    }
    _addVocabularies() {
      if (super._addVocabularies(), dr.default.forEach(item => this.addVocabulary(item)), this.opts.discriminator) this.addKeyword(mr.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let {
        $data: $data,
        meta: meta_2
      } = this.opts;
      if (!meta_2) return;
      lr.default.call(this, $data), this.refs["http://json-schema.org/schema"] = H;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(H) ? H : void 0);
    }
  }
  j.Ajv2020 = x;
  U.exports = j = x;
  U.exports.Ajv2020 = x;
  Object.defineProperty(j, "__esModule", {
    value: !0
  });
  j.default = x;
  var fr = dnn();
  Object.defineProperty(j, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return fr.KeywordCxt;
    }
  });
  var q = Dm();
  Object.defineProperty(j, "_", {
    enumerable: !0,
    get: function () {
      return q._;
    }
  });
  Object.defineProperty(j, "str", {
    enumerable: !0,
    get: function () {
      return q.str;
    }
  });
  Object.defineProperty(j, "stringify", {
    enumerable: !0,
    get: function () {
      return q.stringify;
    }
  });
  Object.defineProperty(j, "nil", {
    enumerable: !0,
    get: function () {
      return q.nil;
    }
  });
  Object.defineProperty(j, "Name", {
    enumerable: !0,
    get: function () {
      return q.Name;
    }
  });
  Object.defineProperty(j, "CodeGen", {
    enumerable: !0,
    get: function () {
      return q.CodeGen;
    }
  });
  var pr = hWn();
  Object.defineProperty(j, "ValidationError", {
    enumerable: !0,
    get: function () {
      return pr.default;
    }
  });
  var hr = cnn();
  Object.defineProperty(j, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return hr.default;
    }
  });
});
function xce() {
  try {
    j5e(ln().BASE_API_URL);
  } catch {
    return "egress_blocked";
  }
  if (Ni("zdr")) return "egress_blocked";
  return At() ? "essential_traffic" : void 0;
}
var ze = "anthropic/claudeAiConnector";
function gTn(e, {
  path: path,
  serverId: serverId
}) {
  try {
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !1;
    let config = e.config;
    if (config.type === "claudeai-proxy") {
      if (!f0e(config)) return !1;
      let s = new URL(config.url);
      return s.protocol === "https:" && s.username === "" && s.password === "" && _f(s.href) && s.pathname === path;
    }
    if (config.type === "sdk") {
      let s = e.capabilities?.experimental?.[ze];
      return m5e(config) && !de() && !a.CLAUDE_CODE_REMOTE && !a.CLAUDE_CODE_ENVIRONMENT_KIND && ju() && e.name === serverId && typeof s === "object" && s !== null && "serverId" in s && s.serverId === serverId;
    }
    let CLAUDE_CODE_ENVIRONMENT_KIND = a.CLAUDE_CODE_ENVIRONMENT_KIND;
    return a.CLAUDE_CODE_REMOTE === !0 && (!CLAUDE_CODE_ENVIRONMENT_KIND || CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") && config.type === "http" && config.scope === "dynamic" && !sk(config) && Uge(config) === serverId;
  } catch {
    return !1;
  }
}
import { basename as Xe } from "path";
var G = 100,
  Ge = 900,
  Y = 300;
function SEt(e) {
  return _(e).replace(/[^\x20-\x7e]/g, r => `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function B(e) {
  let r = SEt(e);
  if (r.length <= Y) return r;
  let n = [...e],
    o = n.length,
    i = 5;
  while (o > 0) {
    if (i += SEt(n[o - 1]).length - 2, i > Y) break;
    o--;
  }
  return SEt(`...${n.slice(o).join("")}`);
}
function Ees(e) {
  let r = [],
    n = 0;
  for (let {
    path: path_2,
    name: name,
    size: size
  } of e) {
    let u = `${B(path_2)}${Xe(path_2) === name ? "" : `, the file ${B(name)}`} (${size} bytes)`;
    if (n += u.length + 2, n > Ge) break;
    r.push(u);
  }
  let o = e.length - r.length;
  return `Attaches ${e.length} ${O(e.length, "file")}: ${r.join("; ")}${o > 0 ? `; and ${o} more` : ""}`;
}
function Z(e) {
  if (e === "") return;
  let r = e.slice(1).split("/").map(item => item.replaceAll("~1", "/").replaceAll("~0", "~")).map((item, index) => index === 0 ? item : /^\d+$/.test(item) ? `[${item}]` : `.${item}`).join("");
  return C(r);
}
function C(e) {
  return SEt(e.length > G ? `${ne(e, G)}...` : e);
}
var Ke = "https://json-schema.org/draft/2020-12/schema",
  K = 5,
  weakMap = new WeakMap();
function $r(e, {
  tool: tool,
  feature: feature
}) {
  if (!Dn(e)) return null;
  let o = weakMap.get(e);
  if (o !== void 0) return o;
  if (kve()) return t(`[${tool}] input schema not checked before the call: sessions that share a process compile no schemas, so the server checks it`), weakMap.set(e, null), null;
  let i = null,
    $schema = e.$schema;
  if ($schema === void 0 || $schema === Ke || $schema === `${Ke}#`) try {
    let {
      Ajv2020: Ajv2020
    } = Ue();
    i = new Ajv2020({
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
  if (i === null) p(feature, "input_schema_not_checked");
  return weakMap.set(e, i), i;
}
var br = new Set(["allOf", "anyOf", "contains", "if", "oneOf"]),
  _r = {
    array: "a list",
    boolean: "true or false",
    integer: "a whole number",
    number: "a number",
    object: "an object",
    string: "text"
  };
function hTn(e, r, n) {
  let o = $r(r, n);
  if (o === null || o(e)) return;
  let i = Dn(r) && Dn(r.properties) ? Object.keys(r.properties) : [],
    s = new Set(Dn(r) && Array.isArray(r.required) ? r.required : []),
    {
      ignoreInside: ignoreInside
    } = n,
    u = (o.errors ?? []).filter(item => ignoreInside === void 0 || !item.instancePath.startsWith(`/${ignoreInside}/`) && !(item.instancePath === `/${ignoreInside}` && br.has(item.keyword)));
  if (u.length === 0) return;
  let c = u.flatMap(item => {
      let additionalProperty = item.params.additionalProperty;
      return item.keyword === "additionalProperties" && item.instancePath === "" && typeof additionalProperty === "string" ? [additionalProperty] : [];
    }),
    h = new Map(c.map(item => [item, i.find(f => vr(item, f))])),
    b = L([...c.map(item => {
      let f = h.get(item);
      return `it has no argument ${C(item)}${f === void 0 ? "" : ` (did you mean ${C(f)}?)`}`;
    }), ...u.flatMap(item => {
      let f = Z(item.instancePath),
        params_2 = item.params;
      switch (item.keyword) {
        case "additionalProperties":
          return f === void 0 ? [] : [`${f} has no field ${C(String(params_2.additionalProperty))}`];
        case "required":
          {
            let S = String(params_2.missingProperty);
            if (f !== void 0) return [`${f} needs the field ${C(S)}`];
            return [...h.values()].includes(S) ? [] : [`the argument ${C(S)} is required`];
          }
        case "type":
          {
            let S = (Array.isArray(params_2.type) ? params_2.type : [params_2.type]).filter(item => item !== "null");
            return S.length === 0 ? [] : [`${f ?? "the arguments"} must be ${S.map(item => _r[String(item)] ?? String(item)).join(" or ")}`];
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
  if (b.length === 0) return;
  let y = b.length > K ? `, and ${b.length - K} more` : "",
    P = i.map(item => s.has(item) ? `${item} (required)` : item);
  return {
    listed: `${b.slice(0, K).join("; ")}${y}`,
    takes: P.length === 0 ? "" : ` ${n.tool} takes ${P.join(", ")}.`
  };
}
function vr(e, r) {
  let n = e.toLowerCase(),
    o = r.toLowerCase();
  return n === o || o.endsWith(`_${n}`) || o.startsWith(`${n}_`) || n.endsWith(`_${o}`) || n.startsWith(`${o}_`);
}
import { isAbsolute as jr } from "path";
var lNe = 4096;
function wEt(e, r) {
  let {
    tool: tool_2,
    local: local,
    ref: ref,
    refWord: refWord,
    maxFiles: maxFiles,
    nothingDone: nothingDone
  } = r;
  if (!Array.isArray(e)) return X(r);
  if (e.length > maxFiles) return {
    error: `${tool_2} takes at most ${maxFiles} files; this call has ${e.length}. ${nothingDone}`,
    code: "too_many_files"
  };
  let c = [];
  for (let h of e) {
    if (!Dn(h)) return X(r);
    if (h[ref] !== void 0) return {
      error: `${tool_2} file entries must give a \`${local}\`; this client uploads the file and fills in the ${refWord} itself. If these ${refWord}s came from an approval given before Claude Code restarted, that approval cannot be reused: call ${tool_2} again with paths. ${nothingDone}`,
      code: `model_${ref}`
    };
    let b = h[local];
    if (typeof b !== "string" || b === "" || b.length > lNe) return X(r);
    if (!jr(b)) return {
      error: `Cannot attach "${b}": ${tool_2} file paths must be absolute paths as this session sees them. ${nothingDone}`,
      code: "relative_path"
    };
    c.push(b);
  }
  return c;
}
function X({
  tool: tool_3,
  arg: arg,
  local: local_2,
  nothingDone: nothingDone_2
}) {
  return {
    error: `${tool_3} \`${arg}\` must be a list of objects, each with a \`${local_2}\` of at most ${lNe} characters, such as [{"${local_2}": "/absolute/path/to/report.csv"}]. ${nothingDone_2}`,
    code: "bad_entry"
  };
}
export { xce, gTn, SEt, Ees, hTn, lNe, wEt };