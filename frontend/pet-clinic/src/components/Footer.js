import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import pets from '../../src/images/pets.jpg'

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left' >
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer text</h5>

            <p>
              “Some people talk to animals. Not many listen though. That's the problem.”
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <div className='flexcontainer'>
              <img src={pets} width={500} alt="pets" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}