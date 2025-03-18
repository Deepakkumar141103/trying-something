const express=require('express')
const router= express.Router()
const {shortid2,views} = require("../controller/user")

router.route("/").post(shortid2)
router.route("/:shortId").get(views)

module.exports=router

