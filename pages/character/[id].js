import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";


const character = () => {
  const [character, setCharacter] = useState([]); 
  const router = useRouter();

  const fetchCharacter = async (id) => {
    const fetchedCharacter = await axios.get(
      `https://hp-api.onrender.com/api/characters/${id}`
    );
    setCharacter(fetchedCharacter.data);
    console.log(fetchedCharacter);
  };

  // console.log(router);
  // console.log(router.query);


  useEffect(() => {  
    // console.log(router.query.id)
    router.query.id && fetchCharacter(router.query.id); 
  }, [router.query]); //parodyk visus kintamuosius, kurie atnaujinami

  return (
    <div className={styles.main}>
      {character && (
        <>
          <div>{character.name}</div>
          <img className={styles.characterImg} src={character.image} />
          <p>{character.species}</p>
        </>
      )}
    </div>
  );
};

export default character;

// pages/item/[id].js --> /item/abc123
