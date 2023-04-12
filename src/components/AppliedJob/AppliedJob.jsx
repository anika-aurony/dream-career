import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import ShowAppliedJob from '../ShowAppliedJob/ShowAppliedJob';

const AppliedJob = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
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
    return (
        <div>
            <h1 className='text-center my-5'>Applied Jobs</h1>
            {
                jobCarts.map(cart => <ShowAppliedJob
                    key={cart._id}
                    cart={cart}
                ></ShowAppliedJob>)
            }
        </div>
    );
};

export default AppliedJob;