import type { LinkOptions, NavbarOptions } from "../../src/shared";

export const navbar: NavbarOptions = [
  "/",
  {
    text: "Guide",
    prefix: "/guide/",
    children: [
      "introduction",
      "installation",
      "getting-started",
      "config",
      "dark-mode",
      "markdown",
    ],
  },
  {
    text: "Reference",
    prefix: "/reference/",
    children: ["config", "components"],
  },
  /* {
    text: "Home",
    icon: "bi-house",
    link: "/",
  },
  {
    text: "Guide",
    icon: "bi-lightbulb",
    link: "/guide/",
    children: [
      {
        text: "Introduction",
        icon: "bi-stars",
        link: "/guide/introduction",
      },
      {
        text: "Getting Started",
        icon: "bi-stars",
        link: "/guide/getting-started",
      },
      {
        text: "Installation",
        icon: "bi-gear-wide-connected",
        link: "/guide/installation",
      },
    ],
  },
  {
    text: "Reference",
    link: "/reference/",
    children: [
      {
        text: "Config",
        link: "/reference/config.html",
      },
      {
        text: "Components",
        link: "/reference/components.html",
      },
    ],
  }, */
];

export default navbar;
