import { makeStyles } from "@fluentui/react-components";
import {
	CalendarDataBar16Regular,
	Flag16Regular,
	Home16Regular,
	Person16Regular,
	Star16Regular,
	WeatherSunny16Regular,
} from "@fluentui/react-icons";
import MenuItem from "./MenuItem";

const useStyles = makeStyles({
	list: {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		gap: "1rem",
	},
});

export default function BuiltInMenuItems() {
	const styles = useStyles();
	return (
		<div className={styles.list}>
			<MenuItem title="我的一天" icon={<WeatherSunny16Regular />} />
			<MenuItem title="重要" icon={<Star16Regular />} />
			<MenuItem title="计划内" icon={<CalendarDataBar16Regular />} />
			<MenuItem title="已分配给我" icon={<Person16Regular />} />
			<MenuItem title="标记的电子邮件" icon={<Flag16Regular />} />
			<MenuItem title="任务" icon={<Home16Regular />} />
		</div>
	);
}
