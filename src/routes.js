
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import NuevoVideo from 'pages/NuevoVideo';
import { SearchProvider } from 'contexts/dataContext';

function AppRoutes() {


    return (
        <BrowserRouter>
            <SearchProvider>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nuevo-video" element={<NuevoVideo/>} />
                </Routes>
            </SearchProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;

