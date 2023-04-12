import React from 'react';
import { Button, Row } from 'react-bootstrap';
import Jobs from '../Jobs/Jobs';

const ShowJob = ({ sortedJobs }) => {
    console.log(sortedJobs)
    const sortedJobs1 = sortedJobs 
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    sortedJobs1.map(job => <Jobs
                        key={job.id}
                        job={job}
                    ></Jobs>)
                }

            </Row>

        </div>
    );
};

export default ShowJob;