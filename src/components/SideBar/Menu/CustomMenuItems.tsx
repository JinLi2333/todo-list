import { TextBulletList20Regular } from "@fluentui/react-icons";
import MenuList from "./MenuList";

const mockCustomMenuItems = [
	{
		id: "1",
		title: "项目",
		icon: <TextBulletList20Regular />,
	},
	{
		id: "2",
		title: "项目2",
		icon: <TextBulletList20Regular />,
	},
];

export default function CustomMenuItems() {
	return <MenuList items={mockCustomMenuItems} />;
}
