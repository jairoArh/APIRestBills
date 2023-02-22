const Customer = require('../models/Customer')

module.exports = {
    index : async(req,res)=>{
        try{
            const data = await Customer.find({})

            return res.status(200).json({"result":true,"data":data})
        }catch(err){
            return res.status(500).json({"result":false,"error":err})
        }
        
    },
    save : async(req,res)=>{
        const customer = new Customer(req.body)

        try{
            const data = await customer.save()

            return res.status(200).json({"result":true,"data":data})
        }catch(err){
            return res.status(500).json({"result":false,"error":err})
        }
    }
}