import { useParams } from 'react-router-dom'
import { Container, Col, Row } from "react-bootstrap"

const Stats = () => {

    const coinName = useParams().id.replace('-', '/')

    return (
        <>
            <div className="color-div-pink" />
            <div className="chart-div">
                <Container>
                    <span class='back-arrow' onClick={() => window.location = '/'}>{'Home'}</span>
                    <span class='back-arrow' onClick={() => window.location = '/chart/' + coinName.replace('/', '-')}>{'Charts'}</span>
                    <h1 className="chart-title">{coinName} Stats</h1>
                    <hr />
                    <Row>
                        
                    </Row>

                </Container>
            </div>
        </>
    )

}

export default Stats