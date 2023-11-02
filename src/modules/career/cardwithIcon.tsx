import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

interface CardWithIconProps {
  cardDetail: [];
}

const CardWithIcon: React.FC<CardWithIconProps> = ({ cardDetail }) => {
  return (
    <>
      {cardDetail.length > 0 &&
        cardDetail.map((item: any, _idx: any) => (
          <div
            className="flex gap-[20px] flex-col md:flex-row mb-[25px]"
            key={`core_value_list${_idx}`}
          >
            {item.image && item.image !== "" && (
              <div className="basis-full md:basis-[95px] flex-shrink-0">
                <Image
                  src={item.image.url}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
              </div>
            )}
            <div className="basis-full">
              {item.title && item.title !== "" && (
                <h2 className="font-sans font-bold text-[24px]">
                  {item.title}
                </h2>
              )}
              {item.description && item.description !== "" && (
                <div className="[&>p>a]:text-[#B95804]">
                  {parse(item.description)}
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default CardWithIcon;
