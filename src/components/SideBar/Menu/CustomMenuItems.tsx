import { makeStyles } from "@fluentui/react-components";
import { Star16Regular } from "@fluentui/react-icons";
import MenuItem from "./MenuItem";

const useStyles = makeStyles({
	list: {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		gap: "1rem",
	},
});

export default function CustomMenuItems() {
	const styles = useStyles();
	return (
		<div className={styles.list}>
			<MenuItem title="项目" icon={<Star16Regular />} />
			<MenuItem title="项目" icon={<Star16Regular />} />
		</div>
	);
}
