import React, { Component } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
class RechartsDemo extends Component {
  handelClick = entry => {
    console.log(entry)
  }
  render() {
    const data = [
      { name: 'react', value: 400 },
      { name: 'angular', value: 300 },
      { name: 'vue', value: 300 },
      { name: 'backbone', value: 200 }
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    // const RADIAN = Math.PI / 180
    // const renderCustomizedLabel = ({
    //   cx,
    //   cy,
    //   midAngle,
    //   innerRadius,
    //   outerRadius,
    //   percent,
    //   index
    // }) => {
    //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    //   const x = cx + radius * Math.cos(-midAngle * RADIAN)
    //   const y = cy + radius * Math.sin(-midAngle * RADIAN)

    //   return (
    //     <text
    //       x={x}
    //       y={y}
    //       fill="white"
    //       textAnchor={x > cx ? 'start' : 'end'}
    //       dominantBaseline="central"
    //     >
    //       {`${(percent * 100).toFixed(0)}%`}
    //     </text>
    //   )
    // }
    return (
      <div>
        <PieChart
          width={800}
          height={400}
          onMouseEnter={this.onPieEnter}
          style={{ margin: '0 auto' }}
        >
          <Pie
            data={data}
            cx={400}
            cy={200}
            labelLine={true}
            label
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={20}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
                onClick={() => this.handelClick(entry)}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    )
  }
}

export default RechartsDemo
