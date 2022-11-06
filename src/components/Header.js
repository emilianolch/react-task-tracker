import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/" className="block text-3xl font-medium text-center">
      Task Tracker
    </Link>
  );
};

export default Header;
