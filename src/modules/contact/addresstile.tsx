import React from 'react'
import Image from 'next/image'

interface AddressTileProp{
    icon?: string | any,
    iconAlt?: string | any,
    title?: string,
    content?: JSX.Element | any
}

export const AddressTile: React.FC<AddressTileProp> = ({ icon, iconAlt, title, content }) => {
  return (
    <div className="border-solid border-[1px] border-[#d6d6d6] rounded-[5px] p-[25px] flex flex-wrap justify-start w-1/3">
        <div className="w-35 pr-[18px]">
            <Image 
                src={icon}
                alt={iconAlt}
                width={28}
                height={21}
            />
        </div>
        <div className="w-[calc(100%-54px)]">
            <h3 className="font-sans font-bold text-[20px] mb-[15px] leading-normal">{title}</h3>
            <div className="font-sans text-[14px] text-[#4A4F55]">
                {content}
            </div>
        </div>
    </div>
  )
}
