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
        "flex-col border border-solid rounded-[10px] relative",
        className
      )}
    >
      <CardHeader>
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
      </CardHeader>

      <CardContent>
        {title && <CardTitle className="mb-4 uppercase">{title}</CardTitle>}
        {badgeText && (
          <Badge
            variant={"default"}
            className="bg-[#b02e2f] uppercase text-white hover:bg-[#b02e2f] w-[50px] h-[50px] justify-center absolute right-4 top-4"
          >
            {badgeText}
          </Badge>
        )}

        {description}
      </CardContent>
      <CardFooter className="flex">
        {buttonText && (
          <Button className="w-full rounded-[100px]" onClick={onClickButton}>
            {buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
