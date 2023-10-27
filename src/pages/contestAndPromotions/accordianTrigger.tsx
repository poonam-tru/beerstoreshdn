import React from 'react'
import {AccordionTrigger} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";


const AccordianTriggerCustom = (props:any) => {
    const {index, title, className } = props;
    const isAccordionOpen = true;

    const handleClickWithOffset = (value: any) => {
        window.scrollTo({ top: 700 + value, behavior: "smooth" });
      };

return (
    <div>
        <AccordionTrigger
        onClick={() => handleClickWithOffset(index * 52 + 52)}
        className={`group ${isAccordionOpen ? 'data-[state=open]:bg-[#000] data-[state=open]:text-[#fff]' : 'data-[state=closed]:""'} text-left ${className}`}
      > {title} 
        <Plus className="h-4 w-4 shrink-0 transition-transform duration-500 group-data-[state=open]:hidden" />
        <Minus className="h-4 w-4 shrink-0 transition-transform duration-500 group-data-[state=closed]:hidden" />
        </AccordionTrigger>
    </div>
)
}
export default AccordianTriggerCustom;
