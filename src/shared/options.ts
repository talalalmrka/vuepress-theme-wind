import { PluginConfig } from "vuepress";
import { NavbarOptions } from "./navbar";
import { SidebarOptions } from "./sidebar";
import { ThemePluginOptions } from "./plugins";
export interface ThemeOptions {
  logo?: string;
  navbarTitle?: string | boolean;
  darkMode?: boolean;
  navbar?: NavbarOptions | false;
  repo?: string;
  repoLabel?: string;
  sidebar?: SidebarOptions | false;
  footer?: string;
  pluginOptions?: ThemePluginOptions;
  plugins?: PluginConfig;
}
