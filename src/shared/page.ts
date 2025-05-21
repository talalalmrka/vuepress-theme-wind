import type { GitPluginPageData } from "@vuepress/plugin-git";
import type { PageFrontmatter } from "vuepress/shared";
import type { AutoLinkOptions } from "./nav";
import type { SidebarArrayOptions } from "./sidebar";

export interface ThemePageData extends Partial<GitPluginPageData> {
  filePathRelative: string | null;
}

export interface ThemePageFrontmatter extends PageFrontmatter {
  home?: boolean;
  navbar?: boolean;
  pageClass?: string;
  externalLinkIcon?: boolean;
}

export interface ThemeHomePageFrontmatter extends ThemePageFrontmatter {
  home: true;
  heroImage?: string;
  heroImageDark?: string;
  heroAlt?: string;
  heroHeight?: number;
  heroText?: string | null;
  tagline?: string | null;
  actions?: {
    text: string;
    link: string;
    type?: "primary" | "secondary";
  }[];
  features?: {
    title: string;
    details: string;
  }[];
  footer?: string;
  footerHtml?: boolean;
}

export interface ThemeNormalPageFrontmatter extends ThemePageFrontmatter {
  home?: false;
  editLink?: boolean;
  editLinkPattern?: string;
  lastUpdated?: boolean;
  contributors?: boolean;
  sidebar?: SidebarArrayOptions | "heading" | false;
  sidebarDepth?: number;
  prev?: AutoLinkOptions | string;
  next?: AutoLinkOptions | string;
}
