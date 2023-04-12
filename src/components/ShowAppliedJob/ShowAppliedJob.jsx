import React from 'react';
import './ShowAppliedJob.css'
import { Button } from 'react-bootstrap';
import pic1 from '../../assets/assets/Icons/Frame-4.png'
import pic2 from '../../assets/assets/Icons/Frame.png'

const ShowAppliedJob = ({ cart }) => {
    const { jobTitle, companyName, jobLocation, jobStatus, salary, location } = cart
    console.log(cart)
    return (
        <div className='applied-job '>
            <img src={cart.companyLogo} alt="" className='image' />
            <div className='applied-detail'>
                <h3 className='product-title'>{jobTitle}</h3>
                <h5 className=''>{companyName}</h5>
                <small className='jobStatus'>{jobLocation}</small> <small className='jobStatus'>{jobStatus}</small>
                <p className='jobInfo mt-3'>
                    <img src={pic1} alt="" srcset="" style={{ height: '18px', width: '20px' }} />
                    <small className='me-1'>{location}</small>
                    <img src={pic2} alt="" srcset="" style={{ height: '18px', width: '20px' }} />
                    <small>Salary: {salary}</small></p>

            </div>
            <Button>View Details</Button>

        </div>
    );
};

export default ShowAppliedJob;