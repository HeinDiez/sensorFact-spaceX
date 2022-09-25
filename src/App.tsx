import React from 'react';

import ThemeCustomization from './themes';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Launches from './components/Launches/Launches';
import LauncheDetail from './components/Launches/LaunchDetail';
import PageNotFound from './components/Error/404';

function App() {
    return (
        <ThemeCustomization>
            <div className="bg-royal">
                <Header />
                <Routes>
                    <Route index element={<Launches />} />
                    <Route path="/launch/:id" element={<LauncheDetail />} />
                    <Route element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </ThemeCustomization>
    );
}

export default App;
