"use client"
import Marquee from "react-fast-marquee"
import { SiCloudflare, SiCss, SiFigma, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMarkdown, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiSpringboot, SiPython, SiRadixui, SiReact, SiTailwindcss, SiTypescript, SiVite, SiVitest,SiBootstrap, SiDigitalocean } from "@icons-pack/react-simple-icons"
import { ZapIcon } from "lucide-react"

const StacksCard = () => {
  return (
    <div className="shadow-feature-card flex h-60 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ZapIcon className="size-[18px]" />
        <h2 className="text-sm">Stacks</h2>
      </div>
      <Marquee pauseOnHover speed={25} className="py-4">
        <div className="flex gap-4 pl-4">
          <SiHtml5 className="size-10" />
          <SiCss className="size-10" />
          <SiJavascript className="size-10" />
          <SiTypescript className="size-10" />
          <SiFigma className="size-10" />
          <SiTailwindcss className="size-10" />
          <SiNextdotjs className="size-10" />
          <SiReact className="size-10" />
          <SiPython className="size-10" />
          <SiPostgresql className="size-10" />
          <SiRadixui className="size-10" />
        </div>
      </Marquee>
      <Marquee pauseOnHover speed={25} direction="right" className="py-4">
        <div className="flex gap-4 pl-4">
          <SiSpringboot className="size-10" />
          <SiMysql className="size-10" />
          <SiFirebase className="size-10" />
          <SiGit className="size-10" />
          <SiVite className="size-10" />
          <SiCloudflare className="size-10" />
          <SiBootstrap className="size-10" />
          <SiMarkdown className="size-10" />
          <SiVitest className="size-10" />
          <SiNodedotjs className="size-10" />
          <SiDigitalocean className="size-10" />
        </div>
      </Marquee>
    </div>
  );
};

export default StacksCard