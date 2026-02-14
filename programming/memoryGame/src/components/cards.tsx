interface CardsProps {
  id: number
  value: string
  isFlipped: boolean
  onClick: (id: number) => null
}

function Card({ id, value, isFlipped, onClick }: CardsProps) {
  return (
    <div
      className={`w-24 h-24 flex items-center justify-center border rounded cursor-pointer ${isFlipped ? 'bg-green-300' : 'bg-amber-300'}`}
      onClick={() => onClick(id)}>
      {isFlipped ? (
        <img src={value} alt='cards' className='h-full w-full object-cover' />
      ) : (
        '?'
      )}
    </div>
  )
}
export default Card
