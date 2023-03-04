import {
  bgDayDesktop,
  bgDayMobile,
  bgDayTable,
  bgNigjtDesktop,
  bgNigjtMobile,
  bgNigjtTable,
  moon,
  sun,
} from "../assets";
import { useWidth } from "./useWidth";

interface UseBackground {
  bg: string;
  icon: string;
  label: string;
  color: string;
  day:boolean
}

export const useBackground = (dateTime: any): UseBackground => {
  const screenWidth = useWidth();
  const dateHour = new Date(dateTime).getHours();
  const between = (value: any, min: any, max: any) => {
    return value >= min && value <= max;
  };

  if (between(dateHour, 6, 19)) {
    if (screenWidth <= 440) {
      return {
        bg: bgDayMobile,
        icon: sun,
        day: true,
        label: "GOOD MORNING",
        color: "rgba(255, 255, 255, 0.75)",
      };
    } else if (screenWidth <= 768) {
      return {
        bg: bgDayTable,
        icon: sun,
        day: true,
        label: "GOOD MORNING",
        color: "rgba(255, 255, 255, 0.75)",
      };
    } else {
      return {
        bg: bgDayDesktop,
        icon: sun,
        day: true,
        label: "GOOD MORNING",
        color: "rgba(255, 255, 255, 0.75)",
      };
    }
  } else {
    if (screenWidth <= 375) {
      return {
        bg: bgNigjtMobile,
        icon: moon,
        day: false,
        label: "GOOD EVENING",
        color: "rgba(0, 0, 0, 0.75)",
      };
    } else if (screenWidth <= 768) {
      return {
        bg: bgNigjtTable,
        icon: moon,
        day: false,
        label: "GOOD EVENING",
        color: "rgba(0, 0, 0, 0.75)",
      };
    } else {
      return {
        bg: bgNigjtDesktop,
        icon: moon,
        day: false,
        label: "GOOD EVENING",
        color: "rgba(0, 0, 0, 0.75)",
      };
    }
  }
};
