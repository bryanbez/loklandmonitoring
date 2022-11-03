import moment from "moment/moment";

export const splitDatesIntoWeeks = (fromDate, toDate) => {
  let dateFrom = new Date(fromDate).getTime();
  let dateTo = new Date(toDate).getTime();
  let week = 604800000;
  let day = 86400000;
  let allWeeks = [];

  let weeks = (dateTo - dateFrom) / day / 7; // get total of days

  for (let i = 0; i < weeks; i++) {
    allWeeks.push(moment(new Date((dateFrom += week))).format("YYYY-MM-DD"));
  } // push the dates (interval 7 days)

  allWeeks.splice(0, 0, fromDate); // add the fromDate
  allWeeks.splice(-1, 1, toDate); // replace the last date into toDate

  let splitDatesIntoTwo = []; // split the dates into 2 (fromDate and toDate)

  for (let i = 0; i < allWeeks.length; i++) {
    let tempArray;
    tempArray = allWeeks.slice(i, i + 2);
    tempArray[1] = moment(new Date(tempArray[1]).getTime() - day).format(
      "YYYY-MM-DD"
    ); // second day in arr minus one day
    splitDatesIntoTwo.push(tempArray);
    allWeeks.splice(0, 0); // output: ['2022-10-04', '2022-10-11'], ['2022-10-12', '2022-10-18']
  }

  return splitDatesIntoTwo;
};
