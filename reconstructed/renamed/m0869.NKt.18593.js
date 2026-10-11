/* ==========================================================================
 * m0869.NKt   [m0869_0xd12567a.js @ 18593]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async function NKt(e, r) {
  let s = STn(e, r);
  if (s !== null) return {
    error: s
  };
  let g = no(oe(), e),
    f = vn.O_RDONLY | sr,
    w;
  try {
    w = await Zn(g, f);
  } catch (A) {
    return {
      error: B(A) ? `Workflow script file not found: ${e}` : `Failed to read workflow script file ${e}`
    };
  }
  try {
    let A = await w.stat({
      bigint: !0
    });
    if (A.ino === 0n || A.nlink > 1n) return {
      error: Vt(e)
    };
    let F = await $Kt(w.fd),
      R = F ?? (await to(g));
    if (F === null) {
      let H = await Zn(R, f | ir);
      try {
        let z = await H.stat({
          bigint: !0
        });
        if (z.ino !== A.ino || z.dev !== A.dev || z.nlink !== 1n) return {
          error: Vt(e)
        };
      } finally {
        await H.close();
      }
      if ((await to(R).catch(() => null)) !== R) return {
        error: Vt(e)
      };
      if ((await w.stat({
        bigint: !0
      })).nlink !== 1n) return {
        error: Vt(e)
      };
    }
    if (!ro(R, r)) return {
      error: Vt(e)
    };
    if (!A.isFile()) return {
      error: `Workflow script file ${e} is not a regular file`
    };
    if (A.size > BigInt(Nb)) return {
      error: `Workflow script file ${e} exceeds ${Nb} bytes`
    };
    let ce = Buffer.alloc(Number(A.size)),
      W = 0;
    while (W < ce.length) {
      let {
        bytesRead: H
      } = await w.read(ce, W, ce.length - W, W);
      if (H === 0) break;
      W += H;
    }
    return {
      script: ce.subarray(0, W).toString("utf-8"),
      path: R
    };
  } catch {
    return {
      error: `Failed to read workflow script file ${e}`
    };
  } finally {
    await w.close();
  }
}
