import { useMemo } from 'react';
import Home from './pages/home/Home';
import Invoice from './pages/Invoice';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useThemeSelector } from './redux/slices/themeHook';

const App = () => {
    const { darkMode } = useThemeSelector((state) => state.theme);
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
                },
            }),
        [darkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path='/invoice' component={Invoice} />
                    <Route path='/*' component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
