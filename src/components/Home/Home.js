import React from 'react';
import './Home.css'
import images from '../../images/img2.jpg'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='details'>
                <h1>Your New Car</h1>
                <h1 className='partial'>Your Special Car</h1>
                <p>A car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.

                    It is hard for anyone today to imagine what life was like before there were cars. Cars and other motor vehicles have made it easy for people to travel within a city or across a continent. They have also influenced where people live. People once had to live near their jobs, but now they can live farther away and drive to work.</p>
            </div>
            <div>
                <img src={images} alt="" />
            </div>
        </div>
    );
};

export default Home;