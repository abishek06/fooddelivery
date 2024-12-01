export { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="imgcontainer">
        <img
          className="logo"
          alt="food ordering app"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5d91e7175170243.64b5676495fdf.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
