import WordCard from "./WordCard";

export default function WordList({ words }) {

  return (
    <div>
      {
        words.map(word => (
          <WordCard
            key={word.id}
            word={word}
          />
        ))
      }
    </div>
  );
}

