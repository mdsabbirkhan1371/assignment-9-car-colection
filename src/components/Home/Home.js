import React, { useState } from 'react';
import './Home.css'
import images from '../../images/img2.jpg'
import useReviewer from '../hooks/useReviers';
import Review3 from '../Review3/Review3';
import SeeMore from '../SeeMore/SeeMore';


const Home = () => {
    return (
        <div className='home-container'>
            <div className='details'>
                <h1>Your New Car Is here...</h1>
                <h1 className='partial'>Choose Your Special Car</h1>
                <p>A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.

                    It is hard for anyone today to imagine what life was like before there were cars. Cars and other motor vehicles have made it easy for people to travel within a city or across a continent. They have also influenced where people live. People once had to live near their jobs, but now they can live farther away and drive to work.</p>


                <div className='button'>
                    <button className='btn'>Live Demo</button>
                </div>
            </div>

            <div>
                <img src={images} alt="" />
            </div>

            <SeeMore></SeeMore>
        </div >
    );
};

export default Home;