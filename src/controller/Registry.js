import db from "../config/database.js"
import { ObjectId } from "mongodb"


export async function postRegistry(req, res){
    const {description, value, type, date}  = req.body
    const {userId} = res.locals.session
    try{
        await db.collection('registries').insertOne({date, description, value, type, userId})
        res.status(201).send()
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

export async function getRegistries(req, res){
    const {userId} = res.locals.session
    try{
        const registries = await db.collection('registries').find({userId}).toArray()

        res.status(200).send(registries)
    }catch(error){
        res.status(500).send(error.message)
    }
}

