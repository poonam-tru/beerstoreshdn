import React from 'react'

interface HeadingsProps{
    title?: string
    desc?: JSX.Element
}

export const HeadingAndDesc: React.FC<HeadingsProps> = ({ title, desc }) => {
  return <>
    {
        title ? 
        <h2>
            {title}
        </h2> : null}
    {desc ? desc : null}
  </>
}