"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `Our innovative devices use the latest sterilization methods, including UVC rays and other advanced technologies, to eliminate pathogens and purify air and water systems. We are committed to safeguarding not only your personal spaces but also public areas, making us the trusted choice for high-traffic environments like hospitals, schools, offices, and leisure centers.
    `
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography component='h1' sx={{mb:1,mx:'auto',fontSize:'3.5em',fontStyle:'italic',fontWeight:'900'}} className=" center text-center">
            ABOUT US - GroupOne CMI
        </Typography>
        
        {/* <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/e8c67931-1ec6-4c5a-a405-619c5f86e32a/grouponelogo.jpg" alt="" className="img contain" />
        </Box> */}
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        {/* <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/> */}
    </Container>
  )
}

export default Index