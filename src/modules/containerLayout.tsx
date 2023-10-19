import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface containerLayoutProps {
  children: React.ReactNode;
  className?: string | undefined;
  bordered?: boolean;
}
interface sidebarLayoutProps {
  children: React.ReactNode;
  className?: string | undefined;
  bordered?: boolean;
}
interface contentLayoutProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export const ContainerLayout = ({ children, className }: containerLayoutProps) => {
  return (
    <div className={cn("container px-[15px] lg:px-[45px]", className)}>
      <div className="flex flex-col-reverse md:flex-row">{children}</div>
    </div>
  );
};

export const SidebarLayout = ({
  children,
  className,
  bordered,
}: sidebarLayoutProps) => {
  const border = bordered
    ? "md:border-r md:border-solid md:border-[#d6d6d6]"
    : "";
  return <div className={cn(`basis-1/4 ${border}`, className)}>{children}</div>;
};

export const ContentLayout = ({ children, className }: contentLayoutProps) => {
  return (
    <div className={cn("basis-3/4 min-h-0 min-w-0", className)}>{children}</div>
  );
};
