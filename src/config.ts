import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https:/vanilla-wave.dev/",
  author: "Vanilla wave",
  desc: "Блог про фронтенд и разработку",
  title: "Vanilla Wave's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["ru-RU"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/vanilla-wave",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/vani11a_wave",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
