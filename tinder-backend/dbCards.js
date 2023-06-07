import mongoose from "mongoose"

const tinderSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

const tinder = mongoose.model("tinders", tinderSchema)

export default tinder