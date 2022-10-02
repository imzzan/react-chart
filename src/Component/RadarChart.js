import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const RadarChart = ({chartData}) => {
  return (
    <div className=' w-1/2 mx-auto mt-20'>
        <Radar data={chartData}/>
    </div>
  )
}

export default RadarChart