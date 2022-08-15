import Header from './components/Header'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import { CardForm } from './types/Types'
import { useForm } from 'react-hook-form'

function App() {
  const [card, setCard] = useState<CardForm | undefined>()
  const [numbers, setNumbers] = useState<string>('0000 0000 0000 0000')
  const [name, setName] = useState<string>('Jane Appleseed')
  const [expiry, setExpiry] = useState<string>('00/00')
  const [cvc, setCvc] = useState<string>('000')
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<CardForm>()

  const formMethods = useForm<CardForm>({ mode: 'onBlur', reValidateMode: 'onChange' })
  const watchAll = formMethods.watch()

  useEffect(() => {
    console.error(formMethods.formState)
  }, [formMethods.formState])

  return (
    // <div className="App app-wrapper">
    <>
      <Header watchCardForm={watchAll} formErrors={formMethods.formState.errors} card={card} />
      <main>
        <Form methods={formMethods} card={card} setCard={setCard} />
      </main>
    </>
    // </div>
  )
}

export default App
