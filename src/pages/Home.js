import Dashboard from '../models/Dashboard'
import Header from '../models/Header'
import Footer from '../models/Footer'
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = ({ toggleTheme, theme }) => {

    const [results, setResults] = useState(null)

    useEffect(() => {
        axios
            .get('http://144.91.117.14:3001/pools')
            .then(result => setResults(result.data))
    }, [])

    if (results) {
        return (
            <>
                <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>
                    <Header toggleTheme={toggleTheme} theme={theme}/>
                    <Dashboard data={results} />           
                </div>
            </>
        )
    } else {
        return (
            <div style={{ top: '40%', left: '50%', position: 'absolute' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

}

export default Home