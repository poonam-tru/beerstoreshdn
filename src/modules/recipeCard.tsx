"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import useMaxElementHeight from "@/shared/useMaxElementHeight";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface recipesCardProps {
  title: string;
  cookTime?: string | JSX.Element;
  serves?: string | JSX.Element;
  image?: string;
  className?: string | undefined;
}

const RecipeCard = ({
  title,
  image,
  cookTime,
  serves,
  className,
}: recipesCardProps) => {
  const elementSelector = ".eq-height";
  const { maxElementHeight } = useMaxElementHeight(elementSelector);
  const maximumheight = maxElementHeight > 0 ? `${maxElementHeight}px` : "auto";

  return (
    <Card
      className={cn(
        " flex h-full flex-col border border-solid rounded-[10px] relative overflow-hidden",
        className
      )}
    >
      <Link href={"/"} className="">
        <CardHeader>
          {image && (
            <Image
              src={image}
              alt={title}
              width={370}
              height={256}
              className="w-full h-auto md:h-[258px] md:object-cover md:object-center "
            />
          )}
        </CardHeader>

        <CardContent className="flex flex-col p-[20px]">
          {title && (
            <CardTitle className="mb-4 text-[15px]  font-sans  font-bold md:text-[18px]">
              {title}
            </CardTitle>
          )}
        </CardContent>
      </Link>
      <CardFooter
        className="flex  mt-auto border-t items-center border-solid border-[#d6d6d6]"
        style={{ height: `${maximumheight}` }}
      >
        <div className="basis-1/2 flex flex-row  p-2.5 items-start">
          <Image
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/11/time.svg"
            alt="time"
            width={18}
            height={18}
            className={"mr-2.5"}
          />
          <div className="flex flex-col ">
            <h4 className="font-sans text-sm font-bold">Cook-Time</h4>
            <p className="font-sans text-[12px] font-normal">{cookTime}</p>
          </div>
        </div>
        <Separator orientation="vertical" className=" bg-[#d6d6d6] h-full " />
        <div className="basis-1/2 flex flex-row p-2.5 items-start eq-height">
          <Image
            src="https://tbsecomd.wpengine.com/wp-content/uploads/2019/11/serves.svg"
            alt="time"
            width={27}
            height={18}
            className={"mr-2.5"}
          />
          <div className="flex flex-col ">
            <h4 className="font-sans text-sm font-bold">Serves</h4>
            <p className="font-sans text-[12px] font-normal">{serves}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
