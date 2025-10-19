import { Metadata } from "next";
import FilteredCerts from "@/components/certs/filtered-certs";
import PageTitle from "@/components/page-title";
import { defaultMetadata } from "@/lib/metadata.config";
import { certPage, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: certPage.title,
  description: certPage.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...certPage.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: certPage.metaTitle,
    description: certPage.metaDesc,
    url: `${SITE_URL}/certs`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: certPage.metaTitle,
    description: certPage.metaDesc,
  },
};

export default function Page() {
  return (
    <>
      <PageTitle title={certPage.title} description={certPage.description} />
      <FilteredCerts />
    </>
  );
}