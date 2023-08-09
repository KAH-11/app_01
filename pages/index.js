import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import TwoDiv from '@/components/Two-Div'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <Navbar />

    <Banner imagePath="Good-Pizza.jpg" text="Welcome to our website!"/>
    <TwoDiv imagePath="Good-Pizza.jpg" text="Our special pizza is generously adorned with a rich tomato sauce, vibrant with the freshness of ripe tomatoes and a delicate hint of herbs and spices. The cheese, a melty masterpiece, blankets the sauce, providing a luscious and creamy backdrop to the medley of flavors to come."/>

    <Footer />

    </>
  )
}
