import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './Pages/Aboutme/Aboutme';
import Blogs from './Pages/Blogs/Blogs';
import Cheakout from './Pages/CheckOut/Cheakout';
import Home from './Pages/Home/Home/Home';
import OurServices from './Pages/Home/Service/OurServices/OurServices';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/NotFound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<OurServices></OurServices>}></Route>
        <Route path='/about' element={<Aboutme></Aboutme>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/cheakout' element={
          <RequireAuth>
            <Cheakout></Cheakout>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
