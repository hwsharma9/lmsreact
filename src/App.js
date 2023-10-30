import { Suspense, lazy } from 'react';
import Layout from './Components/layout/Layout';
import { Route, Routes } from 'react-router-dom'
import BootstrapSpinner from './Components/BootstrapSpinner';
import AppState from './Context/App/AppState';
import Lms from './Pages/Lms';


const Home = lazy(() => import('./Pages/Home'));
const PageNotFound = lazy(() => import('./Pages/PageNotFound'));
const UnderConstruction = lazy(() => import('./Pages/UnderConstruction'));

function App() {
    return (
        <>
            <AppState>
                <Routes>
                    {/* Set Layout for Front-End Page */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={(
                            <Suspense fallback={<BootstrapSpinner />}>
                                <Home />
                            </Suspense>
                        )} />
                        <Route path="lms/:page_url" element={(
                            <Suspense fallback={<BootstrapSpinner />}>
                                <Lms />
                            </Suspense>
                        )} />
                        <Route path="pagenotfound" element={(
                            <Suspense fallback={<BootstrapSpinner />}>
                                <PageNotFound />
                            </Suspense>
                        )} />
                        <Route path="underconstruction" element={(
                            <Suspense fallback={<BootstrapSpinner />}>
                                <UnderConstruction />
                            </Suspense>
                        )} />
                        <Route path="*" element={(
                            <Suspense fallback={<BootstrapSpinner />}>
                                <PageNotFound />
                            </Suspense>
                        )} />
                    </Route>
                </Routes>
            </AppState>
        </>
    );
}

export default App;
