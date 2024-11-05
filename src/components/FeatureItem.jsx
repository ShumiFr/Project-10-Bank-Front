/* eslint-disable react/prop-types */

const FeatureItem = (props) => {
  return (
    <div className="feature-item">
      <img
        className="feature-item__icon"
        src={`/src/assets/${props.name}.png`}
        alt={`${props.name} icon`}
      />
      <h3 className="feature-item__title">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default FeatureItem;
