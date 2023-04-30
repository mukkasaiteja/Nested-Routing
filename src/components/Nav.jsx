import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
        <div>Saiteja</div>
        <div className='nav-items'>
        <Link  className='items' to='/'>Home</Link>
        <Link  className='items' to='/Tech'>Tech</Link>
        <Link  className='items' to='/Contact'>Contact</Link>
        <Link  className='items' to='Products'>Products</Link>
        </div>
      
    </div>
  )
}

export default Nav