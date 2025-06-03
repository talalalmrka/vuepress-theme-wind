import { SearchPluginOptions } from '@vuepress/plugin-search'
import { DocSearchPluginOptions } from '@vuepress/plugin-docsearch'
import { SlimSearchPluginOptions } from '@vuepress/plugin-slimsearch'
import { MeiliSearchPluginOptions } from '@vuepress/plugin-meilisearch'

export type SearchOptions =
  | ({
      provider: 'local'
    } & SearchPluginOptions)
  | ({
      provider: 'docsearch'
    } & DocSearchPluginOptions)
  | ({
      provider: 'slimsearch'
    } & SlimSearchPluginOptions)
  | ({
      provider: 'meilisearch'
    } & MeiliSearchPluginOptions)
