
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Point from './pages/Point'
import Patient from './pages/Patient'
import DoctorList from './pages/DoctorList';
import DoctorDetails from './pages/DoctorDetails'
import DoctorAllSlot from './pages/DoctorAllSlot'
import PatientList from './pages/PatientList'

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
        <Route path='/doctorDetails' element={<DoctorDetails/>} />
        <Route path='/doctorSlot' element={<DoctorAllSlot/>} />
        <Route path='/patientList' element={<PatientList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
