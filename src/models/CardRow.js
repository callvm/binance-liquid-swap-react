import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import CustomCard from './CustomCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./cardrow.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

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



                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                >
                    {data.pools.map(pool => {
                        return (
                            <div key={pool.name} style={{ padding: "10px", width: '100%' }}>
                                <CustomCard key={pool.name} data={pool} />
                            </div>
                        )
                    })}
                </Carousel>


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