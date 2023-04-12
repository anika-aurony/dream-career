import React from 'react';

import { Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {
    const data01 = [
        { name: "Assignment 1", value: 60 },
        { name: "Assignment 2", value: 59 },
        { name: "Assignment 3", value: 60 },
        { name: "Assignment 4", value: 60 },
        { name: "Assignment 5", value: 30 },
        { name: "Assignment 6", value: 60 },
        { name: "Assignment 7", value: 60 }
    ];


    return (
        <div>
            <h1>Statistics</h1>
            <PieChart width={1000} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    
                    label
                />
                <Pie
                    dataKey="value"
                    data={data01}
                    cx={500}
                    cy={200}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Statistics;