import shopify from "../../shopify.js";

const initRootRouter = (app) => {
  app.use("/api/getproduct", async (req, res, next) => {
    // const session = req.session;
    const session = res.locals.shopify.session;
    // res.json({ message: "Hello data found", session });
    console.log("hello world from back", { session });
    const client = new shopify.api.clients.Graphql({ session });
    const orderData = await client.query({
      data: {
        query: `#graphql
        query Products($first:Int!, $query:String){
        products(first:$first, query:$query){
          edges {
        node {
          id
          handle
          variants(first: 10) {
            edges {
              node {
                sku
              }
            }
          }
        }
        }
        }
        }`,
        variables: {
          first: 10,
          query: `sku:f3*`,
        },
      },
    });
    res.send(orderData.body);
  });
};

export default initRootRouter;
