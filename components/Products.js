import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    appProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Products() {
  // const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY);
  return (
    <div>
      <p>Products</p>
    </div>
  );
}
