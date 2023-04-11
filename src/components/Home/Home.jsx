import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import { Button, Row } from 'react-bootstrap';

const Home = () => {
    // const categories = useLoaderData();
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

    const sortedJobs = jobs.slice(0, 4)

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
                    <Row xs={1} md={2} className="g-4">
                        {
                            sortedJobs.map(job => <Jobs
                                key={job.id}
                                job={job}
                            ></Jobs>)
                        }
                    </Row>
                </div>
                <div className='text-center my-3'>
                <Button  variant="primary">See All Jobs</Button>
                </div>

            </div>
        </div>
    );
};

export default Home;