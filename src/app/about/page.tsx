"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    "We specialize in providing advanced UVC sterilization solutions for a wide range of environments, from homes to large-scale facilities.",
    "Our UVC technology is designed to effectively eliminate viruses, bacteria, and harmful pollutants, creating safer and healthier spaces.",
    "Whether it's residential properties, commercial buildings, or public areas like pools, gyms, and healthcare facilities, our UVC systems ensure top-tier sterilization and cleanliness.",
    "We are committed to delivering tailored solutions for every client, ensuring that each building and facility meets the highest standards of hygiene and safety.",
    "With a focus on innovation and efficiency, we lead the way in UVC sterilization technology, offering reliable protection against environmental contaminants.",
    "Our goal is to safeguard the health of people in the places they live, work, and play, by deploying cutting-edge UVC systems across a variety of sectors.",
    "Trust our company to provide expert UVC solutions that protect your buildings, facilities, and the people within them from invisible threats."
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