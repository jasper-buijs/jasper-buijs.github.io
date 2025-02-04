"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import { ChangeIconGrid, ChangeIconGridElement } from "@/app/components/magmuth/changelog/ChangeIcon";
import CodeBlock from "@/app/components/magmuth/changelog/CodeBlock";

const MagmuthChangelogPage = () => {
  return (
    <>
      <NavBar activePage="magmuth" />
      
      <Paragraph title={"Release 4.0.0"}>
        <ChangeIconGrid>
          <ChangeIconGridElement type="updated" label="update">We&apos;ve rewritten the bot from scratch, meaning all previous functionality has been removed and will be re-added in coming updates.</ChangeIconGridElement>
          <ChangeIconGridElement type="updated" label="update">The bot has been rebranded to &quot;Magmuth&quot;, as the name &quot;Wumpus&quot; has been banned by Discord.</ChangeIconGridElement>
          <ChangeIconGridElement type="added" command="GIF Filter">Added a gif-filter. Sending messages containing gifs in non-spam channels is allowed in limited amounts. Sending more than three messages in half an hour will see these messages being removed. Sending more than five in an hour will warrant timeouts in Discord.</ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      {/*<Paragraph title="Release 3.4.3">
        <ChangeIconGrid>
          <ChangeIconGridElement type="fixed">Fixed a bug that would cause the bot status to not be updated when playing music.</ChangeIconGridElement>
          <ChangeIconGridElement type="added">Added more custom statuses.</ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.4.2">
        <ChangeIconGrid>
          <ChangeIconGridElement type="fixed">Fixed a bug that would cause the custom status message to clear after playing music.</ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.4.1">
        <ChangeIconGrid>
          <ChangeIconGridElement type="added">Added custom status messages, randomly selected each day from a pool.</ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.4.0">
        <ChangeIconGrid>
          <ChangeIconGridElement type="added">Added a voice channel named &quot;the abyss of awkwardness&quot;, joining it will auto-create a new temporary voice channel.</ChangeIconGridElement>
          <ChangeIconGridElement type="fixed" command="/play">
            Fixed a bug that would cause the bot to crash at the start of songs.
          </ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.3.1">
        <ChangeIconGrid>
          <ChangeIconGridElement type="added">Added the showing of the green rally color for everyone who responded to the Rallly. These green roles will stay until the start of the Rallly data.</ChangeIconGridElement>
          <ChangeIconGridElement type="fixed">When the Rallly roles are updated. It will now update once 30 seconds after (re-)starting the bot, and then every day at 10 minutes past midnight.</ChangeIconGridElement>
          <ChangeIconGridElement type="updated" label="update" command="3.3.1α">
            Updated Rallly data on 26/06/2023. These changes are only reflected in the zip file in the release assets, not in the release source code.
          </ChangeIconGridElement>
          <ChangeIconGridElement type="updated" label="update" command="3.3.1β">
            Updated Rallly data on 11/07/2023. These changes are only reflected in the zip file in the release assets, not in the release source code.
          </ChangeIconGridElement>
          <ChangeIconGridElement type="updated" label="update" command="3.3.1γ">
            Updated Rallly data on 31/07/2023. These changes are only reflected in the zip file in the release assets, not in the release source code.
          </ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.3.0">
        <ChangeIconGrid>
          <ChangeIconGridElement type="added">Added support for Rallly data in the form of custom colored roles. These roles reflect availability on the current day and update twice a day (once at 3:00 AM and once a minute after the time at which the bot was started).</ChangeIconGridElement>
          <ChangeIconGridElement type="fixed" command="/play">
            Fixed an issue with the <CodeBlock>/play</CodeBlock> command that would make the bot sometimes randomly crash at the beginning of songs. (Attempt number 2)
          </ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.2.1">
        <ChangeIconGrid>
          <ChangeIconGridElement type="fixed" command="/play">
            Fixed an issue with the <CodeBlock>/play</CodeBlock> command that would make the bot sometimes randomly crash at the beginning of songs. (At least, this is an attempt, but I&apos;m still monitoring closely to see how effective it is.)
          </ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>

      <Paragraph title="Release 3.2.0">
        <ChangeIconGrid>
          <ChangeIconGridElement type="fixed" command="/play">
            Reworked code so the <CodeBlock>/play</CodeBlock> command should crash less often, and not leave mid-song when playing a longer queue.
          </ChangeIconGridElement>
          <ChangeIconGridElement type="added" command="/play">
            Added support for songs up to 30 minutes, in stead of 15.
          </ChangeIconGridElement>
          <ChangeIconGridElement type="added" command="/play">
            Added a &quot;platform&quot; selector that allows users to choose a source from which their music will be played (given it&apos;s not a URL). There is now access to five sources: YouTube, Spotify, Apple Music, SoundCloud, and regular audio files through direct URLs.
          </ChangeIconGridElement>
        </ChangeIconGrid>
      </Paragraph>*/}

      <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] text-[#1E1E1E] dark:text-inherit py-1 px-4 pt-2 mx-12 my-4 grid">
        <p className="row-start-1 row-span-1 col-start-1 col-span-1 align-middle py-2">Check out older releases and our code in our GitHub releases!</p>
        <a href="https://github.com/jasper-buijs/discord-bot-js/releases" target="_blank" className="rounded-md p-2 bg-[#cfb53b] text-[#ffffff] w-max h-min row-start-1 row-span-1 col-start-2 col-span-1 mx-4 align-middle mb-1 justify-self-end">
          GitHub ↗︎
        </a>
      </div>

      <FooterBar />
    </>
  );
};

export default MagmuthChangelogPage;
