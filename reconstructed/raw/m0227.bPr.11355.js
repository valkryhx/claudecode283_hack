function bPr(e){let n=[],r=0;for(let s of e){let E=s.pollEvent?.envelope??"",l=Buffer.byteLength(E,"utf8");if(n.length>0&&(n.length>=hPr||r+l>ge))break;n.push(s),r+=l}return n}
