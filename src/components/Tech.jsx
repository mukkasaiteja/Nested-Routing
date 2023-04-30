import React from 'react'
import './Tech.css'
import { Link, Outlet } from 'react-router-dom'

function Tech() {
  return (
    <div className='tech'>
            <div className='headings'>

                <Link to='html' className='link'>Html</Link>
                <Link to='css'  className='link'>Css</Link>
                <Link to='js'  className='link'>Js</Link>
            </div>
            <div className='matter'>
              <Outlet/>

            </div>


    </div>
  )
}

export default Tech