import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import { Button, Row } from 'react-bootstrap';
import ShowJob from '../ShowJob/ShowJob';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categoryData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const [display, setDisplay] = useState(true)
    let sortedJobs = jobs.slice(0, 4);
    let s = true;

    const handleShowAllJob = () => {
        
        return setDisplay(false)
    }

    // console.log(jobs)
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
            <div>
                <h2 className='text-center mt-4 fw-semibold'>Featured Jobs</h2>

                <p className='text-center px-5 mb-4'><small>Find the job opportunities with all the informations you need. Its your future.</small></p>
                <div>
                    {/* <ShowJob sortedJobs={sortedJobs}></ShowJob> */}
                    {
                        display ? <ShowJob sortedJobs={sortedJobs}></ShowJob> : <ShowJob sortedJobs={jobs}></ShowJob>
                    }
                </div>
                <div className='text-center my-3'>
                    {
                        display ?  <Button variant="primary" onClick={handleShowAllJob}>See All Jobs</Button> : ''
                    }
                    
                </div>

            </div>
        </div>
    );
};

export default Home;