import { Link } from "react-router-dom";

export { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img
          className="w-56"
          alt="food ordering app"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5d91e7175170243.64b5676495fdf.jpg"
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to={"/"}> Home </Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}> About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
