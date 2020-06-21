const mongoose=require('mongoose');
const {Schema}=mongoose;
const bcrypt = require('bcryptjs');

const UserSchema= new Schema({
        userName:{type:String,required:true},
        userEmail:{type:Number,required:true},
        password:{type:String,required:true},
        DNI:{type:Number,required:false},
        date: {type:Date, default:Date.now}
});
UserSchema.methods.encryptPassword = async (password) =>{
   const salt= await bcrypt.genSalt(10);
   const hash= bcrypt.hash(password, salt);
   return hash;
};
UserSchema.methods.matchPassword =async function (password){
    return await bcrypt.compare(password, this.password);
}
module.exports=mongoose.model('usuarios', UserSchema);