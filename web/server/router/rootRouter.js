import getProductRouter from "./getProductRouter.js";

const initRootRouter = (app) => {
  app.use("/api/get-product", getProductRouter);
};

export default initRootRouter;
