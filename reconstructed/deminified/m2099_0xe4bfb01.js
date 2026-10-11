// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { vMt } from "B:/~BUN/root/chunk-zwt8bem6.js";
var qe = D,
  je = {
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
var ke = {
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
var regExp = new RegExp("^[^#]*#?$", "u"),
  regExp_2 = new RegExp("^[A-Za-z_][-A-Za-z0-9._]*$", "u");
function x(t, {
  instancePath = "",
  parentData: parentData,
  parentDataProperty: parentDataProperty,
  rootData = t,
  dynamicAnchors = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated = x.evaluated;
  if (evaluated.dynamicProps) evaluated.props = void 0;
  if (evaluated.dynamicItems) evaluated.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return x.errors = [{
    instancePath: instancePath,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: ke.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors.meta) dynamicAnchors.meta = x;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.$id !== void 0) {
        let $id = t.$id,
          m = e,
          N = e;
        if (e === N) {
          if (e === N) {
            if (typeof $id !== "string") return x.errors = [{
              instancePath: instancePath + "/$id",
              schemaPath: "#/$defs/uriReferenceString/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string"
            }], !1;
          }
        }
        if (e === m) {
          if (typeof $id === "string") {
            if (!regExp.test($id)) return x.errors = [{
              instancePath: instancePath + "/$id",
              schemaPath: "#/properties/%24id/pattern",
              keyword: "pattern",
              params: {
                pattern: "^[^#]*#?$"
              },
              message: 'must match pattern "^[^#]*#?$"'
            }], !1;
          }
        }
        var n = m === e;
      } else var n = !0;
      if (n) {
        if (t.$schema !== void 0) {
          let u = e,
            m = e;
          if (e === m) {
            if (e === m) {
              if (typeof t.$schema !== "string") return x.errors = [{
                instancePath: instancePath + "/$schema",
                schemaPath: "#/$defs/uriString/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string"
              }], !1;
            }
          }
          var n = u === e;
        } else var n = !0;
        if (n) {
          if (t.$ref !== void 0) {
            let u = e,
              m = e;
            if (e === m) {
              if (e === m) {
                if (typeof t.$ref !== "string") return x.errors = [{
                  instancePath: instancePath + "/$ref",
                  schemaPath: "#/$defs/uriReferenceString/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                }], !1;
              }
            }
            var n = u === e;
          } else var n = !0;
          if (n) {
            if (t.$anchor !== void 0) {
              let $anchor = t.$anchor,
                m = e;
              if (e === e) if (typeof $anchor === "string") {
                if (!regExp_2.test($anchor)) return x.errors = [{
                  instancePath: instancePath + "/$anchor",
                  schemaPath: "#/$defs/anchorString/pattern",
                  keyword: "pattern",
                  params: {
                    pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                  },
                  message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                }], !1;
              } else return x.errors = [{
                instancePath: instancePath + "/$anchor",
                schemaPath: "#/$defs/anchorString/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string"
              }], !1;
              var n = m === e;
            } else var n = !0;
            if (n) {
              if (t.$dynamicRef !== void 0) {
                let u = e,
                  m = e;
                if (e === m) {
                  if (e === m) {
                    if (typeof t.$dynamicRef !== "string") return x.errors = [{
                      instancePath: instancePath + "/$dynamicRef",
                      schemaPath: "#/$defs/uriReferenceString/type",
                      keyword: "type",
                      params: {
                        type: "string"
                      },
                      message: "must be string"
                    }], !1;
                  }
                }
                var n = u === e;
              } else var n = !0;
              if (n) {
                if (t.$dynamicAnchor !== void 0) {
                  let $dynamicAnchor = t.$dynamicAnchor,
                    m = e;
                  if (e === e) if (typeof $dynamicAnchor === "string") {
                    if (!regExp_2.test($dynamicAnchor)) return x.errors = [{
                      instancePath: instancePath + "/$dynamicAnchor",
                      schemaPath: "#/$defs/anchorString/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                      },
                      message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                    }], !1;
                  } else return x.errors = [{
                    instancePath: instancePath + "/$dynamicAnchor",
                    schemaPath: "#/$defs/anchorString/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  }], !1;
                  var n = m === e;
                } else var n = !0;
                if (n) {
                  if (t.$vocabulary !== void 0) {
                    let $vocabulary = t.$vocabulary,
                      m = e;
                    if (e === m) if ($vocabulary && typeof $vocabulary == "object" && !Array.isArray($vocabulary)) {
                      for (let propertyName in $vocabulary) {
                        let _ = e,
                          j = e;
                        if (e === j) {
                          if (e === j) {
                            if (typeof propertyName !== "string") {
                              let g = {
                                instancePath: instancePath + "/$vocabulary",
                                schemaPath: "#/$defs/uriString/type",
                                keyword: "type",
                                params: {
                                  type: "string"
                                },
                                message: "must be string",
                                propertyName: propertyName
                              };
                              if (r === null) r = [g];else r.push(g);
                              e++;
                            }
                          }
                        }
                        var d = _ === e;
                        if (!d) {
                          let g = {
                            instancePath: instancePath + "/$vocabulary",
                            schemaPath: "#/properties/%24vocabulary/propertyNames",
                            keyword: "propertyNames",
                            params: {
                              propertyName: propertyName
                            },
                            message: "property name must be valid"
                          };
                          if (r === null) r = [g];else r.push(g);
                          return e++, x.errors = r, !1;
                          break;
                        }
                      }
                      if (d) for (let v in $vocabulary) {
                        let _ = e;
                        if (typeof $vocabulary[v] !== "boolean") return x.errors = [{
                          instancePath: instancePath + "/$vocabulary/" + v.replace(/~/g, "~0").replace(/\//g, "~1"),
                          schemaPath: "#/properties/%24vocabulary/additionalProperties/type",
                          keyword: "type",
                          params: {
                            type: "boolean"
                          },
                          message: "must be boolean"
                        }], !1;
                        var o = _ === e;
                        if (!o) break;
                      }
                    } else return x.errors = [{
                      instancePath: instancePath + "/$vocabulary",
                      schemaPath: "#/properties/%24vocabulary/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    }], !1;
                    var n = m === e;
                  } else var n = !0;
                  if (n) {
                    if (t.$comment !== void 0) {
                      let u = e;
                      if (typeof t.$comment !== "string") return x.errors = [{
                        instancePath: instancePath + "/$comment",
                        schemaPath: "#/properties/%24comment/type",
                        keyword: "type",
                        params: {
                          type: "string"
                        },
                        message: "must be string"
                      }], !1;
                      var n = u === e;
                    } else var n = !0;
                    if (n) if (t.$defs !== void 0) {
                      let u = t.$defs,
                        m = e;
                      if (e === m) if (u && typeof u == "object" && !Array.isArray(u)) for (let parentDataProperty_2 in u) {
                        let _ = u[parentDataProperty_2],
                          j = e,
                          meta = dynamicAnchors.meta;
                        if (meta) {
                          if (!meta(_, {
                            instancePath: instancePath + "/$defs/" + parentDataProperty_2.replace(/~/g, "~0").replace(/\//g, "~1"),
                            parentData: u,
                            parentDataProperty: parentDataProperty_2,
                            rootData: rootData,
                            dynamicAnchors: dynamicAnchors
                          })) r = r === null ? meta.errors : r.concat(meta.errors), e = r.length;else var props = meta.evaluated.props,
                            items = meta.evaluated.items;
                        } else if (!x(_, {
                          instancePath: instancePath + "/$defs/" + parentDataProperty_2.replace(/~/g, "~0").replace(/\//g, "~1"),
                          parentData: u,
                          parentDataProperty: parentDataProperty_2,
                          rootData: rootData,
                          dynamicAnchors: dynamicAnchors
                        })) r = r === null ? x.errors : r.concat(x.errors), e = r.length;else {
                          var props_2 = x.evaluated.props;
                          if (props !== !0 && props_2 !== void 0) if (props_2 === !0) props = !0;else props = props || {}, Object.assign(props, props_2);
                          var items_2 = x.evaluated.items;
                          if (items !== !0 && items_2 !== void 0) items = items_2 === !0 ? !0 : items > items_2 ? items : items_2;
                        }
                        var f = j === e;
                        if (!f) break;
                      } else return x.errors = [{
                        instancePath: instancePath + "/$defs",
                        schemaPath: "#/properties/%24defs/type",
                        keyword: "type",
                        params: {
                          type: "object"
                        },
                        message: "must be object"
                      }], !1;
                      var n = m === e;
                    } else var n = !0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return x.errors = r, e === 0;
}
x.evaluated = {
  props: {
    $id: !0,
    $schema: !0,
    $ref: !0,
    $anchor: !0,
    $dynamicRef: !0,
    $dynamicAnchor: !0,
    $vocabulary: !0,
    $comment: !0,
    $defs: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
var Ie = {
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
function R(parentData_3, {
  instancePath: instancePath_2 = "",
  parentData: parentData_2,
  parentDataProperty: parentDataProperty_3,
  rootData: rootData_2 = parentData_3,
  dynamicAnchors: dynamicAnchors_2 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_2 = R.evaluated;
  if (evaluated_2.dynamicProps) evaluated_2.props = void 0;
  if (evaluated_2.dynamicItems) evaluated_2.items = void 0;
  if (e === 0) if (Array.isArray(parentData_3)) {
    if (parentData_3.length < 1) return R.errors = [{
      instancePath: instancePath_2,
      schemaPath: "#/minItems",
      keyword: "minItems",
      params: {
        limit: 1
      },
      message: "must NOT have fewer than 1 items"
    }], !1;else {
      var n = !0;
      let I = parentData_3.length;
      for (let parentDataProperty_4 = 0; parentDataProperty_4 < I; parentDataProperty_4++) {
        let f = parentData_3[parentDataProperty_4],
          u = e,
          meta_2 = dynamicAnchors_2.meta;
        if (meta_2) {
          if (!meta_2(f, {
            instancePath: instancePath_2 + "/" + parentDataProperty_4,
            parentData: parentData_3,
            parentDataProperty: parentDataProperty_4,
            rootData: rootData_2,
            dynamicAnchors: dynamicAnchors_2
          })) r = r === null ? meta_2.errors : r.concat(meta_2.errors), e = r.length;else var props_3 = meta_2.evaluated.props,
            items_3 = meta_2.evaluated.items;
        } else if (!R(f, {
          instancePath: instancePath_2 + "/" + parentDataProperty_4,
          parentData: parentData_3,
          parentDataProperty: parentDataProperty_4,
          rootData: rootData_2,
          dynamicAnchors: dynamicAnchors_2
        })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;else {
          var props_4 = R.evaluated.props;
          if (props_3 !== !0 && props_4 !== void 0) if (props_4 === !0) props_3 = !0;else props_3 = props_3 || {}, Object.assign(props_3, props_4);
          var items_4 = R.evaluated.items;
          if (items_3 !== !0 && items_4 !== void 0) items_3 = items_4 === !0 ? !0 : items_3 > items_4 ? items_3 : items_4;
        }
        var n = u === e;
        if (!n) break;
      }
    }
  } else return R.errors = [{
    instancePath: instancePath_2,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: "array"
    },
    message: "must be array"
  }], !1;
  return R.errors = r, e === 0;
}
R.evaluated = {
  items: !0,
  dynamicProps: !1,
  dynamicItems: !1
};
function l(parentData_5, {
  instancePath: instancePath_3 = "",
  parentData: parentData_4,
  parentDataProperty: parentDataProperty_5,
  rootData: rootData_3 = parentData_5,
  dynamicAnchors: dynamicAnchors_3 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_3 = l.evaluated;
  if (evaluated_3.dynamicProps) evaluated_3.props = void 0;
  if (evaluated_3.dynamicItems) evaluated_3.items = void 0;
  if (!(parentData_5 && typeof parentData_5 == "object" && !Array.isArray(parentData_5)) && typeof parentData_5 !== "boolean") return l.errors = [{
    instancePath: instancePath_3,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Ie.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_3.meta) dynamicAnchors_3.meta = l;
  if (e === 0) {
    if (parentData_5 && typeof parentData_5 == "object" && !Array.isArray(parentData_5)) {
      if (parentData_5.prefixItems !== void 0) {
        let p = e;
        if (!R(parentData_5.prefixItems, {
          instancePath: instancePath_3 + "/prefixItems",
          parentData: parentData_5,
          parentDataProperty: "prefixItems",
          rootData: rootData_3,
          dynamicAnchors: dynamicAnchors_3
        })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
        var n = p === e;
      } else var n = !0;
      if (n) {
        if (parentData_5.items !== void 0) {
          let items_5 = parentData_5.items,
            O = e,
            meta_3 = dynamicAnchors_3.meta;
          if (meta_3) {
            if (!meta_3(items_5, {
              instancePath: instancePath_3 + "/items",
              parentData: parentData_5,
              parentDataProperty: "items",
              rootData: rootData_3,
              dynamicAnchors: dynamicAnchors_3
            })) r = r === null ? meta_3.errors : r.concat(meta_3.errors), e = r.length;else var props_5 = meta_3.evaluated.props,
              items_6 = meta_3.evaluated.items;
          } else if (!l(items_5, {
            instancePath: instancePath_3 + "/items",
            parentData: parentData_5,
            parentDataProperty: "items",
            rootData: rootData_3,
            dynamicAnchors: dynamicAnchors_3
          })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
            var props_6 = l.evaluated.props;
            if (props_5 !== !0 && props_6 !== void 0) if (props_6 === !0) props_5 = !0;else props_5 = props_5 || {}, Object.assign(props_5, props_6);
            var items_7 = l.evaluated.items;
            if (items_6 !== !0 && items_7 !== void 0) items_6 = items_7 === !0 ? !0 : items_6 > items_7 ? items_6 : items_7;
          }
          var n = O === e;
        } else var n = !0;
        if (n) {
          if (parentData_5.contains !== void 0) {
            let contains = parentData_5.contains,
              O = e,
              meta_4 = dynamicAnchors_3.meta;
            if (meta_4) {
              if (!meta_4(contains, {
                instancePath: instancePath_3 + "/contains",
                parentData: parentData_5,
                parentDataProperty: "contains",
                rootData: rootData_3,
                dynamicAnchors: dynamicAnchors_3
              })) r = r === null ? meta_4.errors : r.concat(meta_4.errors), e = r.length;else var props_7 = meta_4.evaluated.props,
                items_8 = meta_4.evaluated.items;
            } else if (!l(contains, {
              instancePath: instancePath_3 + "/contains",
              parentData: parentData_5,
              parentDataProperty: "contains",
              rootData: rootData_3,
              dynamicAnchors: dynamicAnchors_3
            })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
              var props_8 = l.evaluated.props;
              if (props_7 !== !0 && props_8 !== void 0) if (props_8 === !0) props_7 = !0;else props_7 = props_7 || {}, Object.assign(props_7, props_8);
              var items_9 = l.evaluated.items;
              if (items_8 !== !0 && items_9 !== void 0) items_8 = items_9 === !0 ? !0 : items_8 > items_9 ? items_8 : items_9;
            }
            var n = O === e;
          } else var n = !0;
          if (n) {
            if (parentData_5.additionalProperties !== void 0) {
              let additionalProperties = parentData_5.additionalProperties,
                O = e,
                meta_5 = dynamicAnchors_3.meta;
              if (meta_5) {
                if (!meta_5(additionalProperties, {
                  instancePath: instancePath_3 + "/additionalProperties",
                  parentData: parentData_5,
                  parentDataProperty: "additionalProperties",
                  rootData: rootData_3,
                  dynamicAnchors: dynamicAnchors_3
                })) r = r === null ? meta_5.errors : r.concat(meta_5.errors), e = r.length;else var props_9 = meta_5.evaluated.props,
                  items_10 = meta_5.evaluated.items;
              } else if (!l(additionalProperties, {
                instancePath: instancePath_3 + "/additionalProperties",
                parentData: parentData_5,
                parentDataProperty: "additionalProperties",
                rootData: rootData_3,
                dynamicAnchors: dynamicAnchors_3
              })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                var props_10 = l.evaluated.props;
                if (props_9 !== !0 && props_10 !== void 0) if (props_10 === !0) props_9 = !0;else props_9 = props_9 || {}, Object.assign(props_9, props_10);
                var items_11 = l.evaluated.items;
                if (items_10 !== !0 && items_11 !== void 0) items_10 = items_11 === !0 ? !0 : items_10 > items_11 ? items_10 : items_11;
              }
              var n = O === e;
            } else var n = !0;
            if (n) {
              if (parentData_5.properties !== void 0) {
                let p = parentData_5.properties,
                  O = e;
                if (e === O) if (p && typeof p == "object" && !Array.isArray(p)) for (let parentDataProperty_6 in p) {
                  let W = p[parentDataProperty_6],
                    re = e,
                    meta_6 = dynamicAnchors_3.meta;
                  if (meta_6) {
                    if (!meta_6(W, {
                      instancePath: instancePath_3 + "/properties/" + parentDataProperty_6.replace(/~/g, "~0").replace(/\//g, "~1"),
                      parentData: p,
                      parentDataProperty: parentDataProperty_6,
                      rootData: rootData_3,
                      dynamicAnchors: dynamicAnchors_3
                    })) r = r === null ? meta_6.errors : r.concat(meta_6.errors), e = r.length;else var props_11 = meta_6.evaluated.props,
                      items_12 = meta_6.evaluated.items;
                  } else if (!l(W, {
                    instancePath: instancePath_3 + "/properties/" + parentDataProperty_6.replace(/~/g, "~0").replace(/\//g, "~1"),
                    parentData: p,
                    parentDataProperty: parentDataProperty_6,
                    rootData: rootData_3,
                    dynamicAnchors: dynamicAnchors_3
                  })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                    var props_12 = l.evaluated.props;
                    if (props_11 !== !0 && props_12 !== void 0) if (props_12 === !0) props_11 = !0;else props_11 = props_11 || {}, Object.assign(props_11, props_12);
                    var items_13 = l.evaluated.items;
                    if (items_12 !== !0 && items_13 !== void 0) items_12 = items_13 === !0 ? !0 : items_12 > items_13 ? items_12 : items_13;
                  }
                  var M = re === e;
                  if (!M) break;
                } else return l.errors = [{
                  instancePath: instancePath_3 + "/properties",
                  schemaPath: "#/properties/properties/type",
                  keyword: "type",
                  params: {
                    type: "object"
                  },
                  message: "must be object"
                }], !1;
                var n = O === e;
              } else var n = !0;
              if (n) {
                if (parentData_5.patternProperties !== void 0) {
                  let p = parentData_5.patternProperties,
                    O = e;
                  if (e === O) if (p && typeof p == "object" && !Array.isArray(p)) {
                    for (let propertyName_2 in p) {
                      var Z = e === e;
                      if (!Z) {
                        let re = {
                          instancePath: instancePath_3 + "/patternProperties",
                          schemaPath: "#/properties/patternProperties/propertyNames",
                          keyword: "propertyNames",
                          params: {
                            propertyName: propertyName_2
                          },
                          message: "property name must be valid"
                        };
                        if (r === null) r = [re];else r.push(re);
                        return e++, l.errors = r, !1;
                        break;
                      }
                    }
                    if (Z) for (let parentDataProperty_7 in p) {
                      let W = p[parentDataProperty_7],
                        re = e,
                        meta_7 = dynamicAnchors_3.meta;
                      if (meta_7) {
                        if (!meta_7(W, {
                          instancePath: instancePath_3 + "/patternProperties/" + parentDataProperty_7.replace(/~/g, "~0").replace(/\//g, "~1"),
                          parentData: p,
                          parentDataProperty: parentDataProperty_7,
                          rootData: rootData_3,
                          dynamicAnchors: dynamicAnchors_3
                        })) r = r === null ? meta_7.errors : r.concat(meta_7.errors), e = r.length;else var props_13 = meta_7.evaluated.props,
                          items_14 = meta_7.evaluated.items;
                      } else if (!l(W, {
                        instancePath: instancePath_3 + "/patternProperties/" + parentDataProperty_7.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: p,
                        parentDataProperty: parentDataProperty_7,
                        rootData: rootData_3,
                        dynamicAnchors: dynamicAnchors_3
                      })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                        var props_14 = l.evaluated.props;
                        if (props_13 !== !0 && props_14 !== void 0) if (props_14 === !0) props_13 = !0;else props_13 = props_13 || {}, Object.assign(props_13, props_14);
                        var items_15 = l.evaluated.items;
                        if (items_14 !== !0 && items_15 !== void 0) items_14 = items_15 === !0 ? !0 : items_14 > items_15 ? items_14 : items_15;
                      }
                      var ae = re === e;
                      if (!ae) break;
                    }
                  } else return l.errors = [{
                    instancePath: instancePath_3 + "/patternProperties",
                    schemaPath: "#/properties/patternProperties/type",
                    keyword: "type",
                    params: {
                      type: "object"
                    },
                    message: "must be object"
                  }], !1;
                  var n = O === e;
                } else var n = !0;
                if (n) {
                  if (parentData_5.dependentSchemas !== void 0) {
                    let p = parentData_5.dependentSchemas,
                      O = e;
                    if (e === O) if (p && typeof p == "object" && !Array.isArray(p)) for (let parentDataProperty_8 in p) {
                      let W = p[parentDataProperty_8],
                        re = e,
                        meta_8 = dynamicAnchors_3.meta;
                      if (meta_8) {
                        if (!meta_8(W, {
                          instancePath: instancePath_3 + "/dependentSchemas/" + parentDataProperty_8.replace(/~/g, "~0").replace(/\//g, "~1"),
                          parentData: p,
                          parentDataProperty: parentDataProperty_8,
                          rootData: rootData_3,
                          dynamicAnchors: dynamicAnchors_3
                        })) r = r === null ? meta_8.errors : r.concat(meta_8.errors), e = r.length;else var props_15 = meta_8.evaluated.props,
                          items_16 = meta_8.evaluated.items;
                      } else if (!l(W, {
                        instancePath: instancePath_3 + "/dependentSchemas/" + parentDataProperty_8.replace(/~/g, "~0").replace(/\//g, "~1"),
                        parentData: p,
                        parentDataProperty: parentDataProperty_8,
                        rootData: rootData_3,
                        dynamicAnchors: dynamicAnchors_3
                      })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                        var props_16 = l.evaluated.props;
                        if (props_15 !== !0 && props_16 !== void 0) if (props_16 === !0) props_15 = !0;else props_15 = props_15 || {}, Object.assign(props_15, props_16);
                        var items_17 = l.evaluated.items;
                        if (items_16 !== !0 && items_17 !== void 0) items_16 = items_17 === !0 ? !0 : items_16 > items_17 ? items_16 : items_17;
                      }
                      var U = re === e;
                      if (!U) break;
                    } else return l.errors = [{
                      instancePath: instancePath_3 + "/dependentSchemas",
                      schemaPath: "#/properties/dependentSchemas/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    }], !1;
                    var n = O === e;
                  } else var n = !0;
                  if (n) {
                    if (parentData_5.propertyNames !== void 0) {
                      let propertyNames = parentData_5.propertyNames,
                        O = e,
                        meta_9 = dynamicAnchors_3.meta;
                      if (meta_9) {
                        if (!meta_9(propertyNames, {
                          instancePath: instancePath_3 + "/propertyNames",
                          parentData: parentData_5,
                          parentDataProperty: "propertyNames",
                          rootData: rootData_3,
                          dynamicAnchors: dynamicAnchors_3
                        })) r = r === null ? meta_9.errors : r.concat(meta_9.errors), e = r.length;else var props_17 = meta_9.evaluated.props,
                          items_18 = meta_9.evaluated.items;
                      } else if (!l(propertyNames, {
                        instancePath: instancePath_3 + "/propertyNames",
                        parentData: parentData_5,
                        parentDataProperty: "propertyNames",
                        rootData: rootData_3,
                        dynamicAnchors: dynamicAnchors_3
                      })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                        var props_18 = l.evaluated.props;
                        if (props_17 !== !0 && props_18 !== void 0) if (props_18 === !0) props_17 = !0;else props_17 = props_17 || {}, Object.assign(props_17, props_18);
                        var items_19 = l.evaluated.items;
                        if (items_18 !== !0 && items_19 !== void 0) items_18 = items_19 === !0 ? !0 : items_18 > items_19 ? items_18 : items_19;
                      }
                      var n = O === e;
                    } else var n = !0;
                    if (n) {
                      if (parentData_5.if !== void 0) {
                        let p = parentData_5.if,
                          O = e,
                          meta_10 = dynamicAnchors_3.meta;
                        if (meta_10) {
                          if (!meta_10(p, {
                            instancePath: instancePath_3 + "/if",
                            parentData: parentData_5,
                            parentDataProperty: "if",
                            rootData: rootData_3,
                            dynamicAnchors: dynamicAnchors_3
                          })) r = r === null ? meta_10.errors : r.concat(meta_10.errors), e = r.length;else var props_19 = meta_10.evaluated.props,
                            items_20 = meta_10.evaluated.items;
                        } else if (!l(p, {
                          instancePath: instancePath_3 + "/if",
                          parentData: parentData_5,
                          parentDataProperty: "if",
                          rootData: rootData_3,
                          dynamicAnchors: dynamicAnchors_3
                        })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                          var props_20 = l.evaluated.props;
                          if (props_19 !== !0 && props_20 !== void 0) if (props_20 === !0) props_19 = !0;else props_19 = props_19 || {}, Object.assign(props_19, props_20);
                          var items_21 = l.evaluated.items;
                          if (items_20 !== !0 && items_21 !== void 0) items_20 = items_21 === !0 ? !0 : items_20 > items_21 ? items_20 : items_21;
                        }
                        var n = O === e;
                      } else var n = !0;
                      if (n) {
                        if (parentData_5.then !== void 0) {
                          let p = parentData_5.then,
                            O = e,
                            meta_11 = dynamicAnchors_3.meta;
                          if (meta_11) {
                            if (!meta_11(p, {
                              instancePath: instancePath_3 + "/then",
                              parentData: parentData_5,
                              parentDataProperty: "then",
                              rootData: rootData_3,
                              dynamicAnchors: dynamicAnchors_3
                            })) r = r === null ? meta_11.errors : r.concat(meta_11.errors), e = r.length;else var props_21 = meta_11.evaluated.props,
                              items_22 = meta_11.evaluated.items;
                          } else if (!l(p, {
                            instancePath: instancePath_3 + "/then",
                            parentData: parentData_5,
                            parentDataProperty: "then",
                            rootData: rootData_3,
                            dynamicAnchors: dynamicAnchors_3
                          })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                            var props_22 = l.evaluated.props;
                            if (props_21 !== !0 && props_22 !== void 0) if (props_22 === !0) props_21 = !0;else props_21 = props_21 || {}, Object.assign(props_21, props_22);
                            var items_23 = l.evaluated.items;
                            if (items_22 !== !0 && items_23 !== void 0) items_22 = items_23 === !0 ? !0 : items_22 > items_23 ? items_22 : items_23;
                          }
                          var n = O === e;
                        } else var n = !0;
                        if (n) {
                          if (parentData_5.else !== void 0) {
                            let p = parentData_5.else,
                              O = e,
                              meta_12 = dynamicAnchors_3.meta;
                            if (meta_12) {
                              if (!meta_12(p, {
                                instancePath: instancePath_3 + "/else",
                                parentData: parentData_5,
                                parentDataProperty: "else",
                                rootData: rootData_3,
                                dynamicAnchors: dynamicAnchors_3
                              })) r = r === null ? meta_12.errors : r.concat(meta_12.errors), e = r.length;else var props_23 = meta_12.evaluated.props,
                                items_24 = meta_12.evaluated.items;
                            } else if (!l(p, {
                              instancePath: instancePath_3 + "/else",
                              parentData: parentData_5,
                              parentDataProperty: "else",
                              rootData: rootData_3,
                              dynamicAnchors: dynamicAnchors_3
                            })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                              var props_24 = l.evaluated.props;
                              if (props_23 !== !0 && props_24 !== void 0) if (props_24 === !0) props_23 = !0;else props_23 = props_23 || {}, Object.assign(props_23, props_24);
                              var items_25 = l.evaluated.items;
                              if (items_24 !== !0 && items_25 !== void 0) items_24 = items_25 === !0 ? !0 : items_24 > items_25 ? items_24 : items_25;
                            }
                            var n = O === e;
                          } else var n = !0;
                          if (n) {
                            if (parentData_5.allOf !== void 0) {
                              let p = e;
                              if (!R(parentData_5.allOf, {
                                instancePath: instancePath_3 + "/allOf",
                                parentData: parentData_5,
                                parentDataProperty: "allOf",
                                rootData: rootData_3,
                                dynamicAnchors: dynamicAnchors_3
                              })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
                              var n = p === e;
                            } else var n = !0;
                            if (n) {
                              if (parentData_5.anyOf !== void 0) {
                                let p = e;
                                if (!R(parentData_5.anyOf, {
                                  instancePath: instancePath_3 + "/anyOf",
                                  parentData: parentData_5,
                                  parentDataProperty: "anyOf",
                                  rootData: rootData_3,
                                  dynamicAnchors: dynamicAnchors_3
                                })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
                                var n = p === e;
                              } else var n = !0;
                              if (n) {
                                if (parentData_5.oneOf !== void 0) {
                                  let p = e;
                                  if (!R(parentData_5.oneOf, {
                                    instancePath: instancePath_3 + "/oneOf",
                                    parentData: parentData_5,
                                    parentDataProperty: "oneOf",
                                    rootData: rootData_3,
                                    dynamicAnchors: dynamicAnchors_3
                                  })) r = r === null ? R.errors : r.concat(R.errors), e = r.length;
                                  var n = p === e;
                                } else var n = !0;
                                if (n) if (parentData_5.not !== void 0) {
                                  let not = parentData_5.not,
                                    O = e,
                                    meta_13 = dynamicAnchors_3.meta;
                                  if (meta_13) {
                                    if (!meta_13(not, {
                                      instancePath: instancePath_3 + "/not",
                                      parentData: parentData_5,
                                      parentDataProperty: "not",
                                      rootData: rootData_3,
                                      dynamicAnchors: dynamicAnchors_3
                                    })) r = r === null ? meta_13.errors : r.concat(meta_13.errors), e = r.length;else var props_25 = meta_13.evaluated.props,
                                      items_26 = meta_13.evaluated.items;
                                  } else if (!l(not, {
                                    instancePath: instancePath_3 + "/not",
                                    parentData: parentData_5,
                                    parentDataProperty: "not",
                                    rootData: rootData_3,
                                    dynamicAnchors: dynamicAnchors_3
                                  })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;else {
                                    var props_26 = l.evaluated.props;
                                    if (props_25 !== !0 && props_26 !== void 0) if (props_26 === !0) props_25 = !0;else props_25 = props_25 || {}, Object.assign(props_25, props_26);
                                    var items_27 = l.evaluated.items;
                                    if (items_26 !== !0 && items_27 !== void 0) items_26 = items_27 === !0 ? !0 : items_26 > items_27 ? items_26 : items_27;
                                  }
                                  var n = O === e;
                                } else var n = !0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return l.errors = r, e === 0;
}
l.evaluated = {
  props: {
    prefixItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    properties: !0,
    patternProperties: !0,
    dependentSchemas: !0,
    propertyNames: !0,
    if: !0,
    then: !0,
    else: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0,
    not: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
var Ne = {
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
function F(parentData_7, {
  instancePath: instancePath_4 = "",
  parentData: parentData_6,
  parentDataProperty: parentDataProperty_9,
  rootData: rootData_4 = parentData_7,
  dynamicAnchors: dynamicAnchors_4 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_4 = F.evaluated;
  if (evaluated_4.dynamicProps) evaluated_4.props = void 0;
  if (evaluated_4.dynamicItems) evaluated_4.items = void 0;
  if (!(parentData_7 && typeof parentData_7 == "object" && !Array.isArray(parentData_7)) && typeof parentData_7 !== "boolean") return F.errors = [{
    instancePath: instancePath_4,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Ne.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_4.meta) dynamicAnchors_4.meta = F;
  if (e === 0) {
    if (parentData_7 && typeof parentData_7 == "object" && !Array.isArray(parentData_7)) {
      if (parentData_7.unevaluatedItems !== void 0) {
        let unevaluatedItems = parentData_7.unevaluatedItems,
          N = e,
          meta_14 = dynamicAnchors_4.meta;
        if (meta_14) {
          if (!meta_14(unevaluatedItems, {
            instancePath: instancePath_4 + "/unevaluatedItems",
            parentData: parentData_7,
            parentDataProperty: "unevaluatedItems",
            rootData: rootData_4,
            dynamicAnchors: dynamicAnchors_4
          })) r = r === null ? meta_14.errors : r.concat(meta_14.errors), e = r.length;else var props_27 = meta_14.evaluated.props,
            items_28 = meta_14.evaluated.items;
        } else if (!F(unevaluatedItems, {
          instancePath: instancePath_4 + "/unevaluatedItems",
          parentData: parentData_7,
          parentDataProperty: "unevaluatedItems",
          rootData: rootData_4,
          dynamicAnchors: dynamicAnchors_4
        })) r = r === null ? F.errors : r.concat(F.errors), e = r.length;else {
          var props_28 = F.evaluated.props;
          if (props_27 !== !0 && props_28 !== void 0) if (props_28 === !0) props_27 = !0;else props_27 = props_27 || {}, Object.assign(props_27, props_28);
          var items_29 = F.evaluated.items;
          if (items_28 !== !0 && items_29 !== void 0) items_28 = items_29 === !0 ? !0 : items_28 > items_29 ? items_28 : items_29;
        }
        var k = N === e;
      } else var k = !0;
      if (k) if (parentData_7.unevaluatedProperties !== void 0) {
        let unevaluatedProperties = parentData_7.unevaluatedProperties,
          N = e,
          meta_15 = dynamicAnchors_4.meta;
        if (meta_15) {
          if (!meta_15(unevaluatedProperties, {
            instancePath: instancePath_4 + "/unevaluatedProperties",
            parentData: parentData_7,
            parentDataProperty: "unevaluatedProperties",
            rootData: rootData_4,
            dynamicAnchors: dynamicAnchors_4
          })) r = r === null ? meta_15.errors : r.concat(meta_15.errors), e = r.length;else var props_29 = meta_15.evaluated.props,
            items_30 = meta_15.evaluated.items;
        } else if (!F(unevaluatedProperties, {
          instancePath: instancePath_4 + "/unevaluatedProperties",
          parentData: parentData_7,
          parentDataProperty: "unevaluatedProperties",
          rootData: rootData_4,
          dynamicAnchors: dynamicAnchors_4
        })) r = r === null ? F.errors : r.concat(F.errors), e = r.length;else {
          var props_30 = F.evaluated.props;
          if (props_29 !== !0 && props_30 !== void 0) if (props_30 === !0) props_29 = !0;else props_29 = props_29 || {}, Object.assign(props_29, props_30);
          var items_31 = F.evaluated.items;
          if (items_30 !== !0 && items_31 !== void 0) items_30 = items_31 === !0 ? !0 : items_30 > items_31 ? items_30 : items_31;
        }
        var k = N === e;
      } else var k = !0;
    }
  }
  return F.errors = r, e === 0;
}
F.evaluated = {
  props: {
    unevaluatedItems: !0,
    unevaluatedProperties: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
var xe = {
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
  },
  _e = {
    enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
  };
var Oe = vMt().default;
function b(t, {
  instancePath: instancePath_5 = "",
  parentData: parentData_8,
  parentDataProperty: parentDataProperty_10,
  rootData: rootData_5 = t,
  dynamicAnchors: dynamicAnchors_5 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_5 = b.evaluated;
  if (evaluated_5.dynamicProps) evaluated_5.props = void 0;
  if (evaluated_5.dynamicItems) evaluated_5.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return b.errors = [{
    instancePath: instancePath_5,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: xe.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_5.meta) dynamicAnchors_5.meta = b;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.type !== void 0) {
        let a = t.type,
          f = e,
          u = e,
          m = !1,
          N = e;
        if (!(a === "array" || a === "boolean" || a === "integer" || a === "null" || a === "number" || a === "object" || a === "string")) {
          let _ = {
            instancePath: instancePath_5 + "/type",
            schemaPath: "#/$defs/simpleTypes/enum",
            keyword: "enum",
            params: {
              allowedValues: _e.enum
            },
            message: "must be equal to one of the allowed values"
          };
          if (r === null) r = [_];else r.push(_);
          e++;
        }
        var d = N === e;
        m = m || d;
        let v = e;
        if (e === v) if (Array.isArray(a)) {
          if (a.length < 1) {
            let _ = {
              instancePath: instancePath_5 + "/type",
              schemaPath: "#/properties/type/anyOf/1/minItems",
              keyword: "minItems",
              params: {
                limit: 1
              },
              message: "must NOT have fewer than 1 items"
            };
            if (r === null) r = [_];else r.push(_);
            e++;
          } else {
            var n = !0;
            let _ = a.length;
            for (let j = 0; j < _; j++) {
              let g = a[j],
                P = e;
              if (!(g === "array" || g === "boolean" || g === "integer" || g === "null" || g === "number" || g === "object" || g === "string")) {
                let M = {
                  instancePath: instancePath_5 + "/type/" + j,
                  schemaPath: "#/$defs/simpleTypes/enum",
                  keyword: "enum",
                  params: {
                    allowedValues: _e.enum
                  },
                  message: "must be equal to one of the allowed values"
                };
                if (r === null) r = [M];else r.push(M);
                e++;
              }
              var n = P === e;
              if (!n) break;
            }
            if (n) {
              let i_2 = a.length,
                j_2;
              if (i_2 > 1) {
                e: for (; i_2--;) for (j_2 = i_2; j_2--;) if (Oe(a[i_2], a[j_2])) {
                  let P = {
                    instancePath: instancePath_5 + "/type",
                    schemaPath: "#/properties/type/anyOf/1/uniqueItems",
                    keyword: "uniqueItems",
                    params: {
                      i: i_2,
                      j: j_2
                    },
                    message: "must NOT have duplicate items (items ## " + j_2 + " and " + i_2 + " are identical)"
                  };
                  if (r === null) r = [P];else r.push(P);
                  e++;
                  break e;
                }
              }
            }
          }
        } else {
          let _ = {
            instancePath: instancePath_5 + "/type",
            schemaPath: "#/properties/type/anyOf/1/type",
            keyword: "type",
            params: {
              type: "array"
            },
            message: "must be array"
          };
          if (r === null) r = [_];else r.push(_);
          e++;
        }
        var d = v === e;
        if (m = m || d, !m) {
          let _ = {
            instancePath: instancePath_5 + "/type",
            schemaPath: "#/properties/type/anyOf",
            keyword: "anyOf",
            params: {},
            message: "must match a schema in anyOf"
          };
          if (r === null) r = [_];else r.push(_);
          return e++, b.errors = r, !1;
        } else if (e = u, r !== null) if (u) r.length = u;else r = null;
        var o = f === e;
      } else var o = !0;
      if (o) {
        if (t.enum !== void 0) {
          let a = e;
          if (e === a) {
            if (!Array.isArray(t.enum)) return b.errors = [{
              instancePath: instancePath_5 + "/enum",
              schemaPath: "#/properties/enum/type",
              keyword: "type",
              params: {
                type: "array"
              },
              message: "must be array"
            }], !1;
          }
          var o = a === e;
        } else var o = !0;
        if (o) {
          if (t.multipleOf !== void 0) {
            let multipleOf = t.multipleOf,
              f = e;
            if (e === f) if (typeof multipleOf == "number" && isFinite(multipleOf)) {
              if (multipleOf <= 0 || isNaN(multipleOf)) return b.errors = [{
                instancePath: instancePath_5 + "/multipleOf",
                schemaPath: "#/properties/multipleOf/exclusiveMinimum",
                keyword: "exclusiveMinimum",
                params: {
                  comparison: ">",
                  limit: 0
                },
                message: "must be > 0"
              }], !1;
            } else return b.errors = [{
              instancePath: instancePath_5 + "/multipleOf",
              schemaPath: "#/properties/multipleOf/type",
              keyword: "type",
              params: {
                type: "number"
              },
              message: "must be number"
            }], !1;
            var o = f === e;
          } else var o = !0;
          if (o) {
            if (t.maximum !== void 0) {
              let maximum = t.maximum,
                f = e;
              if (!(typeof maximum == "number" && isFinite(maximum))) return b.errors = [{
                instancePath: instancePath_5 + "/maximum",
                schemaPath: "#/properties/maximum/type",
                keyword: "type",
                params: {
                  type: "number"
                },
                message: "must be number"
              }], !1;
              var o = f === e;
            } else var o = !0;
            if (o) {
              if (t.exclusiveMaximum !== void 0) {
                let exclusiveMaximum = t.exclusiveMaximum,
                  f = e;
                if (!(typeof exclusiveMaximum == "number" && isFinite(exclusiveMaximum))) return b.errors = [{
                  instancePath: instancePath_5 + "/exclusiveMaximum",
                  schemaPath: "#/properties/exclusiveMaximum/type",
                  keyword: "type",
                  params: {
                    type: "number"
                  },
                  message: "must be number"
                }], !1;
                var o = f === e;
              } else var o = !0;
              if (o) {
                if (t.minimum !== void 0) {
                  let minimum = t.minimum,
                    f = e;
                  if (!(typeof minimum == "number" && isFinite(minimum))) return b.errors = [{
                    instancePath: instancePath_5 + "/minimum",
                    schemaPath: "#/properties/minimum/type",
                    keyword: "type",
                    params: {
                      type: "number"
                    },
                    message: "must be number"
                  }], !1;
                  var o = f === e;
                } else var o = !0;
                if (o) {
                  if (t.exclusiveMinimum !== void 0) {
                    let exclusiveMinimum = t.exclusiveMinimum,
                      f = e;
                    if (!(typeof exclusiveMinimum == "number" && isFinite(exclusiveMinimum))) return b.errors = [{
                      instancePath: instancePath_5 + "/exclusiveMinimum",
                      schemaPath: "#/properties/exclusiveMinimum/type",
                      keyword: "type",
                      params: {
                        type: "number"
                      },
                      message: "must be number"
                    }], !1;
                    var o = f === e;
                  } else var o = !0;
                  if (o) {
                    if (t.maxLength !== void 0) {
                      let maxLength = t.maxLength,
                        f = e,
                        u = e;
                      if (!(typeof maxLength == "number" && !(maxLength % 1) && !isNaN(maxLength) && isFinite(maxLength))) return b.errors = [{
                        instancePath: instancePath_5 + "/maxLength",
                        schemaPath: "#/$defs/nonNegativeInteger/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      }], !1;
                      if (e === u) {
                        if (typeof maxLength == "number" && isFinite(maxLength)) {
                          if (maxLength < 0 || isNaN(maxLength)) return b.errors = [{
                            instancePath: instancePath_5 + "/maxLength",
                            schemaPath: "#/$defs/nonNegativeInteger/minimum",
                            keyword: "minimum",
                            params: {
                              comparison: ">=",
                              limit: 0
                            },
                            message: "must be >= 0"
                          }], !1;
                        }
                      }
                      var o = f === e;
                    } else var o = !0;
                    if (o) {
                      if (t.minLength !== void 0) {
                        let minLength = t.minLength,
                          f = e,
                          u = e;
                        if (!(typeof minLength == "number" && !(minLength % 1) && !isNaN(minLength) && isFinite(minLength))) return b.errors = [{
                          instancePath: instancePath_5 + "/minLength",
                          schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                          keyword: "type",
                          params: {
                            type: "integer"
                          },
                          message: "must be integer"
                        }], !1;
                        if (e === u) {
                          if (typeof minLength == "number" && isFinite(minLength)) {
                            if (minLength < 0 || isNaN(minLength)) return b.errors = [{
                              instancePath: instancePath_5 + "/minLength",
                              schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                              keyword: "minimum",
                              params: {
                                comparison: ">=",
                                limit: 0
                              },
                              message: "must be >= 0"
                            }], !1;
                          }
                        }
                        var o = f === e;
                      } else var o = !0;
                      if (o) {
                        if (t.pattern !== void 0) {
                          let a = e;
                          if (e === a) {
                            if (e === a) {
                              if (typeof t.pattern !== "string") return b.errors = [{
                                instancePath: instancePath_5 + "/pattern",
                                schemaPath: "#/properties/pattern/type",
                                keyword: "type",
                                params: {
                                  type: "string"
                                },
                                message: "must be string"
                              }], !1;
                            }
                          }
                          var o = a === e;
                        } else var o = !0;
                        if (o) {
                          if (t.maxItems !== void 0) {
                            let maxItems = t.maxItems,
                              f = e,
                              u = e;
                            if (!(typeof maxItems == "number" && !(maxItems % 1) && !isNaN(maxItems) && isFinite(maxItems))) return b.errors = [{
                              instancePath: instancePath_5 + "/maxItems",
                              schemaPath: "#/$defs/nonNegativeInteger/type",
                              keyword: "type",
                              params: {
                                type: "integer"
                              },
                              message: "must be integer"
                            }], !1;
                            if (e === u) {
                              if (typeof maxItems == "number" && isFinite(maxItems)) {
                                if (maxItems < 0 || isNaN(maxItems)) return b.errors = [{
                                  instancePath: instancePath_5 + "/maxItems",
                                  schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                  keyword: "minimum",
                                  params: {
                                    comparison: ">=",
                                    limit: 0
                                  },
                                  message: "must be >= 0"
                                }], !1;
                              }
                            }
                            var o = f === e;
                          } else var o = !0;
                          if (o) {
                            if (t.minItems !== void 0) {
                              let minItems = t.minItems,
                                f = e,
                                u = e;
                              if (!(typeof minItems == "number" && !(minItems % 1) && !isNaN(minItems) && isFinite(minItems))) return b.errors = [{
                                instancePath: instancePath_5 + "/minItems",
                                schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                keyword: "type",
                                params: {
                                  type: "integer"
                                },
                                message: "must be integer"
                              }], !1;
                              if (e === u) {
                                if (typeof minItems == "number" && isFinite(minItems)) {
                                  if (minItems < 0 || isNaN(minItems)) return b.errors = [{
                                    instancePath: instancePath_5 + "/minItems",
                                    schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                    keyword: "minimum",
                                    params: {
                                      comparison: ">=",
                                      limit: 0
                                    },
                                    message: "must be >= 0"
                                  }], !1;
                                }
                              }
                              var o = f === e;
                            } else var o = !0;
                            if (o) {
                              if (t.uniqueItems !== void 0) {
                                let a = e;
                                if (typeof t.uniqueItems !== "boolean") return b.errors = [{
                                  instancePath: instancePath_5 + "/uniqueItems",
                                  schemaPath: "#/properties/uniqueItems/type",
                                  keyword: "type",
                                  params: {
                                    type: "boolean"
                                  },
                                  message: "must be boolean"
                                }], !1;
                                var o = a === e;
                              } else var o = !0;
                              if (o) {
                                if (t.maxContains !== void 0) {
                                  let maxContains = t.maxContains,
                                    f = e,
                                    u = e;
                                  if (!(typeof maxContains == "number" && !(maxContains % 1) && !isNaN(maxContains) && isFinite(maxContains))) return b.errors = [{
                                    instancePath: instancePath_5 + "/maxContains",
                                    schemaPath: "#/$defs/nonNegativeInteger/type",
                                    keyword: "type",
                                    params: {
                                      type: "integer"
                                    },
                                    message: "must be integer"
                                  }], !1;
                                  if (e === u) {
                                    if (typeof maxContains == "number" && isFinite(maxContains)) {
                                      if (maxContains < 0 || isNaN(maxContains)) return b.errors = [{
                                        instancePath: instancePath_5 + "/maxContains",
                                        schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                        keyword: "minimum",
                                        params: {
                                          comparison: ">=",
                                          limit: 0
                                        },
                                        message: "must be >= 0"
                                      }], !1;
                                    }
                                  }
                                  var o = f === e;
                                } else var o = !0;
                                if (o) {
                                  if (t.minContains !== void 0) {
                                    let minContains = t.minContains,
                                      f = e,
                                      u = e;
                                    if (!(typeof minContains == "number" && !(minContains % 1) && !isNaN(minContains) && isFinite(minContains))) return b.errors = [{
                                      instancePath: instancePath_5 + "/minContains",
                                      schemaPath: "#/$defs/nonNegativeInteger/type",
                                      keyword: "type",
                                      params: {
                                        type: "integer"
                                      },
                                      message: "must be integer"
                                    }], !1;
                                    if (e === u) {
                                      if (typeof minContains == "number" && isFinite(minContains)) {
                                        if (minContains < 0 || isNaN(minContains)) return b.errors = [{
                                          instancePath: instancePath_5 + "/minContains",
                                          schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                          keyword: "minimum",
                                          params: {
                                            comparison: ">=",
                                            limit: 0
                                          },
                                          message: "must be >= 0"
                                        }], !1;
                                      }
                                    }
                                    var o = f === e;
                                  } else var o = !0;
                                  if (o) {
                                    if (t.maxProperties !== void 0) {
                                      let maxProperties = t.maxProperties,
                                        f = e,
                                        u = e;
                                      if (!(typeof maxProperties == "number" && !(maxProperties % 1) && !isNaN(maxProperties) && isFinite(maxProperties))) return b.errors = [{
                                        instancePath: instancePath_5 + "/maxProperties",
                                        schemaPath: "#/$defs/nonNegativeInteger/type",
                                        keyword: "type",
                                        params: {
                                          type: "integer"
                                        },
                                        message: "must be integer"
                                      }], !1;
                                      if (e === u) {
                                        if (typeof maxProperties == "number" && isFinite(maxProperties)) {
                                          if (maxProperties < 0 || isNaN(maxProperties)) return b.errors = [{
                                            instancePath: instancePath_5 + "/maxProperties",
                                            schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                            keyword: "minimum",
                                            params: {
                                              comparison: ">=",
                                              limit: 0
                                            },
                                            message: "must be >= 0"
                                          }], !1;
                                        }
                                      }
                                      var o = f === e;
                                    } else var o = !0;
                                    if (o) {
                                      if (t.minProperties !== void 0) {
                                        let minProperties = t.minProperties,
                                          f = e,
                                          u = e;
                                        if (!(typeof minProperties == "number" && !(minProperties % 1) && !isNaN(minProperties) && isFinite(minProperties))) return b.errors = [{
                                          instancePath: instancePath_5 + "/minProperties",
                                          schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                          keyword: "type",
                                          params: {
                                            type: "integer"
                                          },
                                          message: "must be integer"
                                        }], !1;
                                        if (e === u) {
                                          if (typeof minProperties == "number" && isFinite(minProperties)) {
                                            if (minProperties < 0 || isNaN(minProperties)) return b.errors = [{
                                              instancePath: instancePath_5 + "/minProperties",
                                              schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                              keyword: "minimum",
                                              params: {
                                                comparison: ">=",
                                                limit: 0
                                              },
                                              message: "must be >= 0"
                                            }], !1;
                                          }
                                        }
                                        var o = f === e;
                                      } else var o = !0;
                                      if (o) {
                                        if (t.required !== void 0) {
                                          let required = t.required,
                                            f = e;
                                          if (e === e) if (Array.isArray(required)) {
                                            var w = !0;
                                            let N = required.length;
                                            for (let v = 0; v < N; v++) {
                                              let _ = e;
                                              if (typeof required[v] !== "string") return b.errors = [{
                                                instancePath: instancePath_5 + "/required/" + v,
                                                schemaPath: "#/$defs/stringArray/items/type",
                                                keyword: "type",
                                                params: {
                                                  type: "string"
                                                },
                                                message: "must be string"
                                              }], !1;
                                              var w = _ === e;
                                              if (!w) break;
                                            }
                                            if (w) {
                                              let i_3 = required.length,
                                                j_3;
                                              if (i_3 > 1) {
                                                let j = {};
                                                for (; i_3--;) {
                                                  let g = required[i_3];
                                                  if (typeof g !== "string") continue;
                                                  if (typeof j[g] == "number") {
                                                    return j_3 = j[g], b.errors = [{
                                                      instancePath: instancePath_5 + "/required",
                                                      schemaPath: "#/$defs/stringArray/uniqueItems",
                                                      keyword: "uniqueItems",
                                                      params: {
                                                        i: i_3,
                                                        j: j_3
                                                      },
                                                      message: "must NOT have duplicate items (items ## " + j_3 + " and " + i_3 + " are identical)"
                                                    }], !1;
                                                    break;
                                                  }
                                                  j[g] = i_3;
                                                }
                                              }
                                            }
                                          } else return b.errors = [{
                                            instancePath: instancePath_5 + "/required",
                                            schemaPath: "#/$defs/stringArray/type",
                                            keyword: "type",
                                            params: {
                                              type: "array"
                                            },
                                            message: "must be array"
                                          }], !1;
                                          var o = f === e;
                                        } else var o = !0;
                                        if (o) if (t.dependentRequired !== void 0) {
                                          let dependentRequired = t.dependentRequired,
                                            f = e;
                                          if (e === f) if (dependentRequired && typeof dependentRequired == "object" && !Array.isArray(dependentRequired)) for (let m in dependentRequired) {
                                            let N = dependentRequired[m],
                                              v = e;
                                            if (e === e) if (Array.isArray(N)) {
                                              var k = !0;
                                              let j = N.length;
                                              for (let g = 0; g < j; g++) {
                                                let P = e;
                                                if (typeof N[g] !== "string") return b.errors = [{
                                                  instancePath: instancePath_5 + "/dependentRequired/" + m.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + g,
                                                  schemaPath: "#/$defs/stringArray/items/type",
                                                  keyword: "type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "must be string"
                                                }], !1;
                                                var k = P === e;
                                                if (!k) break;
                                              }
                                              if (k) {
                                                let i_4 = N.length,
                                                  j_4;
                                                if (i_4 > 1) {
                                                  let S = {};
                                                  for (; i_4--;) {
                                                    let M = N[i_4];
                                                    if (typeof M !== "string") continue;
                                                    if (typeof S[M] == "number") {
                                                      return j_4 = S[M], b.errors = [{
                                                        instancePath: instancePath_5 + "/dependentRequired/" + m.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                        schemaPath: "#/$defs/stringArray/uniqueItems",
                                                        keyword: "uniqueItems",
                                                        params: {
                                                          i: i_4,
                                                          j: j_4
                                                        },
                                                        message: "must NOT have duplicate items (items ## " + j_4 + " and " + i_4 + " are identical)"
                                                      }], !1;
                                                      break;
                                                    }
                                                    S[M] = i_4;
                                                  }
                                                }
                                              }
                                            } else return b.errors = [{
                                              instancePath: instancePath_5 + "/dependentRequired/" + m.replace(/~/g, "~0").replace(/\//g, "~1"),
                                              schemaPath: "#/$defs/stringArray/type",
                                              keyword: "type",
                                              params: {
                                                type: "array"
                                              },
                                              message: "must be array"
                                            }], !1;
                                            var I = v === e;
                                            if (!I) break;
                                          } else return b.errors = [{
                                            instancePath: instancePath_5 + "/dependentRequired",
                                            schemaPath: "#/properties/dependentRequired/type",
                                            keyword: "type",
                                            params: {
                                              type: "object"
                                            },
                                            message: "must be object"
                                          }], !1;
                                          var o = f === e;
                                        } else var o = !0;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return b.errors = r, e === 0;
}
b.evaluated = {
  props: {
    type: !0,
    const: !0,
    enum: !0,
    multipleOf: !0,
    maximum: !0,
    exclusiveMaximum: !0,
    minimum: !0,
    exclusiveMinimum: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxContains: !0,
    minContains: !0,
    maxProperties: !0,
    minProperties: !0,
    required: !0,
    dependentRequired: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
var De = {
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
function L(t, {
  instancePath: instancePath_6 = "",
  parentData: parentData_9,
  parentDataProperty: parentDataProperty_11,
  rootData: rootData_6 = t,
  dynamicAnchors: dynamicAnchors_6 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_6 = L.evaluated;
  if (evaluated_6.dynamicProps) evaluated_6.props = void 0;
  if (evaluated_6.dynamicItems) evaluated_6.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return L.errors = [{
    instancePath: instancePath_6,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: De.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_6.meta) dynamicAnchors_6.meta = L;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.title !== void 0) {
        let d = e;
        if (typeof t.title !== "string") return L.errors = [{
          instancePath: instancePath_6 + "/title",
          schemaPath: "#/properties/title/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        }], !1;
        var n = d === e;
      } else var n = !0;
      if (n) {
        if (t.description !== void 0) {
          let d = e;
          if (typeof t.description !== "string") return L.errors = [{
            instancePath: instancePath_6 + "/description",
            schemaPath: "#/properties/description/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          }], !1;
          var n = d === e;
        } else var n = !0;
        if (n) {
          if (t.deprecated !== void 0) {
            let d = e;
            if (typeof t.deprecated !== "boolean") return L.errors = [{
              instancePath: instancePath_6 + "/deprecated",
              schemaPath: "#/properties/deprecated/type",
              keyword: "type",
              params: {
                type: "boolean"
              },
              message: "must be boolean"
            }], !1;
            var n = d === e;
          } else var n = !0;
          if (n) {
            if (t.readOnly !== void 0) {
              let d = e;
              if (typeof t.readOnly !== "boolean") return L.errors = [{
                instancePath: instancePath_6 + "/readOnly",
                schemaPath: "#/properties/readOnly/type",
                keyword: "type",
                params: {
                  type: "boolean"
                },
                message: "must be boolean"
              }], !1;
              var n = d === e;
            } else var n = !0;
            if (n) {
              if (t.writeOnly !== void 0) {
                let d = e;
                if (typeof t.writeOnly !== "boolean") return L.errors = [{
                  instancePath: instancePath_6 + "/writeOnly",
                  schemaPath: "#/properties/writeOnly/type",
                  keyword: "type",
                  params: {
                    type: "boolean"
                  },
                  message: "must be boolean"
                }], !1;
                var n = d === e;
              } else var n = !0;
              if (n) if (t.examples !== void 0) {
                let d = e;
                if (e === d) {
                  if (!Array.isArray(t.examples)) return L.errors = [{
                    instancePath: instancePath_6 + "/examples",
                    schemaPath: "#/properties/examples/type",
                    keyword: "type",
                    params: {
                      type: "array"
                    },
                    message: "must be array"
                  }], !1;
                }
                var n = d === e;
              } else var n = !0;
            }
          }
        }
      }
    }
  }
  return L.errors = r, e === 0;
}
L.evaluated = {
  props: {
    title: !0,
    description: !0,
    default: !0,
    deprecated: !0,
    readOnly: !0,
    writeOnly: !0,
    examples: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
var Re = {
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
function X(t, {
  instancePath: instancePath_7 = "",
  parentData: parentData_10,
  parentDataProperty: parentDataProperty_12,
  rootData: rootData_7 = t,
  dynamicAnchors: dynamicAnchors_7 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_7 = X.evaluated;
  if (evaluated_7.dynamicProps) evaluated_7.props = void 0;
  if (evaluated_7.dynamicItems) evaluated_7.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return X.errors = [{
    instancePath: instancePath_7,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Re.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_7.meta) dynamicAnchors_7.meta = X;
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.format !== void 0) {
        if (typeof t.format !== "string") return X.errors = [{
          instancePath: instancePath_7 + "/format",
          schemaPath: "#/properties/format/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        }], !1;
      }
    }
  }
  return X.errors = r, e === 0;
}
X.evaluated = {
  props: {
    format: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
var Ae = {
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
function C(parentData_12, {
  instancePath: instancePath_8 = "",
  parentData: parentData_11,
  parentDataProperty: parentDataProperty_13,
  rootData: rootData_8 = parentData_12,
  dynamicAnchors: dynamicAnchors_8 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_8 = C.evaluated;
  if (evaluated_8.dynamicProps) evaluated_8.props = void 0;
  if (evaluated_8.dynamicItems) evaluated_8.items = void 0;
  if (!(parentData_12 && typeof parentData_12 == "object" && !Array.isArray(parentData_12)) && typeof parentData_12 !== "boolean") return C.errors = [{
    instancePath: instancePath_8,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: Ae.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_8.meta) dynamicAnchors_8.meta = C;
  if (e === 0) {
    if (parentData_12 && typeof parentData_12 == "object" && !Array.isArray(parentData_12)) {
      if (parentData_12.contentEncoding !== void 0) {
        let I = e;
        if (typeof parentData_12.contentEncoding !== "string") return C.errors = [{
          instancePath: instancePath_8 + "/contentEncoding",
          schemaPath: "#/properties/contentEncoding/type",
          keyword: "type",
          params: {
            type: "string"
          },
          message: "must be string"
        }], !1;
        var n = I === e;
      } else var n = !0;
      if (n) {
        if (parentData_12.contentMediaType !== void 0) {
          let I = e;
          if (typeof parentData_12.contentMediaType !== "string") return C.errors = [{
            instancePath: instancePath_8 + "/contentMediaType",
            schemaPath: "#/properties/contentMediaType/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          }], !1;
          var n = I === e;
        } else var n = !0;
        if (n) if (parentData_12.contentSchema !== void 0) {
          let contentSchema = parentData_12.contentSchema,
            a = e,
            meta_16 = dynamicAnchors_8.meta;
          if (meta_16) {
            if (!meta_16(contentSchema, {
              instancePath: instancePath_8 + "/contentSchema",
              parentData: parentData_12,
              parentDataProperty: "contentSchema",
              rootData: rootData_8,
              dynamicAnchors: dynamicAnchors_8
            })) r = r === null ? meta_16.errors : r.concat(meta_16.errors), e = r.length;else var props_31 = meta_16.evaluated.props,
              items_32 = meta_16.evaluated.items;
          } else if (!C(contentSchema, {
            instancePath: instancePath_8 + "/contentSchema",
            parentData: parentData_12,
            parentDataProperty: "contentSchema",
            rootData: rootData_8,
            dynamicAnchors: dynamicAnchors_8
          })) r = r === null ? C.errors : r.concat(C.errors), e = r.length;else {
            var props_32 = C.evaluated.props;
            if (props_31 !== !0 && props_32 !== void 0) if (props_32 === !0) props_31 = !0;else props_31 = props_31 || {}, Object.assign(props_31, props_32);
            var items_33 = C.evaluated.items;
            if (items_32 !== !0 && items_33 !== void 0) items_32 = items_33 === !0 ? !0 : items_32 > items_33 ? items_32 : items_33;
          }
          var n = a === e;
        } else var n = !0;
      }
    }
  }
  return C.errors = r, e === 0;
}
C.evaluated = {
  props: {
    contentEncoding: !0,
    contentMediaType: !0,
    contentSchema: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
function D(t, {
  instancePath: instancePath_9 = "",
  parentData: parentData_13,
  parentDataProperty: parentDataProperty_14,
  rootData: rootData_9 = t,
  dynamicAnchors: dynamicAnchors_9 = {}
} = {}) {
  let r = null,
    e = 0,
    evaluated_9 = D.evaluated;
  if (evaluated_9.dynamicProps) evaluated_9.props = void 0;
  if (evaluated_9.dynamicItems) evaluated_9.items = void 0;
  if (!(t && typeof t == "object" && !Array.isArray(t)) && typeof t !== "boolean") return D.errors = [{
    instancePath: instancePath_9,
    schemaPath: "#/type",
    keyword: "type",
    params: {
      type: je.type
    },
    message: "must be object,boolean"
  }], !1;
  if (!dynamicAnchors_9.meta) dynamicAnchors_9.meta = D;
  let n = e;
  if (!x(t, {
    instancePath: instancePath_9,
    parentData: parentData_13,
    parentDataProperty: parentDataProperty_14,
    rootData: rootData_9,
    dynamicAnchors: dynamicAnchors_9
  })) r = r === null ? x.errors : r.concat(x.errors), e = r.length;
  var d = n === e;
  if (d) {
    let P = e;
    if (!l(t, {
      instancePath: instancePath_9,
      parentData: parentData_13,
      parentDataProperty: parentDataProperty_14,
      rootData: rootData_9,
      dynamicAnchors: dynamicAnchors_9
    })) r = r === null ? l.errors : r.concat(l.errors), e = r.length;
    var d = P === e;
    if (d) {
      let M = e;
      if (!F(t, {
        instancePath: instancePath_9,
        parentData: parentData_13,
        parentDataProperty: parentDataProperty_14,
        rootData: rootData_9,
        dynamicAnchors: dynamicAnchors_9
      })) r = r === null ? F.errors : r.concat(F.errors), e = r.length;
      var d = M === e;
      if (d) {
        let T = e;
        if (!b(t, {
          instancePath: instancePath_9,
          parentData: parentData_13,
          parentDataProperty: parentDataProperty_14,
          rootData: rootData_9,
          dynamicAnchors: dynamicAnchors_9
        })) r = r === null ? b.errors : r.concat(b.errors), e = r.length;
        var d = T === e;
        if (d) {
          let Q = e;
          if (!L(t, {
            instancePath: instancePath_9,
            parentData: parentData_13,
            parentDataProperty: parentDataProperty_14,
            rootData: rootData_9,
            dynamicAnchors: dynamicAnchors_9
          })) r = r === null ? L.errors : r.concat(L.errors), e = r.length;
          var d = Q === e;
          if (d) {
            let ae = e;
            if (!X(t, {
              instancePath: instancePath_9,
              parentData: parentData_13,
              parentDataProperty: parentDataProperty_14,
              rootData: rootData_9,
              dynamicAnchors: dynamicAnchors_9
            })) r = r === null ? X.errors : r.concat(X.errors), e = r.length;
            var d = ae === e;
            if (d) {
              let Y = e;
              if (!C(t, {
                instancePath: instancePath_9,
                parentData: parentData_13,
                parentDataProperty: parentDataProperty_14,
                rootData: rootData_9,
                dynamicAnchors: dynamicAnchors_9
              })) r = r === null ? C.errors : r.concat(C.errors), e = r.length;
              var d = Y === e;
            }
          }
        }
      }
    }
  }
  if (e === 0) {
    if (t && typeof t == "object" && !Array.isArray(t)) {
      if (t.definitions !== void 0) {
        let P = t.definitions,
          S = e;
        if (e === S) if (P && typeof P == "object" && !Array.isArray(P)) for (let parentDataProperty_15 in P) {
          let Z = P[parentDataProperty_15],
            T = e,
            meta_17 = dynamicAnchors_9.meta;
          if (meta_17) {
            if (!meta_17(Z, {
              instancePath: instancePath_9 + "/definitions/" + parentDataProperty_15.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: P,
              parentDataProperty: parentDataProperty_15,
              rootData: rootData_9,
              dynamicAnchors: dynamicAnchors_9
            })) r = r === null ? meta_17.errors : r.concat(meta_17.errors), e = r.length;else var props_33 = meta_17.evaluated.props,
              items_34 = meta_17.evaluated.items;
          } else if (!D(Z, {
            instancePath: instancePath_9 + "/definitions/" + parentDataProperty_15.replace(/~/g, "~0").replace(/\//g, "~1"),
            parentData: P,
            parentDataProperty: parentDataProperty_15,
            rootData: rootData_9,
            dynamicAnchors: dynamicAnchors_9
          })) r = r === null ? D.errors : r.concat(D.errors), e = r.length;else {
            var props_34 = D.evaluated.props;
            if (props_33 !== !0 && props_34 !== void 0) if (props_34 === !0) props_33 = !0;else props_33 = props_33 || {}, Object.assign(props_33, props_34);
            var items_35 = D.evaluated.items;
            if (items_34 !== !0 && items_35 !== void 0) items_34 = items_35 === !0 ? !0 : items_34 > items_35 ? items_34 : items_35;
          }
          var a = T === e;
          if (!a) break;
        } else return D.errors = [{
          instancePath: instancePath_9 + "/definitions",
          schemaPath: "#/properties/definitions/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        }], !1;
        var f = S === e;
      } else var f = !0;
      if (f) {
        if (t.dependencies !== void 0) {
          let P = t.dependencies,
            S = e;
          if (e === S) if (P && typeof P == "object" && !Array.isArray(P)) for (let parentDataProperty_16 in P) {
            let T = P[parentDataProperty_16],
              V = e,
              Q = e,
              K = !1,
              ae = e,
              meta_18 = dynamicAnchors_9.meta;
            if (meta_18) {
              if (!meta_18(T, {
                instancePath: instancePath_9 + "/dependencies/" + parentDataProperty_16.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: P,
                parentDataProperty: parentDataProperty_16,
                rootData: rootData_9,
                dynamicAnchors: dynamicAnchors_9
              })) r = r === null ? meta_18.errors : r.concat(meta_18.errors), e = r.length;else var props_35 = meta_18.evaluated.props,
                items_36 = meta_18.evaluated.items;
            } else if (!D(T, {
              instancePath: instancePath_9 + "/dependencies/" + parentDataProperty_16.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: P,
              parentDataProperty: parentDataProperty_16,
              rootData: rootData_9,
              dynamicAnchors: dynamicAnchors_9
            })) r = r === null ? D.errors : r.concat(D.errors), e = r.length;else {
              var props_36 = D.evaluated.props;
              if (props_35 !== !0 && props_36 !== void 0) if (props_36 === !0) props_35 = !0;else props_35 = props_35 || {}, Object.assign(props_35, props_36);
              var items_37 = D.evaluated.items;
              if (items_36 !== !0 && items_37 !== void 0) items_36 = items_37 === !0 ? !0 : items_36 > items_37 ? items_36 : items_37;
            }
            var j = ae === e;
            K = K || j;
            let Y = e;
            if (e === e) if (Array.isArray(T)) {
              var _ = !0;
              let G = T.length;
              for (let U = 0; U < G; U++) {
                let H = e;
                if (typeof T[U] !== "string") {
                  let J = {
                    instancePath: instancePath_9 + "/dependencies/" + parentDataProperty_16.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + U,
                    schemaPath: "meta/validation#/$defs/stringArray/items/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  };
                  if (r === null) r = [J];else r.push(J);
                  e++;
                }
                var _ = H === e;
                if (!_) break;
              }
              if (_) {
                let i_5 = T.length,
                  j_5;
                if (i_5 > 1) {
                  let ee = {};
                  for (; i_5--;) {
                    let J = T[i_5];
                    if (typeof J !== "string") continue;
                    if (typeof ee[J] == "number") {
                      j_5 = ee[J];
                      let te = {
                        instancePath: instancePath_9 + "/dependencies/" + parentDataProperty_16.replace(/~/g, "~0").replace(/\//g, "~1"),
                        schemaPath: "meta/validation#/$defs/stringArray/uniqueItems",
                        keyword: "uniqueItems",
                        params: {
                          i: i_5,
                          j: j_5
                        },
                        message: "must NOT have duplicate items (items ## " + j_5 + " and " + i_5 + " are identical)"
                      };
                      if (r === null) r = [te];else r.push(te);
                      e++;
                      break;
                    }
                    ee[J] = i_5;
                  }
                }
              }
            } else {
              let G = {
                instancePath: instancePath_9 + "/dependencies/" + parentDataProperty_16.replace(/~/g, "~0").replace(/\//g, "~1"),
                schemaPath: "meta/validation#/$defs/stringArray/type",
                keyword: "type",
                params: {
                  type: "array"
                },
                message: "must be array"
              };
              if (r === null) r = [G];else r.push(G);
              e++;
            }
            var j = Y === e;
            if (K = K || j, j) {
              if (items_36 !== !0) items_36 = !0;
            }
            if (!K) {
              let G = {
                instancePath: instancePath_9 + "/dependencies/" + parentDataProperty_16.replace(/~/g, "~0").replace(/\//g, "~1"),
                schemaPath: "#/properties/dependencies/additionalProperties/anyOf",
                keyword: "anyOf",
                params: {},
                message: "must match a schema in anyOf"
              };
              if (r === null) r = [G];else r.push(G);
              return e++, D.errors = r, !1;
            } else if (e = Q, r !== null) if (Q) r.length = Q;else r = null;
            var g = V === e;
            if (!g) break;
          } else return D.errors = [{
            instancePath: instancePath_9 + "/dependencies",
            schemaPath: "#/properties/dependencies/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          }], !1;
          var f = S === e;
        } else var f = !0;
        if (f) {
          if (t.$recursiveAnchor !== void 0) {
            let $recursiveAnchor = t.$recursiveAnchor,
              S = e;
            if (e === e) if (typeof $recursiveAnchor === "string") {
              if (!regExp_2.test($recursiveAnchor)) return D.errors = [{
                instancePath: instancePath_9 + "/$recursiveAnchor",
                schemaPath: "meta/core#/$defs/anchorString/pattern",
                keyword: "pattern",
                params: {
                  pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                },
                message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
              }], !1;
            } else return D.errors = [{
              instancePath: instancePath_9 + "/$recursiveAnchor",
              schemaPath: "meta/core#/$defs/anchorString/type",
              keyword: "type",
              params: {
                type: "string"
              },
              message: "must be string"
            }], !1;
            var f = S === e;
          } else var f = !0;
          if (f) if (t.$recursiveRef !== void 0) {
            let P = e,
              S = e;
            if (e === S) {
              if (e === S) {
                if (typeof t.$recursiveRef !== "string") return D.errors = [{
                  instancePath: instancePath_9 + "/$recursiveRef",
                  schemaPath: "meta/core#/$defs/uriReferenceString/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                }], !1;
              }
            }
            var f = P === e;
          } else var f = !0;
        }
      }
    }
  }
  return D.errors = r, e === 0;
}
D.evaluated = {
  props: {
    definitions: !0,
    dependencies: !0,
    $recursiveAnchor: !0,
    $recursiveRef: !0,
    contentEncoding: !0,
    contentMediaType: !0,
    contentSchema: !0,
    format: !0,
    title: !0,
    description: !0,
    default: !0,
    deprecated: !0,
    readOnly: !0,
    writeOnly: !0,
    examples: !0,
    type: !0,
    const: !0,
    enum: !0,
    multipleOf: !0,
    maximum: !0,
    exclusiveMaximum: !0,
    minimum: !0,
    exclusiveMinimum: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxContains: !0,
    minContains: !0,
    maxProperties: !0,
    minProperties: !0,
    required: !0,
    dependentRequired: !0,
    unevaluatedItems: !0,
    unevaluatedProperties: !0,
    prefixItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    properties: !0,
    patternProperties: !0,
    dependentSchemas: !0,
    propertyNames: !0,
    if: !0,
    then: !0,
    else: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0,
    not: !0,
    $id: !0,
    $schema: !0,
    $ref: !0,
    $anchor: !0,
    $dynamicRef: !0,
    $dynamicAnchor: !0,
    $vocabulary: !0,
    $comment: !0,
    $defs: !0
  },
  dynamicProps: !1,
  dynamicItems: !1
};
export { qe as default };