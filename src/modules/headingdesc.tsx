import React from 'react'

interface HeadingsProps{
    title?: string
    desc?: JSX.Element
}

export const HeadingAndDesc: React.FC<HeadingsProps> = ({ title, desc }) => {
  return <>
    {
        title ? 
        <h2
            className="font-mono font-bold text-[28px]"
        >
            {title}
        </h2> : null}
    {desc ? desc : null}
  </>
}