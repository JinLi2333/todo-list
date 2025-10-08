import { Button, Label, makeStyles } from "@fluentui/react-components";
import { Add20Regular, CalendarAdd20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	leftSection: {
		display: "flex",
		alignItems: "center",
		gap: "0.5rem",
	},
	button: {
		paddingLeft: "0",
		fontWeight: "400",
	},
});

export default function NewListItem() {
	const styles = useStyles();
	return (
		<div className={styles.container}>
			<div className={styles.leftSection}>
				<Button
					icon={<Add20Regular />}
					appearance="subtle"
					className={styles.button}
				>
					<Label>新建列表</Label>
				</Button>
			</div>
			<Button
				icon={<CalendarAdd20Regular />}
				appearance="subtle"
				className={styles.button}
			/>
		</div>
	);
}
