import shopify from "../../shopify.js";

// graphql query
const getProductQuery = `#graphql
query Products($first:Int!, $query:String){
  products(first: $first, query: $query) {
    edges {
      node {
        id
        handle
        variants(first: 10) {
          edges {
            node {
              sku
              id
              price
              image {
                src
              }
            }
          }
        }
        featuredImage {
          src
        }
      }
    }
    
  }
}`;

export const getProductController = async (req, res, next) => {
  const session = res.locals.shopify.session;
  const query = req.query.search;
  const client = new shopify.api.clients.Graphql({ session });
  const productsData = await client.query({
    data: {
      query: getProductQuery,
      variables: {
        first: 10,
        query: `sku:${query}*`,
      },
    },
  });
  res.send(productsData.body);
};
