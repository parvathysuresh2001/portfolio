"use client";

import Link from "next/link";
import { BlurImage } from "../ui/blur-image";

type PostCardsProps = {
  posts: Certificate[];
};

const CertificateCards = ({ posts }: PostCardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <CertificateCard key={post.id} {...post} />
      ))}
    </div>
  );
};

const CertificateCard = ({ id, certificateName, description, imgPath, issueDate, issuer }: Certificate) => {
  return (
    <Link href={`/${id}`} className="shadow-feature-card group rounded-xl px-2 py-4">
      <BlurImage
        src={imgPath}
        className="rounded-lg"
        width={1200}
        height={630}
        imageClassName="transition-transform group-hover:scale-105"
        alt={certificateName}
      />
      <div className="flex items-center justify-between gap-2 px-2 pt-4 text-sm text-zinc-500">
        {issueDate}
        <div className="flex gap-2">
          <div>{issuer}</div>
        </div>
      </div>
      <div className="flex flex-col px-2 py-4">
        <h3 className="text-2xl font-semibold">{certificateName}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default CertificateCards;