import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
