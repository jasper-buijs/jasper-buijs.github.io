import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectSectionProps {
  name: string;
  url: string;
  lightLogo: string;
  darkLogo: string;
  children: ReactNode;
}
const ProjectSection = ({ name, url, lightLogo, darkLogo, children }: ProjectSectionProps) => {
  return (
    <div className={"whitespace-nowrap mt-4 mb-2"}>
      <Image src={lightLogo} alt={name} width={64} height={64} className={"inline-block dark:hidden mr-4 align-middle max-h-16 max-w-16 object-contain"} />
      <Image src={darkLogo} alt={name} width={64} height={64} className={"hidden dark:inline-block mr-4 align-middle max-h-16 max-w-16 object-contain"} />
      <div className={"inline-block align-middle max-w-[calc(100%-80px)]"}>
        <Link href={url} className={"font-semibold"}>{name}</Link>
        <div className={"text-wrap"}>{children}</div>
      </div>
    </div>
  );
}

const DesktopPage = () => {
  return (
    <>
      <NavBar activePage={"none"} />
      <Paragraph title={"Technologies"}>
        <p>Heiligemaagden.com is build using open source third-party software:</p>
        <ProjectSection name={"NextJS"} url={"https://nextjs.org/"} lightLogo={"/logos/nextjs-icon-light-background.png"} darkLogo={"/logos/nextjs-icon-dark-background.png"}>
          Used by some of the world&apos;s largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
        </ProjectSection>
        <ProjectSection name={"Tailwind CSS"} url={"https://tailwindcss.com"} lightLogo={"/logos/tailwindcss-mark.svg"} darkLogo={"/logos/tailwindcss-mark.svg"}>
          A utility-first CSS framework for rapidly building custom user interfaces.
        </ProjectSection>
        <ProjectSection name={"Auth.js/NextAuth.js"} url={"https://next-auth.js.org"} lightLogo={"/logos/nextauth-logo-sm.png"} darkLogo={"/logos/nextauth-logo-sm.png"}>
          Auth.js is a set of open-source packages that are built on standard Web APIs for authentication in modern applications with any framework on any platform in any JS runtime.
        </ProjectSection>
        <ProjectSection name={"LiveKit"} url={"https://livekit.io/"} lightLogo={"/logos/LK_icon_lightbg.png"} darkLogo={"/logos/LK_icon_darkbg.png"}>
          LiveKit is an open source project that provides scalable, multi-user conferencing based on WebRTC. It&apos;s designed to provide everything you need to build real-time video audio data capabilities in your applications.
        </ProjectSection>
        <ProjectSection name={"Lucide"} url={"https://lucide.dev/"} lightLogo={"/logos/lucide-logo-light.svg"} darkLogo={"/logos/lucide-logo-dark.svg"}>
          Lucide is an open-source icon library that provides 1000+ vector (svg) files for displaying icons and symbols in digital and non-digital projects. The library aims to make it easier for designers and developers to incorporate icons into their projects by providing several official packages to make it easier to use these icons in your project.
        </ProjectSection>
        <ProjectSection name={"uNmINeD"} url={"https://unmined.net"} lightLogo={"/logos/unmined.png"} darkLogo={"/logos/unmined.png"}>
          uNmINeD is an easy to use and fast Minecraft world viewer and mapper tool. It can read Minecraft Java and Bedrock Edition world files and renders a browseable 2D overview map that you can export as an image or a web page.
        </ProjectSection>
        <ProjectSection name={"Prisma ORM"} url={"https://www.prisma.io/orm"} lightLogo={"/logos/prisma-light.svg"} darkLogo={"/logos/prisma-dark.svg"}>
          Prisma ORM is an open-source next-generation ORM. It consists of the following parts: Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript; Prisma Migrate: Migration system; Prisma Studio: GUI to view and edit data in your database.
        </ProjectSection>
      </Paragraph>
      <Paragraph title={"Legal"}>
        <p>© Jasper Buijs, Heilige Maagden, 2025. All Rights Reserved.</p><br />
        <p>This website (heiligemaagden.com) is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V. All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.</p><br />
        <p>Contact: <Link className={"text-[#ba9c0d] dark:text-[#cfb53b] underline"} href={"mailto:info@heiligemaagden.com"}>info@heiligemaagden.com</Link>.</p>
      </Paragraph>
    </>
  );
}

export default DesktopPage