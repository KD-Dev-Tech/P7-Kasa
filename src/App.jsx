import Header from './Header';  
import Home from './components/pages/Home';
import About from './components/pages/About';    
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Error404 from './components/pages/Error404';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/error404" element={<Error404 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App; 
