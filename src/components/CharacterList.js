import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        // const data = res.data.results;
        console.log('hey', chars);
        setChars(res.data.results);
      })
      .catch(err => {console.log('uh oh', err)})
  },[chars])

 
 


  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {chars.map( () => {
        return (
          <CharacterCard name={chars.name} image={chars.image} episode={chars.episode.length()} status={chars.status}/>
        )
      })}
    </section>
  );
}
