function cs(o){if(!Array.isArray(o))return"";return o.filter(yn).flatMap((l)=>l.type==="text"&&typeof l.text==="string"?l.text:[]).join(`
`)}
