"use client"
import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Perks = () => {
  const items = [
    {
      title: "Advanced Technology",
      icon: "https://cdn-icons-png.flaticon.com/128/15575/15575356.png",
      description: "We use cutting-edge UVC rays to eliminate harmful viruses, bacteria, and contaminants, ensuring a cleaner, safer environment.",
    },
    {
      title: "International Certifications",
      icon: "https://cdn-icons-png.flaticon.com/128/6005/6005650.png",
      description: "Certified with ISO9001/2015, ISO 22000, and CE, our services meet the highest international standards for quality and safety.",
    },
    {
      title: "Comprehensive Sterilization Solutions",
      icon: "https://cdn-icons-png.flaticon.com/128/3536/3536537.png",
      description: "From surface disinfection to room sterilization and air purification, we offer tailored solutions for every environment.",
    },
    {
      title: "Proven Expertise in Air Sterilization",
      icon: "https://cdn-icons-png.flaticon.com/128/1644/1644350.png",
      description: "Our air sterilization equipment cleans both indoor and outdoor air, ensuring safe, breathable spaces in residential and commercial areas.",
    },
 
  
  ];
  return (
    <Box  className='auto flex center' sx={{maxWidth:'lg',pt:{xs:8,sm:12},mx:{xs:1,sm:1.5,md:2}}}>
        <Box  className='flex wrap gap auto row justify-between'>

        {
           items.map(i=>{
                return <Box key={i.title} className='center items-center auto flex col' sx={{
                    py:3,
                    width:{xs:'47%',sm:'30%',md:'22%'}}}>
                    <Box sx={{width:'100px'}}>
                        <img src={i.icon} alt="" className="img contain" />
                    </Box>
                    <Box sx={{ml:.7}} className="flex col">
                    <Typography className='clr' sx={{pt:1,fontSize:{xs:'1em',sm:'1.39em'},fontWeight:700}}  component={'h1'}>{i.title}</Typography>
                    <Typography className='clr' sx={{pt:.5,fontSize:{xs:'.75em',sm:'.8em'},fontWeight:300}}  component={'h1'}>{i?.description}</Typography>
                    </Box>
                </Box>
            })
        }
        </Box>

    </Box>
  )
}

export default Perks