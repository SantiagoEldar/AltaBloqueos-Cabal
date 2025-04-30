import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './components/ui/layouts/AuthLayout';
import MainLayout from './components/ui/layouts/MainLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import BloqueoTarjetas from './pages/BloqueoTarjetas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        } />
        <Route path="/home" element={
          <AuthLayout>
            <Home />
          </AuthLayout>
        } />
        <Route path="/bloqueo-tarjetas" element={
          <MainLayout>
            <BloqueoTarjetas />
          </MainLayout>
        } />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
