import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Mobile from '@/components/mobile'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Bio from '@/components/bio'
import Homepic from '@/components/homepic'
import Questions from '@/components/questions'
import ImgBanner from '@/components/imgBanner'





export default function Home() {
  return (
    <>
    
    <Nav />
    <div className=''>
      <Bg />
      <ImgBanner />
      <Questions/>
      <Testimonials />
      <Footer />
    </div>
    <Mobile />
    
    </>
  )
 
}
