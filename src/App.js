import Home from './Home'
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom"

const App = () => {

        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/test">
                            <p>Test</p>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </>
        )
   
}

export default App