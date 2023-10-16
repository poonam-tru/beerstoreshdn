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
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface infoCardProps {
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

const InfoCard = ({
  title,
  description,
  image,
  content,
  buttonText,
  onClickButton,
  badgeText,
  className,
  asLink,
  buttonLink,
}: infoCardProps) => {
  return (
    <Card
      className={cn(
        " flex flex-col border border-solid rounded-[10px] relative",
        className
      )}
    >
      <CardHeader className="info-header">
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
            className="info-image"
          />
        )}
      </CardHeader>

      <CardContent className="py-4 px-2 info-content">
        {title && (
          <CardTitle className="mb-4 text-[20px] font-[Gotham-Bold] info-title">
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className="mb-4 text-[13px] font-[Gotham-Book] info-description">
            {description}
          </CardDescription>
        )}
        {badgeText && (
          <Badge
            variant={"default"}
            className="info-badge bg-white  rounded-[3px] uppercase text-black hover:bg-White px-2 py-1 leading-4 justify-center absolute left-4 top-4"
          >
            {badgeText}
          </Badge>
        )}

        {content}
        <CardFooter className="flex p-3 info-footer">
          {buttonText && (
            <Button
              asChild={asLink}
              className={`${
                asLink ? "tbs-link-text p-0 h-auto" : "w-full rounded-[100px]"
              } text-[11px] font-[Gotham-Bold]`}
              onClick={onClickButton}
              variant={asLink ? "link" : "default"}
            >
              {asLink ? (
                <Link href={`${buttonLink}`} className={"p-0"}>
                  {buttonText}
                </Link>
              ) : (
                buttonText
              )}
            </Button>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
