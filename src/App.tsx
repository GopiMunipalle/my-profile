import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home/index.tsx'
import About from './components/Experience/index.tsx';
import Experience from './components/Experience/index.tsx';
import Projects from './components/Projects/index.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
