import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Login from './pages/Login'
import Makeup from './pages/Makeup'
import OrderSuccessfull from './pages/OrderSuccessfull'
import PageNotFound from './pages/PageNotFound'
import PaymentForm from './pages/PaymentForm'
import PrivateRoute from './pages/PrivateRoute'
import Rewards from './pages/Rewards'
import SanitizingCare from './pages/SanitizingCare'
import Shampoo from './pages/Shampoo'
import SingleProductPage from './pages/SingleProductPage'
import SkinCare from './pages/SkinCare'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/makeup' element={
             <PrivateRoute>
           <Makeup/>
          </PrivateRoute>
        
        }/>
        <Route path='/haircare' element={

        <PrivateRoute>

        <Shampoo/>
        </PrivateRoute>

        }/>
        <Route path='/skincare' element={
        <PrivateRoute>

        <SkinCare/>
        </PrivateRoute>

        }/>
        <Route path='/sanitizingcare' element={
         <PrivateRoute>

        <SanitizingCare/>
         </PrivateRoute>
        }/>
        <Route path='/collection' element={
          <PrivateRoute>
        <Collection/>
        </PrivateRoute>
        }/>
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path='/myglamstudio' element={<h1>home</h1>}/>
        <Route path='/offers' element={<h1>home</h1>}/>
        <Route path='/payementform' element={<PaymentForm/>}/>
        <Route path='/ordersuccessfull' element={<OrderSuccessfull/>}/>
        <Route path='/singleproductpage/:id' element={
          <PrivateRoute>
        <SingleProductPage/>
        </PrivateRoute>
        }/>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login/>} />
    </Routes>
      
    </div>
  )
}

export default AllRoutes
