function wVn(e,t){return me.runInContext(`(() => {
      const _WeakMap = WeakMap, _WeakSet = WeakSet, _isArray = Array.isArray,
            _keys = Object.keys, _defineProperty = Object.defineProperty,
            _Error = Error, _isSafeInteger = Number.isSafeInteger
      // Closure-private registry of walker-created boundary-cap errors: the
      // cap error must propagate out of the whole walk at any nesting depth,
      // while incidental trap throws degrade one slot. Membership, NOT a
      // tag property: the input here is attacker-controlled, so a thrown
      // value can be a Proxy whose get trap answers true for ANY key \u2014 a
      // property-based isCap would fake-match and the walker would rethrow
      // the ATTACKER'S object to the host, whose error extraction then
      // reads .message on it host-side (the very escape this walker
      // exists to close). WeakSet.has is identity-based and runs no
      // attacker code, so only errors we created here ever propagate.
      const _capSet = new _WeakSet()
      function capErr(msg) {
        const e = new _Error(msg)
        _capSet.add(e)
        return e
      }
      function isCap(e) {
        try { return _capSet.has(e) } catch { return false }
      }
      function checkedLength(v) {
        let len
        try { len = v.length } catch {
          throw new _Error('unable to read array length across the workflow VM boundary')
        }
        if (typeof len !== 'number' || !_isSafeInteger(len)) {
          throw capErr('array length is not a safe integer across the workflow VM boundary')
        }
        if (len > ${Sx}) {
          throw capErr('array length ' + len + ' exceeds the maximum of ${Sx} supported across the workflow VM boundary')
        }
        return len
      }
      return { __proto__: null,
        sanitize: (inputV) => {
          const seen = new _WeakMap()
          function c(v) {
            if (typeof v === 'function') return undefined
            if (v === null || typeof v !== 'object') return v
            const hit = seen.get(v); if (hit !== undefined) return hit
            if (_isArray(v)) {
              const out = []; seen.set(v, out)
              const len = checkedLength(v)
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
          return c(inputV)
        },
        snapshot: (v) => {
          if (v === null || typeof v !== 'object') return []
          const len = checkedLength(v)
          const out = []
          for (let i = 0; i < len; i++) {
            try { out[i] = v[i] } catch { out[i] = undefined }
          }
          return out
        },
        getProp: (o, k) => {
          try { return o === null || o === undefined ? undefined : o[k] } catch { return undefined }
        },
      }
    })()`,e,zn(t))}
