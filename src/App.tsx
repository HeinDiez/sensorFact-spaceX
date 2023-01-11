import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider } from '@apollo/client';
import client from './services/apollo';

//Lazy loading component and only loading when needed on screen.
const ThemeCustomization = React.lazy(() => import('./themes'));
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Launches = React.lazy(() => import('./components/Launches/Launches'));
const LauncheDetail = React.lazy(() => import('./components/Launches/LaunchDetail'));
const PageNotFound = React.lazy(() => import('./components/Error/404'));

function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
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
            </ApolloProvider>
        </BrowserRouter>
     
       
    );
}

export default App;
