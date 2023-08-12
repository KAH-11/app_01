import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import TwoDiv from '@/components/Two-Div'
import CategoryCard from '@/components/CategoryCard'
import TitleText from '@/components/Title-Text'


export default function Home() {

  const Categories = [
    { name: 'Watches', url: 'watches.png' },
    { name: 'Phones', url: 'phones.jpg' },
    { name: 'Bags', url: 'bags.jpeg' },
    { name: 'Clothes', url: 'clothes.jpg' },
  ];


  return (
    <>

    <Navbar />

    <Banner imagePath="back-2.jpg" text="Welcome to our website!"/>
    
    <TitleText title="Special Item !" text={
      <TwoDiv imagePath="special-01.jpg" text="The Police Watch stands as a resilient and functional companion designed for law enforcement professionals. With its rugged construction, clear visibility in various conditions, and practical features like luminous hands and markers, it serves as a reliable tool on duty. Beyond its utilitarian aspects, the watch embodies the values of duty and service, reminding wearers of their commitment to maintaining safety and order within their communities."/>
    } />

    <TitleText title="Categories" text={
    <div class="w-full grid md:grid-cols-4 md:p-20 gap-10 2xl:container mx-auto">
      {
        Categories.map( (cat , index) => (
          <CategoryCard key={index} img_url={cat.url} cat_name={cat.name}/>
        ) )
      }
    </div>
    } />
    

    <Footer />

    </>
  )
}
