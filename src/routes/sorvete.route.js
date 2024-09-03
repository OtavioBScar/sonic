import { Router } from "express";
import SorveteController from "../controllers/sorvete.controller.js";

const route = Router()

route.get('/', SorveteController.getAll)
route.get('/:id', SorveteController.getUnique)
route.post('/', SorveteController.create)
route.put('/:id', SorveteController.update)
route.delete('/:id', SorveteController.delete)

export default route