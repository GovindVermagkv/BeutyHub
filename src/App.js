
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Services from './component/services';
import Ragister from './component/ragister';
import Login from './component/Login';
import Profile from './component/Profile';
import Gallery from './component/Gallery';

function App() {
  
 return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element ={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Services' element={<Services />} />
      <Route path='Gallery' element={<Gallery />} />
      <Route path='Ragister' element={<Ragister />} />
      <Route path='Login' element={<Login />} />
      <Route path='Profile' element={<Profile />} />
    </Route>
  </Routes>
</BrowserRouter>


 )
}

export default App;
