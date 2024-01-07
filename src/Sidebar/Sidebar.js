import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import { GiShoppingCart } from "react-icons/gi";



 function Sidebar() {
  return (
      <>
          <section className="sidebar">
              <div className='logo_container'>
                  <GiShoppingCart  className='logo'/>
              </div>

              <Category />
              <Price />
              <Colors />

          </section>
      </>
  )
}

export default Sidebar;