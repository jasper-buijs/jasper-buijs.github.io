import { DOMParser } from "@xmldom/xmldom";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
) {
  const data: { id: string } = await req.json();
  console.log(data.id);

  let yearString: string;
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  if (currentMonth >= 9 || (currentMonth == 8 && currentDay >= 20)) {
    yearString = `${currentYear.toString().substring(2, 5)}${(currentYear + 1).toString().substring(2, 5)}`;
    console.log("current year", yearString);
  } else {
    yearString = `${(currentYear - 1).toString().substring(2, 5)}${currentYear.toString().substring(2, 5)}`;
    console.log("current year", yearString);
  }

  const res = await fetch(`https://caliweb.vub.be/?page=course-offer&id=${data.id}&year=${yearString}&language=nl&output=xml`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  });

  const vubData = await res.text();
  const xmlData = new DOMParser().parseFromString(vubData, "text/xml");
  if (!xmlData) return NextResponse.json({ error: "failed to fetch" }, { status: 500 });
  const title = xmlData.getElementsByTagName("course").item(0)?.getElementsByTagName("title").item(1)?.textContent;
  console.log(title);
  if (!title) return NextResponse.json({ error: "failed to fetch" }, { status: 500 });
  else return NextResponse.json({ courseName: title }, { status: 200 });


  /*if (kulData.hits.total.relation == "eq") {
    // console.log(kulData.hits.hits[0]["_source"].moduleLanguageSet);
    if (kulData.hits.hits[0]["_source"].moduleLanguageSet.some((mls: any) => mls.moduleLangu == "NL")) {
      const module = kulData.hits.hits[0]["_source"].moduleLanguageSet.find((mls: any) => mls.moduleLangu == "NL");
      console.log(module.moduleTitleSet[0].description);
      return NextResponse.json({ courseName: module.moduleTitleSet[0].description }, { status: 200 });
    } else if (kulData.hits.hits[0]["_source"].moduleLanguageSet.some((mls: any) => mls.moduleLangu == "EN")) {
      const module = kulData.hits.hits[0]["_source"].moduleLanguageSet.find((mls: any) => mls.moduleLangu == "EN");
      console.log(module.moduleTitleSet[0].description);
      return NextResponse.json({ courseName: module.moduleTitleSet[0].description }, { status: 200 });
    } else {
      return NextResponse.json({ error: "unknown error" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "failed to fetch" }, { status: 500 });
  }*/
}