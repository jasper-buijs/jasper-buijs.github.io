import { ReactNode } from "react";

interface ChangeIconGridProps {
  children: ReactNode
}
const ChangeIconGrid = ({ children }: ChangeIconGridProps) => {
  return (
    <div className="grid grid-cols-[2vw_1fr] auto-rows-auto">
      {children}
    </div>
  );
}

interface ChangeIconGridElementProps {
  children: ReactNode
  type: "added" | "changed" | "updated" | "removed" | "fixed"
  label?: string
  command?: string
}
const ChangeIconGridElement = ({ children, type, label, command }: ChangeIconGridElementProps) => {
  const classes = {
    added: "bg-lime-400 dark:bg-lime-500",
    changed: "bg-amber-400 dark:bg-amber-500",
    updated: "bg-slate-400 dark:bg-gray-400",
    removed: "bg-rose-600",
    fixed: "bg-sky-400 dark:bg-sky-500"
  }
  return (
    <>
      <div className="text-right col-start-1 col-span-2 row-span-1 mt-2">
        <div className={`text-black text-center w-full h-full px-2 inline-block ` + classes[type]}>
          {label ? label.toUpperCase() : type.toUpperCase()}
          {command && <p className={`text-white w-max px-1 mx-2 bg-gray-600 dark:bg-gray-800 inline`}>{command}</p>}
        </div>
      </div>
      <div className={"inline-block w-full h-full mb-2 " + classes[type]} />
      <div className={`ml-2 my-1 col-start-2 col-span-1 row-span-1`}>{children}</div>
    </>
  );
}

export { ChangeIconGrid, ChangeIconGridElement };