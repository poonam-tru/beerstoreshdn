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

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordianTriggerCustom from "./accordianTrigger";

export const ContestAndPromotionsContainer = (props:any) => {
const {accordiandata} = props;

  return (
    <div> 
                <Accordion type="single" collapsible className="w-full">
                  {accordiandata?.AccordionItemData?.map((items:any, index:any) => (
                    <AccordionItem value={items?.value} key={index}>  
                      <AccordianTriggerCustom index={index} title={items?.title} className="p-[25px] bg-[#f5f5f5] text-[#404040] text-[18px] font-bold hover:no-underline"/>
                      <AccordionContent>
                       {!items?.accordion && <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 py-[30px]">
                          {items?.data?.map((item: any, itemIndex: any) => (
                              <Dialog key={itemIndex}>
                                <DialogTrigger>
                                  <Image src={item?.image} alt={`Image ${itemIndex}`} width={230} height={230 } style={{ height: '100%', width: '100%' }} className="p-[0] m-[0]"/>
                                </DialogTrigger>
                                <DialogContent  className="bg-[#fff] text-[18px] p-[0] max-w-[680px] sm:rounded-[5px] border-0">
                                  <DialogHeader>
                                    <DialogTitle className=" border-b border-indigo-600 border-[#dddddd] font-sans px-[30px] py-[20px] m-0 ">{item?.imagepopupContent?.headertitle}</DialogTitle>
                                    <DialogDescription className="p-[30px] m-0 text-[#4A4F55]">
                                      <ul className="dot-list flex flex-wrap">
                                        {item?.imagepopupContent?.winnerlist.map((winner:any, winnerIndex:any)=> (
                                              <li className="w-1/2" key={winnerIndex}>{winner}</li>
                                        ))}
                                        </ul>
                                      <div className="mt-[30px] text-[#B95804] font-mideum"><Link href="#">Rules and Regulations</Link></div>
                                    </DialogDescription>
                                  </DialogHeader>
                                </DialogContent>
                              </Dialog>
                          ))} 
                        </div>}
                        {items?.accordion && <div className="py-[30px] px-[30px]">
                              <>
                               <div>
                                  <Accordion type="single" collapsible className="w-full pb-[20px]">
                                    {items?.data?.map((item: any, itemIndex: any) => { return(<>
                                      <AccordionItem value={item?.value}>
                                          {/* <AccordionTrigger onClick={() => handleClickWithOffset(index * 52 + 52)} className="py-[20px] px-[12px] bg-[#ddd] text-[#000] text-[14px] hover:no-underline"> {item.title} </AccordionTrigger> */}
                                          <AccordianTriggerCustom index={index} title={items?.title} className="py-[20px] px-[12px] bg-[#ddd] text-[#000] text-[14px] hover:no-underline font-bold mb-[20px] group-data-[state=open]:bg-[#000]" />
                                              <AccordionContent>
                                                <div className="pt-[10px] px-[20px] pb-[10px]">
                                                  {item?.content?.map((accData:any, accDataIndex:any) => { 
                                                    return(
                                                        <>
                                                          <div key={accDataIndex}>
                                                            <h5 className="pb-[25px] text-[#000] text-[30px] font-medium"> {accData?.headertitle}</h5>
                                                            <ul className="dot-list flex flex-wrap pb-[30px]">
                                                                {accData?.winnerlist?.map((winner:any , winnerIndex:any)=> (
                                                                <li className="w-1/2" key={winnerIndex}>{winner}</li>
                                                                ))}
                                                            </ul>
                                                            </div>
                                                        </>
                                                      )})}
                                                      <div className="text-[#B95804] font-mideum"><Link href="#">Rules and Regulations</Link></div>
                                                  </div>
                                                </AccordionContent>
                                          </AccordionItem>
                                    </>)})}
                                      </Accordion>
                                  </div>                   
                              </>
                        </div>}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
    </div>
  )
}