import { memo } from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza</Link>

      <SearchOrder />

      <p>Jasmin</p>
    </header>
  );
}

export default memo(Header);
