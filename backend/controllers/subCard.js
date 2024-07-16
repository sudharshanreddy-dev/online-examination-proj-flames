const {connection} = require("mongoose");


const testData = async(req,res)=>{
    try{
        let data = await connection.collection('cse');
        data = await data.find().toArray();
        return res.json(data);

    }catch (e) {
        console.log(e);
    }
}

module.exports= {testData}



// const {connection} = require("mongoose");
//
//
// const getCse = async (req, res) => {
//     try {
//         const cse = await connection.collection('cse');
//         const data = await cse.find().toArray();
//         console.log(data);
//         return res.json(data);
//     } catch (e) {
//         console.log(e);
//     }
// };
//
//
//
// getQuestions = async (req,res)=>{
//     try {
//         const {cId} = req.params;
//         const questions = await connection.collection('cse');
//         const data = await questions.find({cId}).toArray();
//         return res.json(data);
//     } catch (e) {
//         console.log(e);
//     }
// }
//
//
//
//
// module.exports= {getCse}