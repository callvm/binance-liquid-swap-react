import Dashboard from '../models/Dashboard'

import Footer from '../models/Footer'
import { Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = ({toggleTheme}) => {

    const [results, setResults] = useState(null)

    useEffect(() => {
        axios
            .get('http://144.91.117.14:3001/pools')
            .then(result => setResults(result.data))
    }, [])

    if (results) {
        return (
            <>  
                <button onClick={() => toggleTheme()}>Test</button>
                <Dashboard data={results} />
                <Footer />
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