import { CircleUser, FlameIcon, LaptopMinimal, Route, ShieldCheck } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export const HEADER_LINKS = [
  {
    icon: <CircleUser className="size-3.5" />,
    href: "/about",
    key: "About",
  },
  // {
  //   icon: <FlameIcon className="size-3.5" />,
  //   href: "/projects",
  //   key: "Projects",
  // },
  {
    icon: <Route className="size-3.5" />,
    href: "/journey",
    key: "Journey",
  },
  {
    icon: <ShieldCheck className="size-3.5" />,
    href: "/certs",
    key: "Certs",
  },
  {
    icon: <LaptopMinimal className="size-3.5" />,
    href: "/tech",
    key: "Tech",
  },
] as const;

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: "/", key: "Home" },
      { href: "/about", key: "About" },
      // { href: "/projects", key: "Projects" },
    ],
  },
  {
    id: 2,
    links: [
      { href: "/journey", key: "Journey" },
      { href: "/certs", key: "Certs" },
      { href: "/tech", key: "Tech" },
    ],
  },
  {
    id: 3,
    links: SOCIAL_LINKS.map((link) => ({
      href: link.href,
      key: link.title,
    })),
  },
] as const;