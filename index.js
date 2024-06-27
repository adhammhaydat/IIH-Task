// const arr = [
//   { start_date: "2022-01-02", end_date: "2022-01-11", price: 4 },
//   { start_date: "2022-01-03", end_date: "2022-01-13", price: 10 },
//   { start_date: "2022-01-01", end_date: "2022-01-11", price: 3 },
//   { start_date: "2022-01-05", end_date: "2022-01-15", price: 5 },
// ];


const arr = [
  { start_date: "2022-01-03", end_date: "2022-01-12", price: 3 },
  { start_date: "2022-01-15", end_date: "2022-01-22", price: 7 },
  { start_date: "2022-01-04", end_date: "2022-01-11", price: 10 },
  { start_date: "2022-01-01", end_date: "2022-01-19", price: 5 },
];

const findNextLowestDate = (dayDate, array) => {
  const targetDayDate = new Date(dayDate);
  const lowerDates = array.find(
    (item) =>
      new Date(item.end_date) >= targetDayDate &&
      new Date(item.start_date) <= targetDayDate
  );
  return lowerDates;
};

const subtractOneDay = (dateStr) => {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
};


const calculatePrices = (startDate, endDate) => {
  let day = endDate;
  startDate = new Date(startDate);
  endDate = new Date(endDate)
  let finalPrice = 0;
  while (true) {
    if (new Date(day) < startDate) {
      break;
    }
    let interval = findNextLowestDate(day, arr);
    finalPrice += interval.price;
    day = subtractOneDay(day);
  }
  return finalPrice
};

console.log(calculatePrices("2022-01-01", "2022-01-13"));
