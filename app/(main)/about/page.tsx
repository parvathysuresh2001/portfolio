import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import WhoAmI from "@/components/about/who-am-i";
import { defaultMetadata } from "@/lib/metadata.config";
import { aboutPage, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: aboutPage.title,
  description: aboutPage.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...aboutPage.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: aboutPage.metaTitle,
    description: aboutPage.metaDesc,
    url: `${SITE_URL}/about`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: aboutPage.metaTitle,
    description: aboutPage.metaDesc,
  },
};

export default function Page() {
  return (
    <>
      <PageTitle title={aboutPage.title} description={aboutPage.description} />
      <WhoAmI />
    </>
  );
}