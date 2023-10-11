import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface readMoreCardProps {
  title: string;
  description?: string | JSX.Element;
  content?: string | JSX.Element;
  image?: {
    url: string;
    alt: string;
    width: number | `${number}` | undefined;
    height: number | `${number}` | undefined;
  };
  buttonText?: string;
  badgeText?: string;
  onClickButton?: () => void;
  className?: string | undefined;
  asLink?: boolean;
  buttonLink?: string | undefined;
}

const ReadMoreCard = ({
  title,
  description,
  image,
  buttonText,
  onClickButton,
  className,
  asLink,
  buttonLink,
}: readMoreCardProps) => {
  return (
    <Card
      className={cn(
        " flex flex-row  border border-solid rounded-[10px] relative overflow-hidden",
        className
      )}
    >
      <CardContent className="py-4 px-2 readmore-content basis-3/5">
        {title && (
          <CardTitle className="mb-4 font-[Gotham-Bold] readmore-title uppercase text-white text-[28px]">
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className="mb-4 readmore-description">
            {description}
          </CardDescription>
        )}
        {buttonText && (
          <Button
            asChild={asLink}
            className="w-auto text-[16px] rounded-full  h-[30px] leading-[20px] font-[Gotham-Bold]"
            onClick={onClickButton}
            variant="secondary"
          >
            {asLink ? (
              <Link
                href={`${buttonLink}`}
                className={buttonVariants({ variant: "link" })}
              >
                {buttonText}
              </Link>
            ) : (
              buttonText
            )}
          </Button>
        )}
      </CardContent>
      <div className="flex basis-2/5 ">
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={{
              width: "100%",
              height: "auto",
            }}
            className="readmore-image"
          />
        )}
      </div>
    </Card>
  );
};

export default ReadMoreCard;
