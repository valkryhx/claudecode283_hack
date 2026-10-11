function ze(e){let r=Fy(e);if(!("error"in r))return cH(r.meta.description);let n=e.split(`
`).find((g)=>g.trim())??re(e,40),s=ie(n)>Rr||n.length>Rr?re(n,Rr-1)+"\u2026":n,a=Gt(e,`
`)+1,w=JAe(a-1),h=cH(s);return w?`${h} ${w}`:h}
