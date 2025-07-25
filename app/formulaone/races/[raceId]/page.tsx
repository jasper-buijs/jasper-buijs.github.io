import VersionSwitch from "./versionSwitch";

const raceIds = ["pst", "australia", "china", "japan", "bahrain", "saudi-arabia", "miami", "imola", "monaco",
  "spain", "canada", "austria", "great-britain", "belgium", "hungary", "netherlands", "italy", "azerbaijan", "singapore",
  "united-states", "mexico", "brazil", "las-vegas", "qatar", "abu-dhabi", "usa", "cota", "saudi", "uk", "dutch",
  "baku", "vegas", "uae"];

export async function generateStaticParams () {
  return raceIds.map((raceId) => ({ raceId, }));
}

export default async function Page(props: { params: Promise<{ raceId: string }> }) {
  const params = await props.params;
  return <VersionSwitch raceId={params.raceId} />
  //return isMobile ? <MobilePage raceId={params.raceId} /> : <DesktopPage raceId={params.raceId} />;
}