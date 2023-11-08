import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const { cart } = useSelector((store) => store.cart);

  const price = cart
    .map((item) => item.unitPrice)
    .reduce((cur, acc) => cur + acc, 0);

  const count = cart.length;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{count} pizzas</span>
        <span>{`$${price}`}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default memo(CartOverview);
