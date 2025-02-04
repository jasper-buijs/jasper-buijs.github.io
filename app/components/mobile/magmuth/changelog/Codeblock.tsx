import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode
}
const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <div className="bg-gray-400 dark:bg-gray-500 inline p-1 rounded-md font-mono text-xs">{children}</div>
  );
}

export default CodeBlock;