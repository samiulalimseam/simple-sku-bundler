import shopify from "../../shopify.js";

// graphql query
const getProductQuery = `#graphql
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
}`;

export const getProductController = async (req, res, next) => {
  const session = res.locals.shopify.session;
  console.log(session);
  const client = new shopify.api.clients.Graphql({ session });
  const productsData = await client.query({
    data: {
      query: getProductQuery,
      variables: {
        first: 10,
        query: `sku:f3*`,
      },
    },
  });
  res.send(productsData.body);
};
