async function yBo(e){let r=new Set;if(process.env.P4PORT)r.add("perforce");try{let s=e??ce().cwd(),o=new Set(await v(s));for(let[i,u]of H)if(o.has(i))r.add(u)}catch{}return[...r]}
