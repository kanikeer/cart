import React from "react";
import Card from "./Card";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Details from "./Details";


function App() {

  const cards = [
    {
      id: 1,
      title: "Sunset",
      description: "The setting or descent of the sun below the horizon in the evening. the atmospheric and scenic phenomena accompanying this. the time when the sun sets. the close or final stage of any period.",
      image: "/images/sunset.jpg",
      interior: "sunset",
    },
    {
      id: 2,
      title: "Mountains",
      description: "A mountain is a landform that rises significantly above the surrounding area. A mountain has prominence, steep sides and significant height above sea level and the surrounding area.",
      image: "/images/mountains.jpg",
      interior:"mountains",
    },
    {
      id: 3,
      title: "Forest",
      description: "A forest is a large area of land covered with trees and other vegetation, which is home to many different plants and animals. Forests are complex ecosystems that play a vital role in the environment by providing habitats, regulating climate, and protecting soil and water.",
      image: "/images/forest.jpg",
      interior: "forest",
    },
    {
      id: 4,
      title: "City",
      description: "city, relatively permanent and highly organized center of population, of greater size or importance than a town or village. The name city is given to certain urban communities by virtue of some legal or conventional distinction that can vary between regions or nations.",
      image: "/images/city.jpg",
      interior: "city",
    },
    {
      id: 5,
      title: "Ocean",
      description: "The ocean can be described as a vast, continuous body of saltwater covering about 71% of the Earth's surface, containing 97% of its water. It is home to diverse ecosystems and influences global climate and weather. ",
      image: "/images/ocean.jpg",
      interior: "ocean",
    },
    {
      id: 6,
      title: "Trees",
      description: "Trees are large, long-lived plants with a woody trunk, branches, and a root system. They are distinguished by their single, thick stem that supports leaves, which allows them to grow tall and provides wood for structure. . ",
      image: "/images/Trees.jpg",
      interior: "tree",
    },
    {
      id: 7,
      title: "Nature",
      description: "Nature is the physical world and everything in it, including plants, animals, landscapes, and non-living elements like air and water, that is not made by humans.. ",
      image: "/images/nature.jpg",
      interior: "nature",
    },
    {
      id: 8,
      title: "Birds",
      description: "Birds are a group of warm-blooded theropod dinosaurs constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.. ",
      image: "/images/birds.jpg",
      interior: "bird",
    },
    {
      id: 9,
      title: "Rainy",
      description: "Rain is a form of precipitation where water droplets that have condensed from atmospheric water vapor fall by gravity. Rain is a major component of the water cycle and is responsible for depositing most of the fresh water on the Earth.. ",
      image: "/images/rainy.jpg",
      interior: "rain",
    },
    {
      id: 10,
      title: "Night",
      description: "Night, or nighttime, is the period of darkness when the Sun is below the horizon. Daylight illuminates one side of the Earth, leaving the other in darkness. The opposite of nighttime is daytime. . ",
      image: "/images/night.jpg",
      interior: "night",
    },
    
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              {cards.map((item, index) => (
                <Card
                key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  interior={item.interior}
                  index={index}
                />
              ))}
            </div>
          }
        />
        <Route path="/details/:id" element={<Details cards={cards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;