function Le(e){switch(typeof e){case"string":return[e];case"object":if(e===null)return[];return Array.isArray(e)?e.flatMap(Le):Object.entries(e).flatMap(([t,o])=>[t,...Le(o)]);default:return[]}}
