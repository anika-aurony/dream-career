import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <div>
                <h2 className='text-center mt-4 fw-semibold'>Job Category List</h2>

                <p className='text-center px-5 mb-4'><small>Explore your Dream job with us.</small></p>
                <div className='d-md-flex gap-4 mb-1'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;