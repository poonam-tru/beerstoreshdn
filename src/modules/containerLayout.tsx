import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface containerLayout {
  sidebarContent: React.ReactNode;
  content: React.ReactNode;
  className?: string | undefined;
  bordered?: boolean;
}

const ContainerLayout = ({
  content,
  sidebarContent,
  className,
  bordered,
}: containerLayout) => {
  const border = bordered ? "md:border-r md:border-solid md:border-[#d6d6d6]" : "";
  return (
    <div className={cn("container px-[10px] lg:px-[45px]", className)}>
      <div className="flex flex-col-reverse md:flex-row">
        <div className={`basis-1/4 ${border}`}>{sidebarContent}</div>
        <div className="basis-3/4 min-h-0 min-w-0">{content}</div>
      </div>
    </div>
  );
};

export default ContainerLayout;
