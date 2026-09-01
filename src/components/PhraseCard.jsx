function PhraseCard({ phrase, onShow, onListen }) {
  return (
    <article className="phrase-card">
      <p className="phrase-situation">{phrase.situation}</p>
      <p className="phrase-korean">{phrase.korean}</p>
      <p className="phrase-japanese" lang="ja">
        {phrase.japanese}
      </p>
      <p className="phrase-pronunciation">{phrase.pronunciation}</p>

      <div className="phrase-actions">
        {typeof onListen === 'function' && (
          <button
            className="small-button listen"
            type="button"
            onClick={() => onListen(phrase)}
          >
            🔊 듣기
          </button>
        )}
        <button
          className="small-button show"
          type="button"
          onClick={() => onShow(phrase)}
        >
          👀 보여주기
        </button>
      </div>
    </article>
  );
}

export default PhraseCard;
