import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
) {
  const data: { id: string } = await req.json();
  console.log(data.id);

  const res = await fetch(`https://dataservice.kuleuven.be/opo/_search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {
        query_string: {
          query: `(ectsCode: ${data.id.toUpperCase()}) OR ${data.id.toUpperCase()}`
        }
      }
    }),
  });

  const kulData = await res.json();
  if (kulData.hits.total.relation == "eq") {
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
  }
}