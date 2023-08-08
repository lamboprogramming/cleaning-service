import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Mobile from '@/components/mobile'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Cards from '@/components/cards'
import Homepic from '@/components/homepic'






export default function Home() {
  return (
    <>
    
    <Nav />
    <div className='bg-yellow-100'>
      <Bg />
      <Cards />
      <Homepic />
      <Testimonials />
      <Footer />
    </div>
    <Mobile />
    
    </>
  )
 
}
