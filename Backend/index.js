import express from 'express'
import mongoose from 'mongoose'
const app = express();

mongoose.connect('mongodb+srv://Sandeepbay:joFSLlFluTpUaJhX@cluster0.aieufnm.mongodb.net/BlogApp?retryWrites=true&w=majority')
.then(() => app.listen(3000))
.then(() => console.log("Connected the database and Server 300 Started"))
.catch((err) => console.log(err))
