import { CodeTabs } from "/Users/junyuanhe/Website/demo-website/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_eb818aa7785d2abe34a1ff0b83f44194/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/junyuanhe/Website/demo-website/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_eb818aa7785d2abe34a1ff0b83f44194/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/junyuanhe/Website/demo-website/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.0_vuepress@2.0.0-rc.20_@vuep_eb818aa7785d2abe34a1ff0b83f44194/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
