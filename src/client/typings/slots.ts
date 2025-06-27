export type Style = string | Record<string, string>;

export interface HeroInfoSlotData {
  text: string | null;
  tagline: string | null;
  isFullScreen: boolean;
  style: Style | null;
}

export interface HeroLogoSlotData {
  image: string | null;
  imageDark: string | null;
  alt: string;
  style: Style | null;
}

export interface HeroBackgroundSlotData {
  image: string | null;
  imageDark: string | null;
  style: Style | null;
}