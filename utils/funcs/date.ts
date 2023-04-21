import { Dayjs } from "dayjs";

export const formatDate = (d: Date) => {
  var datestring =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);
  return datestring;
};

export const displayDay = (d: Date) => {
  var datestring = `${d.getMonth() + 1}月${d.getDate()}日`;
  return datestring;
};
