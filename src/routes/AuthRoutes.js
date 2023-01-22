import { signUp, signIn } from "../controller/Auth.js";
import { Router } from "express";
import {SignUpSchema, SignInSchema} from "../model/AuthSchema.js"
import { validateSchema } from "../middlewares/ValidateSchema.js";

const AuthRouter = Router()

AuthRouter.post('/sign-up', validateSchema(SignUpSchema), signUp)
AuthRouter.post('/sign-in', validateSchema(SignInSchema), signIn)

export default AuthRouter