import React from 'react'
import {
  SubmitHandler,
  useForm,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form'
import { CardForm } from '../types/Types'

const Form = (props: {
  methods: UseFormReturn<CardForm>
  card: CardForm | undefined
  setCard: React.Dispatch<React.SetStateAction<CardForm | undefined>>
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = props.methods
  const { card, setCard } = props
  // const {
  // register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<CardForm>()
  const onSubmit: SubmitHandler<CardForm> = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form--label-input-container form--cardholder-name-container">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="e.g. Jane Appleseed"
          {...register('name', {
            required: true,
            minLength: 3,
            pattern: /^[a-zA-Z .]+$/,
            onChange: (e) => setValue('name', e.target.value),
          })}
        />
      </div>
      <div className="form--label-input-container form--card-number-container">
        <label htmlFor="card-number">Card Number</label>
        <input
          type="text"
          id="card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('numbers', {
            minLength: 16,
            maxLength: 16,
            pattern: /^[0-9]{16}$/,
            required: true,
            // defaultValue: card?.numbers,
            onChange: (e) => setValue('numbers', e.target.value),
          })}
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
              {...register('monthExp', {
                minLength: 1,
                maxLength: 2,
                min: 1,
                max: 12,
                pattern: /^[0-9]{1,2}$/,
                required: true,
                onChange: (e) => setValue('monthExp', e.target.value),
                // setValueAs: (value: string) => {
                //   console.log(value)
                //   return value.length === 1 && parseInt(value) <= 9 ? value.padStart(1, '0') : value
                // },
              })}
            />
            <input
              type="number"
              id="card-expiry--yy"
              maxLength={2}
              placeholder="YY"
              {...register('yearExp', {
                minLength: 2,
                maxLength: 2,
                // min: 1,
                // max: 12,
                pattern: /^[0-9]{2}$/,
                required: true,
                onChange: (e) => setValue('yearExp', e.target.value),
                // setValueAs: (value: string) => {
                //   console.log(value)
                //   return value.length === 1 && parseInt(value) <= 9 ? value.padStart(1, '0') : value
                // },
              })}
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
            {...register('cvv', {
              minLength: 3,
              maxLength: 3,
              // min: 1,
              // max: 12,
              pattern: /^[0-9]{3}$/,
              required: true,
              onChange: (e) => setValue('cvv', e.target.value),
            })}
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
