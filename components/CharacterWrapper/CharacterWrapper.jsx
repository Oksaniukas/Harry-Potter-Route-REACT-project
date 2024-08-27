import CharacterCard from "../CharacterCard/CharacterCard";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";

const CharacterWrapper = ({ characters , setCharacters}) => {

  const removeCharacter = (id) => {

    const filteredCharacters = characters.filter((c)=> c.id !==id)
    setCharacters(filteredCharacters);
    console.log(id);

  }


  return (
    <div className={styles.main}>
      {characters ? (
        characters.map((d) => {
          return (
            <CharacterCard
              key={d.id}
              id={d.id}
              imgUrl={d.image}
              name={d.name}
              species={d.species}
              removeCharacter={removeCharacter}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CharacterWrapper;
