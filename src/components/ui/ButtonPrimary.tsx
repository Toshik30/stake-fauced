import React, { FunctionComponent } from 'react'

type Props = { 
  text: string,
  customStyle: string,
}

const ButtonPrimary: FunctionComponent<Props> = ({text, customStyle}) => {
  return (
    <button className={customStyle}>{text}</button>
  )
}

export default ButtonPrimary