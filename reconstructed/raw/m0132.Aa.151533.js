function Aa(e,t,o){let r={};for(let n of o.methods)r[n]=e.wrapMethod((...s)=>e.callInterface({owner:o.owner,name:t,method:n,args:s}));return R_(r)}
