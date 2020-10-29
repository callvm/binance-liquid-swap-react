import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import CustomCard from './CustomCard'

const CardRow = ({ data }) => {

    if (data) {
        return (
            <>
                <div className="img-div">
                    <img className="logo" src='https://cryptologos.cc/logos/binance-coin-bnb-logo.png' alt='' />
                </div>
                <h1>Binance Liquid Stats</h1>
                <h3>In-depth pool statistics</h3>
                <hr />
                
                <Row xs={1} md={4} lg={6} className="justify-content-md-center" style={{ paddingTop: "20px" }}>
                    {data[data.length - 1].pools.map(pool => {
                        return <CustomCard key={pool.name} data={pool} />
                    })}
                </Row>
                
            </>
        )
    } else {
        return (
            <>

            </>
        )
    }
}

export default CardRow