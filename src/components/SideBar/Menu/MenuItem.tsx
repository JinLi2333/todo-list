import { makeStyles } from "@fluentui/react-components";
import type { JSX } from "react";

type MenuItemProps = {
	title: string;
	icon: JSX.Element;
};

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "1rem",
	},
});

export default function MenuItem(props: MenuItemProps) {
	const styles = useStyles();

	return (
		<div className={styles.root}>
			{props.icon}
			{props.title}
		</div>
	);
}
