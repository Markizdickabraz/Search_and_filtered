import { BsBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="card">
                  <img src={img} alt={title} className='card_img' />
                  <div className="card_details">
              <h3 className="card_title">{title}</h3>
                      <section className="card_reviews">
                          {star}{star}{star}{star}
                  <span className="total_reviews">{ reviews}</span>
                      </section>
                      <section className="card_price">
                          <div className="price">
                              <del>
                                  {prevPrice}
                              </del> {newPrice}
                          </div>
                          <div className="bag">
                              <BsBagHeartFill className='bag_icon' />
                          </div>
                      </section>
                  </div>
              </section>
  )
}

export default Card;