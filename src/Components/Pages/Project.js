import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const Project = () => {
    return (
        <div className='my-5'>
            <div>
                <h5 className='text-center'>Projects</h5>
                <h2 className='custom-color text-center font-weight-bold'>Discover the latest Interior Design available today</h2>
            </div>
            <div className="my-5">
                <MDBRow>
                    <MDBCol sm='12' md='6' lg='4'>
                        <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardImage src='assets/image/bernard-hermant-6ftZuO_-b64-unsplash 1.png' position='top' height={396} alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle className='custom-color text-center'>Villa on Washington Avenue</MDBCardTitle>
                                <MDBCardText  className='custom-color text-center'>
                                Dhaka, Bangladesh
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='12' md='6' lg='4'>
                        <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardImage src='assets/image/Mask Group.png' position='top' height={396} alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle className='custom-color text-center'>Luxury villa in Rego Park</MDBCardTitle>
                                <MDBCardText  className='custom-color text-center'>
                                Dhaka, Bangladesh
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm='12' md='6' lg='4'>
                        <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardImage src='assets/image/Mask Group-1.png' height={396} position='top' alt='...' />
                            <MDBCardBody>
                                <MDBCardTitle className='custom-color text-center'>Gorgeous house</MDBCardTitle>
                                <MDBCardText  className='custom-color text-center'>
                                    Dhaka, Bangladesh
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
};

export default Project;