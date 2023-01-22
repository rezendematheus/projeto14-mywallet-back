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

export async function signIn(req, res) {
    const { email, password } = req.body

    try {

        const user = db.collection('user').findOne({ email });
        if (!user) return res.status(400).send('Usuário ou senha incorretos')

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if(!passwordIsValid) return res.status(400).send("Usuário ou senha inválido")

        const token = uuidV4();

        await db.collection('sessions').insertOne({ userId: user._id, token })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}