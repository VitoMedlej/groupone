"use client"
import { Button } from '@mui/material'
import React from 'react'



let style1 = {
  color: 'white',
  background: 'black',
  border:'1px solid black',
  borderRadius: '30px', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: '#0273b5',
      color:'white',
  },
  display: 'flex',
  padding: '11px 35px',
  fontWeight: '400',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}
let style2 = {
  color: 'white',
  background: 'transparent',
  border: '1px solid white',
  borderRadius: '30px', 

  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
    color:'black',
      background: 'white',
  },
  display: 'flex',
  padding: '6px 34px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}

const Btn = ({v2,disabled,onClick,className,children,sx,submit}:{submit?:boolean,className?:string,disabled?:boolean,onClick?:()=>any,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
    type={submit ? 'submit' : 'button'}
    className={`trans  ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn