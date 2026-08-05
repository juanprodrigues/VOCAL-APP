import { useState } from "react";

export default function WordForm({ addWord }) {

  const [word, setWord] = useState({
    english:"",
    past:"",
    spanish:"",
    example:"",
    exampleEs:""
  });


  function handleChange(e){

    setWord({
      ...word,
      [e.target.name]: e.target.value
    });

  }


  function handleSubmit(e){

    e.preventDefault();

    addWord(word);

    setWord({
      english:"",
      past:"",
      spanish:"",
      example:"",
      exampleEs:""
    });

  }


  return (
    <form onSubmit={handleSubmit}>

      <input
        name="english"
        placeholder="Infinitivo"
        value={word.english}
        onChange={handleChange}
      />

      <input
        name="past"
        placeholder="Pasado"
        value={word.past}
        onChange={handleChange}
      />

      <input
        name="spanish"
        placeholder="Traducción"
        value={word.spanish}
        onChange={handleChange}
      />

      <input
        name="example"
        placeholder="Ejemplo"
        value={word.example}
        onChange={handleChange}
      />

      <input
        name="exampleEs"
        placeholder="Traducción ejemplo"
        value={word.exampleEs}
        onChange={handleChange}
      />


      <button>
        Guardar
      </button>

    </form>
  );
}
