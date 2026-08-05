import { useState } from "react";
import WordCard from "../components/WordCard";
import wordsData from "../data/words";


function shuffle(array){

  return [...array]
    .sort(
      () => Math.random() - 0.5
    );

}



export default function Study(){


  const [words, setWords] = useState(
    () => shuffle(wordsData)
  );


  const [currentIndex, setCurrentIndex] = useState(0);




  function nextWord(){


    setWords(prev => {


      const newList = [...prev];


      // elimina la palabra aprendida

      newList.splice(currentIndex,1);


      return newList;


    });



    setCurrentIndex(0);


  }





  if(words.length === 0){


    return (

      <div className="word-card">

        <h2>
          🎉 Terminaste la lista
        </h2>


        <button
          onClick={()=>{

            setWords(
              shuffle(wordsData)
            );

          }}
        >
          Nueva sesión
        </button>


      </div>

    );


  }





  return (

    <WordCard

      word={
        words[currentIndex]
      }

      onSuccess={nextWord}

    />

  );

}
