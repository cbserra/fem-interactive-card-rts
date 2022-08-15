import Header from './components/Header'
import Form from './components/Form'
import { useState } from 'react'
import { CardForm } from './types/Types'

function App() {
  const [card, setCard] = useState<CardForm | undefined>()
  const [numbers, setNumbers] = useState<string>('0000 0000 0000 0000')
  const [name, setName] = useState<string>('Jane Appleseed')
  const [expiry, setExpiry] = useState<string>('00/00')
  const [cvv, setCvv] = useState<string>('000')
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  return (
    // <div className="App app-wrapper">
    <>
      <Header card={card} />
      <main>
        <Form card={card} setCard={setCard} />
      </main>
    </>
    // </div>
  )
}

export default App
