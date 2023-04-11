import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { jobId } = useParams()
    const JobDetails = useLoaderData();
    console.log(jobId);

    const [jobDetails, setJobDetails] = useState([]);
    

    // console.log(JobDetails)

    // const jobData = jobs.find(job._id === jobId)
    //     console.log(jobData)

    useEffect(() => {
        if (JobDetails) {
            const jobData = JobDetails.find(JobDetail=>JobDetail._id === jobId)
            console.log(jobData)
            setJobDetails(jobData)
        }
    }, [])


    return (
        <div>
            <h2 className='text-center mt-4 fw-semibold'>Job Details</h2>
            <h1>{jobDetails.jobTitle}</h1>
            <div>
                <p>Job Description: {jobDetails.JobDescription}</p>
                <p>Job Responsibilities: {jobDetails.JobResponsibilities}</p>
                <p>Educational Requirements:</p>
                <p>{jobDetails.Education}</p>
                <p>Experiences:</p>
                <p>{jobDetails.Experienced}</p>
            </div>
        </div>
    );
};

export default JobDetails;