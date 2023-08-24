import Nav from '@/components/nav'
import Bg from '@/components/bg'
import Footer from '@/components/footer'
import Timeline from '@/components/Timeline'
import Questions from '@/components/questions'
import ImgBanner from '@/components/imgBanner'
import PicBanner from '@/components/picBanner'
import Carousel from '@/components/carousel'






export default function Home() {
  return (
    <>
    <div className="bg-slate-50">
    
      <Nav />
      <Bg />
      <ImgBanner />
      <Timeline />
      <Carousel />
      <Questions/>
      <Footer />
    </div>
    </>
  )
 
}
