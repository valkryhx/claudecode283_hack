function hr(e,t){if(e.context!==void 0)return e;let r=(t.find((n)=>n.ref!==void 0&&n.ref===e.ref)??t.at(-1))?.context;return r===void 0?e:{...e,context:r}}
