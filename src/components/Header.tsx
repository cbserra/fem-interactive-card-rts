import React from 'react'
import cardLogo, { ReactComponent as CardLogo } from '../assets/card-logo.svg'
import { CardForm } from '../types/Types'

const Header = (props: { watchCardForm: CardForm; card: CardForm | undefined }) => {
  const { watchCardForm: watch, card } = props
  return (
    <header>
      <div className="card-wrapper">
        <div className="card-back">
          <div className="card-back--card-sec">{watch.cvv ? <>{watch.cvv}</> : '000'}</div>
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
            {watch.numbers ? <>{watch.numbers}</> : '0000 0000 0000 0000'}
          </div>
          <div className="card-front--card-holder">
            <div className="card-front--card-holder-name">
              {watch.name ? <>{watch.name}</> : 'Jane Appleseed'}
            </div>
            <div className="card-front--card-holder-expiry">
              {watch.monthExp ? <>{watch.monthExp}</> : '00'}/
              {watch.yearExp ? <>{watch.yearExp}</> : '00'}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
