/* ==========================================================================
 * m0132.F2o   [m0132_0xc24a4bb.js @ 176457]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function F2o(e) {
  let {
      run: t,
      catch: o,
      hop: r,
      ...n
    } = e,
    s = i => async function* (a, f, m) {
      let u = [],
        d,
        y = !1,
        c = h => new Promise((v, M) => {
          if (y) {
            h.return(void 0).catch(() => {
              return;
            }), M(Ln(e));
            return;
          }
          u = [...u, {
            stream: h,
            resolve: v,
            reject: M
          }], d?.();
        }),
        k = LCe({
          ...CVn(f),
          call: h => c(m.open(h)),
          to: (h, ...v) => c(pLr(h, f, v))
        }),
        A = i(a, k).then(h => ({
          result: h,
          error: void 0,
          isThrown: !1
        }), h => ({
          result: void 0,
          error: h,
          isThrown: !0
        })),
        x;
      A.then(h => {
        x = h, d?.();
      });
      let _;
      try {
        while (!0) {
          if ([_, ...u] = u, _ === void 0 && x !== void 0) break;
          if (_ === void 0) {
            await new Promise(h => {
              d = h;
            }), d = void 0;
            continue;
          }
          try {
            while (x === void 0) {
              let h = await Promise.race([_.stream.next(), A]);
              if (!("done" in h)) break;
              if (h.done === !0) {
                _.resolve(h.value), _ = void 0;
                break;
              }
              yield h.value;
            }
          } catch (h) {
            _?.reject(h), _ = void 0;
          }
        }
      } finally {
        y = !0;
        for (let h of [...(_ ? [_] : []), ...u]) h.reject(Ln(e)), h.stream.return(void 0).catch(() => {
          return;
        });
        u = [];
      }
      if (x.isThrown) throw x.error;
      return x.result;
    };
  return {
    ...n,
    run: s((i, p) => t(i, p, {
      call: a => p(a),
      floors: [],
      cutAt: void 0
    })),
    ...(o !== void 0 && {
      catch: s((i, p) => o(i, p))
    })
  };
}
