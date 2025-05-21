import { ThemeOptions } from "../../shared";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
/* 
import { inject } from "vue";
import type { InjectionKey } from "vue";
import type { ThemeOptions } from "../../shared";

export const themeOptionsSymbol: InjectionKey<ThemeOptions> =
  Symbol("themeOptions");

export const useThemeOptions = (): ThemeOptions => {
  const themeOptions = inject(themeOptionsSymbol);

  if (!themeOptions) {
    throw new Error("useThemeOptions() is called without provider.");
  }

  return themeOptions;
};
 */

export const useThemeOptions = () => {
  const themeData = useThemeData<ThemeOptions>();
  return themeData.value;
};
