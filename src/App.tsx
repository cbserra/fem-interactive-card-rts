import Header from './components/Header'
import Form from './components/Form'
import { useState } from 'react'
import { CardForm } from './types/Types'
import { useForm } from 'react-hook-form'
import Completed from 'components/Completed'

function App() {
  const [card, setCard] = useState<CardForm | undefined>()
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const formMethods = useForm<CardForm>({ mode: 'onBlur', reValidateMode: 'onChange' })
  const watchAll = formMethods.watch()

  return (
    <>
      <Header watchCardForm={watchAll} formErrors={formMethods.formState.errors} card={card} />
      <main>
        {isCompleted ? (
          <Completed
            methods={formMethods}
            card={card}
            setCard={setCard}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
          />
        ) : (
          <Form
            methods={formMethods}
            card={card}
            setCard={setCard}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
          />
        )}
      </main>
    </>
    // </div>
  )
}

export default App
