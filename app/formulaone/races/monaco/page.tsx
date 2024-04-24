/* eslint-disable @next/next/no-img-element */
"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone", false);
  const f1 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.webp" alt={"Formula 1"} />
    </div>
  );
  const f2 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.webp" alt={"Formula 2"} />
    </div>
  );
  const f3 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f3.webp" alt={"Formula 3"} />
    </div>
  );
  const hm = (
    <div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" src="/formulaone/heiligemaagden128x128.webp" alt={"Streamed on heiligemaagden.com."} />
    </div>
  );
  const auvio = (
    <div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" src="/formulaone/auvio_192x192.webp" alt={"Streamed on RTBF Auvio."} />
    </div>
  );
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="h-[28vw] mx-12 bg-gradient-to-r from-[#E50915] to-[#FEDADC]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]" src="/formulaone/banners-dated/monaco-header-dated.webp" alt={""} />
        </div>
      </div>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Thursday May 23</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}Practice</td>
            <td className="pr-2">
              {[new Date("May 23, 2024 13:10:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 23, 2024 13:55:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Practice</td>
            <td className="pr-2">
              {[new Date("May 23, 2024 15:00:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 23, 2024 15:45:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="h-[2rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday May 24</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}Qualifying Group A</td>
            <td className="pr-2">
              {[new Date("May 24, 2024 11:05:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 24, 2024 11:21:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f3}Qualifying Group B</td>
            <td className="pr-2">
              {[new Date("May 24, 2024 11:29:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 24, 2024 11:45:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Practice 1</td>
            <td className="pr-2">
              {[new Date("May 24, 2024 13:30:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 24, 2024 14:30:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Qualifying Group A</td>
            <td className="pr-2">
              {[new Date("May 24, 2024 15:10:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 24, 2024 15:26:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Qualifying Group B</td>
            <td className="pr-2">
              {[new Date("May 24, 2024 15:34:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 24, 2024 15:50:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Practice 2</td>
            <td className="pr-2">
              {[new Date("May 24, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 24, 2024 18:00:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="h-[2rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday May 25</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}Sprint Race</td>
            <td className="pr-2">
              {[new Date("May 25, 2024 10:45:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 25, 2024 11:30:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
            <td className="pr-2">23L or 40&apos;+1L</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Practice 3</td>
            <td className="pr-2">
              {[new Date("May 25, 2024 12:30:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 25, 2024 13:30:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Sprint Race</td>
            <td className="pr-2">
              {[new Date("May 25, 2024 14:15:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 25, 2024 15:05:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
            <td className="pr-2">30L or 45&apos;+1L</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Qualifying</td>
            <td className="pr-2">
              {[new Date("May 25, 2024 16:00:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 25, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
            <td className="pr-2">18&apos; + 15&apos; + 12&apos;</td>
            <td className="pr-2">{auvio}</td>
          </tr>
          <tr>
            <td className="h-[2rem]"></td>
          </tr>
          <tr>
            <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday May 26</th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
            <th className="pr-2 text-left"></th>
          </tr>
          <tr>
            <td className="pr-2">{f3}Feature Race</td>
            <td className="pr-2">
              {[new Date("May 26, 2024 08:00:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 26, 2024 08:50:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
            <td className="pr-2">27L or 45&apos;+1L</td>
          </tr>
          <tr>
            <td className="pr-2">{f2}Feature Race</td>
            <td className="pr-2">
              {[new Date("May 26, 2024 09:40:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 26, 2024 10:45:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
            <td className="pr-2">42L or 1h+1L</td>
          </tr>
          <tr>
            <td className="pr-2">{f1}Race</td>
            <td className="pr-2">
              {[new Date("May 26, 2024 15:00:00 UTC+02:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-",
                new Date("May 26, 2024 17:00:00 UTC+02:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}
            </td>
            <td className="pr-2">78L or 2h+1L</td>
            <td className="pr-2">{auvio}</td>
          </tr>
          </tbody>
        </table>
        <p className="text-center font-normal text-sm italic mt-4 mb-2">{["Times displayed in ", new Date().toLocaleDateString(undefined, { day: "2-digit", timeZoneName: "shortGeneric" }).slice(4)].join(" ")}</p>
      </Paragraph>
      <FooterBar />
    </>
  );
};

export default Page;