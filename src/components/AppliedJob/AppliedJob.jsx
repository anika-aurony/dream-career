import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import pic from "../../assets/assets/All Images/Vector-1.png"
import pic1 from "../../assets/assets/All Images/Vector.png"
import ShowAppliedJob from '../ShowAppliedJob/ShowAppliedJob';
import { Button } from 'react-bootstrap';
import DisplayAppliedJob from '../DisplayAppliedJob/DisplayAppliedJob';

const AppliedJob = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [remote, setRemote] = useState([])
    const [shown, setShown] = useState(true)
    // console.log(cart)
    useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const jobCarts = cart
    // console.log(jobCarts)

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleOnsiteJob = () => {
        const filterJob = jobCarts.filter(job1 => job1.jobLocation === "On-site")
        console.log(filterJob)
        setRemote(filterJob)
        return setShown(false)
    }

    const handleRemoteJob = () => {
        const filterJob = jobCarts.filter(job1 => job1.jobLocation === 'Remote')
        console.log(filterJob)
        setRemote(filterJob)
        return setShown(false)

    }
    return (
        <div>
            <div className='d-flex' style={{ height: '300px', position: 'relative' }}>
                <img style={{ height: '100px', width: '240px', position: 'absolute', top: '150px' }} src={pic1} alt="" />
                <h1 style={{ position: 'absolute', left: '400px', top: '22%' }} className='text-center my-5'>Applied Jobs</h1>
                <img style={{ height: '200px', width: '220px', position: 'absolute', top: '-60px', right: '22px', }} src={pic} alt="" />
            </div>
            <div className='text-end my-3'>
                <Button variant='primary' className='m-2' onClick={handleRemoteJob}>Sort Remote</Button>
                <Button variant='primary' onClick={handleOnsiteJob}>Sort On-site</Button>
            </div>

            {
                shown ?
                    <DisplayAppliedJob
                        jobCarts={jobCarts}
                    ></DisplayAppliedJob>
                    :
                    <DisplayAppliedJob
                        jobCarts={remote}
                    ></DisplayAppliedJob>

            }



        </div>
    );
};

export default AppliedJob;