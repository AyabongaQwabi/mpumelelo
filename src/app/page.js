'use client';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import CustomCarousel from './components/HomeCarouselItems';
import { Box, Button, Typography, Container, Grid, Card, CardContent, CardMedia, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IntroductionSection from './components/IntroductionSecton';


export default function Home() {
  return (
    <>
      <Hero />
      {/* <ContentSection
        title='Our Work'
        description='Learn more about our efforts to make the world a better place.'
        items={[
          {
            title: 'Education',
            content: 'Empowering youth through education.',
          },
          { title: 'Health', content: 'Improving global health for everyone.' },
          { title: 'Environment', content: 'Promoting sustainable practices.' },
        ]}
      /> */}
      {/* Grid of content and Images */}
      <IntroductionSection />
      <CustomCarousel />
      <Footer />
    </>
  );
}
