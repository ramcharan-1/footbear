import PrimaryButton from "./primaryButton";

const FeaturedCard = (props) => {
  return (
    <div className="featured">
      <div
        className="featured-img featured-img-2"
        style={{ backgroundImage: props.img }}
      >
        <h2>{props.title}</h2>
        <PrimaryButton title="Shop now" />
      </div>
    </div>
  );
};

export default FeaturedCard;
