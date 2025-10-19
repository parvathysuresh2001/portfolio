import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import Experience from "@/components/journey/experience";
import Education from "@/components/journey/education";
import { defaultMetadata } from "@/lib/metadata.config";
import { journeyPage, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: journeyPage.title,
  description: journeyPage.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...journeyPage.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: journeyPage.metaTitle,
    description: journeyPage.metaDesc,
    url: `${SITE_URL}/journey`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: journeyPage.metaTitle,
    description: journeyPage.metaDesc,
  },
};

export default function Page() {
  return (
    <>
      <PageTitle title={journeyPage.title} description={journeyPage.description} />
      {/* <Experience /> */}
      <Education />
    </>
  );
};
