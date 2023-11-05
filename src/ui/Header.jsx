import { memo } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza</Link>
      <p>Jasmin</p>
    </header>
  );
}

export default memo(Header);
