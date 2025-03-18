const shortid = require("shortid")

const Url=require("../model/url")

async function shortid2(req,res) {
    const body=req.body
    if(!body.url) return res.status(400).json({error:"url provide"})
    const shortId=shortid.generate()
    const newEntry=await Url.create({
        shortId:shortId,
        redirecturl:body.url,
        visish:[]
    })
    console.log("Saved in DB:", newEntry);
    return res.json({id:shortId})
}

async function views(req,res) {
    const name=req.params.shortId
    const ans= await Url.findOneAndUpdate({
        shortId :name,
    },{
        $push:{
            visish:{
                timestamp:Date.now()
            }
        }
    })
    res.redirect(ans.redirecturl)

}


module.exports ={shortid2,views}