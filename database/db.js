const mongoose=require('mongoose');
console.log('Connecting to MongoDB with URL:', process.env.MONGO_URL);
const Connect = mongoose.connect(process.env.MONGO_URL)
   .catch((error)=>{
      console.log('Mongodb connection failed:', error.message);
   });

const connection = mongoose.connection;

connection.on('connected',()=>{
   console.log('Mongodb is connected');
})
connection.on('error',(error)=>{
   console.log('Mongodb is not connected',error);

})

module.exports=mongoose;