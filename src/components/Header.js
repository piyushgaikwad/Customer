import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <header>
    <nav>
      <ul style={{listStyleType:"none",textAlign:"center"}}>
      <li style={{listStyleType:"none",textAlign:"center"}}><Link to='/'></Link></li>
      {/* First_page then home and then guideline */}
        <li style={{listStyleType:"none",textAlign:"center"}}><Link to='/Home'>Home</Link></li>
        <li style={{listStyleType:"none",textAlign:"center"}}><Link to='/How_to_use'>GUIDELINE For DAPP</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
