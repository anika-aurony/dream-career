import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import pic1 from '../../assets/assets/Icons/Frame-4.png'
import pic2 from '../../assets/assets/Icons/Frame.png'
import pic3 from '../../assets/assets/Icons/Frame-1.png'
import pic4 from '../../assets/assets/Icons/Frame-2.png'
import pic5 from '../../assets/assets/Icons/Frame-3.png'
import pic from "../../assets/assets/All Images/Vector-1.png"
import banner from "../../assets/assets/All Images/Vector.png"
import './JobDetails.css'
import { Button } from 'react-bootstrap';

const JobDetails = () => {
    const { jobId } = useParams()
    const JobDetails = useLoaderData();
    console.log(jobId);

    const [jobDetails, setJobDetails] = useState([]);


   

    useEffect(() => {
        if (JobDetails) {
            const jobData = JobDetails.find(JobDetail => JobDetail._id === jobId)
            console.log(jobData)
            setJobDetails(jobData)
        }
    }, [])
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        console.log(product)
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product._id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product._id)
    }


    return (
        <div>

            <div className='d-flex' style={{ height: '300px', position: 'relative'  }}>
                <img style={{ height: '150px', width: '200px', position: 'absolute', top: '150px' }} src={banner} alt=""  />
                <h1 style={{position: 'absolute', left: '400px',  top: '22%'}} className='text-center my-5'>Job Details</h1>
                <img style={{ height: '200px', width: '220px', position: 'absolute', top: '-60px',right: '22px', }} src={pic} alt=""  />
            </div>

            <div className='container '>
                <div className='detail-container m-5' >
                    <p><span className='fw-bold'>Job Description:</span> {jobDetails.JobDescription}</p>
                    <p><span className='fw-bold'>Job Responsibilities:</span> {jobDetails.JobResponsibilities}</p>
                    <p className='fw-bold'>Educational Requirements:</p>
                    <p>{jobDetails.Education}</p>
                    <p className='fw-bold'>Experiences:</p>
                    <p>{jobDetails.Experienced}</p>
                </div>
                <div className=' my-5'>
                    <div className='cart-container'>
                        <span className='fw-bold'>Job Details</span>
                        <hr />

                        <p><img src={pic2} alt="" srcset="" style={{ height: '18px', width: '20px' }} />
                            <span className='fw-bold ps-1'>Salary:</span> {jobDetails.salary} Per-month</p>
                        <p><img src={pic3} alt="" srcset="" style={{ height: '18px', width: '20px' }} />
                            <span className='fw-bold ps-1'>Job TiTle:</span> {jobDetails.jobTitle}</p>
                        <span className='fw-bold'>Contact Information</span>
                        <hr />
                        <p><img src={pic4} alt="" srcset="" style={{ height: '18px', width: '20px' }} /><span className='fw-bold ps-1'>Phone:</span> {jobDetails.phone}</p>
                        <p><img src={pic5} alt="" srcset="" style={{ height: '18px', width: '20px' }} /><span className='fw-bold ps-1'>Email:</span> {jobDetails.email}</p>
                        <p><img src={pic1} alt="" srcset="" style={{ height: '18px', width: '20px' }} /><span className='fw-bold ps-1'>Address:</span> {jobDetails.location}</p>
                    </div>
                    <Button className='my-3' onClick={()=>handleAddToCart(jobDetails)}>Apply Now</Button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;