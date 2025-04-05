import { Divider } from "./common/Divider";
import { FavioriteTaskGroup } from "./FavoriteTaskGroup";
import { SearchBar } from "./SearchBar";
import { SideMenuFooter } from "./SideMenuFooter";
import { UserBox } from "./UserBox";
import { UserDefinedTaskGroup } from "./UserDefinedTaskGroup";

const SideMenu = () => {
  return (
    <div>
      <UserBox />
      <SearchBar />
      <FavioriteTaskGroup />
      <Divider />
      <UserDefinedTaskGroup />
      <SideMenuFooter />
    </div>
  );
};

export { SideMenu };
