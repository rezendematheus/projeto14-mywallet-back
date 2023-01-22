import db from '../config/database.js'


export async function singUp(req, res) {
    const { name, email, password } = req.body

    const hashPwd = bcrypt.hashSync(password, 10)

    try {

        await db.collection('users').insertOne({ name, email, password: hashPwd })

        res.send(201).send()

    } catch (err) {
        res.status(500).send(err.message)
    }
}