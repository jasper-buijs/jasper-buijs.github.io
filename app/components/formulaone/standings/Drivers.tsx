"use client";

import { useEffect, useState } from "react";

interface ConstructorsType {
  constructorId: "red_bull" | "ferrari" | "mercedes" | "mclaren" | "aston_martin" | "haas" | "williams" | "sauber" | "rb" | "alpine";
  url: string;
  name: string;
  nationality: string;
}
interface DriverStandingsType {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  };
  Constructors: ConstructorsType[];
}
interface StandingsListType {
  season: string;
  round: string;
  DriverStandings: DriverStandingsType[];
}
interface DriversData {
  MRData: {
    [key: string]: any;
    StandingsTable: {
      season: string;
      StandingsLists: StandingsListType[];
    };
  };
}

const Drivers = () => {
  const [data, setData] = useState<DriversData | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2024/driverStandings.json")
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .then(() => setLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error retrieving data...</p>;

  let teamColors = {
    alpine: "bg-[#FF87BC]",
    aston_martin: "bg-[#229971]",
    ferrari: "bg-[#E8002D]",
    haas: "bg-[#B6BABD]",
    mclaren: "bg-[#FF8000]",
    mercedes: "bg-[#27F4D2]",
    rb: "bg-[#6692FF]",
    red_bull: "bg-[#3671C6]",
    sauber: "bg-[#52E252]",
    williams: "bg-[#64C4FF]",
  };

  let gridElements = [];
  for (let i = 0; i < data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; i++) {
    const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i];
    gridElements.push(
      <div className={"rounded-md block h-14 mb-2 relative min-w-96 snap-start " + teamColors[driverStandings.Constructors[0].constructorId]}>
        <div className="absolute left-2 top-1 h-[3rem] w-full">
          <div className="h-[3rem]">
            <div className="inline-block h-[3rem] text-5xl font-semibold italic align-top">{driverStandings.positionText}</div>
            <div className="inline-block relative h-[3rem] ml-3 overflow-visible align-top">
              <div className="absolute left-[0rem] top-0 text-2xl font-medium w-max">{[driverStandings.Driver.givenName, driverStandings.Driver.familyName].join(" ")}</div>
              <div className="absolute left-[0rem] top-6 text-base w-max">{driverStandings.Constructors[0].name.replace("Red Bull", "Red Bull Racing").replace("Haas F1 Team", "Haas").replace("Sauber", "Kick Sauber").replace("RB F1 Team", "Racing Bulls").replace("Alpine F1 Team", "Alpine")}</div>
            </div>
          </div>
        </div>
        <div className="absolute right-4 top-[10px] text-3xl">{driverStandings.points}</div>
      </div>,
    );
  }

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max auto-rows-fr gap-4 overflow-scroll snap-x">{gridElements}</div>
    </>
  );
};

export default Drivers;
