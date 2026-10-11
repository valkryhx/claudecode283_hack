function Qr(e){let t=$e[e],o=fe.every((n)=>t.includes(n)),r=t.length===1;return o?"every surface":r?`the ${t[0]} surface only`:`the ${t.slice(0,-1).join(", ")} and ${t.at(-1)} surfaces only`}
