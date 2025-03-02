const { default: mongoose } = require("mongoose")

const db=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB CONNECTED....")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports=db