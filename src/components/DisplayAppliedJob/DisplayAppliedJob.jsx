import React from 'react';
import ShowAppliedJob from '../ShowAppliedJob/ShowAppliedJob';

const DisplayAppliedJob = ({jobCarts}) => {
    return (
        <div>
            {
                jobCarts.map(cart => <ShowAppliedJob
                    key={cart._id}
                    cart={cart}
                ></ShowAppliedJob>)
            }
            
        </div>
    );
};

export default DisplayAppliedJob;