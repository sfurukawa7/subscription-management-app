import dayjs from "dayjs";

// 昇順にソートするために使用する関数
export const compareTwoDate = (date1: string, date2: string) => {
  const date1Day = dayjs(date1);
  const date2Day = dayjs(date2);

  if (date1Day.isSame(date2Day)) {
    return 0;
  } else if (date1Day.isBefore(date2Day)) {
    return -1;
  } else {
    return 1;
  }
};
