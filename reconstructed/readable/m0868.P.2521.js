/* ==============================================================================
 * m0868.P   [m0868_0xd1234ad.js @ 2521]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m0868_0xd1234ad.js  字符偏移 2521
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
function P(o) {
  let s = dt();
  return s.workflows ??= (async () => {
    let {
      enabled: n,
      errors: i
    } = await Ti(o), d = [];
    if (i.length > 0) t(`Plugin loading errors: ${i.map((e)=>MS(e)).join(", ")}`);
    let w = null;
    for (let e of n) {
      let r = new Set,
        l = d.length;
      if (e.workflowsPath) try {
        let f = await h(e.workflowsPath, e.name, e.source, e.manifest, r);
        if (d.push(...f), f.length > 0) t(`Loaded ${f.length} workflows from plugin ${e.name} default directory`)
      } catch (f) {
        w = "plugin_load_workflows_dir_failed", t(`Failed to load workflows from plugin ${e.name} default directory: ${f}`, {
          level: "error"
        })
      }
      if (e.workflowsPaths)
        for (let f of e.workflowsPaths) try {
          let c = await ce().stat(f);
          if (c.isDirectory()) {
            let g = await h(f, e.name, e.source, e.manifest, r);
            if (d.push(...g), g.length > 0) t(`Loaded ${g.length} workflows from plugin ${e.name} custom path: ${f}`)
          } else if (c.isFile() && f.endsWith(".js")) {
            let g = await v(f, e.name, e.source, e.manifest, r);
            if (g) d.push(g), t(`Loaded workflow from plugin ${e.name} custom file: ${f}`)
          }
        } catch (u) {
          w = "plugin_load_workflows_path_failed", t(`Failed to load workflows from plugin ${e.name} custom path ${f}: ${u}`, {
            level: "error"
          })
        }
      if (e.serverPluginId !== void 0)
        for (let f of d.slice(l)) f.serverPluginId = e.serverPluginId
    }
    if (t(`Total plugin workflows loaded: ${d.length}`), w) m("plugin_load_workflows", w);
    else _("plugin_load_workflows");
    return d
  })(), s.workflows
}
