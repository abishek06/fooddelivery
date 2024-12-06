import { useSelector, useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constant.js";
import { deleteItems } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cart items", cartItems);

  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(deleteItems());
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          className="p-2 mx-2 my-2 bg-black items-center text-white rounded-lg"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 mx-auto my-5 shadow p-4">
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <img className="w-20" src={IMAGE_URL + item.card.info.imageId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
