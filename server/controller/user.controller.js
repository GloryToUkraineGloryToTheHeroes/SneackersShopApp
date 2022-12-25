const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const User = require('../schemes/user.schemes/User')

const secret = 'secret'


class UserController{
    async createToken(req, res, next){
        try{
            const user = new User({products: [], token: null})

            

            const token = jwt.sign(
                {userId: user._id},
                secret,
                {expiresIn: '1h'}
            )

            user.token = token

            await user.save()

            console.log(user)

            return res.json({token, userId: user._id})
        }catch(err){
            console.log(err)
            next(err)
        }
    }

    async checkToken(req, res, next){
        try{
            const {storageData} = await req.body

            try{
                const userData = jwt.verify(storageData.token, secret)

                const user = await User.findById(storageData.userId)

                const token = jwt.sign(
                    {userId: user._id},
                    secret,
                    {expiresIn: '1h'}
                )                

                user.token = token

                await user.save()

                console.log(user)

                return res.json({token: user.token, userId: userData.userId})
            }catch(err){
                const deleteUser = await User.deleteOne({_id: storageData.userId})
                console.log(deleteUser)
                return res.json(null)
            }

        }catch(err){
            console.log(err)
            next(err)
        }
    }

    async addProduct(req, res, next){
        try{
            const {storageData} = await req.body

            return res.json({user: storageData.userId})
        }catch(err){
            console.log(err)
            return res.json(err)
        }
    }
}

module.exports = new UserController()




