import { Metadata } from "next";
import PageTitle from "@/components/page-title";
import FilteredProjects from "@/components/projects/filtered-projects";
import { defaultMetadata } from "@/lib/metadata.config";
import { projectPage, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: projectPage.title,
  description: projectPage.metaDesc,
  keywords: [...(defaultMetadata.keywords ?? []), ...projectPage.metaKeywords],
  openGraph: {
    ...defaultMetadata.openGraph,
    title: projectPage.metaTitle,
    description: projectPage.metaDesc,
    url: `${SITE_URL}/journey`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: projectPage.metaTitle,
    description: projectPage.metaDesc,
  },
};

export default function Page() {
  return (
    <>
      <PageTitle title={projectPage.title} description={projectPage.description} />
      <FilteredProjects />
    </>
  );
};