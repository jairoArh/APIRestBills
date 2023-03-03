const Bill = require('../models/Bill')
const Customer = require('../models/Customer')

module.exports = {
    index : async (req,res)=>{
        try {
            const result = await Bill.find({})

            return res.status(200).json({"result":true,"data":result})
        } catch (error) {
            return res.status(500).json({"result":false,"error":error}) 
        }
    },
    save : async(req,res)=>{
        const {id} = req.params

        try {
            const customer = await Customer.findById(id)
            if( customer ){
                const bill = new Bill( req.body )

                bill.customer = customer

                console.log(req.body)

                const result = await bill.save()

                console.log('Hechooo')

                customer.bills.push(bill)

                await customer.save()

                console.log("Done")

                return res.status(200).json({"result":true,"data":result})

            }else{
                console.log('Dizque no existe')
                return res.status(500).json({"result":false,"error":"No existe el Cliente"})  
            }
        } catch (error) {
            console.log('Por el lado del error')
            return res.status(500).json({"result":false,"error":error}) 
        }

    }


}
