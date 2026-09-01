function ShowPhrase({ phrase, onClose }) {
  if (!phrase) {
    return null;
  }

  return (
    <div className="show-phrase" role="dialog" aria-modal="true">
      <h1 lang="ja">{phrase.japanese}</h1>
      <button type="button" onClick={onClose}>
        닫기
      </button>
    </div>
  );
}

export default ShowPhrase;
