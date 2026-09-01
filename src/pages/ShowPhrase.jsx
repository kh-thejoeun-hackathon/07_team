function ShowPhrase({ phrase, onClose }) {
  if (!phrase) return null;

  return (
    <section className="screen show-screen">
      <div
        className="show-phrase-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="show-phrase-title"
      >
        <p className="show-title">{phrase.situation}</p>
        <h1 id="show-phrase-title" lang="ja">
          {phrase.japanese}
        </h1>
        <button className="primary-button" onClick={onClose} type="button">
          닫기
        </button>
      </div>
    </section>
  );
}

export default ShowPhrase;
