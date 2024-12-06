import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "../utils/constant.js";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchData = await fetch(SWIGGY_MENU_URL + resId);
    const json = await fetchData.json();
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find(
          (x) =>
            x &&
            x.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )?.card?.info || null;

    setRestaurantInfo(restaurantData);

    const menuItemsData = json?.data?.cards
      .find((x) => x.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
      ?.filter(
        (x) =>
          x["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setMenuItems(menuItemsData);
  };

  return [restaurant, menuItems];
};

export default useRestaurantMenu;
