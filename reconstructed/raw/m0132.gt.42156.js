function gt(e,...t){let o=new Set(t.flatMap((r)=>iD(r)??[]));return(iD(e)??[]).filter((r)=>!o.has(r)).reduce((r,n)=>Math.max(r,n.length),0)}
