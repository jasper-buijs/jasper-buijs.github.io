import { ReactNode } from "react";

interface CalendarGridProps {
  children: ReactNode;
}
const CalendarGrid = ({ children }: CalendarGridProps) => {
  return <div className="grid grid-cols-2 auto-rows-fr w-full m-2">{children}</div>;
};

interface CalendarEmblemsProps {
  sprint?: boolean;
  f2?: boolean;
  f3?: boolean;
  f1a?: boolean;
}
const CalendarEmblems = ({ sprint, f2, f3, f1a }: CalendarEmblemsProps) => {
  return (
    <>
      {sprint && <div className="inline-block bg-[#ff1801] text-white rounded-md px-1 w-max h-max mr-2">SPRINT</div>}
      {f2 && <div className="inline-block bg-[#018FCF] text-white rounded-md px-1 w-max h-max mr-2">Formula 2</div>}
      {f3 && <div className="inline-block bg-[#5E5E60] text-white rounded-md px-1 w-max h-max mr-2">Formula 3</div>}
      {f1a && <div className="inline-block bg-gradient-to-r from-[#00B1FF] to-[#E51073] text-white rounded-md px-1 w-max h-max mr-2">F1 Academy</div>}
    </>
  );
};

export { CalendarGrid, CalendarEmblems };
