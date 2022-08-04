import Link from 'next/dist/client/link';
import formatMoney from '../lib/formatMoney';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <div>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
        <Title>
          <Link href={`product/${product.id}`}>{product.name}</Link>
        </Title>
        <PriceTag>{formatMoney(product.price)}</PriceTag>
        <p>{product.description}</p>
        {/* TODO add buttons to delete and edit*/}
      </div>
    </ItemStyles>
  );
}
