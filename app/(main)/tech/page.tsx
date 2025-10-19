import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import ItemGrid from "@/components/tech/item-grid";
import { defaultMetadata } from "@/lib/metadata.config";
import { stackGroups, techPage, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: techPage.title,
  description: techPage.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...techPage.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: techPage.metaTitle,
    description: techPage.metaDesc,
    url: `${SITE_URL}/journey`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: techPage.metaTitle,
    description: techPage.metaDesc,
  },
};

export default function Page() {
  return (
    <>
      <PageTitle title={techPage.title} description={techPage.description} />
      <ItemGrid stackGroups={stackGroups} />
    </>
  );
}