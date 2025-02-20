import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./ui/pages/HomePage";
import LoginPage from "./ui/pages/LoginPage";
import NewListPage from "./ui/pages/ListPage";
import RegisterPage from "./ui/pages/RegisterPage";
import WelcomePage from "./ui/pages/WelcomePage";
import ProfilePage from './ui/pages/ProfilePage';
import GuestPage from './ui/pages/GuestPage';
import TrashPage from './ui/pages/TrashPage';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicRoute from './utils/route/PublicRoute';
import PrivateRoute from './utils/route/PrivateRoute';

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

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
        <Route element={<PublicRoute />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/anonymous" element={<GuestPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/list/:id" element={<NewListPage />} />
          <Route path="/new-list" element={<NewListPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/trash" element={<TrashPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
