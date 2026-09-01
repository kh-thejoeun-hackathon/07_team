function PhraseCard({ phrase, onShow, onListen }) {
  return (
    <article className="phrase-card">
      <h3>{phrase.situation}</h3>
      <p>{phrase.korean}</p>
      <strong lang="ja">{phrase.japanese}</strong>
      <p>{phrase.pronunciation}</p>

      <div className="phrase-card__actions">
        {onListen && (
          <button type="button" onClick={() => onListen(phrase)}>
            🔊 듣기
          </button>
        )}
        <button type="button" onClick={() => onShow(phrase)}>
          👀 보여주기
        </button>
      </div>
    </article>
  );
}

export default PhraseCard;
