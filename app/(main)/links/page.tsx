import { Metadata } from "next";
import ComingSoon from "@/components/coming-soon/coming-soon";
import { defaultMetadata } from "@/lib/metadata.config";
import { comingSoon, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: comingSoon.title,
  description: comingSoon.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...comingSoon.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: comingSoon.metaTitle,
    description: comingSoon.metaDesc,
    url: `${SITE_URL}/links`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: comingSoon.metaTitle,
    description: comingSoon.metaDesc,
  },
};

export default function Page() {
  return (
    <ComingSoon />
  );
};