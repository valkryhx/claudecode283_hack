function qX(e){return me.runInContext(`(e => {
      let name = 'Error', message = '', stack = ''
      try { const v = e?.name; if (typeof v === 'string') name = v } catch {}
      try {
        const v = e?.message
        if (typeof v === 'string') message = v
        else if (typeof e === 'string') message = e
        else if (typeof e === 'number' || typeof e === 'boolean' || typeof e === 'bigint') {
          const s = \`\${e}\`
          if (typeof s === 'string') message = s
        }
      } catch {}
      try { const v = e?.stack; if (typeof v === 'string') stack = v } catch {}
      return { __proto__: null, name, message, stack }
    })`,e)}
