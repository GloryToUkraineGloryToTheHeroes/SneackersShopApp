const Product = require('../schemes/product.schemes/Product')

class FilterController{
    async uploadManufacturers(req, res, next){
        try{
            const {manufacturers} = await req.body

            const products = await Product.find({manufacturer: manufacturers})
            //console.log(products)

            return res.json(products)
        }catch(err){
            console.log(err)
            next(err)
        }
    }
}

module.exports = new FilterController()