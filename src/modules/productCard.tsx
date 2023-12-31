import * as React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface productCardProps {
  title: string;
  description?: string | JSX.Element;
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
}

const ProductCard = ({
  title,
  description,
  image,
  buttonText,
  onClickButton,
  badgeText,
  className,
}: productCardProps) => {
  return (
    <Card
      className={cn(
        "flex-col border border-solid rounded-[10px] relative shadow-none overflow-hidden",
        className
      )}
    >
      <CardHeader className="rounded-[5px] overflow-hidden max-h-[250px]">
        {image && (
          <Image
            className="bg-center bg-fixed bg-no-repeat bg-cover"
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </CardHeader>

      <CardContent className="ps-[20px] pe-[20px]  font-sans font-medium text-[14px]">
        {title && (
          <CardTitle className="mb-[15px] mt-[20px] uppercase font-sans font-bold text-[14px] h-[60px]">
            {title}
          </CardTitle>
        )}
        {badgeText && (
          <Badge
            variant={"default"}
            className="bg-[#b02e2f] uppercase text-[12px] font-sans font-medium text-white hover:bg-[#b02e2f] w-[50px] h-[50px] justify-center absolute right-4 top-4"
          >
            {badgeText}
          </Badge>
        )}

        {description}
      </CardContent>
      <CardFooter className="flex mt-[10px] ps-[20px] pe-[20px] pb-[20px] product-footer">
        {buttonText && (
          <Button
            className="w-full text-[14px] font-sans font-medium rounded-[100px]"
            onClick={onClickButton}
          >
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
