import { CHECK_USER, CREATE_USER } from '../types'

const storageName = 'userData'

export function createUserToken() {
    return async dispatch => {
        try{
            const response = await fetch('/user/token/create', {method: 'GET', body: null, headers: {
                'Content-Type': 'application/json'
            }})
    
            const data = await response.json()
    
            localStorage.setItem(storageName, JSON.stringify({
                token: data.token,
                userId: data.userId
            }))
    
            dispatch({
                type: CREATE_USER,
                payload: data
            })

            dispatch(checkUserToken())
        }catch(err){
            console.log(err)
        }
    }
}

export function checkUserToken() {
    return async dispatch => {
        try{
            const storageData = JSON.parse(localStorage.getItem(storageName))
            if(storageData){
                //console.log(storageData)
                const sendBody = {
                    storageData
                }

                const response = await fetch('/user/token/check', {method: 'POST', body: JSON.stringify(sendBody), headers: {
                    'Content-Type': 'application/json'
                }})

                const data = await response.json()

                if(!data){
                    localStorage.removeItem(storageName)
                    console.log('remove')
                    dispatch(createUserToken())
                }else{
                    //console.log(data)
                    //console.log('//////')

                    localStorage.setItem(storageName, JSON.stringify({
                        token: data.token,
                        userId: data.userId
                    }))
                }

                dispatch({
                    type: CHECK_USER,
                    payload: storageData
                })
            }else{
                dispatch(createUserToken())
            }

        }catch(err){
            console.log(err)
        }
    }
}

export function addProduct() {
    return async dispatch => {
        try{
            const storageData = JSON.parse(localStorage.getItem(storageName))
            
            if(storageData){
                const sendBody = {
                    storageData
                }

                const response = await fetch('/user/product/add', {method: 'POST', body: JSON.stringify(sendBody), headers: {
                    'Content-Type': 'application/json'
                }})

                const data = await response.json()
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
    }
}