function S(o){let s=new Map;for(let n of o){if(!y(n,s.get(n.name)))continue;s.set(n.name,n)}return[...s.values()]}
