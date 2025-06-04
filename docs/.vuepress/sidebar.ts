import { SidebarOptions } from "../../src/shared";

//import { sidebar } from "../../src/client";
export const sidebar: SidebarOptions = {
  "/": [
    {
      text: "Guide",
      prefix: "/guide/",
      collapsible: true,
      expanded: true,
      children: [
        "introduction",
        "installation",
        "getting-started",
        "markdown",
        "math",
        "config",
        "dark-mode",
      ],
    },
    {
      text: "Form",
      prefix: "/form/",
      children: [
        "checkbox",
        "error",
        "icon-picker",
        "info",
        "input",
        "label",
        "radio",
        "rich-select",
        "select",
        "switch",
        "textarea",
      ],
    },
    {
      text: "Reference",
      prefix: "/reference/",
      children: ["components", "config"],
    },
    {
      text: "Ui",
      prefix: "/ui/",
      children: [
        "accordion",
        "alert",
        "badge",
        "button",
        "card",
        "icon",
        "loader",
        "tabs",
      ],
    },
  ],
};
