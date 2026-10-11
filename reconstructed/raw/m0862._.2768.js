function _(e,n){let t=e[n],r=t==="`",o="",i=n+1,a=i;while(a<e.length){let s=e[a];if(s===t)return{value:o+e.slice(i,a),end:a+1};if(s==="\\"){let l=F(e,a);if(!l)return;o+=e.slice(i,a)+l.value,a=i=l.end}else if(r?s==="$"&&e[a+1]==="{":s===`
`||s==="\r")return;else if(r&&s==="\r")o+=`${e.slice(i,a)}
`,a=i=a+(e[a+1]===`
`?2:1);else a++}return}
