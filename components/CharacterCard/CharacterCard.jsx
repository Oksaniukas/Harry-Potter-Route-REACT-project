import styles from "./styles.module.css";
import Link from "next/link";

const CharacterCard = ({ id, imgUrl, name, species, }) => {
  return (
    <Link href={`/character/${id}`}>
    <div
      onClick={() => {
        console.log(name);
      }}
      className={styles.main}
    >
      {imgUrl ? (
        <img src={imgUrl} alt="character photo" />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
          alt="no image"
        />
      )}
      <h2>{name}</h2>
      <h4>{species}$</h4>
    </div>
    </Link>
  );
};

export default CharacterCard;
