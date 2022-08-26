import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { clearConfigCache } from 'prettier';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import { SINGLE_ITEM_QUERY } from './SingleProduct';
import Form from './styles/Form';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. we need to get the existing product
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });
  const { inputs, handleChange, resetForm, clearForm } = useForm(data?.Product);

  // 2. we need to get the mutation to update the product
  const [
    updateProduct,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id,

      name: inputs.name,
      price: inputs.price,
      description: inputs.description,
    },
  });
  
  

  // 3. we need a form to handle the updates.

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct();
        console.log(res)
        // submit the input fields to the backend
        // TODO: Handle submit!
        // const res = await createProduct();
        // clearForm();
        // // Go to products page
        // Router.push({
        //   pathname: `/products/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
}
