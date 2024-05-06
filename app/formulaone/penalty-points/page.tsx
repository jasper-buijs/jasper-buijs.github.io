"use client";

import FooterBar from "@/app/components/FooterBar";
import NavBar from "@/app/components/NavBar";
import Paragraph from "@/app/components/Paragraph";
import redirect from "@/app/components/redirect";
import { useState } from "react";

const PenaltyPointsPage: React.FunctionComponent = () => {
  redirect("/formulaone", false);
  const [expanded, setExpanded] = useState<null | string>(null);
  return (
    <>
      <NavBar activePage={"formulaone"} />
      <Paragraph title={ "Formula 1 2024 Penalty Points" }>

        {/* KEVIN MAGNUSSEN */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#B6BABD]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">20</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Kevin Magnussen
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Haas
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>10</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "MAG" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("MAG") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "MAG" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "MAG" ? "inline-block" : "hidden") }>
            <b>Saudi Arabian GP 2024</b>
            <ul className={ "list-disc" }>
              <li>3 points until 9 March 2025 for Causing a Collision.</li>
            </ul>
            <b>Chinese GP 2024</b>
            <ul className={ "list-disc" }>
              <li>2 points until 21 April 2025 for Causing a Collision.</li>
            </ul>
            <b>Miami GP 2024</b>
            <ul className={ "list-disc" }>
              <li>3 points until 4 May 2025 for Leaving the Track and Gaining an Advantage.</li>
              <li>2 points until 5 May 2025 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* LOGAN SARGEANT */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#64C4FF]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">2</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Logan Sargeant
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Williams
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>8</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "SAR" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("SAR") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "SAR" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "SAR" ? "inline-block" : "hidden") }>
            <b>Italy GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 3 September 2024 for Causing a Collision.</li>
            </ul>
            <b>Japanese GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 24 september 2024 for Causing a Collision.</li>
            </ul>
            <b>Mexico City GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 26 November 2024 for Overtaking under Yellow Flags.</li>
            </ul>
            <b>Chinese GP 2024</b>
            <ul className={ "list-disc" }>
              <li>2 points until 21 April 2025 for Overtaking under Safety Car.</li>
            </ul>
          </div>
        </div>

        { /* SERGIO PEREZ */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#3671C6]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">11</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Sergio Perez
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Red Bull Racing
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>8</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "PER" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("PER") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "PER" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "PER" ? "inline-block" : "hidden") }>
            <b>Singapore GP 2023</b>
            <ul className={ "list-disc" }>
              <li>1 point until 17 September 2024 for Causing a Collision.</li>
            </ul>
            <b>Japanese GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 24 September 2024 for Overtaking under Safety Car.</li>
              <li>2 points until 24 september 2024 for Causing a Collision.</li>
            </ul>
            <b>Abu Dhabi GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 26 November 2024 for Causing a Collision.</li>
            </ul>
            <b>Saudi Arabia GP 2024</b>
            <ul className={ "list-disc" }>
              <li>1 point until 9 March 2025 for an Unsafe Release.</li>
            </ul>
          </div>
        </div>

        {/* LANCE STROLL */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#229971]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">18</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Lance Stroll
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Aston Martin
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>7</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "STR" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("STR") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "STR" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "STR" ? "inline-block" : "hidden") }>
            <b>British GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 9 July 2024 for Causing a Collision.</li>
            </ul>
            <b>Las Vegas GP 2023</b>
            <ul className={ "list-disc" }>
              <li>3 points until 17 November 2024 for Overtaking under Yellow Flags.</li>
            </ul>
            <b>Chinese GP 2024</b>
            <ul className={ "list-disc" }>
              <li>2 points until 21 April 2025 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* FERNANDO ALONSO */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#229971]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">14</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Fernando Alonso
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Aston Martin
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>6</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "ALO" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("ALO") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "ALO" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "ALO" ? "inline-block" : "hidden") }>
            <b>Australia GP 2024</b>
            <ul className={ "list-disc" }>
              <li>3 points until 24 March 2025 for Potentially Dangerous Driving.</li>
            </ul>
            <b>Chinese GP 2024</b>
            <ul className={ "list-disc" }>
              <li>3 points until 20 April 2025 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        { /* LEWIS HAMILTON */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#32d3b8]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">44</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Lewis Hamilton
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Mercedes
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>4</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "HAM" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("HAM") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "HAM" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "HAM" ? "inline-block" : "hidden") }>
            <b>Belgian GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 29 July 2024 for Causing a Collision.</li>
            </ul>
            <b>Italian GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 3 September 2024 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        { /* GEORGE RUSSELL */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#32d3b8]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">63</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">George Russell
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Mercedes
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>4</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "RUS" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("RUS") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "RUS" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "RUS" ? "inline-block" : "hidden") }>
            <b>Monaco GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 28 May 2024 for Rejoining the Track in an Unsafe Manner.</li>
            </ul>
            <b>Las Vegas GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 19 November 2024 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* YUKI TSUNODA */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#6692FF]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">22</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Yuki Tsunoda
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Racing Bulls
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>3</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "TSU" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("TSU") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "TSU" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "TSU" ? "inline-block" : "hidden") }>
            <b>Spanish GP 2023</b>
            <ul className={ "list-disc" }>
              <li>1 point until 4 July 2024 for Forcing another Driver of the Track.</li>
            </ul>
            <b>Dutch GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 27 August 2024 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        { /* MAX VERSTAPPEN */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#3671C6]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">1</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Max Verstappen
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Red Bull Racing
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>2</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "VER" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("VER") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "VER" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "VER" ? "inline-block" : "hidden") }>
            <b>Las Vegas GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 19 November 2024 for Forcing another Driver off the Track.</li>
            </ul>
          </div>
        </div>

        {/* DANIEL RICCIARDO */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#6692FF]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">3</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Daniel Ricciardo
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Racing Bulls
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>2</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "RIC" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("RIC") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "RIC" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "RIC" ? "inline-block" : "hidden") }>
            <b>Chinese GP 2024</b>
            <ul className={ "list-disc" }>
              <li>2 points until 21 April 2025 for Overtaking under Safety Car.</li>
            </ul>
          </div>
        </div>

        {/* ZHOU GUANYU */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#52E252]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">24</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Guanyu Zhou
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Kick Sauber
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>2</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "ZHO" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("ZHO") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "ZHO" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "ZHO" ? "inline-block" : "hidden") }>
            <b>Hungarian GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 23 July 2024 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* NICO HULKENBERG */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#B6BABD]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">27</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Nico Hulkenberg
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Haas
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>2</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "HUL" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("HUL") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "HUL" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "HUL" ? "inline-block" : "hidden") }>
            <b>Monaco GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 29 May 2024 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* VALTTERI BOTTAS */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#52E252]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">77</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Valtteri Bottas
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Kick Sauber
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>2</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "BOT" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("BOT") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "BOT" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "BOT" ? "inline-block" : "hidden") }>
            <b>Mexican GP 2023</b>
            <ul className={ "list-disc" }>
              <li>2 points until 29 October 2024 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* ESTEBAN OCON */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#FF87BC]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">31</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Esteban Ocon
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Alpine
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>1</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "OCO" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("OCO") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "OCO" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "OCO" ? "inline-block" : "hidden") }>
            <b>Miami GP 2024</b>
            <ul className={ "list-disc" }>
              <li>1 point until 4 May 2025 for an Unsafe Release.</li>
            </ul>
          </div>
        </div>

        { /* CARLOS SAINZ */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#E8002D]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">55</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Carlos Sainz
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Ferrari
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>1</div>
              <div className={ "text-md inline-block mr-4" }>/12</div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "SAI" ? "hidden" : "inline-block") }
                onClick={ () => setExpanded("SAI") }>▸
              </div>
              <div
                className={ "text-3xl pb-[2px] align-bottom " + (expanded == "SAI" ? "inline-block" : "hidden") }
                onClick={ () => setExpanded(null) }>▾
              </div>
            </div>
          </div>
          <div className={ "ml-12 h-max w-full " + (expanded == "SAI" ? "inline-block" : "hidden") }>
            <b>Miami GP 2024</b>
            <ul className={ "list-disc" }>
              <li>1 point until 5 May 2025 for Causing a Collision.</li>
            </ul>
          </div>
        </div>

        {/* LANDO NORRIS */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#FF8000]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">4</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Lando Norris
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">McLaren
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>0</div>
              <div className={ "text-md inline-block mr-8" }>/12</div>
            </div>
          </div>
        </div>

        {/* PIERRE GASLY */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#FF87BC]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">10</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Pierre Gasly
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Alpine
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>0</div>
              <div className={ "text-md inline-block mr-8" }>/12</div>
            </div>
          </div>
        </div>

        { /* CHARLES LECLERC */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#E8002D]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">16</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Charles Leclerc
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Ferrari
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>0</div>
              <div className={ "text-md inline-block mr-8" }>/12</div>
            </div>
          </div>
        </div>

        {/* ALEX ALBON */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#64C4FF]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">23</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Alex Albon
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">Williams
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>0</div>
              <div className={ "text-md inline-block mr-8" }>/12</div>
            </div>
          </div>
        </div>

        {/* OSCAR PIASTRI */ }
        <div
          className={ "rounded-md block h-max mb-2 relative min-w-96 snap-start bg-[#FF8000]" }>
          <div className={ "h-14 block" }>
            <div className="absolute left-2 top-1 h-[3rem] w-full">
              <div className="h-[3rem]">
                <div className="inline-block h-[3rem] text-5xl font-semibold ml-1 align-top">81</div>
                <div className="inline-block relative h-[3rem] ml-2 overflow-visible align-top">
                  <div
                    className="absolute left-[0rem] top-0 text-2xl font-medium w-max">Oscar Piastri
                  </div>
                  <div
                    className="absolute left-[0rem] top-6 text-base w-max">McLaren
                  </div>
                </div>
              </div>
            </div>
            <div className={ "absolute right-4 top-[10px]" }>
              <div className={ "text-md mr-2 italic inline-block" }>penalty points:</div>
              <div className={ "text-3xl inline-block" }>0</div>
              <div className={ "text-md inline-block mr-8" }>/12</div>
            </div>
          </div>
        </div>

        <p className={"italic mt-4"}>{"Last updated on " + new Date("May 6, 2024 15:00:00 UTC+02:00")
          .toLocaleString(undefined, { dateStyle: "medium" }) + " after the Miami GP."}</p>

      </Paragraph>
      <FooterBar/>
    </>
  )
}

export default PenaltyPointsPage;