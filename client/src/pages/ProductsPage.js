import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import { ProductComponent } from '../components/ProductComponent'
import { uploadProducts } from '../redux/actions/product.actions'
import defaultImage from '../assets/photos/default.jpg'
import { addRemoveManufacturer, deleteManufacturers, priceAscending, priceDescending, uploadManufacturers } from '../redux/actions/filter.actions'

const ProductPage = ({manufacturers, uploadProducts}) => {
    const [stateProducts, setStateProducts] = React.useState([])
    const [stateProductsManufacturers, setStateProductsManufacturers] = React.useState([])


    const dispatch = useDispatch()

    const suchka = React.useCallback(async () => {
        const data = await uploadProducts()
        data.sort()
        setStateProducts(data)
        const sebek = []
        data.map(elem => sebek.push(elem.manufacturer))
        const kitens = sebek.filter((elem, index) => {
            return sebek.indexOf(elem) === index
        })
        kitens.sort()

        setStateProductsManufacturers(kitens)
    }, [uploadProducts])

    React.useEffect(() => {
        suchka()
    }, [suchka])

    const navigate = useNavigate()

    const navigateToSingleComponent = async productId => {
        try{
            navigate(`/product/${productId}`)
        }catch(err){
            console.log(err)
        }
    }

    const deleteFilterButton = async event => {
        event.preventDefault()
        await suchka()
        dispatch(deleteManufacturers())
    }

    const changeInput = async (elem) => {
        dispatch(addRemoveManufacturer(elem))
    }

    const checkedInput = React.createRef()

    const formSubmit = async event => {
        event.preventDefault()

        const data = await dispatch(uploadManufacturers(manufacturers))

        if(data.length !== 0){
            data.sort()
            setStateProducts(data)
        }else{
            console.log(stateProducts)
        }
    }

    const priceCheckedInput = React.createRef()

    const priceFormSubmit = async event => {
        event.preventDefault()
        if(priceCheckedInput.current[0].checked === true || priceCheckedInput.current[1].checked === true){
            if(priceCheckedInput.current[0].checked === true){
                const data = await dispatch(priceAscending(stateProducts))
                setStateProducts([...data])
                priceCheckedInput.current[0].checked = false
            }else{
                const data = await dispatch(priceDescending(stateProducts))
                setStateProducts([...data])
                priceCheckedInput.current[1].checked = false
            }
        }
    }
    

    return(
        <div className='idiot' style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px'}}>
            <div style={{display: 'flex', width: '90%'}}>
                <div style={{display: 'flex', width: '15%', flexDirection: 'column'}}>
                    <button className='delete-filter-button' onClick={event => {
                        deleteFilterButton(event)
                        stateProductsManufacturers.map(elem => {
                            //console.log(checkedInput.current[stateProductsManufacturers.indexOf(elem)])
                            return checkedInput.current[stateProductsManufacturers.indexOf(elem)].checked = false
                        })
                    }}>Delete filter</button>

                    <div style={{margin: '10px 0'}}>
                        <form style={{width: '100%'}} onSubmit={formSubmit} ref={checkedInput}>
                            
                            {
                                stateProductsManufacturers.map((elem) => (
                                    <div key={stateProductsManufacturers.indexOf(elem)} style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                        <div>{elem}</div>
                                        <div>
                                            <input id={stateProductsManufacturers.indexOf(elem)} type='checkbox' onChange={() => {
                                                changeInput(elem)
                                            }} />
                                        </div>
                                    </div>
                                ))
                            }
                            <button type='submit' className="submit-filter-button">Submit filter</button>
                        </form>
                    </div>

                    <div>
                        <form onSubmit={priceFormSubmit} ref={priceCheckedInput}>
                            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                <div>Price ascending</div>
                                <input type='radio' name='price' id='1' onChange={() => {}} />
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                <div>Price descending</div>
                                <input type='radio' name='price' id='2' onChange={() => {}} />
                            </div>
                            <button type='submit' className="submit-filter-button">Submit filter</button>
                        </form>
                    </div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', width: '80%', marginLeft: '60px'}}>
                    {
                        stateProducts.map(elem => (
                            <div key={elem._id} onClick={() => navigateToSingleComponent(elem._id)} className='main-product-div'>
                                <div>
                                    <img alt='default' src={defaultImage} style={{width: '190px', height: '190px'}} />
                                </div>
                                <h2>{elem.name}</h2>
                                <b>{elem.manufacturer}</b>
                                <b>{elem.price}.00$</b>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    manufacturers: state.filter.manufacturers
})

const mapDispatchToProps = {
    uploadProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)


