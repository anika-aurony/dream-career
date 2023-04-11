import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic1 from '../../assets/assets/Icons/Frame-4.png'
import pic2 from '../../assets/assets/Icons/Frame.png'
import './Jobs.css'

const Jobs = ({ job }) => {
    const { companyName, companyLogo, jobTitle, location, jobStatus, jobLocation, salary } = job
    return (
        <div>
            <Col className='card-height'>
            <Card style={{ height: '310px' }} >
                
                <Card.Body>
                <Card.Img  style={{ height: '50px', width: '110px' }} src={companyLogo} />
                    <Card.Title>{jobTitle}</Card.Title>
                    <h5 className='name'>{companyName}</h5>
                    <Card.Text>
                         <small className='jobStatus'>{jobLocation}</small> <small className='jobStatus'>{jobStatus}</small>
                         <p className='jobInfo mt-3'>
                            <img src={pic1} alt="" srcset="" style={{ height: '18px', width: '20px' }}/>
                            <small className='me-4'>{location}</small> 
                            <img src={pic2} alt="" srcset="" style={{ height: '18px', width: '20px' }}/>
                            <small>Salary: {salary}</small></p>
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Jobs;