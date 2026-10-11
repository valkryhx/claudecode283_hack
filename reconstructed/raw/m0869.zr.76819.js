function zr(e){let r;for(let s of Object.keys(e)){let g=Reflect.get(e,s);if(typeof g!=="string")continue;let f=Fc(g);if(f!==g)r??={...e},Reflect.set(r,s,f)}return r??e}
