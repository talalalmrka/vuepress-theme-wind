import type { Theme } from "vuepress/core";
import { getDirname, path } from "vuepress/utils";
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import { assignDefaultOptions } from "../shared";
import type { ThemeOptions } from "../shared";
import { assignPlugins } from "../shared/assignPlugins";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { logger } from "../client/utils/logger";
const __dirname = import.meta.dirname || getDirname(import.meta.url);
const __componentsDir = path.resolve(__dirname, "../client/components");
export const fadgramTheme = (options: ThemeOptions): Theme => {
  options = assignDefaultOptions(options);
  logger.info("options", options);
  return {
    name: "vuepress-theme-fadgram",
    templateBuild: path.resolve(__dirname, "../../templates/build.html"),
    templateDev: path.resolve(__dirname, "../../templates/dev.html"),
    // Client config file path
    clientConfigFile: path.resolve(__dirname, "../client/config.ts"),
    // Alias configuration
    alias: {
      "@theme": path.resolve(__dirname, "../client"),
    },
    // Theme options with defaults
    define: {
      __THEME_OPTIONS__: options,
    },
    extendsPage: (page) => {
      //logger.info("page", page);
      // set catalog info in routeMeta
      page.routeMeta = {
        // catalog title
        title: page.title,
        icon: page.frontmatter.icon,
      };
    },
    // Plugins
    plugins: [
      themeDataPlugin({
        themeData: options,
      }),
      registerComponentsPlugin({
        componentsDir: __componentsDir,
      }),
      ...assignPlugins(options),
    ],
  };
};

// export * from "../shared";
export default fadgramTheme;
