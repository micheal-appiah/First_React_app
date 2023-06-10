import React from 'react';
import './registration_page.css';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';

function RegistrationPage() {
  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Registration</h2>
              <p className="text-white-50 mb-5">Please fill in the required information!</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='First Name' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Last Name' id='formControlLg' type='text' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='text' size="lg" />
              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Terms & Conditions</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Submit
              </MDBBtn>
              <div>
                <p className="mb-0">Already have an account? <a href="#!" className="text-white-50 fw-bold">Sign in</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegistrationPage;




