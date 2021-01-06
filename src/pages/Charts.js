import { Container, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import './chart.css'
import Chart from '../models/Chart'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Charts = () => {


    const coinName = useParams().id.replace('-', '/')
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .post('http://144.91.117.14:3001/pools/coin', {
                interval: 24,
                total: 100,
                coin: coinName
            })
            .then(response => {
                setData(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="color-div-pink" />
            <div className="chart-div">
                <Container>
                    <span class='back-arrow' onClick={() => window.location = '/'}>{'Home'}</span>
                    <span class='back-arrow' onClick={() => window.location = '/stats/' + coinName.replace('/','-')}>{'Stats'}</span>
                    <h1 className="chart-title">{coinName} Charts</h1>
                    <hr />
                    <Row>
                        <Col style={{zIndex: 4}}>
                            <Chart type='apy' data={data} />
                        </Col>
                        <Col style={{zIndex: 4}}>
                            <Chart type='liquidity' data={data} />
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Charts