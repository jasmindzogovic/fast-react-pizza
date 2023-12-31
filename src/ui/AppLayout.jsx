import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const nav = useNavigation();
  const isLoading = nav.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto,1-fr,auto] ">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
