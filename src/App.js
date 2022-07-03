import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppRouting from './AppRouting';
import ErrorPage from './components/errorpage';
import ProductShowcase from './components/productshowcase';
import './app.css'
import Temp from './components/temp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppRouting/>} />
        <Route path="/temp" element={<Temp/>} />
        <Route path="/productshowcase/:imgkey" element={<ProductShowcase/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
