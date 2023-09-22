import './App.css';
import Navbar from './Header/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './Screen/Homescreen';
import AboutUs from './Screen/AboutPage';
import ResultScreenPage from './Screen/resultScreen';


function App() {
  return (
    <div className="App">
    
     <Navbar />
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomeScreen/>} ></Route>
       <Route path='/about' element={<AboutUs/>} ></Route>
       <Route path='/results' element={<ResultScreenPage/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
