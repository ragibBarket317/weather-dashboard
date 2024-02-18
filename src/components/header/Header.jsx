import { useState } from "react";
import FavModal from "./FavModal";
import Favourite from "./Favourite";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo></Logo>

        <div className="flex items-center gap-4 relative">
          <Search></Search>
          <Favourite onShow={() => setShowFavModal(!showFavModal)}></Favourite>
          {showFavModal && <FavModal></FavModal>}
        </div>
      </nav>
    </header>
  );
}
