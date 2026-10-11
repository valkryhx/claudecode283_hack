function vTn(e,r,s,g,f){let w=f.probes.get(e);if(w)return w;let A=Tr(e,r,s,g).then((F)=>{if(F.kind!=="restore")f.probes.delete(e);return F});return f.probes.set(e,A),A}
