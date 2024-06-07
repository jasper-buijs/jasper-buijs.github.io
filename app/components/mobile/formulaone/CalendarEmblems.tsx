import { ReactNode } from "react";

interface CalendarEmblemsProps {
  sprint?: boolean;
  f2?: boolean;
  f3?: boolean;
  f1a?: boolean;
}
const CalendarEmblems = ({ sprint, f2, f3, f1a }: CalendarEmblemsProps) => {
  return (
    <>
      {sprint && <div className="inline-block bg-[#ff1801] text-white rounded-md px-1 w-max h-max mr-2">SPR</div>}
      {f2 && <div className="inline-block bg-[#018FCF] text-white rounded-md px-1 w-max h-max mr-2">F2</div>}
      {f3 && <div className="inline-block bg-[#5E5E60] text-white rounded-md px-1 w-max h-max mr-2">F3</div>}
      {f1a && <div className="inline-block bg-gradient-to-r from-[#00B1FF] to-[#E51073] text-white rounded-md px-1 w-max h-max mr-2">F1A</div>}
    </>
  );
};

export { CalendarEmblems };