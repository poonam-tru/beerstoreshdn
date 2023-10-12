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
  const border = bordered ? "border-r border-solid border-[#d6d6d6]" : "";
  return (
    <div className={cn("container", className)}>
      <div className="flex">
        <div className={`basis-1/4 ${border} `}>{sidebarContent}</div>
        <div className="basis-3/4">{content}</div>
      </div>
    </div>
  );
};

export default ContainerLayout;
