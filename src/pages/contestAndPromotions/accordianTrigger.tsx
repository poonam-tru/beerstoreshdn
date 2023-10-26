import React from 'react'
import {AccordionTrigger} from "@/components/ui/accordion";


const AccordianTriggerCustom = (props:any) => {
    const {index, title, className } = props;
    const handleClickWithOffset = (value: any) => {
        window.scrollTo({ top: 700 + value, behavior: "smooth" });
      };

return (
    <div>
        <AccordionTrigger onClick={() =>  handleClickWithOffset(index * 52 + 52)} className={className}> {title} 
        </AccordionTrigger>
    </div>
)
}
export default AccordianTriggerCustom;
