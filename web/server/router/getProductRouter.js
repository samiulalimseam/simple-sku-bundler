import { Router } from "express";
import { getProductController } from "../controller/getProductController.js";
// import { getProductController } from "../controller/getProductController.js";

const getProductRouter = Router();

getProductRouter.route("/").get(getProductController);

export default getProductRouter;
