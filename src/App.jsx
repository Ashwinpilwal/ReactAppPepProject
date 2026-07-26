import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={ <Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
