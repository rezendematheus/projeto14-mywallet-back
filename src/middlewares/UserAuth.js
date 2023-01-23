import db from "../config/database.js";

export async function userAuth(req, res, next){
        
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "")
        
        if(!token) return res.status(422).send("Missing token")
        
    try{
        const session = await db.collection('sessions').findOne({token: token})

        if(!session) res.status(401).send("Invalid token")

        res.locals.session = session

        next();
    }catch(error){
        return res.status(500).send(error.message)
    }
}                                                           