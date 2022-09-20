import { useNavigate } from "react-router-dom"
import myImage from '../images/stop.jpg'
const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className='unauth'>
            <h1>Unauthorized</h1>
            <br/>
            <div className='stop'>
                <img src={myImage} width={500} alt="stop" />
            </div>
            <br/>
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button type="button" className="btn btn-outline-secondary" data-mdb-ripple-color="dark" onClick={goBack}>Go Back</button>
            </div>
            <br/>
        </section>
    )
}

export default Unauthorized