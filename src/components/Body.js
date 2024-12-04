import { useEffect, useState } from "react";
import resList from "../utils/resData.js";
import RestaurantCard from "./RestaurantCard.js";
import { SWIGGY_URL } from "../utils/constant.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    const cards = json.data.cards;
    for (let i = 0; i < cards.length; i++) {
      var card = cards[i].card.card;
      if (listOfRestaurant != null && card?.id == "restaurant_grid_listing") {
        setListOfRestaurant(card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(card?.gridElements?.infoWithStyle?.restaurants);
      }
    }
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              if (e.target.value.length === 0)
                setfilteredRestaurant(listOfRestaurant);
            }}
          ></input>

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterData = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurant(filterData);
            }}
          >
            Search Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurantmenu/" + restaurant?.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
