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
        
        setChars(res.data.results);
      })
      .catch(err => {console.log('uh oh', err)})
  },[])

 
  


  return (
    <section className="character-list">
      
      {console.log('hey', chars)}
      
      {chars.map( item => {
        const episodes = item.episode.length;
        return (

          <CharacterCard name={item.name} image={item.image} episode={episodes} status={item.status} species={item.species}/>
          
        );
      })}
    </section>
  );
}
