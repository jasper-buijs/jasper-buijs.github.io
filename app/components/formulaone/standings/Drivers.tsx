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
  if (!data) return <p>Error retreiving data...</p>;

  let teamColors = {
    red_bull: "bg-[#3671C6]",
    ferrari: "bg-[#E8002D]",
    mercedes: "bg-[#27F4D2]",
    mclaren: "bg-[#FF8000]",
    aston_martin: "bg-[#229971]",
    haas: "bg-[#B6BABD]",
    williams: "bg-[#64C4FF]",
    sauber: "bg-[#52E252]",
    rb: "bg-[#6692FF]",
    alpine: "bg-[#FF87BC]",
  };

  /*let tableRows = new Array();
  for (let i = 0; i < data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; i++) {
    tableRows.push(
      <tr className={"border-separate " + teamColors[data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId]}>
        <td className="rounded-l-md block">{data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].positionText}</td>
        <td>{[data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName, data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName].join(" ")}</td>
        <td>{data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name}</td>
        <td className="rounded-r-md block">{data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points}</td>
      </tr>,
    );
  }*/
  let gridElements = new Array();
  for (let i = 0; i < data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; i++) {
    const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i];
    /*gridElements.push(
      <div className={"rounded-md block h-14 mb-2 relative min-w-96 " + teamColors[driverStandings.Constructors[0].constructorId]}>
        <div className="absolute left-2 top-1 text-5xl font-semibold italic">{driverStandings.positionText + "."}</div>
        <div className="absolute left-[5.5rem] top-1 text-2xl font-medium">{[driverStandings.Driver.givenName, driverStandings.Driver.familyName].join(" ")}</div>
        <div className="absolute left-[5.5rem] top-7 text-base">{driverStandings.Constructors[0].name.replace("Red Bull", "Red Bull Racing").replace("Haas F1 Team", "Haas").replace("Sauber", "Kick Sauber").replace("RB F1 Team", "Racing Bulls").replace("Alpine F1 Team", "Alpine")}</div>
        <div className="absolute right-4 top-[10px] text-3xl">{driverStandings.points}</div>
      </div>,
    );*/
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
      {/*<table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Pts.</th>
          </tr>
          {tableRows}
        </tbody>
      </table>*/}
    </>
  );
};

export default Drivers;
