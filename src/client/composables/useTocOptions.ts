import { getHeaders, GetHeadersOptions } from "@vuepress/helper/client";
import type { HeaderItem } from "@vuepress/helper/client";

import { useThemeOptions } from "./";
import type { TocOptions } from "@theme/shared";
import { computed } from "vue";
/**
 * Composable for managing table of contents options
 */
export const useTocOptions = () => {
  const theme = useThemeOptions();
  const toc = (theme.toc as TocOptions) ?? ({} as TocOptions);
  return {
    title: toc.title || "On This Page",
    print: toc.print || true,
    marker: toc.marker || true,
    offset: toc.offset || 5,
    delay: toc.delay || 200,
  };
};
export const useTocEnabled = () => {
  const tocOptions = useTocOptions();
  return typeof tocOptions === "object" || tocOptions === true;
};

export const useTocHasHeader = () => {
  const tocOptions = useTocOptions();
  return useTocEnabled() && (tocOptions.title || tocOptions.print);
};

export const useHeaders = (options?: GetHeadersOptions) => {
  const headers = getHeaders({
    levels: "deep",
    ...options,
  });
  return computed(() => {
    const flat: HeaderItem[] = [];

    const flatten = (items: HeaderItem[]) => {
      items.forEach((item) => {
        flat.push(item);
        if (item.children) {
          flatten(item.children);
        }
      });
    };

    flatten(headers);
    return flat;
  }).value;
};
