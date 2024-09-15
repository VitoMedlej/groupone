"use client"
import React from 'react'
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import Preloader4 from '../../Components/Preloader4'
import { Container,Grid, Box, Typography } from '@mui/material'
import Btn from '@/Components/Btn/Btn'
import { useRouter } from 'next/navigation'
import CarWashTable from './CarWashTable'


const Index = () => {
  const router= useRouter();

  return (
    <>
    <Preloader4 res={undefined}/>
      <Container>
        Under construction
      </Container>
    </>
  )
}

export default Index