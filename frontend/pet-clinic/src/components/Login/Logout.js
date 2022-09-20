import React from 'react'
import AuthContext from "../../context/AuthProvider";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import myImage from '../../../src/images/logout_dog.jpg';


const Logout = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const username = auth.name;

    const logoutUser = () => {
        setAuth({})
      }

    useEffect(() => {
        console.log("use effect in logout");
        logoutUser();

      }, [])



  return (
    <div className="logged-out-text">
      <h2>All done! You logged out successfully!</h2>
        <br/>
        <br/>
      <p>Thank you for using our application!</p>
      <br/>
      <br/>
        <h3>See you later!</h3>
        <br/>
            <div className='bye-dog'>
                <img src={myImage} width={500} alt="logout_dog" />
            </div>
        <br/>
      <Link to={"/login"}><button className='btn btn-outline-secondary'>Back to Login</button></Link>
      <br/>
      <br/>

    </div>
  )
}

export default Logout
