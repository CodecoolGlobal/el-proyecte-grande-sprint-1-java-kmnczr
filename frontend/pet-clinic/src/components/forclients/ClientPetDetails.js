import React, {useState, useEffect} from 'react'
import myImage from '../../../src/images/dog_and_cat_2.jpg'

import Table from 'react-bootstrap/Table';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Link, useParams, useNavigate } from 'react-router-dom'
import UpdatePet from "../pet/UpdatePet";

import dogImage from '../../../src/images/dog_profile.jpg'
import catImage from '../../../src/images/cat_profile.jpg'
import crocodileImage from '../../../src/images/crocodile.jpg'
import bunnyImage from '../../../src/images/rabbit.jpg'
import fishImage from '../../../src/images/goldfish.jpg'




const ClientPetDetails = () => {
    let {petId} = useParams();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    
    const [openUpdate, setOpenUpdate] = useState(false)
    const [pet, setPet] = useState({empty: true})
    const [visits, setVisits] = useState([])
    const [deletedAVisit, setDeletedAVisit] = useState(false)


    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

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

    useEffect(() => {
      let isMounted = true;
  
      async function fetchData() {
        const resultPet = await axiosPrivate.get('/pets/' + petId);
        const resultVisits = await axiosPrivate.get('/visits/pet/' + petId);
        console.log("pet: " + resultPet)
        console.log("pet: " + resultPet.name)
        console.log("VISITS RESULT: " + resultVisits)
  
        if (isMounted) {
          setPet(resultPet.data);
          setVisits(resultVisits.data);
        }
      }
  
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, [deletedAVisit, openUpdate]);


  return (
    <div>
        <h1 className="add-label">Pet details</h1>
    <div className='flexcontainer'>

        <div className='flexcontainer profile-container'>

            <div className="card profile-card">
                <div className="container profile-container">
                    <img className={"profile-img"}
                         src={petImage}

                         alt="profile-img"></img>
                    <h2 className={"profile-h2"}>{pet.name}</h2>
                    <small>Pet id: {pet.id}</small><br/>
                    <small>{pet.birthDate}</small><br/>
                    <small>{pet.type}</small><br/>
                    <small>Age: {getAge(pet.birthDate)}</small><br/>
                </div>
            </div>
        </div>
    
    </div>
    <hr></hr>

    <div>
        <h1 className="add-label">Visits of the pet</h1><br/>


<Table striped bordered hover>
      <thead>
        <tr>
        <th>Date</th>
          <th>Description</th>
          <th>type</th>
          <th>Price</th>
        </tr>
       </thead>
       <tbody>
        {visits.map((visit, key) => {
          return (
            <tr key={key}>
            <td>{visit.date}</td>
              <td>{visit.description}</td>
              <td>{visit.treatmentType}</td>
              <td>{visit.price}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    <br/>
    </div>
    </div>

  )
}

export default ClientPetDetails
