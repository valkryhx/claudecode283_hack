function Yi(o){if(typeof o==="string")return o;let l=cs(o);if(l||!Array.isArray(o))return l;let a=o.filter(yn);return a.length===0?"":`(${a.map((u)=>u.type).join(", ")} content)`}
