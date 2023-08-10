import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import TitleText from '@/components/Title-Text'

export default function About() {
  return (
    <>

    <Navbar active="about"/>

    <Banner imagePath="back-1.jpg" text="About us"/>
    <TitleText title="Why Choose Us" text="
    At HK_MegaStore, we're not just about selling products online; we're about crafting 
    exceptional online shopping experiences. Our team of eCommerce specialists brings a 
    wealth of knowledge and creativity to the table, ensuring your business thrives in 
    the digital landscape."/>
    
    <Footer />

    </>
  )
}
