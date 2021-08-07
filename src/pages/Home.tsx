import { Paper, Grid } from '@material-ui/core';

const Home = () => {
    return (
        <Paper
            square
            style={{
                minHeight: 'calc(100vh - 80px)',
                transition: 'background 0.3s ease',
            }}
        >
            <Grid>Home</Grid>
        </Paper>
    );
};

export default Home;
