import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "../components/RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, menuItems] = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restaurant === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = restaurant;

  console.log("showIndex", showIndex);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {menuItems.map((menuItem, index) => {
        return (
          <RestaurantCategory
            key={menuItem.title}
            data={menuItem}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
