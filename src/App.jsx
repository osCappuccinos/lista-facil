import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./ui/pages/HomePage";
import LoginPage from "./ui/pages/LoginPage";
import NewListPage from "./ui/pages/ListPage";
import RegisterPage from "./ui/pages/RegisterPage";
import WelcomePage from "./ui/pages/WelcomePage";
import ProfilePage from './ui/pages/ProfilePage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list/:id" element={<NewListPage />} />
        <Route path="/new-list" element={<NewListPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;