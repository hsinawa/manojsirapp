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



function App() {
  return (
    <div className="App">
    
     <Navbar />
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomeScreen/>} ></Route>
       <Route path='/about' element={<AboutUs/>} ></Route>
       <Route path='/results' element={<ResultScreenPage/>} ></Route>
       <Route path='/success' element={<SuccessPage/>} ></Route>
       <Route path='/contact' element={<ContactUs/>} ></Route>
       <Route path='/developer' element={<AboutDeveloper/>} ></Route>
     </Routes>
     </BrowserRouter>
     <LastScreenSection />
    </div>
  );
}

export default App;
