/* ==============================================================================
 * m0132.ALr   [m0132_0xc24a4bb.js @ 135296]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0132_0xc24a4bb.js  字符偏移 135296
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function ALr(e) {
  let {
    args: t,
    context: o,
    intoEnvironment: r,
    stamped: n,
    evaluateOptions: s
  } = e, {
    pluginName: i,
    pluginRoot: p
  } = t, a = bn(p), f = new Map, m = new On.SourceTextModule(ZVn, {
    context: o,
    identifier: G6e
  }), u = ya(t.linked), d = da(t.links);
  async function y(h, v) {
    if (h === G6e) return m;
    let M = e.virtual?.get(h);
    if (M) return M;
    if (!BLr(h)) throw iOo(i, h, py(a, v.identifier) || v.identifier);
    let R = d.get(xo(bn(v.identifier), h)),
      H = R === void 0 ? void 0 : u.get(R);
    if (R !== void 0 && H !== void 0) return x(R, H);
    let F = await aOo({
      spelled: h,
      importer: v.identifier,
      root: a,
      pluginName: i
    }, u, new Map);
    return u.set(F.file, F.source), x(F.file, F.source)
  }
  let c = new Map;

  function k(h) {
    if (h.status === "unlinked") c.set(h.identifier, h.link(y).then(() => n(() => h.evaluate(s))));
    return c.get(h.identifier)
  }

  function A(h) {
    if (h.status === "errored") throw h.error;
    if (h.status === "linked") {
      let v = n(() => h.evaluate(s));
      return c.set(h.identifier, v), v
    }
    return
  }
  let x = (h, v) => f.get(h) ?? _(h, v);

  function _(h, v) {
    let M = new On.SourceTextModule(q2o(wdn(h, v), h, a), {
      context: o,
      identifier: h,
      initializeImportMeta: (R) => {
        Object.assign(R, la(h))
      },
      async importModuleDynamically(R, H) {
        try {
          let F = await y(R, H);
          return await k(F), F
        } catch (F) {
          throw r(F)
        }
      }
    });
    return f.set(h, M), M
  }
  return {
    async load(h, v) {
      let M = bn(h);
      u.set(M, v);
      let R = x(M, v);
      return await k(R), await A(R), R.namespace
    }
  }
}
