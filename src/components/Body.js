import { useEffect, useState } from "react";
import resList from "../utils/resData.js";
import RestaurantCard from "./RestaurantCard.js";
import { SWIGGY_URL } from "../utils/constant.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Use Effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    const cards = json.data.cards;
    for (let i = 0; i < cards.length; i++) {
      var card = cards[i].card.card;
      if (listOfRestaurant != null && card?.id == "restaurant_grid_listing") {
        console.log(card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(card?.gridElements?.infoWithStyle?.restaurants);
      }
    }
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log("The length is " + e.target.length);
              if (e.target.value.length === 0)
                setfilteredRestaurant(listOfRestaurant);
            }}
          ></input>
        </div>
        <button
          className="btn-search"
          onClick={() => {
            console.log("The search text is " + searchText);
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
        <button
          className="btn-filter"
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

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
