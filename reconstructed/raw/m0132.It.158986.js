function It(e,t,o){let r=G(e)?e.text:void 0;return typeof r==="string"?Promise.resolve(r):Promise.reject(new De(`${t}: $.${o} takes { text } (a string)`))}
