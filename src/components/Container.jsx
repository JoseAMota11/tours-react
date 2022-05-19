import { useState, useEffect } from 'react'
import Tour from './Tour'
import json from '../data.json'
import './css/Container.css'

function Container() {

  const [ data, setData ] = useState(json.data)
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    if (json) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [])

  const deleteTour = (id) => {
    const newArr = data.filter(tour => {
      if (tour.id !== id) {
        return tour
      }
    })
    setData(newArr)
  }

  if (isLoading) {
    return (
      <div className='text__container'>
        <h1 className='text'>Loading...</h1>
      </div>
    )
  } else if (data.length < 1) {
    return (
      <div className='text__container'>
        <h1 className='text'>No Tours Left</h1>
        <button className='refresh' onClick={() => location.reload()}>Refresh</button>
      </div>
    )
  } else {
    return (
      <>
        <main className='main'>
          <div className='title__container'>
            <h1 className='title'>Our Tours</h1>
            <div className='line'></div>
          </div>
          {
            data.map(data => {
              return (
                <Tour key={data.id} {...data}>
                  <button className='delete' onClick={() => deleteTour(data.id)}>
                    Not Interested
                  </button>
                </Tour>
              )
            })
          }
        </main>
      </>
    )
  }
}

export default Container