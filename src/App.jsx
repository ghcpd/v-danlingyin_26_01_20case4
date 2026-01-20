import { useState } from 'react'

const vocabularyData = [
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Serendipity', meaning: 'The occurrence of events by chance in a happy way' },
  { word: 'Meticulous', meaning: 'Showing great attention to detail; very careful' },
  { word: 'Ambiguous', meaning: 'Open to more than one interpretation; not clear' },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  { word: 'Pragmatic', meaning: 'Dealing with things sensibly and realistically' },
  { word: 'Resilient', meaning: 'Able to withstand or recover quickly from difficulties' }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  const currentCard = vocabularyData[currentIndex]

  const handleReveal = () => {
    setShowMeaning(true)
  }

  const handleNext = () => {
    setShowMeaning(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabularyData.length)
  }

  return (
    <div className="app">
      <h1>Vocabulary Flashcards</h1>
      <div className="card">
        <div className="word">{currentCard.word}</div>
        {showMeaning && (
          <div className="meaning">{currentCard.meaning}</div>
        )}
      </div>
      <div className="buttons">
        <button onClick={handleReveal} disabled={showMeaning}>
          Reveal Meaning
        </button>
        <button onClick={handleNext}>
          Next Word
        </button>
      </div>
    </div>
  )
}

export default App
