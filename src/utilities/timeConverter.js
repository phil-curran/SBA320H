const timeConverter = (timeStamp) => {
  let time = new Date(timeStamp * 1000);
  let hour = time.getHours() % 12;
  hour = hour === 0 ? 12 : hour;

  let dayName;
  switch (time.getDay()) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Unknown";
  }

  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDay(),
    date: time.getDate(),
    dayName: dayName,
    hour: hour,
    minutes:
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(),
    seconds: time.getSeconds(),
    phase: time.getHours() < 12 ? "AM" : "PM",
  };
};

export default timeConverter;
