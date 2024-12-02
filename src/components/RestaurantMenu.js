import { useEffect } from "react";
import { SWIGGY_MENU_URL } from "../utils/constant.js";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    console.log({ SWIGGY_MENU_URL });
    const fetchData = await fetch(SWIGGY_MENU_URL + resId);
    const json = await fetchData.json();

    const restaurantData = json?.data?.cards;

    console.log(restaurantData);
  };

  return (
    <div className="restarurantMenu">
      <h4>This is restaurant menu component</h4>
    </div>
  );
};

export default RestaurantMenu;
