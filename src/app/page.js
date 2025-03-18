"use client"
import Hero from "./components/Hero"
// import CustomCarousel from './components/HomeCarouselItems';
import IntroductionSection from "./components/IntroductionSecton"

export default function Home() {
  return (
    <>
      <Hero />
      {/* Grid of content and Images */}
      <IntroductionSection />
      {/* <CustomCarousel /> */}
    </>
  )
}

