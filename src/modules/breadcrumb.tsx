import React from "react";
import Link from "next/link";
import separator from "../../public/images/separator.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface breadcrumbProps {
  list: any[];
  className?: string | undefined;
}

const Breadcrumb: React.FC<breadcrumbProps> = ({
  list,
  className,
}: breadcrumbProps) => {
  return (
    <div className={cn("flex py-[25px]", className)}>
      {list.length > 0 &&
        list.map((item, idx) => (
          <div
            key={`breadcrumb_${item.title}`}
            className="inline-flex items-center breadcrumb-listitem"
          >
            {idx === list.length - 1 ? (
              <span className="text-[16px] font-sans font-bold">
                {item.title}
              </span>
            ) : (
              <>
                <Link href={item.url} className="text-[16px] font-sans">
                  {item.title}
                </Link>
                <Image
                  src={separator}
                  alt="separator"
                  width="6"
                  height="10"
                  className="mx-2.5"
                />
              </>
            )}
          </div>
        ))}
    </div>
  );
};
export default Breadcrumb;
