import { Metadata } from "next";
import AboutMe from "@/components/home/about-me";
import GetInTouch from "@/components/home/get-in-touch";
import Hero from "@/components/home/hero";
import { defaultMetadata } from "@/lib/metadata.config";
import { homePage, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: homePage.title,
  description: homePage.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...homePage.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: homePage.metaTitle,
    description: homePage.metaDesc,
    url: `${SITE_URL}`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: homePage.metaTitle,
    description: homePage.metaDesc,
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <AboutMe />
      <GetInTouch />
    </>
  );
};