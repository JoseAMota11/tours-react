import './css/Tour.css'

function Tour({ image, name, description, price, children}) {
  return (
    <>
      <div className="card__container">
        <img className="image" src={image} alt="" />
        <div className="name__price">
          <h2 className="name">{name}</h2>
          <div className="price">${price}<span></span></div>
        </div>
        <p className="description">
          {description}
          <button className='read-btn'>Read more</button>
        </p>
        { children }
      </div>
    </>
  )
}

export default Tour