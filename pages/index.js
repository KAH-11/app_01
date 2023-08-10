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
    <TwoDiv imagePath="Good-Pizza.jpg" text="Our special pizza is generously adorned with a rich tomato sauce, vibrant with the freshness of ripe tomatoes and a delicate hint of herbs and spices. The cheese, a melty masterpiece, blankets the sauce, providing a luscious and creamy backdrop to the medley of flavors to come."/>
    
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
