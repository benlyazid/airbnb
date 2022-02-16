import React from "react"
import Card from "./componets/Card"
import Navbar from "./componets/Navbar"
import Hero from "./componets/Hero"
import Data from './data'

export default function App() {
  // console.log(Data)
  const element = Data.map(info=>
        <Card 
      key = {info.id}
      img={info.coverImg}
      rating={info.stats.rating}
      reviewCount={info.stats.reviewCount}
      country={info.location}
      title={info.title}
      price={info.price}
        />
  );

  console.log(element)
  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
                {element}
          </section>
      </div>
    )
}