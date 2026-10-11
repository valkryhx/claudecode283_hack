function ir(e){if(e===null||typeof e!=="object")return!1;if(zr(e))return!0;if(Nr(e))return e.some(ir);return Object.values(e).some(ir)}
