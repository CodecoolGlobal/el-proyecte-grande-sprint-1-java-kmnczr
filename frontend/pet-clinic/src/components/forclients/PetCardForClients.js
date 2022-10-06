import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom'
import dogImage from '../../../src/images/dog_profile.jpg'
import catImage from '../../../src/images/cat_profile.jpg'
import crocodileImage from '../../../src/images/crocodile.jpg'
import bunnyImage from '../../../src/images/rabbit.jpg'
import fishImage from '../../../src/images/goldfish.jpg'



function PetCardForClients({pet}) {

  const chooseImage = () => {
    if (pet.type === "DOG") {
      return dogImage
    }
    else if (pet.type === "CAT") {
      return catImage
    }
    else if (pet.type === "BUNNY") {
      return bunnyImage
    }
    else if (pet.type === "FISH") {
      return fishImage
    }
    else {
      return crocodileImage
    }
}

const petImage = chooseImage()

  return (

      <li>
        <Link to={`/client/pet/${pet.id}`}>
          <a href="" className="card" style={{height: 300, width: 300}}>

            <img src={petImage} className="card__image" alt=""/>

            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path/>
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title">Name: {pet.name}</h3>
                </div>
              </div>
              <p className="card__description">Birth date: {pet.birthDate}</p>
            </div>
          </a>
        </Link>
      </li>
  );
}


export default PetCardForClients;

