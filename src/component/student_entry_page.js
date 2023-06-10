import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} 
 from 'mdb-react-ui-kit';

function StudentInfoEntryPage() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Student Information
          </h1>
        </MDBCol>

        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='firstName' type='text' />
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='lastName' type='text' />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' />
              <MDBInput wrapperClass='mb-4' label='Phone number' id='phoneNumber' type='tel' />
              <MDBInput wrapperClass='mb-4' label='Level' id='level' type='text' />
              <MDBInput wrapperClass='mb-4' label='Hall of Residence' id='hallOfResidence' type='text' />
              <MDBInput wrapperClass='mb-4' label='Program' id='program' type='text' />
              <MDBInput wrapperClass='mb-4' label="Guardian's Phone Number" id='guardianPhoneNumber' type='tel' />

              <MDBBtn className='w-100 mb-4' size='md'>Submit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default StudentInfoEntryPage;
