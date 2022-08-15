import { useEffect, useState } from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import cardLogo from '../assets/card-logo.svg'
import { CardForm } from '../types/Types'

const DEFAULT_CVC_VALUE = '000'
const DEFAULT_CARD_NUMBERS_VALUE = '0000 0000 0000 0000'
const DEFAULT_CARD_HOLDER_VALUE = 'Jane Appleseed'
const DEFAULT_MONTH_YEAR_EXP_VALUE = '00'

const Header = (props: {
  watchCardForm: CardForm
  formErrors: FieldErrorsImpl<CardForm>
  card: CardForm | undefined
}) => {
  const { watchCardForm, formErrors, card } = props
  const [localCard, setLocalCard] = useState<CardForm>((card || watchCardForm || {}) as CardForm)

  useEffect(() => {
    setLocalCard(card || watchCardForm || {})
  }, [card, watchCardForm])

  return (
    <header>
      <div className="card-wrapper">
        <div className="card-back">
          <div className="card-back--card-sec">
            {localCard.cvc && !formErrors.cvc ? <>{localCard.cvc}</> : DEFAULT_CVC_VALUE}
          </div>
        </div>
        <div className="card-front">
          <div className="card-front--logo">
            {/* <CardLogo /> */}
            <img src={cardLogo} alt="Card logo" />
            {/* <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
              <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/>
            </svg> */}
          </div>
          <div className="card-front--card-numbers">
            {localCard.numbers && !formErrors.numbers ? (
              <>{localCard.numbers}</>
            ) : (
              DEFAULT_CARD_NUMBERS_VALUE
            )}
          </div>
          <div className="card-front--card-holder">
            <div className="card-front--card-holder-name">
              {localCard.name && !formErrors.name ? (
                <>{localCard.name}</>
              ) : (
                DEFAULT_CARD_HOLDER_VALUE
              )}
            </div>
            <div className="card-front--card-holder-expiry">
              {localCard.monthExp && !formErrors.monthExp ? (
                <>{localCard.monthExp}</>
              ) : (
                DEFAULT_MONTH_YEAR_EXP_VALUE
              )}
              /
              {localCard.yearExp && !formErrors.yearExp ? (
                <>{localCard.yearExp}</>
              ) : (
                DEFAULT_MONTH_YEAR_EXP_VALUE
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
