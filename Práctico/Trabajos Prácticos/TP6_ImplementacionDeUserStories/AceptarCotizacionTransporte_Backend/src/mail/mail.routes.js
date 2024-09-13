import { Router } from "express";
import { enviarCorreo } from "./mail.controller.js";

const mailRouter = Router();

mailRouter.post("/sendMail", enviarCorreo);

export default mailRouter;