import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/movie/:id" element={<h1>place holder</h1>} />
                <Route path="*" element={<h1>404 - Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
