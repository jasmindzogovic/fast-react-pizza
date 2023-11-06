import { memo } from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default memo(Header);
