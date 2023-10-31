import InfoCard from "../infoCard";
import Image from "next/image";
import chevronRight from "../../../public/images/arrow-right.svg";

interface InterestProps {
  contentDetail: [];
}
const InterestCard = ({ contentDetail }: InterestProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] flex-wrap">
      {contentDetail.length > 0 &&
        contentDetail.map((item: any, _idx: any) => (
          <div key={`career_card${_idx}`}>
            <InfoCard
              className="[&_.info-content]:px-[30px] [&_.info-content]:py-[25px] [&_.info-footer>button]:rounded-[3px] [&_.info-footer>button]:w-auto  [&_.info-footer]:justify-end [&_.info-footer>button]:text-[11px] [&_.info-footer>button]:p-[7px] [&_.info-footer>button]:h-[30px] [&_.info-footer>button]:mt-[15px] [&_.info-footer>button]:uppercase"
              title={item.cardTitle}
              buttonText="I'm Interested"
              buttonLink="/"
              buttonIcon={
                <Image
                  src={chevronRight}
                  alt="arrow"
                  width={6}
                  height={12}
                  style={{ width: 6, height: 12, marginLeft: 10 }}
                />
              }
              image={{
                url: item.cardImage,
                alt: item.cardTitle,
                width: "600",
                height: "400",
              }}
            />
          </div>
        ))}
    </div>
  );
};
export default InterestCard;
