const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://luislechuga:Satellite12@highdrone-dq3ra.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URL_MONGO,{useNewUrlParse:true},(err)=>{
    if(!err){
        console.log ('conexion exitosa con Mongo')
    }else{
        console.log(err)
    }
})
const Schema = mongoose.Schema;

const exalumnoSchema = new Schema({
    nombre: String,
    generation :Number,
    carrera: String,
    age: Number,
    current_job: String,
    income: Number,
},{timestamps:true});

const SchoolSchema = new Schema({
    nombre: String,
    graguates:{
        type:[{
            type:mongoose.Schema.types.Object
        }]
    }
}







































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































const Exalumno = mongoose.model ('Exalumno',exalumnoSchema);

module.exports ={
    Exalumno
}
