import './App.css';
import Navbar from './Header/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './Screen/Homescreen';
import AboutUs from './Screen/AboutPage';
import ResultScreenPage from './Screen/resultScreen';
import SuccessPage from './Screen/successPage';
import LastScreenSection from './Screen/lastSection';
import AboutDeveloper from './Developer/DeveloperDetails';
import ContactUs from './Screen/contactUs';
import ErrorPage from './Screen/errorPage';
import StudentLogin from './Student/Loginstudent';
import RegisterStudent from './Student/RegisterStudent';
import StudentPage from './Student/studentPage'
import AdminLogin from './Admin/LoginAdmin';
import AdminScreen from './Admin/ScreenAdmin';


function App() {
  const admin = localStorage.getItem('admin')
  const student = localStorage.getItem('student')
  return (
    <div className="App">
    
     <Navbar />
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomeScreen/>} ></Route>
       <Route path='/about' element={<AboutUs/>} ></Route>
       <Route path='/results' element={<ResultScreenPage/>} ></Route>
       <Route path='/contact' element={<ContactUs/>} ></Route>
       <Route path='/login' element={<StudentLogin/>} ></Route>
       <Route path='/register' element={<RegisterStudent/>} ></Route>
       <Route path='/developer' element={<AboutDeveloper/>} ></Route>
       {student&&(<Route path='/student' element={<StudentPage/>} />)}
       <Route path='/success' element={<SuccessPage/>} ></Route>
       <Route path='/error' element={<ErrorPage/>} ></Route>
       <Route path='*' element={<ErrorPage/>} ></Route>
       <Route path='/adminlogin' element={<AdminLogin/>}   ></Route>
       {admin&&(<Route path='/admin' element={<AdminScreen/>} ></Route>)}
     </Routes>
     </BrowserRouter>
     <br/><br/>
     <LastScreenSection />
    </div>
  );
}

export default App;
