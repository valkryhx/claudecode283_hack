function C(e,n){let t=e instanceof Error?e.message:String(e),r="Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping.",o=B(e)?e.loc:void 0,i=o?n.split(`
`)[o.line-1]:void 0;if(!o||i===void 0)return`Script parse error: ${t}. ${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;let a=Math.max(0,Math.min(o.column,i.length)),s=Math.max(0,Math.min(a-Math.floor(h/2),i.length-h)),l=i.slice(s,s+h),f=`${Ys(" ",a-s)}^`;return`Script parse error: ${t}

${l}
${f}

${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`}
