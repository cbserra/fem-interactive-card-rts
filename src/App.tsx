import Header from './components/Header'
import InteractiveCardForm from './components/InteractiveCardForm'
import { useEffect, useState } from 'react'
import { CardForm } from './types/Types'
import { useForm } from 'react-hook-form'
import CompletedForm from 'components/CompletedForm'

function App() {
  const [card, setCard] = useState<CardForm | undefined>()
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const formMethods = useForm<CardForm>({ mode: 'onBlur', reValidateMode: 'onChange' })
  const watchAll = formMethods.watch()

  useEffect(() => {
    console.log(`🚀 ~ file: App.tsx ~ line 16 ~ useEffect ~ card`, card)
    console.log(`🚀 ~ file: App.tsx ~ line 17 ~ useEffect ~ isCompleted`, isCompleted)
  }, [card, isCompleted])

  return (
    <>
      <Header watchCardForm={watchAll} formErrors={formMethods.formState.errors} card={card} />
      <main>
        {isCompleted ? (
          <CompletedForm
            methods={formMethods}
            card={card}
            setCard={setCard}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
          />
        ) : (
          <InteractiveCardForm
            methods={formMethods}
            setCard={setCard}
            setIsCompleted={setIsCompleted}
          />
        )}
      </main>
    </>
    // </div>
  )
}

export default App
