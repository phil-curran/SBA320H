const tempConverter = (temp) => {
  let a = temp - 273.05;
  let b = a * 1.8;
  let c = b + 32;
  let d = Math.floor(c);
  return d;
};

export default tempConverter;
