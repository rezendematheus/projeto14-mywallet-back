import db from '../config/database.js'
import bcrypt from 'bcrypt'
import {v4 as uuidV4} from 'uuid'

export async function signUp(req, res) {
    const { name, email, password } = req.body

    const hashPwd = bcrypt.hashSync(password, 10)

    try {

        await db.collection('users').insertOne({ name, email, password: hashPwd })

        res.send(201).send()

    } catch (err) {
        res.status(500).send(err.message)
    }
}