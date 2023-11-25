import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,LabelList,
  ResponsiveContainer
} from "recharts";

const data = [{
  name: '',
  count: ' ',
}, {
  name: 'JavaScript',
  count: 80,
}, {
  name: 'React js',
  count: 80,
}, {
  name: 'CSS',
  count: 90,
}, {
  name: 'HTML',
  count: 90,
}];

function AboutCharts() {
  const formatLabel = (value) => (value !== ' ' ? `${value}%` : ' ');

  const isMobileScreen = ( ) => {
    let query = window.matchMedia('(max-width: 480px)')
    return query.matches
}

  return (
    
    <ResponsiveContainer width="100%" height="100%" >
    <BarChart data={data} layout="vertical" margin={isMobileScreen() ? { left: -40, right: 13} : { left: -40, right: 39} }>
      <XAxis
      textAnchor= "end" 
        dataKey="count"
        hide={true}
        scale="linear"
        tickLine={false}
      />
      <YAxis
        axisLine={false}
        dataKey="name"
        minTickGap={0}
        reversed={true}
        tickLine={false}
        type="category"
        fontSize={isMobileScreen() ? '4vw' : '1vw'}
        width={85}
      />
      <Bar dataKey="count">
        <LabelList dataKey="count" position="right" formatter={formatLabel} fill="#5e5e5e"  fontSize={isMobileScreen() ? '4vw' : '1vw'}/>
      </Bar>
    </BarChart>
  </ResponsiveContainer>  );
}
export default AboutCharts;