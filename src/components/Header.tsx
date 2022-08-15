import React from 'react'
import { ReactComponent as CardLogo } from '../assets/card-logo.svg'
import { CardForm } from '../types/Types'

const Header = (props: { card: CardForm | undefined }) => {
  return (
    <header>
      <div className="card-wrapper">
        <div className="card-back">
          <div className="card-back--card-sec">000</div>
        </div>
        <div className="card-front">
          <div className="card-front--logo">
            <CardLogo />
            {/* <img src="../assets/card-logo.svg" alt="Card logo" /> */}
            {/* <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/>
              <path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/>
            </svg> */}
          </div>
          <div className="card-front--card-numbers">0000 0000 0000 0000</div>
          <div className="card-front--card-holder">
            <div className="card-front--card-holder-name">Jane Appleseed</div>
            <div className="card-front--card-holder-expiry">00/00</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
