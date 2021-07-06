const mongoose = require('mongoose')
try{
  mongoose.connect("mongodb+srv://sprintersagile:the-sprinters@motortaxapp.zndgq.mongodb.net/motortaxdatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology : true
})
console.log(
  `MongoDB connected`
);
}
catch(err){
  console.error(`Error: ${err}`)
}
