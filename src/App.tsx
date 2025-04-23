import './App.css'
import Home from './components/Home.tsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        <Route path='/projects' element={<Home/>}/>
        <Route path='/contact' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
