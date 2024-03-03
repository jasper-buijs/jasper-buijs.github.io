"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";

const Page = () => {
  redirect("/formulaone", false);
  const f1 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline h-[0.5rem] absolute left-1/2 top-0 translate-x-[-50%]" src="/formulaone/f1web.png" />
    </div>
  );
  const f2 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f2.png" />
    </div>
  );
  const f3 = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f3.png" />
    </div>
  );
  const fa = (
    <div className="inline-block w-10 relative h-[0.5rem]">
      <img className="inline-block h-[0.5rem] absolute left-1/2 translate-x-[-50%]" src="/formulaone/f1a.png" />
    </div>
  );
  const hm = (
    <div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" src="/formulaone/heiligemaagden128x128.png" />
    </div>
  );
  const auvio = (
    <div className="inline-block w-5 relative h-[1rem]">
      <img className="inline-block h-[1rem] absolute left-1/2 translate-x-[-50%] translate-y-[12.5%]" src="/formulaone/auvio_192x192.png" />
    </div>
  );
  return (
    <>
      <NavBar activePage="formulaone" />
      <div className="h-[28vw] mx-12 bg-gradient-to-r from-[#023874] to-[#7CAADC]">
        <div className="h-full w-full relative">
          <img className="absolute w-full h-auto top-1/2 translate-y-[-50%]" src="/formulaone/banners-dated/australia-header-dated.png" />
        </div>
      </div>
      <Paragraph title="Schedule">
        <table className="w-max m-auto table-auto">
          <tbody>
            <tr>
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Friday March 22</th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f3}Practice</td>
              <td className="pr-2">{[new Date("March 22, 2024 8:50:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 22, 2024 9:35:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Practice</td>
              <td className="pr-2">{[new Date("March 22, 2024 10:00:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 22, 2024 10:45:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Practice 1</td>
              <td className="pr-2">{[new Date("March 22, 2024 12:30:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 22, 2024 13:30:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f3}Qualifying</td>
              <td className="pr-2">{[new Date("March 22, 2024 14:00:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 22, 2024 14:30:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Practice 2</td>
              <td className="pr-2">{[new Date("March 22, 2024 16:00:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 22, 2024 17:00:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Qualifying</td>
              <td className="pr-2">{[new Date("March 22, 2024 17:30:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 22, 2024 18:00:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="h-[2rem]"></td>
            </tr>
            <tr>
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Saturday March 23</th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f3}Sprint Race</td>
              <td className="pr-2">{[new Date("March 23, 2024 11:15:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 23, 2024 12:00:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">20L or 40'+1L</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Practice 3</td>
              <td className="pr-2">{[new Date("March 23, 2024 12:30:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 23, 2024 13:30:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Sprint Race</td>
              <td className="pr-2">{[new Date("March 23, 2024 14:15:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 23, 2024 15:05:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">23L or 45'+1L</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Qualifying</td>
              <td className="pr-2">{[new Date("March 23, 2024 16:00:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 23, 2024 17:00:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">18' + 15' + 12'</td>
              <td className="pr-2">{auvio}</td>
            </tr>
            <tr>
              <td className="h-[2rem]"></td>
            </tr>
            <tr>
              <th className="pr-2 text-left max-w-0 whitespace-nowrap">Sunday March 24</th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
              <th className="pr-2 text-left"></th>
            </tr>
            <tr>
              <td className="pr-2">{f3}Feature Race</td>
              <td className="pr-2">{[new Date("March 24, 2024 9:05:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 24, 2024 9:55:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">23L or 45'+1L</td>
            </tr>
            <tr>
              <td className="pr-2">{f2}Feature Race</td>
              <td className="pr-2">{[new Date("March 24, 2024 11:35:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 24, 2024 12:40:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">33L or 1h+1L</td>
            </tr>
            <tr>
              <td className="pr-2">{f1}Race</td>
              <td className="pr-2">{[new Date("March 24, 2024 15:00:00 GMT+10:00").toLocaleString(undefined, { weekday: "long", hour: "2-digit", minute: "2-digit" }), "-", new Date("March 24, 2024 17:00:00 GMT+10:00").toLocaleString(undefined, { hour: "2-digit", minute: "2-digit" })].join(" ")}</td>
              <td className="pr-2">58L or 2h+1L</td>
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
