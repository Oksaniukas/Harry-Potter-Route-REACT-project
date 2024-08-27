import styles from "./styles.module.css";
import Question from "../Question/Question";
import { useState } from "react";

const Questions = () => {
  const [question, setQuestion] = useState([
    {
      question: "Ruda rudeklė, darbšti pereklė, takus numynė, kalnus supylė.",
      answer: "Skruzdė",
    },
    {
      question: "Lygūs laukai be takų, o ąžuolai be šakų.",
      answer: "Upė ir meldai",
    },
    {
      question: "Mažam puodely gardi košelė",
      answer: "Riešutas",
    },
    {
      question: "Samanyne stuobrelis riogso",
      answer: "Grybas",
    },
    {
      question: "Samanyne stuobrelis riogso",
      answer: "Grybas",
    },
  ]);
  return (
    <div className={styles.main}>
      {/* <Question question={question[0].question} />
      <Question question={question[1].question} />
      <Question question={question[2].question} />
      <Question question={question[3].question} /> */}

      {question.map((q) => {
        ///ismapinti masyva i ekrana, forEach netinka, neesnieko nereturnina
        return <Question question={q.question} answer={q.answer} />;
      })}
    </div>
  );
};

export default Questions;
