import React, { Suspense } from 'react';

import ThemeCustomization from './themes';
import { Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const Header = React.lazy(() => import('./components/Header/Header'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Launches = React.lazy(() => import('./components/Launches/Launches'));
const LauncheDetail = React.lazy(() => import('./components/Launches/LaunchDetail'));
const PageNotFound = React.lazy(() => import('./components/Error/404'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeCustomization>
                <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }} maxSnack={3} autoHideDuration={5000}>
                    <div className="bg-royal">
                        <Header />
                        <div className=''>
                            <Routes>
                                <Route index element={<Launches />} />
                                <Route path="/launch/:id" element={<LauncheDetail />} />
                                <Route element={<PageNotFound />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </SnackbarProvider>
            </ThemeCustomization>
        </Suspense>
    );
}

export default App;
