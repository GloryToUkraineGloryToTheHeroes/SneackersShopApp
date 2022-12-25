import { UPLOAD_PRODUCTS, UPLOAD_SINGLE_PRODUCT } from '../types'

export function uploadProducts() {
    return async dispatch => {
        try{
            const response = await fetch('/product/upload/all', {method: 'GET', body: null, headers: {
                'Content-Type': 'application/json'
            }})

            const data = await response.json()

            //console.log(data.products)

            dispatch({
                type: UPLOAD_PRODUCTS,
                payload: data.products
            })

            return data.products
        }catch(err){
            console.log(err)
        }
    }
}

export function uploadSingleProduct(productId) {
    return async dispatch => {
        try{
            const sendData = {
                productId: productId
            }

            const response = await fetch('/product/upload/single', {method: 'POST', body: JSON.stringify(sendData), headers: {
                'Content-type': 'application/json'
            }})

            const data = await response.json()

            //console.log(data)

            dispatch({
                type: UPLOAD_SINGLE_PRODUCT
            })

            return data
        }catch(err){
            console.log(err)
        }
    }
}