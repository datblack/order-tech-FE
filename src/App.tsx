import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout from './Layout';
import ErrorSystem from './pages/ErrorSystem';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

function App() {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <>
            {matches ? (
                <ErrorSystem />
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                        </Route>
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;
