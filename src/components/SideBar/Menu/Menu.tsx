import { Divider, makeStyles } from "@fluentui/react-components";
import BuiltInMenuItems from "./BuiltInMenuItems";
import CustomMenuItems from "./CustomMenuItems";
import NewListItem from "./NewListItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  topSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
    width: "100%",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
    width: "100%",
  },
  divider: {
    flexGrow: 0,
    flexShrink: 0,
  },
});

export default function Menu() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.topSection}>
        <BuiltInMenuItems />
        <Divider className={styles.divider} />
        <CustomMenuItems />
      </div>
      <div className={styles.bottomSection}>
        <Divider className={styles.divider} />
        <NewListItem />
      </div>
    </div>
  );
}
