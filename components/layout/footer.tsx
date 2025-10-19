"use client";

import { authorName } from "@/lib/constants";
import { FOOTER_LINKS } from "./links";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]">
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3">
        {FOOTER_LINKS.map((list) => (
          <div key={list.id} className="mb-10 flex flex-col items-start gap-4 pr-4">
            {list.links.map((link) => {
              const { href, key } = link;
              return (
                <Link key={href} href={href} className={"text-muted-foreground hover:text-foreground transition-colors"}>
                  {key}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center justify-between text-sm">
        <div>&copy; {new Date().getFullYear()} {authorName}</div>
      </div>
    </footer>
  );
};

export default Footer;