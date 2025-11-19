//import type React from "react"

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
export const Title = ({ children }: TitleProps) => {
  return (
   <h1 className="text-heading-1 font-semibold text-2xl sm-3xl md:text-4xl">{children}</h1>
  );
};