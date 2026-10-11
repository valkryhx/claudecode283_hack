function lo(e,r,s){let g=ar("sha256").update(s).update("\x00").update(e).update("\x00").update(mr(r)).digest("hex");return`${fr}:${g}`}
