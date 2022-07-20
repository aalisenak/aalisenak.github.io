import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import {dark, light} from "./styles/Theme";
import {ThemeProvider} from "styled-components";
import {Suspense} from "react";

import {Route, Routes} from "react-router-dom";
import {CountryDetails} from "./pages/CountryDetails/CountryDetails";
import {useDarkMode} from "./hooks/useDarkMode";
import Home from "./pages/Home/Home";
import Header from './components/Header/Header'
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import Spinner from "./components/Spinner/Spinner";
import {CountriesProvider} from "./context/countries-service";

export const App: React.FC = () => {




    const [theme, toggleTheme] = useDarkMode()
    return (
        <CountriesProvider>
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <GlobalStyles/>
                <Header toggleTheme={toggleTheme} theme={theme}/>
                <ErrorBoundary fallback={<ErrorFallback/>}>
                    <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/:code' element={<CountryDetails/>}/>
                    </Routes>
                    </Suspense>
                </ErrorBoundary>
            </ThemeProvider>
        </CountriesProvider>
    );
}