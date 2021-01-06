import {
    Bar, BarChart, Legend, Line, LineChart, Tooltip, YAxis
} from 'recharts';
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react'

const Chart = ({ type, data }) => {

    const [currentData, setCurrentData] = useState([])
    const [days, setDays] = useState()

    useEffect(() => {
        loadDataForDays(30)
    }, [data])

    const formatTime = (time) => {
        return time.substr(0, time.length - 5).replace('T', ' ')
    }

    const formatNumber = (number) => {
        return Number(number).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload) {
            if (type === 'apy') {
                const coins = payload[0].payload.coins
                const postive = payload[0].value > 0
                return (
                    <div className="custom-tooltip">
                        <p className="label"><b>{formatTime(payload[0].payload.date).split(' ')[0]}</b></p>
                        {
                            postive ? (<p style={{ color: 'green', fontWeight: 'bold' }}>{payload[0].value + '%'}</p>) :
                                (<p style={{ color: 'red', fontWeight: 'bold' }}>{payload[0].value + '%'}</p>)
                        }
                        <p className="intro"><b>{coins[0].name}</b> : {formatNumber(coins[0].amount)}</p>
                        <p className="intro"><b>{coins[1].name}</b> : {formatNumber(coins[1].amount)}</p>
                    </div>
                );
            }
            if (type === 'liquidity') {
                const postive = payload[0].payload.APY > 0
                return (
                    <div className="custom-tooltip">
                        <p className="label"><b>{formatTime(payload[0].payload.date).split(' ')[0]}</b></p>
                        {
                            postive ? (<p style={{ color: 'green', fontWeight: 'bold' }}>{payload[0].payload.APY + '%'}</p>) :
                                (<p style={{ color: 'red', fontWeight: 'bold' }}>{payload[0].payload.APY + '%'}</p>)
                        }
                        <p className="intro"><b>{payload[0].payload.coin1_name}</b> : {formatNumber(payload[0].payload.coin1_amount)}</p>
                        <p className="intro"><b>{payload[0].payload.coin2_name}</b> : {formatNumber(payload[0].payload.coin2_amount)}</p>
                    </div>
                );
            }
        }
        return (<></>)
    };


    const loadDataForDays = (amount) => {

        let parsedData = []

        if (type === 'apy') {
            parsedData = data.slice(0, amount).reverse().map(item => {
                return { 'APY': Number((item.amount * 100).toFixed(2)), 'date': item.time, 'coins': item.coins }
            })
            setCurrentData(parsedData)
        }
        if (type === 'liquidity') {

            parsedData = data.slice(0, amount).reverse().map(item => {
                return {
                    'APY': Number((item.amount * 100).toFixed(2)), 'date': item.time, 'coin1_name': item.coins[0].name, 'coin1_amount': item.coins[0].amount, 'coin2_name': item.coins[1].name, 'coin2_amount': item.coins[1].amount
                }
            })

            setCurrentData(parsedData)
        }
        setDays(parsedData.length)
    }

    if (type === 'apy') {
        if (days === 0) return (
            <div style={{ height: '300px', width: '100%' }} className='d-flex justify-content-center align-items-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
        return (
            <div className="chart-inner-div">
                <h4 className="chart-heading">{days} day APY %</h4>
                <hr />
                <div style={{ padding: '0px 0px 20px 10px' }}>
                    <button class='chart-btn' onClick={() => loadDataForDays(100)}>Max</button>
                    <button class='chart-btn' onClick={() => loadDataForDays(30)}>30</button>
                    <button class='chart-btn' onClick={() => loadDataForDays(7)}>7</button>
                </div>
                <BarChart
                    width={500}
                    height={300}
                    data={currentData}
                    margin={{
                        top: 5, right: 15, left: -10, bottom: -5,
                    }}
                >

                    <Tooltip content={<CustomTooltip />} />
                    <YAxis />
                    <Bar dataKey="APY" fill="rgb(255, 255, 255, 0.5)" />
                </BarChart>
            </div>
        )
    } else if (type === 'liquidity') {
        if (days === 0) return (
            <div style={{ height: '300px', width: '100%' }} className='d-flex justify-content-center align-items-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
        let largest = 0
        currentData.forEach(data => {
            if (Number(data.coin1_amount) > largest) largest = Number(data.coin1_amount)
            if (Number(data.coin2_amount) > largest) largest = Number(data.coin2_amount)

        })
        largest = (largest).toFixed(0)
        console.log(largest)

        return (

            <div className="chart-inner-div">
                <h4 className="chart-heading">{days} day Liquidity</h4>
                <hr />
                <div style={{ padding: '0px 0px 20px 10px' }}>
                    
                        <button class='chart-btn' onClick={() => loadDataForDays(100)}>Max</button>
                        <button class='chart-btn' onClick={() => loadDataForDays(30)}>30</button>
                        <button class='chart-btn' onClick={() => loadDataForDays(7)}>7</button>
                   
                    
                </div>
                <LineChart
                    width={500}
                    height={300}
                    data={currentData}
                    margin={{
                        left: 30,
                        right: 10,
                        top: 10
                    }}
                >

                    <Tooltip content={<CustomTooltip />} />
                    <YAxis domain={[0, Number(largest) + 1]} />
                    <Line dataKey="coin1_amount" stroke="rgb(120, 120, 120, 0.5)" />
                    <Line dataKey="coin2_amount" stroke="rgb(255, 255, 255, 0.5)" />
                </LineChart>
            </div>
        )
    } else {
        return (<></>)
    }



}

export default Chart