const mongoose = require("mongoose");


const DB = 'mongodb+srv://user-api:task@cluster0.p8t9i.mongodb.net/userDB?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connection Successfull`);
}).catch((err) => console.log(`no connection`));