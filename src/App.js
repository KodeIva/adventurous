import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CityBreaks from './pages/CityBreaks';
import Holidays from './pages/Holidays';
import Articles from './pages/Articles';
import Footer from './components/Footer';
import ScrollToTop from 'react-scroll-to-top';

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
      <ScrollToTop smooth style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px'}}/>
      <Footer />
    </BrowserRouter>
   </div> 
  );
}

export default App;
