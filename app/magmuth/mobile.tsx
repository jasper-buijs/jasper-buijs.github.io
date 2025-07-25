/* eslint-disable @next/next/no-img-element */
import NavBar from "@/app/components/mobile/NavBar";

const Home = () => {
  return (<>
  <NavBar activePage="magmuth" />
  <div className="py-6 pl-2 pr-20">
    <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-inherit py-2 px-4 grid">
      <div className="row-start-1 row-span-1 col-start-1 col-span-1 align-middle my-auto">Now on v4.0.0!</div>
      <a href="/magmuth/changelog"
        className="rounded-md p-2 my-auto bg-[#cfb53b] text-[#ffffff] w-max h-min row-start-1 row-span-1 col-start-2 col-span-1 align-middle justify-self-end"
      >Change Log</a>
    </div>

    <h1 className="text-center text-3xl font-semibold my-4">
      <br />
      Magmuth Bot
      <hr className="h-[2px] my-[4px] bg-[#30363d] border-none" />
    </h1>

    <p className="text-center font-semibold mb-4">A private-use multi-purpose Discord bot based on discord.js.</p>

    <p className="text-center mb-6">
      <a href="https://bun.sh" className="inline-block mr-1">
        <img className="inline-block"
          src="https://img.shields.io/github/package-json/dependency-version/jasper-buijs/discord-bot-js/dev/bun-types/main?style=flat-square&logo=bun&label=bun&color=%23fbf0df"
          alt="GitHub package.json dependency version (dev dep on branch)"
        />
      </a>
      <a href="https://discord.js.org" className="inline-block">
        <img className="inline-block"
          src="https://img.shields.io/github/package-json/dependency-version/jasper-buijs/discord-bot-js/discord.js?style=flat-square&logo=discord.js&color=%235865F2"
          alt="GitHub package.json dependency version (subfolder of monorepo)"
        />
      </a>
    </p>

    <hr className="h-1 bg-[#30363d] border-none" />

    <p className="text-center my-6">
      <a href="#features" className="text-blue-500 underline underline-offset-2">
        Features
      </a>{" "}
      ・{" "}
      <a href="#resources" className="text-blue-500 underline underline-offset-2">
        Resources
      </a>{" "}
      ・{" "}
      <a href="#licensing" className="text-blue-500 underline underline-offset-2">
        Licensing
      </a>
    </p>

    <hr className="h-1 bg-[#30363d] border-none" />

    <div className="border-l-4 border-purple-600 px-4 py-2 mt-6">
      <h3 className="text-purple-600 mb-4">
        <svg viewBox="0 0 16 16" version="1.1" width={16} height={16} aria-hidden className="inline mr-2">
          <path fill="#9333ea"
            d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          />
        </svg>
        <div className="font-semibold inline">Important</div>
      </h3>
      Please carefully read our licensing information below before using any code in this repository, as this project is not licensed and is provided without any permissions or grants of use. You can find more information in the{" "}
      <a href="#licensing" className="text-blue-500 underline underline-offset-2">licensing section</a>{" "}
      down below.
    </div>

    <div>
      <h2 id="features" className="text-2xl font-semibold mb-4 mt-8">
        Features
        <hr className="h-[2px] my-[4px] bg-[#30363d] border-none" />
      </h2>

      <div className="border-l-4 border-blue-600 px-4 py-2 mt-6">
        <h3 className="text-blue-600 mb-4">
          <svg viewBox="0 0 16 16" version="1.1" width={16} height={16} aria-hidden className="inline mr-2">
            <path fill="#2563eb"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            />
          </svg>
          <div className="font-semibold inline">Note</div>
        </h3>
        We are still in the process of rewriting this bot. For now, there&apos;s not much to see here. We have a (private) roadmap of what we wish to do, but we are not setting any deadlines. We&apos;ll update this page as we progress and add features. Check back soon for more!
      </div>

      <ul className={"list-disc my-4 ml-8"}>
        <li>A gif-filter, restricting large amounts of spam with gifs in conversational text channels.</li>
      </ul>
    </div>

    <div>
      <h2 id="resources" className="text-2xl font-semibold mb-4 mt-8">
        Resources
        <hr className="h-[2px] my-[4px] bg-[#30363d] border-none" />
      </h2>
      This project is written in JavaScript using Bun (a high-performance alternative for Node.js) and discord.js. You
      can find more info about these and any other third-party software we use via the links down below.
    </div>

    <ul className="list-disc my-4 ml-8">
      <li>
        <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png"
          className="w-[1em] inline mr-1"
        />
        <a className="inline mr-1 text-blue-500 underline underline-offset-2" href="https://bun.sh">
          Bun
        </a>
        (
        <a className="text-blue-500 underline underline-offset-2" href="https://bun.sh/docs/project/licensing">
          MIT
        </a>
        )
      </li>
      <li>
        <img src="https://avatars.githubusercontent.com/u/26492485" className="h-[1em] inline mr-1" />
        <a className="inline mr-1 text-blue-500 underline underline-offset-2" href="https://discord.js.org">
          discord.js
        </a>
        (
        <a className="text-blue-500 underline underline-offset-2"
          href="https://github.com/discordjs/discord.js/blob/main/LICENSE"
        >
          Apache 2.0
        </a>
        )
      </li>
    </ul>

    <div className="mb-8">
      <h2 id="licensing" className="text-2xl font-semibold mb-4 mt-8">
        Licensing
        <hr className="h-[2px] my-[4px] bg-[#30363d] border-none" />
      </h2>
      This project is not licensed and is provided without any permissions or grants of use. You are not allowed to use,
      modify, or distribute this code without explicit permission from the author and contributers, except for what is
      legally required by the GitHub Terms of Service (specifically{" "}
      <a className="text-blue-500 underline underline-offset-2"
        href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#5-license-grant-to-other-users"
      >
        Section D.5
      </a>
      ).
      <br />
      <br />
      This project is built using third-party software. For detailed information about the copyright holders and
      licensing for these technologies, please visit their respective websites or GitHub repositories, both of which are
      linked above in the{" "}
      <a className="text-blue-500 underline underline-offset-2" href="#resources">
        resources
      </a>{" "}
      section.
    </div>
    <hr className="h-1 bg-[#30363d] border-none mb-8" />
    <img src="/menu/magmuth.webp" />
  </div>
</>)
  ;
};

export default Home;
