import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;

  /* const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data; */

  return (
    <div className="res-card">
      <h4>
        <img
          className="imgsrc"
          src={IMAGE_URL + resData.info.cloudinaryImageId}
        ></img>
      </h4>
      <h3>{resData.info.name}</h3>
      {<h4>{resData.info.cuisines.join(", ")}</h4>}
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
