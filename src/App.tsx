import { useMemo } from 'react';
import Home from './pages/home/Home';
import InvoicePage from './pages/invoice/Invoice';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAppSelector } from './redux/store';

const App = () => {
    const { darkMode } = useAppSelector((state) => state.theme);
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                    background: {
                        paper: darkMode ? '#141625' : '#f8f8fb',
                    },
                },
                typography: {
                    fontFamily: 'Spartan',
                    body2: {
                        fontSize: '12px',
                    },
                },
            }),
        [darkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header />
                <Switch>
                    <Route path='/invoice/:id' component={InvoicePage} />
                    <Route path='/*' component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
