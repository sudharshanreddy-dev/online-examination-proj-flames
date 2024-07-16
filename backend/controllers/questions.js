const {connection} = require("mongoose");




const questions = async (req,res)=>{
    const cid = req.query.cid

    console.log(cid)



    try{
        const collection = await connection.collection('cse')
        const data = await collection.findOne({c_id:cid})
        if(data) {
            const question_data = data.questions
            console.log(data);
            console.log(question_data)
            return res.json(question_data)
        }

    }
    catch (e) {
        console.log(e);
    }

}



module.exports={questions}