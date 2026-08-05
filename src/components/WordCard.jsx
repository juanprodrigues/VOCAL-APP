// components/WordCard.jsx

import { useState } from "react";

import WordGame from "./WordGame";
import SentenceGame from "./SentenceGame";


export default function WordCard({
  word,
  onComplete
}) {

  const [step, setStep] = useState(1);

  return (
    <div className="word-card">
      {
        step === 1 &&
        <>
          <h1>
            {word.spanish}
          </h1>
          <WordGame
            word={word.past}
            onSuccess={() => {
              setStep(2)
            }}
          />
        </>
      }
      {
        step === 2 &&
        <>
          <h2>
            {word.exampleEs}
          </h2>

          <SentenceGame
            sentence={word.example}
            onSuccess={() => {
              onComplete();
            }}
          />

        </>
      }

    </div>

  );


}
