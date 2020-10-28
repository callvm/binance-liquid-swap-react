import { Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import CardRow from './CardRow'
import InfoTable from './InfoTable'

const Dashboard = ({ data }) => {
    return (
        <>
            <div className="color-div" />
            <Jumbotron>
                <Container>
                    <CardRow data={data} />
                    <InfoTable data={data} />
                </Container>
            </Jumbotron>
        </>
    )
}

export default Dashboard