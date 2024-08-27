import styles from "./styles.module.css";
import Article from "../Article/Article";
import { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([
    {
      title: "Some good news",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQbz1f5y-avz11zs5ol2SWXMVWaGX7zMpRw&s",
    },
    {
      title: "Some normal news",
      imgUrl:
        "https://i.natgeofe.com/n/aab32027-1aed-409e-b7e1-d70afaac45d3/1109_3x2.jpg",
    },
    {
      title: "Some bad news",
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg",
    },
  ]);

  return (
    <div className={styles.main}>
      <Article
        title={articles[0].title}
        imgUrl={articles[0].imgUrl}
      />
      <Article
        title={articles[1].title}
        imgUrl={articles[1].imgUrl}
      />
      <Article
        title={articles[2].title}
        imgUrl={articles[2].imgUrl}
      />
    </div>
  );
};

export default Articles;
