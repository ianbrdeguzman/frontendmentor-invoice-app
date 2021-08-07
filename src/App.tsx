import { useMemo } from 'react';
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header/Header';
import { useAppSelector } from './redux/slices/themeHook';

const App = () => {
    const { darkMode } = useAppSelector((state) => state.theme);
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
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
                    <Route path='/invoice' component={Invoice} />
                    <Route path='/*' component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
