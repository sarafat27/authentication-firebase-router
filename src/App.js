import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header';
import Register from './Components/Register/Register';
import Products from './Components/Products/Products';
import Orders from './Components/Orders/Orders';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequiredAuth>
          <Products></Products>
        </RequiredAuth>}>
        </Route>
        <Route path="/orders" element={<RequiredAuth>
          <Orders></Orders>
        </RequiredAuth>}>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
