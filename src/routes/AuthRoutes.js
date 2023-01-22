import { signUp } from "../controller/Auth.js";
import { Router } from "express";
import {SignUpSchema, SignInSchema} from "../model/AuthSchema.js"
import { validateSchema } from "../middlewares/ValidateSchema.js";

const AuthRouter = Router()

AuthRouter.post('/sign-up', validateSchema(SignUpSchema), signUp)

export default AuthRouter