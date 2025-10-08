import { Input, makeStyles } from "@fluentui/react-components";
import { Search16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
});

export default function SearchBoxView() {
	const styles = useStyles();
	return (
		<Input
			placeholder="Search"
			contentBefore={null}
			type="text"
			role="search"
			contentAfter={<Search16Regular />}
			className={styles.root}
		/>
	);
}
