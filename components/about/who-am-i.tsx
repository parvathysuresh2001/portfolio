"use client";

import { whoAmIData } from "@/lib/constants";

export default function WhoAmI() {
  const birthDate = new Date(whoAmIData.bio.birthDate);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

  return (
    <section className="mx-auto">
      <div className="flex flex-col leading-8">
        <h1 className="text-2xl font-bold">WHO AM I</h1>
        <p className="mt-6">
          I&apos;m a <span className="text-blue-500 font-semibold">{whoAmIData.bio.role}</span>, currently <span className="text-anchor font-semibold">{age}</span> years old.{" "}
          {whoAmIData.bio.description}
        </p>

        <h2 className="text-2xl font-bold mt-12">Skills and tools</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {whoAmIData.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900"
          >
            {skill}
          </span>
        ))}
        </ul>

        <h2 className="text-2xl font-bold mt-12">Why me?</h2>
        <ul className="mt-6 list-disc marker:text-red-500 pl-6">
          {whoAmIData.whyMe.map((reason) => (
            <li key={reason.id}>{reason.text}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-12">About This Site</h2>
        <ul className="mt-2 list-disc pl-6 marker:text-green-500">
          {Object.entries(whoAmIData.aboutThisSite).map(([key, value]) => (
            <li key={key}>
            <span className="font-semibold">{key}:</span>{" "}
            <span className="text-anchor">{Array.isArray(value) ? value.join(", ") : value}</span>
          </li>
          ))}
        </ul>
      </div>
    </section>
  );
}