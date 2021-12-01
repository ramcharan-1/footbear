import Link from 'next/link'
const ItemCard = (props) => {
  return (
    <div className="product-entry border">
      <Link href={props.url} className="prod-img">
        <img
          src={props.src}
          className="img-fluid"
          alt={props.alt}
        />
      </Link>
      <div className="desc">
        <h2>
          <Link href={props.url}>{props.name}</Link>
        </h2>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
};

export default ItemCard;
