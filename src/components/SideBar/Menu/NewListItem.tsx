import { Label } from "@fluentui/react-components";
import { Add16Regular, CalendarAdd16Regular } from "@fluentui/react-icons";

// 添加样式以实现左对齐和末尾对齐效果
const styles = {
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
};

export default function NewListItem() {
	return (
		<div style={styles.container}>
			<div style={styles.leftSection}>
				<Add16Regular />
				<Label>新建列表</Label>
			</div>
			<CalendarAdd16Regular />
		</div>
	);
}
