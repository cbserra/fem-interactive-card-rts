import React from 'react'
import { UseFormReturn, SubmitHandler } from 'react-hook-form'
import { CardForm } from 'types/Types'
import completedLogo from '../assets/icon-complete.svg'

const Completed = (props: {
  methods: UseFormReturn<any>
  card: CardForm | undefined
  setCard: React.Dispatch<React.SetStateAction<CardForm | undefined>>
  isCompleted: boolean
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
    reset,

    setValue,
  } = props.methods
  const { card, setCard, isCompleted, setIsCompleted } = props

  const onSubmitHandler: SubmitHandler<any> = (
    data: any,
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ): void => {
    setCard(undefined)
    setIsCompleted(false)
    // e?.target.reset()
    reset()
    console.log(data, isDirty, isValid, isSubmitSuccessful, reset, errors)
  } // console.log(data)
  // const onErrorHandler: SubmitErrorHandler<CardForm> = (error: any) =>
  //   console.error(error, isDirty, isValid)

  return (
    <form className="form--completed" onSubmit={handleSubmit(onSubmitHandler)}>
      {/* <div className="form--label-input-container"> */}
      <img src={completedLogo} alt="complete" />
      <h1>Thank you!</h1>
      <h2>We&apos;ve added your card details</h2>
      {/* </div> */}
      {/* <div className="form--submit-container"> */}
      <button className="button--completed text-header-lg" type="submit">
        Continue
      </button>
      {/* </div> */}
    </form>
  )
}

export default Completed
