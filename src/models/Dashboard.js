import { Jumbotron, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'
import CardRow from './CardRow'
import InfoTable from './InfoTable'
import Header from './Header'

const Dashboard = ({ data }) => {
    return (
        <>
            <div className="color-div-blue" />
            
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