import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Study from "./pages/Study";
import WordForm from "./components/WordForm";

import { useState } from "react";
import { wordsData as initialWords } from "./data/words";


function App() {

  const [words, setWords] = useState(initialWords);


  function addWord(newWord) {

    const wordWithId = {
      ...newWord,
      id: Date.now()
    };

    setWords([
      ...words,
      wordWithId
    ]);

  }


  return (

    <BrowserRouter>

      <header>

        <nav>

          <Link to="/">
            Inicio
          </Link>

          {" | "}

          <Link to="/study">
            Estudiar
          </Link>

          {" | "}

          <Link to="/add">
            Agregar
          </Link>

        </nav>

      </header>


      <main>

        <Routes>


          <Route
            path="/"
            element={
              <Home />
            }
          />


          <Route
            path="/study"
            element={
              <Study words={words} />
            }
          />


          <Route
            path="/add"
            element={
              <WordForm addWord={addWord} />
            }
          />


        </Routes>

      </main>


    </BrowserRouter>

  );

}


export default App;
