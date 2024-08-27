import styles from "./styles.module.css";

const Article = ({imgUrl, title}) => {
  // console.log(props);
  return (
    <article className={styles.main}>
      <img src={imgUrl} />
      <h3>{title}</h3>
    </article>
  );
};

export default Article;
