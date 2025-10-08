import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function ContentView() {
	const styles = useStyles();
	return <div className={styles.root}>To be implemented</div>;
}
