import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import parse from 'html-react-parser';

interface contentListProp {
  contentDetail: [];
}

const ContentList: React.FC<contentListProp> = ({ contentDetail }) => {
  return (
    <div className="flex flex-col">
      {contentDetail.map((item: any) => {
        return (
          <div key={`career_${item.title}`} className="[&>h3]:text-[24px] [&>h3]:font-sans [&>h3]:font-bold [&>h3]:mb-[25px] [&>p]:font-sans [&>p]:font-normal [&>p]:mb-[25px] ">
            <h2>{item.title}</h2>
            <p className="mb-[25px]">{item.description}</p>
            {item.links && item.links.length > 0 && (
              <ul className="flex gap-[10px] flex-wrap max-w-[750px] justify-center mb-[25px] m-auto">
                {item.links.map((listitem: any) => {
                  return (
                    <li key={`links_${listitem.title}`}>
                         <Button
                        asChild={true}
                        className="h-full rounded-[5px] py-[9px] px-[15px] text-center max-w-[230px] leading-[1.1]"
                      >
                        <Link href={listitem.url}>{listitem.title}</Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            )}
            {parse(item?.content)}
          </div>
        );
      })}
    </div>
  );
};

export default ContentList;
