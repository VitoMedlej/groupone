"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from '../Btn/Btn';



const Preloader3 = () => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
      {img:`https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
        {img:`https://cleanupgroup.com.au/wp-content/uploads/2024/04/gallery-7-768x1024.webp`},
        {img : `https://images.pexels.com/photos/4099469/pexels-photo-4099469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
        {img:`https://images.pexels.com/photos/9574408/pexels-photo-9574408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
     ])
     const redir = () => {
        router.push('/services')
     }
 
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'500px',
            maxHeight:{sm:'90vh',md:'700px',lg:'750px'},
            margin: '0 auto',
         
            height : {xs:'600px',sm:'550px',md:'100%'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
              speed={700}
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='auto center text-center ' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',
                              zIndex:1123,height:'100%',background:'black',opacity:.45}} className="absolute">

                            </Box>
                            <Box 
                            className='auto center text-center'
                            sx={{
                                top:'50%',
                                px:{xs:1,sm:5,md:6},
                                // maxWidth:'850px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                                          <Typography 
                                                          className='clr3 center text-center auto'
                                sx={{fontWeight:900,
                                textShadow:'1px 1px 3px #2b2b2b',
                                fontSize:{xs:'1.085em',sm:'1.02em'},mt:1,maxWidth:'600px'}}>
                                   GROUP ONE CMI

                                </Typography>
                                <Typography 
                                component='h1'
                                sx={{color:'white',fontSize:{xs:'1.35em',sm:'2.1em',md:'2.15em',lg:'2.25em'},fontWeight:'600'}}>
                             Leading the Fight Against Viruses, Bacteria & Environmental Contaminants
                                </Typography>
                                <Box className="flex auto">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='bg white borderColor ' sx={{mx:'auto',mt:3}}>
                             View Services

                                </Btn>
                            
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img   
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3