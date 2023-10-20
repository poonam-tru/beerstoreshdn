"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import useMaxElementHeight from "@/shared/useMaxElementHeight";

interface articleCardProps {
  title: string;
  description?: string | JSX.Element;
  content?: string | JSX.Element;
  image?: string;
  buttonText?: string;
  badgeText?: string;
  url?: any;
  className?: string | undefined;
}

const ArticleCard = ({
  title,
  description,
  image,
  buttonText,
  url,
  badgeText,
  className,
}: articleCardProps) => {
  const elementSelector = ".eq-height";
  const { maxElementHeight } = useMaxElementHeight(elementSelector);
  const maximumheight = maxElementHeight > 0 ? `${maxElementHeight}px` : "auto";

  return (
    <Card
      className={cn(
        "flex h-full cursor-pointer group flex-col border border-solid rounded-[10px] relative overflow-hidden",
        className
      )}
    >
      <CardHeader>
        {image && (
          <Image
            src={image}
            alt={title}
            width={370}
            height={207}
            style={{ height: "auto", width: "100%" }}
            className="w-full h-auto md:h-[207px] md:object-cover md:object-center "
          />
        )}
      </CardHeader>

      <CardContent className="flex flex-col p-[20px] h-full group-hover:bg-[#f2ece0]">
        {title && (
          <CardTitle
            className={
              "mb-4 text-[15px]  font-sans  font-bold md:text-[18px] eq-height"
            }
            style={{ height: `${maximumheight}` }}
          >
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className="mb-4   text-[14px] font-sans  font-normal">
            {description}
          </CardDescription>
        )}
        {badgeText && (
          <Badge className=" bg-white rounded-[5px] text-[11px] leading-none font-sans  font-bold uppercase text-black hover:bg-White px-2 py-1 justify-center absolute left-4 top-4">
            {badgeText}
          </Badge>
        )}
        <CardFooter className="flex self-start mt-auto">
          <Button
            asChild
            className="h-[35px] text-[14px] justify-between min-w-[125px] font-sans  font-bold py-[3px] px-[7px]  rounded-[5px]"
          >
            <Link href={url}>
              {buttonText}
              <Image
                src="https://tbsecoms.wpengine.com/wp-content/themes/Beer-Store/images/arrow-black.svg"
                alt=""
                width={6}
                height={31}
              />
            </Link>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
