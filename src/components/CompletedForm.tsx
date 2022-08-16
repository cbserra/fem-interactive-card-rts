import React from 'react'
import { UseFormReturn, SubmitHandler } from 'react-hook-form'
import { CardForm } from 'types/Types'
import completedLogo from '../assets/icon-complete.svg'

const CompletedForm = (props: {
  methods: UseFormReturn<any>
  card: CardForm | undefined
  setCard: React.Dispatch<React.SetStateAction<CardForm | undefined>>
  isCompleted: boolean
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const {
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
    reset,
  } = props.methods
  const { setCard, setIsCompleted } = props

  const onSubmitHandler: SubmitHandler<any> = (data: any): void => {
    setCard(undefined)
    setIsCompleted(false)
    reset()
    console.log(
      `data=${data}`,
      `isDirty=${isDirty}`,
      `isValid=${isValid}`,
      `isSubmitSuccessful=${isSubmitSuccessful}`,
      `reset=${reset}`,
      `errors=${errors}`
    )
  }

  return (
    <form className="form--completed" onSubmit={handleSubmit(onSubmitHandler)}>
      <img src={completedLogo} alt="complete" />
      <h1>Thank you!</h1>
      <h2>We&apos;ve added your card details</h2>
      <button className="button--completed text-header-lg" type="submit">
        Continue
      </button>
    </form>
  )
}

export default CompletedForm
