import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard/CharacterCard"; // Tinkamas kelias į komponentą
import styles from "../components/CharacterWrapper/styles.module.css"

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const router = useRouter();

  const fetchCharacters = async () => {
    
      const response = await axios.get(
        `https://hp-api.onrender.com/api/characters`
      );
      setCharacters(response.data);
      console.log(response.data);
    
  };

  useEffect(() => {
    fetchCharacters();
  }, []); 

  return (
    <div className={styles.main}>
      {characters.length > 0 ? (
        characters.map((d) => (
          <CharacterCard
            key={d.id}
            id={d.id}
            imgUrl={d.image}
            name={d.name}
            species={d.species}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Characters;
