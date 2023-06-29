
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Point from './pages/Point'
import Patient from './pages/Patient'
import DoctorList from './pages/DoctorList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/patient' element={<Patient />} />
        <Route path='/point' element={<Point />} />
        <Route path='/doctorList' element={<DoctorList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
