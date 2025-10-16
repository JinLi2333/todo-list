import {
  CalendarDataBar20Regular,
  Flag20Regular,
  Home20Regular,
  Person20Regular,
  Star20Regular,
  TextBulletList20Regular,
  WeatherSunny20Regular,
} from "@fluentui/react-icons";
import type { JSX } from "react";

export const IconMap: Record<number, JSX.Element> = {
  0: <TextBulletList20Regular />,
  1: <WeatherSunny20Regular />,
  2: <Star20Regular />,
  3: <CalendarDataBar20Regular />,
  4: <Person20Regular />,
  5: <Flag20Regular />,
  6: <Home20Regular />,
};

export function getListIcon(iconId: number) {
  return IconMap[iconId] || <TextBulletList20Regular />;
}
