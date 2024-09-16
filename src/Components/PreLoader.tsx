"use client"
import React from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Btn from './Btn/Btn'

const PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  return (
    <Box >
      <MainCarousel  />
    
    <Container sx={{padding:0,px:1,maxWidth:'lg'}}>
 
      <Typography sx={{pt:8,fontWeight:600,fontSize:'1.5em',maxWidth:'800px'}}>
      Comprehensive Solutions for Complete Protection
      </Typography>
      <Typography sx={{pt:1,fontWeight:300,fontSize:'.9em',maxWidth:'800px'}}>
      Our innovative devices use the latest sterilization methods, including UVC rays and other advanced technologies, to eliminate pathogens and purify air and water systems. We are committed to safeguarding not only your personal spaces but also public areas, making us the trusted choice for high-traffic environments like hospitals, schools, offices, and leisure centers.
      </Typography>
    </Container>


        <Grid sx={{py:16,maxWidth:'lg'}} className='auto' container>
            <Grid item sm={12} md={6}>
            <Container>

            <Typography 
                                
                                sx={{fontSize:{xs:'1.55em',sm:'2.1em',md:'2.65em',lg:'2.5em'},fontWeight:'900'}}>
                What we do | Our Services
                </Typography>
                <Typography 
                                className=''
                                sx={{fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                At Group One CMI, our advanced technology targets viruses, bacteria, and environmental pollutants, providing a healthier future for homes, businesses, and public spaces.
                </Typography>
                <Btn
                onClick={()=>router.push('/services')}
                             
                                
                                className='bg white borderColor ' sx={{mt:3,mb:{xs:3,sm:0}}}>
                               View services

                                </Btn>
                                </Container>

            </Grid>
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
       

        </Grid>
   
   
   



                              {/* <Container sx={{maxWidth:'lg'}}>
                                    {
                                      [].map(i=>{
                                        return <Box sx={{height:{xs:'95%',sm:'32%'},width:{xs:'95%',sm:'32%'}}}>
                                              <img src="" alt="" className="img" />
                                        </Box>
                                      })
                                    }
                              </Container> */}

                                
<Box sx={{mt:4}} className='bg'>
    
    <Container sx={{py:{xs:4,sm:8}}}>
      <Grid className='center items-center' container >

    <Grid  xs={12} sm={4} md={5}>

    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',maxWidth:'800px',}}>
    Our Technology
      </Typography>
      <Typography className='white' sx={{pr:{sm:1,md:2},fontWeight:900,fontSize:{xs:'2.15em',sm:'2em',md:'2.5em'},maxWidth:'800px',fontStyle:'italic',textTransform:'uppercase'}}>
      UVC Sterilization: The Power of Light
      </Typography>
      <Btn
      sx={{mt:1,mb:{xs:4,sm:0}}}
      onClick={()=>router.push('/services')}
      >
        View Services
      </Btn>
    </Grid>

<Grid xs={12} sm={8} md={7}>
    <Box sx={{height:{xs:'300px',md:'450px'}}}>
      <img style={{borderRadius:'5px'}} src="https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324284/empty-operating-room.jpg" alt="" className="img" />
    </Box>
</Grid>
      </Grid>
    </Container>



</Box>


<Box sx={{mb:0}} className='bg'>
    
    <Container sx={{py:{xs:4,sm:8}}}>
      <Grid className='center items-center' container >


      <Grid xs={12} sm={8} md={7}>
    <Box sx={{height:{xs:'300px',md:'450px'}}}>
      <img style={{borderRadius:'5px'}} src="https://blog.chloramineconsulting.com/hs-fs/hubfs/orenda%20enzymes%2C%20orenda%20cv600%2C%20pool%20clarity%2C%20underwater%20pool%20with%20enzyme.png?width=1880&height=890&name=orenda%20enzymes%2C%20orenda%20cv600%2C%20pool%20clarity%2C%20underwater%20pool%20with%20enzyme.png" alt="" className="img" />
    </Box>
</Grid>                          

    <Grid sx={{pl:{xs:0,sm:4}}}  xs={12} sm={4} md={5}>
    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',maxWidth:'800px',}}>
    Swimming Pools
      </Typography>
      <Typography className='white' sx={{fontWeight:900,fontSize:{xs:'2.15em',sm:'2em',md:'2.5em'},maxWidth:'800px',fontStyle:'italic',textTransform:'uppercase'}}>
      Sterilization Solutions for Every Industry
      </Typography>
      <Btn
      sx={{mt:1,mb:{xs:4,sm:0}}}
      onClick={()=>router.push('/services')}
      >
        View Services
      </Btn>
    </Grid>


      </Grid>
    </Container>



</Box>


<Box sx={{mb:4}} className='bg'>
    
    <Container sx={{py:{xs:4,sm:8}}}>
      <Grid className='center items-center' container >

    <Grid  xs={12} sm={4} md={5}>

    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',maxWidth:'800px',}}>
      The GroupOne CMI Team
      </Typography>
      <Typography className='white' sx={{pr:{sm:1,md:2},fontWeight:900,fontSize:{xs:'2.15em',sm:'2em',md:'2.5em'},maxWidth:'800px',fontStyle:'italic',textTransform:'uppercase'}}>
      Combating viruses and bacteria everywhere
      </Typography>
      <Btn
      sx={{mt:1,mb:{xs:4,sm:0}}}
      onClick={()=>router.push('/services')}
      >
        View Services
      </Btn>
    </Grid>

<Grid xs={12} sm={8} md={7}>
    <Box sx={{height:{xs:'300px',md:'450px'}}}>
      <img style={{borderRadius:'5px'}} src="https://imgscf.slidemembers.com/docs/1/1/442/covid-19_cleaning_and_disinfecting_powerpoint_presentations_441706.jpg" alt="" className="img" />
    </Box>
</Grid>
      </Grid>
    </Container>



</Box>


<Container>
      <Box className='flex col center text-center' sx={{my:6}}>
      <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '2em',
        sm: '3em'
    },
    padding:.5,
    fontWeight: '900'
}}>
GroupOne CMI - Setting the Standard in Sterilization
</Typography>
{/* <Typography
component={'p'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '.8em',
        sm: '1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
Collection of our latest video reels from our social media!
</Typography> */}
      </Box>
      <Box sx={{gap:'.5em'}} className='flex wrap row center   auto'>

        {    

[
  {
    title: "Advanced Surface Disinfection in Action",
    text: "Watch how our state-of-the-art equipment eliminates 99.9% of harmful viruses and bacteria from surfaces, providing a safe and sterile environment.",
    video: "https://videos.pexels.com/video-files/4201911/4201911-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Air Sterilization with UVC Technology",
    text: "See our UVC technology at work, sterilizing indoor and outdoor air in various environments—from residential spaces to large institutions. Ensuring safe, breathable air for everyone.",
    video: "https://videos.pexels.com/video-files/4145292/4145292-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Room Sterilization",
    text: "A step-by-step demonstration of our full-room sterilization process using advanced rays to ensure complete elimination of pathogens in hospitals, gyms, and other critical areas.",
    video: "https://videos.pexels.com/video-files/6197564/6197564-uhd_2560_1440_25fps.mp4",
  },
]
          .map((video:any)=>{
              console.log('video: ', video);

                    return <Box
                    
                    sx={{maxWidth:{xs:'100%',sm:'48%',md:'32%'}}} key={video.title}>
                        {/* <Typography  sx={{pb:2,fontSize:'1.1em',fontWeight:600}} className='clr'>
                            {
                              video.title
                            }
                        </Typography> */}
                  
                        <Box sx={{height:{xs:'400px',sm:'500px'},}}>

          <video
          controls={true}
          style={{objectFit:'cover'}}
          
          key={video.video} muted loop autoPlay width="100%" height="100%" >
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </Box>

                    </Box>
            })
        }
        
        </Box>
      </Container>


  </Box>
  )
}

export default PreLoader