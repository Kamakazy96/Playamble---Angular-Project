import { NbMenuItem } from "@nebular/theme";
// import { title } from 'process';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
  },
  {
    title: "Credit Cards",
    icon: "credit-card-outline",
    link: "tables/smart-table",
  },
  {
    title: "Shop",
    icon: "shopping-cart-outline",
    link: "shop/shop-page",
  },
  {
    title: "Games",
    icon: "layers-outline",
    children: [
      {
        title: "HiLo",
        link: "games/hilo",
      },
      {
        title: "Blackjack",
        link: "games/blackjack",
      },
    ],
  },
];
