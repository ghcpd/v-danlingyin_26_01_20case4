import { useState } from 'react'

const vocabularyData = [
  { word: 'Serendipity', meaning: 'Finding something good without looking for it' },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  { word: 'Resilient', meaning: 'Able to recover quickly from difficulties' },
  { word: 'Pragmatic', meaning: 'Dealing with things sensibly and realistically' },
  { word: 'Ambiguous', meaning: 'Open to more than one interpretation' },
  { word: 'Benevolent', meaning: 'Well-meaning and kindly' },
  { word: 'Diligent', meaning: 'Having or showing care in one\'s work or duties' },
  { word: 'Inevitable', meaning: 'Certain to happen; unavoidable' }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)

  const handleRevealMeaning = () => {
    setShowMeaning(true)
  }

  const handleNextWord = () => {
    setShowMeaning(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vocabularyData.length)
  }

  const currentCard = vocabularyData[currentIndex]

  return (
    <div className="app">
      <h1>Vocabulary Flashcards</h1>
      <div className="flashcard">
        <div className="word">{currentCard.word}</div>
        <div className="meaning">
          {showMeaning ? currentCard.meaning : '???'}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleRevealMeaning} disabled={showMeaning}>
          Reveal Meaning
        </button>
        <button onClick={handleNextWord}>
          Next Word
        </button>
      </div>
    </div>
  )
}

export default App
