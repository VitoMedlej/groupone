"use client"
import React from 'react'
import Preloader4 from '../../Components/Preloader4'
import { Container,Grid, Box, Typography } from '@mui/material'


const Index = () => {

  return (
    <>
    <Preloader4 />
      <Container>
      <Box className='flex row wrap'>
          {
  [
    {
      "name": "UVC Disinfection Technology",
      "text": "Cutting-edge UVC rays that destroy pathogens and keep your spaces safe from harmful microbes.",
      "img": "https://ucarecdn.com/ab78c775-257b-4d59-9f2a-6e3511b37e21/uvc.jpg"
    },
    {
      "name": "Air Sterilization",
      "text": "High-performance systems to purify the air in homes, offices, and public institutions.",
      "img": "https://images.pexels.com/photos/5499417/pexels-photo-5499417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "name": "Water Purification",
      "text": "Advanced filtration systems that eliminate bacteria, viruses, and environmental pollutants from water sources.",
      "img": "https://images.pexels.com/photos/7298554/pexels-photo-7298554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "name": "Surface Sterilization",
      "text": "Precision-targeted devices to disinfect high-contact surfaces in any setting.",
      "img": "https://images.pexels.com/photos/4440536/pexels-photo-4440536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    {
      "name": "Environmental Pollution Control",
      "text": "Comprehensive solutions to combat environmental hazards, including water pollution and pesticide contamination.",
      "img": "https://images.pexels.com/photos/17391512/pexels-photo-17391512/free-photo-of-cleaning-crew-at-work-in-the-park.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "name": "Hospital-Grade Sterilization",
      "text": "Sterilization equipment for hospitals and healthcare institutions to meet the highest safety standards.",
      "img": "https://ucarecdn.com/8a992e44-2fac-4a35-b483-7c1a2568494e/hostpital.jpg"
    },
    {
      "name": "Gym & Pool Sterilization",
      "text": "Specialized systems to keep gyms, swimming pools, and public recreational areas hygienic and free of pathogens.",
      "img": "https://img.freepik.com/free-photo/gym-disinfection-healthcare_342744-66.jpg?w=900&t=st=1650394533~exp=1650395133~hmac=6b056fe2391ba1cb2aa65a48a1edd03195fb9bcedc1e50a394fe2fef540f8e8d"
    },
    {
      "name": "Residential Air & Water Safety",
      "text": "Custom solutions for homes, ensuring safe air and water free from pollutants and microbes.",
      "img": "https://ucarecdn.com/db9785ce-9639-492d-a558-07b6a2d933d7/air.jpg"
    }
  ].map(item => {
    return (
      <Box  sx={{px:1,my:4,width:{xs:'100%',md:'48%'}}}  key={item?.name}>

        <Box sx={{height:{xs:'220px',md:'300px'}}}>
        <img src={item.img} alt="" className="img" style={{borderRadius:'7px'}} />
        </Box>
        <Box sx={{pt:1}}>
          <Typography className='clr' sx={{fontWeight:700,fontSize:'1.1em'}}>
            {item?.name}
          </Typography>
          <Typography sx={{fontSize:'.8em'}}>
            {item?.text}
          </Typography>
        </Box>
      </Box>
    );
  })
}
            
          </Box>
      </Container>
    </>
  )
}

export default Index