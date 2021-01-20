import Home from './pages/Home'
import Charts from './pages/Charts'
import Stats from './pages/Stats'
import './index.css'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/global';
import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom"

const App = () => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path="/chart/:id">
                        <Charts />
                    </Route>
                    <Route path="/stats/:id">
                        <Stats />
                    </Route>
                    <Route path="/">
                        <Home toggleTheme={toggleTheme} theme={theme}/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider >
    )

}

export default App