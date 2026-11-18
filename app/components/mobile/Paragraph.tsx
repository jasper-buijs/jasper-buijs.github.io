import { ReactNode } from "react";

interface ParagraphProps {
  emoji?: string;
  title: string;
  children: ReactNode;
}
const Paragraph = ({ emoji, title, children }: ParagraphProps) => {
  return (
    <div className="bg-background px-4 pt-2 mb-4">
      {emoji && <h1 className="text-lg inline mr-1">{emoji}</h1>}
      <h1 className="uppercase text-yellow-10 text-lg font-bold inline">{title}</h1>
      <div className="text-gray-12 py-1">
        {children}
      </div>
    </div>
  );
}

export default Paragraph;