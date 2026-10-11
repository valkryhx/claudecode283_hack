function Tp({engine:e,interfaces:t,invoke:o},{pattern:r,hook:n},s){let i=s==="engine.create",p=W6e(r)?r:void 0;return i?t.wrap(n,p):async(a,f)=>await o(n,[e,a,f])}
