import { ReactNode } from "react";

interface AnnouncementHeaderGridProps {
  children: ReactNode
}
const AnnouncementHeaderGrid = ({ children }: AnnouncementHeaderGridProps) => {
  return (
    <div className="grid grid-cols-2 auto-rows-fr w-100">
      {children}
    </div>
  );
}

interface AnnouncementHeaderGridElementProps {
  imagePath: string;
  setModalFunction: any;
  name: string;
  column: number;
  row: number;
}
const AnnouncementHeaderGridElement = ({ imagePath, setModalFunction, name, column, row }: AnnouncementHeaderGridElementProps) => {
  const gridClasses = () => {
    return String(`row-start-${row} col-start-${column}`);
  }
  const setModal = () => {
    setModalFunction(name);
  }
  return (
    <img src={imagePath} onClick={setModal} className={`w-100 row-span-1 col-span-1 ${gridClasses()}`} />
  );
}

export { AnnouncementHeaderGrid, AnnouncementHeaderGridElement };