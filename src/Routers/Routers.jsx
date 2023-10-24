import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import ProductDetails from '../Pages/ProductDetails'
import Shop from '../Pages/Shop'
import Signup from '../Pages/Signup'

const Routers = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='productdetails' element={<ProductDetails/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default Routers