import React from 'react';
import Project from '../Project';
import BookingService from './BookingService';

const Home = () => {
    return (
        <div>
            <BookingService></BookingService>
            <Project></Project>
        </div>
    );
};

export default Home;