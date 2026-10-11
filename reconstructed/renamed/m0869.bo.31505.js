/* ==========================================================================
 * m0869.bo   [m0869_0xd12567a.js @ 31505]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
class bo {
  now;
  entries = new Map();
  constructor(e = Date.now) {
    this.now = e;
  }
  async enter(e, r) {
    let s = this.now();
    for (let [F, R] of this.entries) if (R.state === "warm" && R.until <= s) this.entries.delete(F);
    let g = this.entries.get(e),
      f,
      w = 0;
    if (g === void 0) f = Ar(), this.entries.set(e, f);else if (g.state === "warming" && r.capMs > 0) {
      let F = this.now();
      await Cr(g.ready, r.capMs, r.signal), w = Math.max(0, this.now() - F);
    }
    let A = !1;
    return {
      leader: f !== void 0,
      waitedMs: w,
      responded: () => {
        A = !0, this.markWarm(e);
      },
      done: () => {
        if (A || f === void 0) return;
        if (this.entries.get(e) === f && f.state === "warming") this.entries.delete(e), f.release();
      }
    };
  }
  stateOf(e) {
    let r = this.entries.get(e);
    if (r === void 0) return "cold";
    if (r.state === "warm") return r.until > this.now() ? "warm" : "cold";
    return "warming";
  }
  clear() {
    for (let e of this.entries.values()) if (e.state === "warming") e.release();
    this.entries.clear();
  }
  markWarm(e) {
    let r = this.entries.get(e);
    if (this.entries.set(e, {
      state: "warm",
      until: this.now() + Er
    }), r?.state === "warming") r.release();
  }
}
