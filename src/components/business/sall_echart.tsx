import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";

interface Props {

}

interface State {

}

const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    series: [
        {
            name: '利润',
            type: 'bar',
            label: {
                show: true,
                position: 'inside'
            },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true
            },
            data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'left'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};

export default class Page extends Component<Props, State> {
    render = () => {
    return (
        <div>
            <div className="title" 
                 style={{fontSize: "30px", "fontWeight": 600, color: "#4c4c4c", marginBottom: "60px"}}>
                成交趋势:
            </div>
            <ReactEcharts option={option}  
                              style={{ width: '600px',height: '660px' }}>

                </ReactEcharts>
        </div>
    )
    }
}