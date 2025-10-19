import { notFound } from "next/navigation";
import Header from "./header";
import { BlurImage } from "@/components/ui/blur-image";
import { projects } from "@/lib/constants";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const Page = async (props: PageProps) => {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();
  const { name, detailedDescription, imgPath } = project;
  return (
    <>
      <Header {...project} />
      <BlurImage
        src={imgPath}
        width={1280}
        height={832}
        alt={name}
        className="my-12 rounded-lg"
        lazy={false}
      />
      <div className="prose w-full">
        <p>{detailedDescription}</p>
      </div>
    </>
  );
};

export default Page;