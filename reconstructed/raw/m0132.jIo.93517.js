function jIo(e,t,o){let r={};for(let[n,s]of Object.entries(e))if(typeof s==="function")r[n]=t(s);for(let n of tt)if(!r[n])o(n),r[n]=t(di);return r}
