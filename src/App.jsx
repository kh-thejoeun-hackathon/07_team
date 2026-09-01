import { useState } from 'react';
import categoryMeta from './data/categories';
import PhraseList from './pages/PhraseList';
import ShowPhrase from './pages/ShowPhrase';
import './styles/app.css';

const getCategoryLabel = (value) =>
  categoryMeta.find((item) => item.value === value)?.label || value;

const getCategoryIcon = (value) =>
  categoryMeta.find((item) => item.value === value)?.icon || '📌';

function Home({ onStart }) {
  return (
    <section className="screen home-screen">
      <div className="home-card">
        <div className="brand-mark">🇯🇵</div>
        <p className="eyebrow">Nihongo SOS</p>
        <h1>일본에서 지금 뭐라고 말해야 할까요?</h1>
        <p className="subtext">
          필요한 상황을 선택하면 바로 사용할 수 있는 일본어를 알려드립니다.
        </p>
        <button className="primary-button" onClick={onStart}>
          시작하기
        </button>
      </div>
    </section>
  );
}

function Header({ onHome }) {
  return (
    <header className="site-header">
      <button className="brand-button" onClick={onHome} type="button">
        <span className="brand-symbol">日の</span>
        <span>
          <strong>Nihongo SOS</strong>
          <small>旅のことば</small>
        </span>
      </button>
      <span className="header-kana">日本語 여행 회화</span>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-line" />
      <p>いってらっしゃい · 편안한 일본 여행을 위해</p>
      <span className="footer-line" />
    </footer>
  );
}

function Category({ onSelect, selectedCategory }) {
  return (
    <section className="screen category-screen">
      <div className="section-header">
        <p className="eyebrow">상황 선택</p>
        <h2>지금 어떤 상황인가요?</h2>
      </div>

      <div className="category-grid">
        {categoryMeta.map((item, index) => {
          const active = selectedCategory === item.value;
          return (
            <button
              key={item.value}
              className={`category-card ${active ? 'active' : ''} ${
                item.value === 'emergency' ? 'emergency' : ''
              }`}
              onClick={() => onSelect(item.value)}
              type="button"
            >
              <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="category-icon">{item.icon}</span>
              <span className="category-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function speakJapanese(text) {
  if (!('speechSynthesis' in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function App() {
  const [step, setStep] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPhrase, setSelectedPhrase] = useState(null);

  const handleStart = () => {
    setStep('category');
  };

  const handleHome = () => {
    setSelectedCategory(null);
    setSelectedPhrase(null);
    setStep('home');
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setStep('list');
  };

  const handleBackToCategory = () => {
    setStep('category');
    setSelectedPhrase(null);
  };

  const handlePhraseSelect = (phrase) => {
    setSelectedPhrase(phrase);
    setStep('show');
  };

  const handleCloseShow = () => {
    setSelectedPhrase(null);
    setStep('list');
  };

  return (
    <div className="app-shell">
      <Header onHome={handleHome} />
      {step === 'home' && <Home onStart={handleStart} />}
      {step === 'category' && (
        <Category
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      )}
      {step === 'list' && selectedCategory && (
        <PhraseList
          category={selectedCategory}
          categoryIcon={getCategoryIcon(selectedCategory)}
          categoryLabel={getCategoryLabel(selectedCategory)}
          onListen={(phrase) => speakJapanese(phrase.japanese)}
          onBack={handleBackToCategory}
          onSelectPhrase={handlePhraseSelect}
        />
      )}
      {step === 'show' && (
        <ShowPhrase phrase={selectedPhrase} onClose={handleCloseShow} />
      )}
      <Footer />
    </div>
  );
}

export default App;
