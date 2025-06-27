import type { App } from "vuepress/core";

export const setMeta = (app: App, name: string, content: string): void => {
  const { head } = app.options;

  // Ensure meta is not injected
  if (
    head.every(
      ([tag, attrs]) =>
        !(tag === "meta" && attrs.name === name && attrs.content === content),
    )
  )
    head.push(["meta", { name: name, content: content }]);
};
