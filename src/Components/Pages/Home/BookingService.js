import { Button } from 'react-bootstrap';
import React from 'react';

const BookingService = () => {
    return (
        <div className='my-5'>
            <div className='d-flex justify-content-between'>
                <div className='mt-2'>
                    <h1 className='font-bold custom-color'>We Build <br></br>Your Dream</h1>
                    <p>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                    <Button style={{ backgroundColor: '#251D58', color: 'white', width:'126px' }}>Booking</Button> 
                </div>
                <div>
                    <img className='img-fluid' width={570} height={500} src="assets/image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png" alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default BookingService;