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
            <p className="footer-text">
              “Some people talk to animals. Not many listen though. That's the problem.”
            </p>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          petclinic.com
        </a>
      </div>
    </MDBFooter>
  );
}