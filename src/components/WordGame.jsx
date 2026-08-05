// components/WordGame.jsx

import { useEffect, useRef, useState } from "react";


export default function WordGame({ word, onSuccess }) {


  const [values, setValues] = useState(
    Array(word.length).fill("")
  );


  const [correct, setCorrect] = useState(false);

  const [error, setError] = useState(false);

  const [attempts, setAttempts] = useState(0);

  const [showAnswer, setShowAnswer] = useState(false);


  const inputs = useRef([]);




  useEffect(() => {

    inputs.current[0]?.focus();

  }, []);





  function updateLetter(index, value) {


    if (!/^[a-zA-Z]?$/.test(value)) {

      return;

    }



    const copy = [...values];


    copy[index] = value.toLowerCase();


    setValues(copy);



    if (
      value &&
      index < word.length - 1
    ) {

      inputs.current[index + 1]?.focus();

    }

  }







  function handleKeyDown(e, index) {


    if(e.key === "Enter") {

      check();

    }




    if(e.key === "Backspace") {


      const copy = [...values];



      if(copy[index]) {


        copy[index] = "";


        setValues(copy);


      }

      else if(index > 0) {


        inputs.current[index - 1]?.focus();


        copy[index - 1] = "";


        setValues(copy);


      }

    }


  }








  function check() {


    const answer = values.join("");



    if(
      answer.toLowerCase()
      ===
      word.toLowerCase()
    ){


      setError(false);


      setCorrect(true);



      setTimeout(()=>{

        onSuccess();

      },1200);



    }

    else {


      const newAttempt = attempts + 1;


      setAttempts(newAttempt);


      setError(true);



      setTimeout(()=>{

        setError(false);

      },1500);



      // después de 5 intentos muestra la ayuda

      if(newAttempt >= 5){

        setShowAnswer(true);

      }


    }


  }





  function revealWord(){


    setShowAnswer(true);


  }






  return (

    <div className="letter-container">


      {
        correct ? (

          <h2 className="success">
            ✅ Correcto
          </h2>

        )


        :

        (

          <>


            <div className="letters">


              {
                values.map((letter,index)=>(


                  <input

                    key={index}


                    ref={
                      el =>
                      inputs.current[index] = el
                    }


                    className="letter-input"


                    maxLength="1"


                    value={letter}


                    onChange={
                      e =>
                      updateLetter(
                        index,
                        e.target.value
                      )
                    }


                    onKeyDown={
                      e =>
                      handleKeyDown(
                        e,
                        index
                      )
                    }


                  />


                ))

              }


            </div>





            <button onClick={check}>
              Comprobar
            </button>




            <button
              className="secondary"
              onClick={revealWord}
            >
              Descubrir palabra
            </button>





            <p>
              Intentos: {attempts}/5
            </p>





            {
              error && (

                <p className="error">
                  ❌ Incorrecto, intenta otra vez
                </p>

              )

            }






            {
              showAnswer && (

                <div className="hint">

                  <h3>
                    La palabra es:
                  </h3>


                  <h2 className="success">
                    {word.toUpperCase()}
                  </h2>


                </div>

              )

            }





          </>

        )

      }


    </div>

  );

}
