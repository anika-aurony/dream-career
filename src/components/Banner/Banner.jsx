import React from 'react';
import { Button } from 'react-bootstrap';
import pic from '../../assets/assets/All Images/P3OLGJ1 copy 1.png';
import './Banner.css'


const Banner = () => {
    return (
        <div className='d-md-flex'>
             <div className='banner-text'>
                <h1>One Step <br /> Closure to Your <br /> <span className='color'>Dream Job</span></h1>
                <p>Welcome to the online Job Portal. We are here with the maximum <br /> jobs available. We assure you will get the job you want.</p>
                <Button>Get Started</Button>
             </div>
             <div >
                <img src={pic} alt="" srcset="" />
                
            </div>   
        </div>
    );
};

export default Banner;