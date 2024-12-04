import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL, IMAGE_URL } from "../utils/constant.js";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStopwatch,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurant, menuItems] = useRestaurantMenu(resId);

  console.log(menuItems);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="m-auto w-4/5 flex justify-evenly items-center gap-5">
        <div>
          <img
            className="w-56"
            src={IMAGE_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
        </div>
        <div className="w-1/3">
          <div className="text-3xl pb-2">{restaurant?.name}</div>
          <div className="text-xl pb-2">{restaurant?.cuisines.join(",")}</div>
          <div className="pb-2">{restaurant?.locality}</div>
          <div className="flex gap-5">
            <div>
              <FontAwesomeIcon icon={faStar} /> {restaurant?.avgRatingString}
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faStopwatch} />{" "}
              {restaurant?.sla?.slaString}
            </div>
            <div>
              <FontAwesomeIcon icon={faMoneyBill} /> {restaurant?.costForTwoMsg}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <span className="font-semibold"> Recommended: </span> {menuItems.length}{" "}
        ITEMS
      </div>
      <div className="menu-items-list">
        {menuItems.map((item) => (
          <div
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            key={item?.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.name}</span>
                <span>
                  - ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">Category : {item.category}</p>
              <p className="text-xs">Description : {item?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                  Add +
                </button>
              </div>
              <img
                src={IMAGE_URL + item?.imageId}
                alt={item?.name}
                className="w-56"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
