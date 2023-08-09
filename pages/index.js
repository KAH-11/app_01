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
    <TwoDiv />

    <Footer />

    </>
  )
}
