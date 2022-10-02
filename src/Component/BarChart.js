import React from 'react';
import {Bar} from 'react-chartjs-2';


const BarChart = ({chartData}) => {
  return (
    <div className=' w-1/2 mx-auto'>
        <Bar type='bar' data={chartData} options={{ backgroundColor: '#ABC9FF', responsive: 'true'}}/>
    </div>
        
  )
}

export default BarChart