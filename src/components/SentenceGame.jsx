import { useState } from "react";


export default function SentenceGame({
  sentence,
  onSuccess
}) {


  const [answer, setAnswer] = useState("");

  const [correct, setCorrect] = useState(false);

  const [errorCount, setErrorCount] = useState(0);

  const [error, setError] = useState(false);



  function normalize(text){

    return text
      .toLowerCase()
      .trim();

  }



  function check() {


    if(
      normalize(answer)
      ===
      normalize(sentence)
    ){

      setError(false);

      setCorrect(true);


      setTimeout(()=>{

        onSuccess();

      },1200);


    }

    else {


      setError(true);


      setErrorCount(prev => prev + 1);



      setTimeout(()=>{

        setError(false);

      },1500);


    }

  }



  function handleKeyDown(e){

    if(e.key==="Enter"){

      check();

    }

  }


function createBlanks() {

  return sentence
    .split(" ")
    .map(word => "_".repeat(word.length))
    .join("   ");

}



function createPartialHint() {

  const originalWords = sentence.split(" ");

  const userWords = answer.trim().split(" ");


  return originalWords.map((word, index) => {


    // si la palabra está correcta la muestra

    if (
      userWords[index] &&
      normalize(userWords[index]) === normalize(word)
    ) {

      return word.toUpperCase().split("");

    }


    // si no está correcta muestra guiones

    return Array(word.length).fill("_");


  });

}




  return (

    <div className="sentence-game">


      {
        correct ?

        (

          <h2 className="success">
            ✅ Correcto
          </h2>

        )

        :

        (

        <>


        <input

          autoFocus

          value={answer}

          onChange={
            e =>
            setAnswer(e.target.value)
          }

          onKeyDown={handleKeyDown}

          placeholder="Escribe la frase en inglés"

        />


        <button onClick={check}>
          Comprobar
        </button>



        {
          error &&

          <p className="error">
            ❌ Incorrecto, intenta otra vez
          </p>

        }



        {
          errorCount === 1 &&

          <div className="hint">

            <strong>
              Pista:
            </strong>

            <p>
              {createBlanks()}
            </p>

          </div>

        }



        {
          errorCount === 2 &&

<div className="hint-words">

{
  createPartialHint().map((word,index)=>(

    <div 
      className="hint-word"
      key={index}
    >

      {
        word.map((letter,i)=>(

          <span key={i}>
            {letter}
          </span>

        ))
      }

    </div>

  ))
}

</div>


        }



        {
          errorCount >= 3 &&

          <div className="hint">

            <strong>
              Respuesta:
            </strong>

            <p>
              {sentence.toUpperCase()}
            </p>

          </div>

        }



        </>

        )

      }


    </div>

  );

}
