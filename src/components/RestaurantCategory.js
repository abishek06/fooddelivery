import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, key, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow p-4">
        <div
          className="flex justify-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
      </div>
      {showItems && <ItemCards items={data.itemCards}></ItemCards>}
    </div>
  );
};

export default RestaurantCategory;
