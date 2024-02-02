import { ReactNode } from "react";

interface GridMenuProps {
  children: ReactNode;
  alert?: boolean;
  topSpacing?: string;
}
const GridMenu = ({ children, topSpacing }: GridMenuProps) => {
  const divStyle = topSpacing ? ({ top: `${topSpacing}` } as React.CSSProperties) : ({} as React.CSSProperties);
  return (
    <div style={divStyle} className={`px-12 w-full ${topSpacing ? "" : "top-[5rem]"} bottom-[5rem] absolute grid auto-cols-fr auto-rows-fr gap-4 place-content-stretch`}>
      {children}
    </div>
  );
};

interface GridMenuElementProps {
  bgImage?: string;
  title: string;
  href: string;
  columns: [number, number];
  rows: [number, number];
}
const GridMenuElement = ({ bgImage, title, href, columns, rows }: GridMenuElementProps) => {
  const gridClasses = () => {
    return String(`row-start-${rows[0]} row-span-${rows[1]} col-start-${columns[0]} col-span-${columns[1]}`);
  };
  const bgClasses = () => {
    if (bgImage != undefined) {
      return "bg-[image:var(--image-url)] bg-cover brightness-[70%]";
    } else {
      return "bg-[#D6D6D6] dark:bg-[#1E1E1E]";
    }
  };
  const textClasses = () => {
    if (bgImage != undefined) {
      return "text-[#FFFFFF]";
    } else {
      return "text-[#1E1E1E] dark:text-[#FFFFFF]";
    }
  };
  const divStyle = { "--image-url": `url(${bgImage})` } as React.CSSProperties;
  /*return (
    <>
      <a href={href} style={divStyle} className={`${bgClasses()} ${gridClasses(rows)} brightness-[80%] hover:brightness-[30%] transition-all !duration-[600]`}>
      </a>
      <div className={`${gridClasses(rows)} brightness-100`}>
        {title}
      </div>
    </>
  );*/
  return (
    <a href={href} className={`relative group ${gridClasses()}`}>
      <div style={divStyle} className={`absolute w-full h-full ${bgClasses()} group-hover:brightness-[30%] transition-all !duration-[600]`}></div>
      <div className={`absolute w-full brightness-100 ${textClasses()} text-4xl text-center top-[75%] group-hover:underline transition-all !duration-[600]`}>{title}</div>
    </a>
  );
};

export { GridMenu, GridMenuElement };
