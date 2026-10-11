function B(e){if(typeof e!=="object"||e===null||!("loc"in e))return!1;let n=e.loc;return typeof n==="object"&&n!==null&&"line"in n&&typeof n.line==="number"&&"column"in n&&typeof n.column==="number"}
