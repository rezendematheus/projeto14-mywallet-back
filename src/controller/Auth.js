import db from '../config/database.js'
import bcrypt from 'bcrypt'
import {v4 as uuidV4} from 'uuid'

export async function signUp(req, res) {
    const { name, email, password } = req.body

    try {
        const emailExists = await db.collection('users').findOne({email})
        if(emailExists) return res.status(422).send("Este email já está cadastrado")

        const hashPwd = bcrypt.hashSync(password, 10)

        await db.collection('users').insertOne({ name, email, password: hashPwd })

        res.status(201).send()

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body
    
    try {

        const user = await db.collection('users').findOne({ email });
        if (!user) return res.status(400).send('Usuário ou senha incorretos')

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if(!passwordIsValid) return res.status(400).send("Usuário ou senha inválido")

        const token = uuidV4();
        const sessionInfo = {userId: user._id, name: user.name, token}
        await db.collection('sessions').insertOne(sessionInfo)

        res.send(sessionInfo)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}