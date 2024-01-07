import './Products.css';
import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

function Products() {
  return (
      <>
          <section className="card_container">
              <section className="card">
                  <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shue" className='card_img' />
                  <div className="card_details">
                      <h3 className="card_title">Shoe</h3>
                      <section className="card_reviews">
                          <FaStar className='retings_start' />
                          <FaStar className='retings_start' />
                          <FaStar className='retings_start' />
                          <FaStar className='retings_start' />
                          <span className="total_reviews">4</span>
                      </section>
                      <section className="card_price">
                          <div className="price">
                              <del>
                                  $300
                              </del>$200
                          </div>
                          <div className="bag">
                              <BsBagHeartFill className='bag_icon' />
                          </div>
                      </section>
                  </div>
              </section>
          </section>
      </>
  )
}

export default Products;