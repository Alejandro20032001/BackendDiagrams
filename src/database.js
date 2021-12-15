import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://root:root@cluster0.yo8sp.mongodb.net/WEBDIAGRAMS?retryWrites=true&w=majority')
.then(db => console.log("Conectado a mongo db"))
.catch(error => console.log(error))
