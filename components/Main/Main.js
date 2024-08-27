import CharacterWrapper from "../CharacterWrapper/CharacterWrapper";
import styles from "./styles.module.css";
 
const Main = ({characters, setCharacters}) => {
  return <main className={styles.main}>

<CharacterWrapper characters={characters} setCharacters ={setCharacters}/>

  </main>;
};
 
export default Main;