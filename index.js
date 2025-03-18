const express=require("express")
const router=require("./routes/url")
const app=express()
const {connection} = require("./connection")

connection("mongodb://127.0.0.1:27017/projectwork2").then(() => {
    console.log("monodb connected")
})
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/user", router)
app.use("/",router)


app.listen(8004, () => {console.log('sever started')})