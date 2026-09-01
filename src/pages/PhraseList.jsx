import { useMemo, useState } from "react";
import PhraseCard from "../components/PhraseCard";
import phrases from "../data/phrases";
import ShowPhrase from "./ShowPhrase";

function PhraseList({ category, onListen }) {
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  const filteredPhrases = useMemo(
    () => phrases.filter((phrase) => phrase.category === category),
    [category],
  );

  return (
    <main className="phrase-list">
      {filteredPhrases.length > 0 ? (
        filteredPhrases.map((phrase) => (
          <PhraseCard
            key={phrase.id}
            phrase={phrase}
            onShow={setSelectedPhrase}
            onListen={onListen}
          />
        ))
      ) : (
        <p>해당 카테고리의 표현이 없습니다.</p>
      )}

      <ShowPhrase
        phrase={selectedPhrase}
        onClose={() => setSelectedPhrase(null)}
      />
    </main>
  );
}

export default PhraseList;
