import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diagnostic from './pages/diagnostic';
import Chat from './pages/chat';
import Parametres from './pages/parametres';
import Médecin from './pages/médecin';
import Nopage from './pages/Nopage';
import Header from './pages/components/Header';
import Anemie from './pages/components/anemies/anemie';
import Patient from './pages/components/patient/Patient';
import Drépanocytose from './pages/components/drépanocytose/drépanocytose';
import Paludisme from './pages/components/paludisme/paludisme';
import GlobalStyle from './Global';

// Récupération de l'élément root dans le HTML
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>
          <GlobalStyle/>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Diagnostic" element={<Diagnostic />}>
                <Route path="Paludisme" element={<Paludisme />} />
                <Route path="Drépanocytose" element={<Drépanocytose />} />
                <Route path="Anemies" element={<Anemie />} />
                </Route>
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Parametres" element={<Parametres />} />
                <Route path="/Médecin" element={<Médecin />}>
                <Route path="Patient" element={<Patient />} />
                </Route>
                <Route path="*" element={<Nopage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);