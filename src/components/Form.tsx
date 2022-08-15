import React from 'react'
import { SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { CardForm } from '../types/Types'
import MaskedInput from 'react-input-mask'

const Form = (props: {
  methods: UseFormReturn<CardForm>
  card: CardForm | undefined
  setCard: React.Dispatch<React.SetStateAction<CardForm | undefined>>
  isCompleted: boolean
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
    setValue,
  } = props.methods
  const { card, setCard, isCompleted, setIsCompleted } = props
  const onSubmitHandler: SubmitHandler<CardForm> = (data: CardForm) => {
    setCard(data)
    setIsCompleted(isSubmitSuccessful)
  }

  const onErrorHandler: SubmitErrorHandler<CardForm> = (error: any) =>
    console.error(error, isDirty, isValid)

  return (
    <form onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}>
      <div className="form--label-input-container form--cardholder-name-container">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="e.g. Jane Appleseed"
          aria-invalid={errors?.name ? 'true' : 'false'}
          className={errors?.name ? 'form-error' : ''}
          {...register('name', {
            required: "Can't be blank",
            minLength: { value: 3, message: 'Must be at least 3 characters' },
            pattern: {
              value: /^[a-zA-Z .]+$/,
              message: 'Wrong format; letters, spaces, and periods only',
            },
            // validate: (value) => value.length || "Can't be blank",
            onChange: (e) => setValue('name', e.target.value),
          })}
        />
        <span className="form--cardholder-name-error form-error">{errors?.name?.message}</span>
      </div>
      <div className="form--label-input-container form--card-number-container">
        <label htmlFor="card-number">Card Number</label>
        <MaskedInput
          id="card-number"
          // maskPlaceholder="e.g. 1234 5678 9123 0000"
          aria-invalid={errors?.numbers ? 'true' : 'false'}
          className={errors?.numbers ? 'form-error' : ''}
          mask="9999 9999 9999 9999"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('numbers', {
            minLength: { value: 19, message: 'Must be 16 digits' },
            maxLength: { value: 19, message: 'Must be 16 digits' },
            pattern: { value: /^[0-9 ]{19}$/, message: 'Wrong format; digits only' },
            required: "Can't be blank",
            onChange: (e) => setValue('numbers', e.target.value),
          })}
        />
        <span className="form--card-number-error form-error">{errors?.numbers?.message}</span>
      </div>
      <div className="form--row-container form--card-expiry-sec-container">
        <div className="form--label-input-container form--card-expiry-container">
          <label htmlFor="card-expiry">Exp. Date (MM/YY)</label>
          <div className="form--row-container">
            <input
              type="text"
              id="card-expiry--mm"
              maxLength={2}
              placeholder="MM"
              aria-invalid={errors?.monthExp ? 'true' : 'false'}
              className={errors?.monthExp ? 'form-error' : ''}
              {...register('monthExp', {
                minLength: { value: 1, message: 'Must be at least 1 digit' },
                maxLength: { value: 2, message: 'Must be at most 2 digits' },
                min: { value: '01', message: 'Must be at least 1' },
                max: { value: '12', message: 'Must be at most 12' },
                pattern: { value: /^[0-9]{1,2}$/, message: 'Wrong format; digits only' },
                required: "Can't be blank",
                onChange: (e) => setValue('monthExp', e.target.value),
                // setValueAs: (value: string) => {
                //   console.log(value)
                //   return value.length === 1 && parseInt(value) <= 9 ? value.padStart(1, '0') : value
                // },
              })}
            />
            <input
              type="text"
              id="card-expiry--yy"
              maxLength={2}
              placeholder="YY"
              aria-invalid={errors?.yearExp ? 'true' : 'false'}
              className={errors?.yearExp ? 'form-error' : ''}
              {...register('yearExp', {
                minLength: { value: 1, message: 'Must be 2 digits' },
                maxLength: { value: 2, message: 'Must be 2 digits' },
                // min: 1,
                // max: 12,
                pattern: { value: /^[0-9]{2}$/, message: 'Wrong format; digits only' },
                required: "Can't be blank",
                onChange: (e) => setValue('yearExp', e.target.value),
                // setValueAs: (value: string) => {
                //   console.log(value)
                //   return value.length === 1 && parseInt(value) <= 9 ? value.padStart(1, '0') : value
                // },
              })}
            />
          </div>
          <span className="form--card-expiry-error form-error">
            {errors?.monthExp?.message || errors?.yearExp?.message}
          </span>
        </div>
        <div className="form--label-input-container form--card-cvc-container">
          <label htmlFor="card-cvc">CVC</label>
          <input
            type="text"
            id="card-cvc"
            maxLength={3}
            placeholder="e.g. 123"
            aria-invalid={errors?.cvc ? 'true' : 'false'}
            className={errors?.cvc ? 'form-error' : ''}
            {...register('cvc', {
              minLength: { value: 3, message: 'Must be 3 digits' },
              maxLength: { value: 3, message: 'Must be 3 digits' },
              pattern: { value: /^[0-9]{3}$/, message: 'Must be 3 digits' },
              required: "Can't be blank",
              onChange: (e) => setValue('cvc', e.target.value),
            })}
          />
          <span className="form--card-cvc-error form-error">{errors?.cvc?.message}</span>
        </div>
      </div>
      <div className="form--submit-container">
        <button className="text-header-lg" type="submit">
          Confirm
        </button>
      </div>
    </form>
  )
}

export default Form
