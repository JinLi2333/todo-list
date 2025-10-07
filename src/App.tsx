import { useToggle } from "@reactuses/core";

export default function App() {
	const [on, toggle] = useToggle(true);
	return (
		<div>
			<div>{on ? "on" : "off"}</div>
			<button type="button" onClick={toggle}>
				toggle
			</button>
			<button type="button" onClick={() => toggle(false)}>
				off
			</button>
			<button type="button" onClick={() => toggle(true)}>
				on
			</button>
		</div>
	);
}
