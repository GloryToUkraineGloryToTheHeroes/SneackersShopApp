import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { uploadSingleProduct } from '../redux/actions/product.actions'
import { addProduct } from '../redux/actions/user.actions'
import defaultImage from '../assets/photos/default.jpg'

const SingleProductPage = ({uploadSingleProduct, addProduct}) => {
    const [product, setProduct] = React.useState({})

    const paramsId = useParams().id

    const setProductFunction = React.useCallback(async paramsProductId => {
        const data = await uploadSingleProduct(paramsProductId)
        setProduct(data)
    }, [uploadSingleProduct])

    React.useEffect(() => {
        setProductFunction(paramsId)
    }, [setProductFunction, paramsId])

    const buttonClick = async () => {
        const data = await addProduct()
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <div style={{width: '80%', display: 'flex'}}>
                <div style={{width: '60%'}}>
                    <img alt='default' src={defaultImage} style={{width: '85%'}} />
                </div>
                <div style={{width: '40%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <div style={{width: '80%', marginTop: '10px', display: 'flex'}}>
                        <div style={{width: '50%'}}>
                            <h4>{product.manufacturer}</h4>
                            <h2>{product.name}</h2>
                        </div>
                        <div style={{width: '50%', display: 'flex', justifyContent: 'flex-end'}}>
                            <h4>{product.price}.00$</h4>
                        </div>
                    </div>
                    <div style={{width: '80%', marginTop: '10px', display: 'flex'}}>
                        <div>
                            <button onClick={buttonClick}>Add to bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    uploadSingleProduct, addProduct
}

export default connect(null, mapDispatchToProps)(SingleProductPage)