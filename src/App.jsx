import React from 'react';
import Header from './components/Header/Header';
import { CssBaseline } from '@mui/material';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import Weather from './components/Weather/Weather';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <CurrencyConverter />
            <Weather />
            <Main />
            <Footer />
        </>
    );
};

export default App;