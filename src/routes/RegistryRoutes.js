import { postRegistry, getRegistries} from "../controller/Registry.js";
import { Router } from "express";
import { regSchema } from "../model/RegSchema.js"
import { validateSchema } from "../middlewares/ValidateSchema.js"
import { userAuth } from "../middlewares/UserAuth.js";

const RegistryRouter = Router()

RegistryRouter.post("/new-registry", userAuth, validateSchema(regSchema), postRegistry)

RegistryRouter.get("/registries", userAuth, getRegistries)


export default RegistryRouter