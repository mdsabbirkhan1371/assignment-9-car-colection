import React from 'react';
import './Dashboard.css'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 3241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 5423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 1726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 5729,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 4601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 15670,
            "revenue": 61000
        }
    ]

    return (

        <div className='dash-board'>
            <div style={{ marginBottom: "50px", marginTop: "30px" }}>
                <h3>This is an example for Line Chart..</h3>
                <LineChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="investment"></YAxis>
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip></Tooltip>
                    <Line type="monotone" dataKey="sell" stroke="indigo" activeDot={{ r: 8 }}></Line>
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />

                </LineChart>
            </div>

            <div>
                <h3>This is an example for Bar-chart</h3>
                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="red" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

        </div>


    );
};

export default Dashboard;