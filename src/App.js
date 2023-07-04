
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
import UpcomingAppointment from './pages/UpcomingAppointment'
import PatientDetails from './pages/PatientDetails'
import History from './pages/History'
import AllPatient from './pages/AllPatient'
import Excersice from './pages/Excersice'
import ExcersiceList from './pages/ExcersiceList'
import PersonalInformation from './pages/PersonalInformation'
import OperationalInformation from './pages/OperationalInformation'
import ContactInformation from './pages/ContactInformation'
import PatientDetailsForm from './pages/PatientDetailsForm'
import MyAppointment from './pages/MyAppointment'
import Settings from './pages/Settings'
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
        <Route path='/upcomingAppointment' element={<UpcomingAppointment/>}/>
        <Route path='/patientDetails' element={<PatientDetails/>} />
        <Route path='/history' element={<History/>}/>
        <Route path='/allPatient' element={<AllPatient/>}/>
        <Route path='/excersice' element={<Excersice/>}/>
        <Route path='/excersiceList' element={<ExcersiceList />}/>
        <Route path='/personalInformation' element={<PersonalInformation/>}/>
        <Route path='/operationalInformation' element={<OperationalInformation/>}/>
        <Route path='/contactInformation' element={<ContactInformation/>}/>
        <Route path='/patientDetailsForm' element={<PatientDetailsForm/>}/>
        <Route path='/myAppointment' element={<MyAppointment/>}/>
        <Route path='/settings' element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
