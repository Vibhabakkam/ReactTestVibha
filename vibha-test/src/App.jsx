
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import SingleProductPage from './Component/SingleProductPage';
import Cart from './Component/cart';
import Question from './Component/question';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route excat path='/' element={<Home/>} />
       <Route excat path='/home/:id' element={<SingleProductPage/>}/>
       <Route excat path='/register' element={<Register/>} />
       <Route excat path='/login' element={<Login/>}/> 
       <Route excat path='/cart' element={<Cart/>}/> 
       <Route excat path='/question' element={<Question/>}/> 
       </Routes>
    </div>
  );
}

export default App;
