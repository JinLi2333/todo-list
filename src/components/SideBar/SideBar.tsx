import { makeStyles } from "@fluentui/react-components";
import AccountView from "./AccountView";
import Menu from "./Menu/Menu";
import SearchBoxView from "./SearchBox";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    flexBasis: "20%",
    height: "100%",
    gap: "1rem",
  },
});

export default function SideBar() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AccountView />
      <SearchBoxView />
      <Menu />
    </div>
  );
}
