import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Destinations from './components/destination';
import Header from './components/header';
import Crew from './components/crew';
import Technology from './components/technology';


function App() {
  return (
    
      <HashRouter basename="/space-tourism">
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="crews" element={<Crew />} />
            <Route path="technologies" element={<Technology />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
