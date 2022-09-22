import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AddNewPet = ({handelAddNewPet}) => {

    const petTypes = ["DOG", "CAT", "CROCODILE", "BUNNY", "FISH"]

    let { ownerId } = useParams();
    const [name, setName] = useState('')
    const [petType, setPetType] = useState('')
    const [birthDate, setBirthDate] = useState('')

    let newPet = {"name": "Buksi", "birthDate": "2022.08.08.", "type": "DOG"}

    const addNewPet = () => {
        newPet.name = name;
        newPet.type = petType;
        newPet.birthDate = birthDate;
        console.log("birthdate: " + birthDate)
        handelAddNewPet(newPet, ownerId);
    
    }

  return (
    <div className='flexcontainer'>


    <div>
        
        <br/>
        <h1 className={"add-label"}>Add new pet</h1><br/>

        <form onSubmit={(e) => {e.preventDefault(); addNewPet()}} className="form">


            <input class="textbox" placeholder="Name" type="text" required value={name} onChange={(e) => {setName(e.target.value)}}  /><br/><br/>

            <input class="textbox" placeholder="Birth date" type="date" required value={birthDate} onChange={(e) => {setBirthDate(e.target.value)}}/><br/><br/>


                <select class="textbox" id="type" name="type" required onChange={(e) => {setPetType(e.target.value)}}>
                <option key="1" value="" disabled selected>Choose pet type</option>
                {petTypes.map(petType =>
                    <option key={petType} value={petType}>{petType}</option>
                    )};
                </select>
        
            <br /><br />
            
            <input type="submit" value="Add New Pet" class="button" />
        </form>
        </div>
        
    </div>
  )
}

export default AddNewPet;
