import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'

export const useRouter = () => {
    return(
        <Routes>
            <Route navbar='true' path='/main' element={<MainPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product/:id' element={<SingleProductPage />} />
            <Route path='*' element={<Navigate to='/main' />} />
        </Routes>
    )
}