import Header from './components/Header';  
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';    
import Logement from './pages/Logement';
import Error404 from './pages/Error404';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="logements/:id" element={<Logement />} />
        </Routes> 
        <Footer />      
    </BrowserRouter>
  );
}
export default App; 
