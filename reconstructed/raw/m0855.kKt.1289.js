function kKt(){let e=it(),t=fx(e),r=Ple(e);return`Usage: /effort [${r.join("|")}${t?"|ultracode":""}|auto]

Effort levels:
`+r.map((n)=>`- ${n}: ${U[n]}
`).join("")+(t?`- ultracode: xhigh + dynamic workflow orchestration (this session only)
`:"")+"- auto: Use the default effort level for your model"}
