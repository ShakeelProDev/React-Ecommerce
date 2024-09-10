import React from 'react'
import { logo } from '../assets'

const Header = () => {
  return (
    <div className='w-full bg-whiteText'>
      <div>
        <img src={logo} alt="logo" className='w-44' />
      </div>
    </div>
    
  )
}

export default Header   