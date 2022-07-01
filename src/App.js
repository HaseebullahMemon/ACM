import './App.css';
import {Routes,Route}from 'react-router-dom'
import Home from './page/Home';
import Blog from './page/Blog';
import Team from './page/Team/pages/Teams';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './componets/Navbar';
import Footer from  './componets/Contact/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (<>
  
  
 <Navbar/>

    <Routes>
<Route  path='/' element={<Home/>} />
<Route path='/blog' element={<Blog/>} />
<Route path='/blog/:id' element={<Blog/>} />
<Route path='/team' element={<Team/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
