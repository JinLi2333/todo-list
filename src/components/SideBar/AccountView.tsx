import { Avatar, Label, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  },
  accountInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
});

export default function AccountView() {
  const styles = useStyles();

  const accountInfo = {
    name: "邓梦婷",
    email: "ting930@outlook.com",
  };

  return (
    <div className={styles.root}>
      <Avatar name="User" size={40} />
      <div className={styles.accountInfo}>
        <Label weight="semibold">{accountInfo.name}</Label>
        <Label weight="regular">{accountInfo.email}</Label>
      </div>
    </div>
  );
}
