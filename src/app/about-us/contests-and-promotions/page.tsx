"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import BannerHeader from "@/modules/bannerHeader";
import {
  ContainerLayout,
  ContentLayout,
  SidebarLayout,
} from "@/modules/containerLayout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionItemData = [
  {
    value: "item-1",
    title: "2023 Contests and Promotions",
    data: [
      {
        image:"https://tbsecoms.wpengine.com/wp-content/uploads/2023/10/contest_MM_2023.jpeg",
        imagepopupContent: {
          headertitle: "M&M Marquee Contest",
          title: "",
          winnerlist: [
            "Peter Lang - Third Prize",
            "Carl Wood – Second Prize",
            "Trista Tabobondung – First Prize",
          ],
          linktitle: "Rules and Regulations",
          linkurl: "#",
        },
        value: "item-1",
        title: "Happy Holiday Giveaway (Nov - Dec 2019)",
        linktitle: "Rules and Regulations",
        linkurl: "#",
        content: [
          {
            headertitle: "Winners of $500 Gift Cards:",
            winnerlist: [
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
            ]
          },
          {
            headertitle: "M&M Marquee Contest",
            title: "",
            winnerlist: [
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
              "@sunlover44",
              " @nathanw0lfey",
              "Trista Tabobondung – First Prize",
            ]
          }
        ]
      },
      
    ],
  },
 
];


const ContestsPromotions = (value: number) => {
  const handleClickWithOffset = (value: any) => {
    window.scrollTo({ top: 700 + value, behavior: "smooth" });
  };

  return (
    <>
      <BannerHeader
        title="Accessibility"
        backgroundImage="https://tbsecoms.wpengine.com/wp-content/uploads/2020/02/about-desk.jpg"
      />

      <ContainerLayout>
        <SidebarLayout>test</SidebarLayout>
        <ContentLayout>
          <div className="py-[70px]">
            <div>
              <h2>Contests & Promotions</h2>
              <p className="text-[#4A4F55] mb-[25px]">
              We’ve brewed up some exciting contests and we’re saying cheers to you, lucky winners! To learn more about our past contest winners, prizes and rules and regulations, click on the year you’d like to view and the contest you’re interested in. Don’t forget to follow us @TheBeerStoreON for upcoming contests and giveaways. The next lucky winner could be you!
              </p>
              <p className="text-[#4A4F55] mb-[25px]">Click the drop down below to view all past winners:</p>

              <div> 
                <Accordion type="single" collapsible className="w-full">
                  {AccordionItemData?.map((items, index) => (
                    <AccordionItem value={items.value}>
                      <AccordionTrigger onClick={() => handleClickWithOffset(index * 52 + 52)} className="p-[25px] bg-[#f5f5f5] text-[#404040] text-[18px] hover:no-underline"> {items.title} </AccordionTrigger>
                      <AccordionContent>

                        
                        <div className="grid grid-cols-5 gap-5 py-[30px]">
                          {items?.data?.map((item: any, itemIndex: any) => (
                            <div key={itemIndex}>
                              <Dialog>
                                <DialogTrigger  >
                                  <Image src={item?.image} alt={`Image ${itemIndex}`} width={209} height={209} />
                                </DialogTrigger>
                                <DialogContent  className="bg-[#fff] text-[18px] p-[0] max-w-[680px] sm:rounded-[5px] border-0">
                                  <DialogHeader>
                                    <DialogTitle className=" border-b border-indigo-600 border-[#dddddd] font-sans px-[30px] py-[20px] m-0 ">{item?.imagepopupContent?.headertitle}</DialogTitle>
                                    <DialogDescription className="p-[30px] m-0 text-[#4A4F55]">
                                      <ul className="dot-list flex flex-wrap">
                                      {item?.imagepopupContent?.winnerlist.map((winner:any)=> (
                                            <li className="w-1/2">{winner}</li>
                                      ))}
                                        </ul>
                                      <div className="mt-[30px] text-[#B95804] font-mideum"><Link href="#">Rules and Regulations</Link></div>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>
                               </div>                   
                          ))}
                        </div>




                        <div className="py-[30px]">
                          {items?.data?.map((item: any, itemIndex: any) => {
                            return(
                              <>
                               <div key={itemIndex}>
                                  <Accordion type="single" collapsible className="w-full">
                                  <AccordionItem value={item.value}>
                                          <AccordionTrigger onClick={() => handleClickWithOffset(index * 52 + 52)} className="py-[20px] px-[12px] bg-[#ddd] text-[#000] text-[14px] hover:no-underline"> {item.title} </AccordionTrigger>
                                              <AccordionContent>
                                                <div className="pt-[30px] px-[20px] pb-[10px]">
                                                  {item?.content.map((accData:any, accDataIndex:any) => { 
                                                    return(
                                                        <>
                                                          <div key={accDataIndex}>
                                                            <h5 className="pb-[25px] text-[#000] text-[30px] font-medium"> {accData.headertitle}</h5>
                                                            <ul className="dot-list flex flex-wrap pb-[30px]">
                                                                {accData.winnerlist.map((winner:any)=> (
                                                                <li className="w-1/2">{winner}</li>
                                                                ))}
                                                            </ul>
                                                            </div>
                                                        </>
                                                      )
                                                      })}
                                                      <div className="text-[#B95804] font-mideum"><Link href="#">Rules and Regulations</Link></div>
                                                  </div>
                                                </AccordionContent>
                                          
                                          </AccordionItem>
                                      </Accordion>
                                  </div>                   
                                
                              </>
                            )})}
                        </div>










                        





                        {/* <div className="p-[30px]">
                                  <Accordion type="single" collapsible className="w-full">
                                    {items?.data?.map((items, index) => (
                                      <AccordionItem value={items.value}>
                                        <AccordionTrigger onClick={() => handleClickWithOffset(index * 52 + 52)} className="py-[20px] px-[12px] bg-[#ddd] text-[#000] text-[14px] hover:no-underline"> {items.title} </AccordionTrigger>
                                        Content
                                        {items?.data?.Content.map((item: any, itemIndex: any) => (
                                        <AccordionContent>
                                          <div className="py-[30px]">
                                          {item?.Content?.headertitle}
                                          </div>
                                        </AccordionContent>

                                        ))} 
                                      </AccordionItem>
                                    ))}
                                  </Accordion>
                                  </div> */}

                      





































                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </ContentLayout>
      </ContainerLayout>
    </>
  );
};

export default ContestsPromotions;
