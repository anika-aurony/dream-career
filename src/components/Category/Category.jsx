import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Category.css'

const Category = ({ category }) => {
    console.log(category)
    const { name, logoImg, jobAvailable } = category
    return (
        <Card style={{ width: '17rem', height: "180px" }} className='card1 mb-3'>
            <Card.Img style={{ width: '3rem', height: "40px" }}  variant="top" src={logoImg} />
            <Card.Body>
                <Card.Title style={{ color: 'rgba(126, 144, 254, 1)'}} className="mb-2 ps-0">{name}</Card.Title>
                <Card.Text style={{color: "rgba(163, 163, 163, 1)"}}>
                    {jobAvailable}+ Jobs Available
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default Category;