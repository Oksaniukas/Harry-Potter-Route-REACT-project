import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const MainPage = () => {
  const [characters, setCharacters] = useState(); ////arba useState([]) vietoj {dress && dress.map(()

  const fetchCharacters = async () => {
    const fetchedCharacters = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(fetchedCharacters.data);

    console.log(fetchedCharacters);
  };

  useEffect(() => {
    fetchCharacters();
  }, []); ///tik vien1 karta  butinai []

  const links = [
    { link: "#", title: "About" },
    { link: "#", title: "Portfolio" },
    { link: "#", title: "Contacts" },
  ];
  return (
    <>
      {/* <Header isDisplayLogo={isDisplayLogo}/> */}
      <Header links={links} />
      <Main characters={characters} setCharacters={setCharacters} />
      <Footer />
    </>
  );
};

export default MainPage;
