import { ReactNode } from "react";

interface ParagraphProps {
  emoji?: string;
  title: string;
  children: ReactNode;
}
const Paragraph = ({ emoji, title, children }: ParagraphProps) => {
  return (
    <div className="bg-[#D6D6D6] dark:bg-[#1E1E1E] px-4 pt-2 mb-4">
      {emoji && <h1 className="text-lg inline mr-1">{emoji}</h1>}
      <h1 className="uppercase text-[#BA9C0D] dark:text-[#CFB53B] text-lg inline">{title}</h1>
      <div className="text-[#1E1E1E] dark:text-inherit py-1">
        {children}
      </div>
    </div>
  );
}

export default Paragraph;