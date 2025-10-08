import {
	CalendarDataBar20Regular,
	Flag20Regular,
	Home20Regular,
	Person20Regular,
	Star20Regular,
	WeatherSunny20Regular,
} from "@fluentui/react-icons";
import MenuList from "./MenuList";

const builtInMenuItems = [
	{
		id: "1",
		title: "我的一天",
		icon: <WeatherSunny20Regular />,
	},
	{
		id: "2",
		title: "重要",
		icon: <Star20Regular />,
	},
	{
		id: "3",
		title: "计划内",
		icon: <CalendarDataBar20Regular />,
	},
	{
		id: "4",
		title: "已分配给我",
		icon: <Person20Regular />,
	},
	{
		id: "5",
		title: "标记的电子邮件",
		icon: <Flag20Regular />,
	},
	{
		id: "6",
		title: "任务",
		icon: <Home20Regular />,
	},
];

export default function BuiltInMenuItems() {
	return <MenuList items={builtInMenuItems} />;
}
