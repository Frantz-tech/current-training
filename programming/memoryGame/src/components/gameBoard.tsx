import { useEffect, useState } from 'react'
import Card from './cards'

export interface CardType {
  id: number
  value: string
  isFlipped: boolean
  foundBy?: number
}

function GameBoard() {
  const images = [
    'https://picsum.photos/id/237/100/100',
    'https://picsum.photos/id/238/100/100',
    'https://picsum.photos/id/239/100/100',
    'https://picsum.photos/id/240/100/100',
    'https://picsum.photos/id/241/100/100',
    'https://picsum.photos/id/242/100/100',
    'https://picsum.photos/id/243/100/100',
    'https://picsum.photos/id/244/100/100'
  ]
  const shuffleCards = () => {
    return [...images, ...images]
      .map((img, index) => ({
        id: index,
        value: img,
        isFlipped: false
      }))
      .sort(() => Math.random() - 0.5)
  }

  const resetGame = () => {
    const playAgain = confirm('Voulez vous rejouez ?')
    if (!playAgain) {
      alert("Merci d'avoir joué ! ")
    } else {
      setCards(shuffleCards)
      setFirstCard(null)
      setSecondCard(null)
      setIsChecked(false)
    }
  }

  const [cards, setCards] = useState<CardType[]>(shuffleCards)

  useEffect(() => {
    if (cards.every(card => card.foundBy !== undefined)) {
      resetGame()
    }
  }, [cards])

  // Reprendre ici !

  const [firstCard, setFirstCard] = useState<CardType | null>(null)
  const [secondCard, setSecondCard] = useState<CardType | null>(null)
  const [isChecked, setIsChecked] = useState(false)

  const handleCardClick = (id: number) => {
    console.log('hello', id)

    if (isChecked) {
      return
    }

    const clickedCard = cards.find(card => card.id === id)

    if (!clickedCard || clickedCard.foundBy !== undefined) {
      return
    }

    const flippedCard = { ...clickedCard, isFlipped: true }

    const updatedCards = cards.map(card =>
      card.id === id ? flippedCard : card
    )
    setCards(updatedCards)

    if (!firstCard) {
      setFirstCard(flippedCard)
      return
    }
    if (!secondCard) {
      setSecondCard(flippedCard)
      setIsChecked(true)
    }
    setTimeout(() => {
      if (firstCard.value === flippedCard.value) {
        setCards(prevCard =>
          prevCard.map(card =>
            card.value === firstCard.value ? { ...card, foundBy: 1 } : card
          )
        )
      } else {
        setCards(prevCard =>
          prevCard.map(card =>
            card.id === firstCard.id || card.id === flippedCard.id
              ? { ...card, isFlipped: false }
              : card
          )
        )
      }
    }, 500)
    setFirstCard(null)
    setSecondCard(null)
    setIsChecked(false)
  }

  return (
    <div className='bg-amber-400 p-8'>
      <h1 className='text-red-400'> GameBoard </h1>
      <div
        className='flex items-center justify-between w-full px-8
      '>
        <div className='m-2'>P1 - Score :</div>
        <div className='m-2'>P2 - Score: </div>
      </div>
      <div className='grid grid-cols-4 grid-rows-4 gap-2.5 justify-center mx-8 my-5'>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            value={card.value}
            isFlipped={card.isFlipped}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div>
        <button onClick={resetGame}>Rejouer</button>
      </div>
    </div>
  )
}
export default GameBoard
