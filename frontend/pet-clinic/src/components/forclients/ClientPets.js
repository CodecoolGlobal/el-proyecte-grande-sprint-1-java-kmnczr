import React, { useState, useEffect } from 'react'

import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from 'react-router-dom'
import PetCardForClients from "./PetCardForClients"

const ClientPets = () => {
  const { auth } = useContext(AuthContext);
  const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

  const [owner, setOwner] = useState({empty: true})
    const [pets, setPets] = useState([])
    


  useEffect(() => {
    // 👇️ set isMounted to true
    let isMounted = true;

    async function fetchData() {
      const username = auth.user;

      const resultOwner = await axiosPrivate.get('/owners/username/' + username);
      const ownerId = resultOwner.data.id;
      console.log("ownerId: ", ownerId)


      //const resultOwner = await axiosPrivate.get('/owners/' + ownerId);
      const resultPets = await axiosPrivate.get('/pets/owner/' + ownerId);
      console.log(resultOwner)
      console.log(resultPets)

      // 👇️ only update state if component is mounted
      if (isMounted) {
        setOwner(resultOwner.data);
        setPets(resultPets.data);
      }
    }

    fetchData();

    return () => {
      // 👇️ when component unmounts, set isMounted to false
      isMounted = false;
    };
  }, []);


  return (
    <div>
    <div>
    
        <div>
        <br/>

        {(pets.length==0) &&
        <div>
            <h2>Currently I don't have any pets in the system.</h2>
            </div> }
        {(pets.length!=0) &&
            <div>
            <br/>
                <h1 className="add-label">My pets</h1>
                <div className='flexcontainer'>
                {pets.map(pet => {
                return (
                    <ul className="cards">
                      <div key={pet.id}>
                        <PetCardForClients pet={pet} />
                      </div>
                    </ul>
                );
              })}
                </div>
            </div>
        }
<br/>
<hr></hr>
<br/>

            <h1 className={"add-label"}>My details</h1><br/>
            <div className='flexcontainer profile-container'>
                <div className="card profile-card">
                    <div className="container profile-container">
                        <img className={"profile-img"}

                             src="https://smartblogger.com/wp-content/uploads/2020/12/client-relationships.jpg"

                             alt="profile-img"></img>
                        <h2 className={"profile-h2"}>{owner.firstName +" "+owner.lastName}</h2>
                        <small>Owner id: {owner.id}</small><br/>
                        <small>{owner.email}</small><br/>
                        <small>{owner.phoneNumber}</small><br/>
                        <div className="bar">
                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    <hr></hr>
    </div>
    </div>
  )
}

export default ClientPets
