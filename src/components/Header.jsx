import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>Header

      <nav>
        <ul>
          <li><Link>home</Link></li>
          <li><Link to='/cart'>kart</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header