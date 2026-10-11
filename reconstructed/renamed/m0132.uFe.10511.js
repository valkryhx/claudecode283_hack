/* ==========================================================================
 * m0132.uFe   [m0132_0xc24a4bb.js @ 10511]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
function uFe(e, {
  arrayLengthCap: t
} = {
  arrayLengthCap: Sx
}) {
  let o = t === void 0 ? "" : `if (len > ${t}) {
              throw capErr('array length ' + len + ' exceeds the maximum of ${t} supported across the workflow VM boundary')
            }`;
  return me.runInContext(`(() => {
      const _WeakMap = WeakMap, _WeakSet = WeakSet, _isArray = Array.isArray,
            _keys = Object.keys, _defineProperty = Object.defineProperty,
            _Error = Error, _isSafeInteger = Number.isSafeInteger
      // Closure-private registry of clone-created boundary-cap errors, so
      // the per-element/per-key catch blocks below can tell them apart from
      // an INCIDENTAL throw (a hostile getter / Proxy trap on a single
      // value). The cap error must propagate out of the whole clone at any
      // nesting depth; incidental throws still degrade that one slot to
      // undefined. Membership, NOT a tag property: childWorkflow feeds this
      // cloner parent-VM (attacker-reachable) values as childArgs, and a
      // thrown Proxy whose get trap answers true for any key would
      // fake-match a property-based check \u2014 the walker would then rethrow
      // the ATTACKER'S object to the host, whose error extraction reads
      // .message on it host-side. WeakSet.has is identity-based and runs
      // no attacker code.
      const _capSet = new _WeakSet()
      function capErr(msg) {
        const e = new _Error(msg)
        _capSet.add(e)
        return e
      }
      function isCap(e) {
        try { return _capSet.has(e) } catch { return false }
      }
      return (hostVal) => {
        const seen = new _WeakMap()
        function c(v) {
          if (typeof v === 'function') return undefined
          if (v === null || typeof v !== 'object') return v
          const hit = seen.get(v); if (hit !== undefined) return hit
          if (_isArray(v)) {
            // Read length ONCE \u2014 re-reading v.length per iteration lets a
            // Proxy length getter that increments make i < len never false
            // (infinite host-thread hang outside the VM sync-timeout). The
            // read is guarded: at the ROOT of the clone there is no
            // enclosing per-slot catch, so an unguarded read would let a
            // length getter throw an ATTACKER value out to host error
            // extraction with identity preserved \u2014 defeating the
            // only-walker-created-errors-propagate invariant (childArgs /
            // child-result inputs are attacker-reachable).
            let len
            try { len = v.length } catch {
              throw new _Error('unable to read array length across the workflow VM boundary')
            }
            if (typeof len !== 'number' || !_isSafeInteger(len)) {
              throw capErr('array length is not a safe integer across the workflow VM boundary')
            }
            ${o}
            const out = []; seen.set(v, out)
            for (let i = 0; i < len; i++) {
              try { out[i] = c(v[i]) } catch (e) { if (isCap(e)) throw e; out[i] = undefined }
            }
            return out
          }
          const out = {}; seen.set(v, out)
          let ks; try { ks = _keys(v) } catch { return out }
          for (const k of ks) {
            if (k === '__proto__') continue
            try {
              const vk = v[k]
              if (typeof vk === 'function') continue
              _defineProperty(out, k, { value: c(vk), writable: true, enumerable: true, configurable: true })
            } catch (e) { if (isCap(e)) throw e }
          }
          return out
        }
        return c(hostVal)
      }
    })()`, e);
}
