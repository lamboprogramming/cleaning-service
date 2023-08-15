import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Mobile from '@/components/mobile'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Bio from '@/components/bio'
import Homepic from '@/components/homepic'
import Questions from '@/components/questions'
import ImgBanner from '@/components/imgBanner'
import Socials from '@/components/socials'





export default function Home() {
  return (
    <>
    
    <Nav />
    
      <Bg />
      <ImgBanner />
      <Bio />
      {/* <Socials /> */}
      <Questions/>
      
      <Testimonials />
      <Footer />
   
    <Mobile />
    
    </>
  )
 
}
