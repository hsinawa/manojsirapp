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
import StudentList from './Admin/StudentListAdmin';
import GetAllMessages from './Admin/MessagesGetAll';
import CheckFutureSchedule from './Admin/futureSchedule';
import ToDoList from './Admin/todolist';
import DescriptionStudent from './Student/DescriptionStudent';
import BookTrialClass from './Screen/trialClassScreen';
import TrailClassGetAll from './Admin/trialclassGetAll';
import ReviewScreen from './Screen/reviewScreen';


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
       <Route path='/booktrial' element={<BookTrialClass/>} ></Route>
       <Route path='/register' element={<RegisterStudent/>} ></Route>
       <Route path='/developer' element={<AboutDeveloper/>} ></Route>
       <Route path='/reviews' element={<ReviewScreen/>} ></Route>
       {student&&(<Route path='/student' element={<StudentPage/>} />)}
       <Route path='/success' element={<SuccessPage/>} ></Route>
       <Route path='/error' element={<ErrorPage/>} ></Route>
       <Route path='*' element={<ErrorPage/>} ></Route>
       <Route path='/adminlogin' element={<AdminLogin/>}   ></Route>
       {admin&&(<Route path='/admin' element={<AdminScreen/>} ></Route>)}
       {admin&&(<Route path={`/studentdescription/:studentid`} element={<DescriptionStudent/>} ></Route>)}
       {admin&&(<Route path='/admin/studentlist' element={<StudentList/>} ></Route>)}
       {admin&&(<Route path='/admin/messages' element={<GetAllMessages/>} ></Route>)}
       {admin&&(<Route path='/admin/schedule' element={<ToDoList/>} ></Route>)}
       {admin&&(<Route path='/admin/trialclass' element={<TrailClassGetAll/>} ></Route>)}
       {admin&&(<Route path='/admin/futureschedule' element={<CheckFutureSchedule/>} ></Route>)}
     </Routes>
     </BrowserRouter>
     <br/><br/>
     <LastScreenSection />
    </div>
  );
}

export default App;
