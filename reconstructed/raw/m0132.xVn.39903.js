function xVn(e){let t=[],o=[];for(let r of e){if(r.type==="AutoMemPinned"){o.push(r);continue}if(o.length>0)t.push(Zo(o)),o=[];t.push(`Contents of ${r.path}${xs(r.type)}:

`+r.content.trim())}if(o.length>0)t.push(Zo(o));return t.join(`

`)}
