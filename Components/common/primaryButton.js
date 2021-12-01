const PrimaryButton = (props) => {
  return (
    <p >
      <a href={props.url} className="btn btn-primary btn-lg">
        {props.title}
      </a>
    </p>
  );
};

export default PrimaryButton;
