import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import TitleText from '@/components/Title-Text'

export default function Services() {
  return (
    <>

    <Navbar />

    <Banner imagePath="back-1.jpg" text="Our eCommerce Services"/>
    <TitleText title="Our Services" text="
    Welcome to HK_MegaStore - Your Trusted Partner for eCommerce Success! We provide a 
    comprehensive range of eCommerce services designed to take your online business to 
    new heights. Whether you're just starting out or looking to enhance your existing 
    eCommerce operations, our expert team is here to assist you every step of the way."/>

    <Footer />

    </>
  )
}
