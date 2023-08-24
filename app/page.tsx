import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Footer from '@/components/footer'
import Testimonials from '@/components/testimonials'
import Questions from '@/components/questions'
import ImgBanner from '@/components/imgBanner'
import PicBanner from '@/components/picBanner'






export default function Home() {
  return (
    <div className="bg-slate-50">
    
      <Nav />
      <Bg />
      <ImgBanner />
      <Testimonials />
      <PicBanner />
      <Questions/>
      <Footer />
   
    </div>
  )
 
}
