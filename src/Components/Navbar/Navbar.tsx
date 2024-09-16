"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'

import { useEffect, useState} from 'react';
import SearchModal from './SearchModal';
import Link from 'next/link';
import { Container, Divider, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineCar} from 'react-icons/ai'

import NavButtom from './NavButtom';
import {  useDrawerContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';



export const categories = [
    'Small Cars',
    'Business Cars',
    'Luxury Business Cars',
    'SUVs',
    '2 Door Cars'
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    

    const router = useRouter()
    // const localCart = [1]
   
   

    return ( <>
     <Box
     id='navy'
    className='center auto     flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{
                transform:'translateY(1px)',
                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
                  <Box className='flex items-center bg2 row'
                   sx={{justifyContent:'flex-end',py:.3}}>
<Container className='flex ' sx={{margin:0,justifyContent:'space-between',maxWidth:{xs:'100%',sm:'500px'}}}>

            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://www.svgrepo.com/show/533285/phone.svg" alt="" className="img" />
                </Box>
            <Typography sx={{color:'black',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            +961 3 978 119
            </Typography>
            </Box>

            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="" className="img" />
                </Box>
            <Typography sx={{color:'black',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            @GroupOne CMI
            </Typography>
            </Box>
            <a className='decor-none' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`}>
            <Btn sx={{display:{xs:'none',sm:'flex'},py:.2}}>
                                    BOOK NOW
                                  </Btn>
      </a>                        
       
</Container>

            </Box>
            <Toolbar
     id='navy3'

    className='center  relative  flex  w100  auto'

                sx={{
                
                    background:'white',
                    maxWidth:'xl',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
         
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        sm: '1em'
    },
    height : {xs:'100px'},
    width:{xs:'150px',sm: '120px'}
}}>
    <img
        className='img contain'
        src={`https://ucarecdn.com/e8c67931-1ec6-4c5a-a405-619c5f86e32a/grouponelogo.jpg`}
        alt="GroupOne CMI  logo"/>
</Box>
</Link>
                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'none'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
                             
                             {/* <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'white',

                            // margin: '0.1em',
                        }}>
                            {text('العربية','English')}
                        </Btn> */}
                        <a style={{textDecoration:'none',borderRadius:'2000px',background:'transparent'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>

                        <IconButton
                            onClick={() => router.push('/rental/collection')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <AiOutlinePhone color='black'/>
                            {/* </Badge> */}
                            {/* <Typography>
                                Cart
                            </Typography> */}
                        </IconButton>
                        </a>

    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'white'
                        }}>
                     
                            <AiOutlinePhone color='white'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>
<NavButtom/>

  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
{/* 
                               <Btn
                            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'white',

                            // margin: '0.1em',
                        }}>
                            {text('English','Arabic')}
                        </Btn> */}
                    
                    

                            <Btn
                            onClick={()=>router.push('/#contactsection')}
                            >
                                Contact Us
                            </Btn>


                            {/* <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'white',
                            // margin: '0.1em',
                         
                        }}>
                            <IoIosMenu color='white'/>
                        </IconButton> */}
                    
                    </Box>

                </Box>
           
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}