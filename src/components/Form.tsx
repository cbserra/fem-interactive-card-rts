import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CardForm } from '../types/Types'

const Form = (props: {
  card: CardForm | undefined
  setCard: React.Dispatch<React.SetStateAction<CardForm | undefined>>
}) => {
  const { card, setCard } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CardForm>()
  const onSubmit: SubmitHandler<CardForm> = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form--label-input-container form--cardholder-name-container">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="e.g. Jane Appleseed"
          {...register('name')}
        />
      </div>
      <div className="form--label-input-container form--card-number-container">
        <label htmlFor="card-number">Card Number</label>
        <input
          type="text"
          id="card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('numbers')}
        />
      </div>
      <div className="form--row-container form--card-expiry-sec-container">
        <div className="form--label-input-container form--card-expiry-container">
          <label htmlFor="card-expiry">Exp. Date (MM/YY)</label>
          <div className="form--row-container">
            <input
              type="number"
              id="card-expiry--mm"
              maxLength={2}
              placeholder="MM"
              {...register('monthExp')}
            />
            <input
              type="number"
              id="card-expiry--yy"
              maxLength={2}
              placeholder="YY"
              {...register('yearExp')}
            />
          </div>
        </div>
        <div className="form--label-input-container form--card-cvc-container">
          <label htmlFor="card-cvc">CVC</label>
          <input
            type="number"
            id="card-cvc"
            maxLength={3}
            placeholder="e.g. 123"
            {...register('cvv')}
          />
        </div>
      </div>
      <div className="form--submit-container">
        <button className="text-header-lg" type="submit">
          Confirm
        </button>
      </div>

      {/* Completed state start

        Thank you!
        We've added your card details
        Continue */}
    </form>
  )
}

export default Form
