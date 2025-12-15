interface Route {
  name: string;
  publicName: string;
  url: string;
}

const routes: Route[] = [
  {
    name: "home",
    publicName: "routes.home",
    url: "/",
  },
  {
    name: "our-work",
    publicName: "routes.our-work",
    url: "/our-work",
  },
  {
    name: "who-we-are",
    publicName: "routes.who-we-are",
    url: "/who-we-are",
  },
  {
    name: "contact",
    publicName: "routes.contact",
    url: "/contact",
  },
];

export { routes };
