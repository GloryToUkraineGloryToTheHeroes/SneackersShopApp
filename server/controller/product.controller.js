const Product = require('../schemes/product.schemes/Product')

class ProductController{
    async uploadProducts(req, res, next){
        try{
            const products = await Product.find({})

            return res.json({products})
        }catch(err){
            console.log(err)
            next(err)
        }
    }

    async uploadSingleProduct(req, res, next){
        try{
            const {productId} = await req.body

            const singleProduct = await Product.findById(productId)

            return res.json(singleProduct)
        }catch(err){
            console.log(err)
            next(err)
        }
    }
/*
    async uploadSomeManufacturers(req, res, next){
        try{
            const {manufacturers} = await req.body
            
            return res.json(manufacturers)
        }catch(err){
            console.log(err)
            next(err)
        }
    }
*/
}

module.exports = new ProductController()