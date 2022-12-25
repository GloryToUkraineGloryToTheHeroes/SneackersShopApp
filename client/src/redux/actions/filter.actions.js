import { ADD_REMOVE_MANUFACTURER, DELETE_MANUFACTURERS, MANUFACTURERS_PRICE_ASCENDING, MANUFACTURERS_PRICE_DESCENDING, UPLOAD_MANUFACTURERS } from '../types'

export function addRemoveManufacturer(manufacturer){
    return {
        type: ADD_REMOVE_MANUFACTURER,
        payload: manufacturer
    }
}

export function deleteManufacturers(){
    return {
        type: DELETE_MANUFACTURERS
    }
}

export function uploadManufacturers(manufacturers){
    return async dispatch => {
        try{
            const sendData = {
                manufacturers
            }

            const response = await fetch('/filter/upload/some/manufactures', {method: 'POST', body: JSON.stringify(sendData), headers: {
                'Content-type': 'application/json'
            }})

            const data = await response.json()

            //console.log(data)

            if(data.length === 0){
                return data
            }

            dispatch({
                type: UPLOAD_MANUFACTURERS,
                payload: data
            })

            return data
        }catch(err){
            console.log(err)
        }
    }
}

export function priceAscending(stateProducts){
    return async dispatch => {
        try{
            const data = stateProducts.sort((a, b) => a.price > b.price ? 1 : -1)

            dispatch({
                type: MANUFACTURERS_PRICE_ASCENDING,
                payload: data
            })

            return data
        }catch(err){
            console.log(err)
        }
    }
}

export function priceDescending(stateProducts){
    return async dispatch => {
        try{
            const data = stateProducts.sort((a, b) => a.price > b.price ? -1 : 1)

            dispatch({
                type: MANUFACTURERS_PRICE_DESCENDING,
                payload: data
            })

            return data
        }catch(err){
            console.log(err)
        }
    }
}
