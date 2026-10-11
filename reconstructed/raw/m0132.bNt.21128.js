function bNt(){let e=[];return{keep:(t,o)=>e.push({input:t,made:o}),of:(t)=>t===void 0?void 0:e[t-1],last:(t)=>t===void 0?e.at(-1):e.findLast(t),ran:()=>e.length>0}}
