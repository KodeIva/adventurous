import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CityBreaks from './components/CityBreaks';
import Holidays from './components/Holidays';
import Articles from './components/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/holidays' element={<Holidays/>} />
        <Route path='/city-breaks' element={<CityBreaks/>} />
        <Route path='/articles' element={<Articles/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
