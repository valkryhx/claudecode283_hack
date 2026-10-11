function pmt(e){if(e.type!=="user")return!1;let r=e.message?.content;return Array.isArray(r)&&r.some((s)=>s?.type==="text"&&typeof s.text==="string"&&s.text.startsWith(`<${x_e}>`))}
