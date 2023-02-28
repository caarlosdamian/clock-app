import {
  bgDayDesktop,
  bgDayMobile,
  bgDayTable,
  bgNigjtDesktop,
  bgNigjtMobile,
  bgNigjtTable,
} from "../assets";
import { useWidth } from "./useWidth";

export const useBackground = (dateTime: any) => {
  const screenWidth = useWidth();
  const dateHour = new Date(dateTime).getHours();
  const between = (value: any, min: any, max: any) => {
    return value >= min && value <= max;
  };

  if (between(dateHour, 6, 19)) {
    if (screenWidth <= 440) {
      return bgDayMobile;
    } else if (screenWidth <= 768) {
      return bgDayTable;
    } else {
      return bgDayDesktop;
    }
  } else {
    if (screenWidth <= 375) {
      return bgNigjtMobile;
    } else if (screenWidth <= 768) {
      return bgNigjtTable;
    } else {
      return bgNigjtDesktop;
    }
  }
};
