const timeConverter = (timeStamp) => {
  let time = new Date(timeStamp * 1000);

  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    day: time.getDate(),
    date: time.getDate(),
    hour: time.getHours() < 13 ? time.getHours() : time.getHours() - 12,
    minutes:
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(),
    seconds: time.getSeconds(),
    phase: time.getHours() < 12 ? "AM" : "PM",
  };
};

export default timeConverter;
