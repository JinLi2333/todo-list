import { Input, makeStyles } from "@fluentui/react-components";
import { Search20Regular } from "@fluentui/react-icons";

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
			contentAfter={<Search20Regular />}
			className={styles.root}
		/>
	);
}
