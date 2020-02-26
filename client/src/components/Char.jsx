import React, {useEffect} from 'react'
import Chart from "chart.js"


export const Char = ({data, show}) => {
    const chartRef = React.createRef()


    useEffect(() => {
        const {labels, clicks, views} = parseData(data)

        initChart(labels, clicks)
        initChart(labels, views)
    }, [data])



    const parseData = (data) => {
        let labels = []
        let views = []
        let clicks = []

        data.forEach(item => {
            labels.push(item.date)
            views.push(item.page_view)
            clicks.push(item.clicks)
        })

        return {
            labels, views, clicks
        }
    }

    const initChart = (labels, data) => {
        const myChartRef = chartRef.current.getContext("2d")
        chartRef.current.height = 460
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels,
                datasets: [
                    {
                        label: null,
                        borderColor: "#3A80BA",
                        // caretSize: 2,
                        fill: false,
                        data,
                    }
                ]
            }, options: {
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                }
            }
        });
    }


    return (
        <canvas ref={chartRef} />
    )
}