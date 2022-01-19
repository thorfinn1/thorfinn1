import Head from "next/head"
import Header from "../Components/Header"
import Banner from "../Components/Banner"
import SmallCard from "../Components/SmallCard";
import MediumCard from "../Components/MediumCard";
import { useHorizontalScroll } from "../Components/useSideScroll";
import LargeCard from "../Components/LargeCard";
import Footer from "../Components/Footer";

export default function Home({exploreData, cardsData}) {
  const scrollRef = useHorizontalScroll();
  return (
    <div >
        
      <Head>
        <title>AirBnb</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
        <meta name="pinterest" content="nopin" />
      </Head>

      {/* Header component */}
      <Header /> 
      
      {/* Banner component */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6"> {/* SmallCard section */}
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull data from server - api endpoint
          - here we 1) pass data (img, data, location) from endpoit to SmallCard.js. 2) in the SmallCard.js component we create the structure and then 3) it will render here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-5">
            {exploreData?.map((item) => (
              <SmallCard 
              key={item.img}
              img={item.img} 
              location={item.location} 
              distance={item.distance}/>
            ))}
          </div>
        </section>

        <section className="pt-6">{/* MediumCard section */}
          <h2 className="text-4xl font-semibold pb-8">Live Anywhere</h2>
          
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -mx-3" ref={scrollRef} style={{ overflow: "auto"}}> 
            {cardsData?.map((item) => (
              <MediumCard 
              key={item.img}
              img={item.img}
              title={item.title}/>
            ))}
          </div>
        </section>

        <section>
          <LargeCard
          img="https://links.papareact.com/4cj"
          title="An Adventure Awaits"
          description="Experiences curated by Airbnb"
          button="Get Inspired"
          />
        </section>

      </main>

      <div className="bg-gray-100">
        <Footer />
        
      </div>
      
    </div>
  );
} 







export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json()
  );


  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

