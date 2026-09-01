import { useMemo } from 'react';
import PhraseCard from '../components/PhraseCard';
import phrases from '../data/phrases';

function PhraseList({
  category,
  categoryIcon,
  categoryLabel,
  onBack,
  onListen,
  onSelectPhrase,
}) {
  const filteredPhrases = useMemo(
    () => phrases.filter((phrase) => phrase.category === category),
    [category]
  );

  return (
    <section className="screen list-screen">
      <div className="section-header stacked">
        <button className="back-button" onClick={onBack} type="button">
          ← 뒤로
        </button>
        <div>
          <p className="eyebrow">{categoryIcon} 상황별 표현</p>
          <h2>{categoryLabel}</h2>
        </div>
      </div>

      <div className="phrase-list">
        {filteredPhrases.length > 0 ? (
          filteredPhrases.map((phrase) => (
            <PhraseCard
              key={phrase.id}
              phrase={phrase}
              onShow={onSelectPhrase}
              onListen={onListen}
            />
          ))
        ) : (
          <p className="empty-message">해당 카테고리의 표현이 없습니다.</p>
        )}
      </div>
    </section>
  );
}

export default PhraseList;
