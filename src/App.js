import React, { useState } from "react";
import BarChart from "./Component/BarChart";
import DoughnutChart from "./Component/DoughnutChart";
import LineChart from "./Component/LineChart";
import { UserData } from './Data';
import { Chart } from 'chart.js/auto';
import PolarChart from "./Component/PolarChart";
import RadarChart from "./Component/RadarChart";

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.year),
    datasets: [{
      label: "User Gained",
      data: UserData.map((item) => item.userGain),
    }]
  });

  const doughnutData = {
    labels: UserData.map((item) => item.year),
    datasets: [{
      label: 'My Dataset',
      data: UserData.map((item) => item.userGain),
      backgroundColor: ['blue', 'yellow', 'green', 'red', 'purle'],
      hoverOffset: 20
    }]
  }

  const lineData = {
    labels: UserData.map((item) => item.year),
    datasets: [{
      label: 'User Gained',
      data: UserData.map((item) => item.userGain),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      backgroundColor: ['red']
    }]
  }

  const PolarData = {
    labels: UserData.map((item) => item.year),
    datasets: [{
      label: 'User Gained',
      data: UserData.map((item) => item.userGain),
      backgroundColor: ['blue', 'yellow', 'green', 'red', 'purle'],
      hoverOffset: 20
    }]
  }

  const RadarData = {
    labels: UserData.map((item) => item.year),
    datasets: [{
      label: 'User Gained',
      data: UserData.map((item) => item.userGain),
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },
    {
      label: 'User Lost',
      data: UserData.map((item) => item.userLost),
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }
    ]
  }

  return (
    <div>
      <BarChart chartData={userData} />
      <DoughnutChart chartData={doughnutData} />
      <LineChart chartData={lineData} />
      <PolarChart chartData={PolarData} />
      <RadarChart chartData={RadarData}/>
    </div>
  );
}

export default App;
