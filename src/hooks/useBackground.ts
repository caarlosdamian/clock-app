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
        label: "GOOD MORNING",
      };
    } else if (screenWidth <= 768) {
      return { bg: bgDayTable, icon: sun, label: "GOOD MORNING" };
    } else {
      return { bg: bgDayDesktop, icon: sun, label: "GOOD MORNING" };
    }
  } else {
    if (screenWidth <= 375) {
      return { bg: bgNigjtMobile, icon: moon, label: "GOOD EVENING" };
    } else if (screenWidth <= 768) {
      return { bg: bgNigjtTable, icon: moon, label: "GOOD EVENING" };
    } else {
      return { bg: bgNigjtDesktop, icon: moon, label: "GOOD EVENING" };
    }
  }
};
