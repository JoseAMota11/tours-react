import { useState } from 'react'
import './css/Tour.css'

function Tour({ image, name, description, price, children}) {

  const [ readMore, setReadMore ] = useState(false)

  return (
    <>
      <div className="card__container">
        <img className="image" src={image} alt="" />
        <div className="name__price">
          <h2 className="name">{name}</h2>
          <div className="price">${price}<span></span></div>
        </div>
        <p className="description">
          {readMore ? description : `${description.substring(0, 200)}...`}
          <button className='read-btn' onClick={() => setReadMore(readMore => !readMore)}>{readMore ? "Read Less" : "Read More"}</button>
        </p>
        { children }
      </div>
    </>
  )
}

export default Tour