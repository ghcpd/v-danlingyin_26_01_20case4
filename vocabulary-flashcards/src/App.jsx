import { useState } from 'react'

const vocabularyData = [
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  { word: 'Pragmatic', meaning: 'Dealing with things sensibly and realistically' },
  { word: 'Resilient', meaning: 'Able to recover quickly from difficulties' },
]

function Flashcard({ word, meaning, isMeaningVisible }) {
  return (
    <div className="flashcard">
      <h2 className="word">{word}</h2>
      {isMeaningVisible && <p className="meaning">{meaning}</p>}
    </div>
  )
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMeaningVisible, setIsMeaningVisible] = useState(false)

  const currentCard = vocabularyData[currentIndex]

  const handleRevealMeaning = () => {
    setIsMeaningVisible(true)
  }

  const handleNextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabularyData.length)
    setIsMeaningVisible(false)
  }

  return (
    <div className="app">
      <h1>Vocabulary Flashcards</h1>
      <Flashcard
        word={currentCard.word}
        meaning={currentCard.meaning}
        isMeaningVisible={isMeaningVisible}
      />
      <div className="buttons">
        <button onClick={handleRevealMeaning} disabled={isMeaningVisible}>
          Reveal Meaning
        </button>
        <button onClick={handleNextWord}>
          Next Word
        </button>
      </div>
      <p className="progress">
        Card {currentIndex + 1} of {vocabularyData.length}
      </p>
    </div>
  )
}

export default App
