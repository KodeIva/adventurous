import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CityBreaks from './components/CityBreaks';
import Holidays from './components/Holidays';
import Articles from './components/Articles';

function App() {
  return (
   <div className='bg-teal-50 h-[100vh]'>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/holidays' element={<Holidays/>} />
        <Route path='/city-breaks' element={<CityBreaks/>} />
        <Route path='/articles' element={<Articles/>} />
      </Routes>
    </BrowserRouter>
   </div> 
  );
}

export default App;
