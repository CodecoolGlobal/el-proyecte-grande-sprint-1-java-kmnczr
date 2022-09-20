import React from 'react'
import myImage from "../images/notfound.jpg";

const NotFound = () => {
  return (
      <div className='notfound'>
          <img src={myImage} width={500} alt="notfound" />
      </div>
  )
}

export default NotFound
