/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "@/app/components/mobile/NavBar";
import redirect from "@/app/components/redirect";
import Paragraph from "@/app/components/mobile/Paragraph";
import { ChangeIconGrid, ChangeIconGridElement } from "@/app/components/mobile/wumpus/changelog/ChangeIcon";
import CodeBlock from "@/app/components/wumpus/changelog/CodeBlock";

const Home = () => {
  redirect("/wumpus/changelog", true);
  return (
    <>
      <NavBar activePage="wumpus" />
      <div className="pl-2 pr-20 py-6">
        <Paragraph title="Release 3.4.3">
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
        </Paragraph>
      </div>
    </>
  );
};

export default Home;
