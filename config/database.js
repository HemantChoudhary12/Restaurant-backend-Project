import mongoose from "mongoose"
const db = mongoose.connect('mongodb://localhost:27017/restaurant',{ useNewUrlParser: true } , (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log('connected...')
    }
})
