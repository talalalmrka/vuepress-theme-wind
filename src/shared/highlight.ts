import { PrismjsPluginOptions } from '@vuepress/plugin-prismjs'
import { ShikiPluginOptions } from '@vuepress/plugin-shiki'
/* export type HighlighterType = "prismjs" | "shiki";
export type HighlighterPluginOptions =
  | ({
      type: "prismjs";
    } & PrismjsPluginOptions)
  | ({
      type: "shiki";
    } & ShikiPluginOptions);

export interface HighlighterOptions {
  type: HighlighterType;
  options: HighlighterPluginOptions;
} */

export type HighlighterOptions =
  | ({
      type: 'prismjs'
    } & PrismjsPluginOptions)
  | ({
      type: 'shiki'
    } & ShikiPluginOptions)
