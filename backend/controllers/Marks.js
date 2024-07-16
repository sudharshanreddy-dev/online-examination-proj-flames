
const Result = require('../models/result');




const getMarks = async (req,res)=>{
    const email = req.query.user;
    const user = await Result.findOne({email:email});
    try {
        const data = await user.tests;

        return res.json(data);
    }catch (e) {
        console.log(e);
    }

}



module.exports = {getMarks}