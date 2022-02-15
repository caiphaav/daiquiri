import { INavBarItem } from "../../../types";

export const NAVBAR_DESKTOP_HEIGHT = 64;

export const NAVBAR_DESKTOP_REFS: Array<INavBarItem> = [
  {
    name: "Главная",
    to: "/",
    type: "ref",
  },
  {
    name: "O сервере",
    to: "/about",
    type: "ref",
  },
  {
    name: "Скачать",
    to: "/download",
    type: "ref",
  },
];

export const NAVBAR_DESKTOP_LINKS: Array<INavBarItem> = [
  {
    name: "Форум",
    to: "https://forum.daiquiri.top/",
    type: "link",
  },
  {
    name: "Пополнить",
    to: "https://daiquiri.nonrp.nl/lk/donate.php",
    type: "link",
  },
  {
    name: "Регистрация",
    to: "https://daiquiri.nonrp.nl/lk/register.php",
    type: "link",
  },
  {
    name: "Вход",
    to: "https://daiquiri.nonrp.nl/lk/login.php",
    type: "link",
  },
];

export const NAVBAR_MOBILE_ROUTES = [
  ...NAVBAR_DESKTOP_REFS,
  ...NAVBAR_DESKTOP_LINKS,
];
