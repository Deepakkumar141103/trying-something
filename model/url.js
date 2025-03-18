const mg=require('mongoose')

const urlschema = new mg.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true // iss field ko mandatory kr diya
    },
    redirecturl:{
        type:String,
        required:true
    },
    visish:[{
        timestamp :
        {type:String}
         // unique kr diya har document m email unique hona chaiye

    }]

})



const Url=mg.model("Deepak3",urlschema)
module.exports=Url