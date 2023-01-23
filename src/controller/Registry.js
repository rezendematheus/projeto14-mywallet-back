import db from "../config/database.js"
import { ObjectId } from "mongodb"


export async function postRegistry(req, res){
    const {description, value, type}  = req.body
    const {userId} = res.locals.session
    try{
        db.collection('registries').insertOne({description, value, type, userId})

        res.status(201).send()
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

export async function getRegistries(req, res){
    const {userId} = res.locals.session
    try{
        const incomes = db.collection('registries').find({_id:ObjectId(userId)}).toArray()

        res.status(200).send(incomes)
    }catch(error){
        res.status(500).send(error.message)
    }
}

