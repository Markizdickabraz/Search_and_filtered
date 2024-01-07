/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <div className="nav_container">
        <input
          type='text'
          className='search_input'
          placeholder='Enter your search shoes.' />
      </div>

      <div className="profile_container">
        <a href="#">
          <FiHeart className='nav_icons'/>
        </a>

        <a href="#">
          <AiOutlineShoppingCart className='nav_icons' />
        </a>

        <a href="#">
          <AiOutlineUserAdd className='nav_icons' />
        </a>
      </div>
    </nav>
  )
}

export default Navigation;