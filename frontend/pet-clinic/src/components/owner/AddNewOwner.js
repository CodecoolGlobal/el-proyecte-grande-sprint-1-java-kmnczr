import React, { useState } from 'react'
import myImage from '../../../src/images/cat_1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddNewOwner = () => {

    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    let newUser = {"firstName": "Tina", "lastName": "Turner", "petIds": null, "email": "tina@turner.com" }

    const addNewOwner = () => {
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.phoneNumber = phoneNumber;
        
        handelAddNewOwner(newUser);
    }

    const handelAddNewOwner = async (newUser) => {
        const response = await axiosPrivate.post('/owners/add', newUser);
        navigate("/owners");
      }
        

  return (
    <div className='flexcontainer'>
    {/*    <div>*/}
    {/*    <br />*/}
    {/*   */}
    {/*<img src={myImage} width={350} alt="doctor animals"/>*/}
    {/*</div>*/}

    <div>
        
        <br/>
        <h1 className={"add-label"}>Add new client</h1>
        <br/>

        <form onSubmit={(e) => {e.preventDefault(); addNewOwner()}}>

            <input class="textbox" type="text" placeholder="Firstname" required value={firstName} onChange={(e) => {setFirstName(e.target.value)}}  /><br /><br/>

            <input class="textbox" type="text" placeholder="Lastname" required value={lastName} onChange={(e) => {setLastName(e.target.value)}}/><br /><br/>

            <input class="textbox" type="email" placeholder="E-mail" required value={email} onChange={(e) => {setEmail(e.target.value)}}/><br /><br/>

            <input class="textbox" type="text" placeholder="Phone number" required value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/><br /><br/>
        
            <br />
            <input type="submit" value="Add New Client" class="button"/>
        </form>
        </div>
        
    </div>
  )
}

export default AddNewOwner;
